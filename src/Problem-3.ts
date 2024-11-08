{
  // Problem-3 -->
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  function countWordOccurrences(sentence: string, word: string): number {
    let count = 0;
    sentence = sentence.toLowerCase();
    word = word.toLowerCase();

    sentence.split(" ").forEach((singleWord) => {
      if (singleWord === word) {
        count++;
      }
    });

    return count;
  }

  const result = countWordOccurrences("I love typescript again typescript", "typescript");
  console.log(result);

  //
}
