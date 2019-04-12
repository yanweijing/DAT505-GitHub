# DAT505-GitHub section2 #

* In this section,

```javascript
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#5A8296");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```

* First,create an empty scene,set its size,colour and renderer.

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);

var geometry = new THREE.CylinderGeometry( 50, 50, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

// MATERIAL 1:
//var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
//var material = new THREE.MeshNormalMaterial();

//MATERIAL 3:

var material1 = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});


//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):

var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});



//MATERIAL 6 (shiny material):
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



//MATERIAL 6 (combination of shiny + non-shinny):
var material6 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});


/*
//MATERIAL 7 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/
```

* Set various parameters for object size and texture.

```javascript
var texture = new THREE.TextureLoader().load("texture/black.jpg");

var material1 = new THREE.MeshBasicMaterial({map:texture});

var texture = new THREE.TextureLoader().load("texture/further.jpg");

var material2 = new THREE.MeshBasicMaterial({map:texture});

var texture = new THREE.TextureLoader().load("texture/orange.jpg");

var material3 = new THREE.MeshBasicMaterial({map:texture});
```

* Set the texture of different materials.

```javascript
var mesh1 = new THREE.Mesh( geometry, material2 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material2 );
mesh2.position.z = -1000;
mesh2.position.x =200;
mesh2.position.y = 100;

var mesh3 = new THREE.Mesh( geometry, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;



{var mesh4 = new THREE.Mesh( geometry, material2 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x = -100;
mesh5.position.y = 200;

var mesh6 = new THREE.Mesh( geometry, material2 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;}
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x =-100;
mesh5.position.y = 200;

var mesh8 = new THREE.Mesh( geometry, material2 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh10 = new THREE.Mesh( geometry, material2 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry, material2 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material2 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;

var geometry = new THREE.ConeBufferGeometry( 50, 70, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var mesh6 = new THREE.Mesh( geometry, material3 );
mesh6.position.z = -1000;
mesh6.position.y = -60;

var geometry = new THREE.CircleBufferGeometry( 40, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var mesh7 = new THREE.Mesh( geometry, material1 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh9 = new THREE.Mesh( geometry, material1 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;



// ------------------------------------------------

// Add mesh to scene
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

* Set the material for the object and the size of the object on different axes and then add them into the scene.

```javascript
var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1; //Continuously rotate the mesh
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh
  mesh12.rotation.y = rot;


  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
```

* Set the velocity of the object on the x and y axes,those objects can rotate in a Loop.
