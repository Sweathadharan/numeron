
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function numbers()
{
 const Num1 = Math.floor(Math.random()*100);
 const Num2 = Math.floor(Math.random()*100);
 num1.textContent=Num1;
 num2.textContent=Num2;
 
}

// Iteration 3: Creating variables required to make the game function
const operators=['+','-','*','/','%'];
const num1 = document.getElementById('number1');
 const num2 = document.getElementById('number2');
 const num3=document.getElementById('number3');
 
const button = document.getElementById('buttons');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mul = document.getElementById('mul');
const divide = document.getElementById('divide');
const modulus = document.getElementById('modulus');
let score=0;
const updateScore=()=>{
    score+=1;
 }
 

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const storeNum3=(result)=>{
    
      num3.textContent=result;
}

// Iteration 5: Creating a randomise function to make the game functional
 const getRandomOperator =()=>{
    const n1 = parseInt(num1.textContent);
    const n2 = parseInt(num2.textContent);
    const randomOperators = operators[Math.floor(Math.random()*operators.length)];
    let result=0;
    switch(randomOperators) {
        case '+' : result = n1+n2;
                    break;
        case '-': result = n1-n2;
                    break;
        case '*': result=n1*n2;
                    break;
        case '/': result=n1/n2;
                    break;
        case '%':result=n1%n2;
                    break;
    }
    return result;
 }

// Iteration 6: Making the Operators (button) functional
button.addEventListener('click', function(event) {
    const n1 = parseInt(num1.textContent);
    const n2 =parseInt(num2.textContent);
    const n3 =parseInt(num3.textContent);
      if (event.target === plus && ((n1+n2)===n3))
      {
         console.log('plus');
         updateScore();
       } 
       else if (event.target === minus && ((n1-n2)===n3) ) {
          console.log('minys');
          updateScore();
       }
       else if (event.target === mul && ((n1*n2)===n3)) {
          console.log('mul');
          updateScore();
       }
       else if (event.target === divide  && ((n1/n2)===n3) ) {
        console.log('divide');
        updateScore();
     }
     else if (event.target === modulus && ((n1%n2)===n3)) {
        console.log('modulus');
        updateScore();
     }
       else{
          
          window.location.href = 'gameover.html?score=' + score;
       }
       
       
      numbers();
      storeNum3(getRandomOperator());

    
   });
 
  

// Iteration 7: Making Timer functional
const time=document.getElementById('timer')
let count = 20;
const timer = setInterval(function() {
  count--;
  time.textContent=count;  
  if(count==0)
  {
   window.location.href = 'gameover.html?score=' + score;
  }
},1000);
