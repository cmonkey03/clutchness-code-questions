var array = []

for (let i = 0;  i < 100000; i++) {
  array.push(i)
}

var target = 8

function holdMyClutch(array, target) {
  let targetNum = []
  for (var i = 0; i < array.length; i++) {

    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        targetNum.push(array[i],array[j])
      }
    }
  }
  return targetNum;
}

function clutchDown(array, target) {
  let obj = {}

  array.forEach((n) => {
    array.forEach((m) => {
      if (n + m === target && !obj[m]) {
        obj[n] = m
      }
    })
  })

  return obj;
}

function clutchMyEarls(array,target) {
  let arr = []
  for (let i = 1; i < array.length; i++) {
    if (array[0] + array[i] === target) {
      arr.push([array[0], array[i]])
    }
  }
  if (array.length > 1) {
    array.shift()
    arr.push(clutchMyEarls(array, target))
  }
  return arr.flat()
}

function fancyClutch(array,target) {
  let obj = {}
  let clutchArray = []
  array.forEach((n) => {
    obj[n] = target - n
    if (!!obj[obj[n]]) {
      clutchArray.push([ n, target - n ])
    }
  })
  return clutchArray
}

function clutchClutchClutch(array,target) {
  let hash = {}
  let fancyArray = []
  for (let i = 0; i < array.length; i++) {
    const val = array[i]
    const complement = target - val

    if (hash[complement] !== undefined) {
      fancyArray.push([val,complement])
    }

    hash[val] = i
  }
  return fancyArray
}

var t0 = Date.now();

// console.log(clutchDown(array, target))

// console.log(holdMyClutch(array, target))

// console.log(clutchMyEarls(array,target))

// console.log(fancyClutch(array,target))

console.log(clutchClutchClutch(array,target))

var t1 = Date.now();

console.log("Function took " + (t1 - t0) + " milliseconds.")


function reClutch(array, target) {
  let arr = []
  array.sort()
  //some logic here to check first number with end number(s)
  //remove those numbers from array
  return arr.push( matched numbers o)
}
