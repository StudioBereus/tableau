

function breath(){
    const balloon = document.getElementById("balloon")
    const currentWidthPx = parseInt(getComputedStyle(balloon).width);
    balloon.style.width = `${currentWidthPx + 20}px`;

    const currentHeightPx = parseInt(getComputedStyle(balloon).height);
    balloon.style.height = `${currentHeightPx + 20}px`;

    const curentBorderPx = parseInt(getComputedStyle(balloon).borderRadius);
    balloon.style.borderRadius=`${curentBorderPx + (currentHeightPx/2)}px`;

    if([200, 260, 320, 380].includes(currentHeightPx)){
        balloon.style.backgroundColor="red";
    }

    else if([220, 280, 340, 400].includes(currentHeightPx)){
        balloon.style.backgroundColor="green";
    }

    else if([240, 300, 360, 420].includes(currentHeightPx)){
        balloon.style.backgroundColor="blue";
    }

    //Change size to 200px when size > 420
    if(currentHeightPx>420){
        balloon.style.height = "200px";
        balloon.style.width = "200px";
        balloon.style.borderRadius = "100px";
        balloon.style.backgroundColor="red";
    }

    
}
