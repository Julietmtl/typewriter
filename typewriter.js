const sentence = "hello there from lighthouse labs";
  
const animatedWords = phrase => {
  let newPhrase = phrase.split('');
  newPhrase.forEach((char, index) => {
    setTimeout(() => {
      process.stdout.write(char);
    }, 500 * index);
  });
  setTimeout(() => {
    console.log("\n");
  }, 500 * newPhrase.length);
};

animatedWords(sentence);