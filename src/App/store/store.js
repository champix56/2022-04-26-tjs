import { createStore } from "redux";
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
const store = createStore(
  currentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.warn(store.getState());
});
export default store;
