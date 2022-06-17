//- Create an alert that lists all users, with their ids, names and what city they're from
//- Prompt the user for a user id
//- Display an alert with the username and all the todos titles that belong to that user

//users.id
//users.name
//users.address.city

let content = ""

for (const user of users) {
  content +=
   `Hello, ${user.name} with number Id: ${user.id} from ${user.address.city}\n`
}

alert(content)


let id = Number(prompt("What is your number Id?"))

let username
for(let user of users){
    if(id === user.id)
    alert("This is: " + user.username)
}

let todosForUser = ''
for(let todo of todos){
    if(id === todo.userId) {
        todosForUser += `${todo.title} \n`
    }
}

alert(todosForUser)

