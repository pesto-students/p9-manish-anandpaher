<h2>Exercise5.4:</h2>

Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and write the corresponding Jest based tests for it.

const mathOperations = {

  sum: function(a,b) {

    return a + b;

  },

  diff: function(a,b) {

  return a - b;

  },

product: function(a,b) {

  return a * b

  }

}

module.exports = mathOperations

<h2>Guidelines:</h2>

1.Jest should’ve been installed.

2.Package.json file should have the config for running test cases.

3.Test case file should’ve been created. For example: calculator.test.js

4.BDD style tests for each function should’ve been created for the same.

5.All test cases should pass.

6.Reference: https://www.softwaretestinghelp.com/jest-testing-tutorial/

<h2>Outcome:</h2>

1.Understanding the importance of writing test cases.

2.How BDD works.

3.What are the packages required for writing test cases?

4.How to configure test cases in package.json file.
