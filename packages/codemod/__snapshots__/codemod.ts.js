exports['codemod 1'] = `
/* eslint-disable */
import React from 'react';
import Button from './Button';

import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Story1 = () => <Button label="Story 1" />;

Story1.story = {
  name: 'story1',
};

export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;

SecondStory.story = {
  name: 'second story',
};

export const ComplexStory = () => (
  <div>
    <Button label="The Button" onClick={action('onClick')} />
    <br />
  </div>
);

ComplexStory.story = {
  name: 'complex story',
};

export const WPunctuation = () => <Button label="Story 2" onClick={action('click')} />;

WPunctuation.story = {
  name: 'w/punctuation',
};

export const StartCase = () => <Button label="Story 2" onClick={action('click')} />;
`
