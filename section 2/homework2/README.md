# DAT505-GitHub section2 #

* In this section,

```javascript
var scene = new THREE.Scene();
```
* creat a scene.

```javascript
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
```
* Create a basic perspective camera.

```javascript
var renderer = new THREE.WebGLRenderer({antialias:true});
```
* Create a renderer with Antialiasing.

```javascript
renderer.setClearColor("#5A8296");
```
* Configure renderer clear color.

```javascript
renderer.setSize( window.innerWidth, window.innerHeight );
```
* Configure renderer size.

```javascript
document.body.appendChild( renderer.domElement );
```
* Append Renderer to DOM.

```javascript
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
```
* Define an ambient light, name it light1, and add it to the scene.

```javascript
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```
* Define a point source, name it light2, and add it to the scene.

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
```
* Create a cube with a side length of 100.

```javascript
var geometry = new THREE.CylinderGeometry( 50, 50, 20, 32 );
```
* Define a cylinder.

```javascript
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
```
* Define a standard mesh material.

```javascript
var material1 = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
```
* Define another standard mesh material,name it material1,and set the color transparency, the opacity value is 1.

```javascript
var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
```
* Define a material that is faint and not bright.Set the color of this material.The values of lightMap, emissiveMap, and specularMap are all null.

```javascript
var material2 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
```
* Define a material that simulates a shiny surface with  highlights,and define the parameters and values of the above aspects.

```javascript
var material6 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
```
* Define a standard mesh material,set color,rough value is 0.5 and metal value
is 0.5.

```javascript
var texture = new THREE.TextureLoader().load("texture/black.jpg");

var material1 = new THREE.MeshBasicMaterial({map:texture});
```
* Define a texture and add this texture to material 1.

```javascript
var texture = new THREE.TextureLoader().load("texture/further.jpg");

var material2 = new THREE.MeshBasicMaterial({map:texture});
```
* Define the second texture and add this texture to material 2.

```javascript
var texture = new THREE.TextureLoader().load("texture/orange.jpg");

