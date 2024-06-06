//export const API_BASE_URL = "https://api-node-4-d27t.onrender.com"; // named export
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // named export
console.log(import.meta.env.VITE_API_BASE_URL);
