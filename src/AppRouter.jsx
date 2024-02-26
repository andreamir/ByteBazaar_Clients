import { useRoutes } from 'react-router-dom'
import App from './App'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/'
    },
    {
      element: <ProductDetail />,
      path: '/productDetail'
    }
  ])
}

export default AppRouter