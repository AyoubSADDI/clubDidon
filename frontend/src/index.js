import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Login from './components/Login'
import Index from './components/Index'
import About from './components/About'
import BlogDetails from './components/Blog_details'
import Blog from './components/Blog'
import Element from './components/Elements'
import Service from './components/Services'
import Apropos from './components/About'
import Chart from './components/Chart'
import Event from './components/Event'
import Patrimoine from './components/Patrimoine'
import Organisation from './components/Organisation'
import Programme from './components/Programme'
import Contact from './components/Contact'
import Maps from './components/Maps'
import Adhesion from './components/Adhesion'
import AdhesionDash from './componentsDash/Adhesion'
import IndexDash from './componentsDash/Index'
import ConferenceDash from './componentsDash/Conference'
import EventDash from './componentsDash/Event'
import MediaDash from './componentsDash/Media'
import PlanningDash from './componentsDash/Planning'
import SortieDash from './componentsDash/Sortie'
import ActualiteDash from './componentsDash/Actualite'
import { Provider } from 'react-redux'
import store from './componentsDash/redux/store'
import PrivateRoutes from './PrivateRoutes'
import PartenaireDash from './componentsDash/Partenaire'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route exact path='/' render={(props) => <Index {...props} />} />
        <Route path='/login' render={(props) => <Login {...props} />} />
        <Route path='/about' render={(props) => <About {...props} />} />
        <Route path='/blogDetails' render={(props) => <BlogDetails {...props} />} />
        <Route path='/blog' render={(props) => <Blog {...props} />} />
        <Route path='/element' render={(props) => <Element {...props} />} />
        <Route path='/service' render={(props) => <Service {...props} />} />
        <Route path='/apropos' render={(props) => <Apropos {...props} />} />
        <Route path='/chart' render={(props) => <Chart {...props} />} />
        <Route path='/event' render={(props) => <Event {...props} />} />
        <Route path='/patrimoine' render={(props) => <Patrimoine {...props} />} />
        <Route path='/organisation' render={(props) => <Organisation {...props} />} />
        <Route path='/programme' render={(props) => <Programme {...props} />} />
        <Route path='/contact' render={(props) => <Contact {...props} />} />
        <Route path='/maps' render={(props) => <Maps {...props} />} />
        <Route path='/adhesion' render={(props) => <Adhesion {...props} />} />
        <Route path='/blogDetails' render={(props) => <BlogDetails {...props} />} />
        <PrivateRoutes path='/indexDash' render={(props) => <IndexDash {...props} />} />
        <Route path='/adhesionDash' render={(props) => <AdhesionDash {...props} />} />
        <Route path='/conferenceDash' render={(props) => <ConferenceDash {...props} />} />
        <Route path='/eventDash' render={(props) => <EventDash {...props} />} />
        <Route path='/mediaDash' render={(props) => <MediaDash {...props} />} />
        <Route path='/planningDash' render={(props) => <PlanningDash {...props} />} />
        <Route path='/sortieDash' render={(props) => <SortieDash {...props} />} />
        <Route path='/actualiteDash' render={(props) => <ActualiteDash {...props} />} />
        <Route path='/partenaireDash' render={(props) => <PartenaireDash {...props} />} />

      </Switch>
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
