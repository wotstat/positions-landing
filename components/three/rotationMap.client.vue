<template>
  <div ref="target" class="target"></div>
</template>


<script setup lang="ts">
import { HemisphereLight, Mesh, MeshBasicMaterial, Object3D, PlaneGeometry, Sprite, SpriteMaterial, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useGLTFLoader } from '~/composition/useGLTFLoader';
import { useThree } from '~/composition/useThree';
import { useTextureLoader } from '~/composition/useTextureLoader';

import Positions from './positions'
import { idealMarker, miniMarker } from './markers';
import { useTankOnMap } from '~/composition/useTankOnMap';

const props = defineProps<{
  tank: string;
  map: string;
}>();

const target = ref<HTMLElement | null>(null);

const isVisible = useElementVisibility(target)

const { scene, camera, renderer, startAnimate, stopAnimate, onAnimateList } = useThree(target);
startAnimate()

watch(isVisible, (value) => {
  if (value) startAnimate()
  else stopAnimate()
}, { immediate: true })

const minimapGeometry = new PlaneGeometry(1, 1);
minimapGeometry.rotateX(-Math.PI / 2);

const minimapMaterial = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
const minimap = new Mesh(minimapGeometry, minimapMaterial);
minimap.renderOrder = 1;
scene.add(minimap);

watchEffect(() => {
  minimap.rotation.set(0, props.map == 'paris' ? -Math.PI / 2 : 0, 0);
})

const greenFlag = shallowRef<Object3D>();
const redFlag = shallowRef<Object3D>();
useGLTFLoader('/flags.glb', (path, gltf) => {
  greenFlag.value = gltf.scene.children[0]
  redFlag.value = gltf.scene.children[1]

  const scale = 0.007;
  greenFlag.value.scale.set(scale, scale, scale);
  redFlag.value.scale.set(scale, scale, scale);

  minimap.add(greenFlag.value);
  minimap.add(redFlag.value);


  const mapProps = Positions.maps[props.map];
  if (!mapProps) return;
  greenFlag.value?.position.set(mapProps.green[0], 0, mapProps.green[1]);
  redFlag.value?.position.set(mapProps.red[0], 0, mapProps.red[1]);

  greenFlag.value?.rotateY(Math.random() * Math.PI * 2);
  redFlag.value?.rotateY(Math.random() * Math.PI * 2);
});

// useTankOnMap(scene, () => props.tank, () => props.map);


const map = useTextureLoader(() => `/minimap/${props.map}.webp`, (path, texture) => {
  texture.colorSpace = 'display-p3'
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
});


const hemiLight = new HemisphereLight(0xffffff, 0x8d8d8d, 3);
// hemiLight.position.set(0, 1, 0);
scene.add(hemiLight);

watch(map, (value, old) => {
  if (!value) return;
  minimapMaterial.map = value;
  minimapMaterial.opacity = 1;
  minimapMaterial.needsUpdate = true;
})

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


const idealMarkers = new Object3D();
minimap.add(idealMarkers);

const miniMarkers = new Object3D();
minimap.add(miniMarkers);


watch(() => [props.tank, props.map], ([tank, map]) => {
  if (!tank || !map) return;

  idealMarkers.remove(...idealMarkers.children);
  miniMarkers.remove(...miniMarkers.children);

  const pos = Positions.tanks[props.tank]?.[props.map]
  if (!pos) return;

  for (const ideal of pos.ideal) {
    const marker = idealMarker.clone()
    marker.position.set(ideal[0], 0, ideal[1]);
    idealMarkers.add(marker);
  }

  for (const mini of pos.mini) {
    const marker = miniMarker.clone()
    marker.position.set(mini[0], 0, mini[1]);
    miniMarkers.add(marker);
  }

}, { immediate: true })

watch(() => [greenFlag.value, redFlag.value, map.value] as const, ([rFlag, gFlag, map]) => {
  const mapProps = Positions.maps[props.map];
  if (!mapProps) return;

  rFlag?.position.set(mapProps.green[0], 0, mapProps.green[1]);
  gFlag?.position.set(mapProps.red[0], 0, mapProps.red[1]);
}, { immediate: true })


function onAnimate() {
  orbital.update();
}
onAnimateList.add(onAnimate);

</script>


<style lang="scss" scoped>
.target {
  position: absolute;

  $offset: -10%;

  top: $offset;
  left: $offset;
  right: $offset;
  bottom: $offset;

  @media screen and (max-width: 1000px) {
    // margin-top: -10%;
    // height: 120%;

    // margin-left: -100px;
    // margin-right: -100px;
    // height: 130%;
    // margin-top: -500px;
    // margin-bottom: 20px;
  }
}
</style>