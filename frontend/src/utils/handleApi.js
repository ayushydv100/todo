import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data:", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log("data:", data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log("data:", data);
      setText("");
      setIsUpdating = false;
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
    .then((data) => {
      console.log("data:", data);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

// const deleteToDo = (_id, setToDo) => {
//   axios
//     .delete(`${baseUrl}/delete/${_id}`)
//     .then((data) => {
//       console.log("data:", data);
//       getAllToDo(setToDo);
//     })
//     .catch((err) => {
//       console.log("err:", err);
//     });
// };

export { getAllToDo, addToDo, updateToDo, deleteToDo };
