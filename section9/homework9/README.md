# DAT505-GitHub section9 #

* In this section,

```javascript
var listener = new THREE.AudioListener();
```
* Create an AudioListener and add it to the camera.

```javascript
var sound = new THREE.Audio( listener );
```
* Create a global audio source.

```javascript
var audioLoader = new THREE.AudioLoader();
```
* Load a sound and set it as the Audio object's buffer.

```javascript
var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( 0xff0000 );

    audioLoader.load( 'audio/shuu.wav', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( false );
      sound.setVolume( 0.5 );
      sound.play();
    });

  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
renderer.render( scene, camera );
}
```
* Replaced the audio after the mouse click.

```javascript
function animate() {
  requestAnimationFrame( animate );

  render();
  //stats.update();
}

function render() {
  //Auto rotate camera
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
  ```
  Creat an AudioListener and add it to the camera.Creat a global audio source.
