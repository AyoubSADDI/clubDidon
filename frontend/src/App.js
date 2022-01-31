import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
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
import {browserHistory, createMemoryHistory} from 'react-router'

const App = () => {
      const history = createMemoryHistory(window.location)

  return (
    <Provider store={store}>
    <HashRouter history={browserHistory}>
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/executifDash' component={ExecutifDash} />
        <Route path='/login'  component={Login} /> 
        <Route path='/apropos' component={Apropos} />
        <Route path='/patrimoine' component={Patrimoine} />
        <Route path='/organisation' component={Organisation} />
        <Route path='/programme' component={Programme} />
        <Route path='/contact' component={Contact} />
        <Route path='/adhesion' component={Adhesion} />
        <PrivateRoutes path='/indexDash' component={IndexDash} />
        <Route path='/adhesionDash' component={AdhesionDash} />
        <Route path='/mediaDash' component={MediaDash } />
        <Route path='/planningDash' component={PlanningDash} />
        <Route path='/actualiteDash' component={ActualiteDash} />
        <Route path='/partenaireDash' component={PartenaireDash} />
        <Route path='/actualiteArticle' component={ActualiteArticle} />
        <Route path='/actualiteConference' component={ActualiteConference} />
        <Route path='/actualiteEvent' component={ActualiteEvent} />
        <Route path='/actualiteSortie' component={ActualiteSortie} />
        <Route path='/actualiteProjet' component={ActualiteProjet} />
        <Route path='/planification' component={Planif } />
        <Route path='/media' component={Media } />
        <Route path='/executifDash' component={ExecutifDash } />
        <Route path='/:id' component={Blog}  />   
    </Switch>
 </HashRouter> 
  </Provider>
  )
}

export default App
