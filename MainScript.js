let opened=false;

function changeNav() {
    if(opened==false){
        openNav();
        opened=true;
    }
    else{
        closeNav()
        opened=false;
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }
  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["feedback"].value;
    if (x == "" && y=="" && z=="") {
      alert("Areas must be filled out");
      return false;
    }
    else{
        alert("Your feedback is appreciated")
        return true;
    }
  }