var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");

var top1 = document.getElementById("top1");
var top2 = document.getElementById("top2");
var top3 = document.getElementById("top3");
var top4 = document.getElementById("top4");
var top5 = document.getElementById("top5");
var top6 = document.getElementById("top6");
var top7 = document.getElementById("top7");
var top8 = document.getElementById("top8");
var top9 = document.getElementById("top9");
var top10 = document.getElementById("top10");
var bottom1 = document.getElementById("bottom1");
var bottom2 = document.getElementById("bottom2");
var bottom3 = document.getElementById("bottom3");
var bottom4 = document.getElementById("bottom4");
var bottom5 = document.getElementById("bottom5");
var bottom6 = document.getElementById("bottom6");
var bottom7 = document.getElementById("bottom7");
var bottom8 = document.getElementById("bottom8");
var bottom9 = document.getElementById("bottom9");
var shoe1 = document.getElementById("shoe1");
var shoe2 = document.getElementById("shoe2");
var shoe3 = document.getElementById("shoe3");
var shoe4 = document.getElementById("shoe4");
var shoe5 = document.getElementById("shoe5");
var shoe6 = document.getElementById("shoe6");
var shoe7 = document.getElementById("shoe7");
var shoe8 = document.getElementById("shoe8");
var shoe9 = document.getElementById("shoe9");
var shoe10 = document.getElementById("shoe10");

main1.appendChild(top1)
top1.style.display = "block";
top2.style.display = "none";
top3.style.display = "none";
top4.style.display = "none";
top5.style.display = "none";
top6.style.display = "none";
top7.style.display = "none";
top8.style.display = "none";
top9.style.display = "none";
top10.style.display = "none";

main2.appendChild(bottom1)
bottom1.style.display = "block";
bottom2.style.display = "none";
bottom3.style.display = "none";
bottom4.style.display = "none";
bottom5.style.display = "none";
bottom6.style.display = "none";
bottom7.style.display = "none";
bottom8.style.display = "none";
bottom9.style.display = "none";

main3.appendChild(shoe1)
shoe1.style.display = "block";
shoe2.style.display = "none";
shoe3.style.display = "none";
shoe4.style.display = "none";
shoe5.style.display = "none";
shoe6.style.display = "none";
shoe7.style.display = "none";
shoe8.style.display = "none";
shoe9.style.display = "none";
shoe10.style.display = "none";

document.getElementById("buttontop").onclick = function() {
  var chosenPic = Math.floor(Math.random()*10)+1;
  if (chosenPic == 1) {
    main1.appendChild(top1);
    top1.style.display = "block";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
  } else if(chosenPic == 2) {
    top1.style.display = "none";
    main1.appendChild(top2);
    top2.style.display = "block";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
  } else if (chosenPic == 3) {
    top1.style.display = "none";
    top2.style.display = "none";
    main1.appendChild(top3);
    top3.style.display = "block";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
  } else if (chosenPic == 4) {    
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none"
    main1.appendChild(top4);
    top4.style.display = "block";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
 } else if (chosenPic == 5) {    
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    main1.appendChild(top5);
    top5.style.display = "block";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
 } else if (chosenPic == 6) {    
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    main1.appendChild(top6);
    top6.style.display = "block";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
 } else if (chosenPic == 7) {    
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    main1.appendChild(top7);
    top7.style.display = "block";
    top8.style.display = "none";
    top9.style.display = "none";
    top10.style.display = "none";
 } else if (chosenPic == 8) {     
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    main1.appendChild(top8);
    top8.style.display = "block";
    top9.style.display = "none";
    top10.style.display = "none";
} else if (chosenPic == 9) {     
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    main1.appendChild(top9);
    top9.style.display = "block";
    top10.style.display = "none";
} else if (chosenPic == 10) {     
    top1.style.display = "none";
    top2.style.display = "none";
    top3.style.display = "none";
    top4.style.display = "none";
    top5.style.display = "none";
    top6.style.display = "none";
    top7.style.display = "none";
    top8.style.display = "none";
    top9.style.display = "none";
    main1.appendChild(top10);
    top10.style.display = "block";
  }
}

document.getElementById("buttonbottom").onclick = function() {
    var chosenPic = Math.floor(Math.random()*9)+1;
    if (chosenPic == 1) {
        main2.appendChild(bottom1);
        bottom1.style.display = "block";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
     } else if(chosenPic == 2) {
        bottom1.style.display = "none";
        main2.appendChild(bottom2);
        bottom2.style.display = "block";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
     } else if (chosenPic == 3) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        main2.appendChild(bottom3);
        bottom3.style.display = "block";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
     } else if (chosenPic == 4) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        main2.appendChild(bottom4);
        bottom4.style.display = "block";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
     } else if (chosenPic == 5) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        main2.appendChild(bottom5);
        bottom5.style.display = "block";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
    } else if (chosenPic == 6) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        main2.appendChild(bottom6);
        bottom6.style.display = "block";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
    } else if (chosenPic == 7) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        main2.appendChild(bottom7);
        bottom7.style.display = "block";
        bottom8.style.display = "none";
        bottom9.style.display = "none";
    } else if (chosenPic == 8) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        main2.appendChild(bottom8);
        bottom8.style.display = "block";
        bottom9.style.display = "none";
    } else if (chosenPic == 9) {
        bottom1.style.display = "none";
        bottom2.style.display = "none";
        bottom3.style.display = "none";
        bottom4.style.display = "none";
        bottom5.style.display = "none";
        bottom6.style.display = "none";
        bottom7.style.display = "none";
        bottom8.style.display = "none";
        main2.appendChild(bottom9);
        bottom9.style.display = "block";
  }
}

document.getElementById("buttonshoes").onclick = function() {
    var chosenPic = Math.floor(Math.random()*10)+1;
    if (chosenPic == 1) {
        main3.appendChild(shoe1);
        shoe1.style.display = "block";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
     } else if(chosenPic == 2) {
        shoe1.style.display = "none";
        main3.appendChild(shoe2);
        shoe2.style.display = "block";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
     } else if (chosenPic == 3) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        main3.appendChild(shoe3);
        shoe3.style.display = "block";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
     } else if (chosenPic == 4) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        main3.appendChild(shoe4);
        shoe4.style.display = "block";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
     } else if (chosenPic == 5) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        main3.appendChild(shoe5);
        shoe5.style.display = "block";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
    } else if (chosenPic == 6) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        main3.appendChild(shoe6);
        shoe6.style.display = "block";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
    } else if (chosenPic == 7) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        main3.appendChild(shoe7);
        shoe7.style.display = "block";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
    } else if (chosenPic == 8) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        main3.appendChild(shoe8);
        shoe8.style.display = "block";
        shoe9.style.display = "none";
        shoe10.style.display = "none";
    } else if (chosenPic == 9) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        main3.appendChild(shoe9);
        shoe9.style.display = "block";
        shoe10.style.display = "none";
    } else if (chosenPic == 10) {
        shoe1.style.display = "none";
        shoe2.style.display = "none";
        shoe3.style.display = "none";
        shoe4.style.display = "none";
        shoe5.style.display = "none";
        shoe6.style.display = "none";
        shoe7.style.display = "none";
        shoe8.style.display = "none";
        shoe9.style.display = "none";
        main3.appendChild(shoe9);
        shoe10.style.display = "block";
  }
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

/*
An array to store my 3 images (ids)
Generate a random number and obtain a random ID from this array.

Once this random ID has been chosen, show the image. (Try this first)

Create a flexbox, centre it and display the image, or you can try using getAttribute to get the image link, then create an image element and append the image to the flexbox.
*/