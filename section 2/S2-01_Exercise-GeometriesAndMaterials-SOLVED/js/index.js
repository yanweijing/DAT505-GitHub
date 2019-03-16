// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#4F9D9D");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(100, 100, 100);


// MATERIAL 1:
//var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
//var material = new THREE.MeshNormalMaterial();

//MATERIAL 3:
/*
var material = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
*/

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
//m


/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
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
*/


/*
//MATERIAL 6 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

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
var  texture = new THREE.TextureLoader().load('texture/chong.jpg');
var  material1 = new THREE.MeshBasicMaterial({map: texture});




var  texture = new THREE.TextureLoader().load('texture/timg.jpg');
var  material2 = new THREE.MeshBasicMaterial({map: texture});

var  texture = new THREE.TextureLoader().load('texture/shan.jpg');
var  material3 = new THREE.MeshBasicMaterial({map: texture});



var mesh1 = new THREE.Mesh( geometry, material2);
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material1 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;




var mesh4 = new THREE.Mesh( geometry, material1 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material2 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;




var geometry = new THREE.DodecahedronGeometry(70,  1);

var mesh7 = new THREE.Mesh( geometry, material1 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material2);
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;


{var mesh9 = new THREE.Mesh( geometry, material1 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material2 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;}


var geometry = new THREE.CylinderBufferGeometry( 70, 50, 200, 320 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

{var mesh11 = new THREE.Mesh( geometry, material1 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material1 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;}



var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
var material = new THREE.MeshBasicMaterial( {color: 0x7b7b7b} );
{var mesh13 = new THREE.Mesh( geometry, material3);
mesh13.position.z = -2000;
mesh13.position.x = 500;
mesh13.position.y = 0;}

// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );//上1
scene.add( mesh3 );//左1
scene.add( mesh4 );//上2
scene.add( mesh5 );//右1
scene.add( mesh6 );//中2
scene.add( mesh7 );//中1圆
scene.add( mesh8 );//右1圆
scene.add( mesh9 );//左1圆
scene.add( mesh10 );//中2圆
scene.add( mesh11 );//
scene.add( mesh12 );//
scene.add( mesh13 );//












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
