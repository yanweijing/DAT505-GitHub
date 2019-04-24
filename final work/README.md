# DAT505-GitHub final work #
## B161006100    Weijing Yan
### Description ###
* This work is the eight planets orbiting the sun in orbit, you can use the mouse to control the perspective of this galaxy.
* The main point of knowledge is to control the rotation and positional changes of the mesh object in a three-dimensional space.


* In this section,

```javascript
function init() {
          window._this = this;
  container = document.createElement( 'div' );
  document.body.appendChild( container );
}
  ```
* Create a div dom object and add it to the current page.

```javascript
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.z = 250;
```
* Create a perspective projection camera that can appear everything loos small in the distance and big on the contrary, while setting the camera's z-coordinate.

```javascript
scene = new THREE.Scene();

var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );

var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
camera.add( pointLight );
scene.add( camera );
```
* Create a scene first, then create an ambient light to add ambient light to the scene.
At the same time, create a point source, bind the point source to the camera, keep the two in the same position, and add the camera to the scene.

```javascript
Sun = new THREE.Mesh(new THREE.SphereGeometry(12, 16, 16), new THREE.MeshLambertMaterial({
    color: 0xffff00

}));
Sun.name = 'Sun';

```
* Create the sun's mesh object first,
then set the name of the sun.
```javascript
Sun.castShadow = true
```
* Indicates that the sun can cast shadows.
```javascript
Sun.receiveShadow = true
```
* Indicates that the sun can receive projections.

```javascript
Mercury = this.initPlanet('Mercury', 0.02, 0, "#87CEFA", 20, 2);
stars.push(Mercury);

Venus = this.initPlanet('Venus', 0.012, 0, "#FFD700", 30, 4);
stars.push(Venus);

Earth = this.initPlanet('Earth', 0.010, 0, "#6B8E23", 40, 5);
stars.push(Earth);

Mars = this.initPlanet('Mars', 0.008, 0, "#FF0000", 50, 4);
stars.push(Mars);

Jupiter = this.initPlanet('Jupiter', 0.006, 0,"#DEB887", 70, 9);
stars.push(Jupiter);

Saturn = this.initPlanet('Saturn', 0.005, 0, "#B8860B", 100, 7, {
    color: 'rgb(136,75,30)',
    innerRedius: 9,
    outerRadius: 11
});
stars.push(Saturn);

Uranus = this.initPlanet('Uranus', 0.003, 0,"#48D1CC", 120, 4);
stars.push(Uranus);

Neptune = this.initPlanet('Neptune', 0.002, 0,  "#4169E1", 150, 3);
stars.push(Neptune);
```
* Set the planet position, color, angular velocity, and create the corresponding mesh.

```javascript
renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );
```
* First create a renderer, then set the width and height of the renderer, and add the dom object of the rendered 3d module to the page.

```javascript
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
```
* Add logical processing of mouse movements and logical processing after page resizing.

```javascript
windowHalfX = window.innerWidth / 2;
windowHalfY = window.innerHeight / 2;
```
* The half width of the page and the half height of the page.

```javascript
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
```
* Calculate the aspect ratio and update. The next row is to update the projection matrix of the camera.

```javascript
camera.position.x += ( mouseX - camera.position.x ) * .05;
camera.position.y += ( - mouseY - camera.position.y ) * .05;
```
* Change the camera position based on where the mouse is.

```javascript
camera.lookAt( scene.position );
        window._this.move();
```
* Set the camera focus at the scene origin.

```javascript
function initPlanet(name, speed, angle, color, distance, volume, ringMsg) {
    var mesh = new THREE.Mesh(new THREE.SphereGeometry(volume, 16, 16), new THREE.MeshLambertMaterial({color:color}));
    mesh.position.x = distance;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.name = name;


    var track = new THREE.Mesh(new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64, 1), new THREE.MeshBasicMaterial({
        color: 0x888888,
        side: THREE.DoubleSide
    }));
    track.rotation.x = -Math.PI / 2;
    scene.add(track);
  }
  ```
  * Create a grid object corresponding to the planet and set the x coordinate of the planet.
    The following comment is the same as the sun comment above.
    The last is to create the orbit of the planet, by rotating, so that the plane of the orbit is in the Y plane.

```javascript
function moveEachStar(star) {

    star.angle += star.speed;
  }
    ```
* Update the rotation angle of the planet.

```javascript
if (star.angle > Math.PI * star.distance) {
    star.angle -= Math.PI * star.distance;
}

star.Mesh.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle));

}
```
* Calculates the coordinate position of the current planet based on the angle.

```javascript
function move() {
    var _this2 = this;


    for (var i = 0; i < stars.length; i++) {
        this.moveEachStar(stars[i]);
    }


    Sun.rotation.y = Sun.rotation.y == 2 * Math.PI ? 0.0008 * Math.PI : Sun.rotation.y + 0.0008 * Math.PI;

    renderer.render(scene, camera);
}
```
* The planet revolves and the sun rotates.

```javascript
Sun.rotation.y = Sun.rotation.y == 2 * Math.PI ? 0.0008 * Math.PI : Sun.rotation.y + 0.0008 * Math.PI
```
* Update the rotation of the sun.

* GitHub link https://github.com/yanweijing/DAT505-GitHub
