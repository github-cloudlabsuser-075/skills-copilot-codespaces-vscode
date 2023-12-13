describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should add two numbers", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(5, 2);
    expect(result).toBe(3);
  });

  it("should multiply two numbers", () => {
    const result = calculator.multiply(4, 2);
    expect(result).toBe(8);
  });

  it("should divide two numbers", () => {
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});