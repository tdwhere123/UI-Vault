/*	Date
	Date object
	MONTHS are 1-BASED, not 0-BASED (different from Javascript date objects)
================================================== */
import { TLClass } from "../core/TLClass"
import { Language } from "../language/Language"
import TLError from "../core/TLError"

import { mergeData, trim, trace } from "../core/Util"

//
// Class for human dates
//

export const SCALES = [
    // ( name, units_per_tick, flooring function )
    ["millisecond", 1, function(d) {}],
    [
        "second",
        1000,
        function(d) {
            d.setMilliseconds(0);
        }
    ],
    [
        "minute",
        1000 * 60,
        function(d) {
            d.setSeconds(0);
        }
    ],
    [
        "hour",
        1000 * 60 * 60,
        function(d) {
            d.setMinutes(0);
        }
    ],
    [
        "day",
        1000 * 60 * 60 * 24,
        function(d) {
            d.setHours(0);
        }
    ],
    [
        "month",
        1000 * 60 * 60 * 24 * 30,
        function(d) {
            d.setDate(1);
        }
    ],
    [
        "year",
        1000 * 60 * 60 * 24 * 365,
        function(d) {
            d.setMonth(0);
        }
    ],
    [
        "decade",
        1000 * 60 * 60 * 24 * 365 * 10,
        function(d) {
            var real_year = d.getFullYear();
            d.setFullYear(real_year - (real_year % 10));
        }
    ],
    [
        "century",
        1000 * 60 * 60 * 24 * 365 * 100,
        function(d) {
            var real_year = d.getFullYear();
            d.setFullYear(real_year - (real_year % 100));
        }
    ],
    [
        "millennium",
        1000 * 60 * 60 * 24 * 365 * 1000,
        function(d) {
            var real_year = d.getFullYear();
            d.setFullYear(real_year - (real_year % 1000));
        }
    ]
]

// Date parts from highest to lowest precision
const DATE_PARTS = [
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "month",
    "year"
];

const BEST_DATEFORMATS = {
    base: {
        millisecond: "time_short",
        second: "time",
        minute: "time_no_seconds_small_date",
        hour: "time_no_seconds_small_date",
        day: "full",
        month: "month",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "fallback",
        epoch: "fallback",
        era: "fallback",
        eon: "fallback",
        eon2: "fallback"
    },

    short: {
        millisecond: "time_short",
        second: "time_short",
        minute: "time_no_seconds_short",
        hour: "time_no_minutes_short",
        day: "full_short",
        month: "month_short",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "fallback",
        epoch: "fallback",
        era: "fallback",
        eon: "fallback",
        eon2: "fallback"
    }
};

