# DAT505-GitHub section3 #

* In this section,

```javascript
//Global variables
var scene, camera, renderer;
var geometry, material, mesh, threejs, color;
var geometey,material1;
var WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;

//GUI - Declare variable
var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

init();
render();

function init(){
  threejs = document.getElementById('threejs');

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0x333F47, 1);
  renderer.shadowMap.Enabled = true;
  renderer.shadowMapSoft = true;

  threejs.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1 , 1000);
  camera.position.set(0, 6, 6);
  camera.lookAt(scene.position);
  scene.add(camera);
```

*  Create an empty scene,a renderer and a basic perspective camera.

```javascript
geometry = new THREE.BoxGeometry(2, 2, 2);
geometry1 = new THREE.CircleBufferGeometry( 2, 32 );


color = Math.random() * 0xffffff;

var material = new THREE.MeshLambertMaterial({
  //ambient: color,
  color: color,
  transparent: true
});

var material1 = new THREE.MeshLambertMaterial({
  //ambient: color,
  color: color,
  transparent: true
});

var material2 = new THREE.MeshLambertMaterial({
  //ambient: color,
  color: color,
  transparent: true
});

var material3 = new THREE.MeshLambertMaterial({
  //ambient: color,
  color: color,
  transparent: true
});
```

* Create Cubes Mesh with materials.

```javascript
mesh1 = new THREE.Mesh(geometry, material1);
mesh1.position.set(0, 0, 0);
mesh1.rotation.set(0, 0, 0);
mesh1.rotation.y = de2ra(-90);
mesh1.scale.set(1, 1, 1);
mesh1.doubleSided = true;
mesh1.castShadow = true;

mesh2 = new THREE.Mesh(geometry, material2);
mesh2.position.set(0, 0, 0);
mesh2.rotation.set(0, 0, 0);
mesh2.rotation.y = de2ra(-90);
mesh2.scale.set(1, 1, 1);
mesh2.doubleSided = true;
mesh2.castShadow = true;

mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
mesh.rotation.set(0, 0, 0);
mesh.rotation.y = de2ra(-90);
mesh.scale.set(1, 1, 1);
mesh.doubleSided = true;
mesh.castShadow = true;

mesh3 = new THREE.Mesh(geometry, material);
mesh3.position.set(0, 0, 0);
mesh3.rotation.set(0, 0, 0);
mesh3.rotation.y = de2ra(-90);
mesh3.scale.set(1, 1, 1);
mesh3.doubleSided = true;
mesh3.castShadow = true;

mesh4 = new THREE.Mesh(geometry, material);
mesh4.position.set(0, 0, 0);
mesh4.rotation.set(0, 0, 0);
mesh4.rotation.y = de2ra(-90);
mesh4.scale.set(1, 1, 1);
mesh4.doubleSided = true;
mesh4.castShadow = true;

mesh5 = new THREE.Mesh(geometry, material);
mesh5.position.set(0, 0, 0);
mesh5.rotation.set(0, 0, 0);
mesh5.rotation.y = de2ra(-90);
mesh5.scale.set(1, 1, 1);
mesh5.doubleSided = true;
mesh5.castShadow = true;

mesh6 = new THREE.Mesh(geometry, material);
mesh6.position.set(0, 0, 0);
mesh6.rotation.set(0, 0, 0);
mesh6.rotation.y = de2ra(-90);
mesh6.scale.set(1, 1, 1);
mesh6.doubleSided = true;
mesh6.castShadow = true;

mesh7 = new THREE.Mesh(geometry, material);
mesh7.position.set(0, 0, 0);
mesh7.rotation.set(0, 0, 0);
mesh7.rotation.y = de2ra(-90);
mesh7.scale.set(1, 1, 1);
mesh7.doubleSided = true;
mesh7.castShadow = true;

//Creat two circles of the same position and size
circle = new THREE.Mesh(geometry1, material);
circle.position.set(0, 0, 0);
circle.rotation.set(0, 0, 0);
circle.rotation.y = de2ra(0);
circle.scale.set(1, 1, 1);
circle.doubleSided = true;
circle.castShadow = true;


circle1 = new THREE.Mesh(geometry1, material3);
circle1.position.set(0, 0, 0);
circle1.rotation.set(0, 0, 0);
circle1.rotation.y = de2ra(-45);
circle1.scale.set(1, 1, 1);
circle1.doubleSided = true;
circle1.castShadow = true;

/*circle2 = new THREE.Mesh(geometry1, material3);
circle2.position.set(0, 0, 0);
circle2.rotation.set(0, 0, 0);
circle2.rotation.y = de2ra(-45);
circle2.scale.set(1, 1, 1);
circle2.doubleSided = true;
circle2.castShadow = true;*/

scene.add(circle);
scene.add(circle1);
/*scene.add(circle2);*/
scene.add(mesh);
scene.add(mesh1);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(mesh6);
scene.add(mesh7);
```
* Creat many cubes of the same position and size

