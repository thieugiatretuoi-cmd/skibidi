function huy(){
    document.getElementById("long").style.color="red";
    document.getElementById("long").innerText="yellow";
    document.getElementById("long").textContent="yellow";
}
let count = 0;
function next(){
    document.getElementById("number").innerText=count;
    count++;
}
function changeImage(){
    document.getElementById("changeImage").src="../IMG/images2.png";
}


function tenham(){
    let data = document.getElementById("txt_input").value;
    document.getElementById("txt_gicungduoc").innerText=data;
    if (data === "123"){
        alert("đăng nhập thành công")
    }else{
        alert("thất bại")
    }
}