const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




const colorRed = new THREE.Color(0xff0000);
const colorGreen = new THREE.Color(0x00ff00);
const colorBlue = new THREE.Color(0x0000ff);
const colorYellow = new THREE.Color(0xffff00);
const colorMagenta = new THREE.Color(0xff00ff);
const colorCyan = new THREE.Color(0x00ffff);

const cubeMaterials = [
  new THREE.MeshPhongMaterial({
    color: colorRed,
    shininess: 100,
    specular: 0x111111,
  }), // Front
  new THREE.MeshPhongMaterial({
    color: colorGreen,
    shininess: 100,
    specular: 0x111111,
  }), // Back
  new THREE.MeshPhongMaterial({
    color: colorBlue,
    shininess: 100,
    specular: 0x111111,
  }), // Top
  new THREE.MeshPhongMaterial({
    color: colorYellow,
    shininess: 100,
    specular: 0x111111,
  }), // Bottom
  new THREE.MeshPhongMaterial({
    color: colorMagenta,
    shininess: 100,
    specular: 0x111111,
  }), // Left
  new THREE.MeshPhongMaterial({
    color: colorCyan,
    shininess: 100,
    specular: 0x111111,
  }), // Right
];


const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
cube.position.set(0, 10, -50); // set cube position
scene.add(cube);


const geometry = new THREE.TorusKnotGeometry( 20, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.7, wireframe: true, side: THREE.DoubleSide } );
const torusKnot = new THREE.Mesh( geometry, material );

torusKnot.position.set(0, -50, -100); // set cube position
scene.add( torusKnot );

function animate_torus () {
  requestAnimationFrame( animate_torus );

  torusKnot.rotation.x -= 0.01;
  torusKnot.rotation.y -= 0.01;

  renderer.render( scene, camera );
}

animate_torus();


const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(20, 20, 20);

scene.background = new THREE.Color(0x404040);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 1;
camera.position.y = 1;
camera.position.x = 1;

// Add text to the cube
const fontLoader = new THREE.FontLoader();
const textMaterial = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  shininess: 100,
  specular: 0x111111,
});
fontLoader.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  function (font) {
    const textGeometry = new THREE.TextGeometry("HOME", {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    const textMeshFront = new THREE.Mesh(textGeometry, textMaterial);
    // position text in the middle of the cube
    textMeshFront.position.x = -2.5;
    textMeshFront.position.y = 0;
    textMeshFront.position.z = 7.5;

    cube.add(textMeshFront);
  }
);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Add click event listener to the cube
const canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener("click", () => {
  window.location.href = "index.html";
});

// zoom in and out with mouse wheel in direction of the camera
canvas.addEventListener("wheel", (event) => {
  camera.position.y += event.deltaY * 0.01;
  camera.position.x += event.deltaY * 0.01;
  camera.position.z = Math.max(0.1, camera.position.z);
// change light position with camera position
  light.position.y = camera.position.y;
  light.position.x = camera.position.x;
  light.position.z = camera.position.z;
  console.log(camera.position);

  
});



// Resize window
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
