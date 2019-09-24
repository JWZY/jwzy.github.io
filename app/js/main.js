// $(document).ready(function(){$("body").hide().fadeIn(1000);});

document.addEventListener("DOMContentLoaded", main, false);

// matches polyfill
this.Element && function(ElementPrototype) {
    ElementPrototype.matches = ElementPrototype.matches ||
    ElementPrototype.matchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    ElementPrototype.msMatchesSelector ||
    function(selector) {
        var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
        while (nodes[++i] && nodes[i] != node);
        return !!nodes[i];
    }
}(Element.prototype);

// closest polyfill
this.Element && function(ElementPrototype) {
    ElementPrototype.closest = ElementPrototype.closest ||
    function(selector) {
        var el = this;
        while (el.matches && !el.matches(selector)) el = el.parentNode;
        return el.matches ? el : null;
    }
}(Element.prototype);


function main () {
    if ('addEventListener' in document) {
        FastClick.attach(document.body);
    }

    var $menu = document.querySelector('.menu .menu-mobile');
    var $menuDropdown = document.querySelector('.menu .menu-dropdown');
    var body = document.body;
    
    var currentPageName = window.location.hash.substring(1) || 'work';

    var pages = {};
    var pagesNodeList = document.querySelectorAll('main div[data-page]');
    forEach(pagesNodeList, function (page) {
        var name = page.dataset.page;

        if (name === currentPageName) {
            removeClass(page, 'hidden');
            addClass(page, 'active');
        } else {
            addClass(page, 'hidden');
            removeClass(page, 'active');
        }

        pages[name] = page;
    });

    var titles = {};
    var dtNodeList = document.querySelectorAll('.menu-desktop div[data-title]');
    forEach(dtNodeList, function (title) {
        var name = title.dataset.title;

        if (name === currentPageName) {
            addClass(title, 'selected');
        } else {
            removeClass(title, 'selected');
        }

        titles[name] = title;
    });

    $menu.addEventListener('click', function (e) {
        e.preventDefault();
        toggleClass($menuDropdown, 'hidden');
        toggleClass($menuDropdown, 'menu-dropdown-open');
        toggleClass(body, 'noscroll');
    }, false);

    window.addEventListener('hashchange', function (e) {
        e.preventDefault();
        var hash = window.location.hash.substring(1) || 'work';
        transitionPage(currentPageName, hash);
    }, false);

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.menu-mobile')) {
        addClass($menuDropdown, 'hidden');
        removeClass($menuDropdown, 'menu-dropdown-open');
        removeClass(body, 'noscroll');
        }
    }, false);

    function transitionPage(oldPage, newPage) {
        if (pages[oldPage]) {
            addClass(pages[oldPage], 'hidden');
            removeClass(pages[oldPage], 'active');
        }

        if (titles[oldPage]) {
            removeClass(titles[oldPage], 'selected');
        }

        if (pages[newPage]) {
            removeClass(pages[newPage], 'hidden');
            addClass(pages[newPage], 'active');
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 10);
        }

        if (titles[newPage]) {
            addClass(titles[newPage], 'selected');
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 10);
        }

        currentPageName = newPage;
    }
}

$(function(){     
    $.ajax({  
        type: "GET",
        url: "header.html",  
        dataType: "html",
        success: function(answer) {  
            $("body").append(answer);  
        },
        error: function(){
            alert("failed call!!!");
        } 
    }); 
    return false;  
});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


$(function(){     
    $.ajax({  
        type: "GET",
        url: "footer.html",  
        dataType: "html",
        success: function(answer) {  
            $("body").append(answer);  
        },
        error: function(){
            alert("failed call!!!");
        } 
    }); 
    return false;  
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-87678506-1', 'auto');
ga('send', 'pageview');

// // ===== Scroll to Top ==== 
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//         $('.return-to-top').fadeIn(300);    // Fade in the arrow
//     } else {
//         $('.return-to-top').fadeOut(300);   // Else fade out the arrow
//     }
// });
// $('.return-to-top').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });

function toggleClass(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
}

function addClass(element, cls) {
    if (!element.classList.contains(cls)) {
        element.classList.add(cls);
    }
}

function removeClass(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    }
}

function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, array[i]);
  }
}