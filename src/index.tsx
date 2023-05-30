import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './assets/styles.css'

import AppContext  from './context/context'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <AppContext>
    <App />
    </AppContext>
  </React.StrictMode>
)
