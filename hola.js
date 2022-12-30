function encriptar() {
    const passSistema = "1233";
    const msgError = "Contraseña Incorrecta";
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;
    if(passSistema==password){
        
        document.getElementById("error").innerHTML = "";
        var encriptado = btoa(mensaje);
        document.getElementById("demo1").innerHTML = encriptado;
        document.getElementById("demo2"),innerHTML = "";
        document.getElementById("msgCodigo").value = "";
    }else{
        document.getElementById("error").innerHTML = msgError;
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("mensajeCodigo").value="";
        document.getElementById("demo2").innerHTML="";
    }

}
function desencriptar(){
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var decrypted = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML = decru


}