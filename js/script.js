var countSubmit = 0;

  document.addEventListener("DOMContentLoaded", function ready() {
    var form = document.getElementById('form');
    console.log(form.getBoundingClientRect());
    var elem = document.querySelector("#newTarget");
    form.onsubmit = function() {
        
        if( countSubmit<1){
            window.open("newTarget.html");
        } 
        else{
            const left = form.getBoundingClientRect().left ;
            const top =  form.getBoundingClientRect().top;
            elem.style="left:" + (left+100) + "px ; top:" + (top+100) + "px";
            elem.classList.toggle("php");
            console.log(elem.getBoundingClientRect()); 
        };
      
      countSubmit++;
    };
    elem.onclick = function() {
        elem.classList.toggle("php");
    };

    
  });


 