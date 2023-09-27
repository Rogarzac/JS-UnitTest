
const calculadora = require("../calculadora")
//console.log(calculadora.suma);

// Prueba unitariaclear
test("Debe sumar numero a + b", () => {
    expect(calculadora.suma(10,10)).toBe(20)
})

// Prueba unitariaclear
test("Debe restar numero a - b", () => {
    expect(calculadora.resta(10,10)).toBe(0)
})

// Prueba unitariaclear
test("Debe multiplicar numero a * b", () => {
    expect(calculadora.multiplicacion(1,10)).toBe(10)
})
// Prueba unitariaclear
test("Debe dividir numero a / b", () => {
    expect(calculadora.division(20,10)).toBe(2)
})
test("Prueba toda la calculadora", () => {
    expect(calculadora.resta(2, 2)).toBe(0)
    expect(calculadora.suma(2, 2)).toBe(4)
    expect(calculadora.division(2, 2)).toBe(1)
    expect(calculadora.multiplicacion(2, 2)).toBe(5)
})