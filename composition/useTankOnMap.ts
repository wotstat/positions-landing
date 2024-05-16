import { reparent } from "~/components/three/utils";
import { useGLTFLoader } from "./useGLTFLoader";
import type { Scene } from "three";
import Positions from '../components/three/positions'


export function useTankOnMap(scene: Scene, tank: MaybeRefOrGetter<string>, map: MaybeRefOrGetter<string>) {

  const tankScene = useGLTFLoader(() => `/tanks/${toValue(tank)}.glb`, (path, gltf) => {
    const gun = gltf.scene.children.find((child) => child.name.includes('gun'));
    const turret = gltf.scene.children.find((child) => child.name.includes('Turret'));
    if (!gun || !turret) throw new Error('No gun or turret found in tank model');
    reparent(gun, turret);
  });


  watch(tankScene, (value, old) => {
    if (old) scene.remove(old.scene);
    if (!value) return

    const scale = 0.025;
    value.scene.scale.set(scale, scale, scale);
    scene.add(value.scene);
  })

  watch(() => [tankScene.value, toValue(map)] as const, ([tankScene, map]) => {
    if (!tankScene || !map) return;

    const pos = Positions.tanks[toValue(tank)]?.[map]
    if (!pos) return;

    const tankModel = tankScene.scene;
    if (!tankModel) return;

    tankModel.position.set(pos.position[0], 0, pos.position[1]);
    tankModel.rotation.set(0, pos.rotation[0] / 180 * Math.PI, 0);

    const hull = tankModel.children.find((child) => child.name.includes('Turret'));
    hull?.rotation.set(0, pos.rotation[1] / 180 * Math.PI, 0);

    const gun = tankModel.children.find((child) => child.name.includes('gun'));
    gun?.rotation.set(pos.rotation[2] / 180 * Math.PI, 0, 0);
  }, { immediate: true })
}