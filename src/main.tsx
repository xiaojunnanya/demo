import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Loading from './components/Loading/index.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>,
)