(function() {
 
    var parent = document.querySelector(".price-slider");
    if(!parent) return;
   
    var
      rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
   
    rangeS.forEach(function(el) {
      el.oninput = function() {
        var slide1 = parseFloat(rangeS[0].value),
            slide2 = parseFloat(rangeS[1].value);
   
        if (slide1 > slide2) {
          [slide1, slide2] = [slide2, slide1];
        }
   
        numberS[0].value = slide1 ;
        numberS[1].value = slide2;
      }
    });
   
    numberS.forEach(function(el) {
      el.oninput = function() {
        var number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);
        
        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
   
        rangeS[0].value = number1 ;
        rangeS[1].value = number2;
   
      }
    });
   
   })();
   
   
   /* When the user clicks on the button, 
   toggle between hiding and showing the dropdown content */
   function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
   }
   
   // Close the dropdown if the user clicks outside of it
   window.onclick = function(event) {
     if (!event.target.matches('.icon')) {
       var dropdowns = document.getElementsByClassName("slider");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
           openDropdown.classList.remove('show');
         }
       }
     }
   }
    
   // to input location
   function submitbtn(){
    //gettting the values
   
    var b = document.getElementById("search-bar").value;
    //saving the values in local storage
   
    localStorage.setItem("txtValue2",b);
  
    
  }
   
   