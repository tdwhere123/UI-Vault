(function(){const proto=EventTarget.prototype,add=proto.addEventListener,remove=proto.removeEventListener;const intervals=new Set(),si=window.setInterval.bind(window),ci=window.clearInterval.bind(window);const listeners=[],timers=new Map(),frames=new Map();let dead=false,closing=false,shutdown=null;const st=window.setTimeout.bind(window),ct=window.clearTimeout.bind(window),rf=window.requestAnimationFrame.bind(window),cf=window.cancelAnimationFrame.bind(window),cap=o=>typeof o==='boolean'?o:!!o?.capture;
proto.addEventListener=function(t,f,o){if(dead)return;if(!listeners.some(x=>x.el===this&&x.t===t&&x.f===f&&x.c===cap(o)))listeners.push({el:this,t,f,o,c:cap(o)});return add.call(this,t,f,o)};proto.removeEventListener=function(t,f,o){const i=listeners.findIndex(x=>x.el===this&&x.t===t&&x.f===f&&x.c===cap(o));if(i>=0)listeners.splice(i,1);return remove.call(this,t,f,o)};
window.setTimeout=(f,t,...a)=>{if(dead)return 0;let id=st(()=>{if(!timers.has(id)||dead)return;timers.delete(id);f(...a)},t);timers.set(id,true);return id};window.clearTimeout=id=>{timers.delete(id);ct(id)};window.requestAnimationFrame=f=>{if(dead)return 0;let id=rf(t=>{if(!frames.has(id)||dead)return;frames.delete(id);f(t)});frames.set(id,true);return id};window.cancelAnimationFrame=id=>{frames.delete(id);cf(id)};
window.setInterval=(fn,ms,...args)=>{if(dead)return 0;let id=si(()=>{if(!dead&&intervals.has(id))fn(...args)},ms);intervals.add(id);return id};window.clearInterval=id=>{intervals.delete(id);ci(id)};function release(){if(dead)return;dead=true;for(const id of intervals)ci(id);intervals.clear();window.setInterval=si;window.clearInterval=ci;for(const x of listeners.splice(0))remove.call(x.el,x.t,x.f,x.o);for(const id of timers.keys())ct(id);timers.clear();for(const id of frames.keys())cf(id);frames.clear();proto.addEventListener=add;proto.removeEventListener=remove;window.setTimeout=st;window.clearTimeout=ct;window.requestAnimationFrame=rf;window.cancelAnimationFrame=cf;delete window.__loopyLifetime}
function close(){if(closing)return;closing=true;if(shutdown)shutdown();else release()}
window.__loopyLifetime={close,release,setShutdown:fn=>{shutdown=fn;if(closing)fn()}};window.addEventListener('pagehide',close);window.addEventListener('atlas:dispose',close);function fail(e){e.preventDefault();close();const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='Editor unavailable. Close and reopen to retry.';document.body.append(p)}window.addEventListener('error',fail);window.addEventListener('unhandledrejection',fail);})();

/*****************************

A miscellaneous collection of reuseable helper methods
that I couldn't be arsed to put into separate classes

*****************************/

Math.TAU = Math.PI*2;

window.HIGHLIGHT_COLOR = "rgba(193, 220, 255, 0.6)";

var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;

var _PADDING = 25;
var _PADDING_BOTTOM = 110;

window.onresize = function(){
	publish("resize");
};

function _createCanvas(){

	var canvasses = document.getElementById("canvasses");
	var canvas = document.createElement("canvas");

	// Dimensions
	var _onResize = function(){
		var width = canvasses.clientWidth;
		var height = canvasses.clientHeight;
		canvas.width = width*2; // retina
		canvas.style.width = width+"px";
		canvas.height = height*2; // retina
		canvas.style.height = height+"px";
	};
	_onResize();

	// Add to body!
	canvasses.appendChild(canvas);

	// subscribe to RESIZE
	subscribe("resize",function(){
		_onResize();
	});

	// Gimme
	return canvas;

}

function _createLabel(message){
	var label = document.createElement("div");
	label.innerHTML = message;
	label.setAttribute("class","component_label");
	return label;
}

function _createButton(label, onclick){
	var button = document.createElement("div");
	button.innerHTML = label;
	button.onclick = onclick;
	button.setAttribute("class","component_button");
	return button;
}

function _createInput(className, textarea){
	var input = textarea ? document.createElement("textarea") : document.createElement("input");
	input.setAttribute("class",className);
	input.addEventListener("keydown",function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	},false); // STOP IT FROM TRIGGERING KEY.js
	return input;
}

function _createNumberInput(onUpdate){

	var self = {};

	// dom!
	self.dom = document.createElement("input");
	self.dom.style.border = "none";
	self.dom.style.width = "40px";
	self.dom.style.padding = "5px";

	self.dom.addEventListener("keydown",function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	},false); // STOP IT FROM TRIGGERING KEY.js

	// on update
	self.dom.onchange = function(){
		var value = parseInt(self.getValue());
		if(isNaN(value)) value=0;
		self.setValue(value);
		onUpdate(value);
	};

	// select on click, yo
	self.dom.onclick = function(){
		self.dom.select();
	};

	// set & get value
	self.getValue = function(){
		return self.dom.value;
	};
	self.setValue = function(num){
		self.dom.value = num;
	};

	// return an OBJECT.
	return self;

}

function _blank(){
	// just a blank function to toss in.
}

function _getTotalOffset(target){
	var bounds = target.getBoundingClientRect();
	return {
		left: bounds.left,
		top: bounds.top
	};
}

function _addMouseEvents(target, onmousedown, onmousemove, onmouseup){

	// WRAP THEM CALLBACKS
	var _onmousedown = function(event){
		var _fakeEvent = _onmousemove(event);
		onmousedown(_fakeEvent);
	};
	var _onmousemove = function(event){
		
		// Mouse position
		var _fakeEvent = {};
		if(event.changedTouches){
			// Touch
			var offset = _getTotalOffset(target);
			_fakeEvent.x = event.changedTouches[0].clientX - offset.left;
			_fakeEvent.y = event.changedTouches[0].clientY - offset.top;
			event.preventDefault();
		}else{
			// Not Touch
			_fakeEvent.x = event.offsetX;
			_fakeEvent.y = event.offsetY;
		}

		// Mousemove callback
		onmousemove(_fakeEvent);
		return _fakeEvent;

	};
	var _onmouseup = function(event){
		var _fakeEvent = {};
		onmouseup(_fakeEvent);
	};

	// Add events!
	target.addEventListener("mousedown", _onmousedown);
	target.addEventListener("mousemove", _onmousemove);
	document.body.addEventListener("mouseup", _onmouseup);

	// TOUCH.
	target.addEventListener("touchstart",_onmousedown,false);
	target.addEventListener("touchmove",_onmousemove,false);
	document.body.addEventListener("touchend",_onmouseup,false);

}

function _getBounds(points){

	// Bounds
	var left=Infinity, top=Infinity, right=-Infinity, bottom=-Infinity;
	for(var i=0;i<points.length;i++){
		var point = points[i];
		if(point[0]<left) left=point[0];
		if(right<point[0]) right=point[0];
		if(point[1]<top) top=point[1];
		if(bottom<point[1]) bottom=point[1];
	}

	// Dimensions
	var width = (right-left);
	var height = (bottom-top);

	// Gimme
	return {
		left:left, right:right, top:top, bottom:bottom,
		width:width, height:height
	};
	
}

function _translatePoints(points, dx, dy){
	points = JSON.parse(JSON.stringify(points));
	for(var i=0;i<points.length;i++){
		var p = points[i];
		p[0] += dx;
		p[1] += dy;
	}
	return points;
}

function _rotatePoints(points, angle){
	points = JSON.parse(JSON.stringify(points));
	for(var i=0;i<points.length;i++){
		var p = points[i];
		var x = p[0];
		var y = p[1];
		p[0] = x*Math.cos(angle) - y*Math.sin(angle);
		p[1] = y*Math.cos(angle) + x*Math.sin(angle);
	}
	return points;
}

function _configureProperties(self, config, properties){

	for(var propName in properties){

		// Default values!
		if(config[propName]===undefined){
			var value = properties[propName];
			if(typeof value=="function") value=value();
			config[propName] = value;
		}

		// Transfer to "self".
		self[propName] = config[propName];

	}

}

function _isPointInCircle(x, y, cx, cy, radius){
	
	// Point distance
	var dx = cx-x;
	var dy = cy-y;
	var dist2 = dx*dx + dy*dy;

	// My radius
	var r2 = radius*radius;

	// Inside?
	return dist2<=r2;

}

function _isPointInBox(x, y, box){

	if(x<box.x) return false;
	if(x>box.x+box.width) return false;
	if(y<box.y) return false;
	if(y>box.y+box.height) return false;

	return true;

}

// TODO: Make more use of this???
function _makeErrorFunc(msg){
	return function(){
		throw Error(msg);
	};
}

function _getParameterByName(name){
	var url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
};


function _blendColors(hex1, hex2, blend){
	
	var color = "#";
	for(var i=0; i<3; i++) {
		
		// Into numbers...
		var sub1 = hex1.substring(1+2*i, 3+2*i);
		var sub2 = hex2.substring(1+2*i, 3+2*i);
		var num1 = parseInt(sub1, 16);
		var num2 = parseInt(sub2, 16);

		// Blended number & sub
		var num = Math.floor( num1*(1-blend) + num2*blend );
		var sub = num.toString(16).toUpperCase();
		var paddedSub = ('0'+sub).slice(-2); // in case it's only one digit long

		// Add that babe
		color += paddedSub;

	}

	return color;

}

function _shiftArray(array, shiftIndex){
	var moveThisAround = array.splice(-shiftIndex);
	var shifted = moveThisAround.concat(array);
	return shifted;
}



/*!
 * MinPubSub
 * Copyright(c) 2011 Daniel Lamb <daniellmb.com>
 * MIT Licensed
 */
