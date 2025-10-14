import { onMounted, onUnmounted, ref } from "vue"
import Lenis from "lenis"

export function useLenis() {
  const lenisInstance = ref<Lenis | null>(null)

  onMounted(() => {
    // Initialize Lenis
    lenisInstance.value = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Animation frame loop
    function raf(time: number) {
      lenisInstance.value?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    lenisInstance.value?.destroy()
  })

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    lenisInstance.value?.scrollTo(target, options)
  }

  return {
    lenis: lenisInstance,
    scrollTo,
  }
}
