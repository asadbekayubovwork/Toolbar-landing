import type { App } from "vue"
import { pinia } from "./pinia"
import { router } from "./router"
import { i18n } from "./i18n"

export function setupProviders(app: App) {
  app.use(pinia)
  app.use(router)
  app.use(i18n)
}
