import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  //form gonderilce tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) inputtaki ismi al
    const text = e.target[1].value;

    // 2) todo nesnesinin title degerine yeni degeri ata
    const updated = { ...todo, text: text };
    // 3) apiyi guncelle
    axios.patch(`/todos/${updated.id}`, { text }).then(() =>
      // 4) stou'u guncelle
      dispatch(updateTodo(updated))
    );

    // 5) Modal'i kapat
    close();
  };
  return (
    <div className="modal d-block bg-black bg-opacity-75 text-dark ">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5">Todo'yu Güncelle</h5>
            <button onClick={close} type="button" className="btn">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label>Yeni Baslik</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-danger">
              İptal
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
