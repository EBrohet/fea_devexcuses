const response = await fetch('http://localhost:4000/api/sentences');
const data = await response.json();

export const phrases = data;