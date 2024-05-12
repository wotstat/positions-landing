
import { BoxGeometry, Mesh, MeshBasicMaterial, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export function useThree(element: Ref<HTMLElement | null>) {
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 1000);
  // const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  })

  const { width, height } = useElementBounding(element);

  const onAnimateList = new Set<() => void>();

  function animate() {
    requestAnimationFrame(animate);
    onAnimateList.forEach(fn => fn());
    renderer.render(scene, camera);
  }

  onMounted(() => {
    nextTick(() => {
      element.value?.appendChild(renderer.domElement);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.domElement.style.position = 'absolute';
    })
  });

  watch(() => [width.value, height.value], ([width, height]) => {
    const min = Math.min(width, height);
    renderer.setSize(min, min);
  });

  return {
    animate,
    onAnimateList,
    scene,
    camera,
    renderer
  }
}