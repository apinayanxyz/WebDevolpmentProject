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