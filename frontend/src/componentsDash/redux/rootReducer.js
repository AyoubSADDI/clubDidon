import {combineReducers} from 'redux'
import planningReducer from './planning/planningReducer'
import actualiteReducer from './actualite/actualiteReducer'
import adhesionReducer from './adhesion/adhesionReducer'
import partenaireReducer from './partenaire/partenaireReducer'
import mediaReducer from './media/mediaReducer'
import executifReducer from './executif/executifReducer'


const rootReducer = combineReducers({
    planning   : planningReducer,
    actualite  : actualiteReducer,
    adhesion   : adhesionReducer,
    partenaire : partenaireReducer,
    media      : mediaReducer,
    executif   : executifReducer,
})

export default rootReducer