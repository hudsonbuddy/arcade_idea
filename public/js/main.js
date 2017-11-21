document.onkeypress = function (event) {
    if (event.which == 13 || event.keyCode == 13) {
            console.log("going to pres"); 
            window.location.href = "/p2";
            return false;
        }
    return true;
};

document.onkeydown= function (event) {

    if (event.which == 39 || event.keyCode == 39) {
            console.log("right"); 
            window.location.href = "/p2";
            return false;
        }
        else
            console.log(event.which);
       
    return true;

};


