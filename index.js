const employee = {
    name: "Greg Ejimofor",
    streetAddress: "14 Nguru Rd",
};
function updateEmployeeWithKeyAndValue(obj,key,value ){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]  = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj.name;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj.name;
    return obj;
}