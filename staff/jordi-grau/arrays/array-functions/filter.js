'use strict'

function filter(array, expresion) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if(expresion(array[i])){
            result[result.length]= array[i]
        };
    }
    if(result.length===0){
        return -1
    }else{
        return result;
    }
    
}