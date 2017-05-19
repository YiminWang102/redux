import {createStore, applyMiddleware, combineReducers} from 'redux';
//import reducer from './reducers/root-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import playerReducer from './reducers/player-reducer';
import lyricsReducer from './reducers/lyrics-reducer';

const middleWare = applyMiddleware(loggerMiddleware, thunkMiddleware);

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
})

export default createStore(reducer, middleWare);
