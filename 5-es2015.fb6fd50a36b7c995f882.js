(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TaJt:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var u=t("pMnS"),o=t("SVse");class s{constructor(l){this.domSanitizer=l,this.images=[],this.stopwatch=0,this.score=0,this.gridImages=[],this.gridSize=4,this.gridLength=0,this.gridLengthArr=[],this.gridMaxLength=32,this.gridCompleted=!1,this.gridClickable=!0,this.comparePictureId=null,this.compareIndex=null,this.transitionTime=1e3}ngOnInit(){this.loadImagesUrls(),this.loadGrid()}startStopwatch(){this.stopwatchInterval||(this.stopwatchInterval=setInterval(()=>{this.stopwatch++},1e3))}stopStopwatch(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0}clearStopwatch(){this.stopwatch=0}clearScore(){this.score=0}loadImagesUrls(){for(let l=1;l<=this.gridMaxLength;l++){let n="assets/images/img"+l+".jpg";n=this.domSanitizer.bypassSecurityTrustStyle(`url(${n})`),this.images.push(n)}}loadGrid(){this.gridLength=this.gridSize*this.gridSize,this.gridLengthArr=Array(this.gridLength).fill(0).map((l,n)=>n),this.gridImages=[];for(let l=0;l<this.gridLength;l++){const n=Math.floor(l/2);this.gridImages.push({url:this.images[n],pictureId:n,show:!1,opened:!1})}this.shuffleArray(this.gridImages)}changeGridSize(l){this.compareIndex=null,this.comparePictureId=null,this.gridImages.forEach(l=>{l.show=!1,l.opened=!1});let n=this.transitionTime;this.stopwatchInterval||(n=0),this.stopStopwatch(),this.clearStopwatch(),this.clearScore(),setTimeout(()=>{this.gridSize=l,this.loadGrid()},n)}checkGridComplete(){let l=!0;for(const n of this.gridImages)if(!n.opened){l=!1;break}l&&this.gridComplete()}gridComplete(){this.gridCompleted=!0,this.stopStopwatch()}restartGrid(){this.changeGridSize(this.gridSize),this.gridCompleted=!1}showItem(l){this.gridClickable&&(this.startStopwatch(),this.compareImagesPair(l),this.checkGridComplete())}compareImagesPair(l){if(l!==this.compareIndex&&!this.gridImages[l].opened)if(this.gridImages[l].show=!0,null===this.comparePictureId||null===this.compareIndex)this.comparePictureId=this.gridImages[l].pictureId,this.compareIndex=l;else{let n=this.transitionTime;this.gridClickable=!1,this.gridImages[l].pictureId===this.comparePictureId&&null!==this.compareIndex&&(this.gridImages[l].opened=!0,this.gridImages[this.compareIndex].opened=!0,this.increaseScore(),n=0),setTimeout(()=>{this.gridImages[l].show=!1,null!==this.compareIndex&&(this.gridImages[this.compareIndex].show=!1),this.comparePictureId=null,this.compareIndex=null,this.gridClickable=!0},n)}}increaseScore(){let l=Math.floor((100-this.stopwatch)/10);l<0&&(l=0),this.score+=l+20}shuffleArray(l){let n,t,e=l.length;for(;0!==e;)t=Math.floor(Math.random()*e),n=l[e-=1],l[e]=l[t],l[t]=n;return l}}var r=t("cUpR"),a=e.mb({encapsulation:0,styles:[['[_nghost-%COMP%]{display:block}.caption[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.text[_ngcontent-%COMP%]{display:inline-block;width:50px}.list[_ngcontent-%COMP%]{display:flex;position:relative;flex-wrap:wrap;margin:0 -5px -10px}.list.size-6[_ngcontent-%COMP%]   .item-wrap[_ngcontent-%COMP%]{flex-basis:16.66%}.list.size-8[_ngcontent-%COMP%]   .item-wrap[_ngcontent-%COMP%]{flex-basis:12.5%}.item-wrap[_ngcontent-%COMP%]{flex-basis:25%;padding:0 5px 10px}.item[_ngcontent-%COMP%]{position:relative;cursor:pointer}.item[_ngcontent-%COMP%]::before{position:absolute;top:0;left:0;transition:all 1s;background-color:#ddd;width:100%;height:100%;content:""}.item[_ngcontent-%COMP%]:hover::before{background-color:#c4c4c4}.item.open[_ngcontent-%COMP%], .item.opened[_ngcontent-%COMP%]{cursor:default}.item.open[_ngcontent-%COMP%]::before, .item.opened[_ngcontent-%COMP%]::before{opacity:0}.img[_ngcontent-%COMP%]{background-position:center;background-size:cover;padding-bottom:100%}.popup[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;padding-top:60px;width:100%;max-width:300px;height:100%;max-height:300px;text-align:center}']],data:{}});function c(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,5,"div",[["class","item-wrap"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[["class","item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showItem(l.context.index)&&e),e},null,null)),e.Bb(512,null,o.r,o.s,[e.q,e.r,e.k,e.C]),e.nb(3,278528,null,0,o.h,[o.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(4,{open:0,opened:1}),(l()(),e.ob(5,0,null,null,0,"div",[["class","img"]],[[4,"background-image",null]],null,null,null,null))],function(l,n){var t=n.component,e=l(n,4,0,t.gridImages[n.context.index].show,t.gridImages[n.context.index].opened);l(n,3,0,"item",e)},function(l,n){l(n,5,0,n.component.gridImages[n.context.index].url)})}function h(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,8,"div",[["class","popup"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"h3",[["class","popup-title"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Well done!"])),(l()(),e.ob(3,0,null,null,1,"p",[["class","popup-time"]],null,null,null,null,null)),(l()(),e.Eb(4,null,["Your time: ",""])),(l()(),e.ob(5,0,null,null,1,"p",[["class","popup-score"]],null,null,null,null,null)),(l()(),e.Eb(6,null,["Your score: ",""])),(l()(),e.ob(7,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.restartGrid()&&e),e},null,null)),(l()(),e.Eb(-1,null,["Restart"]))],null,function(l,n){var t=n.component;l(n,4,0,t.stopwatch),l(n,6,0,t.score)})}function p(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,25,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Memory Game"])),(l()(),e.ob(3,0,null,null,22,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,21,"div",[["class","col-xl-8 col-lg-10"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,15,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,6,"select",[],null,[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.changeGridSize(t.target.value)&&e),e},null,null)),(l()(),e.ob(7,0,null,null,1,"option",[["value","4"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["4x4"])),(l()(),e.ob(9,0,null,null,1,"option",[["value","6"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["6x6"])),(l()(),e.ob(11,0,null,null,1,"option",[["value","8"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["8x8"])),(l()(),e.ob(13,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ob(14,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Timer:"])),(l()(),e.Eb(16,null,[" ",""])),(l()(),e.ob(17,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ob(18,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Score:"])),(l()(),e.Eb(20,null,[" ",""])),(l()(),e.ob(21,0,null,null,4,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,c)),e.nb(23,278528,null,0,o.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.db(16777216,null,null,1,null,h)),e.nb(25,16384,null,0,o.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,23,0,t.gridLengthArr),l(n,25,0,t.gridCompleted)},function(l,n){var t=n.component;l(n,16,0,t.stopwatch),l(n,20,0,t.score),l(n,21,0,e.qb(1,"list size-",t.gridSize,""))})}function d(l){return e.Fb(0,[(l()(),e.ob(0,0,null,null,1,"app-memory-game",[],null,null,null,p,a)),e.nb(1,114688,null,0,s,[r.b],null,null)],function(l,n){l(n,1,0)},null)}var g=e.kb("app-memory-game",s,d,{},{},[]),m=t("iInd");class b{}t.d(n,"MemoryGameModuleNgFactory",function(){return f});var f=e.lb(i,[],function(l){return e.vb([e.wb(512,e.j,e.Y,[[8,[u.a,g]],[3,e.j],e.v]),e.wb(4608,o.l,o.k,[e.s,[2,o.u]]),e.wb(1073742336,o.b,o.b,[]),e.wb(1073742336,m.m,m.m,[[2,m.r],[2,m.k]]),e.wb(1073742336,b,b,[]),e.wb(1073742336,i,i,[]),e.wb(1024,m.i,function(){return[[{path:"",component:s}]]},[])])})}}]);