export const enum AsyncState {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
  SUCCEEDED = "succeeded",
}

export const GOOGLE_API_KEY = "AIzaSyAUDllPJzvIBlJJ1xuCDXFiuesBsEgXLuw";

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
