import React from 'react';
import Frame from './Frame';

export default {
  title: 'Layout/Frame',
  component: Frame,
};

const Template = (args) => (
  <Frame {...args}>
    <img src="https://via.placeholder.com/200" alt="" />
  </Frame>
);

export const Default = Template.bind({});
Default.args = {
  ratio: '16:9',
};
