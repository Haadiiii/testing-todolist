const addItems = require('./src/modules/Addlist').default;
const dataa = require("./src/modules/Elements")

 test("add items", () => {
     expect(addItems(task)).toBe(task)
 })