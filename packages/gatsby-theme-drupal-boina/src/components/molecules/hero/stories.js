import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text,
  select
} from '@storybook/addon-knobs';

import Hero from '.';

const options = {
  red: 'Red',
  purple: 'Purple',
  blue: 'Blue',
  orange: 'Orange',
  'red-purple-diagonal': 'Red - Purple (Diagonal)',
  'orange-red-diagonal': 'Orange - Red (Diagonal)',
  'blue-red-diagonal': 'Blue - Red (Diagonal)',
  'purple-blue': 'Purple - Blue',
  'red-orange': 'Red - Orange',
  'blue-orange': 'Blue - Orange'
};

storiesOf('Molecules/Hero', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Default', () => (<Hero
    title={text('Title', 'Blog Name')}
    image={text('Image', '../../../../static/hero-cover.jpg')}
    color={select('Color', options, 'blue')}
    tagline={text('Tagline', 'Blog Tagline')}
  />
  ));
