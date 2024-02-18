import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const dispatch = useDispatch();
  //store'da tutulan veriye bu bilesende ihtiyacim oldu
  // storea'da ilgili verinin tutuldugu ilgili reducura abone olacagiz
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
