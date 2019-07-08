(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TaJt:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=function(){return function(){}}(),o=t("pMnS"),u=t("Ip0R"),r=t("mrSG"),s=function(){function l(l){this.domSanitizer=l,this.images=[],this.stopwatch=0,this.score=0,this.gridImages=[],this.gridSize=4,this.gridLength=0,this.gridLengthArr=[],this.gridMaxLength=32,this.gridCompleted=!1,this.gridClickable=!0,this.comparePictureId=null,this.compareIndex=null,this.transitionTime=1e3}return l.prototype.ngOnInit=function(){this.loadImagesUrls(),this.loadGrid()},l.prototype.startStopwatch=function(){var l=this;this.stopwatchInterval||(this.stopwatchInterval=setInterval(function(){l.stopwatch++},1e3))},l.prototype.stopStopwatch=function(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0},l.prototype.clearStopwatch=function(){this.stopwatch=0},l.prototype.clearScore=function(){this.score=0},l.prototype.loadImagesUrls=function(){for(var l=1;l<=this.gridMaxLength;l++){var n="assets/images/img"+l+".jpg";n=this.domSanitizer.bypassSecurityTrustStyle("url("+n+")"),this.images.push(n)}},l.prototype.loadGrid=function(){this.gridLength=this.gridSize*this.gridSize,this.gridLengthArr=Array(this.gridLength).fill(0).map(function(l,n){return n}),this.gridImages=[];for(var l=0;l<this.gridLength;l++){var n=Math.floor(l/2);this.gridImages.push({url:this.images[n],pictureId:n,show:!1,opened:!1})}this.shuffleArray(this.gridImages)},l.prototype.changeGridSize=function(l){var n=this;this.compareIndex=null,this.comparePictureId=null,this.gridImages.forEach(function(l){l.show=!1,l.opened=!1});var t=this.transitionTime;this.stopwatchInterval||(t=0),this.stopStopwatch(),this.clearStopwatch(),this.clearScore(),setTimeout(function(){n.gridSize=l,n.loadGrid()},t)},l.prototype.checkGridComplete=function(){var l,n,t=!0;try{for(var e=r.h(this.gridImages),i=e.next();!i.done;i=e.next())if(!i.value.opened){t=!1;break}}catch(o){l={error:o}}finally{try{i&&!i.done&&(n=e.return)&&n.call(e)}finally{if(l)throw l.error}}t&&this.gridComplete()},l.prototype.gridComplete=function(){this.gridCompleted=!0,this.stopStopwatch()},l.prototype.restartGrid=function(){this.changeGridSize(this.gridSize),this.gridCompleted=!1},l.prototype.showItem=function(l){this.gridClickable&&(this.startStopwatch(),this.compareImagesPair(l),this.checkGridComplete())},l.prototype.compareImagesPair=function(l){var n=this;if(l!==this.compareIndex&&!this.gridImages[l].opened)if(this.gridImages[l].show=!0,null===this.comparePictureId||null===this.compareIndex)this.comparePictureId=this.gridImages[l].pictureId,this.compareIndex=l;else{var t=this.transitionTime;this.gridClickable=!1,this.gridImages[l].pictureId===this.comparePictureId&&null!==this.compareIndex&&(this.gridImages[l].opened=!0,this.gridImages[this.compareIndex].opened=!0,this.increaseScore(),t=0),setTimeout(function(){n.gridImages[l].show=!1,null!==n.compareIndex&&(n.gridImages[n.compareIndex].show=!1),n.comparePictureId=null,n.compareIndex=null,n.gridClickable=!0},t)}},l.prototype.increaseScore=function(){var l=Math.floor((100-this.stopwatch)/10);l<0&&(l=0),this.score+=l+20},l.prototype.shuffleArray=function(l){for(var n,t,e=l.length;0!==e;)t=Math.floor(Math.random()*e),n=l[e-=1],l[e]=l[t],l[t]=n;return l},l}(),a=t("ZYjt"),c=e.ob({encapsulation:0,styles:[['[_nghost-%COMP%]{display:block}.caption[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{display:inline-block;width:50px}.list[_ngcontent-%COMP%]{display:flex;position:relative;flex-wrap:wrap;margin:0 -5px -10px}.list.size-6[_ngcontent-%COMP%]   .item-wrap[_ngcontent-%COMP%]{flex-basis:16.66%}.list.size-8[_ngcontent-%COMP%]   .item-wrap[_ngcontent-%COMP%]{flex-basis:12.5%}.item-wrap[_ngcontent-%COMP%]{flex-basis:25%;padding:0 5px 10px}.item[_ngcontent-%COMP%]{position:relative;cursor:pointer}.item[_ngcontent-%COMP%]::before{position:absolute;top:0;left:0;transition:all 1s;background-color:#ddd;width:100%;height:100%;content:""}.item[_ngcontent-%COMP%]:hover::before{background-color:#c4c4c4}.item.open[_ngcontent-%COMP%], .item.opened[_ngcontent-%COMP%]{cursor:default}.item.open[_ngcontent-%COMP%]::before, .item.opened[_ngcontent-%COMP%]::before{opacity:0}.img[_ngcontent-%COMP%]{background-position:center;background-size:cover;padding-bottom:100%}.popup[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;padding-top:60px;width:100%;max-width:300px;height:100%;max-height:300px;text-align:center}']],data:{}});function p(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","item-wrap"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showItem(l.context.index)&&e),e},null,null)),e.Db(512,null,u.r,u.s,[e.s,e.t,e.k,e.E]),e.pb(3,278528,null,0,u.h,[u.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Cb(4,{open:0,opened:1}),(l()(),e.qb(5,0,null,null,0,"div",[["class","img"]],[[4,"background-image",null]],null,null,null,null))],function(l,n){var t=n.component,e=l(n,4,0,t.gridImages[n.context.index].show,t.gridImages[n.context.index].opened);l(n,3,0,"item",e)},function(l,n){l(n,5,0,n.component.gridImages[n.context.index].url)})}function h(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,8,"div",[["class","popup"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[["class","popup-title"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Well done!"])),(l()(),e.qb(3,0,null,null,1,"p",[["class","popup-time"]],null,null,null,null,null)),(l()(),e.Gb(4,null,["Your time: ",""])),(l()(),e.qb(5,0,null,null,1,"p",[["class","popup-score"]],null,null,null,null,null)),(l()(),e.Gb(6,null,["Your score: ",""])),(l()(),e.qb(7,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.restartGrid()&&e),e},null,null)),(l()(),e.Gb(-1,null,["Restart"]))],null,function(l,n){var t=n.component;l(n,4,0,t.stopwatch),l(n,6,0,t.score)})}function d(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,25,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Memory Game"])),(l()(),e.qb(3,0,null,null,22,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,21,"div",[["class","col-xl-8 col-lg-10"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,15,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,6,"select",[],null,[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.changeGridSize(t.target.value)&&e),e},null,null)),(l()(),e.qb(7,0,null,null,1,"option",[["value","4"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["4x4"])),(l()(),e.qb(9,0,null,null,1,"option",[["value","6"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["6x6"])),(l()(),e.qb(11,0,null,null,1,"option",[["value","8"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["8x8"])),(l()(),e.qb(13,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Timer:"])),(l()(),e.Gb(16,null,[" ",""])),(l()(),e.qb(17,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.qb(18,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Score:"])),(l()(),e.Gb(20,null,[" ",""])),(l()(),e.qb(21,0,null,null,4,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,p)),e.pb(23,278528,null,0,u.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.fb(16777216,null,null,1,null,h)),e.pb(25,16384,null,0,u.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,23,0,t.gridLengthArr),l(n,25,0,t.gridCompleted)},function(l,n){var t=n.component;l(n,16,0,t.stopwatch),l(n,20,0,t.score),l(n,21,0,e.sb(1,"list size-",t.gridSize,""))})}function g(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-memory-game",[],null,null,null,d,c)),e.pb(1,114688,null,0,s,[a.b],null,null)],function(l,n){l(n,1,0)},null)}var m=e.mb("app-memory-game",s,g,{},{},[]),b=t("ZYCi"),f=function(){return function(){}}();t.d(n,"MemoryGameModuleNgFactory",function(){return I});var I=e.nb(i,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[o.a,m]],[3,e.j],e.x]),e.yb(4608,u.l,u.k,[e.u,[2,u.u]]),e.yb(1073742336,u.b,u.b,[]),e.yb(1073742336,b.m,b.m,[[2,b.r],[2,b.k]]),e.yb(1073742336,f,f,[]),e.yb(1073742336,i,i,[]),e.yb(1024,b.i,function(){return[[{path:"",component:s}]]},[])])})}}]);