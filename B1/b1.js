function changeColor() {
    document.getElementById("name").style.color = "blue";
    document.body.style.background = "pink";
}
function login(){
    let ps = document.getElementById("mk").value;
    if (ps == "123"){
        document.getElementById("name").innerText="Minh Beso"
    }
}