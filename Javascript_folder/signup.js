// When user click on login buttin
var loginBtn = document.getElementsByClassName("login-btn")[0];
loginBtn.addEventListener('click',function(){
    window.open("login.html","_self");
});

console.log(loginBtn.innerHTML);

// When user click on nav-brand image
var navBrandImage = document.getElementsByClassName("brand-image");
navBrandImage[0].addEventListener('click', function(){
    window.open("index.html","_self");
});
console.log(navBrandImage);