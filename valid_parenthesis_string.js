function parenthesisDetector(str) {
  let machedBracket = [];
  let mappedBracket = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for(let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      machedBracket.push(mappedBracket[str[i]]);
    }

    if (machedBracket.length === 0) {
      return false;
    }

    if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      let checkChar = machedBracket.pop();

      if (checkChar !== str[i]) {
          return false;
      }
    }
  }

  return machedBracket.length === 0;
}
