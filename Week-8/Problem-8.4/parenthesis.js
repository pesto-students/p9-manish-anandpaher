function checkParenthesis(exp) {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < exp.length; i++) {
    const currentChar = exp[i];
    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closingBrackets.includes(currentChar)) {
      const matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(currentChar)];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkParenthesis("{([])}"));
console.log(checkParenthesis("()"));
console.log(checkParenthesis("([]"));
