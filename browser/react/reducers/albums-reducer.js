import {RECEIVE_ALBUM, RECEIVE_ALBUMS} from '../constants'

const initialState = {
  albums: [],
  //selectedAlbum: {}
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    default:
      return state
  }
}
