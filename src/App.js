import React,{ Component } from 'react';
import { HashRouter, Route,NavLink} from 'react-router-dom';

import './App.css';

import Home from './components/home';
import Product from './components/product';
import About from './components/about';
import Index from './components/index';
import Test from './components/test';

import title from './redux/title';
import {  Provider } from 'react-redux'

class App extends Component {

  render() {
    return (
      <Provider store={title().title}>
       <HashRouter>
              <div>
                <Route exact path="/" component={Index}/>
                <Route path="/product" component={Product}/>
                <Route path="/add" component={Home}/>
                <Route path="/test" component={Test}/>
                <Route path="/about/:id" component={About}/>
                <div className="asd">
                  <div className="ads">
                    <NavLink exact activeClassName="selected" to="/" title="666"><i>&#xe6a2;</i><span>首页</span></NavLink>
                    <NavLink activeClassName="selected" to="/product"><i>&#xe6a1;</i><span>产</span>品</NavLink>
                    <NavLink activeClassName="selected" to="/add"><i>&#xe6bd;</i></NavLink>
                    <NavLink activeClassName="selected" to="/test"><i>&#xe669;</i><span>测试</span></NavLink>
                    <NavLink activeClassName="selected" to="/about/123456"><i>&#xe600;</i><span>我们</span></NavLink>
                  </div>
                </div>
              </div>
            </HashRouter>
        </Provider>
    );
  }
}

export default App;
