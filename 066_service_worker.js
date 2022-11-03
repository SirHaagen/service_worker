
navigator.serviceWorker.register("066_service.js");

navigator.serviceWorker.ready
.then(respuesta=> respuesta.active.postMessage("Enviando mensaje a SW"))

navigator.serviceWorker.addEventListener("message", e=>{
  console.log("Se recibió el siguiente mensaje del SW:")
  console.log(e.data)
})