const topWords = require('./topThree')

const string = `In a village of La Mancha, the words of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`

const string2 = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'

const string3 = " //wont won't won't"

const string4 = "& test? test-other -' ' ' ' - - - -' test test!"


test('Text with line brakes', () => {
  expect(topWords(string)).toEqual(["a", "of", "on"]);
});

test('Text with different case words', () => {
  expect(topWords(string2)).toEqual(["e", "ddd", "aa"]);
});

test('Text with extra spaces and non-alphanumeric chars', () => {
  expect(topWords(string3)).toEqual(["won't", "wont"]);
});

test('Text with hyphens and apostrophes', () => {
  expect(topWords(string4)).toEqual([ 'test', 'test-other' ]);
});