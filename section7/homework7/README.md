# DAT505-GitHub section7 #

* In this section,

```javascript
var camera, scene, renderer, mesh;
var image;
```
* Define cameras, scenes, renderers, objects.

```javascript
var mouseX = 0, mouseY = 0;
```
* The state in which the mouse moves on the X and Y axes.

```javascript
var eyesNum = 5;
```
* Number of eyeballs.

```javascript
var eyes = [];
```
* Define an eyeball array.

```javascript
var xPos = [];
```
* Define an array of positions on the X axis.

```javascript
var yPos = [];
```
* Define an array of positions on the Y axis.

```javascript
var xPosMap = [];
```
* The range calculated from the coordinates of the X axis.

```javascript
var yPosMap = [];
```
* The range calculated from the coordinates of the Y axis.

```javascript
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
```
* Define the size of the window half.

```javascript
	container = document.createElement( 'div' );
```
* Create a layer to show.

```javascript
	document.body.appendChild( container );
```
* Add a child element.

```javascript
	scene = new THREE.Scene();
```
* A new scene.

```javascript
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
```
* Initialize the size position of the camera.

```javascript
	camera.position.set( 0, 0, 150 );
```
* Set the position of the camera.

```javascript
  scene.add( camera );
```
* Add the camera in the scene.

```javascript
	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
```
* Add an ambient light to the scene.

```javascript
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );
```
* Define a point source and add it to the camera.

```javascript
	var geometry = new THREE.SphereGeometry( 30, 32, 16 );
```
* Define a sphere .

```javascript
	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});
```
* Define a MeshPhongMaterial.Set its color, mirror, astigmatism, texture.

```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
}
```
* faceVertexUvs:Array of face UV layers,used for mapping textures onto the geometry.

```javascript
for (var i = 0; i < eyesNum; i++)
  mesh = new THREE.Mesh( geometry, material );
```
* i=0, i is smaller than the number of eyeballs, define a new mesh, and give the material.

```javascript
  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;
```
* Position of the eyeball on the X and Y axes

```javascript
  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);
```
* Eye movement range.

```javascript
  mesh.position.x = xPos[i];
  mesh.position.y = yPos[i];
```
* The coordinates assigned to the mesh eye.

```javascript
  var randSize = Math.random() * 0.8;
  mesh.scale.x = randSize;
  mesh.scale.y = randSize;
  mesh.scale.z = randSize;

  scene.add( mesh );
  eyes.push( mesh );
```
* A random number of mesh sizes. Add the mesh to the scene and add the mesh to the eyeball.

```javascript
renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
```
* Set the ratio of pixels.

```javascript
renderer.setSize( window.innerWidth, window.innerHeight );
```
* The placement size of the renderer.

```javascript
container.appendChild( renderer.domElement );
```
* Rendered element.

```javascript
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
```
* Add a mouse movement event listener.

```javascript
window.addEventListener( 'resize', onWindowResize, false );
```
* Add a window size event listener.

```javascript
for (var i = 0; i < eyesNum; i++)

  eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
  eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);
```
* Determines the center position,which is the angle of rotation of the eye at the (0,0) position .-1.14 is the angle of rotation of the eye to the leftmost,and 1.14 is the angle of ratation of the eye to the far right.

```javascript
  if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
  else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
  if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
  else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

  if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
  else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
  if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
  else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

  if (mouseX<590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
  else eyes[4].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.69, 0.2);
  if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
  else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

  if (mouseX<590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
  else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.69, 0.2);
  if (mouseY<810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
  else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);


}
renderer.render( scene, camera );
}
```
 * When the x coordinate of the mouse is less than 140,the meaning of (0,140,-0.2,025)is that when the x coordinate of the mouse is in the interval of 0 to 140, the angle of rotation of the eyeball is -0.2 to 0.25.

```javascript
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}
```
* If the window has changed, calculate this value.

```javascript
function onDocumentMouseMove( event ) {

  mouseX = event.clientX;
  mouseY = event.clientY;
}
```
* Monitor the parameters of moues moving on the X and Y axes.

```javascript
function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
```
* The offset is changed based on the parameters passed in.
