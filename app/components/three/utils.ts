import type { Object3D } from "three";

export function reparent(child: Object3D, parent: Object3D) {
  const delta = child.position.clone().sub(parent.position);
  child.parent = parent;
  child.position.set(delta.x, delta.y, delta.z);
}