(function (context) {
  var MinPubSub = {};

  // the topic/subscription hash
  var cache = context.c_ || {}; //check for 'c_' cache for unit testing

  MinPubSub.publish = function ( /* String */ topic, /* Array? */ args) {
    // summary: 
    //    Publish some data on a named topic.
    // topic: String
    //    The channel to publish on
    // args: Array?
    //    The data to publish. Each array item is converted into an ordered
    //    arguments on the subscribed functions. 
    //
    // example:
    //    Publish stuff on '/some/topic'. Anything subscribed will be called
    //    with a function signature like: function(a,b,c){ ... }
    //
    //    publish('/some/topic', ['a','b','c']);

    var subs = cache[topic],
      len = subs ? subs.length : 0;

    //can change loop or reverse array if the order matters
    while (len--) {
      subs[len].apply(context, args || []);
    }
  };

  MinPubSub.subscribe = function ( /* String */ topic, /* Function */ callback) {
    // summary:
    //    Register a callback on a named topic.
    // topic: String
    //    The channel to subscribe to
    // callback: Function
    //    The handler event. Anytime something is publish'ed on a 
    //    subscribed channel, the callback will be called with the
    //    published array as ordered arguments.
    //
    // returns: Array
    //    A handle which can be used to unsubscribe this particular subscription.
    //        
    // example:
    //    subscribe('/some/topic', function(a, b, c){ /* handle data */ });

    if (!cache[topic]) {
      cache[topic] = [];
    }
    cache[topic].push(callback);
    return [topic, callback]; // Array
  };

  MinPubSub.unsubscribe = function ( /* Array */ handle, /* Function? */ callback) {
    // summary:
    //    Disconnect a subscribed function for a topic.
    // handle: Array
    //    The return value from a subscribe call.
    // example:
    //    var handle = subscribe('/some/topic', function(){});
    //    unsubscribe(handle);

    var subs = cache[callback ? handle : handle[0]],
      callback = callback || handle[1],
      len = subs ? subs.length : 0;

    while (len--) {
      if (subs[len] === callback) {
        subs.splice(len, 1);
      }
    }
  };

  // UMD definition to allow for CommonJS, AMD and legacy window
  if (typeof module === 'object' && module.exports) {
    // CommonJS, just export
    module.exports = exports = MinPubSub;
  } else if (typeof define === 'function' && define.amd) {
    // AMD support
    define(function () {
      return MinPubSub;
    });
  } else if (typeof context === 'object') {
    // If no AMD and we are in the browser, attach to window
    context.publish = MinPubSub.publish;
    context.subscribe = MinPubSub.subscribe;
    context.unsubscribe = MinPubSub.unsubscribe;
  }

})(this.window);
window.Mouse = {};
Mouse.init = function(target){

	// Events!
	var _onmousedown = function(event){
		Mouse.moved = false;
		Mouse.pressed = true;
		Mouse.startedOnTarget = true;
		publish("mousedown");
	};
	var _onmousemove = function(event){

		// DO THE INVERSE
		var canvasses = document.getElementById("canvasses");
		var tx = 0;
		var ty = 0;
		var s = 1/loopy.offsetScale;
		var CW = canvasses.clientWidth - _PADDING - _PADDING;
		var CH = canvasses.clientHeight - _PADDING_BOTTOM - _PADDING;

		if(loopy.embedded){
			tx -= _PADDING/2; // dunno why but this is needed
			ty -= _PADDING/2; // dunno why but this is needed
		}
		
		tx -= (CW+_PADDING)/2;
		ty -= (CH+_PADDING)/2;
		
		tx = s*tx;
		ty = s*ty;

		tx += (CW+_PADDING)/2;
		ty += (CH+_PADDING)/2;

		tx -= loopy.offsetX;
		ty -= loopy.offsetY;

		// Mutliply by Mouse vector
		var mx = event.x*s + tx;
		var my = event.y*s + ty;

		// Mouse!
		Mouse.x = mx;
		Mouse.y = my;

		Mouse.moved = true;
		publish("mousemove");

	};
	var _onmouseup = function(){
		Mouse.pressed = false;
		if(Mouse.startedOnTarget){
			publish("mouseup");
			if(!Mouse.moved) publish("mouseclick");
		}
		Mouse.moved = false;
		Mouse.startedOnTarget = false;
	};

	// Add mouse & touch events!
	_addMouseEvents(target, _onmousedown, _onmousemove, _onmouseup);

	// Cursor & Update
	Mouse.target = target;
	Mouse.showCursor = function(cursor){
		Mouse.target.style.cursor = cursor;
	};
	Mouse.update = function(){
		Mouse.showCursor("");
	};

};
(function(exports){

	// Singleton
	var Key = {};
	exports.Key = Key;

	// Keycodes to words mapping
	var KEY_CODES = {
		
		17: "control",
		91: "control", // macs
		13: "enter", // enter

		// TODO: Standardize the NAMING across files?!?!
		78: "ink", // Pe(n)cil
		86: "drag", // Mo(v)e
		69: "erase", // (E)rase
		84: "label", // (T)ext
		83: "save", // (S)ave

	};

	// Event Handling
	// TODO: cursors stay when click button? orrrrr switch over to fake-cursor.
	Key.onKeyDown = function(event){
		if(document.hidden || window.__loopyDead || /INPUT|TEXTAREA/.test(event.target.tagName)) return;
		if(window.loopy && loopy.modal && loopy.modal.isShowing) return;
		var code = KEY_CODES[event.keyCode];
	    Key[code] = true;
	    publish("key/"+code);
	    event.stopPropagation();
	    event.preventDefault();
	}
	Key.onKeyUp = function(event){
		if(document.hidden || window.__loopyDead || /INPUT|TEXTAREA/.test(event.target.tagName)) return;
		if(window.loopy && loopy.modal && loopy.modal.isShowing) return;
		var code = KEY_CODES[event.keyCode];
	    Key[code] = false;
	    event.stopPropagation();
	    event.preventDefault();
	}
	window.addEventListener("keydown",Key.onKeyDown,false);
	window.addEventListener("keyup",Key.onKeyUp,false);

})(window);
/**********************************

LOOPY!
- with edit & play mode

**********************************/

Loopy.MODE_EDIT = 0;
Loopy.MODE_PLAY = 1;

Loopy.TOOL_INK = 0;
Loopy.TOOL_DRAG = 1;
Loopy.TOOL_ERASE = 2;
Loopy.TOOL_LABEL = 3;

function Loopy(config){

	var self = this;
	self.config = config;

	// Loopy: EMBED???
	self.embedded = false;
	self.embedded = !!parseInt(self.embedded); // force to Boolean

	// Offset & Scale?!?!
	self.offsetX = 0;
	self.offsetY = 0;
	self.offsetScale = 1;

	// Mouse
	Mouse.init(document.getElementById("canvasses")); // TODO: ugly fix, ew
	
	// Model
	self.model = new Model(self);

	// Loopy: SPEED!
	self.signalSpeed = 3;

	// Sidebar
	self.sidebar = new Sidebar(self);
	self.sidebar.showPage("Edit"); // start here

	// Play/Edit mode
	self.mode = Loopy.MODE_EDIT;

	// Tools
	self.toolbar = new Toolbar(self);
	self.tool = Loopy.TOOL_INK;
	self.ink = new Ink(self);
	self.drag = new Dragger(self);
	self.erase = new Eraser(self);
	self.label = new Labeller(self);

	// Play Controls
	self.playbar = new PlayControls(self);
	self.playbar.showPage("Editor"); // start here

	// Modal
	self.modal = new Modal(self);

	//////////
	// INIT //
	//////////

	self.init = function(){
		self.loadFromURL(); // try it.
	};

	///////////////////
	// UPDATE & DRAW //
	///////////////////

	// Update
	self.update = function(){
 if(self.stopped || document.hidden || window.__loopyDead) return;
		Mouse.update();
		if(self.wobbleControls>=0) self.wobbleControls--; // wobble
		if(!self.modal.isShowing){ // modAl
			self.model.update(); // modEl
		}
	};
	self.tick = 0; self.frame = 0; // 30 FPS, why not.

	// Draw
	self.draw = function(){
 if(self.stopped || document.hidden || window.__loopyDead) return;
		if(!self.modal.isShowing){ // modAl
			self.model.draw(); // modEl
		}
		if(!self.stopped && !document.hidden && !window.__loopyDead) self.frame=requestAnimationFrame(self.draw);
	};

	// TODO: Smarter drawing of Ink, Edges, and Nodes
	// (only Nodes need redrawing often. And only in PLAY mode.)

	//////////////////////
	// PLAY & EDIT MODE //
	//////////////////////

	self.showPlayTutorial = false;
	self.wobbleControls = -1;
	self.setMode = function(mode){

		self.mode = mode;
		publish("loopy/mode");

		// Play mode!
		if(mode==Loopy.MODE_PLAY){
			self.showPlayTutorial = true; // show once!
			if(!self.embedded) self.wobbleControls=45; // only if NOT embedded
			self.sidebar.showPage("Edit");
			self.playbar.showPage("Player");
			self.sidebar.dom.setAttribute("mode","play");
			self.toolbar.dom.setAttribute("mode","play");
			document.getElementById("canvasses").removeAttribute("cursor"); // TODO: EVENT BASED
		}else{
			publish("model/reset");
		}

		// Edit mode!
		if(mode==Loopy.MODE_EDIT){
			self.showPlayTutorial = false; // donezo
			self.wobbleControls = -1; // donezo
			self.sidebar.showPage("Edit");
			self.playbar.showPage("Editor");
			self.sidebar.dom.setAttribute("mode","edit");
			self.toolbar.dom.setAttribute("mode","edit");
			document.getElementById("canvasses").setAttribute("cursor", self.toolbar.currentTool); // TODO: EVENT BASED
		}

	};

	/////////////////
	// SAVE & LOAD //
	/////////////////

	self.dirty = false;

	// YOU'RE A DIRTY BOY
	subscribe("model/changed", function(){
		if(!self.embedded) self.dirty = true;
	});

	// "BLANK START" DATA:
	var _blankData = "[[[1,403,223,1,%22something%22,4],[2,405,382,1,%22something%2520else%22,5]],[[2,1,94,-1,0],[1,2,89,1,0]],[[609,311,%22need%2520ideas%2520on%2520what%2520to%250Asimulate%253F%2520how%2520about%253A%250A%250A%25E3%2583%25BBtechnology%250A%25E3%2583%25BBenvironment%250A%25E3%2583%25BBeconomics%250A%25E3%2583%25BBbusiness%250A%25E3%2583%25BBpolitics%250A%25E3%2583%25BBculture%250A%25E3%2583%25BBpsychology%250A%250Aor%2520better%2520yet%252C%2520a%250A*combination*%2520of%250Athose%2520systems.%250Ahappy%2520modeling!%22]],2%5D";

	self.loadFromURL = function(){
		var data = null;
		if(!data) data=decodeURIComponent(_blankData);
		self.model.deserialize(data);
	}; 


	///////////////////////////
	//////// EMBEDDED? ////////
	///////////////////////////

	self.init();

	if(self.embedded){

		// Hide all that UI
		self.toolbar.dom.style.display = "none";
		self.sidebar.dom.style.display = "none";

		// If *NO UI AT ALL*
		var noUI = !!parseInt(_getParameterByName("no_ui")); // force to Boolean
		if(noUI){
			_PADDING_BOTTOM = _PADDING;
			self.playbar.dom.style.display = "none";
		}

		// Fullscreen canvas
		document.getElementById("canvasses").setAttribute("fullscreen","yes");
		self.playbar.dom.setAttribute("fullscreen","yes");
		publish("resize");

		// Center & SCALE The Model
		self.model.center(true);
		subscribe("resize",function(){
			self.model.center(true);
		});

		// Autoplay!
		self.setMode(Loopy.MODE_PLAY);

		// Also, HACK: auto signal
		var signal = _getParameterByName("signal");
		if(signal){
			signal = JSON.parse(signal);
			var node = self.model.getNode(signal[0]);
			node.takeSignal({
				delta: signal[1]*0.33
			});
		}

	}else{

		// Center all the nodes & labels

		// If no nodes & no labels, forget it.
		if(self.model.nodes.length>0 || self.model.labels.length>0){

			// Get bounds of ALL objects...
			var bounds = self.model.getBounds();
			var left = bounds.left;
			var top = bounds.top;
			var right = bounds.right;
			var bottom = bounds.bottom;

			// Re-center!
			var canvasses = document.getElementById("canvasses");
			var cx = (left+right)/2;
			var cy = (top+bottom)/2;
			var offsetX = (canvasses.clientWidth+50)/2 - cx;
			var offsetY = (canvasses.clientHeight-80)/2 - cy;

			// MOVE ALL NODES
			for(var i=0;i<self.model.nodes.length;i++){
				var node = self.model.nodes[i];
				node.x += offsetX;
				node.y += offsetY;
			}

			// MOVE ALL LABELS
			for(var i=0;i<self.model.labels.length;i++){
				var label = self.model.labels[i];
				label.x += offsetX;
				label.y += offsetY;
			}

		}

	}

	// NOT DIRTY, THANKS
	self.dirty = false;

	// SHOW ME, THANKS
	document.body.style.opacity = "";

	// GO.
	if(!self.stopped && !document.hidden && !window.__loopyDead) self.frame=requestAnimationFrame(self.draw);

 self.pause=function(){self.stopped=true;clearInterval(self.tick);cancelAnimationFrame(self.frame);self.tick=self.frame=0;Mouse.pressed=false;};
 self.resume=function(){if(window.__loopyDead||document.hidden)return;self.pause();self.stopped=false;self.tick=setInterval(self.update,1000/30);self.frame=requestAnimationFrame(self.draw);};
 self.pause();self.resume();


}
/**********************************

MODEL!

**********************************/

