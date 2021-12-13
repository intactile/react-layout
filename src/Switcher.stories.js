import React from 'react';
import Switcher from './Switcher';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Switcher',
  component: Switcher,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
    limit: {
      control: {
        type: 'range',
        step: 1,
        min: 1,
        max: 10,
      }
    }
  },
};

const Template = (args) => <Switcher {...args}><div>Content</div><div>Content</div></Switcher>;

const defaultArgs = {
  space: CSS_VARIABLES.space.s1,
  threshold: CSS_VARIABLES.measure,
  limit: 4,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

