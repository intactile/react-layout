# React Layout

The [Every Layout](https://every-layout.dev) layouts implemented as a set of React components.

## Install 

```
$ yarn add @intactile/react-layout
```

## Setup

This set of components is highly opiniated and as advised in “Every Layout” it makes use of a modular scale to set some sensible default.
You should define at least 2 custom css properties: `--s1` (default spacing value) and `--measure` (sensible default for the length of a text line).
I encourage you to start with the following scale and adapt it to your needs.

```
:root {
  --ratio: 1.5;
  --s-5: calc(var(--s-4) / var(--ratio));
  --s-4: calc(var(--s-3) / var(--ratio));
  --s-3: calc(var(--s-2) / var(--ratio));
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: 1rem;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));

  --measure: 65ch;
}
```

## Use

```
import * as L from '@intactile/react-layout';

function MyComponent() {
  return (
    <L.Box>content</L.Box>
  );
}
```

## Layouts

Six differents layouts are currently implemented: Box, Center, Cluster, Sidebar, Stack and Switcher.

### Box

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| padding | string | `var(--s1)` | Set the padding around the box, accept any valid css size value |
| borderWidth | number | `1` | Set the width of the border around the box |

### Center

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| gutters | string | `null` | Set the gutters on each side of the layout, accept any valid css size value |
| max | string | `var(--measure)` | Set the max width of the layout, accept any valid css size value |
| andText | bool | `false` | Should the text inside the layout also be centered or not? |
| intrinsic | bool | `false` | Should the “nodes” inside the layout also be centered or not? |

### Cluster

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| space | string | `var(--s1)` | Set the gutters on each side of the layout, accept any valid css size value |
| justify | string | `flex-start` | Use a valid `justify-content` css property value |
| align | string | `flex-start` | Use a valid `align-items` css property value |

### Sidebar

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| side | string | `left` | Which element to treat as the sidebar, accept "left" or "right" |
| sideWidth | string | `null` | Represents the width of the sidebar when adjacent. If not set (null) it defaults to the sidebar's content width |
| contentMin | string | `50%` | A CSS percentage value. The minimum width of the content element in the horizontal configuration |
| space | string | `var(--s1)` | Set the space between the sidebar and the main content, accept any valid css margin value |

### Stack

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| space | string | `var(--s1)` | Set the space between each children of the layout, accept any valid css margin value |
| splitAfter | number | `null` | The element after which to split the stack with an auto margin |

### Switcher

#### Props

| Name         | Type    | Default  | Description |
| ------------ | ------- | -------- | ----------- |
| space | string | `var(--s1)` | Set the space between each children of the layout, accept any valid css margin value |
| threshold | number | `var(--measure)` | Represent the container breakpoint, accept any valid css width value |
| limit | number | `4` | Represent the maximum number of items allowed for a horizontal layout |

