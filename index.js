let sum = 0
let isAlive = false
let hasBlackJack=false

let cards=[]
let message = ""


let messageEl=document.getElementById("message")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber = (Math.random() * 13)
    let flooredRandomNum = Math.floor(randomNumber)+1
    if(flooredRandomNum===1){
        return 11
    }
    else if(flooredRandomNum>=10){
        return 10
    }
    else {
        return flooredRandomNum
    }
    
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard,secondCard)
    sum+=firstCard+secondCard
    renderGame()
}
function renderGame(){
    
    if(sum<=20){
        message="Do you want to draw another card?"
    }
    else if(sum===21){
        message="Wohoo! You have won Blackjack"
        hasBlackJack=true
    }
    else{
        message="Sorry, You Lost"
        isAlive=false
    }
    messageEl.textContent=message

    sumEl.textContent=sumEl.textContent+" "+sum

    let cardCount= "Cards: "
    cardsEl.textContent=cardCount
    for(let i=0; i<cards.length; i++){
        cardCount=cardCount+cards[i]+" "
        cardsEl.textContent=cardCount
    }
    
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
        
}



function reset(){
    isAlive=false
    hasBlackJack=false
    cards=[]
    sum=0
    messageEl.textContent="Want to play a round?"
    cardsEl.textContent="Cards: "
    sumEl.textContent="Sum: "

}