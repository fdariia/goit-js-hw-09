refs={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.body};let t=null;refs.stopBtn.setAttribute("disabled",!0),refs.startBtn.addEventListener("click",(function e(){refs.startBtn.setAttribute("disabled",!0),refs.stopBtn.removeAttribute("disabled");refs.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t=setTimeout(e,1e3)})),refs.stopBtn.addEventListener("click",(function(){refs.startBtn.removeAttribute("disabled"),refs.stopBtn.setAttribute("disabled",!0);clearTimeout(t)}));
//# sourceMappingURL=01-color-switcher.71f87d4e.js.map