!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.body},e=null;t.stopBtn.setAttribute("disabled",!0),t.startBtn.addEventListener("click",(function o(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled");t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e=setTimeout(o,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0);clearTimeout(e)}))}();
//# sourceMappingURL=01-color-switcher.eb71cf6c.js.map