function Model(loopy){

	var self = this;
	self.loopy = loopy;

	// Properties
	self.speed = 0.05;

	// Create canvas & context
	var canvas = _createCanvas();
	var ctx = canvas.getContext("2d");
	self.canvas = canvas;
	self.context = ctx;



	///////////////////
	// NODES //////////
	///////////////////

	// Nodes
	self.nodes = [];
	self.nodeByID = {};
	self.getNode = function(id){
		return self.nodeByID[id];
	};

	// Remove Node
	self.addNode = function(config){

		// Model's been changed!
		publish("model/changed");

		// Add Node
		var node = new Node(self,config);
		self.nodeByID[node.id] = node;
		self.nodes.push(node);
		self.update();
		return node;

	};

	// Remove Node
	self.removeNode = function(node){

		// Model's been changed!
		publish("model/changed");

		// Remove from array
		self.nodes.splice(self.nodes.indexOf(node),1);

		// Remove from object
		delete self.nodeByID[node.id];

		// Remove all associated TO and FROM edges
		for(var i=0; i<self.edges.length; i++){
			var edge = self.edges[i];
			if(edge.to==node || edge.from==node){
				edge.kill();
				i--; // move index back, coz it's been killed
			}
		}
		
	};


	///////////////////
	// EDGES //////////
	///////////////////

	// Edges
	self.edges = [];

	// Remove edge
	self.addEdge = function(config){

		// Model's been changed!
		publish("model/changed");

		// Add Edge
		var edge = new Edge(self,config);
		self.edges.push(edge);
		self.update();
		return edge;
	};

	// Remove edge
	self.removeEdge = function(edge){

		// Model's been changed!
		publish("model/changed");

		// Remove edge
		self.edges.splice(self.edges.indexOf(edge),1);

	};

	// Get all edges with start node
	self.getEdgesByStartNode = function(startNode){
		return self.edges.filter(function(edge){
			return(edge.from==startNode);
		});
	};




	///////////////////
	// LABELS /////////
	///////////////////

	// Labels
	self.labels = [];

	// Remove label
	self.addLabel = function(config){

		// Model's been changed!
		publish("model/changed");

		// Add label
		var label = new Label(self,config);
		self.labels.push(label);
		self.update();
		return label;
	};

	// Remove label
	self.removeLabel = function(label){

		// Model's been changed!
		publish("model/changed");

		// Remove label
		self.labels.splice(self.labels.indexOf(label),1);
		
	};



	///////////////////
	// UPDATE & DRAW //
	///////////////////

	var _canvasDirty = false;

	self.update = function(){

		// Update edges THEN nodes
		for(var i=0;i<self.edges.length;i++) self.edges[i].update(self.speed);
		for(var i=0;i<self.nodes.length;i++) self.nodes[i].update(self.speed);

		// Dirty!
		_canvasDirty = true;

	};

	// SHOULD WE DRAW?
	var drawCountdownFull = 60; // two-second buffer!
	var drawCountdown = drawCountdownFull; 
	
	// ONLY IF MOUSE MOVE / CLICK
	subscribe("mousemove", function(){ drawCountdown=drawCountdownFull; });
	subscribe("mousedown", function(){ drawCountdown=drawCountdownFull; });

	// OR INFO CHANGED
	subscribe("model/changed", function(){
		if(self.loopy.mode==Loopy.MODE_EDIT) drawCountdown=drawCountdownFull;
	});

	// OR RESIZE or RESET
	subscribe("resize",function(){ drawCountdown=drawCountdownFull; });
	subscribe("model/reset",function(){ drawCountdown=drawCountdownFull; });
	subscribe("loopy/mode",function(){
		if(loopy.mode==Loopy.MODE_PLAY){
			drawCountdown=drawCountdownFull*2;
		}else{
			drawCountdown=drawCountdownFull;
		}
	});

	self.draw = function(){

		// SHOULD WE DRAW?
		// ONLY IF ARROW-SIGNALS ARE MOVING
		for(var i=0;i<self.edges.length;i++){
			if(self.edges[i].signals.length>0){
				drawCountdown = drawCountdownFull;
				break;
			}
		}

		// DRAW???????
		drawCountdown--;
		if(drawCountdown<=0) return;

		// Also only draw if last updated...
		if(!_canvasDirty) return;
		_canvasDirty = false;

		// Clear!
		ctx.clearRect(0,0,self.canvas.width,self.canvas.height);

		// Translate
		ctx.save();

		// Translate to center, (translate, scale, translate) to expand to size
		var canvasses = document.getElementById("canvasses");
		var CW = canvasses.clientWidth - _PADDING - _PADDING;
		var CH = canvasses.clientHeight - _PADDING_BOTTOM - _PADDING;
		var tx = loopy.offsetX*2;
		var ty = loopy.offsetY*2;
		tx -= CW+_PADDING;
		ty -= CH+_PADDING;
		var s = loopy.offsetScale;
		tx = s*tx;
		ty = s*ty;
		tx += CW+_PADDING;
		ty += CH+_PADDING;
		if(loopy.embedded){
			tx += _PADDING; // dunno why but this is needed
			ty += _PADDING; // dunno why but this is needed
		}
		ctx.setTransform(s, 0, 0, s, tx, ty);

		// Draw labels THEN edges THEN nodes
		for(var i=0;i<self.labels.length;i++) self.labels[i].draw(ctx);
		for(var i=0;i<self.edges.length;i++) self.edges[i].draw(ctx);
		for(var i=0;i<self.nodes.length;i++) self.nodes[i].draw(ctx);

		// Restore
		ctx.restore();

	};




	//////////////////////////////
	// SERIALIZE & DE-SERIALIZE //
	//////////////////////////////

	self.serialize = function(){

		var data = [];
		// 0 - nodes
		// 1 - edges
		// 2 - labels
		// 3 - UID

		// Nodes
		var nodes = [];
		for(var i=0;i<self.nodes.length;i++){
			var node = self.nodes[i];
			// 0 - id
			// 1 - x
			// 2 - y
			// 3 - init value
			// 4 - label
			// 5 - hue
			nodes.push([
				node.id,
				Math.round(node.x),
				Math.round(node.y),
				node.init,
				encodeURIComponent(encodeURIComponent(node.label)),
				node.hue
			]);
		}
		data.push(nodes);

		// Edges
		var edges = [];
		for(var i=0;i<self.edges.length;i++){
			var edge = self.edges[i];
			// 0 - from
			// 1 - to
			// 2 - arc
			// 3 - strength
			// 4 - rotation (optional)
			var dataEdge = [
				edge.from.id,
				edge.to.id,
				Math.round(edge.arc),
				edge.strength
			];
			if(dataEdge.f==dataEdge.t){
				dataEdge.push(Math.round(edge.rotation));
			}
			edges.push(dataEdge);
		}
		data.push(edges);

		// Labels
		var labels = [];
		for(var i=0;i<self.labels.length;i++){
			var label = self.labels[i];
			// 0 - x
			// 1 - y
			// 2 - text
			labels.push([
				Math.round(label.x),
				Math.round(label.y),
				encodeURIComponent(encodeURIComponent(label.text))
			]);
		}
		data.push(labels);

		// META.
		data.push(Node._UID);

		// Return as string!
		var dataString = JSON.stringify(data);
		dataString = dataString.replace(/"/gi, "%22"); // and ONLY URIENCODE THE QUOTES
		dataString = dataString.substr(0, dataString.length-1) + "%5D";// also replace THE LAST CHARACTER
		return dataString;

	};

	self.deserialize = function(dataString){

		self.clear();

		var data = JSON.parse(dataString);

		// Get from array!
		var nodes = data[0];
		var edges = data[1];
		var labels = data[2];
		var UID = data[3];

		// Nodes
		for(var i=0;i<nodes.length;i++){
			var node = nodes[i];
			self.addNode({
				id: node[0],
				x: node[1],
				y: node[2],
				init: node[3],
				label: decodeURIComponent(node[4]),
				hue: node[5]
			});
		}

		// Edges
		for(var i=0;i<edges.length;i++){
			var edge = edges[i];
			var edgeConfig = {
				from: edge[0],
				to: edge[1],
				arc: edge[2],
				strength: edge[3]
			};
			if(edge[4]) edgeConfig.rotation=edge[4];
			self.addEdge(edgeConfig);
		}

		// Labels
		for(var i=0;i<labels.length;i++){
			var label = labels[i];
			self.addLabel({
				x: label[0],
				y: label[1],
				text: decodeURIComponent(label[2])
			});
		}

		// META.
		Node._UID = UID;

	};

	self.clear = function(){

		// Just kill ALL nodes.
		while(self.nodes.length>0){
			self.nodes[0].kill();
		}

		// Just kill ALL labels.
		while(self.labels.length>0){
			self.labels[0].kill();
		}
	};



	////////////////////
	// HELPER METHODS //
	////////////////////

	self.getNodeByPoint = function(x,y,buffer){
		var result;
		for(var i=self.nodes.length-1; i>=0; i--){ // top-down
			var node = self.nodes[i];
			if(node.isPointInNode(x,y,buffer)) return node;
		}
		return null;
	};

	self.getEdgeByPoint = function(x, y, wholeArrow){
		// TODO: wholeArrow option?
		var result;
		for(var i=self.edges.length-1; i>=0; i--){ // top-down
			var edge = self.edges[i];
			if(edge.isPointOnLabel(x,y)) return edge;
		}
		return null;
	};

	self.getLabelByPoint = function(x, y){
		var result;
		for(var i=self.labels.length-1; i>=0; i--){ // top-down
			var label = self.labels[i];
			if(label.isPointInLabel(x,y)) return label;
		}
		return null;
	};

	// Click to edit!
	subscribe("mouseclick",function(){

		// ONLY WHEN EDITING (and NOT erase)
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool==Loopy.TOOL_ERASE) return;

		// Did you click on a node? If so, edit THAT node.
		var clickedNode = self.getNodeByPoint(Mouse.x, Mouse.y);
		if(clickedNode){
			loopy.sidebar.edit(clickedNode);
			return;
		}

		// Did you click on a label? If so, edit THAT label.
		var clickedLabel = self.getLabelByPoint(Mouse.x, Mouse.y);
		if(clickedLabel){
			loopy.sidebar.edit(clickedLabel);
			return;
		}

		// Did you click on an edge label? If so, edit THAT edge.
		var clickedEdge = self.getEdgeByPoint(Mouse.x, Mouse.y);
		if(clickedEdge){
			loopy.sidebar.edit(clickedEdge);
			return;
		}

		// If the tool LABEL? If so, TRY TO CREATE LABEL.
		if(self.loopy.tool==Loopy.TOOL_LABEL){
			loopy.label.tryMakingLabel();
			return;
		}

		// Otherwise, go to main Edit page.
		loopy.sidebar.showPage("Edit");

	});

	// Centering & Scaling
	self.getBounds = function(){

		// If no nodes & no labels, forget it.
		if(self.nodes.length==0 && self.labels.length==0) return;

		// Get bounds of ALL objects...
		var left = Infinity;
		var top = Infinity;
		var right = -Infinity;
		var bottom = -Infinity;
		var _testObjects = function(objects){
			for(var i=0; i<objects.length; i++){
				var obj = objects[i];
				var bounds = obj.getBoundingBox();
				if(left>bounds.left) left=bounds.left;
				if(top>bounds.top) top=bounds.top;
				if(right<bounds.right) right=bounds.right;
				if(bottom<bounds.bottom) bottom=bounds.bottom;
			}
		};
		_testObjects(self.nodes);
		_testObjects(self.edges);
		_testObjects(self.labels);

		// Return
		return {
			left:left,
			top:top,
			right:right,
			bottom:bottom
		};

	};
	self.center = function(andScale){

		// If no nodes & no labels, forget it.
		if(self.nodes.length==0 && self.labels.length==0) return;

		// Get bounds of ALL objects...
		var bounds = self.getBounds();
		var left = bounds.left;
		var top = bounds.top;
		var right = bounds.right;
		var bottom = bounds.bottom;

		// Re-center!
		var canvasses = document.getElementById("canvasses");
		var fitWidth = canvasses.clientWidth - _PADDING - _PADDING;
		var fitHeight = canvasses.clientHeight - _PADDING_BOTTOM - _PADDING;
		var cx = (left+right)/2;
		var cy = (top+bottom)/2;
		loopy.offsetX = (_PADDING+fitWidth)/2 - cx;
		loopy.offsetY = (_PADDING+fitHeight)/2 - cy;

		// SCALE.
		if(andScale){

			var w = right-left;
			var h = bottom-top;

			// Wider or taller than screen?
			var modelRatio = w/h;
			var screenRatio = fitWidth/fitHeight;
			var scaleRatio;
			if(modelRatio > screenRatio){
				// wider...
				scaleRatio = fitWidth/w;
			}else{
				// taller...
				scaleRatio = fitHeight/h;
			}

			// Loopy, then!
			loopy.offsetScale = scaleRatio;

		}

	};

}
/**********************************

NODE!

**********************************/

