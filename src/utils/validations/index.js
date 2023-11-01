export const addIsInvalidClass = (array) => {
  array.forEach((id) => {
    document.querySelector(id).classList.add('is-invalid');
  });
};

export const addIsValidClass = (array) => {
  array.forEach((id) => {
    document.querySelector(id).classList.add('is-valid');
  });
};

export const removeIsInvalidClass = (array) => {
  array.forEach((id) => {
    document.querySelector(id).classList.remove('is-invalid');
  });
};

export const removeIsValidClass = (array) => {
  array.forEach((id) => {
    document.querySelector(id).classList.remove('is-valid');
  });
};
