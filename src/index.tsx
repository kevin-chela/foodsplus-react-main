import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { GoogleOAuthProvider } from '@react-oauth/google';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './assets/styles.css'

import AppContext  from './context/context'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <GoogleOAuthProvider clientId="618533973361-1f7pju92ia4kmogp9lc641upc25pp0s5.apps.googleusercontent.com">
  <React.StrictMode>
    <AppContext>
    <App />
    </AppContext>
  </React.StrictMode>
  </GoogleOAuthProvider>
)
