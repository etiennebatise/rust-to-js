const js = import("./node_modules/calculator-wasm/calculator_wasm.js");
js.then(js => {
  console.log("1 + 1 = ", js.add(1, 1));
  console.log("3 - 2 = ", js.subtract(3, 2));
  console.log("3 * 5 = ", js.multiply(3, 5));
});
