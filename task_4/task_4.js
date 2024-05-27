/*
● დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს string ტიპის მნიშვნელობას
(წინადადებას), მასში ყოველ სიტყვას
გადაწერს დიდი ასოთი და დააბრუნებს
ახალ წინადადებას
ᲓᲐᲕᲐᲚᲔბᲐ


● დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს მომხმარებლების მასივს და
დააბრუნებს დალაგებულ მასივს
მომხმარებლების ასაკის ზრდადობის
მიხედვით
● მაგალითად, ჩავთვალოთ, რომ გვაქვს
[{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
20}]. ფუნქციამ უნდა დააბრუნოს [{name:
‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
● შეგიძლია გამოიყენო sort() ფუნქცია
*/




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