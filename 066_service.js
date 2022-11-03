
self.addEventListener("install", e=> console.log("Instalando Service Worker"))

self.addEventListener("activate", ()=> console.log("El service worker está activo"))

self.addEventListener("error", e=> console.error(e))

self.addEventListener("fetch", ()=> console.log("Service worker interceptando petición"))

self.addEventListener("message", e=>{
  console.log("Se recibió el siguiente mensaje:")
  console.log(e.data)
  e.source.postMessage("Enviando mensaje a usuario")
})