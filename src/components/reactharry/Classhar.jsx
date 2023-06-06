
import React, { Component } from 'react'
import  Navvv from "./Navvv";
import News from './News';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class Classhar extends Component {
  state={
    progress:0
  } 
  setProgress=(progress)=>{
    this.setState({progress:progress})
   };
  render() {
    return (
      
        <BrowserRouter>
        <Navvv/>
        <LoadingBar
      color='#f11946'
      progress={this.state.progress}
      ></LoadingBar>
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="/" country="us"  category="general" />}></Route>
        <Route exact path="/buisness" element={<News setProgress={this.setProgress}  key="buisness"country="us" category="buisness"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="us" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="us" category="technology"/>}></Route>
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="us" category="health"/>}></Route>
        </Routes>
       </BrowserRouter>
     
    )
  }
}
