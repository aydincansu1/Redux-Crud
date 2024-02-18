import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  //dispatch kurulumu yap
  const dispatch = useDispatch();

  //tamamladi degeri tru ise false false ise tru'a cek
  const toggleIsdone = () => {
    // todo objesinin is_done degerini tersine cevir
    const updated = { ...todo, is_done: !todo.is_done };
    // apidaki todoyu guncelle
    axios
      .put(`/todos/${updated.id}`, updated)
      //stor'u guncelle
      .then(() => dispatch(updateTodo(updated)));
  };

  //silme aksiyonunu tetikler
  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}`).then(() => dispatch(deleteTodo(todo.id)));
  };
  return (
    <div className="border shadow shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandi" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Duzenle
      </button>
      <button onClick={toggleIsdone} className="btn btn-success m-3">
        {todo.is_done ? "Geri Al" : "Tamamlandi"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
