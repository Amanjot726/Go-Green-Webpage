$(document).ready(function (e) {
    $(document).bind("contextmenu",function(e) {
      return false;
  });
});
document.onkeydown = function(e){
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
                e.keyCode === 88 ||
                e.keyCode === 85 ||
                e.keyCode === 73 ||
                e.keyCode === 83 ||
                e.keyCode === 117)) {
            return false;}
       else{
         if (e.keyCode === 123)
        {
          return false;
        }
        else {
          return true;
        }
    };}

// Scroll to top button
var scrollToTopButton = document.querySelector('#js-top-btn');
const scrollFunc2 = () => {
    let y = window.scrollY;
    if (y > 700) { scrollToTopButton.className = "btn btn-dark show"; }
    else { scrollToTopButton.className = "btn btn-dark hide"; }
};
window.addEventListener("scroll", scrollFunc2);

var pre = document.documentElement.scrollTop || document.body.scrollTop;
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        if(pre<c){
            return document.querySelector('html').removeAttribute('style');
        }
        else{
            pre = c;
            window.requestAnimationFrame(scrollToTop);
            // window.scrollTo(0, c - c / 25);
            window.scrollTo(0, c - c / 60);
        }
    }
    if (c == 0) {
        document.querySelector('html').removeAttribute('style');
    }
};
scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    document.querySelector('html').style.scrollBehavior = 'initial';
    pre = document.documentElement.scrollTop || document.body.scrollTop;
    scrollToTop();
}
// END Scroll to top button

function Get_Current_Year(){var current_date = new Date();var current_year = current_date.getFullYear();document.getElementById("get_current_year").innerHTML = current_year;}
function snackbar(Notification) {var x = document.getElementById("snackbar");x.innerHTML=Notification;x.className = "show";setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);}
function open_search(){document.getElementById('search_form').style.visibility = "visible";document.getElementById('search_form').style.right="5%";document.getElementById('search-btn').style.display="none";document.getElementById('close-btn').style.display="inline";setTimeout(function(){ document.getElementById('search-input-box').focus() }, 500);document.getElementById('body').style.userSelect="text";}
function close_search(){document.getElementById('search_form').style.visibility = "hidden";document.getElementById('search_form').style.right="-350px";document.getElementById('close-btn').style.display="none";document.getElementById('search-btn').style.display="inline";document.getElementById('search-input-box').value="";document.getElementById('body').removeAttribute('style');displayBody();}
function loader(){setTimeout(displayBody,4000);}
function displayBody(){document.getElementById('body').style.display = "block";document.getElementById('pre-load').style.display = "none";}
function disable_Preloader(){}
function correct_link(){setTimeout(function(){history.pushState(null, null, '/');},1);}
function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;document.getElementById("mySidebar").style.width = "0";document.getElementById("all").style.filter = "none";}
function find_mytext(){var ip=document.getElementById('search-input-box');if (ip.value==""){snackbar("Please Write Some Words...");ip.focus();}else{if (window.find(ip.value)==false){snackbar("No Result Found")}}}
window.onscroll = function() {var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;var winScroll = document.body.scrollTop || document.documentElement.scrollTop;var scrolled = (winScroll / height) * 100;document.getElementById("myBar").style.width = scrolled + "%";};
var opened="no";
function navCheck(){if (opened=="yes"){openNav();}else{closeNav();}}
function openNav() {
    opened="yes";
    if(window.innerWidth<260){
        document.getElementById("my-Sidebar").style.width = "190px";
        document.getElementById("all").style.filter = "blur(2px)";
        document.getElementById("nav").style.filter = "blur(2px)";
      }
    else{
        if(window.innerWidth<340 && window.innerWidth>260){
            document.getElementById("my-Sidebar").style.width = "220px";
            document.getElementById("all").style.filter = "blur(2px)";
            document.getElementById("nav").style.filter = "blur(2px)";
        }
        else{
            if (window.innerWidth<400 && window.innerWidth>340){
                document.getElementById("my-Sidebar").style.width = "260px";
                document.getElementById("all").style.filter = "blur(2px)";
                document.getElementById("nav").style.filter = "blur(2px)";
            }
            else{
                if (window.innerWidth<540 && window.innerWidth>400){
                    document.getElementById("my-Sidebar").style.width = "280px";
                    document.getElementById("all").style.filter = "blur(2px)";
                    document.getElementById("nav").style.filter = "blur(2px)";
                }
                else{
                    document.getElementById("my-Sidebar").style.width = "380px";
                    document.getElementById("all").style.filter = "blur(2px)";
                    document.getElementById("nav").style.filter = "blur(2px)";
                }
            }
        }
    }
}      
  
function closeNav() {
    opened="no"
    document.body.style.overflow = 'visible';
    document.getElementById("my-Sidebar").style.width = "0";
    document.getElementById("all").style.filter = "none";
    document.getElementById("nav").style.filter = "none";
}




// function my(){
//     var html = document.documentElement.innerHTML;
//     // var s = "Geeks for Geeks"; 
//     var f = "ing"; 
//     var r = html.split(f).length - 1; 
//     // document.getElementById("rk").innerHTML = r; 
//     console.log(r)} // Searches the page for occurrences