webpackJsonp([3],{"H/1N":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("WT6e"),t=function(){},a=e("INQx"),r=e("mu/C"),u=e("1OzB"),s=e("voZO"),d=e("Xjw4"),o=e("7DMc"),c=e("JkvL"),_=e("9Sd6"),m=e("XHgV"),b=e("U/+3"),h=e("OE0E"),g=e("Uo70"),p=i._1({encapsulation:2,styles:[".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.cdk-keyboard-focused .mat-slider-focus-ring,.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media screen and (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media screen and (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}"],data:{}});function f(l){return i._26(2,[i._22(402653184,1,{_sliderWrapper:0}),(l()(),i._3(1,0,[[1,0],["sliderWrapper",1]],null,16,"div",[["class","mat-slider-wrapper"]],null,null,null,null,null)),(l()(),i._3(2,0,null,null,4,"div",[["class","mat-slider-track-wrapper"]],null,null,null,null,null)),(l()(),i._3(3,0,null,null,1,"div",[["class","mat-slider-track-background"]],null,null,null,null,null)),i._2(4,278528,null,0,d.n,[i.r,i.k,i.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i._3(5,0,null,null,1,"div",[["class","mat-slider-track-fill"]],null,null,null,null,null)),i._2(6,278528,null,0,d.n,[i.r,i.k,i.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i._3(7,0,null,null,3,"div",[["class","mat-slider-ticks-container"]],null,null,null,null,null)),i._2(8,278528,null,0,d.n,[i.r,i.k,i.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i._3(9,0,null,null,1,"div",[["class","mat-slider-ticks"]],null,null,null,null,null)),i._2(10,278528,null,0,d.n,[i.r,i.k,i.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i._3(11,0,null,null,6,"div",[["class","mat-slider-thumb-container"]],null,null,null,null,null)),i._2(12,278528,null,0,d.n,[i.r,i.k,i.B],{ngStyle:[0,"ngStyle"]},null),(l()(),i._3(13,0,null,null,0,"div",[["class","mat-slider-focus-ring"]],null,null,null,null,null)),(l()(),i._3(14,0,null,null,0,"div",[["class","mat-slider-thumb"]],null,null,null,null,null)),(l()(),i._3(15,0,null,null,2,"div",[["class","mat-slider-thumb-label"]],null,null,null,null,null)),(l()(),i._3(16,0,null,null,1,"span",[["class","mat-slider-thumb-label-text"]],null,null,null,null,null)),(l()(),i._24(17,null,["",""]))],function(l,n){var e=n.component;l(n,4,0,e._trackBackgroundStyles),l(n,6,0,e._trackFillStyles),l(n,8,0,e._ticksContainerStyles),l(n,10,0,e._ticksStyles),l(n,12,0,e._thumbContainerStyles)},function(l,n){l(n,17,0,n.component.displayValue)})}var v=e("+76Z"),k=e("wkOE"),x=e("86rF"),w=e("l5y7"),y=e("Hhif"),C=e("QPaD"),z=e("5cRc"),S=e("YWe0"),P=e("jDLB"),j=function(){function l(){this.delegateGPU=new P}return l.prototype.createKernel=function(l,n){return this.delegateGPU.createKernel(l,n)},l.prototype.setUseGPU=function(l){return void 0===l&&(l=!0),this.delegateGPU=new P({mode:l?"gpu":"cpu"})},l}(),U=function(){function l(l,n){this.fb=l,this.gpu=n,this.createForm(),this.createGPUColorizer(),this.calculationTime$=Object(z.a)(500).pipe(Object(w.mergeMap)(function(l){return Object(S.a)(performance.getEntriesByName("createCanvasWithGPU"))}),Object(w.map)(function(l){if(0===l.length)return 0;var n=l.reduce(function(n,e){return n+e.duration/l.length},0);return l.length>60&&(performance.clearMeasures(),performance.clearMarks()),n}),Object(w.startWith)(0),Object(w.map)(function(l){return l.toFixed(3)}))}return l.prototype.createForm=function(){this.additionForm=this.fb.group({r:[255,[o.q.required,o.q.min(0),o.q.max(255)]],g:[255,[o.q.required,o.q.min(0),o.q.max(255)]],b:[255,[o.q.required,o.q.min(0),o.q.max(255)]],sinDivider:[100,[o.q.required,o.q.min(1),o.q.max(200)]],speed:[20,[o.q.required,o.q.min(1),o.q.max(100)]],useGPU:[!0,[o.q.required]]})},l.prototype.ngAfterViewInit=function(){var l=this,n=y.a.create(Math.floor(1e3/120),C.a).pipe(Object(w.timeInterval)(),Object(w.scan)(function(l,n){return l+n.interval},0),Object(w.combineLatest)(this.additionForm.get("r").valueChanges.pipe(Object(w.startWith)(255)),this.additionForm.get("g").valueChanges.pipe(Object(w.startWith)(255)),this.additionForm.get("b").valueChanges.pipe(Object(w.startWith)(255)),this.additionForm.get("sinDivider").valueChanges.pipe(Object(w.startWith)(100)),this.additionForm.get("speed").valueChanges.pipe(Object(w.startWith)(20),Object(w.map)(function(l){return l/100}))));this.subscription=n.subscribe(function(n){return l.createCanvasWithGPU(n[0],n[1],n[2],n[3],n[4],n[5])}),this.subscription.add(this.additionForm.get("useGPU").valueChanges.subscribe(function(n){return l.createGPUColorizer(n)}))},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.createGPUColorizer=function(l){void 0===l&&(l=!0),this.gpu.setUseGPU(l),this.gpuColorizer=this.gpu.createKernel(function(l,n,e,i,t,a){var r=l*a,u=this.thread.x,s=this.thread.y,d=(r+s)/t,o=(r+s+u)/t;this.color(n*Math.sin((r+u+.5*s)/t),e*Math.cos(d),i*Math.tan(o),1)}).setGraphical(!0)},l.prototype.createCanvasWithGPU=function(l,n,e,i,t,a){var r=this.gpuResult.nativeElement,u=r.getContext("2d"),s=r.clientWidth,d=r.clientHeight;performance.mark("createCanvasWithGPU-start"),this.gpuColorizer.setOutput([s,d]),this.gpuColorizer(l,n/255,e/255,i/255,t,a);var o=this.gpuColorizer.getCanvas();performance.mark("createCanvasWithGPU-end"),u.drawImage(o,0,0),performance.measure("createCanvasWithGPU","createCanvasWithGPU-start","createCanvasWithGPU-end")},l}(),M=i._1({encapsulation:0,styles:[[".gpu-card[_ngcontent-%COMP%]   .gpu-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.gpu-card[_ngcontent-%COMP%]   .gpu-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.gpu-card[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%]{min-height:100px;height:100%;max-height:500px}.gpu-card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.gpu-card[_ngcontent-%COMP%]   .number-input-width[_ngcontent-%COMP%]{width:80px}  .red-color-slider .mat-slider-track-wrapper .mat-slider-track-fill{background-color:red}  .red-color-slider .mat-slider-thumb,   .red-color-slider .mat-slider-thumb-label{background-color:red}  .green-color-slider .mat-slider-track-wrapper .mat-slider-track-fill{background-color:#0f0}  .green-color-slider .mat-slider-thumb,   .green-color-slider .mat-slider-thumb-label{background-color:#0f0}  .blue-color-slider .mat-slider-track-wrapper .mat-slider-track-fill{background-color:#00f}  .blue-color-slider .mat-slider-thumb,   .blue-color-slider .mat-slider-thumb-label{background-color:#00f}"]],data:{}});function G(l){return i._26(0,[i._22(402653184,1,{gpuResult:0}),(l()(),i._3(1,0,null,null,133,"mat-card",[["appRaiseCard",""],["class","gpu-card mat-card"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,e){var t=!0;return"mouseenter"===n&&(t=!1!==i._15(l,3).addRaisedClass()&&t),"mouseleave"===n&&(t=!1!==i._15(l,3).unraise()&&t),t},r.b,r.a)),i._2(2,49152,null,0,u.a,[],null,null),i._2(3,540672,null,0,s.a,[i.k],null,null),(l()(),i._24(-1,0,["\n  "])),(l()(),i._3(5,0,null,0,13,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),i._2(6,16384,null,0,u.i,[],null,null),(l()(),i._24(-1,null,["\n    "])),(l()(),i._3(8,0,null,null,1,"div",[["class","gpu-header-image mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),i._2(9,16384,null,0,u.c,[],null,null),(l()(),i._24(-1,null,["\n    "])),(l()(),i._3(11,0,null,null,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),i._2(12,16384,null,0,u.i,[],null,null),(l()(),i._24(-1,null,["An example utilizing gpu.js"])),(l()(),i._24(-1,null,["\n    "])),(l()(),i._3(15,0,null,null,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),i._2(16,16384,null,0,u.h,[],null,null),(l()(),i._24(-1,null,["No friggeling shader code needed for this"])),(l()(),i._24(-1,null,["\n  "])),(l()(),i._24(-1,0,["\n  "])),(l()(),i._3(20,0,[[1,0],["gpuResult",1]],0,0,"canvas",[["class","mat-card-image full-height"]],null,null,null,null,null)),(l()(),i._24(-1,0,["\n  "])),(l()(),i._3(22,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),i._24(23,null,["Calculation time with "," : ","ms\n  "])),i._18(131072,d.b,[i.h]),(l()(),i._24(-1,0,["\n  "])),(l()(),i._3(26,0,null,0,107,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i._2(27,16384,null,0,u.d,[],null,null),(l()(),i._24(-1,null,["\n    "])),(l()(),i._3(29,0,null,null,103,"form",[["class","gpu-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==i._15(l,31).onSubmit(e)&&t),"reset"===n&&(t=!1!==i._15(l,31).onReset()&&t),t},null,null)),i._2(30,16384,null,0,o.t,[],null,null),i._2(31,540672,null,0,o.g,[[8,null],[8,null]],{form:[0,"form"]},null),i._20(2048,null,o.c,null,[o.g]),i._2(33,16384,null,0,o.m,[o.c],null,null),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(35,0,null,null,16,"div",[["class","full-width"]],null,null,null,null,null)),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._24(-1,null,["Red"])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(40,0,null,null,6,"mat-slider",[["class","red-color-slider mat-slider"],["color","warn"],["formControlName","r"],["max","255"],["min","0"],["role","slider"],["thumb-label","true"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==i._15(l,41)._onFocus()&&t),"blur"===n&&(t=!1!==i._15(l,41)._onBlur()&&t),"click"===n&&(t=!1!==i._15(l,41)._onClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,41)._onKeydown(e)&&t),"keyup"===n&&(t=!1!==i._15(l,41)._onKeyup()&&t),"mouseenter"===n&&(t=!1!==i._15(l,41)._onMouseenter()&&t),"slide"===n&&(t=!1!==i._15(l,41)._onSlide(e)&&t),"slideend"===n&&(t=!1!==i._15(l,41)._onSlideEnd()&&t),"slidestart"===n&&(t=!1!==i._15(l,41)._onSlideStart(e)&&t),t},f,p)),i._2(41,245760,null,0,c.a,[i.k,b.g,i.h,[2,_.c],[8,null]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],_thumbLabelDeprecated:[3,"_thumbLabelDeprecated"]},null),i._20(1024,null,o.j,function(l){return[l]},[c.a]),i._2(43,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(45,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(-1,null,["\n        "])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(48,0,null,null,2,"mat-chip",[["class","mat-chip"],["color","warn"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i._15(l,49)._handleClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,49)._handleKeydown(e)&&t),"focus"===n&&(t=0!=(i._15(l,49)._hasFocus=!0)&&t),"blur"===n&&(t=!1!==i._15(l,49)._blur()&&t),t},null,null)),i._2(49,147456,null,0,v.a,[i.k],{color:[0,"color"]},null),(l()(),i._24(50,null,["",""])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(53,0,null,null,16,"div",[["class","full-width"]],null,null,null,null,null)),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(55,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._24(-1,null,["Green"])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(58,0,null,null,6,"mat-slider",[["class","green-color-slider mat-slider"],["color","warn"],["formControlName","g"],["max","255"],["min","0"],["role","slider"],["thumb-label","true"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==i._15(l,59)._onFocus()&&t),"blur"===n&&(t=!1!==i._15(l,59)._onBlur()&&t),"click"===n&&(t=!1!==i._15(l,59)._onClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,59)._onKeydown(e)&&t),"keyup"===n&&(t=!1!==i._15(l,59)._onKeyup()&&t),"mouseenter"===n&&(t=!1!==i._15(l,59)._onMouseenter()&&t),"slide"===n&&(t=!1!==i._15(l,59)._onSlide(e)&&t),"slideend"===n&&(t=!1!==i._15(l,59)._onSlideEnd()&&t),"slidestart"===n&&(t=!1!==i._15(l,59)._onSlideStart(e)&&t),t},f,p)),i._2(59,245760,null,0,c.a,[i.k,b.g,i.h,[2,_.c],[8,null]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],_thumbLabelDeprecated:[3,"_thumbLabelDeprecated"]},null),i._20(1024,null,o.j,function(l){return[l]},[c.a]),i._2(61,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(63,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(-1,null,["\n        "])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(66,0,null,null,2,"mat-chip",[["class","mat-chip"],["color","warn"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i._15(l,67)._handleClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,67)._handleKeydown(e)&&t),"focus"===n&&(t=0!=(i._15(l,67)._hasFocus=!0)&&t),"blur"===n&&(t=!1!==i._15(l,67)._blur()&&t),t},null,null)),i._2(67,147456,null,0,v.a,[i.k],{color:[0,"color"]},null),(l()(),i._24(68,null,["",""])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(71,0,null,null,16,"div",[["class","full-width"]],null,null,null,null,null)),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(73,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._24(-1,null,["Blue"])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(76,0,null,null,6,"mat-slider",[["class","blue-color-slider mat-slider"],["color","warn"],["formControlName","b"],["max","255"],["min","0"],["role","slider"],["thumb-label","true"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==i._15(l,77)._onFocus()&&t),"blur"===n&&(t=!1!==i._15(l,77)._onBlur()&&t),"click"===n&&(t=!1!==i._15(l,77)._onClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,77)._onKeydown(e)&&t),"keyup"===n&&(t=!1!==i._15(l,77)._onKeyup()&&t),"mouseenter"===n&&(t=!1!==i._15(l,77)._onMouseenter()&&t),"slide"===n&&(t=!1!==i._15(l,77)._onSlide(e)&&t),"slideend"===n&&(t=!1!==i._15(l,77)._onSlideEnd()&&t),"slidestart"===n&&(t=!1!==i._15(l,77)._onSlideStart(e)&&t),t},f,p)),i._2(77,245760,null,0,c.a,[i.k,b.g,i.h,[2,_.c],[8,null]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],_thumbLabelDeprecated:[3,"_thumbLabelDeprecated"]},null),i._20(1024,null,o.j,function(l){return[l]},[c.a]),i._2(79,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(81,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(-1,null,["\n        "])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(84,0,null,null,2,"mat-chip",[["class","mat-chip"],["color","warn"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i._15(l,85)._handleClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,85)._handleKeydown(e)&&t),"focus"===n&&(t=0!=(i._15(l,85)._hasFocus=!0)&&t),"blur"===n&&(t=!1!==i._15(l,85)._blur()&&t),t},null,null)),i._2(85,147456,null,0,v.a,[i.k],{color:[0,"color"]},null),(l()(),i._24(86,null,["",""])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(89,0,null,null,16,"div",[["class","full-width"]],null,null,null,null,null)),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(91,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._24(-1,null,["Repeativness"])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(94,0,null,null,6,"mat-slider",[["class","mat-slider"],["formControlName","sinDivider"],["invert","true"],["max","200"],["min","1"],["role","slider"],["thumb-label","true"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==i._15(l,95)._onFocus()&&t),"blur"===n&&(t=!1!==i._15(l,95)._onBlur()&&t),"click"===n&&(t=!1!==i._15(l,95)._onClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,95)._onKeydown(e)&&t),"keyup"===n&&(t=!1!==i._15(l,95)._onKeyup()&&t),"mouseenter"===n&&(t=!1!==i._15(l,95)._onMouseenter()&&t),"slide"===n&&(t=!1!==i._15(l,95)._onSlide(e)&&t),"slideend"===n&&(t=!1!==i._15(l,95)._onSlideEnd()&&t),"slidestart"===n&&(t=!1!==i._15(l,95)._onSlideStart(e)&&t),t},f,p)),i._2(95,245760,null,0,c.a,[i.k,b.g,i.h,[2,_.c],[8,null]],{invert:[0,"invert"],max:[1,"max"],min:[2,"min"],_thumbLabelDeprecated:[3,"_thumbLabelDeprecated"]},null),i._20(1024,null,o.j,function(l){return[l]},[c.a]),i._2(97,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(99,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(-1,null,["\n        "])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(102,0,null,null,2,"mat-chip",[["class","mat-chip"],["color","accent"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i._15(l,103)._handleClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,103)._handleKeydown(e)&&t),"focus"===n&&(t=0!=(i._15(l,103)._hasFocus=!0)&&t),"blur"===n&&(t=!1!==i._15(l,103)._blur()&&t),t},null,null)),i._2(103,147456,null,0,v.a,[i.k],{color:[0,"color"]},null),(l()(),i._24(104,null,["",""])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(107,0,null,null,16,"div",[["class","full-width"]],null,null,null,null,null)),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(109,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._24(-1,null,["Speed"])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(112,0,null,null,6,"mat-slider",[["class","mat-slider"],["formControlName","speed"],["max","100"],["min","1"],["role","slider"],["thumb-label","true"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==i._15(l,113)._onFocus()&&t),"blur"===n&&(t=!1!==i._15(l,113)._onBlur()&&t),"click"===n&&(t=!1!==i._15(l,113)._onClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,113)._onKeydown(e)&&t),"keyup"===n&&(t=!1!==i._15(l,113)._onKeyup()&&t),"mouseenter"===n&&(t=!1!==i._15(l,113)._onMouseenter()&&t),"slide"===n&&(t=!1!==i._15(l,113)._onSlide(e)&&t),"slideend"===n&&(t=!1!==i._15(l,113)._onSlideEnd()&&t),"slidestart"===n&&(t=!1!==i._15(l,113)._onSlideStart(e)&&t),t},f,p)),i._2(113,245760,null,0,c.a,[i.k,b.g,i.h,[2,_.c],[8,null]],{max:[0,"max"],min:[1,"min"],_thumbLabelDeprecated:[2,"_thumbLabelDeprecated"]},null),i._20(1024,null,o.j,function(l){return[l]},[c.a]),i._2(115,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(117,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(-1,null,["\n        "])),(l()(),i._24(-1,null,["\n        "])),(l()(),i._3(120,0,null,null,2,"mat-chip",[["class","mat-chip"],["color","accent"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i._15(l,121)._handleClick(e)&&t),"keydown"===n&&(t=!1!==i._15(l,121)._handleKeydown(e)&&t),"focus"===n&&(t=0!=(i._15(l,121)._hasFocus=!0)&&t),"blur"===n&&(t=!1!==i._15(l,121)._blur()&&t),t},null,null)),i._2(121,147456,null,0,v.a,[i.k],{color:[0,"color"]},null),(l()(),i._24(122,null,["","%"])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._24(-1,null,["\n      "])),(l()(),i._3(125,0,null,null,6,"mat-slide-toggle",[["class","mat-slide-toggle"],["formControlName","useGPU"]],[[8,"id",0],[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,k.b,k.a)),i._2(126,1228800,null,0,x.a,[i.k,m.a,b.g,i.h,[8,null]],null,null),i._20(1024,null,o.j,function(l){return[l]},[x.a]),i._2(128,671744,null,0,o.f,[[3,o.c],[8,null],[8,null],[2,o.j]],{name:[0,"name"]},null),i._20(2048,null,o.k,null,[o.f]),i._2(130,16384,null,0,o.l,[o.k],null,null),(l()(),i._24(131,0,["\n        ","\n      "])),(l()(),i._24(-1,null,["\n    "])),(l()(),i._24(-1,null,["\n  "])),(l()(),i._24(-1,0,["\n"])),(l()(),i._24(-1,null,["\n\n"]))],function(l,n){l(n,31,0,n.component.additionForm),l(n,41,0,"warn","255","0","true"),l(n,43,0,"r"),l(n,49,0,"warn"),l(n,59,0,"warn","255","0","true"),l(n,61,0,"g"),l(n,67,0,"warn"),l(n,77,0,"warn","255","0","true"),l(n,79,0,"b"),l(n,85,0,"warn"),l(n,95,0,"true","200","1","true"),l(n,97,0,"sinDivider"),l(n,103,0,"accent"),l(n,113,0,"100","1","true"),l(n,115,0,"speed"),l(n,121,0,"accent"),l(n,128,0,"useGPU")},function(l,n){var e=n.component;l(n,23,0,e.additionForm.get("useGPU").value?"GPU":"CPU",i._25(n,23,1,i._15(n,24).transform(e.calculationTime$))),l(n,29,0,i._15(n,33).ngClassUntouched,i._15(n,33).ngClassTouched,i._15(n,33).ngClassPristine,i._15(n,33).ngClassDirty,i._15(n,33).ngClassValid,i._15(n,33).ngClassInvalid,i._15(n,33).ngClassPending),l(n,40,1,[i._15(n,41).tabIndex,i._15(n,41).disabled,i._15(n,41).max,i._15(n,41).min,i._15(n,41).value,i._15(n,41).vertical?"vertical":"horizontal",i._15(n,41).disabled,i._15(n,41).tickInterval,!i._15(n,41).vertical,i._15(n,41)._invertAxis,i._15(n,41)._isSliding,i._15(n,41).thumbLabel,i._15(n,41).vertical,i._15(n,41)._isMinValue,i._15(n,41).disabled||i._15(n,41)._isMinValue&&i._15(n,41)._thumbGap&&i._15(n,41)._invertAxis,i._15(n,45).ngClassUntouched,i._15(n,45).ngClassTouched,i._15(n,45).ngClassPristine,i._15(n,45).ngClassDirty,i._15(n,45).ngClassValid,i._15(n,45).ngClassInvalid,i._15(n,45).ngClassPending]),l(n,48,0,i._15(n,49).disabled?null:-1,i._15(n,49).selected,i._15(n,49).disabled||null,i._15(n,49).disabled.toString(),i._15(n,49).ariaSelected),l(n,50,0,e.additionForm.get("r").value),l(n,58,1,[i._15(n,59).tabIndex,i._15(n,59).disabled,i._15(n,59).max,i._15(n,59).min,i._15(n,59).value,i._15(n,59).vertical?"vertical":"horizontal",i._15(n,59).disabled,i._15(n,59).tickInterval,!i._15(n,59).vertical,i._15(n,59)._invertAxis,i._15(n,59)._isSliding,i._15(n,59).thumbLabel,i._15(n,59).vertical,i._15(n,59)._isMinValue,i._15(n,59).disabled||i._15(n,59)._isMinValue&&i._15(n,59)._thumbGap&&i._15(n,59)._invertAxis,i._15(n,63).ngClassUntouched,i._15(n,63).ngClassTouched,i._15(n,63).ngClassPristine,i._15(n,63).ngClassDirty,i._15(n,63).ngClassValid,i._15(n,63).ngClassInvalid,i._15(n,63).ngClassPending]),l(n,66,0,i._15(n,67).disabled?null:-1,i._15(n,67).selected,i._15(n,67).disabled||null,i._15(n,67).disabled.toString(),i._15(n,67).ariaSelected),l(n,68,0,e.additionForm.get("g").value),l(n,76,1,[i._15(n,77).tabIndex,i._15(n,77).disabled,i._15(n,77).max,i._15(n,77).min,i._15(n,77).value,i._15(n,77).vertical?"vertical":"horizontal",i._15(n,77).disabled,i._15(n,77).tickInterval,!i._15(n,77).vertical,i._15(n,77)._invertAxis,i._15(n,77)._isSliding,i._15(n,77).thumbLabel,i._15(n,77).vertical,i._15(n,77)._isMinValue,i._15(n,77).disabled||i._15(n,77)._isMinValue&&i._15(n,77)._thumbGap&&i._15(n,77)._invertAxis,i._15(n,81).ngClassUntouched,i._15(n,81).ngClassTouched,i._15(n,81).ngClassPristine,i._15(n,81).ngClassDirty,i._15(n,81).ngClassValid,i._15(n,81).ngClassInvalid,i._15(n,81).ngClassPending]),l(n,84,0,i._15(n,85).disabled?null:-1,i._15(n,85).selected,i._15(n,85).disabled||null,i._15(n,85).disabled.toString(),i._15(n,85).ariaSelected),l(n,86,0,e.additionForm.get("b").value),l(n,94,1,[i._15(n,95).tabIndex,i._15(n,95).disabled,i._15(n,95).max,i._15(n,95).min,i._15(n,95).value,i._15(n,95).vertical?"vertical":"horizontal",i._15(n,95).disabled,i._15(n,95).tickInterval,!i._15(n,95).vertical,i._15(n,95)._invertAxis,i._15(n,95)._isSliding,i._15(n,95).thumbLabel,i._15(n,95).vertical,i._15(n,95)._isMinValue,i._15(n,95).disabled||i._15(n,95)._isMinValue&&i._15(n,95)._thumbGap&&i._15(n,95)._invertAxis,i._15(n,99).ngClassUntouched,i._15(n,99).ngClassTouched,i._15(n,99).ngClassPristine,i._15(n,99).ngClassDirty,i._15(n,99).ngClassValid,i._15(n,99).ngClassInvalid,i._15(n,99).ngClassPending]),l(n,102,0,i._15(n,103).disabled?null:-1,i._15(n,103).selected,i._15(n,103).disabled||null,i._15(n,103).disabled.toString(),i._15(n,103).ariaSelected),l(n,104,0,e.additionForm.get("sinDivider").value),l(n,112,1,[i._15(n,113).tabIndex,i._15(n,113).disabled,i._15(n,113).max,i._15(n,113).min,i._15(n,113).value,i._15(n,113).vertical?"vertical":"horizontal",i._15(n,113).disabled,i._15(n,113).tickInterval,!i._15(n,113).vertical,i._15(n,113)._invertAxis,i._15(n,113)._isSliding,i._15(n,113).thumbLabel,i._15(n,113).vertical,i._15(n,113)._isMinValue,i._15(n,113).disabled||i._15(n,113)._isMinValue&&i._15(n,113)._thumbGap&&i._15(n,113)._invertAxis,i._15(n,117).ngClassUntouched,i._15(n,117).ngClassTouched,i._15(n,117).ngClassPristine,i._15(n,117).ngClassDirty,i._15(n,117).ngClassValid,i._15(n,117).ngClassInvalid,i._15(n,117).ngClassPending]),l(n,120,0,i._15(n,121).disabled?null:-1,i._15(n,121).selected,i._15(n,121).disabled||null,i._15(n,121).disabled.toString(),i._15(n,121).ariaSelected),l(n,122,0,e.additionForm.get("speed").value),l(n,125,1,[i._15(n,126).id,i._15(n,126).checked,i._15(n,126).disabled,"before"==i._15(n,126).labelPosition,i._15(n,130).ngClassUntouched,i._15(n,130).ngClassTouched,i._15(n,130).ngClassPristine,i._15(n,130).ngClassDirty,i._15(n,130).ngClassValid,i._15(n,130).ngClassInvalid,i._15(n,130).ngClassPending]),l(n,131,0,e.additionForm.get("useGPU").value?"GPU is used":"GPU is not used")})}var O=i.Z("app-some-gpu-calculation",U,function(l){return i._26(0,[(l()(),i._3(0,0,null,null,1,"app-some-gpu-calculation",[],null,null,null,G,M)),i._2(1,4374528,null,0,U,[o.e,j],null,null)],null,null)},{},{},[]),D=e("6sdf"),F=e("1T37"),I=e("+j5Y"),q=e("Mcof"),V=e("7u3n"),W=e("z7Rf"),K=e("ItHS"),L=e("NwsS"),B=e("bfOx"),A=e("fTri"),T=e("gsbp"),N=e("AP/s"),E=e("TBIh"),R=e("704W"),H=e("j06o"),X=e("bkcK"),Y=e("ZuzD"),Z=e("sqmn"),J=e("kJ/S"),Q=e("4rwD"),$=e("6GVX"),ll=e("Bp8q"),nl=e("fAE3");e.d(n,"SomeGpuCalculationModuleNgFactory",function(){return el});var el=i._0(t,[],function(l){return i._11([i._12(512,i.j,i.W,[[8,[a.a,O]],[3,i.j],i.v]),i._12(4608,d.m,d.l,[i.s,[2,d.v]]),i._12(4608,o.u,o.u,[]),i._12(6144,_.b,null,[d.d]),i._12(4608,_.c,_.c,[[2,_.b]]),i._12(4608,m.a,m.a,[]),i._12(4608,b.i,b.i,[m.a]),i._12(4608,b.h,b.h,[b.i,i.x,d.d]),i._12(136192,b.d,b.b,[[3,b.d],d.d]),i._12(5120,b.l,b.k,[[3,b.l],[2,b.j],d.d]),i._12(5120,b.g,b.e,[[3,b.g],i.x,m.a]),i._12(4608,D.b,D.b,[]),i._12(4608,g.b,g.b,[]),i._12(5120,F.d,F.b,[[3,F.d],i.x,m.a]),i._12(5120,F.g,F.f,[[3,F.g],m.a,i.x]),i._12(4608,I.i,I.i,[F.d,F.g,i.x,d.d]),i._12(5120,I.e,I.j,[[3,I.e],d.d]),i._12(4608,I.h,I.h,[F.g,d.d]),i._12(5120,I.f,I.m,[[3,I.f],d.d]),i._12(4608,I.c,I.c,[I.i,I.e,i.j,I.h,I.f,i.g,i.p,i.x,d.d]),i._12(5120,I.k,I.l,[I.c]),i._12(4608,q.d,q.d,[m.a]),i._12(135680,q.a,q.a,[q.d,i.x]),i._12(5120,V.b,V.c,[I.c]),i._12(5120,W.d,W.a,[[3,W.d],[2,K.a],h.c,[2,d.d]]),i._12(5120,L.a,L.b,[I.c]),i._12(4608,h.f,g.c,[[2,g.g],[2,g.l]]),i._12(4608,o.e,o.e,[]),i._12(4608,j,j,[]),i._12(512,B.o,B.o,[[2,B.t],[2,B.l]]),i._12(512,A.a,A.a,[]),i._12(512,d.c,d.c,[]),i._12(512,o.r,o.r,[]),i._12(512,o.h,o.h,[]),i._12(512,_.a,_.a,[]),i._12(256,g.d,!0,[]),i._12(512,g.l,g.l,[[2,g.d]]),i._12(512,m.b,m.b,[]),i._12(512,g.v,g.v,[]),i._12(512,b.a,b.a,[]),i._12(512,T.c,T.c,[]),i._12(512,D.c,D.c,[]),i._12(512,N.c,N.c,[]),i._12(512,E.c,E.c,[]),i._12(512,R.b,R.b,[]),i._12(512,H.b,H.b,[]),i._12(512,X.e,X.e,[]),i._12(512,F.c,F.c,[]),i._12(512,I.g,I.g,[]),i._12(512,q.c,q.c,[]),i._12(512,V.e,V.e,[]),i._12(512,W.c,W.c,[]),i._12(512,u.g,u.g,[]),i._12(512,g.m,g.m,[]),i._12(512,g.t,g.t,[]),i._12(512,Y.a,Y.a,[]),i._12(512,Z.c,Z.c,[]),i._12(512,g.r,g.r,[]),i._12(512,L.d,L.d,[]),i._12(512,J.h,J.h,[]),i._12(512,Q.b,Q.b,[]),i._12(512,x.b,x.b,[]),i._12(512,$.j,$.j,[]),i._12(512,c.b,c.b,[]),i._12(512,v.b,v.b,[]),i._12(512,ll.a,ll.a,[]),i._12(512,nl.a,nl.a,[]),i._12(512,o.p,o.p,[]),i._12(512,t,t,[]),i._12(256,V.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),i._12(256,J.a,!1,[]),i._12(1024,B.j,function(){return[[{path:"",component:U}]]},[])])})}});