# DAT505-GitHub section5 #

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
  camera.position.set(0, 55, 85);
```
* Set the camera's position.

```javascript
  camera.lookAt(scene.position);
```
* Align the camera to the center of the scene.

```javascript
  var spotLight = new THREE.SpotLight(0xFFFFFF);
```
* Define a spotlight and its color.

```javascript
  spotLight.position.set(0, 1000, 0);
```
* Set the location of this spotlight is(0,1000,0).

```javascript
  scene.add(spotLight);
```
* Add the spotlight to the scene.

```javascript
  renderer = new THREE.WebGLRenderer({antialias:true});
```
* Increase anti-aliasing effect.

```javascript
  renderer.setClearColor(0x17293a);
```
* Set the background color of the window.

```javascript
  renderer.setSize(W, H);
```
* Set window size.

```javascript
  controls = new THREE.OrbitControls(camera, renderer.domElement);
```
* Create a new track controller.

```javascript
  for (var x = -50; x < 50; x += 5)  
    for (var y = -50; y < 50; y += 5)
```
* The codes specify the range of values for X and Y.Generated from the position of -50,one for every 5 units until the position of 10 is generated.


```javascript
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
```
* Define a boxGeometry.

```javascript
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
```
* The color of the material is assigned a random color.

```javascript

      mesh.position.x = x;
      mesh.position.z = y;
```
* Set the position of the meshX axis to X, the position of the Z axis to Y.

```javascript
      mesh.rotation.z = 360*Math.random();
      mesh.rotation.x = 360*Math.random();
      mesh.rotation.y = 360*Math.random();
```
* et the rotation angle of the mesh on the 3D axis.

```javascript
      scene.add(mesh);
      cubes.push(mesh);
    }
  }
  ```

  * Add the mesh in the scene.

```javascript
document.body.appendChild(renderer.domElement);
```
* The domElement element of the renderer renderer represents the canvas in the renderer. All renderings are drawn on the domElement, so the appendChild here means that the domElement is attached to the body, so that the rendered result can be displayed on the page.

```javascript
function drawFrame(){
requestAnimationFrame(drawFrame);}
```
* Refresh animation

```javascript
rot += 0.01;

renderer.render(scene, camera);
}

init();
drawFrame();
```

* Rendering scenes, camera.
