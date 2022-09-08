const { greeting } = require('./functions')
let functionFile = require('./functions')

test('returnTwo test', () => {
    expect(functionFile.returnTwo()).toBe(2)
})


test('greeting test', () => {
    expect(functionFile.greeting('James')).toEqual('Hello, James')
    expect(functionFile.greeting('Jill')).toEqual('Hello, Jill')
})

test('add test', () => {
    expect(functionFile.add(1,2)).toEqual(3)
    expect(functionFile.add(5,9)).toEqual(14)

})