Node.COLORS = {
	0: "#EA3E3E", // red
	1: "#EA9D51", // orange
	2: "#FEEE43", // yellow
	3: "#BFEE3F", // green
	4: "#7FD4FF", // blue
	5: "#A97FFF" // purple
};

Node.defaultValue = 0.5;
Node.defaultHue = 0;

Node.DEFAULT_RADIUS = 60;

function Node(model, config){

	var self = this;
	self._CLASS_ = "Node";

	// Mah Parents!
	self.loopy = model.loopy;
	self.model = model;
	self.config = config;

	// Default values...
	_configureProperties(self, config, {
		id: Node._getUID,
		x: 0,
		y: 0,
		init: Node.defaultValue, // initial value!
		label: "?",
		hue: Node.defaultHue,
		radius: Node.DEFAULT_RADIUS
	});

	// Value: from 0 to 1
	self.value = self.init;
	// TODO: ACTUALLY VISUALIZE AN INFINITE RANGE
	self.bound = function(){ // bound ONLY when changing value.
		/*var buffer = 1.2;
		if(self.value<-buffer) self.value=-buffer;
		if(self.value>1+buffer) self.value=1+buffer;*/
	};

	// MOUSE.
	var _controlsVisible = false;
	var _controlsAlpha = 0;
	var _controlsDirection = 0;
	var _controlsSelected = false;
	var _controlsPressed = false;	
	var _listenerMouseMove = subscribe("mousemove", function(){

		// ONLY WHEN PLAYING
		if(self.loopy.mode!=Loopy.MODE_PLAY) return;

		// If moused over this, show it, or not.
		_controlsSelected = self.isPointInNode(Mouse.x, Mouse.y);
		if(_controlsSelected){
			_controlsVisible = true;
			self.loopy.showPlayTutorial = false;
			_controlsDirection = (Mouse.y<self.y) ? 1 : -1;
		}else{
			_controlsVisible = false;
			_controlsDirection = 0;
		}

	});
	var _listenerMouseDown = subscribe("mousedown",function(){

		if(self.loopy.mode!=Loopy.MODE_PLAY) return; // ONLY WHEN PLAYING
		if(_controlsSelected) _controlsPressed = true;

		// IF YOU CLICKED ME...
		if(_controlsPressed){

			// Change my value
			var delta = _controlsDirection*0.33; // HACK: hard-coded 0.33
			self.value += delta;

			// And also PROPAGATE THE DELTA
			self.sendSignal({
				delta: delta
			});

		}

	});
	var _listenerMouseUp = subscribe("mouseup",function(){
		if(self.loopy.mode!=Loopy.MODE_PLAY) return; // ONLY WHEN PLAYING
		_controlsPressed = false;
	});
	var _listenerReset = subscribe("model/reset", function(){
		self.value = self.init;
	});

	//////////////////////////////////////
	// SIGNALS ///////////////////////////
	//////////////////////////////////////

	var shiftIndex = 0;
	self.sendSignal = function(signal){
		var myEdges = self.model.getEdgesByStartNode(self);
		myEdges = _shiftArray(myEdges, shiftIndex);
		shiftIndex = (shiftIndex+1)%myEdges.length;
		for(var i=0; i<myEdges.length; i++){
			myEdges[i].addSignal(signal);
		}
	};

	self.takeSignal = function(signal){

		// Change value
		self.value += signal.delta;

		// Propagate signal
		self.sendSignal(signal);
		// self.sendSignal(signal.delta*0.9); // PROPAGATE SLIGHTLY WEAKER

		// Animation
		// _offsetVel += 0.08 * (signal.delta/Math.abs(signal.delta));
		_offsetVel -= 6 * (signal.delta/Math.abs(signal.delta));

	};


	//////////////////////////////////////
	// UPDATE & DRAW /////////////////////
	//////////////////////////////////////

	// Update!
	var _offset = 0;
	var _offsetGoto = 0;
	var _offsetVel = 0;
	var _offsetAcc = 0;
	var _offsetDamp = 0.3;
	var _offsetHookes = 0.8;
	self.update = function(speed){

		// When actually playing the simulation...
		var _isPlaying = (self.loopy.mode==Loopy.MODE_PLAY);

		// Otherwise, value = initValue exactly
		if(self.loopy.mode==Loopy.MODE_EDIT){
			self.value = self.init;
		}

		// Cursor!
		if(_controlsSelected) Mouse.showCursor("pointer");

		// Keep value within bounds!
		self.bound();

		// Visually & vertically bump the node
		var gotoAlpha = (_controlsVisible || self.loopy.showPlayTutorial) ? 1 : 0;
		_controlsAlpha = _controlsAlpha*0.5 + gotoAlpha*0.5;
		if(_isPlaying && _controlsPressed){
			_offsetGoto = -_controlsDirection*20; // by 20 pixels
			// _offsetGoto = _controlsDirection*0.2; // by scale +/- 0.1
		}else{
			_offsetGoto = 0;
		}
		_offset += _offsetVel;
		if(_offset>40) _offset=40
		if(_offset<-40) _offset=-40;
		_offsetVel += _offsetAcc;
		_offsetVel *= _offsetDamp;
		_offsetAcc = (_offsetGoto-_offset)*_offsetHookes;

	};

	// Draw
	var _circleRadius = 0;
	self.draw = function(ctx){

		// Retina
		var x = self.x*2;
		var y = self.y*2;
		var r = self.radius*2;
		var color = Node.COLORS[self.hue];

		// Translate!
		ctx.save();
		ctx.translate(x,y+_offset);
		
		// DRAW HIGHLIGHT???
		if(self.loopy.sidebar.currentPage.target == self){
			ctx.beginPath();
			ctx.arc(0, 0, r+40, 0, Math.TAU, false);
			ctx.fillStyle = HIGHLIGHT_COLOR;
			ctx.fill();
		}
		
		// White-gray bubble with colored border
		ctx.beginPath();
		ctx.arc(0, 0, r-2, 0, Math.TAU, false);
		ctx.fillStyle = "#fff";
		ctx.fill();
		ctx.lineWidth = 6;
		ctx.strokeStyle = color;
		ctx.stroke();
		
		// Circle radius
		// var _circleRadiusGoto = r*(self.value+1);
		// _circleRadius = _circleRadius*0.75 + _circleRadiusGoto*0.25;

		// RADIUS IS (ATAN) of VALUE?!?!?!
		var _r = Math.atan(self.value*5);
		_r = _r/(Math.PI/2);
		_r = (_r+1)/2;

		// INFINITE RANGE FOR RADIUS
		// linear from 0 to 1, asymptotic otherwise.
		var _value;
		if(self.value>=0 && self.value<=1){
			// (0,1) -> (0.1, 0.9)
			_value = 0.1 + 0.8*self.value;
		}else{
			if(self.value<0){
				// asymptotically approach 0, starting at 0.1
				_value = (1/(Math.abs(self.value)+1))*0.1;
			}
			if(self.value>1){
				// asymptotically approach 1, starting at 0.9
				_value = 1 - (1/self.value)*0.1;
			}
		}

		// Colored bubble
		ctx.beginPath();
		var _circleRadiusGoto = r*_value; // radius
		_circleRadius = _circleRadius*0.8 + _circleRadiusGoto*0.2;
		ctx.arc(0, 0, _circleRadius, 0, Math.TAU, false);
		ctx.fillStyle = color;
		ctx.fill();

		// Text!
		var fontsize = 40;
		ctx.font = "normal "+fontsize+"px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#000";
		var width = ctx.measureText(self.label).width;
		while(width > r*2 - 30){ // -30 for buffer. HACK: HARD-CODED.
			fontsize -= 1;
			ctx.font = "normal "+fontsize+"px sans-serif";
			width = ctx.measureText(self.label).width;
		}
		ctx.fillText(self.label, 0, 0);

		// WOBBLE CONTROLS
		var cl = 40;
		var cy = 0;
		if(self.loopy.showPlayTutorial && self.loopy.wobbleControls>0){
			var wobble = self.loopy.wobbleControls*(Math.TAU/30);
			cy = Math.abs(Math.sin(wobble))*10;
		}

		// Controls!
		ctx.globalAlpha = _controlsAlpha;
		ctx.strokeStyle = "rgba(0,0,0,0.8)";
		// top arrow
		ctx.beginPath();
		ctx.moveTo(-cl,-cy-cl);
		ctx.lineTo(0,-cy-cl*2);
		ctx.lineTo(cl,-cy-cl);
		ctx.lineWidth = (_controlsDirection>0) ? 10: 3;
		if(self.loopy.showPlayTutorial) ctx.lineWidth=6;
		ctx.stroke();
		// bottom arrow
		ctx.beginPath();
		ctx.moveTo(-cl,cy+cl);
		ctx.lineTo(0,cy+cl*2);
		ctx.lineTo(cl,cy+cl);
		ctx.lineWidth = (_controlsDirection<0) ? 10: 3;
		if(self.loopy.showPlayTutorial) ctx.lineWidth=6;
		ctx.stroke();

		// Restore
		ctx.restore();

	};

	//////////////////////////////////////
	// KILL NODE /////////////////////////
	//////////////////////////////////////

	self.kill = function(){

		// Kill Listeners!
		unsubscribe("mousemove",_listenerMouseMove);
		unsubscribe("mousedown",_listenerMouseDown);
		unsubscribe("mouseup",_listenerMouseUp);
		unsubscribe("model/reset",_listenerReset);

		// Remove from parent!
		model.removeNode(self);

		// Killed!
		publish("kill",[self]);

	};

	//////////////////////////////////////
	// HELPER METHODS ////////////////////
	//////////////////////////////////////

	self.isPointInNode = function(x, y, buffer){
		buffer = buffer || 0;
		return _isPointInCircle(x, y, self.x, self.y, self.radius+buffer);
	};

	self.getBoundingBox = function(){
		return {
			left: self.x - self.radius,
			top: self.y - self.radius,
			right: self.x + self.radius,
			bottom: self.y + self.radius
		};
	};

}

////////////////////////////
// Unique ID identifiers! //
////////////////////////////

Node._UID = 0;
Node._getUID = function(){
	Node._UID++;
	return Node._UID;
};

/**********************************

EDGE!

**********************************/

Edge.allSignals = [];
Edge.MAX_SIGNALS = 100;
Edge.MAX_SIGNALS_PER_EDGE = 10;
Edge.defaultStrength = 1;

