import './App.css'
import Login from './component/Login'
import {Route, Routes} from 'react-router-dom';
import NoMatch from './component/NoMatch';
import {useSelector} from 'react-redux';
import { lazy,Suspense } from 'react';
import Loading from './component/Loading';
let Post = lazy(()=> import('./component/Post'))
function App() {
  let isLoggedIn = useSelector(state=> state.loginData.isloggedin);
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='' element={<Login/>}/>
          {isLoggedIn?
            <Route path='/posts' element={ <Post/> }/>
          :''
          }
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Suspense>
    </>
  )
}
export default App