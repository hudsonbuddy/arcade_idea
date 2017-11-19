console.log(5 + 6);

document.onkeypress = function (event) {
    if (event.which == 13 || event.keyCode == 13) {
            console.log("link to sj1 here"); 
            window.location.href = "/p2";
            return false;
        }
    return true;
};

