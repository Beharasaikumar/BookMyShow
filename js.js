let logo = document.getElementById("logo");
let skip = document.getElementById("skip");
let skipp = document.getElementById("skipp");
let white = document.getElementById("white");
let white1 = document.getElementById("white1");
let right = document.getElementById("right");
let right1 = document.getElementById("right1");
let loc = document.getElementById("loc");
let goo = document.getElementById("goo");
let goback = document.getElementById("goback");
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let enter = document.getElementById("enter");
let went = document.getElementById("went");
let verify = document.getElementById("verify");
let verif = document.getElementById("verify-otp");
let otpra = document.getElementById("otpra");
let homecm = document.getElementById("homecm");
let home = document.getElementById("home");
let votp = document.getElementById("votp");
let footer = document.getElementById("footer");



white.onclick = function(){
    skip.style.display = "none";
    skipp.style.display = "block";
}
white1.onclick = function(){
    skipp.style.display = "none";
    skip.style.display = "block";
}
right.onclick = function(){
    skip.style.display = "none";
    skipp.style.display = "block";
}
right1.onclick = function(){
    skipp.style.display = "none";
    loc.style.display = "block";
}
//location - login------
  enter.onclick = function(){
    loc.style.display = "none";
    login.style.display = "block";

  }

//login forms--------

goo.onclick = function(){
    signup.style.display = "block";
    login.style.display = "none";

 }

 goback.onclick = function(){
    signup.style.display = "none";
    login.style.display = "block";

 }

//OTP--------

went.onclick = function(){
    verify.style.display = "block";
    signup.style.display = "none";
}

otpra.onclick = function(){
    verif.style.display = "block";
    verify.style.display = "none";
}

//home page-----------
homecm.onclick = function(){
    home.style.display = "block";
    login.style.display = "none";
    footer.style.display = "block";
    footer.style.display = "flex";

}
votp.onclick = function(){
    home.style.display = "block";
    verif.style.display = "none";
    footer.style.display = "block";
    footer.style.display = "flex";
}