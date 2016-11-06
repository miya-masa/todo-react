export const LOADING = 'loader.loading';
export const HIDE = 'loader.hide';

export function loading() {
  return {
    type: LOADING
  };
}

export function hide() {
  return {
    type: HIDE
  };
}
