// src/counter/counterApi.js

// A mock function to mimic making an async request for data
export function fetchCount(amount = 5) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}