function Edge(model, config){

	var self = this;
	self._CLASS_ = "Edge";

	// Mah Parents!
	self.loopy = model.loopy;
	self.model = model;
	self.config = config;

	// Default values...
	_configureProperties(self, config, {
		from: _makeErrorFunc("CAN'T LEAVE 'FROM' BLANK"),
		to: _makeErrorFunc("CAN'T LEAVE 'TO' BLANK"),
		arc: 100,
		rotation: 0,
		strength: Edge.defaultStrength
	});

	// Get my NODES
	self.from = model.getNode(self.from);
	self.to = model.getNode(self.to);

	// We have signals!
	self.signals = [];
	self.signalSpeed = 0;
	self.addSignal = function(signal){

		// IF ALREADY TOO MANY, FORGET IT
		if(Edge.allSignals.length>Edge.MAX_SIGNALS){
			return;
		}

		// IF TOO MANY *ON THIS EDGE*, FORGET IT
		if(self.signals.length>Edge.MAX_SIGNALS_PER_EDGE){
			return;
		}

		// Re-create signal
		var delta = signal.delta;
		var age;
		if(signal.age===undefined){
			// age = 13; // cos divisible by 1,2,3,4 + 1
			age = 1000000; // actually just make signals last "forever".
		}else{
			age = signal.age-1;
		}
		var newSignal = {
			delta: delta,
			position: 0,
			scaleX: Math.abs(delta),
			scaleY: delta,
			age: age
		};

		// If it's expired, forget it.
		if(age<=0) return;

		self.signals.unshift(newSignal); // it's a queue!

		// ALL signals.
		Edge.allSignals.push(newSignal);

	};
	self.updateSignals = function(){

		// Speed?
		var speed = Math.pow(2,self.loopy.signalSpeed);
		self.signalSpeed = speed/self.getArrowLength();

		// Move all signals along
		for(var i=0; i<self.signals.length; i++){
			
			var signal = self.signals[i];
			var lastPosition = signal.position;
			signal.position += self.signalSpeed;

			// If crossed the 0.5 mark...
			/*
			if(lastPosition<0.5 && signal.position>=0.5){

				// Multiply by this edge's strength!
				signal.delta *= self.strength;

			}

			// And also TWEEN the scale.
			var gotoScaleX = Math.abs(signal.delta);
			var gotoScaleY = signal.delta;
			signal.scaleX = signal.scaleX*0.8 + gotoScaleX*0.2;
			signal.scaleY = signal.scaleY*0.8 + gotoScaleY*0.2;
			*/

		}

		// If any signals reach >=1, pass 'em along
		var lastSignal = self.signals[self.signals.length-1];
		while(lastSignal && lastSignal.position>=1){

			// Actually pass it along
			lastSignal.delta *= self.strength; // flip at the end only!
			self.to.takeSignal(lastSignal);
			
			// Pop it, move on down
			self.removeSignal(lastSignal);
			lastSignal = self.signals[self.signals.length-1];

		}

	};
	self.removeSignal = function(signal){
		self.signals.splice( self.signals.indexOf(signal), 1 );
		Edge.allSignals.splice( Edge.allSignals.indexOf(signal), 1 );
	};
	self.drawSignals = function(ctx){
	
		// Draw each one
		for(var i=0; i<self.signals.length; i++){

			// Get position to draw at
			var signal = self.signals[i];
			var signalPosition = self.getPositionAlongArrow(signal.position);
			var signalX = signalPosition.x;
			var signalY = signalPosition.y;

			// Transform
			ctx.save();
			ctx.translate(signalX, signalY);
			ctx.rotate(-a);

			// Signal's direction & size
			var size = 40; // HARD-CODED
			ctx.scale(signal.scaleX, signal.scaleY);
			ctx.scale(size, size);

			// Signal's COLOR, BLENDING
			var fromColor = Node.COLORS[self.from.hue];
			var toColor = Node.COLORS[self.to.hue];
			var blend;
			var bStart=0.4, bEnd=0.6;
			if(signal.position<bStart){
				blend = 0;
			}else if(signal.position<bEnd){
				blend = (signal.position-bStart)/(bEnd-bStart);
			}else{
				blend = 1;
			}
			var signalColor = _blendColors(fromColor, toColor, blend);

			// Also, tween the scaleY, flipping, IF STRENGTH<0
			if(self.strength<0){
				// sin/cos-animate it for niceness.
				var flip = Math.cos(blend*Math.PI); // (0,1) -> (1,-1)
				ctx.scale(1, flip);
			}

			// Signal's age = alpha.
			if(signal.age==2){
				ctx.globalAlpha = 0.5;
			}else if(signal.age==1){
				ctx.globalAlpha = 0.25;
			}

			// Draw an arrow
			ctx.beginPath();
			ctx.moveTo(-2,0);
			ctx.lineTo(0,-2);
			ctx.lineTo(2,0);
			ctx.lineTo(1,0);
			ctx.lineTo(1,2);
			ctx.lineTo(-1,2);
			ctx.lineTo(-1,0);
			ctx.fillStyle = signalColor;
			ctx.fill();

			// Restore
			ctx.restore();

		}

	};
	var _listenerReset = subscribe("model/reset", function(){
		self.signals = [];
		Edge.allSignals = [];
	});


	//////////////////////////////////////
	// UPDATE & DRAW /////////////////////
	//////////////////////////////////////

	// Update!
	self.labelX = 0;
	self.labelY = 0;
	var fx, fy, tx, ty,
		r, dx, dy, w, a, h,
		y, a2,
		arrowBuffer, arrowDistance, arrowAngle, beginDistance, beginAngle,
		startAngle, endAngle,
		y2, begin, end,
		arrowLength, ax, ay, aa,
		labelAngle, lx, ly, labelBuffer; // BECAUSE I'VE LOST CONTROL OF MY LIFE.
	self.update = function(speed){

		////////////////////////////////////////////////
		// PRE-CALCULATE THE MATH (for retina canvas) //
		////////////////////////////////////////////////

		// Edge case: if arc is EXACTLY zero, whatever, add 0.1 to it.
		if(self.arc==0) self.arc=0.1;

		// Mathy calculations: (all retina, btw)
		fx=self.from.x*2;
		fy=self.from.y*2;
		tx=self.to.x*2;
		ty=self.to.y*2;	
		if(self.from==self.to){
			var rotation = self.rotation;
			rotation *= Math.TAU/360;
			tx += Math.cos(rotation);
			ty += Math.sin(rotation);
		}
		dx = tx-fx;
		dy = ty-fy;
		w = Math.sqrt(dx*dx+dy*dy);
		a = Math.atan2(dy,dx);
		h = Math.abs(self.arc*2);

		// From: http://www.mathopenref.com/arcradius.html
		r = (h/2) + ((w*w)/(8*h));
		y = r-h; // the circle's y-pos is radius - given height.
		a2 = Math.acos((w/2)/r); // angle from x axis, arc-cosine of half-width & radius

		// Arrow buffer...
		arrowBuffer = 15;
		arrowDistance = (self.to.radius+arrowBuffer)*2;
		arrowAngle = arrowDistance/r; // (distance/circumference)*TAU, close enough.
		beginDistance = (self.from.radius+arrowBuffer)*2;
		beginAngle = beginDistance/r;

		// Arc it!
		startAngle = a2 - Math.TAU/2;
		endAngle = -a2;
		if(h>r){
			startAngle *= -1;
			endAngle *= -1;
		}
		if(self.arc>0){
			y2 = y;
			begin = startAngle+beginAngle;
			end = endAngle-arrowAngle;
		}else{
			y2 = -y;
			begin = -startAngle-beginAngle;
			end = -endAngle+arrowAngle;
		}

		// Arrow HEAD!
		arrowLength = 10*2;
		ax = w/2 + Math.cos(end)*r;
		ay = y2 + Math.sin(end)*r;
		aa = end + Math.TAU/4;

		// My label is...
		var s = self.strength;
		var l;
		if(s>=3) l="+++";
		else if(s>=2) l="++";
		else if(s>=1) l="+";
		else if(s==0) l="?";
		else if(s>=-1) l="–"; // EM dash, not hyphen.
		else if(s>=-2) l="– –";
		else l="– – –";
		self.label = l;

		// Label position
		var labelPosition = self.getPositionAlongArrow(0.5);
		lx = labelPosition.x;
		ly = labelPosition.y;

		// ACTUAL label position, for grabbing purposes
		self.labelX = (fx + Math.cos(a)*lx - Math.sin(a)*ly)/2; // un-retina
		self.labelY = (fy + Math.sin(a)*lx + Math.cos(a)*ly)/2; // un-retina

		// ...add offset to label
		labelBuffer = 18*2; // retina
		if(self.arc<0) labelBuffer*=-1;
		ly += labelBuffer;

		///////////////////////////////////////
		// AND THEN UPDATE OTHER STUFF AFTER //
		// THE CALCULATIONS ARE DONE I GUESS //
		///////////////////////////////////////

		// When actually playing the simulation...
		/*if(self.loopy.mode==Loopy.MODE_PLAY){
			self.to.nextValue += self.from.value * self.strength * speed;
		}*/

		// Update signals
		self.updateSignals();

	};

	// Get position along arrow, on what parameter?
	self.getArrowLength = function(){
		var angle;
		if(self.from==self.to){
			// angle = Math.TAU;
			return r*Math.TAU - 2*self.from.radius;
		}else{
			//debugger;
			if(y<0){
				// arc's center is above the horizon
				if(self.arc<0){ // ccw
					angle = Math.TAU + begin - end;
				}else{ // cw
					angle = Math.TAU + end - begin;
				}
			}else{
				// arc's center is below the horizon
				angle = Math.abs(end-begin);
			}
		}
		return r*angle;
	};
	self.getPositionAlongArrow = function(param){

		param = -0.05 + param*1.1; // (0,1) --> (-0.05, 1.05)

		// If the arc's circle is actually BELOW the line...
		var begin2 = begin;
		if(y<0){
			// DON'T KNOW WHY THIS WORKS, BUT IT DOES.
			if(begin2>0){
				begin2-=Math.TAU;
			}else{
				begin2+=Math.TAU;
			}
		}

		// Get angle!
		var angle = begin2 + (end-begin2)*param;
		
		// return x & y
		return{
			x: w/2 + Math.cos(angle)*r,
			y: y2 + Math.sin(angle)*r
		};

	};

	// Draw
	self.draw = function(ctx){

		// Width & Color
		ctx.lineWidth = 4*Math.abs(self.strength)-2;
		ctx.strokeStyle = "#666";

		// Translate & Rotate!
		ctx.save();
		ctx.translate(fx, fy);
		ctx.rotate(a);

		// Highlight!
		if(self.loopy.sidebar.currentPage.target == self){
			ctx.save();
			ctx.translate(lx, ly);
			ctx.rotate(-a);
			ctx.beginPath();
			ctx.arc(0, 5, 60, 0, Math.TAU, false);
			ctx.fillStyle = HIGHLIGHT_COLOR;
			ctx.fill();
			ctx.restore();
		}

		// Arc it!
		ctx.beginPath();
		if(self.arc>0){
			ctx.arc(w/2, y2, r, startAngle, end, false);
		}else{
			ctx.arc(w/2, y2, r, -startAngle, end, true);
		}

		// Arrow HEAD!
		ctx.save();
		ctx.translate(ax, ay);
		if(self.arc<0) ctx.scale(-1,-1);
		ctx.rotate(aa);
		ctx.moveTo(-arrowLength, -arrowLength);
		ctx.lineTo(0,0);
		ctx.lineTo(-arrowLength, arrowLength);
		ctx.restore();

		// Stroke!
		ctx.stroke();

		// Draw label
		ctx.font = "100 60px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.save();
		ctx.translate(lx, ly);
		ctx.rotate(-a);
		ctx.fillStyle = "#999";
		ctx.fillText(self.label, 0, 0);
		ctx.restore();

		// DRAW SIGNALS
		self.drawSignals(ctx);

		// Restore
		ctx.restore();

	};

	//////////////////////////////////////
	// KILL EDGE /////////////////////////
	//////////////////////////////////////

	self.kill = function(){

		// Kill Listeners!
		unsubscribe("model/reset",_listenerReset);

		// Remove from parent!
		model.removeEdge(self);

		// Killed!
		publish("kill",[self]);

	};

	//////////////////////////////////////
	// HELPER METHODS ////////////////////
	//////////////////////////////////////

	self.isPointOnLabel = function(x, y){
		// TOTAL HACK: radius based on TOOL BEING USED.
		var radius;
		if(self.loopy.tool==Loopy.TOOL_DRAG || self.loopy.tool==Loopy.TOOL_INK) radius=40; // selecting, wide radius!
		else if(self.loopy.tool==Loopy.TOOL_ERASE) radius=25; // no accidental erase
		else radius = 15; // you wanna label close to edges
		return _isPointInCircle(x, y, self.labelX, self.labelY, radius);
	};

	self.getBoundingBox = function(){

		// SPECIAL CASE: SELF-ARC
		if(self.from==self.to){

			var perpendicular = a-Math.TAU/4;
			var cx = fx + Math.cos(perpendicular)*-y2;
			var cy = fy + Math.sin(perpendicular)*-y2;
			cx = cx/2; // un-retina
			cy = cy/2; // un-retina

			var _radius = r/2; // un-retina

			return {
				left: cx - _radius,
				top: cy - _radius,
				right: cx + _radius,
				bottom: cy + _radius
			};

		}

		// THREE POINTS: start, end, and perpendicular with r
		var from = {x:self.from.x, y:self.from.y};
		var to = {x:self.to.x, y:self.to.y};
		var mid = {
			x:(from.x+to.x)/2,
			y:(from.y+to.y)/2
		};

		var perpendicular = a-Math.TAU/4;
		mid.x += Math.cos(perpendicular)*self.arc;
		mid.y += Math.sin(perpendicular)*self.arc;

		// TEST ALL POINTS

		var left = Infinity;
		var top = Infinity;
		var right = -Infinity;
		var bottom = -Infinity;
		var points = [from, to, mid];
		for(var i=0; i<points.length; i++){
			var point = points[i];
			var x = point.x;
			var y = point.y;
			if(left>x) left=x;
			if(top>y) top=y;
			if(right<x) right=x;
			if(bottom<y) bottom=y;
		}

		return {
			left: left,
			top: top,
			right: right,
			bottom: bottom
		};
	};


}
/**********************************

LABEL!

**********************************/

