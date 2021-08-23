import "./style.css";
import * as THREE from "three";
import * as dat from "dat.gui";
// Debug
var gui = new dat.GUI();
// Canvas
var canvas = document.querySelector("canvas.webgl");
// Scene
var scene = new THREE.Scene();
// Objects
var geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
// Materials
var material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xff0000);
// Mesh
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
// Lights
var pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);
/**
 * Sizes
 */
var sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
window.addEventListener("resize", function () {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
/**
 * Camera
 */
// Base camera
var camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
/**
 * Renderer
 */
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
/**
 * Animate
 */
var clock = new THREE.Clock();
var tick = function () {
    var elapsedTime = clock.getElapsedTime();
    // Update objects
    sphere.rotation.y = 0.5 * elapsedTime;
    // Update Orbital Controls
    // controls.update()
    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};
tick();
