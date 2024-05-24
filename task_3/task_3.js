function sumElements(...numbers){
    let first = numbers.shift();
    let second = numbers.shift();
    let new_array = [first+second]
    let product = 1;
    numbers.forEach(function(n){
        product = product*n;
    });
    new_array.push(product);
    return new_array;
}


function userAddress({ bank = [] } = {}) {
    const { address: { city } = {} } = bank[2] || {};
    return city;
}


function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return [...obj].map(deepCopy);
    }
    console.log(obj)
  
    const copiedObj = { ...obj };
    for (const key in copiedObj) {
      if (copiedObj.hasOwnProperty(key)) {
        copiedObj[key] = deepCopy(copiedObj[key]);
      }
    }
  
    return copiedObj;
}
  
  function copy_user(user) {
    return deepCopy(user);
  }
  

  //or 
  let user_copy = JSON.parse(JSON.stringify(user));
