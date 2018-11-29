var viewFieldset;
var changeBack = true;
var hoverFirstSection = true;
var hoverSecondSection = true;
var hoverThirdSection = true;
var neutral = false;
var overpronation = false;
var underpronation = false;
var enterStatement = true;


function test(){
  if(changeBack){
   document.getElementById("moreInfoSection").style.marginLeft= "-20px";
   }
   else {
     document.getElementById("moreInfoSection").style.marginLeft= "-300px";
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
  window.scrollTo(0, 400);
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
  window.scrollTo(0, 750);
  document.getElementById("archLine1").style.visibility = "visible";
  document.getElementById("archLine2").style.visibility = "visible";
  document.getElementById("archLine3").style.visibility = "visible";
  document.getElementById("archInfo1").style.visibility = "visible";
  document.getElementById("archInfo2").style.visibility = "visible";
  document.getElementById("archInfo3").style.visibility = "visible";
  document.getElementById("archInfo4").style.visibility = "visible";
  document.getElementById("archTip1").style.visibility = "visible";
  document.getElementById("archTip2").style.visibility = "visible";
  document.getElementById("archTip3").style.visibility = "visible";
  document.getElementById("archTip4").style.visibility = "visible";
  document.getElementById("alignID").style.display = "inline";
  document.getElementById("alignID").classList.add("alignQuestion");
  document.getElementById("alignIcon1").style.display = "inline";
  document.getElementById("alignIcon2").style.display = "inline";
  document.getElementById("alignIcon3").style.display = "inline";
}


//function to hover over feet arches and display their INFORMATION

function align1Display(){
  if(hoverThirdSection){
  document.getElementById("alignInfo1").style.visibility = "visible";
  }
}

function align1Hide(){
  if(hoverThirdSection){
  document.getElementById("alignInfo1").style.visibility = "hidden";
  }
}

function align2Display(){
  if(hoverThirdSection){
  document.getElementById("alignInfo2").style.visibility = "visible";
  }
}

function align2Hide(){
  if(hoverThirdSection){
  document.getElementById("alignInfo2").style.visibility = "hidden";
  }
}

function align3Display(){
  if(hoverThirdSection){
  document.getElementById("alignInfo3").style.visibility = "visible";
  }
}

function align3Hide(){
  if(hoverThirdSection){
  document.getElementById("alignInfo3").style.visibility = "hidden";
  }
}

function alignClickedNeutral(){
  window.scrollTo(0, 1100);
  hoverThirdSection = false;
  document.getElementById("alignLine1").style.visibility = "visible";
  document.getElementById("alignLine2").style.visibility = "visible";
  document.getElementById("alignInfo1").style.visibility = "visible";
  document.getElementById("alignInfo2").style.visibility = "visible";
  document.getElementById("alignInfo3").style.visibility = "visible";
  document.getElementById("submitButton1").style.visibility = "visible";
  document.getElementById("submitButton2").style.visibility = "visible";
  if(enterStatement){
    neutral = true;
    overpronation = false;
    underpronation = false;
    enterStatement = false;
  }
}

function alignClickedOver(){
  window.scrollTo(0, 1100);
  hoverThirdSection = false;
  document.getElementById("alignLine1").style.visibility = "visible";
  document.getElementById("alignLine2").style.visibility = "visible";
  document.getElementById("alignInfo1").style.visibility = "visible";
  document.getElementById("alignInfo2").style.visibility = "visible";
  document.getElementById("alignInfo3").style.visibility = "visible";
  document.getElementById("submitButton1").style.visibility = "visible";
  document.getElementById("submitButton2").style.visibility = "visible";
  if(enterStatement){
    neutral = false;
    overpronation = true;
    underpronation = false;
    enterStatement = false;
  }
}

function alignClickedUnder(){
  window.scrollTo(0, 1040);
  hoverThirdSection = false;
  document.getElementById("alignLine1").style.visibility = "visible";
  document.getElementById("alignLine2").style.visibility = "visible";
  document.getElementById("alignInfo1").style.visibility = "visible";
  document.getElementById("alignInfo2").style.visibility = "visible";
  document.getElementById("alignInfo3").style.visibility = "visible";
  document.getElementById("submitButton1").style.visibility = "visible";
  document.getElementById("submitButton2").style.visibility = "visible";
  if(enterStatement){
    neutral = false;
    overpronation = false;
    underpronation = true;
    enterStatement = false;
  }
}

//alerting final result depending on pronation severity and gender

function displayResult(){
  if(document.getElementById('radioStyle1').checked){
    if(neutral){
    //alert("looking for women shoes! + neutral");
    document.getElementById("TableNormalFeetWomen").style.display = "inline";
    }
    else if(overpronation){
    //alert("looking for women shoes! + overpronation");
    document.getElementById("TableFlatFeetWomen").style.display = "inline";
    }
    else if(underpronation){
    //alert("looking for women shoes! + supinator");
    document.getElementById("TableArchedFeetWomen").style.display = "inline";
    }
  }
  else if(document.getElementById('radioStyle2').checked){
    if(neutral){
    //alert("looking for men shoes! + neutral");
    document.getElementById("TableNormalFeetMen").style.display = "inline";
    }
    else if(overpronation){
    //alert("looking for men shoes! + overpronation");
    document.getElementById("TableFlatFeetMen").style.display = "inline";
    }
    else if(underpronation){
    //alert("looking for men shoes!  + supinator");
    document.getElementById("TableArchedFeetMen").style.display = "inline";
    }
  }

  window.scrollTo(0, 1520);
}


function reload(){
  //window.scrollTo(0, 0);
  window.location.reload(true);
}




//sneaker display at the end, code may be useless, check to delete


function displaySneaker(){
  document.getElementById("lineTester").classList.remove("initOption0");
  document.getElementById("lineTester").classList.add("downOption0");
}
