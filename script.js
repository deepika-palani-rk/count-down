var countdown = 10;
var count = setInterval(()=>
{
    if(countdown >= 1)
    {
        console.log(countdown);
        document.getElementById("wish").innerText =countdown;
        countdown--;
    }
    else{
        document.getElementById("wish").innerText = "Happy Developers Day!!!";
        console.log(countdown);
        clearInterval(count);

    }

},1000);

