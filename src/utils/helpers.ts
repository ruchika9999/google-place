export const debounce = <T extends unknown[]>(
  callBack: (...args: T) => void,
  time: number
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callBack(...args);
    }, time);
  };
};
