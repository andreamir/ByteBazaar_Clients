import ReactDOM from 'react-dom/client'
// import AppRouter from './AppRouter.jsx'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
)
