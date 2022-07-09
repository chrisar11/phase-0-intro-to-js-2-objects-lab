// Write your solution in this file!
const employee = {
    name: "value1",
    streetAddress: "value2",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj,
    [key]: value,
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
};

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}