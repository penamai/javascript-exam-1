import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  test('halfNumbers should output the elements of array divided by 2', () => {
    const arr1 = [2, 4, 8, 16, 32, 128];
    const halved = [1, 2, 4, 8, 16, 64];
    expect(
        halfNumbers(arr1)
    ).toEqual(halved)
  });

  test('spliceNames should output Hello concatenated with each element of the array', () => {
    const arr2 = ['Name1', 'Name2', 'Namae3'];
    const spliced = ['Hello Name1', 'Hello Name2', 'Hello Namae3'];
    expect(
        spliceNames(arr2)
    ).toEqual(spliced)
  });

  test('addSerialNumber should output the index + 1 of each element', () => {
    const arr3 = ['apple', 'banana', 'coconut', 'durian'];
    const withSerial = ['1. apple', '2. banana', '3. coconut', '4. durian'];
    expect(
        addSerialNumber(arr3)
    ).toEqual(withSerial);
  });
});
