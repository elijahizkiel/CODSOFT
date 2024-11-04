function buttonListner(component){
    const inputArea = document.getElementById('expression');
    const text = inputArea.value;
    
    switch(component.value){
        case 'clear-all':{
            inputArea.value = '';
            break;
        }
        case 'clear': {
            inputArea.value = text.slice(0,text.length-1);
            break;
        }
        case 'equal':{
            document.getElementById('result').value = evaluate(text)
            break;
        }
        default:{            
            inputArea.value = inputArea.value + component.textContent;
        }
    }
}
function evaluate(expression){
    let tokens = expression.match(/(\d+(\.\d+)?)|([+\-*/])/g);
    let intermediate = [];

    for(i=0;i<tokens.length; i++){
        if(tokens[i] === '*' || tokens[i] === '/'){
            let prev = parseFloat(intermediate.pop());
            let next = parseFloat(tokens[++i]);
            let result = (tokens[i-1] === '*')? prev * next: prev / next;

            intermediate.push(result);
        
        } else {
            intermediate.push(tokens[i]);
        }
    }

    let result = parseFloat(intermediate[0]);
    
    for(i = 1; i < intermediate.length; i+=2){
        if(intermediate[i] === '+'){
            result += parseFloat(intermediate[i+1]);
        }else if(intermediate[i] === '-'){
            result -= parseFloat(intermediate[i+1]);
        }
    }
     
    return result;
}

let btns = document.querySelectorAll('.btn');

for(btn of btns){
    btn.addEventListener('click', (event) => {
        buttonListner(event.target);
    });
}