let val1=document.getElementById('value1');
let val2=document.getElementById('value2');
let val3=document.getElementById('value3');
let options = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]


function getrandom()
{
    return options[Math.floor(Math.random()*7)]
}


setInterval(()=>
{
    val1.innerText=getrandom()
    val2.innerText=getrandom()
    val3.innerText=getrandom()

},500)