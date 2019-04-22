
			var container;

			var camera, scene, renderer;
            var particleSystem = undefined,
                stat = undefined,
                control = undefined;

            var Sun = undefined,
                Mercury = undefined,
                Venus = undefined,
                Earth = undefined,
                Mars = undefined,
                Jupiter = undefined,
                Saturn = undefined,
                Uranus = undefined,
                Neptune = undefined,
                stars = [];
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();


			function init() {
                window._this = this;
				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 250;


				scene = new THREE.Scene();

				var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );

				var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
				camera.add( pointLight );
				scene.add( camera );


                Sun = new THREE.Mesh(new THREE.SphereGeometry(12, 16, 16), new THREE.MeshLambertMaterial({
                    color: 0xffff00

                }));
                Sun.name = 'Sun';
                Sun.castShadow = true;
                Sun.receiveShadow = true;
                scene.add(Sun);


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


				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 2;
				mouseY = ( event.clientY - windowHalfY ) / 2;

			}

			//

			function animate() {

				requestAnimationFrame( animate );
				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;

				camera.lookAt( scene.position );
                window._this.move();
				renderer.render( scene, camera );

			}

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


                var star = {
                    name: name,
                    speed: speed,
                    angle: angle,
                    distance: distance,
                    volume: volume,
                    Mesh: mesh
                };
                scene.add(mesh);

                return star;
            }

            function moveEachStar(star) {

                star.angle += star.speed;
                if (star.angle > Math.PI * star.distance) {
                    star.angle -= Math.PI * star.distance;
                }

                star.Mesh.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle));

            }
            function move() {
                var _this2 = this;


                for (var i = 0; i < stars.length; i++) {
                    this.moveEachStar(stars[i]);
                }


                Sun.rotation.y = Sun.rotation.y == 2 * Math.PI ? 0.0008 * Math.PI : Sun.rotation.y + 0.0008 * Math.PI;

                renderer.render(scene, camera);
            }