Label.FONTSIZE = 40;

function Label(model, config){

	var self = this;
	self._CLASS_ = "Label";

	// Mah Parents!
	self.loopy = model.loopy;
	self.model = model;
	self.config = config;

	// Default values...
	_configureProperties(self, config, {
		x: 0,
		y: 0,
		text: "..."
	});

	// Draw
	var _circleRadius = 0;
	self.draw = function(ctx){

		// Retina
		var x = self.x*2;
		var y = self.y*2;

		// DRAW HIGHLIGHT???
		if(self.loopy.sidebar.currentPage.target == self){
			var bounds = self.getBounds();
			ctx.save();
			ctx.scale(2,2); // RETINA
			ctx.beginPath();
			ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
			ctx.fillStyle = HIGHLIGHT_COLOR;
			ctx.fill();
			ctx.restore();
		}

		// Translate!
		ctx.save();
		ctx.translate(x,y);

		// Text!
		ctx.font = "100 "+Label.FONTSIZE+"px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#000";

		// ugh new lines are a PAIN.
		var lines = self.breakText();
		ctx.translate(0, -(Label.FONTSIZE*lines.length)/2);
		for(var i=0; i<lines.length; i++){
			var line = lines[i];
			ctx.fillText(line, 0, 0);
			ctx.translate(0, Label.FONTSIZE);
		}

		// Restore
		ctx.restore();

	};

	//////////////////////////////////////
	// KILL LABEL /////////////////////////
	//////////////////////////////////////

	self.kill = function(){

		// Remove from parent!
		model.removeLabel(self);

		// Killed!
		publish("kill",[self]);

	};

	//////////////////////////////////////
	// HELPER METHODS ////////////////////
	//////////////////////////////////////

	self.breakText = function(){
		return self.text.split(/\n/);
	};

	self.getBounds = function(){

		var ctx = self.model.context;

		// Get MAX width...
		var lines = self.breakText();
		var maxWidth = 0;
		for(var i=0; i<lines.length; i++){
			var line = lines[i];
			var w = (ctx.measureText(line).width + 10)*2;
			if(maxWidth<w) maxWidth=w;
		}

		// Dimensions, then:
		var w = maxWidth;
		var h = (Label.FONTSIZE*lines.length)/2;

		// Bounds, then:
		return {
			x: self.x-w/2,
			y: self.y-h/2-Label.FONTSIZE/2,
			width: w,
			height: h+Label.FONTSIZE/2
		};

	};

	self.isPointInLabel = function(x, y){
		return _isPointInBox(x,y, self.getBounds());
	};

	self.getBoundingBox = function(){
		var bounds = self.getBounds();
		return {
			left: bounds.x,
			top: bounds.y,
			right: bounds.x + bounds.width,
			bottom: bounds.y + bounds.height
		};
	};

}
/**********************************

PAGE UI: to extend to Sidebar, Play Controls, Modal.

**********************************/

function PageUI(dom){

	var self = this;
	self.dom = dom;

	self.pages = [];
	self.addPage = function(id, page){
		page.id = id;
		self.dom.appendChild(page.dom);
		self.pages.push(page);
	};
	self.currentPage = null;
	self.showPage = function(id){
		var shownPage = null;
		for(var i=0; i<self.pages.length; i++){
			var page = self.pages[i];
			if(page.id==id){
				page.show();
				shownPage = page;
			}else{
				page.hide();
			}
		}
		self.currentPage = shownPage;
		return shownPage;
	};

}

function Page(){

	var self = this;

	// DOM
	self.dom = document.createElement("div");
	self.show = function(){ self.dom.style.display="block"; };
	self.hide = function(){ self.dom.style.display="none"; };

	// Add Component
	self.addComponent = function(component){
		self.dom.appendChild(component.dom); // add to DOM
		return component;
	};

}
/**********************************

SIDEBAR CODE

**********************************/

function Sidebar(loopy){

	var self = this;
	PageUI.call(self, document.getElementById("sidebar"));

	// Edit
	self.edit = function(object){
		self.showPage(object._CLASS_);
		self.currentPage.edit(object);
	};

	// Go back to main when the thing you're editing is killed
	subscribe("kill",function(object){
		if(self.currentPage.target==object){
			self.showPage("Edit");
		}
	});

	////////////////////////////////////////////////////////////////////////////////////////////
	// ACTUAL PAGES ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////

	// Node!
	(function(){
		var page = new SidebarPage();
		page.addComponent(new ComponentButton({
			header: true,
			label: "back to top",
			onclick: function(){
				self.showPage("Edit");
			}
		}));
		page.addComponent("label", new ComponentInput({
			label: "<br><br>Name:"
			//label: "Name:"
		}));
		page.addComponent("hue", new ComponentSlider({
			bg: "color",
			label: "Color:",
			options: [0,1,2,3,4,5],
			oninput: function(value){
				Node.defaultHue = value;
			}
		}));
		page.addComponent("init", new ComponentSlider({
			bg: "initial",
			label: "Start Amount:",
			options: [0, 0.16, 0.33, 0.50, 0.66, 0.83, 1],
			//options: [0, 1/6, 2/6, 3/6, 4/6, 5/6, 1],
			oninput: function(value){
				Node.defaultValue = value;
			}
		}));
		page.onedit = function(){

			// Set color of Slider
			var node = page.target;
			var color = Node.COLORS[node.hue];
			page.getComponent("init").setBGColor(color);

			// Focus on the name field IF IT'S "" or "?"
			var name = node.label;
			if(name=="" || name=="?") page.getComponent("label").select();

		};
		page.addComponent(new ComponentButton({
			label: "delete node",
			//label: "delete circle",
			onclick: function(node){
				node.kill();
				self.showPage("Edit");
			}
		}));
		self.addPage("Node", page);
	})();

	// Edge!
	(function(){
		var page = new SidebarPage();
		page.addComponent(new ComponentButton({
			header: true,
			label: "back to top",
			onclick: function(){
				self.showPage("Edit");
			}
		}));
		page.addComponent("strength", new ComponentSlider({
			bg: "strength",
			label: "<br><br>Relationship:",
			//label: "Relationship:",
			options: [1, -1],
			oninput: function(value){
				Edge.defaultStrength = value;
			}
		}));
		page.addComponent(new ComponentHTML({
			html: "(to make a stronger relationship, draw multiple arrows!)<br><br>"+
			"(to make a delayed relationship, draw longer arrows)"
		}));
		page.addComponent(new ComponentButton({
			//label: "delete edge",
			label: "delete arrow",
			//label: "delete relationship",
			onclick: function(edge){
				edge.kill();
				self.showPage("Edit");
			}
		}));
		self.addPage("Edge", page);
	})();

	// Label!
	(function(){
		var page = new SidebarPage();
		page.addComponent(new ComponentButton({
			header: true,
			label: "back to top",
			onclick: function(){
				self.showPage("Edit");
			}
		}));
		page.addComponent("text", new ComponentInput({
			label: "<br><br>Label:",
			//label: "Label:",
			textarea: true
		}));
		page.onshow = function(){
			// Focus on the text field
			page.getComponent("text").select();
		};
		page.onhide = function(){
			
			// If you'd just edited it...
			var label = page.target;
			if(!page.target) return;

			// If text is "" or all spaces, DELETE.
			var text = label.text;
			if(/^\s*$/.test(text)){
				// that was all whitespace, KILL.
				page.target = null;
				label.kill();
			}

		};
		page.addComponent(new ComponentButton({
			label: "delete label",
			onclick: function(label){
				label.kill();
				self.showPage("Edit");
			}
		}));
		self.addPage("Label", page);
	})();

	// Original edit landing adapted to local-only scope; node/edge/label pages unchanged.
 (function(){var page=new SidebarPage();page.addComponent(new ComponentHTML({html:"<b>LOOPY (v1.1)</b><p>a tool for thinking in systems</p><p>Draw circles and arrows; select a node to edit. Play to send signals.</p><p>Original local editor by nicky case. Sharing, files, remote examples and embeds are unavailable here. Text/CSS replaces bitmap controls.</p>"}));self.addPage("Edit",page);})();

	// Ctrl-S to SAVE
	subscribe("key/save",function(){
		if(Key.control){ // Ctrl-S or ⌘-S
			publish("modal",["save_link"]);
		}
	});

}

function SidebarPage(){

	// TODO: be able to focus on next component with an "Enter".

	var self = this;
	self.target = null;

	// DOM
	self.dom = document.createElement("div");
	self.show = function(){ self.dom.style.display="block"; self.onshow(); };
	self.hide = function(){ self.dom.style.display="none"; self.onhide(); };

	// Components
	self.components = [];
	self.componentsByID = {};
	self.addComponent = function(propName, component){

		// One or two args
		if(!component){
			component = propName;
			propName = "";
		}

		component.page = self; // tie to self
		component.propName = propName; // tie to propName
		self.dom.appendChild(component.dom); // add to DOM

		// remember component
		self.components.push(component);
		self.componentsByID[propName] = component;

		// return!
		return component;

	};
	self.getComponent = function(propName){
		return self.componentsByID[propName];
	};

	// Edit
	self.edit = function(object){

		// New target to edit!
		self.target = object;

		// Show each property with its component
		for(var i=0;i<self.components.length;i++){
			self.components[i].show();
		}

		// Callback!
		self.onedit();

	};

	// TO IMPLEMENT: callbacks
	self.onedit = function(){};
	self.onshow = function(){};
	self.onhide = function(){};

	// Start hiding!
	self.hide();

}



