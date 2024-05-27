function replaceValue(text,valueToReplace,valueToReplaceWith){
    text =  text.split(" ");
    for(const key in text){
        if(text[key] == valueToReplace){
            text[key] = valueToReplaceWith;
        }
    }
    return text.join(" ");
}


function capitalize(text) {
    text = text.split(" ");
    for (const key in text) {
        let word = text[key];
        if (word.length > 0 && word[0] >= 'a' && word[0] <= 'z') {
            word = String.fromCharCode(word.charCodeAt(0) - 32) + word.slice(1);
        }
        text[key] = word;
    }
    return text.join(" ");
}

function sort_age(arr){
    arr.sort((first,second)=> first.age - second.age);
    return arr;
}
