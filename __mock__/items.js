import Storage from "./storage.js";

export const addToDo = () => {
  const task = [];
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