/////////////////////////////////////////////////////////////////////////////////////////////
// COMPONENTS ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function Component(){
	var self = this;
	self.dom = null;
	self.page = null;
	self.propName = null;
	self.show = function(){
		// TO IMPLEMENT
	};
	self.getValue = function(){
		return self.page.target[self.propName];
	};
	self.setValue = function(value){
		
		// Model's been changed!
		publish("model/changed");

		// Edit the value!
		self.page.target[self.propName] = value;
		self.page.onedit(); // callback!
		
	};
}

function ComponentInput(config){

	// Inherit
	var self = this;
	Component.apply(self);

	// DOM: label + text input
	self.dom = document.createElement("div");
	var label = _createLabel(config.label);
	var className = config.textarea ? "component_textarea" : "component_input";
	var input = _createInput(className, config.textarea);
	input.oninput = function(event){
		self.setValue(input.value);
	};
	self.dom.appendChild(label);
	self.dom.appendChild(input);

	// Show
	self.show = function(){
		input.value = self.getValue();
	};

	// Select
	self.select = function(){
		setTimeout(function(){ input.select(); },10);
	};

}

function ComponentSlider(config){

	// Inherit
	var self = this;
	Component.apply(self);

	// TODO: control with + / -, alt keys??

	// DOM: label + slider
	self.dom = document.createElement("div");
	var label = _createLabel(config.label);
	self.dom.appendChild(label);
	var sliderDOM = document.createElement("div");
	sliderDOM.setAttribute("class","component_slider");
	self.dom.appendChild(sliderDOM);

	// Slider DOM: graphic + pointer
	var slider = document.createElement("div");
	slider.draggable = false;
	slider.textContent=config.options.join("   "); slider.style.background=config.bg==="color"?"linear-gradient(to right,#EA3E3E,#EA9D51,#F2D66D,#A8D475,#7FB6DD,#B69BD5)":"#ddd";
	slider.setAttribute("class","component_slider_graphic");
	var pointer = document.createElement("div");
	pointer.draggable = false;
	pointer.textContent="▲";
	pointer.setAttribute("class","component_slider_pointer");
	sliderDOM.appendChild(slider);
	sliderDOM.appendChild(pointer);
	var movePointer = function(){
		var value = self.getValue();
		var optionIndex = config.options.indexOf(value);
		var x = (optionIndex+0.5) * (250/config.options.length);
		pointer.style.left = (x-7.5)+"px";
	};

	// On click... (or on drag)
	var isDragging = false;
	var onmousedown = function(event){
		isDragging = true;
		sliderInput(event);
	};
	var onmouseup = function(){
		isDragging = false;
	};
	var onmousemove = function(event){
		if(isDragging) sliderInput(event);
	};
	var sliderInput = function(event){

		// What's the option?
		var index = event.x/250;
		var optionIndex = Math.floor(index*config.options.length);
		var option = config.options[optionIndex];
		if(option===undefined) return;
		self.setValue(option);

		// Callback! (if any)
		if(config.oninput){
			config.oninput(option);
		}

		// Move pointer there.
		movePointer();

	};
	_addMouseEvents(slider, onmousedown, onmousemove, onmouseup);

	// Show
	self.show = function(){
		movePointer();
	};

	// BG Color!
	self.setBGColor = function(color){
		slider.style.background = color;
	};

}

function ComponentButton(config){

	// Inherit
	var self = this;
	Component.apply(self);

	// DOM: just a button
	self.dom = document.createElement("div");
	var button = _createButton(config.label, function(){
		config.onclick(self.page.target);
	});
	self.dom.appendChild(button);

	// Unless it's a HEADER button!
	if(config.header){
		button.setAttribute("header","yes");
	}

}

function ComponentHTML(config){

	// Inherit
	var self = this;
	Component.apply(self);

	// just a div
	self.dom = document.createElement("div");
	self.dom.innerHTML = config.html;

}

function ComponentOutput(config){

	// Inherit
	var self = this;
	Component.apply(self);

	// DOM: just a readonly input that selects all when clicked
	self.dom = _createInput("component_output");
	self.dom.setAttribute("readonly", "true");
	self.dom.onclick = function(){
		self.dom.select();
	};

	// Output the string!
	self.output = function(string){
		self.dom.value = string;
	};

}
/**********************************

TOOLBAR CODE

**********************************/

function Toolbar(loopy){

	var self = this;

	// Tools & Buttons
	var buttons = [];
	var buttonsByID = {};
	self.dom = document.getElementById("toolbar");
	self.addButton = function(options){

		var id = options.id;
		var tooltip = options.tooltip;
		var callback = options.callback;

		// Add the button
		var button = new ToolbarButton(self,{
			id: id,
			icon: "css/icons/"+id+".png",
			tooltip: tooltip,
			callback: callback
		});
		self.dom.appendChild(button.dom);
		buttons.push(button);
		buttonsByID[id] = button;

		// Keyboard shortcut!
		(function(id){
			subscribe("key/"+id,function(){
				loopy.ink.reset(); // also CLEAR INK CANVAS
				buttonsByID[id].callback();
			});
		})(id);

	};

	// Select button
	self.selectButton = function(button){
		for(var i=0;i<buttons.length;i++){
			buttons[i].deselect();
		}
		button.select();
	};

	// Set Tool
	self.currentTool = "ink";
	self.setTool = function(tool){
		self.currentTool = tool;
		var name = "TOOL_"+tool.toUpperCase();
		loopy.tool = Loopy[name];
		document.getElementById("canvasses").setAttribute("cursor",tool);
	};

	// Populate those buttons!
	self.addButton({
		id: "ink",
		tooltip: "PE(N)CIL",
		callback: function(){
			self.setTool("ink");
		}
	});
	self.addButton({
		id: "label",
		tooltip: "(T)EXT",
		callback: function(){
			self.setTool("label");
		}
	});
	self.addButton({
		id: "drag",
		tooltip: "MO(V)E",
		callback: function(){
			self.setTool("drag");
		}
	});
	self.addButton({
		id: "erase",
		tooltip: "(E)RASE",
		callback: function(){
			self.setTool("erase");
		}
	});

	// Select button
	buttonsByID.ink.callback();

	// Hide & Show

}

function ToolbarButton(toolbar, config){

	var self = this;
	self.id = config.id;

	// Icon
	self.dom = document.createElement("div");
	self.dom.setAttribute("class", "toolbar_button");
	self.dom.textContent=config.id; self.dom.title=config.tooltip;

	// Tooltip!
	self.dom.setAttribute("data-balloon", config.tooltip);
	self.dom.setAttribute("data-balloon-pos", "right");

	// Selected?
	self.select = function(){
		self.dom.setAttribute("selected", "yes");
	};
	self.deselect = function(){
		self.dom.setAttribute("selected", "no");
	};

	// On Click
	self.callback = function(){
		config.callback();
		toolbar.selectButton(self);
	};
	self.dom.onclick = self.callback;

}
/**********************************

PLAY CONTROLS CODE:
- play
- pause/reset/speed

**********************************/

function PlayControls(loopy){

	var self = this;
	PageUI.call(self, document.getElementById("playbar"));

	self.loopy = loopy;

	// PAGES & BUTTONS

	// PLAY BUTTON's keyboard shortcut
	// TODO: Toggle back & forth??????
	subscribe("key/enter",function(){
		if(Key.control){ // Ctrl-Enter or ⌘-Enter
			loopy.setMode(Loopy.MODE_PLAY);
		}
	});

	// During the Editor
	(function(){
		var page = new Page();

		// PLAY BUTTON
		var buttonDOM = page.addComponent(new PlayButton({
			icon: 0,
			label: "Play",
			tooltip: isMacLike ? "⌘-Enter" : "control-enter",
			onclick: function(){
				loopy.setMode(Loopy.MODE_PLAY);
				//self.showPage("Edit");
			}
		})).dom;
		buttonDOM.setAttribute("big","yes");
		buttonDOM.style.fontSize = "28px";
		buttonDOM.style.height = "35px";

		self.addPage("Editor", page);
	})();

	// During the Player
	(function(){
		var page = new Page();

		if(loopy.embedded){

			// Reset | Remix

			// RESET
			var buttonDOM = page.addComponent(new PlayButton({
				icon: 2,
				label: "Reset",
				onclick: function(){
					publish("model/reset");
				}
			})).dom;
			buttonDOM.style.width = "100px";
			buttonDOM.style.left = "0px";
			buttonDOM.style.top = "0px";

			// REMIX BUTTON
			var buttonDOM = page.addComponent(new PlayButton({
				icon: 3,
				label: "Remix",
				onclick: function(){
					var url = loopy.saveToURL();
					window.open(url,'_blank');
				}
			})).dom;
			buttonDOM.style.width = "100px";
			buttonDOM.style.right = "0px";
			buttonDOM.style.top = "0px";

		}else{

			// Stop | Reset

			// STOP BUTTON
			var buttonDOM = page.addComponent(new PlayButton({
				icon: 1,
				label: "Stop",
				onclick: function(){
					loopy.setMode(Loopy.MODE_EDIT);
				}
			})).dom;
			buttonDOM.style.width = "100px";
			buttonDOM.style.left = "0px";
			buttonDOM.style.top = "0px";

			// RESET BUTTON
			var buttonDOM = page.addComponent(new PlayButton({
				icon: 2,
				label: "Reset",
				onclick: function(){
					publish("model/reset");
				}
			})).dom;
			buttonDOM.style.width = "100px";
			buttonDOM.style.right = "0px";
			buttonDOM.style.top = "0px";

		}

		// SPEED SLIDER
		var speedSlider = page.addComponent(new PlaySlider({
			value: loopy.signalSpeed,
			min:0, max:6, step:0.2,
			oninput: function(value){
				loopy.signalSpeed = value;
			}
		})).dom;
		speedSlider.style.bottom = "0px";

		self.addPage("Player", page);

	})();
	
}

function PlayButton(config){

	var self = this;

	var label = "<div class='play_button_icon' icon='"+config.icon+"'></div> "
				+ "<div class='play_button_label'>"+config.label+"</div>";

	self.dom = _createButton(label, function(){
		config.onclick();
	});

	// Tooltip!
	if(config.tooltip){
		self.dom.setAttribute("data-balloon", config.tooltip);
		self.dom.setAttribute("data-balloon-pos", "top");
	}

}
function PlaySlider(config){

	var self = this;
	self.dom = document.createElement("div");
	self.dom.style.bottom = "0px";
    self.dom.style.position = "absolute";
    self.dom.style.width = "100%";
    self.dom.style.height = "20px";

	// Input
	var input = document.createElement("input");
	input.setAttribute("class","play_slider");
	self.dom.appendChild(input);

	// Properties
	input.type = "range";
	input.value = config.value;
	input.step = config.step;
	input.min = config.min;
	input.max = config.max;
	input.oninput = function(event){
		config.oninput(input.value);
	};

}
function Modal(){this.isShowing=false;}
/**********************************

LOOPY!
- with edit & play mode

TODO: smoother bezier curve?
TODO: when switch away tool, clear the Ink canvas

**********************************/

Ink.MINIMUM_RADIUS = Node.DEFAULT_RADIUS;
Ink.SNAP_TO_RADIUS = 25;

