import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../public/assets/fonts/styles.css'
import '../public/index.css'
import {Languages} from '~/Constants'

import { render } from 'react-dom'

import App from '~/App'

render(<App />, document.querySelector('#app'))
