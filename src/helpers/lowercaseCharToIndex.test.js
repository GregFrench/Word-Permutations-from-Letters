import lowercaseCharToIndex from './lowercaseCharToIndex';

describe('lowercaseCharToIndex', () => {
  it('should return 0 for the character of "a"', () => {
    expect(lowercaseCharToIndex("a")).toBe(0);
  });

  it('should return 1 for the character of "b"', () => {
    expect(lowercaseCharToIndex("b")).toBe(1);
  });

  it('should return 25 for the character of "z"', () => {
    expect(lowercaseCharToIndex("z")).toBe(25);
  });
});
