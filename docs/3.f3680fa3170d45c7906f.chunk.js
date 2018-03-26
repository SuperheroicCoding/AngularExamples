webpackJsonp([3],{"0Ul+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("LMZF"),o=function(){},a=n("AP4T"),r=n("ZGtO"),s=Math.PI/2,h=function(){function t(){this.mouseup$=new i.n,this.mousedown$=new i.n}return t.prototype.ngOnInit=function(){this.activateLook$=a.a.merge(this.mousedown$.map(function(t){return t.stopPropagation(),t.preventDefault(),!0}),this.mouseup$.map(function(t){return t.stopPropagation(),t.preventDefault(),!1}))},t.prototype.ngOnDestroy=function(){this.renderer.dispose()},t.prototype.ngAfterContentInit=function(){this.clock=new r.c,this.scene=new r.n,this.scene.fog=new r.e(13421772,.002);var t=this.webGlCanvas.nativeElement;this.width=t.innerWidth,this.height=t.innerHeight,this.camera=new r.j(75,this.width/this.height,.1,1e3),this.camera.rotation.x=-Math.PI/5,this.camera.position.z=-.6,this.camera.position.y=1.86,this.camera.position.x=10,this.renderer=new r.u({canvas:t,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.BasicShadowMap,this.renderer.setSize(this.width,this.height),this.controls=new THREE.OrbitControls(this.camera,t);var e=new r.a(16777215);this.scene.add(e);var n=new r.q(11184810,.75,200,.79,2);n.position.x=3,n.position.y=2,this.scene.add(n);var i=this.createLight(16716049);i.position.y=3,i.add(new r.f(new r.p(.2,8,8),new r.g({color:16711680}))),this.pointLight=i,this.scene.add(i);var o=new r.b(1,1,1),a=new r.h({color:6689245,specular:39168,shininess:30,flatShading:!0});this.cube=new r.f(o,a),this.cube.castShadow=!0,this.cube.receiveShadow=!0,this.cube.position.y=.75,this.scene.add(this.cube),this.checkerBoard=this.createMandlebrotPlane(),this.checkerBoard.rotation.x=-s,this.checkerBoard.receiveShadow=!0,this.scene.add(this.checkerBoard),this.lastFrameTime=0,this.camera.lookAt(this.cube.position),this.animate(0)},t.prototype.createLight=function(t){var e=new r.m(t);e.castShadow=!0,e.shadow.camera.near=1,e.shadow.camera.far=60,e.shadow.bias=-.005;var n=new r.p(12),i=new r.g({color:t}),o=new r.f(n,i);return o.name="sphere",e.add(o),e},t.prototype.animate=function(t){var e=this;this.resize();var n=this.clock.getDelta();this.checkerBoard.material.uniforms.zoom.value=.1*Math.cos(1e-4*t),this.cube.rotation.x+=.5*n,this.cube.rotation.y+=.5*n,this.pointLight.position.x=3*Math.sin(7e-4*t),this.pointLight.position.y=3+2*Math.cos(5e-4*t),this.pointLight.position.z=3*Math.cos(3e-4*t);var i=new r.d(.5*(Math.cos(3e-4*t)+1),.5*(Math.sin(5e-4*t)+1),.5*(Math.cos(7e-4*t)+1)),o=this.pointLight.getObjectByName("sphere"),a=new r.g({color:i.getHex()});o.material=a,new r.f(o.geometry,a).name="sphere",this.pointLight.color.set(i),this.renderer.render(this.scene,this.camera),requestAnimationFrame(function(t){return e.animate(t)})},t.prototype.createCheckerBoard=function(t){void 0===t&&(t=20);for(var e=new r.l(100,100,t,t),n=[new r.h({color:13421820,specular:39168,shininess:15,flatShading:!0}),new r.h({color:4473956,specular:39168,shininess:10,flatShading:!0})],i=0;i<t;i++)for(var o=0;o<t;o++){var a=2*(i*t+o);e.faces[a].materialIndex=e.faces[a+1].materialIndex=(i+o)%2}return new r.f(e,n)},t.prototype.createMandlebrotPlane=function(){return new r.f(new r.l(100,100,1,1),this.createMandelbrotMaterial())},t.prototype.createMandelbrotMaterial=function(){var t=r.s.merge([r.r.lights,{zoom:{type:"f",value:.05}}]);return new r.o({uniforms:t,vertexShader:"\n  precision highp float;\n  varying vec3 vPos;\n  varying vec2 vMandelbrotPos;\n  varying vec3 vNormal;\n  uniform float zoom;\n  void main () {\n    vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;\n \n    vNormal = vec3(0.,1.,0.);\n    vMandelbrotPos = position.xy * zoom; \n        \n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n  }\n",fragmentShader:'\n  struct PointLight {\n    vec3 color;\n    vec3 position; // light position, in camera coordinates\n    float distance; // used for attenuation purposes. Since\n                  // we\'re writing our own shader, it can\n                  // really be anything we want (as long as\n                  // we assign it to our light in its\n                  // "distance" field\n    float decay;\n  };\n  uniform PointLight pointLights[NUM_POINT_LIGHTS];\n  precision highp float;\n  varying vec3 vPos;\n  varying vec3 vNormal;\n  varying vec2 vMandelbrotPos;\n   \n  void main () {\n   \n    vec2 fractal = vMandelbrotPos.xy;\n    for (int i = 0; i < 35; i++) {\n      fractal = vMandelbrotPos.xy + vec2(\n        fractal.x * fractal.x - fractal.y * fractal.y,\n          2.0 * fractal.x * fractal.y\n        );\n      // interpolate fractal color over position\n       gl_FragColor = vec4(fractal, 0, 1);\n      // if outside of fractal, use greyish\n      if (length(fractal) > 2.5) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.);\n      }\n    }\n    \n    vec4 addedLights = vec4(0.0,0.0,0.0, 1.0);\n    for(int l = 0; l < NUM_POINT_LIGHTS; l++) {\n      vec3 lightDirection = normalize(vPos - pointLights[l].position);\n      addedLights.rgb += clamp(dot(-lightDirection, vNormal), 0.0, 1.0) * pointLights[l].color;\n    }\n    gl_FragColor = mix(gl_FragColor, addedLights, addedLights);\n    // gl_FragColor =  vec4(pointLights[0].color,1.);\n  }\n',lights:!0})},t.prototype.resize=function(){var t=this.webGlCanvas.nativeElement,e=t.clientWidth,n=t.clientHeight;e===this.width&&n===this.height||(this.renderer.setSize(t.clientWidth,t.clientHeight,!1),this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.width=e,this.height=n)},t}(),c=i._2({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%}[_nghost-%COMP%], [_nghost-%COMP%] > canvas[_ngcontent-%COMP%]{width:calc(100vw - 16px)}[_nghost-%COMP%] > canvas[_ngcontent-%COMP%]{height:calc(100vh - 16px - 64px)}"]],data:{}});function l(t){return i._28(0,[i._24(402653184,1,{webGlCanvas:0}),(t()(),i._4(1,0,[[1,0],["webGlCanvas",1]],null,1,"canvas",[],null,[[null,"mouseup"],[null,"mousedown"]],function(t,e,n){var i=!0,o=t.component;return"mouseup"===e&&(i=!1!==o.mouseup$.emit(n)&&i),"mousedown"===e&&(i=!1!==o.mousedown$.emit(n)&&i),i},null,null)),(t()(),i._26(-1,null,["\n"])),(t()(),i._26(-1,null,["\n"]))],null,null)}var u=i._0("app-web-gl",h,function(t){return i._28(0,[(t()(),i._4(0,0,null,null,1,"app-web-gl",[],null,null,null,l,c)),i._3(1,1294336,null,0,h,[],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),d=n("Un6q"),p=n("UHIZ");n.d(e,"WebGlModuleNgFactory",function(){return g});var g=i._1(o,[],function(t){return i._12([i._13(512,i.j,i.X,[[8,[u]],[3,i.j],i.w]),i._13(4608,d.m,d.l,[i.t,[2,d.u]]),i._13(512,d.c,d.c,[]),i._13(512,p.o,p.o,[[2,p.t],[2,p.l]]),i._13(512,o,o,[]),i._13(1024,p.j,function(){return[[{path:"",component:h}]]},[])])})}});