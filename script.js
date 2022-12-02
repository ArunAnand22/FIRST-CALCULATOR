//1.Display number in text box

    function displayNum(num){
        result.value+=num;
    }

//2.Clear text box

    function clearBox(){
        result.value="";
    }

//3.Evaluate expression
function evaluateExpression(){
// expression=result.value;
// output=eval(expression);
// result.value=output;
//or
result.value=eval(result.value);
}

//4.Remove last item from text-box
function removeLast(){
    // currentExpression=result.value;
    // result.value=currentExpression.slice(0,-1);
    result.value=result.value.slice(0,-1);
}