!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Position=e()}(this,function(){"use strict";return{getNestedOffset:function(t){for(var e=t.offsetLeft,f=t.offsetTop,o=t.offsetLeft+t.offsetWidth,s=t.offsetTop+t.offsetHeight;t=t.offsetParent;)e+=t.offsetLeft,f+=t.offsetTop,o+=t.offsetLeft,s+=t.offsetTop;return{left:e,top:f,right:o,bottom:s}},getNestedScroll:function(t){for(var e=0,f=0;t=t.parentElement;)e+=t.scrollLeft,f+=t.scrollTop;return{x:e,y:f}},getAbsolute:function(t){var e=this.getNestedOffset(t),f=this.getNestedScroll(t);return{left:e.left-f.x,top:e.top-f.y,right:e.right-f.x,bottom:e.bottom-f.y}}}});
