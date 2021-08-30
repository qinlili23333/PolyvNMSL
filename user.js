// ==UserScript==
// @name         Polyv你妈死了
// @namespace    https://qinlili.bid
// @version      0.1
// @description  敢限制idm你回家除冰吧
// @author       琴梨梨
// @match        https://live.polyv.cn/watch/*
// @icon         https://live.polyv.cn/favicon.ico
// @grant        none
// @run-at        document-start
// ==/UserScript==

(function() {
    'use strict';

      (function(getAttribute) {
Element.prototype.getAttribute=function(name){
if(name.indexOf("idm_id")>0){
    url= "fuckyounmsl";
               }
        getAttribute.call(this,  name);
    };

})(Element.prototype.getAttribute);
})();
