
function writeCards(name, event) {
    const messages = []

for (let index = 0; index < name.length; index++) {
    
    messages.push(`Thank you, ${name[index]}, for the wonderful ${event} gift!`)
     
}

return messages
    
}




function countDown(i) {

    while (i >= 0) {

        console.log(i)
        i--
    
    }
    /*for (let index = 10; index >= 0; index--) {
        
        console.log(index)
    }*/
    
} 



