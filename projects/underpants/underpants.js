// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
       return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (value) {
    if (value === null) {
        return 'null';
        
    } else if (value instanceof Date) {
        return 'date';
        
    } else {
        return Array.isArray(value) ? 'array' : typeof value;
        
    }
    
};
    
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {
    let elements = [];
    
    if (!Array.isArray(array) || number < 0) { 
        return [];
    } else if (typeof number !== 'number') { 
        return array[0]; 
    } else if (number >= array.length) { 
        return array; 
    } else {
        for (let i = 0; i < number; i++) {
            elements.push(array[i]);
            
        }
        return elements;
        
    }
        
    
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (array, number) {
    let elements = [];
    
    if (!Array.isArray(array) || number < 0) { 
        return [];
    } else if (typeof number !== 'number') { 
        return array[array.length - 1]; 
    } else if (number >= array.length) { 
        return array; 
    } else {
        for (let i = 1; i < array.length; i++) {
            elements.push(array[i]);
        }
        return elements;
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value) {
    //let countOccurrences = 0; 
    //let index = [];
    for (let i = 0; i <= array.length - 1; i++) { 
        if (array[i] === value) { 
            //countOccurrences += i;
            return i;
        }
     }
     return -1; 
    
    //return countOccurrences; 
    
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value) { 
    let aggregator = []; 
    for (let i = 0; i <= array.length - 1; i++) { 
        // traverse the array
        if (array[i] === value) {
            aggregator.push(array[i]); 
        } 
    }
    return aggregator.length > 0 ? true : false; 
    
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, fxn) {

    if (Array.isArray(collection)) { 
        for (let i = 0; i <= collection.length - 1; i++) {
            fxn (collection[i], i, collection);
            console.log(collection[i], i);
            
        }
        
    } else if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (let key in collection) { 
            fxn (collection[key], key, collection);
            console.log(key, collection[key]); 
        }
    }

};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;
};
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
* 
* 
*/

//Array.prototype.forEach = function(callback, thisArg) {

_.filter = function (array, fxn) {
    
    const elementArr = []; 
    
    for (var i = 0; i < array.length; i++) {
            let e = array[i]; 
            
         let boolean = fxn(e, i, array);
         // KW boolean has to evaluate to true 
           if (boolean) { 
             elementArr.push(e);
         }
    }
    return elementArr;
} //_.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
/*
   if (Array.isArray(array) { 
        _.each(array, fxn);
    }
/*
var arr = ['a', 'b', 'c'];    
arr.forEach(function(element) {  
    console.log(element);  
}); 
*/
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, fxn) {
    
    const elementArr = []; 
    
    for (var i = 0; i < array.length; i++) {
            let e = array[i]; 
            
         let boolean = fxn(e, i, array);
         // KW boolean has to evaluate to false 
           if (!boolean) { 
             elementArr.push(e);
         }
    }
    return elementArr;
};
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}  */
_.partition = function(array, fxn) {
    
    let partitioned = [];
    
    let part1 = _.filter(array, fxn); let part2 = _.reject(array, fxn);
    
    partitioned.push(part1); partitioned.push(part2); 
    
    return partitioned; 
    
};

/*_.filter = function (array, fxn) {
    
    const elementArr = []; 
    
    for (var i = 0; i < array.length; i++) {
            let e = array[i]; 
            
         let boolean = fxn(e, i, array);
         // KW boolean has to evaluate to true 
           if (boolean) { 
             elementArr.push(e);
         }
    }
    return elementArr;
} 
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/ 
_.map = function(collection, fxn){
    //declare and set an empty array
    let mapped = [];
    //each to loop through collection
    _.each(collection, function(element, index, collection){
        //call the func function on each value in the collection
        let result = fxn(element, index, collection);
        //put that value into the array
        mapped.push(result);
    });
    return mapped;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (collection, prop) {
    const plucked = [];
    for (var i = 0; i < collection.length; i++) {
        let obj = collection[i];
        _.each(obj, function(val, key, obj) {
            if (obj[prop] === val) {
                plucked.push(val);
            }
        });
    }
    return plucked;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
* 
*/
_.every = function(collection, iterator) { 

    iterator = iterator || _.identity;
    return !! _.reduce(collection, function(a, b) {
     return a && iterator(b);
    }, true)
}

/*
_.every = function(collection, func){
    let boolean = true;
    const fxn =  typeof func === "function";
    if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
         if(fxn ? !func(collection[i], i, collection) : !collection[i]){
             boolean = false; 
          }
      }
  } else {
      for(var key in collection){
          if(fxn ? !func(collection[key], key, collection) : !collection[key]){
              boolean = false;
          }
      }
  }
  return boolean; 
};
*/ 
/*
_.every = function (collection, fxn) {

    if (Array.isArray(collection)) { 
        for (let i = 0; i <= collection.length - 1; i++) {
            fxn (collection[i], i, collection);
            console.log(collection[i], i);
            
        }
    
    } else if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (let key in collection) { 
            fxn (collection[key], key, collection);
            console.log(key, collection[key]); 
        }
    }

};
*/

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*//*

_.some = function (collection, fxn) {
    if (Array.isArray(collection)) {
    let partitioned = [];
    let part1 = _.filter(collection, fxn); let part2 = _.reject(collection, fxn);
    partitioned.push(part1); partitioned.push(part2); 
    return partitioned;
    }
};
*/ 

_.some = function(collection, valChek) {
    const array = [[],[]]; 
        if (typeof valChek !== "function") {
            _.each(collection, function(value, location, collection) { 
            if (value) {
                array[0].push(value);
            } else { 
                array[1].push(value);
            } 
        });
    } else { 
        _.each(collection, function(p1, p2, p3) {
            if (valChek(p1, p2, p3)) {
                array[0].push(p1); 
            } else {
                array[1].push(p1);
            }
        });
    }
    return array[0].length > 0 ? true : false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function (collection, iterator, memo) {
  let seed = true;
  
  for (let i = 0; i < collection.length; i++) {
    if (seed === true && memo === undefined) {
        memo = collection[i];
        
    } else {
        memo = iterator(memo, collection[i], i, collection);
        
    }
    seed = false;
      
  }
  return memo;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(obj1, ...otherObjs) {
    _.each(otherObjs, function (e, i, a) {
        for (let key in e) {
            obj1[key] = e[key];
            
        }
        
    });
    return obj1;
    
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
