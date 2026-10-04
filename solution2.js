function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {},
  };

  const oldKeys = Object.keys(oldObj);
  const newKeys = Object.keys(newObj);

  const oldKeySet = new Set(oldKeys);
  const newKeySet = new Set(newKeys);

  for (const key of newKeys) {
    if (!oldKeySet.has(key)) {
      result.added[key] = newObj[key];
    }
  }

  for (const key of oldKeys) {
    if (!newKeySet.has(key)) {
      result.removed[key] = oldObj[key];
    }
  }

  for (const key of oldKeys) {
    if (newKeySet.has(key) && oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }

  return result;
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
