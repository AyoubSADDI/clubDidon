import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Login from './components/Login'
import Index from './components/Index'
import Blog from './components/Blog'
import Apropos from './components/About'
import Planif from './components/Planning'
import Patrimoine from './components/Patrimoine'
import Organisation from './components/Organisation'
import Programme from './components/Programme'
import Contact from './components/Contact'
import ActualiteArticle from './components/ActualiteArticle'
import ActualiteConference from './components/ActualiteConference'
import ActualiteEvent from './components/ActualiteEvent'
import ActualiteSortie from './components/ActualiteSortie'
import ActualiteProjet from './components/ActualiteProjet'
import Adhesion from './components/Adhesion'
import Media from './components/Media'
import AdhesionDash from './componentsDash/Adhesion'
import IndexDash from './componentsDash/Index'
import MediaDash from './componentsDash/Media'
import PlanningDash from './componentsDash/Planning'
import ActualiteDash from './componentsDash/Actualite'
import { Provider } from 'react-redux'
import store from './componentsDash/redux/store'
import PrivateRoutes from './PrivateRoutes'
import PartenaireDash from './componentsDash/Partenaire'
import ExecutifDash from './componentsDash/Executif'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/executifDash' render={(props) => <ExecutifDash {...props} />} />
        <Route path='/login'  component={Login} /> 
        <Route path='/apropos' render={(props) => <Apropos {...props} />} />
        <Route path='/patrimoine' render={(props) => <Patrimoine {...props} />} />
        <Route path='/organisation' render={(props) => <Organisation {...props} />} />
        <Route path='/programme' render={(props) => <Programme {...props} />} />
        <Route path='/contact' render={(props) => <Contact {...props} />} />
        <Route path='/adhesion' render={(props) => <Adhesion {...props} />} />
        <PrivateRoutes path='/indexDash' render={(props) => <IndexDash {...props} />} />
        <Route path='/adhesionDash' render={(props) => <AdhesionDash {...props} />} />
        <Route path='/mediaDash' render={(props) => <MediaDash {...props} />} />
        <Route path='/planningDash' render={(props) => <PlanningDash {...props} />} />
        <Route path='/actualiteDash' render={(props) => <ActualiteDash {...props} />} />
        <Route path='/partenaireDash' render={(props) => <PartenaireDash {...props} />} />
        <Route path='/actualiteArticle' render={(props) => <ActualiteArticle {...props} />} />
        <Route path='/actualiteConference' render={(props) => <ActualiteConference {...props} />} />
        <Route path='/actualiteEvent' render={(props) => <ActualiteEvent {...props} />} />
        <Route path='/actualiteSortie' render={(props) => <ActualiteSortie {...props} />} />
        <Route path='/actualiteProjet' render={(props) => <ActualiteProjet {...props} />} />
        <Route path='/planification' render={(props) => <Planif {...props} />} />
        <Route path='/media' render={(props) => <Media {...props} />} />
        <Route path='/executifDash' render={(props) => <ExecutifDash {...props} />} />
        <Route path='/:id' render={(props) => <Blog {...props} />} />   
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
