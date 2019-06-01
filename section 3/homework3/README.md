# DAT505-GitHub section3 #

* In this section,

```javascript
//Global variables
var scene, camera, renderer;
```
* Define a scene, camera, renderer.

```javascript
var geometry, material, mesh, threejs, color;
```
* Define the shape, material, color, and other properties of the object.

```javascript
var geometey,material1;
```
* Define the shape, material1.

```javascript
var WIDTH = window.innerWidth,
```
* Define the width of the receive window.

```javascript
HEIGHT = window.innerHeight;
```
* Define the height of the receive window.

```javascript
//GUI - Declare variable
var gui = null;
```
* GUI - Declare variable.

```javascript
//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};
```
* Convert the degree to an offset angle.Angle and radians conversion.

```javascript
init();
render();
```
* Call the init method to initialize, call the render method to render.

```javascript

function init(){
  threejs = document.getElementById('threejs');}
```
* Get the element with the ID threejs on the page.

```javascript
scene = new THREE.Scene();
```
* Create an empty scene.

```javascript
  renderer = new THREE.WebGLRenderer({antialias:true});
```
* Create a renderer.

```javascript
  renderer.setSize(WIDTH, HEIGHT);
```
* Develop the width and height of the renderer.

```javascript
  renderer.setClearColor(0x333F47, 1);
```
* Set the background color of the scene.

```javascript
  renderer.shadowMap.Enabled = true;
```
* Renderer turns on shadow rendering.

```javascript
  renderer.shadowMapSoft = true;
```
* Renderer turns on soft shadow rendering.

```javascript
  threejs.appendChild(renderer.domElement);
```
* Add a cut point in threejs.

```javascript
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1 , 1000);
```
* Create a basic perspective camera.

```javascript
  camera.position.set(0, 6, 6);
```
* Set the camera's position.

```javascript
  camera.lookAt(scene.position);
```
* Align the camera to the center of the scene.

```javascript
  scene.add(camera);
```
* Add the camera in the scene.

```javascript
geometry = new THREE.BoxGeometry(2, 2, 2);
```
* Create a Cube Mesh with material.

```javascript
geometry1 = new THREE.CircleBufferGeometry( 2, 32 );
```
* Create another Cube Mesh with material and give different name.

```javascript
color = Math.random() * 0xffffff;
```
* Generate random colors.

```javascript
var material = new THREE.MeshLambertMaterial
```
* Define a material that is faint and not bright.

```javascript
  //ambient: color,
  color: color,
```
* ambient: color.

```javascript
  transparent: true
```
* Set the window to be transparent.

```javascript
var material1 = new THREE.MeshLambertMaterial
```
* Define a material1 that is faint and not bright.

```javascript
  //ambient: color,
  color: color,
```
* ambient: color

```javascript
  transparent: true
```
* Set the window to be transparent.

```javascript
var material2 = new THREE.MeshLambertMaterial
```
* Define a material2 that is faint and not bright.

```javascript
  //ambient: color,
  color: color,
```
* ambient: color

```javascript
  transparent: true
```
* Set the window to be transparent.

```javascript
var material3 = new THREE.MeshLambertMaterial
```
* Define a material3 that is faint and not bright.

```javascript
  //ambient: color,
  color: color,
```
* ambient: color

```javascript
  transparent: true
```
* Set the window to be transparent.

