/**
 * Receives object and filter all falsy values ( "", 0, false, null, undefined )
 */

const removeFalsy = obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
    {}
  );

export default removeFalsy;
