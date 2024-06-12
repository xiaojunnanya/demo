import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Loading from './components/Loading/index.tsx'

import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
)