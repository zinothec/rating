//by zino thec
var vCookieWrapper=document.querySelector(".wk-cookie-wrapper"),vCookieOk=document.querySelector(".wk-cookie-ok"),vCookieClose=document.querySelector(".wk-cookie-close");if("undefined"!=typeof Storage){var getCookieStatus=localStorage.getItem("cookieStatus");"allowed"===getCookieStatus||vCookieWrapper.classList.add("cookie-visible")}if(void 0!=vCookieWrapper&&void 0!=vCookieOk&&void 0!=vCookieClose){function hideWrapper(){vCookieWrapper.parentNode.removeChild(vCookieWrapper)}vCookieClose.addEventListener("click",function(){vCookieWrapper.classList.add("cookie-hidden"),setTimeout(function(){hideWrapper()},500)}),vCookieOk.addEventListener("click",function(){vCookieWrapper.classList.add("cookie-hidden"),setTimeout(function(){hideWrapper()},500),"undefined"!=typeof Storage&&localStorage.setItem("cookieStatus","allowed")})}
