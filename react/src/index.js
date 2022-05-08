import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader'
import { GlobalContextProvider } from './context/GlobalContext'

ReactDOM.render(
<GlobalContextProvider>
    <App />
</GlobalContextProvider>,
 document.getElementById('root'))
registerServiceWorker()
applyPolyfills().then(() => {
    defineCustomElements(window)
})