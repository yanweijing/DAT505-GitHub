# DAT505-GitHub section1 #

* In this section,    

```javascript
var scene, camera, renderer;
```
* Defined the scene, camera, renderer.

```javascript
var geometry1, material1, line1, mesh1;
```
* Define the properties of the mesh1 model and its shapes and materials.

```javascript
var geometry2, material2, mesh2;
```
* Define the properties of the mesh2 model and its shapes and materials.

```javascript
var light, helper;
```
* Define light and shadow and some helper tools.

```javascript
function init(){
  scene = new THREE.Scene();}
```
* Create an empty scene.

```javascript
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );
```
* Creat a basic perspective camera.

```javascript
renderer = new THREE.WebGLRenderer({antialias:true});
```
* Creat a renderer with Antialiasing.

```javascript
  renderer.setClearColor("0xffff00");
```
* Configure renderer clear color.The green number is the code representation of the color.

```javascript
  renderer.setSize( window.innerWidth, window.innerHeight );
```
* Configure renderer size

```javascript
  document.body.appendChild( renderer.domElement );

}
```
* Append Renderer to DOM.

```javascript
function geometry(){
  geometry1 = new THREE.IcosahedronGeometry( 200,1);}
```
* Create a dodecahedron with a radius of 200.

```javascript
  material1 = new THREE.MeshBasicMaterial( {wireframe: true,color:"#ff0000"});
```
* Define mesh material.

```javascript
  mesh1 = new THREE.Mesh( geometry1, material1 );
```
* Assign the material and shape defined above to this model.

```javascript
  border1 = new THREE.EdgesHelper( mesh1,0xffff00 );
```
* Set the border to the model, you can rotate.

```javascript
  mesh1.position.z = -900;
```
* The position of the model on the Z axis is -900.

```javascript
  mesh1.position.y = -50;
```
* The position of the model on the Y axis is -50.

```javascript
  geometry2 = new THREE.IcosahedronGeometry( 100,1);
```
* Create the second dodecahedron with a radius of 100.

```javascript
  material2 = new THREE.MeshBasicMaterial( {color:"#FF8C00"});
```
* Define mesh2 material.

```javascript
  mesh2 = new THREE.Mesh( geometry2, material2 );
```
* Assign the material and shape defined above to this model(mesh2).

```javascript
  border2 = new THREE.EdgesHelper( mesh2, 0xffff00);
```
* Set the border to the model, you can rotate.(In order to distinguish it from the above border, mark border2).

```javascript
  mesh2.position.z = -900;
```
* The position of the mesh2 on the Z axis is -900.

```javascript
  mesh2.position.y = -50;
```
* The position of the mesh2 on the Y axis is -50.

```javascript
scene.add( helper );
```
* Add helper tool to the scene.

```javascript
scene.add( mesh1 );
```
* Add mesh1 to the scene.

```javascript
scene.add( mesh2 );
```
* Add mesh2 to the scene.

```javascript
var light = new THREE.AmbientLight( 0xffff00 );
```
* Define an ambient light,soft white light.

```javascript
scene.add( light );
```
* Add the ambient light defined above to the scene.

```javascript
var renderer = new THREE.WebGLRenderer();
```
* Generate a renderer object.

```javascript
renderer.shadowMap.enabled = true;
```
* Turn on rendering gas shadow effect.

```javascript
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
```
*  default THREE.PCFShadowMap.

```javascript
var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
```
* reate a DirectionalLight and turn on shadows for the light.

```javascript
light.position.set( 0, 1, 0 ); 	
```
* default; light shining from top.

```javascript
light.castShadow = true;         
```
* default false.

```javascript
scene.add( light );
```
*

```javascript
light.shadow.mapSize.width = 512;  
```
* Set up shadow properties for the light and the default setting map width is 512.

```javascript
light.shadow.mapSize.height = 512;
```
*  The default setting map height is 512.

```javascript
light.shadow.camera.near = 0.5;   
```
* The shaded frustum area near attribute, the attribute value is 0.5.

```javascript
light.shadow.camera.far = 500;    
```
* The shaded frustum area far attribute, the attribute value is 500.

```javascript
var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
```
* Create a sphere that cast shadows (but does not receive them).

```javascript
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
```
* Defines the standard mesh material for the sphere above.

```javascript
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
```
* Gives the shape and standard mesh material defined on this sphere.

```javascript
sphere.castShadow = true;
```
* Shadow of the sphere.

```javascript
sphere.receiveShadow = false;
```
* The sphere cannot accept the shadow.

```javascript
scene.add( sphere );
```
* Add the sphere of the above attribute to the scene.

```javascript
var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
```
* Create a plane that receives shadows (but does not cast them).

```javascript
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
```
* Define a flat standard mesh material (set the color of the plane).

```javascript
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
```
* Combine these 2 objects into a Mesh object called plane.

```javascript
plane.receiveShadow = true;
```
* Flat receiving shadow.

```javascript
scene.add( plane );
```
* Add this plane to the scene.

```javascript
var helper = new THREE.CameraHelper( light.shadow.camera );
```
* Create a helper for the shadow camera (optional).

```javascript
scene.add( helper );
```
* scene.add( border9 ).

```javascript
var render = function () {
  requestAnimationFrame( render );}
```
* Define rendering, render.

```javascript
  mesh1.rotation.x += 0;
  mesh1.rotation.z += 0.01;
```
*  Continuously rotate the mesh.

```javascript
  mesh2.rotation.x += 0;
  mesh2.rotation.z += 0.04;
```
* Continuously rotate the mesh.

```javascript
  renderer.setClearColor("#87CEFA");
```
* Render background color.

```javascript
renderer.render(scene, camera);
```
* Render the scene.

```javascript
init();
geometry();
render();
```
* Variable initialization.
