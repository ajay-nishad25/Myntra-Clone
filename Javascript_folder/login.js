// When user click on resister btn
var registerBtn = document.getElementsByClassName("register-btn");
registerBtn[0].addEventListener('click', function(){
    window.open("signup.html","_self");
});
console.log("this button is clicked : "+registerBtn[0].innerHTML);

// When user click on nav-brand image
var navBrandImage = document.getElementsByClassName("brand-image");
navBrandImage[0].addEventListener('click', function(){
    window.open("index.html","_self");
});
console.log(navBrandImage);


