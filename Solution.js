// (get-in m ks)(get-in m ks not-found)

// user=> (def m {:username "sally"
// :profile {:name "Sally Clojurian"
// :address {:city "Austin" :state "TX"}}})
// #'user/m

// user=> (get-in m [:profile :name])
// "Sally Clojurian"
// user=> (get-in m [:profile :address :city])
// "Austin"
// user=> (get-in m [:profile :address :zip-code])
// nil
// user=> (get-in m [:profile :address :zip-code] "no zip code!")
// "no zip code!"

// 1 recreate test object in JS
const user = {
  username: 'sally',
  profile: {
    name: 'Sally Clojurian',
    address: {
      city: 'Austin',
      state: 'TX'
    }
  }
}

// 2 empty func def in JS . 4 flesh out the function
const getIn = (m, ks, notFound = null) => {
  // if notFound then return directly and no need to iterate object
  if(notFound) {
    return notFound;
  }
  // call the function again if array length is more than 1 else just return value of the key
  if(ks.length > 1) {
    for(let i=0; i<ks.length-1; i++) {
      let currentElem = ks[i];
      ks.splice(0,1);
      return getIn(m[currentElem], ks);
    }
  } else {
    return m[ks[0]] || null;
  }
}

const getIn2 = (m, ks, notFound = null) => {
  // if notFound then return directly and no need to iterate object
  if(notFound) {
    return notFound;
  }
  // intialize obj as m and then update it depending on the key of array
  let obj = m;
  for(let i=0; i<ks.length; i++) {
    obj = obj[ks[i]];
  }
  return obj || null;
}

// 3 translate lines 8-14 to JS
console.log(getIn(user, ['profile', 'name']));
console.log(getIn(user, ['profile', 'address', 'city']));
console.log(getIn(user, ['profile', 'address', 'zip-code']));
console.log(getIn(user, ['profile', 'address', 'zip-code'], "no zip code!"));

console.log("========================");

console.log(getIn2(user, ['profile', 'name']));
console.log(getIn2(user, ['profile', 'address', 'city']));
console.log(getIn2(user, ['profile', 'address', 'zip-code']));
console.log(getIn2(user, ['profile', 'address', 'zip-code'], "no zip code!"));

