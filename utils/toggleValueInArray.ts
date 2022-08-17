export const toggleValueInArray = <T>(arr: Array<T>, value: T) =>
  arr.includes(value) ? arr.filter((item) => item !== value) : [...arr, value];
