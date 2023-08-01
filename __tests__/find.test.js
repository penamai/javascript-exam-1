import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  test('findGrownUp must return array with elements >= 18', () => {
    const arr1 = [1, 5, 17, 19, 20, 25];
    const grown = 19;
    expect(
        firstGrownUp(arr1)
    ).toBe(grown);
  });

  test('firstOrange must return \'orange\' if there is', () => {
    const arr2 = ['orange2', 'orange1', 'ORANGE', 'orange', 'orange3'];
    const orange = 'orange';
    expect(
        firstOrange(arr2)
    ).toBe(orange);
  });

  test('firstLengthOver5Name must return name with length > 5', () => {
    const arr3 = ['na', 'namm', 'names', 'namnam', 'namama'];
    const name = 'namnam';
    expect(
        firstLengthOver5Name(arr3)
    ).toBe(name);
  });
});
