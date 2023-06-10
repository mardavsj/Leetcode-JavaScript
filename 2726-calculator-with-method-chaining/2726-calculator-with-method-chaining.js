class Calculator {
  constructor(value) {
      this.sum = value;
  }
  add(value){
      this.sum += value;
  }
  subtract(value){
      this.sum -= value;
  }
  multiply(value) {
      this.sum *= value;
  }
  divide(value) {
      if(value==0){
          throw new Error("Division by zero is not allowed");
      }
      this.sum /= value;
  }
  power(value) {
      this.sum **= value;
  }
  getResult() {
      return this.sum;
  }
}