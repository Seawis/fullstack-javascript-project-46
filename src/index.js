import _ from 'lodash';

const compareObjects = (obj1, obj2) => {
  const getAllKeys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]).sort(); // console.log(getAllKeys);
  console.log('{');
  getAllKeys.forEach((key) => {
    if (Object.hasOwn(obj1, key) & Object.hasOwn(obj2, key)) {
      const result = (obj1[key] === obj2[key])
        ? `    ${key}: ${obj1[key]}`
        : `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
      console.log(result);
    } else if (Object.hasOwn(obj1, key)) {
      console.log(`  - ${key}: ${obj1[key]}`);
    } else {
      console.log(`  + ${key}: ${obj2[key]}`);
    }
  });
  console.log('}');
}

export { compareObjects };

