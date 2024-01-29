import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Route, Routes, useLoaderData } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/News/Settings';
import NavContainer from './components/Nav/NavContainer';


import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
//import Login from './components/Login/Login';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux_store';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Login = lazy(() => import('./components/Login/Login'))




class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
    
  }
  
  render(){
    if(this.props.initialized){
      return <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavContainer />
      <div className='app-wrapper-content'>
      <Suspense fallback={<Preloader />}>
       <Routes>
        
          <Route path="/dialogs/*" element={
        
            <DialogsContainer />
          }/>
          <Route path="/profile/:userId?"  element={
            <ProfileContainer />}/>
            
          <Route path='/login*' element={<Login />}/>
          <Route path='/news/*' Component={News}/>
          <Route path='/music/*' Component={Music}/>
          <Route path='/settings/*' Component={Settings}/>
          <Route path='/users/*' element={<UsersContainer />}/>
          
          </Routes>
          </Suspense>
         {/*<Profile />*/}
         {/*<Dialogs />*/}
        </div>
       
      </div> 
      
      </BrowserRouter>
    
    }
    else  {return <Preloader />}
    
  }
    
}


const mapStateToProps=(state)=>{
  return {
    initialized:state.app.initialized,
  }
}

let AppContainer = compose( 
  connect(mapStateToProps,{initializeApp})) (App);

let SocialNetworkApp = (props)=>{
  return<React.StrictMode>
    <Provider store={store}>
      <AppContainer /> 
    </Provider>
  </React.StrictMode>
}
export default SocialNetworkApp;