export const TLDate = TLClass.extend({
    // @data = ms, JS Date object, or JS dictionary with date properties
    initialize: function(data, format, format_short) {
        if (typeof data == "number") {
            this.data = {
                format: "yyyy mmmm",
                date_obj: new Date(data)
            };
        } else if (Date == data.constructor) {
            this.data = {
                format: "yyyy mmmm",
                date_obj: data
            };
        } else {
            this.data = JSON.parse(JSON.stringify(data)); // clone don't use by reference.
            this._createDateObj();
        }

        if (data.format && !format) {
            format = data.format
        }
        this._setFormat(format, format_short);
    },

    setDateFormat: function(format) {
        this.data.format = format;
    },
    /**
     * Return a string representation of this date. If this date has been created with a `display_date` property,
     * that value is always returned, regardless of arguments to the method invocation. Otherwise,
     * the given `Language` is asked to create a string representation based on this Date's data, passing through the provided
     * `format` String, or, if that is undefined, this date's default format string.
     * @param {Language} language
     * @param {String} format
     * @returns {String} formattedDate
     */
    getDisplayDate: function(language, format) {
        if (this.data.display_date) {
            return this.data.display_date;
        }
        if (!language) {
            language = Language.fallback;
        }
        if (language.constructor != Language) {
            trace(
                "First argument to getDisplayDate must be type Language"
            );
            language = Language.fallback;
        }

        var format_key = format || this.data.format;
        return language.formatDate(this.data.date_obj, format_key);
    },

    getMillisecond: function() {
        return this.getTime();
    },

    getTime: function() {
        return this.data.date_obj.getTime();
    },

    isBefore: function(other_date) {
        if (!this.data.date_obj.constructor ==
            other_date.data.date_obj.constructor
        ) {
            throw new TLError("date_compare_err"); // but should be able to compare 'cosmological scale' dates once we get to that...
        }
        if ("isBefore" in this.data.date_obj) {
            return this.data.date_obj["isBefore"](
                other_date.data.date_obj
            );
        }
        return this.data.date_obj < other_date.data.date_obj;
    },

    isAfter: function(other_date) {
        if (!this.data.date_obj.constructor ==
            other_date.data.date_obj.constructor
        ) {
            throw new TLError("date_compare_err"); // but should be able to compare 'cosmological scale' dates once we get to that...
        }
        if ("isAfter" in this.data.date_obj) {
            return this.data.date_obj["isAfter"](
                other_date.data.date_obj
            );
        }
        return this.data.date_obj > other_date.data.date_obj;
    },

    // Return a new TLDate which has been 'floored' at the given scale.
    // @scale = string value from SCALES
    floor: function(scale) {
        var d = new Date(this.data.date_obj.getTime());
        for (var i = 0; i < SCALES.length; i++) {
            // for JS dates, we iteratively apply flooring functions
            SCALES[i][2](d);
            if (SCALES[i][0] == scale) return new TLDate(d);
        }

        throw new TLError("invalid_scale_err", scale);
    },

    /*	Private Methods
	================================================== */

    _getDateData: function() {
        var _date = {
            year: 0,
            month: 1, // stupid JS dates
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        };

        // Merge data
        mergeData(_date, this.data);

        // Make strings into numbers
        for (var ix in DATE_PARTS) {
            var x = trim(_date[DATE_PARTS[ix]]);
            if (!x.match(/^-?\d*$/)) {
                throw new TLError(
                    "invalid_date_err",
                    DATE_PARTS[ix] + " = '" + _date[DATE_PARTS[ix]] + "'"
                );
            }

            var parsed = parseInt(_date[DATE_PARTS[ix]]);
            if (isNaN(parsed)) {
                parsed = ix == 4 || ix == 5 ? 1 : 0; // month and day have diff baselines
            }
            _date[DATE_PARTS[ix]] = parsed;
        }

        if (_date.month > 0 && _date.month <= 12) {
            // adjust for JS's weirdness
            _date.month = _date.month - 1;
        }

        return _date;
    },

    _createDateObj: function() {
        var _date = this._getDateData();
        this.data.date_obj = new Date(
            _date.year,
            _date.month,
            _date.day,
            _date.hour,
            _date.minute,
            _date.second,
            _date.millisecond
        );
        if (this.data.date_obj.getFullYear() != _date.year) {
            // Javascript has stupid defaults for two-digit years
            this.data.date_obj.setFullYear(_date.year);
        }
    },

    /*  Find Best Format
     * this may not work with 'cosmologic' dates, or with TLDate if we
     * support constructing them based on JS Date and time
    ================================================== */
    findBestFormat: function(variant) {
        var eval_array = DATE_PARTS,
            format = "";

        for (var i = 0; i < eval_array.length; i++) {
            if (this.data[eval_array[i]]) {
                if (variant) {
                    if (!(variant in BEST_DATEFORMATS)) {
                        variant = "short"; // legacy
                    }
                } else {
                    variant = "base";
                }
                return BEST_DATEFORMATS[variant][eval_array[i]];
            }
        }
        return "";
    },
    _setFormat: function(format, format_short) {
        if (format) {
            this.data.format = format;
        } else if (!this.data.format) {
            this.data.format = this.findBestFormat();
        }

        if (format_short) {
            this.data.format_short = format_short;
        } else if (!this.data.format_short) {
            this.data.format_short = this.findBestFormat(true);
        }
    },
    /**
     * Get the year-only representation of this date. Ticks need this to layout
     * the time axis, and this needs to work isomorphically for TLDate and BigDate 
     * @returns {Number}
     */
    getFullYear: function() {
        return this.data.date_obj.getFullYear()
    }
});

// offer something that can figure out the right date class to return
export function makeDate(data) {
    var date = new TLDate(data);
    if (!isNaN(date.getTime())) {
        return date;
    }
    return new BigDate(data);
}

