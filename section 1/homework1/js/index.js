//Global variables
var scene, camera, renderer;

var geometry1, material1, line1, mesh1;
var geometry2, material2, mesh2;
var light, helper;



function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("0xffff00");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}

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


  var light = new THREE.AmbientLight( 0xffff00 );
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 );
light.castShadow = true;
scene.add( light );

light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;

var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true;
sphere.receiveShadow = false;
scene.add( sphere );

var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );


}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0;
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0;
  mesh2.rotation.z += 0.04;


  renderer.setClearColor("#87CEFA");


  renderer.render(scene, camera);
};




init();
geometry();
render();
