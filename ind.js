 function roll(){
    p1 = Math.floor(Math.random()*10000 %6 +1)
    p2 = Math.floor(Math.random()*10000 %6 +1)
    p = document.querySelector("h3")
    if(p1>p2)p.innerHTML ="Player 1 is the winner!";
    
    else if(p1<p2)p.innerHTML ="Player 2 is the winner!";
    
    else p.innerHTML ="Draw!";
    img1 = document.querySelector("#img1")
    
    img2 = document.querySelector("#img2")

    st1 = "img/"+p1+".jpg"
    st2 = "img/"+p2+".jpg"
    img1.src=st1;
    img2.src=st2;




}