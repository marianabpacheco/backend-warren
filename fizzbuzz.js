function fizzbuzz(number){
    let message = ''
    if(number % 3 == 0){
        message += 'Fizz'
    }
    if(number % 5 == 0 ){
        message += 'Buzz'
    } 
    if(message.length === 0 ){
        message = String(number)
    }
    return message
}

for(let i = 0; i <=20;i++){
    const message = fizzbuzz(i)
    console.log(message)
}