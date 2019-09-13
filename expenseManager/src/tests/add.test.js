const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should say hello name', () => {
  const name = generateGreeting('John');
  expect(name).toBe('Hello John');
});

test('should say hello name', () => {
  const name = generateGreeting();
  expect(name).toBe('Hello Anonymous');
});
