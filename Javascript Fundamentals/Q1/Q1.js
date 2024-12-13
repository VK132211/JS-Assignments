function outerFunction(param) {
  let innerVariable = "Inner Variable Value";

  return function innerFunction() {
    console.log(`Outer parameter: ${param}`);
    console.log(`Inner variable: ${innerVariable}`);
  };
}

const inner = outerFunction("Outer Parameter Value");
inner();

/*
The innerFunction retains access to both the param (a parameter of outerFunction) and innerVariable (a variable declared inside outerFunction) even after outerFunction has executed.
This is due to JavaScript's lexical scoping and closure mechanism.
*/