```javascript
mesh1 = new THREE.Mesh(geometry, material1);
mesh1.position.set(0, 0, 0);
mesh1.rotation.set(0, 0, 0);
mesh1.rotation.y = de2ra(-90);
mesh1.scale.set(1, 1, 1);
mesh1.doubleSided = true;
mesh1.castShadow = true;
```
* Set the shape and material1 of mesh1, the position is (0,0,0).Set mesh1 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh2 = new THREE.Mesh(geometry, material2);
mesh2.position.set(0, 0, 0);
mesh2.rotation.set(0, 0, 0);
mesh2.rotation.y = de2ra(-90);
mesh2.scale.set(1, 1, 1);
mesh2.doubleSided = true;
mesh2.castShadow = true;
```
* Set the shape and material2 of mesh2, the position is (0,0,0).Set mesh1 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
mesh.rotation.set(0, 0, 0);
mesh.rotation.y = de2ra(-90);
mesh.scale.set(1, 1, 1);
mesh.doubleSided = true;
mesh.castShadow = true;
```
* Set the shape and material of mesh, the position is (0,0,0).Set mesh to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh3 = new THREE.Mesh(geometry, material);
mesh3.position.set(0, 0, 0);
mesh3.rotation.set(0, 0, 0);
mesh3.rotation.y = de2ra(-90);
mesh3.scale.set(1, 1, 1);
mesh3.doubleSided = true;
mesh3.castShadow = true;
```
* Set the shape and material2 of mesh3, the position is (0,0,0).Set mesh3 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh4 = new THREE.Mesh(geometry, material);
mesh4.position.set(0, 0, 0);
mesh4.rotation.set(0, 0, 0);
mesh4.rotation.y = de2ra(-90);
mesh4.scale.set(1, 1, 1);
mesh4.doubleSided = true;
mesh4.castShadow = true;
```
* Set the shape and material of mesh4, the position is (0,0,0).Set mesh4 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh5 = new THREE.Mesh(geometry, material);
mesh5.position.set(0, 0, 0);
mesh5.rotation.set(0, 0, 0);
mesh5.rotation.y = de2ra(-90);
mesh5.scale.set(1, 1, 1);
mesh5.doubleSided = true;
mesh5.castShadow = true;
```
* Set the shape and material of mesh6, the position is (0,0,0).Set mesh5 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh6 = new THREE.Mesh(geometry, material);
mesh6.position.set(0, 0, 0);
mesh6.rotation.set(0, 0, 0);
mesh6.rotation.y = de2ra(-90);
mesh6.scale.set(1, 1, 1);
mesh6.doubleSided = true;
mesh6.castShadow = true;
```
* Set the shape and material of mesh6, the position is (0,0,0).Set mesh6 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
mesh7 = new THREE.Mesh(geometry, material);
mesh7.position.set(0, 0, 0);
mesh7.rotation.set(0, 0, 0);
mesh7.rotation.y = de2ra(-90);
mesh7.scale.set(1, 1, 1);
mesh7.doubleSided = true;
mesh7.castShadow = true;
```
* Set the shape and material of mesh7, the position is (0,0,0).Set mesh7 to 0. The initial arc is 0.The rotation angle of the y-axis is -90, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
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
```
* Creat two circles of the same position and size. The position is (0,0,0).Set circle1 to 0. The initial arc is 0.The rotation angle of the y-axis is -45, and the size is (1, 1, 1), receiving double-sided material and receiving shadows.

```javascript
scene.add(circle);
scene.add(circle1);
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
  this.boxOpacity = 1;
}();
```
* Set the size, position, rotation angle, color, and transparency of the controller on the 3D axis.

```javascript
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
```
* Set the first console, then set the Scale box, the adjustable range in the X axis is (0.1, 5), the adjustable range in the Y axis is (0.1, 5), and the adjustable range in the Z axis is ( 0.1, 5).

```javascript
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
```
* Set the Position box, the adjustable range in the X axis is (-5, 5), the adjustable range in the Y axis is (-5, 5), and the adjustable range in the Z axis is (-5, 5).

```javascript
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
```
* Set the Rotationn box, the adjustable range in the X axis is (-180, 180), the adjustable range in the Y axis is (-180, 180), and the adjustable range in the Z axis is (-180, 180).

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material1.opacity = (controller.boxOpacity);
});
```
* Set the color and transparency adjustment of the adjustment box, the transparency adjustment range is (0.1, 1).

```javascript
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
```
* Set the second console, then set the Scale box, the adjustable range in the X axis is (0.1, 5), the adjustable range in the Y axis is (0.1, 5), and the adjustable range in the Z axis is ( 0.1, 5).

```javascript
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
```
* Set the Position box, the adjustable range in the X axis is (-5, 5), the adjustable range in the Y axis is (-5, 5), and the adjustable range in the Z axis is (-5, 5).

```javascript
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
```
* Set the Rotationn box, the adjustable range in the X axis is (-180, 180), the adjustable range in the Y axis is (-180, 180), and the adjustable range in the Z axis is (-180, 180).

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh2.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material2.opacity = (controller.boxOpacity);
});
```
* Set the color and transparency adjustment of the adjustment box, the transparency adjustment range is (0.1, 1).

