import evaluatex from 'evaluatex';

(async () => {
  const fn = evaluatex("1 + 2 * 3 / 4");

  console.log(fn());
})();
