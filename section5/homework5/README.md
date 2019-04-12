# DAT505-GitHub section5 #

* In this section,

```javascript
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
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  ```

  * Set up renderer, scene, camera.

```javascript
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -50; x < 50; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -50; y < 50; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.z = 360*Math.random();
      mesh.rotation.x = 360*Math.random();
      mesh.rotation.y = 360*Math.random();



      scene.add(mesh);
      cubes.push(mesh);
    }
  }
  ```

  * Create a two dimensional grid of objects, and position them accordingly.

```javascript
document.body.appendChild(renderer.domElement);
}

function drawFrame(){
requestAnimationFrame(drawFrame);

rot += 0.01;

//cubes.forEach(function(c, i) {
  //c.rotation.x = rot; //Rotate the object that is referenced in c
//});

renderer.render(scene, camera);
}

init();
drawFrame();
```

* forEach takes all the array entries and passes the c as the object, and i as the index.
