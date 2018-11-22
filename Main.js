var viewFieldset;
var changeBack = true;
var hoverFirstSection = true;
var hoverSecondSection = true;

function test(){
  if(changeBack){
   document.getElementById("moreInfoSection").style.marginLeft= "-20px";
   }
   else {
     document.getElementById("moreInfoSection").style.marginLeft= "-250px";
   }
   changeBack = !changeBack;
}

function test1(){
  document.getElementById('radioStyle1').checked = true;
  document.getElementById("sneakerIcon").style.display = "inline";
  document.getElementById("winterIcon").style.display = "inline";
  document.getElementById("summerIcon").style.display = "inline";
  document.getElementById("typeID").style.display = "inline";
  document.getElementById("typeID").classList.add("typeQuestion");
  document.getElementById("radioOption0").classList.remove("initOption0");
  document.getElementById("radioOption0").classList.add("downOption0");
  document.getElementById("radioOption1").classList.add("initOption1");
  document.getElementById("radioOption1").classList.remove("downOption1");
}

function test2(){
  document.getElementById('radioStyle2').checked = true;
  document.getElementById("sneakerIcon").style.display = "inline";
  document.getElementById("winterIcon").style.display = "inline";
  document.getElementById("summerIcon").style.display = "inline";
  document.getElementById("typeID").style.display = "inline";
  document.getElementById("typeID").classList.add("typeQuestion");
  document.getElementById("radioOption1").classList.remove("initOption1");
  document.getElementById("radioOption1").classList.add("downOption1");
  document.getElementById("radioOption0").classList.add("initOption0");
  document.getElementById("radioOption0").classList.remove("downOption0");
}

function mouseOver1(){
  if(hoverFirstSection){
  document.getElementById("hoverImages1").style.display = "inline";
  }
}

function mouseOver2(){
  if(hoverFirstSection){
  document.getElementById("hoverImages1").style.display = "none";
  }
}

function mouseOver3(){
  if(hoverFirstSection){
  document.getElementById("hoverImages2").style.display = "inline";
  }
}

function mouseOver4(){
  if(hoverFirstSection){
  document.getElementById("hoverImages2").style.display = "none";
  }
}

function mouseOver5(){
  if(hoverFirstSection){
  document.getElementById("hoverImages3").style.display = "inline";
  }
}

function mouseOver6(){
  if(hoverFirstSection){
  document.getElementById("hoverImages3").style.display = "none";
  }
}

function firstSectionDisplay(){
  hoverFirstSection = false;
  document.getElementById("hoverImages1").style.display = "inline";
  document.getElementById("hoverImages2").style.display = "inline";
  document.getElementById("hoverImages3").style.display = "inline";
  document.getElementById("archID").style.display = "inline";
  document.getElementById("archID").classList.add("archQuestion");
  document.getElementById("arch1").style.display = "inline";
  document.getElementById("arch2").style.display = "inline";
  document.getElementById("arch3").style.display = "inline";
  document.getElementById("arch4").style.display = "inline";
}

//function to hover over feet arches and display their INFORMATION

function arch1Display(){
  if(hoverSecondSection){
  document.getElementById("archInfo1").style.visibility = "visible";
  }
}

function arch1Hide(){
  if(hoverSecondSection){
  document.getElementById("archInfo1").style.visibility = "hidden";
  }
}

function arch2Display(){
  if(hoverSecondSection){
  document.getElementById("archInfo2").style.visibility = "visible";
  }
}

function arch2Hide(){
  if(hoverSecondSection){
  document.getElementById("archInfo2").style.visibility = "hidden";
  }
}

function arch3Display(){
  if(hoverSecondSection){
  document.getElementById("archInfo3").style.visibility = "visible";
  }
}

function arch3Hide(){
  if(hoverSecondSection){
  document.getElementById("archInfo3").style.visibility = "hidden";
  }
}

function arch4Display(){
  if(hoverSecondSection){
  document.getElementById("archInfo4").style.visibility = "visible";
  }
}

function arch4Hide(){
  if(hoverSecondSection){
  document.getElementById("archInfo4").style.visibility = "hidden";
  }
}

function archClicked(){
  hoverSecondSection = false;
  document.getElementById("archLine1").style.visibility = "visible";
  document.getElementById("archLine2").style.visibility = "visible";
  document.getElementById("archLine3").style.visibility = "visible";
  document.getElementById("archInfo1").style.visibility = "visible";
  document.getElementById("archInfo2").style.visibility = "visible";
  document.getElementById("archInfo3").style.visibility = "visible";
  document.getElementById("archInfo4").style.visibility = "visible";
}


//sneaker display at the end, code may be useless, check to delete


function displaySneaker(){
  document.getElementById("lineTester").classList.remove("initOption0");
  document.getElementById("lineTester").classList.add("downOption0");
}
