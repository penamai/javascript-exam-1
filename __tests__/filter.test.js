import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('filterEvenNumbers must return even numbers', () => {
        const arr1 = [1, 2, 3, 4, 5, 6];
        const even = [2, 4, 6];
        expect(
            filterEvenNumbers(arr1)
        ).toEqual(even)
    });
    test('filterLengthWith4 must return words with length 4', () => {
            const arr2 = ['a', 'ab', 'abc', 'abcd', 'abcde', 'efgh', 'ijk'];
            const with4 = ['abcd', 'efgh'];
            expect(
                filterLengthWith4(arr2)
            ).toEqual(with4)
    });
    test('filterStartWithA must return only starting with A', () => {
            const arr3 = ['ant', 'bear', 'cat', 'Anaconda', 'Bees', 'Cockroach'];
            const withA = ['ant', 'Anaconda'];
            expect(
                filterStartWithA(arr3)
            ).toEqual(withA)
    });
});