// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState, useMemo, type CSSProperties} from 'react';
import {Layout, LayoutHeader, LayoutContent} from '@astryxdesign/core/Layout';
import {Text, Heading} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {ToggleButton, ToggleButtonGroup} from '@astryxdesign/core/ToggleButton';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Divider} from '@astryxdesign/core/Divider';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack, StackItem} from '@astryxdesign/core/Stack';
import {DropdownMenu} from '@astryxdesign/core/DropdownMenu';
import {OverflowList} from '@astryxdesign/core/OverflowList';
import {Center} from '@astryxdesign/core/Center';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

interface LibraryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'Component' | 'Pattern' | 'Utility';
  imageUrl?: string;
}

const CATEGORIES = ['All', 'Layout', 'Forms', 'Navigation', 'Feedback', 'Data'];

const ITEMS: LibraryItem[] = [
  {
    id: '1',
    name: 'Stack',
    description:
      'Vertical and horizontal stack layouts with configurable gap and alignment.',
    category: 'Layout',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28161%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28161%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28161%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28161%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '2',
    name: 'Grid',
    description:
      'Responsive grid container with auto-fit columns and gap control.',
    category: 'Layout',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28155%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28155%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28155%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28155%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '3',
    name: 'Card',
    description:
      'Surface container with optional padding, border, and shadow variants.',
    category: 'Layout',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28282%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28282%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28282%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28282%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '4',
    name: 'Center',
    description: 'Centers its child both horizontally and vertically.',
    category: 'Layout',
    type: 'Utility',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28196%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28196%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28196%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28196%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '5',
    name: 'Section',
    description: 'Semantic page section with optional heading and divider.',
    category: 'Layout',
    type: 'Pattern',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28130%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28130%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28130%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28130%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '6',
    name: 'Collapsible',
    description: 'Expandable region with animated height transition.',
    category: 'Layout',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2849%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2849%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2849%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2849%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '7',
    name: 'TextInput',
    description:
      'Single-line text field with label, placeholder, and validation states.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2833%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2833%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2833%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2833%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '8',
    name: 'TextArea',
    description: 'Multi-line text field with auto-resize and character count.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28336%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28336%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28336%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28336%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '9',
    name: 'CheckboxInput',
    description: 'Checkbox with label, indeterminate state, and group support.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2889%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2889%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2889%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2889%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '10',
    name: 'RadioList',
    description: 'Group of radio buttons with accessible fieldset wrapper.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28304%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28304%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28304%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28304%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '11',
    name: 'Switch',
    description: 'Toggle switch for binary on/off settings.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28159%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28159%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28159%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28159%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '12',
    name: 'Selector',
    description:
      'Dropdown or inline option selector with single and multi-select modes.',
    category: 'Forms',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2856%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2856%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2856%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2856%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '13',
    name: 'TabList',
    description:
      'Horizontal tab navigation with underline indicator and keyboard support.',
    category: 'Navigation',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%289%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%289%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%289%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%289%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '14',
    name: 'TopNav',
    description: 'Application top bar with logo, nav links, and action slots.',
    category: 'Navigation',
    type: 'Pattern',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28201%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28201%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28201%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28201%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '15',
    name: 'SideNav',
    description:
      'Vertical sidebar navigation with collapsible groups and active states.',
    category: 'Navigation',
    type: 'Pattern',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2860%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2860%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2860%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2860%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '16',
    name: 'Breadcrumbs',
    description: 'Path trail navigation with separator and truncation support.',
    category: 'Navigation',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28223%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28223%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28223%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28223%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '17',
    name: 'Pagination',
    description:
      'Page navigation with prev/next controls and page count display.',
    category: 'Navigation',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28313%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28313%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28313%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28313%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '18',
    name: 'MobileNav',
    description: 'Slide-out navigation drawer for mobile viewports.',
    category: 'Navigation',
    type: 'Pattern',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28296%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28296%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28296%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28296%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '19',
    name: 'Badge',
    description:
      'Compact label for status, count, or category with semantic color variants.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28266%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28266%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28266%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28266%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '20',
    name: 'Banner',
    description:
      'Full-width alert bar for info, success, warning, and error messages.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28140%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28140%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28140%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28140%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '21',
    name: 'Spinner',
    description: 'Animated loading indicator with size and color variants.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28311%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28311%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28311%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28311%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '22',
    name: 'ProgressBar',
    description: 'Horizontal bar indicating task completion percentage.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2892%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2892%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2892%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2892%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '23',
    name: 'StatusDot',
    description:
      'Small dot indicator for presence, health, or pipeline status.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28201%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28201%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28201%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28201%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '24',
    name: 'Tooltip',
    description:
      'Contextual label that appears on hover with configurable placement.',
    category: 'Feedback',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%2815%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%2815%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%2815%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%2815%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '25',
    name: 'Table',
    description:
      'Feature-rich data table with sorting, selection, and column resizing.',
    category: 'Data',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28194%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28194%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28194%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28194%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '26',
    name: 'Avatar',
    description:
      'User profile image with fallback initials and status dot support.',
    category: 'Data',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28272%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28272%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28272%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28272%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '27',
    name: 'Skeleton',
    description:
      'Placeholder shimmer for loading states matching content shapes.',
    category: 'Data',
    type: 'Utility',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28152%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28152%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28152%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28152%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '28',
    name: 'HoverCard',
    description: 'Rich popover that appears on hover with arbitrary content.',
    category: 'Data',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28269%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28269%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28269%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28269%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '29',
    name: 'PowerSearch',
    description:
      'Command-palette style search with grouped results and keyboard nav.',
    category: 'Data',
    type: 'Pattern',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28217%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28217%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28217%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28217%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
  {
    id: '30',
    name: 'Typeahead',
    description:
      'Autocomplete input with async suggestion loading and selection.',
    category: 'Data',
    type: 'Component',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22400%22%20viewBox%3D%220%200%20640%20400%22%3E%3Crect%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22hsl%28194%2C32%25%2C84%25%29%22%2F%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%2290%22%20r%3D%2256%22%20fill%3D%22hsl%28194%2C45%25%2C58%25%29%22%2F%3E%3Cpath%20d%3D%22M0%20400V290L160%2090L380%20350L520%20180L640%20320V400Z%22%20fill%3D%22hsl%28194%2C28%25%2C42%25%29%22%2F%3E%3Ctext%20x%3D%2224%22%20y%3D%2236%22%20font-size%3D%2218%22%20font-family%3D%22system-ui%2Csans-serif%22%20fill%3D%22hsl%28194%2C30%25%2C28%25%29%22%3ELocal%20decorative%20fixture%3C%2Ftext%3E%3C%2Fsvg%3E',
  },
];

const thumbnailWrapper: CSSProperties = {
  position: 'relative',
  aspectRatio: '16/9',
  overflow: 'clip',
  flexShrink: 0,
};
const thumbnailImage: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// =============================================================================
// Side Nav
// =============================================================================

function LibraryCard({item}: {item: LibraryItem}) {
  return (
    <Card padding={0}>
      <div style={thumbnailWrapper}>
        <img src={item.imageUrl} alt={item.name} style={thumbnailImage} />
      </div>
      <Section variant="transparent" padding={4}>
        <VStack gap={1}>
          <Heading level={3}>{item.name}</Heading>
          <Text type="body" size="sm" color="secondary">
            {item.description}
          </Text>
        </VStack>
      </Section>
    </Card>
  );
}

function LibrarySection({
  category,
  items,
}: {
  category: string;
  items: LibraryItem[];
}) {
  return (
    <VStack gap={6}>
      <Heading level={2}>{category}</Heading>
      <Grid columns={{minWidth: 320}} gap={4}>
        {items.map(item => (
          <LibraryCard key={item.id} item={item} />
        ))}
      </Grid>
    </VStack>
  );
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');

  const filtered = useMemo(() => {
    let items =
      activeTab === 'All' ? ITEMS : ITEMS.filter(i => i.category === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        i =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q),
      );
    }
    const sorted = [...items];
    if (sortOrder === 'A-Z') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'Z-A') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === 'Newest') {
      sorted.sort((a, b) => Number(b.id) - Number(a.id));
    }
    return sorted;
  }, [activeTab, search, sortOrder]);

  const groupedSections = useMemo(() => {
    if (activeTab !== 'All') {
      return null;
    }
    const order = CATEGORIES.filter(c => c !== 'All');
    const map = new Map<string, LibraryItem[]>();
    for (const item of filtered) {
      let group = map.get(item.category);
      if (!group) {
        group = [];
        map.set(item.category, group);
      }
      group.push(item);
    }
    return order
      .filter(cat => map.has(cat))
      .map(cat => ({category: cat, items: map.get(cat) ?? []}));
  }, [activeTab, filtered]);

  return (
    <Layout
      header={
        <LayoutHeader hasDivider padding={6}>
          <Heading level={1}>Library</Heading>
        </LayoutHeader>
      }
      content={
        <LayoutContent padding={6}>
          <VStack gap={6}>
            <VStack gap={4}>
              <TextInput
                label="Search"
                isLabelHidden
                placeholder="Search..."
                value={search}
                onChange={setSearch}
                startIcon={MagnifyingGlassIcon}
                size="lg"
              />
              <HStack vAlign="center" gap={4}>
                <StackItem size="fill">
                  <VStack>
                    <ToggleButtonGroup
                      label="Filter by category"
                      value={activeTab}
                      onChange={v => setActiveTab(v ?? 'All')}>
                      <OverflowList
                        gap={1}
                        behavior="observeParent"
                        overflowRenderer={overflowItems => (
                          <DropdownMenu
                            button={{
                              label: `+${overflowItems.length}`,
                              variant: 'ghost',
                              size: 'lg',
                            }}
                            items={overflowItems.map(({index}) => ({
                              label: CATEGORIES[index],
                              onClick: () => setActiveTab(CATEGORIES[index]),
                            }))}
                          />
                        )}>
                        {CATEGORIES.map(cat => (
                          <ToggleButton
                            key={cat}
                            label={cat}
                            value={cat}
                            size="lg"
                          />
                        ))}
                      </OverflowList>
                    </ToggleButtonGroup>
                  </VStack>
                </StackItem>
                <DropdownMenu
                  button={{label: sortOrder, size: 'lg'}}
                  items={[
                    {label: 'A-Z', onClick: () => setSortOrder('A-Z')},
                    {label: 'Z-A', onClick: () => setSortOrder('Z-A')},
                    {label: 'Newest', onClick: () => setSortOrder('Newest')},
                  ]}
                />
              </HStack>
            </VStack>

            {filtered.length === 0 ? (
              <Center>
                <Text type="supporting" color="secondary">
                  No results found.
                </Text>
              </Center>
            ) : (
              <VStack gap={6}>
                {(
                  groupedSections ?? [{category: activeTab, items: filtered}]
                ).flatMap(section => [
                  <Divider key={`d-${section.category}`} />,
                  <LibrarySection
                    key={section.category}
                    category={section.category}
                    items={section.items}
                  />,
                ])}
              </VStack>
            )}
          </VStack>
        </LayoutContent>
      }
    />
  );
}
