interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv{
  readonly VITE_APP_TITLE: string
}

interface ImportMeta{
  readonly env: ImportMetaEnv
}
