// when user click on profile icon
var profile = document.getElementsByClassName("profile-div");
profile[0].addEventListener('click',function(){
    window.open("login.html");
});
console.log(profile);


// when user click on wish-list icon
var wishList = document.getElementsByClassName('wishlist-div');
wishList[0].addEventListener('click',function(){
    window.open("wishlist.html");
});
console.log(wishList);

// when user click on bag icon
var bagIcon = document.getElementsByClassName('bag-div');
bagIcon[0].addEventListener('click',function(){
    window.open("bag.html");
});
console.log(bagIcon);

// When user click on nav-item => MEN
var navMen = document.getElementsByClassName("nav-item");
navMen[0].addEventListener('click',function(){
    window.open("men.html");
});
console.log(navMen);

// When user click on nav-item => WOMEN
var navWomen = document.getElementsByClassName("nav-item");
navWomen[1].addEventListener('click',function(){
    window.open("https://www.myntra.com/shop/women","_self");
});

// When user click on nav-item => KIDS
var navKids = document.getElementsByClassName("nav-item");
navKids[2].addEventListener('click',function(){
    window.open("https://www.myntra.com/shop/kids","_self");
});

// When user click on nav-item => HOME & LIVING
var navHomeAndLiving = document.getElementsByClassName("nav-item");
navHomeAndLiving[3].addEventListener('click',function(){
    window.open("https://www.myntra.com/shop/home-living","_self");
});

// When user click on nav-item => BEAUTY
var navBeauty = document.getElementsByClassName("nav-item");
navBeauty[4].addEventListener('click',function(){
    window.open("https://www.myntra.com/personal-care","_self");
});

// When user click on nav-item => STUDIO
var navStudio = document.getElementsByClassName("nav-item");
navStudio[5].addEventListener('click',function(){
    window.open("https://www.myntra.com/studio/home?appRoute=%7B%22url%22%3A%22%2Fstudio%2Fhome%22%7D","_self");
});