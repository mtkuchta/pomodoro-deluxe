export const findId = (element) => {
  while (!element.id) {
    element = element.parentNode;
  }
  if (element.id) {
    return Number(element.id);
  } else return;
};
