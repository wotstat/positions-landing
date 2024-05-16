import { GLTFLoader, type GLTF } from "three/examples/jsm/Addons.js";


const gltfCache = new Map<string, GLTF | Promise<GLTF>>();
const loader = new GLTFLoader()


async function cachedLoad(path: string, postProcess?: (path: string, gltf: GLTF) => void) {
  if (gltfCache.has(path)) {
    const cached = gltfCache.get(path);
    if (cached instanceof Promise) {
      return await cached;
    } else {
      return cached;
    }
  }

  const promise = loader.loadAsync(path);
  gltfCache.set(path, promise);

  const result = await promise;
  gltfCache.set(path, result);
  if (postProcess) postProcess(path, result);

  return result;
}

export function useGLTFLoader(path: MaybeRefOrGetter<string>, postProcess?: (path: string, gltf: GLTF) => void) {
  const scene = shallowRef<GLTF>();

  watch(() => toValue(path), async (p) => {
    const gltf = await cachedLoad(p, postProcess);
    if (toValue(path) == p) scene.value = gltf;
  }, { immediate: true })

  return scene
}