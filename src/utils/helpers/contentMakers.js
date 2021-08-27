export const makeFuncArguments = (pref, count) => {
  console.log({ pref, count });
  return Array(count)
    .fill(1)
    .map((el, idx) => `${pref}${idx + 1}`)
    .join(", ");
};
