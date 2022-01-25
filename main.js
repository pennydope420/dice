   var randomNum1 = 1 + Math.floor(Math.random() * 5)
        var randomNum2 = 1 + Math.floor(Math.random() * 5)

        if(randomNum1>randomNum2){
            if(randomNum1 == 2){
                document.querySelector("div#p1 img").setAttribute("src","dice2.png");
            }
            if(randomNum1==3){
                document.querySelector("div#p1 img").setAttribute("src","dice3.png");
            }
            if(randomNum1==4){
                document.querySelector("div#p1 img").setAttribute("src","dice4.png");
            }
            if(randomNum1==5){
                document.querySelector("div#p1 img").setAttribute("src","dice5.png");
            }
            if(randomNum1==6){
                document.querySelector("div#p1 img").setAttribute("src","dice6.png");
            }
            document.querySelector("#winner span").innerHTML=" Player 1 wins ✌️😄 ";
        }
        else if(randomNum2>randomNum1){
            if(randomNum2 == 2){
                document.querySelector("div#p2 img").setAttribute("src","dice2.png");
            }
            if(randomNum2==3){
                document.querySelector("div#p2 img").setAttribute("src","dice3.png");
            }
            if(randomNum2==4){
                document.querySelector("div#p2 img").setAttribute("src","dice4.png");
            }
            if(randomNum2==5){
                document.querySelector("div#p2 img").setAttribute("src","dice5.png");
            }
            if(randomNum2==6){
                document.querySelector("div#p2 img").setAttribute("src","dice6.png");
            }
            document.querySelector("#winner span").innerHTML=" Player 2 wins ✌️😄 ";
        }
        else if(randomNum1==randomNum2){
            if(randomNum2 == 2 && randomNum1==2){
                document.querySelector("div#p2 img").setAttribute("src","dice2.png");
                document.querySelector("div#p1 img").setAttribute("src","dice2.png");
            }
            if(randomNum2==3 && randomNum1==3){
                document.querySelector("div#p2 img").setAttribute("src","dice3.png");
                document.querySelector("div#p1 img").setAttribute("src","dice3.png");
            }
            if(randomNum2==4 && randomNum1==4){
                document.querySelector("div#p2 img").setAttribute("src","dice4.png");
                document.querySelector("div#p1 img").setAttribute("src","dice4.png");
            }
            if(randomNum2==5 && randomNum1==5){
                document.querySelector("div#p2 img").setAttribute("src","dice5.png");
                document.querySelector("div#p1 img").setAttribute("src","dice5.png");
            }
            if(randomNum2==6 && randomNum1==6){
                document.querySelector("div#p2 img").setAttribute("src","dice6.png");
                document.querySelector("div#p1 img").setAttribute("src","dice6.png");
            }
            document.querySelector("#winner span").innerHTML=" That's a draw 👀 !";
        } 
