import { CapitalizePipe } from './capitalize.pipe';

describe('Given a Capitalize Pipe', () => {
  describe("When it is invoked on a 'btc' word", () => {
    it('Then it return the word capitalized', () => {
      const lowerCaseWord = 'btc';
      const upperCaseWord = 'BTC';

      const capitalizePipe = new CapitalizePipe();

      const expectedUpperCaseWord = capitalizePipe.transform(lowerCaseWord);

      expect(expectedUpperCaseWord).toBe(upperCaseWord);
    });
  });
});