```javascript
var controller = new function() {
  this.scaleX = 1;
  this.scaleY = 1;
  this.scaleZ = 1;
  this.positionX = 0;
  this.positionY = 0;
  this.positionZ = 0;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;
  this.boxColor = color;
  //this.castShadow = true;
  this.boxOpacity = 1;
}();


//控制台1 console1
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  mesh.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  mesh.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  mesh.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  mesh.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
//gui.add( controller, 'castShadow', false ).onChange( function() {
  //mesh.castShadow = controller.castShadow;
//});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material1.opacity = (controller.boxOpacity);
});

//console2
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  mesh2.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh2.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh2.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  mesh2.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  mesh2.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  mesh2.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh2.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh2.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh2.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh2.material.color.setHex( dec2hex(controller.boxColor) );
});
//gui.add( controller, 'castShadow', false ).onChange( function() {
  //mesh.castShadow = controller.castShadow;
//});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material2.opacity = (controller.boxOpacity);
});
//控制台3 console13
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  mesh1.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh1.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh1.scale.z = (controller.scaleZ);
});
var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  mesh1.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  mesh1.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  mesh1.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh1.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh1.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh1.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh1.material.color.setHex( dec2hex(controller.boxColor) );
});
//gui.add( controller, 'castShadow', false ).onChange( function() {
  //mesh.castShadow = controller.castShadow;
//});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});

//控制台4 console14
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  circle.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  circle.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  circle.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  circle.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  circle.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  circle.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  circle.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  circle.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  circle.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  circle.material.color.setHex( dec2hex(controller.boxColor) );
});
//gui.add( controller, 'castShadow', false ).onChange( function() {
  //mesh.castShadow = controller.castShadow;
//});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material2.opacity = (controller.boxOpacity);
});

//控制台5 console15
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  circle1.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  circle1.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  circle1.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  circle1.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  circle1.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  circle1.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  circle1.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  circle1.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  circle1.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  circle1.material.color.setHex( dec2hex(controller.boxColor) );
});
//gui.add( controller, 'castShadow', false ).onChange( function() {
  //mesh.castShadow = controller.castShadow;
//});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material3.opacity = (controller.boxOpacity);
});
}
```

* Setup the GUI controller and consoles.

```javascript
function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}
```
* Color converter

```javascript
function render () {
  requestAnimationFrame(render);
  mesh.rotation.x += 0.04;
  mesh.rotation.y += 0.04;
  mesh1.rotation.x += 0.02;
  mesh1.rotation.y += 0.02;
  mesh2.rotation.x += 0.03;
  mesh2.rotation.y += 0.03;
  mesh3.rotation.x += 0.01;
  mesh3.rotation.y += 0.01;
  mesh4.rotation.x += 0.05;
  mesh4.rotation.y += 0.05;
  mesh5.rotation.x += 0.06;
  mesh5.rotation.y += 0.06;
  mesh6.rotation.x += 0.07;
  mesh6.rotation.y += 0.07;
  mesh7.rotation.x += 0.08;
  mesh7.rotation.y += 0.08;
  circle.rotation.x += 0.01;
  circle.rotation.y += 0.01;
  circle1.rotation.x += 0.01;
  circle1.rotation.y += 0.01;

/*circle.rotation.x += 0.01;
circle.rotation.y += 0.01;
circle1.rotation.x += 0.01;
circle1.rotation.y += 0.01;*/
  renderer.setClearColor("000000");
  // Render the scene
  renderer.render(scene, camera);
};
```
* Continuously rotate the mesh.

```javascript
function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}
```

* Light setting.
