const App = require('../src/App');

describe('Easy questions', () => {
    describe('question_1', () => {
        it('Should return the time complexity of add()', () => {
            expect(App.question_1().time).toEqual('constant')
        })
        it('Should return the space complexity of add()', () => {
            expect(App.question_1().space).toEqual('constant')
        })
    })
    describe('question_2', () => {
        it('Should return the time complexity of addLots()', () => {
            expect(App.question_2().time).toEqual('constant');
        })
    
        it('Should return the space complexity of addLots()', () => {
            expect(App.question_2().space).toEqual('constant');
        })
    })

    describe('question_3', () => {
        it('Should return time complexity of O()', () => {
            expect(App.question_3().time).toEqual('');
        })
    
        it('Should return a space complexity of O()', () => {
            expect(App.question_3().space).toEqual('');
        })
    })

    describe('question_4', () => {
        it('Should return time complexity of O()', () => {
            expect(App.question_4().time).toEqual('constant');
        })
    
        it('Should return a space complexity of O()', () => {
            expect(App.question_4().space).toEqual('constant');
        })
    })

    describe('question_5', () => {
        it('Should return time complexity of O()', () => {
            expect(App.question_5().time).toEqual('constant');
        })
    
        it('Should return a space complexity of O()', () => {
            expect(App.question_5().space).toEqual('constant');
        })
    })

    describe('question_6', () => {
        it('Should return time complexity of O()', () => {
            expect(App.question_6().time).toEqual('constant');
        })
    
        it('Should return a space complexity of O()', () => {
            expect(App.question_6().space).toEqual('constant');
        })
    })
})