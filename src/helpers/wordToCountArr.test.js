import wordToCountArr from './wordToCountArr';

describe('wordToCountArr', () => {
  it('should return an array of size 26', () => {
    expect(wordToCountArr("").length).toBe(26);
  });

  it('should return the correct counts array for the word ""', () => {
    const res = wordToCountArr("");

    for (let i = 0; i < res.length; ++i) {
      expect(res[i]).toBe(0);
    }
  });

  it('should return the correct counts array for the word "a"', () => {
    const res = wordToCountArr("a");

    for (let i = 0; i < res.length; ++i) {
      if (String.fromCharCode('a'.charCodeAt(0)+i) === 'a') {
        expect(res[i]).toBe(1);
      } else {
        expect(res[i]).toBe(0);
      }
    }
  });

  it('should return the correct counts array for the word "apple"', () => {
    const res = wordToCountArr("apple");

    for (let i = 0; i < res.length; ++i) {
      if (String.fromCharCode('a'.charCodeAt(0)+i) === 'a') {
        expect(res[i]).toBe(1);
      } else if (String.fromCharCode('a'.charCodeAt(0)+i) === 'p') {
        expect(res[i]).toBe(2);
      } else if (String.fromCharCode('a'.charCodeAt(0)+i) === 'l') {
        expect(res[i]).toBe(1);
      } else if (String.fromCharCode('a'.charCodeAt(0)+i) === 'e') {
        expect(res[i]).toBe(1);
      } else {
        expect(res[i]).toBe(0);
      }
    }
  });
});
