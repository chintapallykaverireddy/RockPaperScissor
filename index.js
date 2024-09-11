let score = JSON.parse(localStorage.getItem('score'));
        if(score === null){
            score={
                wins : 0,
                lose : 0,
                tie : 0
            };
        }   
        
        updateScore();
        let isAutoplaying=false;
        let intervalId;
        function autoPlay(){
            if(!isAutoplaying){
            intervalId=setInterval(()=>{
                const player=computerChoice();
                playGame(player);
            },1000);
            isAutoplaying=true;
        }else{
            clearInterval(intervalId);
           isAutoplaying=false;

        }
        }
        
    function computerChoice(){
        const randomNumber=Math.random();
            let computerPick='';
        if(randomNumber >= 0 && randomNumber<1/2){
            computerPick = 'Rock';
        }else if(randomNumber >= 1/2 && randomNumber < 2/3){
            computerPick = 'Paper';
        }else if(randomNumber >= 2/3 && randomNumber <1){
            computerPick = 'Scissor';
        }
        return computerPick;
    }
    function playGame(player){
        const computerPick= computerChoice();
        console.log(computerPick);
        let result='';
            if(player == 'Rock'){
                    if(computerPick=='Rock'){
                        result='Tie';
                    }else if(computerPick=='Paper'){
                        result='You lose';
                    }else if(computerPick=='Scissor'){
                        result='You win';
                    }  
            } else if(player == 'Paper'){
                    if(computerPick=='Rock'){
                        result='You win';
                    }else if(computerPick=='Paper'){
                        result='Tie';
                    }else if(computerPick=='Scissor'){
                        result='You lose';
                    } 
            }
            else if(player == 'Scissor'){
                    if(computerPick=='Rock'){
                        result='You lose';
                    }else if(computerPick=='Paper'){
                        result='You win';
                    }else if(computerPick=='Scissor'){
                        result='Tie';
                    }  
                } 
                if(result == 'You win') {
                    score.wins += 1;
                } else if(result == 'You lose'){
                    score.lose += 1;
                }else if(result == 'Tie') {
                    score.tie += 1;
                }
                localStorage.setItem('score',JSON.stringify(score));
                updateScore();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-move').innerHTML = `You <img src="images/${player}-emoji.png" class="res-sty">       <img src="images/${computerPick}-emoji.png" class="res-sty">Computer `;
        //alert(`You picked ${player} computer picked ${computerPick}..${result}\n Wins:${score.wins} Losses:${score.lose} Tie:${score.tie}`);
    }
    function updateScore(){
        document.querySelector('.js-score').innerHTML = `Wins:${score.wins}   Losses:${score.lose}   Tie:${score.tie}`;
    }