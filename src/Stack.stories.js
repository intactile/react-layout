import React from 'react';
import Stack from './Stack';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Stack {...args}><div>Content</div><div>Content</div></Stack>;

const defaultArgs = {
  space: CSS_VARIABLES.space.s1,
  splitAfter: null,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

