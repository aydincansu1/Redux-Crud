import { ActionTypes } from "../actionTypes/actionType";

/*
 * 
 * 
 ! reducer
 *store'un nasil degisecegine karar verir
 * reducer normal bir fonksiyondur
 * iki parameetre alir
 * > state: store'da tutulan verinin son durumu
 * > action: verilerin nasil degisecegini belirleyen obje
 * 
 * state tanimsiz oldugu zaman redux hata verir
 * bu hatanin onune gecmek icin state'in baslangic degerini
 * vermeliyiz bu baslangic degeri biz statei guncelleyene kadar 
 * aktif olur
 ? onemli: reducer fonksiyonundan return eedilen veri stor'da 
 ?tutulan storun son hali olur
 */
const initialstate = {
  todos: [],
};

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    //typ'e add_todo olan aksiyon tetiklenirse
    case ActionTypes.ADD:
      // yeni todoyu eskilerin arasina ekle
      const tempTodo = state.todos.concat(action.payload);
      // state guncelle
      return {
        todos: tempTodo,
      };
    //typ'e Delete olan aksiyon tetiklenirse
    case ActionTypes.DELETE:
      //diziden silinecek olani kaldir
      const updateTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      //stat'i guncelle
      return {
        todos: updateTodos,
      };
    //typ'e Update olan aksiyon tetiklenirse
    case ActionTypes.UPDATE:
      // 1) dizideki eski todo ile action'u payload'i ile gelen
      // todoyu yer degistir
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: updated };

    case ActionTypes.SET:
      return {
        todos: action.payload,
      };
    //varolan state'i koru degistirme

    default:
      return state;
  }
};

export default todoReducer;
