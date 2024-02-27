import { useRoutes } from 'react-router-dom'
import App from './App'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import CarouselDemo from './pages/CarouselDemo/CarouselDemo.jsx'

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/'
    },
    {
      element: <ProductDetail />,
      path: '/product/:id'
    },
    {
      element: <CarouselDemo />,
      path: '/carouselDemo'
    }
  ])
}

export default AppRouter
