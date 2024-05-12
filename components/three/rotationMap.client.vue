<template>
  <div ref="target" class="target"></div>
</template>


<script setup lang="ts">
import { Mesh, MeshBasicMaterial, PlaneGeometry, Sprite, SpriteMaterial, TextureLoader, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useThree } from '~/composition/useThree';

const target = ref<HTMLElement | null>(null);

const { scene, camera, renderer, animate, onAnimateList } = useThree(target);
animate()

const minimapTexture = new TextureLoader().load('/minimap/paris.jpg');
minimapTexture.colorSpace = 'srgb'
minimapTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

const minimapGeometry = new PlaneGeometry(1, 1);
minimapGeometry.rotateX(-Math.PI / 2);
const minimapMaterial = new MeshBasicMaterial({ map: minimapTexture, });
const minimap = new Mesh(minimapGeometry, minimapMaterial);
scene.add(minimap);

const idealPointTexture = new TextureLoader().load('/markers/waypointTarget.png');

const markerMaterial = new SpriteMaterial({ map: idealPointTexture, transparent: true, depthTest: false });
const idealMarker = new Sprite(markerMaterial);
idealMarker.center.set(0.5, 0.18);

idealMarker.scale.set(0.15, 0.15, 0.15);
idealMarker.position.set(0.2, 0, 0.3);
scene.add(idealMarker);




camera.position.z = 1.5;
camera.position.y = 1;
camera.lookAt(0, 0, 0)

const orbital = new OrbitControls(camera, renderer.domElement);
orbital.enableZoom = false;
orbital.enablePan = false;
orbital.enableDamping = true;
orbital.autoRotate = true;
orbital.minPolarAngle = 0;
orbital.maxPolarAngle = Math.PI / 2.7;
orbital.maxDistance = 2.1;
orbital.minDistance = 2.1;

function onAnimate() {
  orbital.update();
}
onAnimateList.add(onAnimate);

</script>


<style lang="scss" scoped>
.target {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: -100px;
  margin-right: -100px;

  @media screen and (max-width: 1000px) {

    margin-left: -100px;
    margin-right: -100px;
    height: 130%;
    margin-top: -50px;
    margin-bottom: 20px;
  }
}
</style>