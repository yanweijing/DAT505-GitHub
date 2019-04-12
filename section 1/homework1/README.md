# DAT505-GitHub section1 #

* In this section,    

```javascript
var scene, camera, renderer;

var geometry1, material1, line1, mesh1;
var geometry2, material2, mesh2;
var light, helper;
```

* Setting global variables:scene,object,light

```javascript
function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("0xffff00");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}
```

* Create an empty scene,a basic perspective camera and a renderer with Antialiasing.
Configure renderer clear color and renderer size.

```javascript
function geometry(){
  geometry1 = new THREE.IcosahedronGeometry( 200,1);
  material1 = new THREE.MeshBasicMaterial( {wireframe: true,color:"#ff0000"});
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1 = new THREE.EdgesHelper( mesh1,0xffff00 );
  mesh1.position.z = -900;
  mesh1.position.y = -50;

  geometry2 = new THREE.IcosahedronGeometry( 100,1);

  material2 = new THREE.MeshBasicMaterial( {color:"#FF8C00"});

  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2 = new THREE.EdgesHelper( mesh2, 0xffff00);
  mesh2.position.z = -900;
  mesh2.position.y = -50;


scene.add( helper );


  scene.add( mesh1 );
  scene.add( mesh2 );
  ```

* Setting the coordinates and texture of the object.

```javascript
var light = new THREE.AmbientLight( 0xffff00 ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); 			//default; light shining from top
light.castShadow = true;            // default false
scene.add( light );

light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500;     // default

var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

//scene.add( border9 );

}
```
* Create a DirectionalLight and turn on shadows for the light and set up shadow properties for the light.
Create a sphere that cast shadows (but does not receive them).
Create a plane that receives shadows (but does not cast them).
Create a helper for the shadow camera (optional).

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0; //Continuously rotate the mesh
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0; //Continuously rotate the mesh
  mesh2.rotation.z += 0.04;


  renderer.setClearColor("#87CEFA");

  // Render the scene
  renderer.render(scene, camera);
};




init();
geometry();
render();
```

* Continuously rotate the mesh and set the speed of objects on different axes.
