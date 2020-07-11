import * as exported from '@/../example-package/src/anotherStory.story'
import { default as GlobalWrapper } from '@/../example-package/src/Wrapper'
import React from 'react'
import { StoryPage } from 'storyboards/src/story'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/example-package/src/anotherStory.story.tsx'

export default function Page() {
    return (
        <StoryPage
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
