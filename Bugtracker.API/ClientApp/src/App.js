import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import {Dashboard} from "./pages/Dashboard";

import './custom.scss'
import {Kanban} from "./pages/Kanban";
import {Calendar} from "./pages/Calendar";
import {Settings} from "./pages/Settings";
import {Profile} from "./pages/Profile";
import {Bugs} from "./pages/Bugs";
import {CreateBug} from "./pages/CreateBug";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route exact path='/bugs' component={Bugs}/>
              <Route exact path='/kanban' component={Kanban}/>
              <Route exact path='/calendar' component={Calendar}/>
              <Route exact path='/settings' component={Settings}/>
              <Route exact path='/profile' component={Profile}/>
              <Route exact path='/bugs/create-a-bug' component={CreateBug}/>
              <Route path='*' component={Error}/>
          </Switch>
      </Layout>
    );
  }
}
