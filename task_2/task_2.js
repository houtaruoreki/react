let users_array =  [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}];

function min_age(users){
    let age = users[0].age;
    let name = "";
    users.forEach(user => {
        if (user.age < age){
            age = user.age;
            name = user.name;
        }
    });
    return name;
}

let user = {name: 'Temo', age: 25};
function new_user(user){
    let newUser = new Object();
    for (let key in user) {
        newUser[key] = user[key];
    }
    return newUser;
}


function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

function game(){
    let tries = 1;
    let a,b = 0;
    while(true){
        a = rollDice();
        b = rollDice();
        if (a==3){
            alert(`Player A won after ${tries} tries!`);
            break;
        }
        else if(b==3){
            alert(`Player B won after ${tries} tries!`);
            break;
        }
        else{
            tries++;
        }
    };
}

