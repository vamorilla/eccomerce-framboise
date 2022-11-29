import './App.css';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Products from './components/Products';
import CheckOutPage from './components/CheckOutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/checkOutForm/Checkout';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      }
    })
  }, []);

  return (
    <Router>
        <div className="App">
            <header>
              <NavBar />
            </header>
            <main>
              <Routes>
                <Route exact path='/checkout-page' element={<CheckOutPage />}></Route>
                <Route path='/' element={<Products />}></Route>
                <Route path='/signIn' element={<SignIn />}></Route>
                <Route path='/signUp' element={<SignUp />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
              </Routes>
            </main>
        </div>
    </Router>
    
  );
}

export default App;
