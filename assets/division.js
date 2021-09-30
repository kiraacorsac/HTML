class DivisionError extends Error { }

class ArgumentError extends Error { }

class Devide {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  devide() {

    if (isNaN(this.a) || isNaN(this.b)) {
      throw new ArgumentError("Arguments are not numbers")
    }
    if (this.b == 0) {
      throw new DivisionError("Cannot divide by zero")
    }

    //throw Error("This is a generic error, that I don't know how to handle!");
    return this.a / b

  }
}
let john = new Devide(5, 1);
try {
  console.log("Now, for the division!")
  console.log(john.devide());

} catch (err) {
  if (err instanceof ArgumentError) {
    alert("Arguments are wrong!")
  } else if (err instanceof DivisionError) {
    alert("Division is going bad!")
  } else {
    throw err
  }
}
