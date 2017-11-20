document.onkeypress = function (event) {
    if (event.which == 13 || event.keyCode == 13) {
            console.log("going to pres"); 
            window.location.href = "/p2";
            return false;
        }
    return true;
};

