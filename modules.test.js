import showList from './src/modules/showlist';

test('This is for editing items', () => {
    expect(showList.edit).toBe(showList.edit);
});

test("this is for the checkbox status", () => {
    expect(showList.checkbox).toBe(showList.checkbox)
})