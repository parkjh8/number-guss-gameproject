//랜덤번호 지정
//유저가 번호 입력 그리고 go 버튼 누름
//만약에 유저가 랜덤번호 맞추면, 맞췄습니다.
//랜덤번호 < 유저번호 down!!
//랜덤번호 > 유저번호 up!!
//reset버튼을 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측 불가,버튼이 disable)
//유저가 1~100범위 밖에 숫자면 알려줘야함 기회를 깍지않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를깍지않는다.


let computerNum=0
let playbutton=document.getElementById("playbutton");
let user_input=document.getElementById("user-input");
let area = document.getElementById("resultarea");
let resetbutton = document.getElementById("resetbt");
let chancesresult=document.getElementById("chances");
let chances = 5;
let gameOver = false;
let history=[];

playbutton.addEventListener("click",play)
resetbutton.addEventListener("click",reset)
user_input.addEventListener("focus",function(){user_input.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
    let userValue = user_input.value;


    if(userValue<1 || userValue>100){
        area.textContent="1과100사이 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        area.textContent="이미 입력한 숫자입니다. 다시 입력해주세요."
        return;
    }

    chances --;
    chancesresult.textContent= `남은기회 ${chances}번`

    if(userValue <computerNum){
        area.textContent="UP!!"
        
    }else if(userValue > computerNum){
        area.textContent="Down!"
    }else {(userValue == computerNum)
        area.textContent="맞췄습니다."
        gameOver=true;
    }

    history.push(userValue);
    console.log(history)

    if(chances<1){
        gameOver=true;
    }
    if(gameOver==true){
        playbutton.disabled=true;
    }

}

function reset(){
    //user input창이 꺠끗해야하고 
    user_input.value="";
    gameOver=false;
    playbutton.disabled=false;
    chances=5;
    chancesresult.textContent=`남은기회${chances}번`
    history=[];
    //새로운 번호 생성
    pickRandomNum()

    area.textContent="결과창이 여기 나옵니다."
}

pickRandomNum()