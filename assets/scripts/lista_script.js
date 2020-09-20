const tabla = document.getElementById('tablausuario')

const usuarioGuardadosEnStorage =()=>{
    const usuariosEnStorage = JSON.parse(localStorage.getItem('usuarios'))
    console.log(usuariosEnStorage)
   
    for (let i = 0; i < usuariosEnStorage.length; i += 1) {
        console.log(usuariosEnStorage[i])
       tabla.innerHTML += `
        <tr>
            <th>${i + 1}</th>
            <td>${usuariosEnStorage[i].nombre}</td>
            <td>${usuariosEnStorage[i].cel}</td>
            <td>${usuariosEnStorage[i].email}</td>
       `
        
    }

}

usuarioGuardadosEnStorage()
document.getElementById('limpiar').addEventListener('click',()=>{
    localStorage.clear()
    tabla.innerHTML=""
}

)

const formRegistro =document.getElementById('formRegistro')

const listaDeUsuarios = []

formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()
    swal("Artista Ingresado!", "Dale Click en Refrescar!", "success");
    const inputName = document.getElementById('name').value
    const inputCel = document.getElementById('cel').value
    const inputEmail = document.getElementById('email').value

    const usuario ={
        nombre: inputName,
        cel: inputCel,
        email: inputEmail
    }

//    listaDeUsuarios.push(usuario)
    console.log(usuario)
 //   console.log(listaDeUsuarios)

    guardarEnStorage(usuario)

})
console.log(formRegistro)

const guardarEnStorage = (usuario)=>{
    if(localStorage.getItem('usuarios') == null){
            listaDeUsuarios.push(usuario)
            const usuariosString = JSON.stringify(listaDeUsuarios)
            localStorage.setItem('usuarios', usuariosString)
    }else{
        
        //const listaEnStorage = JSON.parse(localStorage.getItem('usuarios'))

        const listaEnStorage = JSON.parse(localStorage.getItem('usuarios'))

        console.log(listaEnStorage)
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
}

function refresh(){
    window.location.reload("Refresh")
  }
//FUNCIONA OK 03:12 -FINAL