const expect = chai.expect;
describe('Easy questions', () => {

    describe('question_1', () => {
        it('Should return the time complexity of add()', () => {
            expect(question_1().time).to.equal(q1.time);
        })
        it('Should return the space complexity of add()', () => {
            expect(question_1().space).to.equal(q1.space)
        })
    })
    describe('question_2', () => {
        it('Should return the time complexity of addLots()', () => {
            expect(question_2().time).to.equal(q2.time);
        })
    
        it('Should return the space complexity of addLots()', () => {
            expect(question_2().space).to.equal(q2.space);
        })
    })

    describe('question_3', () => {
        it('Should return the time complexity of multiplyNums()', () => {
            expect(question_3().time).to.equal(q3.time);
        })
    
        it('Should return the space complexity of multiplyNums()', () => {
            expect(question_3().space).to.equal(q3.space);
        })
    })

    describe('question_4', () => {
        it('Should return the time complexity of wackyWord()', () => {
            expect(question_4().time).to.equal(q4.time);
        })
    
        it('Should return the space complexity of wackyWord()', () => {
            expect(question_4().space).to.equal(q4.space);
        })
    })

    describe('question_5', () => {
        it('Should return the time complexity of badgerSong()', () => {
            expect(question_5().time).to.equal(q5.time);
        })
    
        it('Should return the space complexity of badgerSong()', () => {
            expect(question_5().space).to.equal(q5.space);
        })
    })

    describe('question_6', () => {
        it('Should return the time complexity of hotMessOfArrays()', () => {
            expect(question_6().time).to.equal(q6.time);
        })
    
        it('Should return the space complexity of hotMessOfArrays()', () => {
            expect(question_6().space).to.equal(q6.space);
        })
    })
})