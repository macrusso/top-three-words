/**
 * Returns top three or less most frequent words from text
 * @param {string} text
 * @returns {Array}
 */

const topWords = (text) => {
  /*
  Simple array holds roughly around 9.5 million pages of text
  it should be enough even for larger amount of text provided.
  String is split on whitespace and line brakes.
  */
  const arrayOfWords = text.trim().split(/\r\n|\r|\n|\s/)


  // returns empty array when no words
  if(arrayOfWords.length === 0){
    return []
  }

  let wordsFrequencyMap = {};

  /*
  For loop is way faster than Array.forEach, Array.map or Array.reduce.
  Defining array length when loop is initiated makes it faster as it's accessed only once.
  Pre-increment is also faster than post-increment.
  Not that important for short string but improves efficiency for large amount of data.
  */
  for (let i = 0, al = arrayOfWords.length; i < al; ++i) {

    /*
    Replace hyphens and apostrophes not followed by alphanumeric characters.
    or
    Replace all non-alphanumeric characters excluding hyphens and apostrophes ie. ?, &, etc.
    */
    const word = arrayOfWords[i].toLowerCase().replace(/([-'](?!\w))|([^\w'-])/gi, '')

      // Pass for empty string
      if (word){
        if (!wordsFrequencyMap[word]) {
          wordsFrequencyMap[word] = 0;
        }

        wordsFrequencyMap[word] += 1;
      }
  }

  // JS sort has complexity of Ω(n log(n)), it should be more then enough for it.
  return Object.keys(wordsFrequencyMap).sort((a,b) => wordsFrequencyMap[b]-wordsFrequencyMap[a]).slice(0,3)
}

module.exports = topWords
