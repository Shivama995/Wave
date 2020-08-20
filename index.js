var i = 0;


function totop() {
    window.scrollTo(0, 0);
}

function totopscroll() {

    var a = window.pageYOffset;

    if (a >= 410) {
        document.getElementById('totop').style.visibility = "visible";
    }
    else {
        document.getElementById('totop').style.visibility = "hidden";
    }

    if (a > 0) {
        document.getElementById('navb').style.height = 60 + "px";
        document.getElementById('navb').style.transitionDuration = 0.5 + "s";
        document.getElementById('navlink').style.fontSize = 1.3 + "vw";
        document.getElementById('logo1').style.width = 7 + "%";
    }
    else {
        document.getElementById('navb').style.height = 100 + "px";
        document.getElementById('navlink').style.fontSize = 1.8 + "vw";
        document.getElementById('logo1').style.width = 12 + "%";
        document.getElementById('navb').style.transitionDuration = 0.1 + "s";
    }




    /***************************************************************************************** */



    if (window.innerWidth > 1000) {
        if (a <= 5750 || a >= 6860) {
            document.getElementById('eventsec1pic').style.visibility = "hidden";
            document.getElementById('eventsec2pic').style.visibility = "hidden";
            document.getElementById('eventsec3pic').style.visibility = "hidden";
            document.getElementById('eventsec4pic').style.visibility = "hidden";
        }

        else {
            document.getElementById('eventsec1pic').style.visibility = "visible";
            document.getElementById('eventsec2pic').style.visibility = "visible";
            document.getElementById('eventsec3pic').style.visibility = "visible";
            document.getElementById('eventsec4pic').style.visibility = "visible";
        }


    }

    if (window.innerWidth > 600 && window.innerWidth < 1000) {
        if (a <= 3290 || a >= 4100) {
            document.getElementById('eventsec1pic').style.visibility = "hidden";
            document.getElementById('eventsec2pic').style.visibility = "hidden";
            document.getElementById('eventsec3pic').style.visibility = "hidden";
            document.getElementById('eventsec4pic').style.visibility = "hidden";
        }

        else {
            document.getElementById('eventsec1pic').style.visibility = "visible";
            document.getElementById('eventsec2pic').style.visibility = "visible";
            document.getElementById('eventsec3pic').style.visibility = "visible";
            document.getElementById('eventsec4pic').style.visibility = "visible";
        }

    }



/************************************************************************************************* */
if (window.innerWidth > 1000) {


    if (a >= 2050 && a <= 4500) {
        document.getElementById('bigbody1').style.backgroundColor = "black";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }

    else if (a >= 5750 && a <= 6860) {
        document.getElementById('bigbody1').style.backgroundColor = "teal";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }
    else {
        document.getElementById('bigbody1').style.backgroundColor = "white";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "black";
    }


}

else if (window.innerWidth > 600 && window.innerWidth < 1000) {

    if (a >= 1320 && a <= 2750) {
        document.getElementById('bigbody1').style.backgroundColor = "black";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }


    else if (a >= 3290 && a <= 4100) {
        document.getElementById('bigbody1').style.backgroundColor = "teal";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }
    else {
        document.getElementById('bigbody1').style.backgroundColor = "white";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "black";
    }


}

else {

    if (a >= 1020 && a <= 1900) {
        document.getElementById('bigbody1').style.backgroundColor = "black";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }

    else if (a >= 2390 && a <= 3300) {
        document.getElementById('bigbody1').style.backgroundColor = "teal";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "white";
    }
    else {
        document.getElementById('bigbody1').style.backgroundColor = "white";
        document.getElementById('bigbody1').style.transitionDuration = 0.5 + "s";
        document.getElementById('totop').style.color = "black";
    }
}

}

function openopt() {
    if (i == 0) {
        document.getElementById('artificialbody').visibility = "hidden";
        document.getElementById('options').style.width = 100 + "%";
        document.getElementById('options').style.transitionDuration = 0.5 + "s";
        document.getElementById('minicontent').style.borderColor = "white";
        document.getElementById('optline1').style.backgroundColor = "white";
        document.getElementById('optline2').style.backgroundColor = "white";
        document.getElementById('options').style.fontSize = 8 + "vw";
        document.body.style.overflow = "hidden";
        i++;
    }

    else {
        document.getElementById('artificialbody').visibility = "visible";
        document.getElementById('options').style.width = 0 + "%";
        document.getElementById('options').style.transitionDuration = 0.5 + "s";
        document.getElementById('minicontent').style.borderColor = "black";
        document.getElementById('optline1').style.backgroundColor = "black";
        document.getElementById('optline2').style.backgroundColor = "black";
        document.getElementById('options').style.fontSize = 0 + "vw";
        document.body.style.overflow = "scroll";
        i = 0;
    }
}


function pauseshow1() {

    document.getElementById('photoshowa1').style.animationPlayState = "paused";
    document.getElementById('photoshowa2').style.animationPlayState = "paused";
}
function playshow1() {
    document.getElementById('photoshowa1').style.animationPlayState = "running";
    document.getElementById('photoshowa2').style.animationPlayState = "running";
}


function pauseshow2() {
    document.getElementById('photoshowb1').style.animationPlayState = "paused";
    document.getElementById('photoshowb2').style.animationPlayState = "paused";
}
function playshow2() {
    document.getElementById('photoshowb1').style.animationPlayState = "running";
    document.getElementById('photoshowb2').style.animationPlayState = "running";
}


function pauseshow3() {
    document.getElementById('photoshowc1').style.animationPlayState = "paused";
    document.getElementById('photoshowc2').style.animationPlayState = "paused";
}
function playshow3() {
    document.getElementById('photoshowc1').style.animationPlayState = "running";
    document.getElementById('photoshowc2').style.animationPlayState = "running";
}





