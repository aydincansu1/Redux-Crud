/*
 ! store olusturma
 * 1. redux kutuphanesinden 'createStore' methodu import edilir
 * 2. store icerisinde tutulacak olan veriler ve herbiri cin reducer olusturulur
 * 3. olusturulan reducerlar combineReducers ile birlestirilir
 * 4. stor'a olusturulan reducarlar tanitilir
 */

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

//birden fazla reducer varsa bunlari birlestirmeye yarayan method

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});
//store oolustur
const store = createStore(rootReducer);

//store export etme
export default store;
