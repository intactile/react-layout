import React from 'react';
import Reel from './Reel';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Reel',
  component: Reel,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <Reel {...args}>
    <img src="https://via.placeholder.com/100" alt="" />
    <img src="https://via.placeholder.com/100" alt="" />
    <img src="https://via.placeholder.com/100" alt="" />
    <img src="https://via.placeholder.com/100" alt="" />
    <img src="https://via.placeholder.com/100" alt="" />
  </Reel>
);

export const Default = Template.bind({});
Default.args = {
  space: CSS_VARIABLES.space.s0,
  itemWidth: 'auto',
  height: 'auto',
  noBar: false,
};
