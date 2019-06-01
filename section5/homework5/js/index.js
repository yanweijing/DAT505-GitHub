var renderer, scene, camera;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  for (var x = -50; x < 50; x += 5) {
    for (var y = -50; y < 50; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.z = 360*Math.random();
      mesh.rotation.x = 360*Math.random();
      mesh.rotation.y = 360*Math.random();



      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot += 0.01;



  renderer.render(scene, camera);
}

init();
drawFrame();
