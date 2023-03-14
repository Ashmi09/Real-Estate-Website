
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function subbtn(){
  //gettting the values
 
  var districtname=document.getElementById("buysearch").value;
  //saving the values in local storage
 
  localStorage.setItem("txtValue",districtname);

  
}