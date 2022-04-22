import React,{useEffect,useState} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Form from './components/Form/Form'


import Posts from "./pages/Posts/Posts";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { useDispatch } from "react-redux";
import {getPosts} from './store/actions/posts'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

const [currentId,setCurrentId] = useState(null)  
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getPosts())
},[dispatch,currentId])

  return (
    
    <div className="App">
    <ToastContainer />
    <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/create"><Form currentId={currentId} setCurrentId={setCurrentId} /></Route>
        <Route exact path="/posts"><Posts setCurrentId={setCurrentId} /></Route>
      </Switch>
    </div>
  );
};

export default App;
