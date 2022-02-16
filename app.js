let input = document.getElementById("input");
let button = document.getElementById("button");
let p = document.querySelectorAll("p");
let reset = document.getElementById("reset");


function number() { 
   return Math.floor(Math.random()*90+1)
};



let lottery = [];



button.addEventListener("click", ()=>{
    let counter = 0;

    while(input.value > counter){
        

        while (lottery.length < 6){
        let control = number()
            if(lottery.includes(control)){
            continue;
            }
            else {
            lottery.push(control);
            }
        };
        lottery.sort((a,b) => a - b);
        while (lottery.length < 7){
        let control = number()
            if(lottery.includes(control)){
            continue;
            }
            else {
            lottery.push(control);
            }
        };
        
        lottery.push(number());
        let line = `${lottery[0]} - ${lottery[1]} - ${lottery[2]} - ${lottery[3]} - ${lottery[4]} - ${lottery[5]} | ${lottery[6]} | ${lottery[7]}`
        console.log(line);
       
        
        p[counter].innerHTML = line
        
        counter += 1 
        lottery = [];
    };

    if( input.value < 7){
        let empty = input.value
        for (;empty < 8 ; empty++) {
            p[empty].innerHTML=""
        };
    } ;
            
});

reset.addEventListener("click", ()=>{
    window.location.reload(false)
});

