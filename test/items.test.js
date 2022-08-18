import {
  addToDo,
  removeList,
  inputField,
  checkbox,
  removeSelected,
} from "../__mock__/items.js";
import Storage from "../__mock__/storage.js";

let storage;
beforeEach(() => {
  storage = new Storage();
});

describe("Testing the add toDo function", () => {
  test("add item to array of items", () => {
    addToDo();
    const task = storage.getLocalStorage();
    expect(task).toEqual([
      {
        description: "value",
        completed: false,
        index: 0,
      },
      {
        description: "value",
        completed: false,
        index: 1,
      },
    ]);
  });

  test("testing local storage", () => {
    addToDo();
    const data = storage.getLocalStorage();
    expect(data).toEqual([
      {
        description: "value",
        completed: false,
        index: 0,
      },
      {
        description: "value",
        completed: false,
        index: 1,
      },
    ]);
  });
});

describe("testing remove function", () => {
  test("removing items", () => {
    localStorage.removeItem("to-do-item");
    addToDo("1");
    const beforeDelete = storage.getLocalStorage();
    removeList("1");
    const afterDelete = storage.getLocalStorage();
    expect(afterDelete.length).toBe(beforeDelete.length - 1);
  });
});

