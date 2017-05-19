import {createStore, applyMiddleware, combineReducers} from 'redux';
//import reducer from './reducers/root-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import playerReducer from './reducers/player-reducer';
import lyricsReducer from './reducers/lyrics-reducer';
import albumsReducer from './reducers/albums-reducer';

const middleWare = applyMiddleware(loggerMiddleware, thunkMiddleware);

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  albums: albumsReducer
})

export default createStore(reducer, middleWare);
