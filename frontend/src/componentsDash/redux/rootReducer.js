import {combineReducers} from 'redux'
import conferenceReducer from './conference/conferenceReducer'
import sortieReducer from './sortie/sortieReducer'
import eventReducer from './event/eventReducer'
import planningReducer from './planning/planningReducer'
import actualiteReducer from './actualite/actualiteReducer'
import adhesionReducer from './adhesion/adhesionReducer'
import partenaireReducer from './partenaire/partenaireReducer'






const rootReducer = combineReducers({
    conference : conferenceReducer,
    sortie     : sortieReducer,
    event      : eventReducer,
    planning   : planningReducer,
    actualite  : actualiteReducer,
    adhesion   : adhesionReducer,
    partenaire : partenaireReducer,
})

export default rootReducer