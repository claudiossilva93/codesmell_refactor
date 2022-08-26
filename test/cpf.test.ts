import { validateCpf } from "../src/after/cpf"

test("Deve validar um cpf corretamente",function(){
    const cpfValido = validateCpf("699.457.600-09");
    expect(cpfValido).toBe(true)
})

test("Deve validar parametro null",function(){
    const cpfValido = validateCpf(null);
    expect(cpfValido).toBe(false)
})

test("Deve validar cpf com digitos repetidos",function(){
    const cpfValido = validateCpf("00000000000");
    expect(cpfValido).toBe(false)
})

test("Deve validar cpf com quantidade de dígitos inválidos",function(){
    const cpfValido = validateCpf("0000");
    expect(cpfValido).toBe(false)
})