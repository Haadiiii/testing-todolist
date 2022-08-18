export default class Storage {
  getLocalStorage() {
    const task = [];
    if (
      localStorage.getItem("to-do-item") === null
      || localStorage.getItem("to-do-item") === "undefined"
    ) {
      return localStorage.setItem("to-do-item", JSON.stringify(task));
    }
    return JSON.parse(localStorage.getItem("to-do-item"));
  }

  SetLocalStorage(arr) {
    return localStorage.setItem("to-do-item", JSON.stringify(arr));
  }
}
