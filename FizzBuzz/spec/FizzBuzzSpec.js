describe('FizzBuzz', function() {

  it('Devuelve Fizz si el número es divisible por 3', function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('Devuelve Buzz si el número es contiene por 3', function() {
    expect(fizzBuzz(32)).toBe('Fizz');
  });

  it('Devuelve Buzz si el número es divisible por 5', function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('Devuelve Buzz si el número es contiene por 5', function() {
    expect(fizzBuzz(52)).toBe('Buzz');
  });

  it('Devuelve FizzBuzz si el número es divisible por 3 y por 5', function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('Devuelve el número si no', function() {
    expect(fizzBuzz(2)).toBe('2');
  });

});