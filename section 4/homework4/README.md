# DAT505-GitHub section4 #

* In this section,

```javascript
var renderer, scene, camera;
```
* Define a renderer, scene, camera.

```javascript
var cubes = [];
```
* A block group is defined.

```javascript
var rot = 0;
```
* Define the value of rot as 0.

```javascript
var controls;
```
* Define controls.

```javascript
var randomSpeedX = [];
```
* An array used to store the speed of the meshX axis.

```javascript
var randomRotationX = [];
```
* An array used to store the rotation of the meshX axis.

```javascript
var randomRotationY = [];
```
* An array used to store the rotation of the meshY axis.

```javascript
function init() {
  scene = new THREE.Scene();}
```
* Initialization scenario.

```javascript
  var W = window.innerWidth,
```
* Define the width of the browse window.

```javascript
      H = window.innerHeight;
```
* Define the height of the browse window.

```javascript
  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
```
* Create a basic perspective camera.

```javascript
  camera.position.set(0,55 , 85);
```
* Set the camera's position.

```javascript
  camera.lookAt(scene.position);
```
* Align the camera to the center of the scene.

```javascript
  var spotLight = new THREE.SpotLight(0xffffff);
```
* Define a spotlight and its color.

```javascript
  spotLight.position.set(100, 0, 100);
```
* Set the location of this spotlight is(100,0,100).

```javascript
  scene.add(spotLight);
```
* Add the spotlight to the scene.

```javascript
  var ambLight = new THREE.AmbientLight(0xffffff);
```
* Define an ambient light and its color.

```javascript
  ambLight.position.set(0, 1000, 0);
```
* Set the location of this ambLight is(0,1000,0).

```javascript
  ambLight.add(spotLight);
```
* Add the spotLight to the ambLight.

```javascript
  scene.add(ambLight);
  scene.add(ambLight);}
```
* Add the ambLight to the scene.

```javascript
  renderer = new THREE.WebGLRenderer({antialias:true});
```
* Increase anti-aliasing effect.

```javascript
  renderer.setClearColor(0x000000);
```
* Set the background color of the window to black.

```javascript
  renderer.setSize(W, H);
```
* Set window size.

```javascript
  controls = new THREE.OrbitControls(camera, renderer.domElement);
```
* Create a new track controller.

```javascript
  for (var x = -10; x <= 10; x += 5)  
  for (var y = -10; y <= 10; y += 5)
```
* The codes specify the range of values for X and Y.Generated from the position of -10,one for every 5 units until the position of 10 is generated.

```javascript
  var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
```
* Define a boxGeometry.

```javascript
   if (x == -5  && y == -5 ){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
 }
 else if (x == 5 && y == 5){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
} else {
  var boxMaterial = new THREE.MeshLambertMaterial({color: 0x6c6c6c});

 }
```
* If x=-5, y=-5, then the boxGeometry at this position will become a random color.else if x=5, y=5,
Then the boxGeometry at this position will become random different from the previous boxGeometry color.
In addition to the two boxGeometry mentioned above, all other boxGeometry will be silver.

```javascript
 var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
```
* Define a mesh, which is the property of the boxGeometry set above.

```javascript
      mesh.position.x = x ;
      mesh.position.z = y ;
      mesh.scale.y = 0.5;
```
* Set the position of the meshX axis to X, the position of the Z axis to Y, and the size on the Y axis to 0.5.

```javascript
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
```
* Set the rotation angle of the mesh on the 3D axis.

```javascript
      var randomValueX = (Math.random() * 0.1) - 0.05;
      var randomValueY = (Math.random() * 0.1) - 0.05;
```
* Define a variable on the X and Y axes and assign it a value.

```javascript
      randomRotationX.push(randomValueY);
      randomRotationY.push(randomValueX);
      randomSpeedX.push(randomValueX);
      scene.add(mesh);
      cubes.push(mesh);

  }
  //}
}
```
* Create a two dimensional grid of objects, and position them accordingly.Control the initial rotation angle of the cube.

```javascript
console.log(cubes);
document.body.appendChild(renderer.domElement);
}
```
* The domElement element of the renderer renderer represents the canvas in the renderer. All renderings are drawn on the domElement, so the appendChild here means that the domElement is attached to the body, so that the rendered result can be displayed on the page.

```javascript
function drawFrame(){
requestAnimationFrame(drawFrame);}
```
* Refresh animation

```javascript
for (var i = 0; i < 5; i++){

cubes[6].rotation.x  +=  randomSpeedX[6];
cubes[18].rotation.x +=  randomSpeedX[18];
}
```
* Put the 6th cube and the 18th cube, the rotation offset of the cubeX axis at these two positions plus its speed.

```javascript
//});

renderer.render(scene, camera);
}

init();
drawFrame();
```

* Set the rotation degrees.
