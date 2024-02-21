import Header from './pages/Header'
import Main from './pages/Main'
import About from './pages/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './pages/NotFound'
import Location from './pages/Location'
import { ReactQuertTest } from './pages/ReactQueryTest'

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />}>
            <Route path='location' element={<Location />}></Route>
          </Route>
          <Route path='/test' element={<ReactQuertTest />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
