function log() {
  return function(word) {
    console.log(word);
  }
}

const logOne = log();

logOne("one");
