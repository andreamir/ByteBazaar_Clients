import { useRoutes } from 'react-router-dom'
import App from './App'

function AppRouter() {
  return useRoutes ([
    { 
    element: <App/>,// components
    path: '/',  //ruta
    }
  ]
  )
}

export default AppRouter;
