function generate(){

    
    let complexity = document.getElementById("password").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = "";

    
    for(var i = 0; i <= complexity; i++){
        pasword = password + values.charAt(Math.floor(Math.random() *Math.floor(value.length - 1)))
    }
    document.getElementById("context").values = password;
}