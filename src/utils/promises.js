export const delay = (wait) => {
  return new Promise(res => {
    setTimeout(() => res(), wait);
  });
};