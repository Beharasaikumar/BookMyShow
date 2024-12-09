let logo = document.getElementById("logo");//starting logo----
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
let movies = document.getElementById("movies");
let movie = document.getElementById("movie");
let payment = document.getElementById("payment");
let pay = document.getElementById("pay");
let hhom = document.getElementById("hhom");
let chudu = document.getElementById("chudu");//see all at home page-----
let experience = document.getElementById("experience");
let imgab = document.getElementById("imgab");
let aboutmovie = document.getElementById("about-movie");//about movie----
let book = document.getElementById("book");//booking tickets---
let daytime = document.getElementById("day-time");// booking page-----
let am = document.getElementById("11am");//time for booking tickets---
let seats = document.getElementById("how-many-seats");//seats for booking--
let left = document.getElementById("left");//go back from seats booking---
let righ = document.getElementById("righ");//go back from  booking page---
let left1 = document.getElementById("left1");//go back from about movie---
let selectS = document.getElementById("selectS");//selecting seats----
let sittingseats = document.getElementById("sitting-seats");//selecting seats----
let cash = document.getElementById("cash");//payment for tickets----
let Sitting = document.querySelectorAll(".sitting");//select seats---
let contact = document.getElementById("contact-details");//contact-details for paying--
let gobackk = document.getElementById("faleft");//back from contact-details for paying--
let snacks = document.getElementById("snacks");//snacks for eating---
let upde = document.getElementById("upde");//update for snacks----
let gobackkk = document.getElementById("falef");//back from snacks--
let booking = document.getElementById("booking");//booking tickets----
let confirm = document.getElementById("confirm");//confirm tickets----
let debitcard = document.getElementById("debitcard");//debit card --------
let carddetails = document.getElementById("card-details");//card details---- 


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
//see all at home page-----

chudu.onclick = function(){
    experience.style.display = "block";
    home.style.display = "none";
}
//movies start-------
movie.onclick = function(){
    movies.style.display = "block";
    home.style.display = "none";
    payment.style.display = "none";

}
//payment start----
pay.onclick = function(){
    payment.style.display = "block";
    home.style.display = "none";
    movies.style.display = "none";

}

//home back-----
hhom.onclick = function(){
    payment.style.display = "none";
    home.style.display = "block";
    movies.style.display = "none";

}
//about movies------
imgab.onclick = function(){
aboutmovie.style.display = "block";
movies.style.display = "none";
footer.style.display = "none";

}

//book tickets-----
book.onclick = function() {
    daytime.style.display = "block";
    aboutmovie.style.display = "none";
    
}
//booking seats---
am.onclick = function(){
    seats.style.display = "block";
    daytime.style.display = "none";

}
//go back from seats booking---
left.onclick = function (){
    seats.style.display = "none";
    daytime.style.display = "block";
}
//go back from  booking page---
righ.onclick = function (){
    seats.style.display = "none";
    daytime.style.display = "none";
    aboutmovie.style.display = "block";

}
//go back from about movie---
left1.onclick = function (){
    movies.style.display = "block";
    daytime.style.display = "none";
    aboutmovie.style.display = "none";
    footer.style.display = "block";
    footer.style.display = "flex";

}

//selecting seats----
selectS.onclick = function(){
    seats.style.display = "none";
    sittingseats.style.display = "block";
}

//payment for tickets----
Sitting.onclick = function(){
    cash.style.display = "block";
    
}

//contact-details for paying--

cash.onclick = function(){
    contact.style.display = "block";
    sittingseats.style.display = "none";
}

//back from contact-details for paying--
gobackk.onclick = function(){
    contact.style.display = "none";
    sittingseats.style.display = "block";
}
//snacks for eating---

upde.onclick = function(){
    snacks.style.display = "block";
    contact.style.display = "none";
}
//back from contact-details for paying--
gobackkk.onclick = function(){
    contact.style.display = "block";
    snacks.style.display = "none";
}

//booking tickets----
booking.onclick = function(){
    confirm.style.display = "block";
    snacks.style.display = "none";
}
//debit card --------
debitcard.onclick = function(){
    carddetails.style.display = "block";
    confirm.style.display = "none";
}