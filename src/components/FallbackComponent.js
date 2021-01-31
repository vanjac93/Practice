import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function FallbackComponent() {
    return (
        <Dimmer active>
            <Loader content="Loading..." />
        </Dimmer>
    )
}
