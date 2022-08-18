import Storage from "./storage.js";

export const addToDo = () => {
  const task = [];
  const storage = new Storage();

  task.push(
    {
      description: "value",
      completed: false,
      index: 0,
    },
    {
      description: "value",
      completed: false,
      index: 1,
    }
  );
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

export const inputField = () => {
  let task = [];
  const storage = new Storage();
  task = storage.getLocalStorage();
  task.forEach((el) => {
    if (el.index === task.index) {
      el.description = 'hhghfjhfhgdghdg';
    }
    return el;
  });
  storage.SetLocalStorage(task);
  return task;
};

export const checkbox = () => {
  let task = [];
  const storage = new Storage();
  task = storage.getLocalStorage();
  task.completed = true;
  if(task.completed === true){
    task = {
      description: "value",
      completed: true,
      index: 0,
    };
  }
  storage.SetLocalStorage(task);
  return task;
};

export const removeSelected = () => {
  let task = [];
  const storage = new Storage();
  task = storage.getLocalStorage();
  task.completed = true
  if(task.completed === true){
    task = [];
  }
  storage.SetLocalStorage(task);
  return task;
};


