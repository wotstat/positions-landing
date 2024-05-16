import { Sprite, SpriteMaterial, TextureLoader } from "three";


const loader = new TextureLoader()

export const idealMarker = (() => {
  const texture = loader.load('/markers/waypointTarget.png');
  const material = new SpriteMaterial({ map: texture, transparent: true, depthTest: false });

  const sprite = new Sprite(material);
  sprite.center.set(0.5, 0.18);
  sprite.scale.set(0.15, 0.15, 0.15);

  sprite.renderOrder = 2;

  return sprite;
})()


export const miniMarker = (() => {
  const texture = loader.load('/markers/waypointSolid.png');
  const material = new SpriteMaterial({ map: texture, transparent: true, depthTest: false });

  const sprite = new Sprite(material);
  sprite.center.set(0.5, 0.18);
  sprite.scale.set(0.05, 0.05, 0.05);

  sprite.renderOrder = 2;

  return sprite;
})()
