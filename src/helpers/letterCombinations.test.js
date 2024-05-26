import letterCombinations from './letterCombinations';

describe('letterCombinations', () => {
  it('should return an array containing the empty string when given an empty string as input', () => {
    expect(letterCombinations("")).toStrictEqual([""]);
  });

  it('should return an array containing the string "a" and the empty string when given the string "a" as input', () => {
    expect(letterCombinations("a")).toStrictEqual(["a", ""]);
  });

  it('should return an array containing the strings "ab", "a", "b", and "" when given the string "ab" as input', () => {
    expect(letterCombinations("ab")).toStrictEqual(["ab", "a", "b", ""]);
  });

  it('should return an array containing the strings "ab", "a", "b", and "" when given the string "ba" as input', () => {
    expect(letterCombinations("ba")).toStrictEqual(["ab", "a", "b", ""]);
  });

  it('should return an array containing the combinations of the string "apple" when given the string "apple" as input', () => {
    expect(letterCombinations("apple")).toStrictEqual([
        "aelpp", "aelp", "ael", "aepp", "aep",
        "ae", "alpp", "alp", "al", "app",
        "ap", "a", "elpp", "elp", "el",
        "epp", "ep", "e", "lpp", "lp",
        "l", "pp", "p", ""
    ]);
  });
});