var material3 = new THREE.MeshBasicMaterial({map:texture});
```
* Define the third texture and add this texture to material 3.

```javascript
var mesh1 = new THREE.Mesh( geometry, material2 );
mesh1.position.z = -1000;
mesh1.position.y = 100;
```
* The shape and material2 assigned to mesh1.Then define the position of mesh1 on the z-axis to be -1000 and the position on the y-axis to be 100.

```javascript
var mesh2 = new THREE.Mesh( geometry, material2 );
mesh2.position.z = -1000;
mesh2.position.x =200;
mesh2.position.y = 100;
```
* The shape and material2 assigned to mesh2.Then define the position of mesh2 on the z-axis to be -1000 ,the position on the y-axis to be 100 and the position on the x-axis to be 200.

```javascript
var mesh3 = new THREE.Mesh( geometry, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;
```
* The shape and material2 assigned to mesh3.Then define the position of mesh3 on the z-axis to be -1000 ,the position on the y-axis to be 100 and the position on the x-axis to be -200.

```javascript
var mesh4 = new THREE.Mesh( geometry, material2 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;
```
* The shape and material2 assigned to mesh4.Then define the position of mesh4 on the z-axis to be -1000 ,the position on the y-axis to be 200 and the position on the x-axis to be 100.

```javascript
var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x = -100;
mesh5.position.y = 200;
```
* The shape and material2 assigned to mesh5.Then define the position of mesh5 on the z-axis to be -1000 ,the position on the y-axis to be 200 and the position on the x-axis to be -100.

```javascript
var mesh6 = new THREE.Mesh( geometry, material2 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;
```
* The shape and material2 assigned to mesh6.Then define the position of mesh6 on the z-axis to be -1000 ,the position on the y-axis to be -100 and the position on the x-axis to be 0.

```javascript
var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x =-100;
mesh5.position.y = 200;
```
* The shape and material2 assigned to mesh5.Then define the position of mesh5 on the z-axis to be -1000 ,the position on the y-axis to be 200 and the position on the x-axis to be -100.

```javascript
var mesh8 = new THREE.Mesh( geometry, material2 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;
```
* The shape and material2 assigned to mesh8.Then define the position of mesh8 on the z-axis to be -1000 ,the position on the y-axis to be -100 and the position on the x-axis to be -200.

```javascript
var mesh10 = new THREE.Mesh( geometry, material2 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;
```
* The shape and material2 assigned to mesh10.Then define the position of mesh10 on the z-axis to be -1000 ,the position on the y-axis to be -100 and the position on the x-axis to be 200.

```javascript
var mesh11 = new THREE.Mesh( geometry, material2 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;
```
* The shape and material2 assigned to mesh11.Then define the position of mesh11 on the z-axis to be -1000 ,the position on the y-axis to be -200 and the position on the x-axis to be -100.

```javascript
var mesh12 = new THREE.Mesh( geometry, material2 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;
```
* The shape and material2 assigned to mesh12.Then define the position of mesh12 on the z-axis to be -1000 ,the position on the y-axis to be -200 and the position on the x-axis to be 100.

```javascript
var geometry = new THREE.ConeBufferGeometry( 50, 70, 32 );
```
* Define a cone and set the length, width and height.

```javascript
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
```
* Define a base material and set the color of this material.

```javascript
var mesh6 = new THREE.Mesh( geometry, material3 );
mesh6.position.z = -1000;
mesh6.position.y = -60;
```
* The shape and material3 assigned to mesh6.Then define the position of mesh12 on the z-axis to be -1000 and the position on the y-axis to be -60.

```javascript
var geometry = new THREE.CircleBufferGeometry( 40, 32 );
```
* Define a cylinder and set properties.

```javascript
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
```
* Define a base material and set the color of this material.

```javascript
var mesh7 = new THREE.Mesh( geometry, material1 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;
```
* The shape and material1 assigned to mesh7.Then define the position of mesh7 on the z-axis to be -1000 ,the position on the y-axis to be 0 and the position on the x-axis to be -100.

```javascript
var mesh9 = new THREE.Mesh( geometry, material1 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;
```
* The shape and material1 assigned to mesh9.Then define the position of mesh9 on the z-axis to be -1000 ,the position on the y-axis to be 0 and the position on the x-axis to be 100.


```javascript
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
```
* Add meshes to scene.

```javascript
var rot = 0;
```
* Define a rate of turning value of 0.


```javascript
// Render Loop
var render = function () {
  requestAnimationFrame( render );}
```
* Define a render and define functions.

```javascript
  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;
```
* Continuously rotate the mesh1,mesh1 has a speed of rot+1 on the x-axis and a speed of rot+1 on the y-axis.

```javascript
  mesh2.rotation.x = rot;
  mesh2.rotation.y = rot;
```
* Continuously rotate the mesh2,mesh2 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  mesh3.rotation.x = rot+2;
  mesh3.rotation.y = rot+2;
```
* Continuously rotate the mesh3,mesh3 has a speed of rot+2 on the x-axis and a speed of rot+2 on the y-axis.

```javascript
  mesh4.rotation.x = rot;
  mesh4.rotation.y = rot;
```
* Continuously rotate the mesh4,mesh4 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  mesh5.rotation.x = rot+2;
  mesh5.rotation.y = rot+2;
```
* Continuously rotate the mesh5,mesh5 has a speed of rot+2 on the x-axis and a speed of rot+2 on the y-axis.

```javascript
  mesh6.rotation.x = rot+1;
  mesh6.rotation.y = rot+1;
```
* Continuously rotate the mesh6,mesh6 has a speed of rot+1 on the x-axis and a speed of rot+1 on the y-axis.

```javascript
  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;
```
* Continuously rotate the mesh7,mesh7 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  mesh8.rotation.x = rot+2;
  mesh8.rotation.y = rot+2;
```
* Continuously rotate the mesh8,mesh8 has a speed of rot+2 on the x-axis and a speed of rot+2 on the y-axis.

```javascript
  mesh9.rotation.x = rot;
  mesh9.rotation.y = rot;
```
* Continuously rotate the mesh9,mesh9 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  mesh10.rotation.x = rot+2;
  mesh10.rotation.y = rot+2;
```
* Continuously rotate the mesh10,mesh10 has a speed of rot+2 on the x-axis and a speed of rot+2 on the y-axis.

```javascript
  mesh11.rotation.x = rot;
  mesh11.rotation.y = rot;
```
* Continuously rotate the mesh11,mesh11 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  mesh12.rotation.x = rot;
  mesh12.rotation.y = rot;
```
* Continuously rotate the mesh12,mesh12 has a speed of rot on the x-axis and a speed of rot on the y-axis.

```javascript
  renderer.render(scene, camera);
```
* Render the scene.

```javascript
render();
```
* Run the function render.
