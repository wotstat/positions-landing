import { Texture, TextureLoader } from "three";


const gltfCache = new Map<string, Texture | Promise<Texture>>();
const loader = new TextureLoader()


async function cachedLoad(path: string, postProcess?: (path: string, texture: Texture) => void) {
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

export function useTextureLoader(path: MaybeRefOrGetter<string>, postProcess?: (path: string, texture: Texture) => void) {
  const textureRef = shallowRef<Texture>();

  watch(() => toValue(path), async (p) => {
    const texture = await cachedLoad(p, postProcess);
    if (toValue(path) == p) textureRef.value = texture;
  }, { immediate: true })

  return textureRef
}