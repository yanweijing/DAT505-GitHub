# DAT505-GitHub section8 #

* In this section,

```javascript
var container, stats;
var camera, scene, raycaster, renderer;
```
* Define a space,Performance monitor,camera, scene, raycaster and renderer.

```javascript
var mouse = new THREE.Vector2(), INTERSECTED;
```
* Define a mouse.

```javascript
var radius = 100, theta = 0;
```
* Create a ray value of 100.

```javascript
var object;

var objects = [];
```
* Create objects and groups of objects.

```javascript
init();
animate();
```
* Initialization, Play the game loop and call controls.update.

```javascript
function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );}
```
* Initialize the canvas element.

```javascript
  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );
```
* Perspective projection camera position, judged according to coordinate system.

```javascript
  scene = new THREE.Scene();
```
* Set a scene.

```javascript
  scene.background = new THREE.Color( 0xf0f0f0 );
```
* Set the background color for the scene.

```javascript
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );
```
* Set the directional light, similar to sunlight, set its position to (1, 1, 1,) and add light to the scene.

```javascript
  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
```
* Define an object shape and give it an attribute.

```javascript
  for (var i=0; i<100; i++)}
```
* End condition of the loop.

```javascript
var mtlLoader = new THREE.MTLLoader();
```
* Defining textures.

```javascript
mtlLoader.load("222.mtl", function(materials)}
  materials.preload();
```
* Import a texture, and it is used as a material to import in advance.

```javascript
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
```
* Define an obj model and set the material.

```javascript
objLoader.load("222.obj", function(mesh)}
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh )
          node.castShadow = true;
          node.receiveShadow = true;
```
* The obj model is imported after the material is finished, and the model receives the shadow.

```javascript      
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh);
      ```
* The obj model is imported after the material is finished, and the model receives the shadow.

```javascript
raycaster = new THREE.Raycaster();
```
* Define ray.

```javascript
renderer = new THREE.WebGLRenderer();
```
* Define a renderer.

```javascript
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );
```
* Set the position of the renderer.

```javascript
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( "mousemove", onDocumentMouseMove, false );
function onWindowResize()
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event )
  event.preventDefault();
```
* Add mouse movement monitor to page.Set the camera's position and update, also set the size of the renderer.

```javascript
{mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;}
```
* Mouse point picking - when the mouse clicks on the effect, put it here.

```javascript
//
function animate() {
  requestAnimationFrame( animate );

  render();
  //stats.update();
}
```
* Ray determination.

```javascript
function render() {
  //Auto rotate camera
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();

  //Find intersections
  raycaster.setFromCamera( mouse, camera );
```
* Set the position of the camera on the 3D axis.

```javascript
  var intersects = raycaster.intersectObjects( objects, true );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( Math.random()*0xfffffff );
    }
  } else {


    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;

  renderer.render( scene, camera );
```
* Measure all intersections between rays and these objects, with or without descendants. When the result is returned, the intersections are sorted by distance, most recently in the first one, and the intersections are the same as those returned by .intersectObject.Emissive is the property emitted by this material.
