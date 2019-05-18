import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '.';

storiesOf('Atoms/Button', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Plain', () => {
    const content = text('Label', 'Hello');
    return (<Button onClick={action('button click')}>{content}</Button>);
  });
