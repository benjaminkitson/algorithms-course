/**
 * Accepts a single callback function and a list of arguments to pass into it
 */
export const measureTimeTaken = (fn: (...args: any[]) => any, args: any[]) => {
  const init = Date.now();
  const output = fn(...args);
  console.log(output);
  const end = Date.now();
  console.log(`fn took ${end - init}ms`);
};
