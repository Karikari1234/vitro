import path from 'path'
import fs from 'fs'
import snapshot from 'snap-shot-it'
import transform from '../src/transform'
import { DEFAULT_JSC_OPTIONS } from '../src/'
import { applyTransform } from 'jscodeshift/dist/testUtils'

it('codemod', () => {
    const source = `
    /* eslint-disable */
    import React from 'react';
    import Button from './Button';

    import { storiesOf, configure } from '@storybook/react';
    import { action } from '@storybook/addon-actions';

    storiesOf('Button', module)
    .add('story1', () => <Button label="Story 1" />)
    .add('second story', () => <Button label="Story 2" onClick={action('click')} />)
    .add('complex story', () => (
        <div>
        <Button label="The Button" onClick={action('onClick')} />
        <br />
        </div>
    ))
    .add('w/punctuation', () => <Button label="Story 2" onClick={action('click')} />)
    .add('Start Case', () => <Button label="Story 2" onClick={action('click')} />);
    `
    snapshot(
        applyTransform(transform, DEFAULT_JSC_OPTIONS, {
            source,
            path: '',
        }),
    )
})
