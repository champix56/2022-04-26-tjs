import { combineReducers, createStore } from "redux";
import { REST_ADR, REST_RESSOURCES } from "../config/config";
/**
 * enum des actions pour le reducer current
 */
export const ACTIONS_CURRENT = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_CURRENT: "CLEAR_CURRENT",
});
export const initialCurrentMeme = {
  text: "",
  x: 0,
  y: 20,
  fontSize: 20,
  fontWeight: "500",
  color: "#000000",
  imageId: -1,
  underline: false,
  italic: false,
  name: "",
};
/**
 * Reducer pour la gestion du meme current
 * @param {object} state etat lors de l'appel du reducer
 * @param {object} action action a mettre en oeuvre {type, value|values}
 * @returns nouvelle valeur du state non muté
 */
function currentReducer(state = initialCurrentMeme, action) {
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.CLEAR_CURRENT:
      return { ...initialCurrentMeme };
    default:
      return state;
  }
}

export const initialRessources = {
    memes:[],
    images:[]

}
export const ACTIONS_RESSOURCES=Object.freeze({
    
})
function ressourcesReducer (state = initialRessources,action) {
  switch (action.type) {

  case 'INIT':
    const promiseMemes = fetch(`${REST_ADR}${REST_RESSOURCES.MEMES}`, {
        headers: { Accept: "application/json" },
        method: "GET",
      }).then((f) => {
        console.log(f);
        return f.json();
      });
      const promiseImage = fetch(`${REST_ADR}${REST_RESSOURCES.IMAGES}`).then(
        (f) => {
          console.log(f);
          return f.json();
        }
      );
      Promise.all([promiseImage, promiseMemes]).then((tab_promiseObject) => {
        store.dispatch({type:'LOAD_RESSOURCES',values:tab_promiseObject});
      });
    return state;
      case 'LOAD_RESSOURCES':return {...state,images:action.values[0],memes:action.values[1]}
  default:
    return state
  }
}



const combinedReducers=combineReducers({ressources:ressourcesReducer,current:currentReducer});
const store = createStore(
    combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.warn(store.getState());
});
export default store;

store.dispatch({type:'INIT'})