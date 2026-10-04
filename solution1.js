function deepEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false

const personA = {
  name: "Nathan",
  age: 22,
  address: {
    city: "Abuja",
    country: "Nigeria",
    location: {
      area: "Kubwa",
      street: "Main Street",
    },
  },
};

const personB = {
  name: "Nathan",
  age: 22,
  address: {
    city: "Abuja",
    country: "Nigeria",
    location: {
      area: "Garki",
      street: "Main Street",
    },
  },
};

console.log(deepEqual(personA, personB));
