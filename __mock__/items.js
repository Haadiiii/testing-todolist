import Storage from "./storage";
// import menu from '../src/assets/images/3-dots.png'

// const toDoList = document.querySelector('.todo-list-items-li');

// export const addItem = (value) => {
//   let arr;
//   if (Storage.getLocalStorage() == null) {
//     arr = [];
//   } else {
//     arr = Storage.getLocalStorage();
//   }

//   const length = arr.length + 1
//   const toDo = {
//     description: value,
//     completed: false,
//     index: length,
//   };
//   arr.push(toDo);
//   Storage.SetLocalStorage(arr);
//   return arr;
// };

export const addToDo = () => {
  let task = [];
  const storage = new Storage();

  task.push({
    description: "value",
    completed: false,
    index: 0,
  },
  {
    description: "value",
    completed: false,
    index: 1,
  });
  storage.SetLocalStorage(task);
  return task;
};

export const removeList = (id) => {
  let task = [];
  const storage = new Storage();
  task = storage.getLocalStorage();
  task.splice(id, 1);
  storage.SetLocalStorage(task);
  return task;

};
