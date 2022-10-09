let currentUser = ["bilal","javed","asad"];

let newUsers = ["asif","Bilal"];

for(let i = 0; i < newUsers.length; i++){
    for(let j = 0; j < currentUser.length; j++){
        if(new_users[i].includes(currentUser[j])){
            console.log(`Username ${newUsers[i]} is not available `);
        }
    }
}