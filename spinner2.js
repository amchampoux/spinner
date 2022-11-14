const spinSentence = "|/-\\|/-\\|/-\\";

let i = 0;

const spin = function() {
  process.stdout.write('\r' + spinSentence[i]);
  i++;
  if (i >= spinSentence.length) {
    clearInterval(timer);
    process.stdout.write('\n');
  }
};

let timer = setInterval(spin, 1000);

