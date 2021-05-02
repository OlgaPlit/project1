 "use strict";

 const p = document.querySelectorAll('p');
 console.log(p);
 

 function loadScript(src)
 {const script = document.createElement('script');s
 script.src = src;//"test.js"
 script.async = false;
 document.body.append(script);}

 loadScript("test.js");
 loadScript("some.js");