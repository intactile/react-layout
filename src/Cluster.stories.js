import React from 'react';
import Cluster from './Cluster';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Cluster',
  component: Cluster,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
    justify: {
      options: [
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'center',
        'stretch',
      ],
      control: { type: 'select' },
    },
    align: {
      options: [
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'center',
        'stretch',
      ],
      control: { type: 'select' },
    },
  },
};

const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];

const Tag = ({ children }) => (
  <div style={{ padding: 14, border: '1px solid black' }}>{children}</div>
);

const Template = (args) => (
  <Cluster {...args}>
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </Cluster>
);

const defaultArgs = {
  space: CSS_VARIABLES.space.s1,
  justify: 'flex-start',
  align: 'flex-start',
};

export const Default = Template.bind({});
Default.args = defaultArgs;
