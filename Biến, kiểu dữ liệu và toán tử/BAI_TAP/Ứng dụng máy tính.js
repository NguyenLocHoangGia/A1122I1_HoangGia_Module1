let operand1 = "";
let operand2 = "";
let opt

>function buttonHandler(btn) {
    const pressdValue = btn.innerText
    const resultInput = document.getElementById('resultInput')
    if (isNaN(pressdValue)){
        if (pressdValue == 'C')
        {
            operand1 = "";
            operand2 = "";
            opt = undefined;
            resultInput.value = ''
            return;
        }
        if (pressdValue == '=')
        {
            const result = perform(operand2, operand1, opt)
            resultInput.value = result;
            operand1 = "";
            operand2 = "";
            opt = undefined;
        }else{
            opt = pressdValue;
        }
    }else{
        if (opt){
            operand2 += pressdValue
            resultInput.value = operand2
        }else{
            operand1 += pressdValue;
            resultInput.value = operand1;
        }
    }
}
>function perform(orand1, orand2, otor) {
    orand1 = Number(orand1)
    orand2 = Number(orand2)
    switch (otor)
    {
        case '+'
            return orand1 + orand2;
        break
        case '-'
            return orand1 - orand2;
        break
        case '*'
            return orand1 * orand2;
        break
        case '/'
            return orand1 / orand2;
        break
    }
}