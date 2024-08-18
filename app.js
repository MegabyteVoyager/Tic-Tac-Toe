
let buttons = document.querySelectorAll("button");
buttons.forEach((b,ind)=>{
    b.classList.add(`b${ind}`);
}

);
function playSound(url)
{
    let audio= new Audio(url);
    audio.play();
}
let msg_btn= document.querySelector("div");
msg_btn.innerText= "Result of Game";
msg_btn.classList.add("msg");
msg_btn.style.visibility= "hidden";

let reset_btn = document.createElement("button");
reset_btn.innerHTML= "RESET";
reset_btn.classList.add("reset_btn")
document.querySelector("body").append(reset_btn);



let currState= "null";
let x_score=0, o_score=0;
let score_of_x= document.createElement("span");
let score_of_o= document.createElement("span");
score_of_x.innerText=x_score;
score_of_o.innerText=o_score;
document.querySelector(".scoreX").append(score_of_x);
document.querySelector(".scoreO").append(score_of_o);

let winPatterns= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(currState==="null" || currState==="o")
        {
            currState="x";
            btn.innerHTML="<h1>X<h1>";
        }
        else if(currState==="x")
        {
            currState="o";
            btn.innerHTML="<h1>O<h1>";
        }
        let flag=1;
        btn.disabled= true;
        buttons.forEach((btn)=>{
            if(btn.innerText === "")
                   flag=0;
            
           });
           if(flag === 1)
           {
            msg_btn.style.visibility= "visible";
            msg_btn.innerText= `It's a Draw!!`;
           }
        winPatterns.forEach((pattern)=>{
            let val1= buttons[pattern[0]].innerHTML;
            let t1= buttons[pattern[0]].innerText;
        let  val2= buttons[pattern[1]].innerHTML;
        let t2= buttons[pattern[1]].innerText;
           let  val3= buttons[pattern[2]].innerHTML;
           let t3= buttons[pattern[2]].innerText;
           if(t1!= "" && t2!="" && t3!= "")
           {
            if(t1===t2 && t2===t3 && t3===t1 )
            {
                console.log(`\nWinning Pattern:-`);
                console.log(pattern);
                msg_btn.style.visibility= "visible";
                msg_btn.innerText= `Congratulations! ${t1} Won`;
                buttons.forEach((b)=>
                {
                    b.disabled= true;
                });
                t1==="X"? x_score++: o_score++;
                console.log(x_score,o_score);
                score_of_x.innerText=x_score;
                score_of_o.innerText=o_score;
                playSound("sound effect/cute-level-up-3-189853.mp3");

                
            }
        }
        });
    });
});
reset_btn.addEventListener("click",()=>{
    currState= "null";
    msg_btn.style.visibility= "hidden";
    buttons.forEach((btn)=>{
        btn.innerHTML= "";
        btn.disabled= false;
    });
});


