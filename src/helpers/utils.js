export const removeEmpty = obj => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === "object") removeEmpty(obj[key]); // recurse
    else if (obj[key] == null) delete obj[key]; // delete
  });
};
