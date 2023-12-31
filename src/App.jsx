import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './assets/style/main.css'
import { ToyIndex } from './pages/ToyIndex'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { ToyDetails } from './pages/ToyDetails'

export function App() {

  return (
      <Provider store={store}>
          <Router>
              <section className="main-layout app">
                  <AppHeader />
                  <main>
                      <Routes>
                           <Route element={<HomePage />} path="/" />
                          <Route element={<ToyIndex />} path="/toy" /> 
                          <Route element={<ToyDetails />} path="/toy/:toyId" /> 
                      </Routes>
                  </main>
              </section>
          </Router>
      </Provider>
  )
     
  
}