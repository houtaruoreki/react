function equal(a,b){
    if (a == b){
        return "ტოლია";
    }
    else{
        return "არ არის ტოლი";
    }
}
function checkNum(num){
    return (!isNaN(parseFloat(num)) && isFinite(num));
}

function temp_converter(f){
   
    if (checkNum(f)){
        return (f - 32) * (5 / 9);
    }else{
        return false;
    }
    
}



function calculator(a,b,operator){
    if (!(checkNum(a) && checkNum(b))){
        return false;
    }
    else{
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
            return false;
        }
    }
}

