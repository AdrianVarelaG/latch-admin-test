export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules) {
    if (rules.required) isValid = value.trim() !== "";
    if (isValid && rules.minLength) isValid = value.length >= rules.minLength;
    if (isValid && rules.maxLength) isValid = value.length <= rules.maxLength;
    if (isValid && rules.isEmail) {
      const patter = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = patter.test(value);
    }
    if (isValid && rules.isNumeric) {
      const patter = /^\d+$/;
      isValid = patter.test(value);
    }
  }
  return isValid;
};
