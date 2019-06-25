---
layout: null
---
const script = document.createElement('script');
const firstScript = document.getElementsByTagName('script')[0];
function pwaLoad () {
    script.async = true;
    script.src = '{{"sw-register.js"|relative_url}}?v=' + Date.now();
    firstScript.parentNode.insertBefore(script, firstScript);
}
pwaLoad();