```javascript
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
```
* Set the third console, then set the Scale box, the adjustable range in the X axis is (0.1, 5), the adjustable range in the Y axis is (0.1, 5), and the adjustable range in the Z axis is ( 0.1, 5).

```javascript
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
```
* Set the Position box, the adjustable range in the X axis is (-5, 5), the adjustable range in the Y axis is (-5, 5), and the adjustable range in the Z axis is (-5, 5).

```javascript
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
```
* Set the Rotationn box, the adjustable range in the X axis is (-180, 180), the adjustable range in the Y axis is (-180, 180), and the adjustable range in the Z axis is (-180, 180).

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh1.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});
```
* Set the color and transparency adjustment of the adjustment box, the transparency adjustment range is (0.1, 1).

```javascript
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
```
* Set the forth console, then set the Scale box, the adjustable range in the X axis is (0.1, 5), the adjustable range in the Y axis is (0.1, 5), and the adjustable range in the Z axis is ( 0.1, 5).

```javascript
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
```
* Set the Position box, the adjustable range in the X axis is (-5, 5), the adjustable range in the Y axis is (-5, 5), and the adjustable range in the Z axis is (-5, 5).

```javascript
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
```
* Set the Rotationn box, the adjustable range in the X axis is (-180, 180), the adjustable range in the Y axis is (-180, 180), and the adjustable range in the Z axis is (-180, 180).

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  circle.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material2.opacity = (controller.boxOpacity);
});
```
* Set the color and transparency adjustment of the adjustment box, the transparency adjustment range is (0.1, 1).

```javascript
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
```
* Set the fifth console, then set the Scale box, the adjustable range in the X axis is (0.1, 5), the adjustable range in the Y axis is (0.1, 5), and the adjustable range in the Z axis is ( 0.1, 5).

```javascript
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
```
* Set the Position box, the adjustable range in the X axis is (-5, 5), the adjustable range in the Y axis is (-5, 5), and the adjustable range in the Z axis is (-5, 5).

```javascript
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
```
* Set the Rotationn box, the adjustable range in the X axis is (-180, 180), the adjustable range in the Y axis is (-180, 180), and the adjustable range in the Z axis is (-180, 180).

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  circle1.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material3.opacity = (controller.boxOpacity);
});
}
```
* Set the color and transparency adjustment of the adjustment box, the transparency adjustment range is (0.1, 1).

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
* Color converter.Conversion from decimal to hexadecimal.

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

  renderer.setClearColor("000000");
  // Render the scene
  renderer.render(scene, camera);
};
```
* Continuously rotate the mesh.

```javascript
function lightingSystem(){}
```
* Lighting system function.

```javascript
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);
```
* Define a white parallel light with an intensity of 0.15.The position of the light is(6,3,9).The light is named Back light,finally add the object3d in the scene.

```javascript
  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);
```
* Define a white parallel light with an intensity of 0.35.The position of the light is(-6,-3,0).The light is named Key light,finally add the object3d in the scene.

```javascript
  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);}
```
* Define a white parallel light with an intensity of 0.55.The position of the light is(9,9,6).The light is named Fill light,finally add the object3d in the scene.

```javascript
  var spotLight = new THREE.SpotLight( 0xffffff );
```
* Define a white spotlight.

```javascript
  spotLight.position.set( 3, 30, 3 );
```
* The position of the spotlight is(3,30,3)

```javascript
  spotLight.castShadow = true;
```
* Then the light source will produce a shadow.

```javascript
  spotLight.shadow.mapSize.width = 2048;
```
* The shadow map width is 2048.

```javascript
  spotLight.shadow.mapSize.height = 2048;
```
* The shadow map height is 2048.

```javascript  
  spotLight.shadow.camera.near = 1;
```
* A value of 1 from the source can produce a shadow.

```javascript  
  spotLight.shadow.camera.far = 4000;
```
* A value of 4000 no longer produces a shadow.

```javascript
  spotLight.shadow.camera.fov = 45;
```
* The angle of the spotlight is 45, which determines the direction of attention.

```javascript
  scene.add( spotLight );
```
* Add the spotlight in the scene.
