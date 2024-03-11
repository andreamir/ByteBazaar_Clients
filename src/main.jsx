import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingListProvider } from './contexts/ShoppingListContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Footer from './components/Footer/Footer.jsx'
import { FiltersProvider } from './contexts/FiltersContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

const logoSource = ''
// const title = 'BYTEBAZAAR'
const title = {name: 'BYTEbazaar', path: '/'}
const tabElements = [
	{title: 'Home', path: '/'} ,
  {title: 'Catalog', path: '/gamecatalog'},
  {title: 'Game Title Management', path: '/gameTitleManagement'},
	// {title: 'My account', path: ''}
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
			<BrowserRouter>
        <AuthProvider>
          <ShoppingListProvider>
            <Navbar key='navbar' title = {title} logo= {logoSource} elements = {tabElements}/>
            <FiltersProvider>
              <AppRouter/>
            </FiltersProvider>
          </ShoppingListProvider>
        </AuthProvider>
			</BrowserRouter>
			<Footer/>
    </>
)
