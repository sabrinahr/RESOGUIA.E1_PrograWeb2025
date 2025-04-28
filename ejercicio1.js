let ButEnviarOnClick = function(){
    let inputNombre = document.getElementById("nombre")
    let inputCorreo = document.getElementById("correo")
    let textAreaMensaje = document.getElementById("mensaje")
    //1. Verificar si todas as cajas de texto tienen valores
    if (inputNombre.value == "" ||
        inputCorreo.value == "" ||
        textAreaMensaje == "" 
    ){
        console.error("Debe ingresar todos los campos")
        return

        }
    //2. Verificar el formato el correo (@ y .)
        if(!inputCorreo.value.includes("@") ||
           !inputCorreo.value.includes(".")
        ) {
            console.error("Error en el formato del mail.")
            return
        }

    //3. Pintar que se envio correctamente
    console.log("Se envió correctamente. ")
}

let main = function(){
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click", ButEnviarOnClick)
}

main()