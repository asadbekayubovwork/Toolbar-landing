import { RouteLocationNormalizedLoaded, Router } from 'vue-router';
import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: RouteLocationNormalizedLoaded;
    $router: Router;
  }
}