import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App'
import TrashPage from '../pages/TrashPage';
import ReminderPage from '../pages/ReminderPage'
import ControlsComponent from '../components/ControlComponent'

const NotFoudPage = () => (<div>404!</div>)



const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/notifications" >
        <ReminderPage />
      </Route>
      <Route path="/label" >
         <ControlsComponent icon="label"/>
      </Route>
      <Route path="/create" >
         <ControlsComponent icon="create"/>
      </Route>
      <Route path="/archive" >
         <ControlsComponent icon="archive"/>
      </Route>
      <Route path="/delete" >
         <TrashPage />
      </Route>
      <Route path="/refresh" >
         <ControlsComponent icon="refresh"/>
      </Route>
      <Route path="/view_list" >
         <ControlsComponent icon="view_list"/>
      </Route>
      <Route path="/person" >
         <ControlsComponent icon="person"/>
      </Route>
      <Route path="/settings" >
         <ControlsComponent icon="settings"/>
      </Route>
      <Route path="/settings" >
         <ControlsComponent icon="settings"/>
      </Route>
       <Route path="/settings" >
         <ControlsComponent icon="settings"/>
      </Route >
      <Route component = {NotFoudPage}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter;