import React from 'react';
import Cover from './Cover';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Cover',
  component: Cover,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <Cover {...args}>
    <h1>Centered element of the cover</h1>
  </Cover>
);

const TemplateWithFooter = (args) => (
  <Cover {...args}>
    <h1>Centered element of the cover</h1>
    <footer>Footer of the cover</footer>
  </Cover>
);

const TemplateWithHeader = (args) => (
  <Cover {...args}>
    <header>Header of the cover</header>
    <h1>Centered element of the cover</h1>
  </Cover>
);

const TemplateWithHeaderAndFooter = (args) => (
  <Cover {...args}>
    <header>Header of the cover</header>
    <h1>Centered element of the cover</h1>
    <footer>Footer of the cover</footer>
  </Cover>
);

const defaultArgs = {
  space: CSS_VARIABLES.space.s1,
  centered: 'h1',
  minHeight: '300px',
  noPad: false,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithFooter = TemplateWithFooter.bind({});
WithFooter.args = defaultArgs;

export const WithHeader = TemplateWithHeader.bind({});
WithHeader.args = defaultArgs;

export const WithHeaderAndFooter = TemplateWithHeaderAndFooter.bind({});
WithHeaderAndFooter.args = defaultArgs;
