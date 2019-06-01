var renderer, scene, camera;
var cubes = [];
var rot = 0;
var controls;
var randomSpeedX = [];
var randomRotationX = [];
var randomRotationY = [];


function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0,55 , 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(100, 0, 100);
  scene.add(spotLight);

  var ambLight = new THREE.AmbientLight(0xffffff);
  ambLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);

  scene.add(ambLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x000000);
  renderer.setSize(W, H);

  controls = new THREE.OrbitControls(camera, renderer.domElement);


  for (var x = -10; x <= 10; x += 5) {
  for (var y = -10; y <= 10; y += 5){

  var boxGeometry = new THREE.BoxGeometry(3, 6, 3);

   if (x == -5  && y == -5 ){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
 }
 else if (x == 5 && y == 5){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
} else {
  var boxMaterial = new THREE.MeshLambertMaterial({color: 0x6c6c6c});

 }

 var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x ;
      mesh.position.z = y ;
      mesh.scale.y = 0.5;

      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;

      var randomValueX = (Math.random() * 0.1) - 0.05;
      var randomValueY = (Math.random() * 0.1) - 0.05;

      randomRotationX.push(randomValueY);
      randomRotationY.push(randomValueX);
      randomSpeedX.push(randomValueX);
      //mesh.scale.y = 0.5;
      scene.add(mesh);
      cubes.push(mesh);

  }
  //}
}

  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}


function drawFrame(){
  requestAnimationFrame(drawFrame);

for (var i = 0; i < 5; i++){

  cubes[6].rotation.x  +=  randomSpeedX[6];
  cubes[18].rotation.x +=  randomSpeedX[18];
}



  //});

  renderer.render(scene, camera);
}

init();
drawFrame();
