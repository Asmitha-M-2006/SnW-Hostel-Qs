function switchOn(){
    const x = document.querySelectorAll('#bulb')[0];
    console.log(x)
    x.style.backgroundColor = "yellow";
}

function switchOff(){
    const x = document.querySelectorAll('#bulb')[0];
    x.style.backgroundColor = "black"
}