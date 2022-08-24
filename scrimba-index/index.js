const playBtn=document.getElementById("play-btn")
const playBtnDiv=document.getElementById("play-btn-div")
const rollBtn=document.getElementById("roll-btn")
const diceNo=document.getElementsByClassName("dice-no")
const score1E=document.getElementById("score1")
const score2E=document.getElementById("score2")
let score1V=0
let score2V=0
let curPlay
let nextPlay
let randVal
playBtn.addEventListener("click",function(){
playBtnDiv.innerHTML=`<p style="text-align :center"><button id="hum-btn" onclick=humPlayer()>Against Human</button><button id="comp-btn"onclick=compPlayer()>Against Computer</button><p>`
    
})
function humPlayer(){
    playBtnDiv.innerHTML=`<p style=text-align:center>Player 1<p>`
    rollBtn.style.display="block"
    nextPlay="player 2"
    curPlay=`Player 1`
}
function compPlayer(){
    playBtnDiv.innerHTML=`<p style=text-align:center>Player 1<p>`
    nextPlay="computer"
    rollBtn.style.display="block"
    curPlay="Player 1"
}
function getRanDiceNo(){
    return (Math.floor(Math.random()*6))+1
}
function pressRollBtn(){
    if (curPlay=="Player 1"){
    randVal=getRanDiceNo()
    diceNo[0].textContent=`${randVal}`
    curPlay=nextPlay
    score1V+=randVal
    playBtnDiv.innerHTML=`<p style=text-align:center>${nextPlay}<p>`
    score1E.innerText=`Score:${score1V}`
    if(score1V>= 20){
        playBtnDiv.innerHTML=`<p style=text-align:center>congratulations player 1 🥳<button onclick=reloadBtn()>play again!</button></p>`
        curPlay="nothing"
    }
    if (nextPlay=="computer"&& curPlay!="nothing"){
        randVal=getRanDiceNo()
        diceNo[1].textContent=`${randVal}`
        curPlay="Player 1"
        score2V+=randVal
        playBtnDiv.innerHTML=`<p style=text-align:center>Player 1<p>`
        score2E.innerHTML=`Score:${score2V}`
        if(score2V>= 20){
            playBtnDiv.innerHTML=`<p style=text-align:center>maybe next Time 😪<button onclick=reloadBtn()>play again!</button></p>`
            curPlay="nothing"
    }
}
    }
    else if( curPlay==nextPlay){
        randVal=getRanDiceNo()
        diceNo[1].textContent=`${randVal}`
        curPlay="Player 1"
        score2V+=randVal
        playBtnDiv.innerHTML=`<p style=text-align:center>Player 1<p>`
        score2E.innerHTML=`Score:${score2V}`
        if(score2V>= 20){
            playBtnDiv.innerHTML=`<p style=text-align:center>congratulations ${nextPlay} 🥳<button onclick=reloadBtn()>play again!</button></p>`
            curPlay="nothing"
        }
    } 
}
rollBtn.addEventListener("click",pressRollBtn)

diceNo[0].addEventListener("click",function(){alert(curPlay)})
function reloadBtn(){
    location.reload()
}
