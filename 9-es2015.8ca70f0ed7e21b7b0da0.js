(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{YkNJ:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("s7LF"),d=t("SVse"),s=t("bOtU");class a{constructor(l){this.eRef=l,this.todoForm=null,this.addNewItem=new e.EventEmitter,this.closeModal=new e.EventEmitter,this.inputItem=null,this.inputItemIndex=null,this.initialLoad=!0,this.item=null,this.name="",this.type="",this.dateTodo="",this.curentIndex=null,this.todayDate=""}clickout(l){this.eRef.nativeElement.contains(l.target)||this.initialLoad?this.initialLoad=!1:this.closeModal.emit()}ngOnInit(){this.setTodayDate(),this.inputItem&&null!==this.inputItemIndex&&(this.curentIndex=this.inputItemIndex,this.setFormValues())}formatDate(l){return l?l.substr(0,2)+"/"+l.substr(2,2)+"/"+l.substr(4,4):""}unformatDate(l){return l.replace("/","")}setFormValues(){this.inputItem&&(this.name=this.inputItem.name,this.type=this.inputItem.type,this.dateTodo=this.unformatDate(this.inputItem.dateTodo))}setTodayDate(){const l=new Date,n=("0"+l.getDate()).slice(-2),t=("0"+(l.getMonth()+1)).slice(-2),e=l.getFullYear();this.todayDate+=n+t+e}onSubmit(){if(this.todoForm&&this.todoForm.valid){const l={name:this.todoForm.value.name,type:this.todoForm.value.type,dateCreated:this.formatDate(this.todoForm.value.dateCreated),dateTodo:this.formatDate(this.todoForm.value.dateTodo)};let n;this.item=l,this.addNewItem.emit({item:this.item,index:n=this.curentIndex||0===this.curentIndex?this.curentIndex:null}),this.reset()}}reset(){this.todoForm&&this.todoForm.reset(),this.item=null,this.setTodayDate()}}var r=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:30px}.text[_ngcontent-%COMP%]{display:inline-block;margin-bottom:5px}.note[_ngcontent-%COMP%]{margin-top:3px;font-size:14px}label[_ngcontent-%COMP%]{display:block;margin-bottom:10px}input[_ngcontent-%COMP%]{width:100%}input.ng-touched.ng-invalid[_ngcontent-%COMP%]{border-color:red}.submit[_ngcontent-%COMP%]{margin-top:10px}"]],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","note"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Please write a name"]))],null,null)}function p(l){return e["\u0275vid"](0,[e["\u0275qud"](671088640,1,{todoForm:0}),(l()(),e["\u0275eld"](1,0,null,null,52,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,t){var u=!0,o=l.component;return"submit"===n&&(u=!1!==e["\u0275nov"](l,3).onSubmit(t)&&u),"reset"===n&&(u=!1!==e["\u0275nov"](l,3).onReset()&&u),"ngSubmit"===n&&(u=!1!==o.onSubmit()&&u),u},null,null)),e["\u0275did"](2,16384,null,0,i.B,[],null,null),e["\u0275did"](3,4210688,[[1,4],["todoForm",4]],0,i.s,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,i.b,null,[i.s]),e["\u0275did"](5,16384,null,0,i.r,[[4,i.b]],null,null),(l()(),e["\u0275eld"](6,0,null,null,12,"label",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name: *"])),(l()(),e["\u0275eld"](9,0,null,null,7,"input",[["name","name"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==e["\u0275nov"](l,10)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,10).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,10)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,10)._compositionEnd(t.target.value)&&u),u},null,null)),e["\u0275did"](10,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275did"](11,16384,null,0,i.w,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,i.n,function(l){return[l]},[i.w]),e["\u0275prd"](1024,null,i.o,function(l){return[l]},[i.c]),e["\u0275did"](14,671744,[["nameEl",4]],0,i.t,[[2,i.b],[6,i.n],[8,null],[6,i.o]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,i.p,null,[i.t]),e["\u0275did"](16,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](18,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,8,"label",[],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Type:"])),(l()(),e["\u0275eld"](22,0,null,null,5,"input",[["name","type"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==e["\u0275nov"](l,23)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,23).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,23)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,23)._compositionEnd(t.target.value)&&u),u},null,null)),e["\u0275did"](23,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275prd"](1024,null,i.o,function(l){return[l]},[i.c]),e["\u0275did"](25,671744,null,0,i.t,[[2,i.b],[8,null],[8,null],[6,i.o]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,i.p,null,[i.t]),e["\u0275did"](27,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),e["\u0275eld"](28,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date created/edited:"])),(l()(),e["\u0275eld"](31,0,null,null,8,"input",[["mask","00/00/0000"],["name","dateCreated"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"click"],[null,"keydown"],[null,"paste"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==e["\u0275nov"](l,32)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,32).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,32)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,32)._compositionEnd(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,34).onInput(t)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,34).onBlur()&&u),"click"===n&&(u=!1!==e["\u0275nov"](l,34).onFocus(t)&&u),"keydown"===n&&(u=!1!==e["\u0275nov"](l,34).a(t)&&u),"paste"===n&&(u=!1!==e["\u0275nov"](l,34).onPaste()&&u),u},null,null)),e["\u0275did"](32,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275prd"](512,null,s.c,s.c,[d.DOCUMENT,s.g,e.ElementRef,e.Renderer2]),e["\u0275did"](34,540672,null,0,s.b,[d.DOCUMENT,s.c],{maskExpression:[0,"maskExpression"]},null),e["\u0275prd"](1024,null,i.n,function(l){return[l]},[s.b]),e["\u0275prd"](1024,null,i.o,function(l,n){return[l,n]},[i.c,s.b]),e["\u0275did"](37,671744,null,0,i.t,[[2,i.b],[6,i.n],[8,null],[6,i.o]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,i.p,null,[i.t]),e["\u0275did"](39,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),e["\u0275eld"](40,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date Todo:"])),(l()(),e["\u0275eld"](43,0,null,null,8,"input",[["mask","d0/M0/0000"],["name","dateTodo"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"click"],[null,"keydown"],[null,"paste"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==e["\u0275nov"](l,44)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,44).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,44)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,44)._compositionEnd(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,46).onInput(t)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,46).onBlur()&&u),"click"===n&&(u=!1!==e["\u0275nov"](l,46).onFocus(t)&&u),"keydown"===n&&(u=!1!==e["\u0275nov"](l,46).a(t)&&u),"paste"===n&&(u=!1!==e["\u0275nov"](l,46).onPaste()&&u),u},null,null)),e["\u0275did"](44,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275prd"](512,null,s.c,s.c,[d.DOCUMENT,s.g,e.ElementRef,e.Renderer2]),e["\u0275did"](46,540672,null,0,s.b,[d.DOCUMENT,s.c],{maskExpression:[0,"maskExpression"],showMaskTyped:[1,"showMaskTyped"]},null),e["\u0275prd"](1024,null,i.n,function(l){return[l]},[s.b]),e["\u0275prd"](1024,null,i.o,function(l,n){return[l,n]},[i.c,s.b]),e["\u0275did"](49,671744,null,0,i.t,[[2,i.b],[6,i.n],[8,null],[6,i.o]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,i.p,null,[i.t]),e["\u0275did"](51,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),e["\u0275eld"](52,0,null,null,1,"button",[["class","submit"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Submit"]))],function(l,n){var t=n.component;l(n,11,0,""),l(n,14,0,"name",t.name),l(n,18,0,!e["\u0275nov"](n,14).valid&&e["\u0275nov"](n,14).touched),l(n,25,0,"type",t.type),l(n,34,0,"00/00/0000"),l(n,37,0,"dateCreated",t.todayDate),l(n,46,0,"d0/M0/0000",!0),l(n,49,0,"dateTodo",t.dateTodo)},function(l,n){l(n,1,0,e["\u0275nov"](n,5).ngClassUntouched,e["\u0275nov"](n,5).ngClassTouched,e["\u0275nov"](n,5).ngClassPristine,e["\u0275nov"](n,5).ngClassDirty,e["\u0275nov"](n,5).ngClassValid,e["\u0275nov"](n,5).ngClassInvalid,e["\u0275nov"](n,5).ngClassPending),l(n,9,0,e["\u0275nov"](n,11).required?"":null,e["\u0275nov"](n,16).ngClassUntouched,e["\u0275nov"](n,16).ngClassTouched,e["\u0275nov"](n,16).ngClassPristine,e["\u0275nov"](n,16).ngClassDirty,e["\u0275nov"](n,16).ngClassValid,e["\u0275nov"](n,16).ngClassInvalid,e["\u0275nov"](n,16).ngClassPending),l(n,22,0,e["\u0275nov"](n,27).ngClassUntouched,e["\u0275nov"](n,27).ngClassTouched,e["\u0275nov"](n,27).ngClassPristine,e["\u0275nov"](n,27).ngClassDirty,e["\u0275nov"](n,27).ngClassValid,e["\u0275nov"](n,27).ngClassInvalid,e["\u0275nov"](n,27).ngClassPending),l(n,31,0,e["\u0275nov"](n,39).ngClassUntouched,e["\u0275nov"](n,39).ngClassTouched,e["\u0275nov"](n,39).ngClassPristine,e["\u0275nov"](n,39).ngClassDirty,e["\u0275nov"](n,39).ngClassValid,e["\u0275nov"](n,39).ngClassInvalid,e["\u0275nov"](n,39).ngClassPending),l(n,43,0,e["\u0275nov"](n,51).ngClassUntouched,e["\u0275nov"](n,51).ngClassTouched,e["\u0275nov"](n,51).ngClassPristine,e["\u0275nov"](n,51).ngClassDirty,e["\u0275nov"](n,51).ngClassValid,e["\u0275nov"](n,51).ngClassInvalid,e["\u0275nov"](n,51).ngClassPending),l(n,52,0,!e["\u0275nov"](n,3).valid)})}class m{constructor(l){this.todoService=l,this.title="TODO List",this.list=[],this.modalOpened=!1,this.status$=null,this.editableItem=null,this.editableItemIndex=null}ngOnInit(){this.list=this.todoService.getList(),this.status$=this.todoService.status}syncList(){this.todoService.setList(this.list)}addItem(l){let n=null;const t=l.item;(l.index||0===l.index)&&(n=l.index),n||0===n?this.list[n]=t:this.list.push(t),this.syncList(),this.closeModal()}removeItem(l){this.list.splice(l,1),this.syncList()}editItem(l){this.editableItem=this.list[l],this.editableItemIndex=l,this.openModal()}openModal(){this.modalOpened=!0}closeModal(){this.modalOpened=!1,this.editableItem=null}}var g=t("qCKp");class h{constructor(){this.localStorageName="todoList",this.statusSubject=new g.a("test"),this.status=this.statusSubject.asObservable()}getBrowserSupport(){return"undefined"!=typeof Storage||(this.updateMessage("Sorry, your browser does not support storage."),!1)}updateMessage(l){this.statusSubject.next(l),setTimeout(()=>{this.statusSubject.next("Idle")},3e3)}getList(){if(!this.getBrowserSupport())return;const l=localStorage.getItem(this.localStorageName);return l?(this.updateMessage("Successfully loaded"),JSON.parse(l)):(this.updateMessage("No items in local storage"),[])}setList(l){this.getBrowserSupport()&&(localStorage.setItem("todoList",JSON.stringify(l)),this.updateMessage("List was updated"))}}var v=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding-top:15px;padding-bottom:60px}.modal[_ngcontent-%COMP%]{position:fixed;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:0 0 10px 3px rgba(0,0,0,.2);background-color:#fff;width:100%;max-width:400px;height:auto;min-height:200px;max-height:100%;overflow:auto}.status[_ngcontent-%COMP%]{margin:0 0 15px;text-align:right;font-size:14px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:2px;padding:3px 7px}td[_ngcontent-%COMP%]{width:19%}td[_ngcontent-%COMP%]:first-child{width:5%;text-align:center}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:left}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#fcfcfc}.add-new-item[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.removeItem(l.context.index)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Remove"])),(l()(),e["\u0275eld"](14,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.editItem(l.context.index)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Edit"]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.type),l(n,8,0,n.context.$implicit.dateCreated),l(n,10,0,n.context.$implicit.dateTodo)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","modal"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-modal",[],null,[[null,"addNewItem"],[null,"closeModal"],["document","click"]],function(l,n,t){var u=!0,o=l.component;return"document:click"===n&&(u=!1!==e["\u0275nov"](l,2).clickout(t)&&u),"addNewItem"===n&&(u=!1!==o.addItem(t)&&u),"closeModal"===n&&(u=!1!==o.closeModal()&&u),u},p,r)),e["\u0275did"](2,114688,null,0,a,[e.ElementRef],{inputItem:[0,"inputItem"],inputItemIndex:[1,"inputItemIndex"]},{addNewItem:"addNewItem",closeModal:"closeModal"})],function(l,n){var t=n.component;l(n,2,0,t.editableItem,t.editableItemIndex)},null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,23,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,2,"p",[["class","status"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),e["\u0275pid"](131072,d.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](6,0,null,null,15,"table",[["class","list"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Index"])),(l()(),e["\u0275eld"](10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Type"])),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date created/edited"])),(l()(),e["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date Todo"])),(l()(),e["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Actions"])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](21,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","add-new-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openModal()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Add new"])),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](25,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,21,0,t.list),l(n,25,0,t.modalOpened)},function(l,n){var t=n.component;l(n,2,0,t.title),l(n,4,0,e["\u0275unv"](n,4,0,e["\u0275nov"](n,5).transform(t.status$)))})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-list",[],null,null,null,C,v)),e["\u0275did"](1,114688,null,0,m,[h],null,null)],function(l,n){l(n,1,0)},null)}var x=e["\u0275ccf"]("app-list",m,I,{},{},[]),y=t("iInd");class M{}t.d(n,"TodoModuleNgFactory",function(){return w});var w=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[e.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,i.z,i.z,[]),e["\u0275mpd"](5120,s.g,s.f,[s.a,s.d]),e["\u0275mpd"](4608,s.i,s.i,[s.g]),e["\u0275mpd"](4608,h,h,[]),e["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),e["\u0275mpd"](1073742336,y.o,y.o,[[2,y.t],[2,y.k]]),e["\u0275mpd"](1073742336,M,M,[]),e["\u0275mpd"](1073742336,i.y,i.y,[]),e["\u0275mpd"](1073742336,i.m,i.m,[]),e["\u0275mpd"](1073742336,s.e,s.e,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,y.i,function(){return[[{path:"",component:m}]]},[]),e["\u0275mpd"](256,s.d,void 0,[]),e["\u0275mpd"](256,s.a,s.h,[])])})}}]);