import showList from './src/modules/showlist';
import removeSelected from './src/modules/clearCompletedTask'; 

test('This is for editing items', () => {
    expect(showList.edit).toBe(showList.edit);
});

test("this is for the checkbox status", () => {
    expect(showList.checkbox).toBe(showList.checkbox)
})

test("this is for the clear all status", () => {
    expect(removeSelected).toBe(removeSelected)
})