export const BigYear = TLClass.extend({
    initialize: function(year) {
        this.year = parseInt(year);
        if (isNaN(this.year)) {
            throw new TLError("invalid_year_err", year);
        }
    },

    isBefore: function(that) {
        return this.year < that.year;
    },

    isAfter: function(that) {
        return this.year > that.year;
    },

    getTime: function() {
        return this.year;
    }
});


//
// Class for cosmological dates
//

// cosmo units are years, not millis
const AGE = 1000000;
const EPOCH = AGE * 10;
const ERA = EPOCH * 10;
const EON = ERA * 10;

function Floorer(unit) {
    return function(a_big_year) {
        var year = a_big_year.getTime();
        return new BigYear(Math.floor(year / unit) * unit);
    }
}

// cosmological scales
export const BIG_DATE_SCALES = [ // ( name, units_per_tick, flooring function )
    ['year', 1, new Floorer(1)],
    ['decade', 10, new Floorer(10)],
    ['century', 100, new Floorer(100)],
    ['millennium', 1000, new Floorer(1000)],
    ['age', AGE, new Floorer(AGE)], // 1M years
    ['epoch', EPOCH, new Floorer(EPOCH)], // 10M years
    ['era', ERA, new Floorer(ERA)], // 100M years
    ['eon', EON, new Floorer(EON)] // 1B years
];


// BigDates with years in this range use TLDate (human-scale) formatting.
// Upper bound matches the JS Date maximum year; lower bound is per user
// request ("99,999 BCE to the present").
const HUMAN_SCALE_MIN_YEAR = -99999;
const HUMAN_SCALE_MAX_YEAR = 275759;

export const BigDate = TLDate.extend({
    // @data = BigYear object or JS dictionary with date properties
    initialize: function(data, format, format_short) {
        if (BigYear == data.constructor) {
            this.data = {
                date_obj: data
            };
        } else {
            this.data = JSON.parse(JSON.stringify(data));
            this._createDateObj();
        }

        if (data.format && !format) {
            format = data.format
        }

        this._setFormat(format, format_short);
    },

    // Create date_obj
    _createDateObj: function() {
        var _date = this._getDateData();
        this.data.date_obj = new BigYear(_date.year);
    },

    /**
     * For dates within the human-scale range (HUMAN_SCALE_MIN_YEAR to
     * HUMAN_SCALE_MAX_YEAR), delegate to TLDate formatting so that month
     * names, BCE labels, and other human-readable formats are used instead
     * of the cosmological "X million years ago" strings.
     */
    getDisplayDate: function(language, format) {
        if (this.data.display_date) {
            return this.data.display_date;
        }
        var year = this.data.date_obj.getTime(); // BigYear.getTime() returns the year
        if (year >= HUMAN_SCALE_MIN_YEAR && year <= HUMAN_SCALE_MAX_YEAR) {
            // If constructed from a config dict, this.data.year is present and
            // month/day are preserved.  If constructed from a BigYear directly
            // (e.g. via floor()), only the year is available.
            var tldate_data = (typeof this.data.year !== 'undefined')
                ? this.data
                : { year: year };
            return new TLDate(tldate_data).getDisplayDate(language, format);
        }
        if (!language) {
            language = Language.fallback;
        }
        if (language.constructor != Language) {
            language = Language.fallback;
        }
        var format_key = format || this.data.format;
        return language.formatDate(this.data.date_obj, format_key);
    },

    // Return a new BigDate which has been 'floored' at the given scale.
    // @scale = string value from BIG_DATE_SCALES
    floor: function(scale) {
        for (var i = 0; i < BIG_DATE_SCALES.length; i++) {
            if (BIG_DATE_SCALES[i][0] == scale) {
                var floored = BIG_DATE_SCALES[i][2](this.data.date_obj);
                return new BigDate(floored);
            }
        }

        throw new TLError("invalid_scale_err", scale);
    },
    /**
     * Get the year-only representation of this date. Ticks need this to layout
     * the time axis, and this needs to work isomorphically for TLDate and BigDate 
     * @returns {Number}
     */
    getFullYear: function() {
        return this.data.date_obj.getTime()
    }
});