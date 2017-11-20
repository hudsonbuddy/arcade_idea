document.onkeydown= function (event) {

    if (event.which == 37 || event.keyCode == 37) {
            console.log("left"); 
            window.location.href = "/p5";
            return false;
        }
    if (event.which == 39 || event.keyCode == 39) {
            console.log("right"); 
            window.location.href = "/p7";
            return false;
        }
        else
            console.log(event.which);
       
    return true;

};


