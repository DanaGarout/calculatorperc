var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");


var result = document.getElementById("result");
var form = document.getElementById("form-id");

form.addEventListener('submit', function(event){
    if(!input1.value || !input2.value ){
        alert("Enter values please!")
    }
    else{
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var r = x/y;
        var percent = Math.floor(r * 100);
        result.innerText = "Result:" + percent + ' ' + '%';
        event.preventDefault();
    }
        
        
});