function Ink(loopy){

	var self = this;
	self.loopy = loopy;

	// Create canvas & context
	var canvas = _createCanvas();
	var ctx = canvas.getContext("2d");
	self.canvas = canvas;
	self.context = ctx;

	// Stroke data!
	self.strokeData = [];

	// Drawing!
	self.drawInk = function(){

		if(!Mouse.pressed) return;

		// Last point
		var lastPoint = self.strokeData[self.strokeData.length-1];

		// Style
		ctx.strokeStyle = "#ccc";
		ctx.lineWidth = 5;
		ctx.lineCap = "round";

		// Draw line from last to current
		ctx.beginPath();
		ctx.moveTo(lastPoint[0]*2, lastPoint[1]*2);
		ctx.lineTo(Mouse.x*2, Mouse.y*2);
		ctx.stroke();

		// Update last point
		self.strokeData.push([Mouse.x,Mouse.y]);

	};
	self.reset = function(){
		ctx.clearRect(0,0,canvas.width,canvas.height); // Clear canvas
		self.strokeData = []; // Reset stroke data
	};
	subscribe("mousedown",function(){

		// ONLY WHEN EDITING w INK
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_INK) return;

		// New stroke data
		self.strokeData = [];
		self.strokeData.push([Mouse.x,Mouse.y]);

		// Draw to canvas!
		self.drawInk();

	});
	subscribe("mousemove",function(){

		// ONLY WHEN EDITING w INK
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_INK) return;

		// Draw ink!
		self.drawInk();

	});
	subscribe("mouseup",function(){

		// ONLY WHEN EDITING w INK
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_INK) return;

		if(self.strokeData.length<2) return;
		if(!Mouse.moved) return;

		/*************************
		
		Detect what you drew!
		1. Started in a node?
		1a. If ended near/in a node, it's an EDGE.
		2. If not, it's a NODE. // TODO: actual circle detection?

		*************************/

		// Started in a node?
		var startPoint = self.strokeData[0];
		var startNode = loopy.model.getNodeByPoint(startPoint[0], startPoint[1]);
		if(!startNode) startNode=loopy.model.getNodeByPoint(startPoint[0], startPoint[1], 20); // try again with buffer

		// Ended in a node?
		var endPoint = self.strokeData[self.strokeData.length-1];
		var endNode = loopy.model.getNodeByPoint(endPoint[0], endPoint[1]);
		if(!endNode) endNode=loopy.model.getNodeByPoint(endPoint[0], endPoint[1], 40); // try again with buffer

		// EDGE: started AND ended in nodes
		if(startNode && endNode){

			// Config!
			var edgeConfig = {
				from: startNode.id,
				to: endNode.id
			};

			// If it's the same node...
			if(startNode==endNode){

				// TODO: clockwise or counterclockwise???
				// TODO: if the arc DOES NOT go beyond radius, don't make self-connecting edge. also min distance.

				// Find rotation first by getting average point
				var bounds = _getBounds(self.strokeData);
				var x = (bounds.left+bounds.right)/2;
				var y = (bounds.top+bounds.bottom)/2;
				var dx = x-startNode.x;
				var dy = y-startNode.y;
				var angle = Math.atan2(dy,dx);

				// Then, find arc height.
				var translated = _translatePoints(self.strokeData, -startNode.x, -startNode.y);
				var rotated = _rotatePoints(translated, -angle);
				bounds = _getBounds(rotated);

				// Arc & Rotation!
				edgeConfig.rotation = angle*(360/Math.TAU) + 90;
				edgeConfig.arc = bounds.right;

				// ACTUALLY, IF THE ARC IS *NOT* GREATER THAN THE RADIUS, DON'T DO IT.
				// (and otherwise, make sure minimum distance of radius+25)
				if(edgeConfig.arc < startNode.radius){
					edgeConfig=null;
					loopy.sidebar.edit(startNode); // you were probably trying to edit the node
				}else{
					var minimum = startNode.radius+25;
					if(edgeConfig.arc<minimum) edgeConfig.arc=minimum;
				}

			}else{

				// Otherwise, find the arc by translating & rotating
				var dx = endNode.x-startNode.x;
				var dy = endNode.y-startNode.y;
				var angle = Math.atan2(dy,dx);
				var translated = _translatePoints(self.strokeData, -startNode.x, -startNode.y);
				var rotated = _rotatePoints(translated, -angle);
				var bounds = _getBounds(rotated);
				
				// Arc!
				if(Math.abs(bounds.top)>Math.abs(bounds.bottom)) edgeConfig.arc = -bounds.top;
				else edgeConfig.arc = -bounds.bottom;

			}

			// Add the edge!
			if(edgeConfig){
				var newEdge = loopy.model.addEdge(edgeConfig);
				loopy.sidebar.edit(newEdge);
			}

		}

		// NODE: did NOT start in a node.
		if(!startNode){

			// Just roughly make a circle the size of the bounds of the circle
			var bounds = _getBounds(self.strokeData);
			var x = (bounds.left+bounds.right)/2;
			var y = (bounds.top+bounds.bottom)/2;
			var r = ((bounds.width/2)+(bounds.height/2))/2;

			// Circle can't be TOO smol
			if(r>15){

				// Snap to radius
				/*r = Math.round(r/Ink.SNAP_TO_RADIUS)*Ink.SNAP_TO_RADIUS;
				if(r<Ink.MINIMUM_RADIUS) r=Ink.MINIMUM_RADIUS;*/

				// LOCK TO JUST SMALLEST CIRCLE.
				r = Ink.MINIMUM_RADIUS;

				// Make that node!
				var newNode = loopy.model.addNode({
					x:x,
					y:y,
					radius:r
				});

				// Edit it immediately
				loopy.sidebar.edit(newNode);

			}

		}

		// Reset.
		self.reset();

	});
	subscribe("mouseclick",function(){

		// ONLY WHEN EDITING w INK
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_INK) return;

		// Reset
		self.reset();

	});

}
/**********************************

DRAGGER

**********************************/

function Dragger(loopy){

	var self = this;
	self.loopy = loopy;

	// Dragging anything?
	self.dragging = null;
	self.offsetX = 0;
	self.offsetY = 0;

	subscribe("mousedown",function(){

		// ONLY WHEN EDITING w DRAG
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_DRAG) return;

		// Any node under here? If so, start dragging!
		var dragNode = loopy.model.getNodeByPoint(Mouse.x, Mouse.y);
		if(dragNode){
			self.dragging = dragNode;
			self.offsetX = Mouse.x - dragNode.x;
			self.offsetY = Mouse.y - dragNode.y;
			loopy.sidebar.edit(dragNode); // and edit!
			return;
		}

		// Any label under here? If so, start dragging!
		var dragLabel = loopy.model.getLabelByPoint(Mouse.x, Mouse.y);
		if(dragLabel){
			self.dragging = dragLabel;
			self.offsetX = Mouse.x - dragLabel.x;
			self.offsetY = Mouse.y - dragLabel.y;
			loopy.sidebar.edit(dragLabel); // and edit!
			return;
		}

		// Any edge under here? If so, start dragging!
		var dragEdge = loopy.model.getEdgeByPoint(Mouse.x, Mouse.y);
		if(dragEdge){
			self.dragging = dragEdge;
			self.offsetX = Mouse.x - dragEdge.labelX;
			self.offsetY = Mouse.y - dragEdge.labelY;
			loopy.sidebar.edit(dragEdge); // and edit!
			return;
		}

	});
	subscribe("mousemove",function(){

		// ONLY WHEN EDITING w DRAG
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_DRAG) return;

		// If you're dragging a NODE, move it around!
		if(self.dragging && self.dragging._CLASS_=="Node"){

			// Model's been changed!
			publish("model/changed");
			
			var node = self.dragging;
			node.x = Mouse.x - self.offsetX;
			node.y = Mouse.y - self.offsetY;

			// update coz visual glitches
			loopy.model.update();
			
		}

		// If you're dragging an EDGE, move it around!
		if(self.dragging && self.dragging._CLASS_=="Edge"){

			// Model's been changed!
			publish("model/changed");

			var edge = self.dragging;
			var labelX = Mouse.x - self.offsetX;
			var labelY = Mouse.y - self.offsetY;

			if(edge.from!=edge.to){

				// The Arc: whatever label *Y* is, relative to angle & first node's pos
				var fx=edge.from.x, fy=edge.from.y, tx=edge.to.x, ty=edge.to.y;
				var dx=tx-fx, dy=ty-fy;
				var a = Math.atan2(dy,dx);

				// Calculate arc
				var points = [[labelX,labelY]];
				var translated = _translatePoints(points, -fx, -fy);
				var rotated = _rotatePoints(translated, -a);
				var newLabelPoint = rotated[0];

				// ooookay.
				edge.arc = -newLabelPoint[1]; // WHY NEGATIVE? I DON'T KNOW.

			}else{

				// For SELF-ARROWS: just get angle & mag for label.
				var dx = labelX - edge.from.x,
					dy = labelY - edge.from.y;
				var a = Math.atan2(dy,dx);
				var mag = Math.sqrt(dx*dx + dy*dy);

				// Minimum mag
				var minimum = edge.from.radius+25;
				if(mag<minimum) mag=minimum;

				// Update edge
				edge.arc = mag;
				edge.rotation = a*(360/Math.TAU)+90;

			}

			// update coz visual glitches
			loopy.model.update();

		}

		// If you're dragging a LABEL, move it around!
		if(self.dragging && self.dragging._CLASS_=="Label"){

			// Model's been changed!
			publish("model/changed");
			
			var label = self.dragging;
			label.x = Mouse.x - self.offsetX;
			label.y = Mouse.y - self.offsetY;

			// update coz visual glitches
			loopy.model.update();
			
		}

	});
	subscribe("mouseup",function(){

		// ONLY WHEN EDITING w DRAG
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_DRAG) return;

		// Let go!
		self.dragging = null;
		self.offsetX = 0;
		self.offsetY = 0;

	});

}
/**********************************

ERASER

**********************************/

function Eraser(loopy){

	var self = this;
	self.loopy = loopy;

	self.erase = function(clicked){

		// ONLY WHEN EDITING w DRAG
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_ERASE) return;

		// Erase any nodes under here
		if(Mouse.pressed || clicked){
			var eraseNode = loopy.model.getNodeByPoint(Mouse.x, Mouse.y);
			if(eraseNode) eraseNode.kill();
		}

		// Erase any edges under here
		if(Mouse.pressed || clicked){
			var eraseEdge = loopy.model.getEdgeByPoint(Mouse.x, Mouse.y, true);
			if(eraseEdge) eraseEdge.kill();
		}

		// Erase any labels under here
		if(Mouse.pressed || clicked){
			var eraseLabel = loopy.model.getLabelByPoint(Mouse.x, Mouse.y);
			if(eraseLabel) eraseLabel.kill();
		}

	};

	subscribe("mousemove",function(){
		self.erase();
	});
	subscribe("mouseclick",function(){
		self.erase(true);
	});

}
/**********************************

LABELLER

**********************************/

function Labeller(loopy){

	var self = this;
	self.loopy = loopy;

	self.tryMakingLabel = function(){

		// ONLY WHEN EDITING w LABEL
		if(self.loopy.mode!=Loopy.MODE_EDIT) return;
		if(self.loopy.tool!=Loopy.TOOL_LABEL) return;

		// And if ALREADY EDITING LABEL, just GO TO TOP.
		if(self.loopy.sidebar.currentPage.id == "Label"){
			loopy.sidebar.showPage("Edit");
			return;
		}

		// Otherwise, make it & edit it!
		var newLabel = loopy.model.addLabel({
			x: Mouse.x,
			y: Mouse.y+10 // whatever, to make text actually centered.
		});
		loopy.sidebar.edit(newLabel);

	};

}

window.__loopyDead=false;
function stopLoopy(){if(window.__loopyDead)return;window.__loopyDead=true;if(window.loopy&&loopy.pause)loopy.pause();window.onresize=null;window.onbeforeunload=null;for(const e of [window,document,...document.querySelectorAll('*')])for(const p of ['onclick','oninput','onchange','onmousedown','onmouseup','onmousemove','ontouchstart','ontouchmove','ontouchend','onkeydown','onkeyup'])try{e[p]=null}catch{}; publish=function(){};subscribe=function(){};window.__loopyLifetime.release();document.body.replaceChildren();}
window.__loopyLifetime.setShutdown(stopLoopy);
try {window.loopy=new Loopy();window.addEventListener('visibilitychange',function(){document.hidden?loopy.pause():loopy.resume()});document.addEventListener('visibilitychange',function(){document.hidden?loopy.pause():loopy.resume()});}catch(e){stopLoopy();const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='LOOPY unavailable. Close and reopen to retry.';document.body.append(p);}
