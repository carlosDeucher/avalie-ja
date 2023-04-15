export default function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);
  props.forEach(function (name) {
    const prop = obj[name];
    if (typeof prop === "object" && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}
