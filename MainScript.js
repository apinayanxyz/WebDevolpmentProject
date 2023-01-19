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
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }