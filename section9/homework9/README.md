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
```
* Measure all intersections between rays and these objects, with or without descendants. When the result is returned, the intersections are sorted by distance, most recently in the first one, and the intersections are the same as those returned by .intersectObject.Emissive is the property emitted by this material.

```javascript
    audioLoader.load( 'audio/shuu.wav', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( false );
      sound.setVolume( 0.5 );
      sound.play();
    });
```
* Import audio text and set the appropriate properties of the audio, such as volume.

```javascript
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
```
* Enable custom animation types or change the animation being executed.

```javascript
  requestAnimationFrame( animate );

  render();
```
* It sets the animation for the function to be executed, so the browser console will always execute the animate() function.

```javascript
function render() {
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
  ```
* Set the position of the camera on the 3D axis.Point the camera's center point to the location pointed to by scene.position.Get the current position of the mirror from the world matrix
