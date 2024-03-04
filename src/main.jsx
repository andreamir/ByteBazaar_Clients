import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingListProvider } from './contexts/ShoppingListContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Footer from './components/Footer/Footer.jsx'

const logoSource = ''
const title = 'BYTEBAZAAR'
const tabElements = [{title: 'Home', path: './gameCardDemo'} , {title: 'My account', path: ''} ]

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
			<BrowserRouter>
				<ShoppingListProvider>
					<Navbar key='navbar' title = {title} logo= {logoSource} elements = {tabElements}/>
					<AppRouter/>
				</ShoppingListProvider>
			</BrowserRouter>
			<Footer/>
    </>
)
