import {getPercents} from '../../utils/getPercents.js'; 

describe('test for getPercents function', () => {
    it("shuld return 0", () => {
        expect(getPercents(0, 20)).toBe(0);
    }),
    it("shuld return number", () => {
        const number = 20;
        expect(getPercents(100, number)).toBe(number);
    }),
    it("shuld return percent of a number", () => {
        const percent = 30;
        const number = 40;
        expect(getPercents(percent, number)).toBe(12);
    })
})