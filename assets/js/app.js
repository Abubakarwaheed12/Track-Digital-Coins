const toggle=document.querySelector(".dark_mode");
const body=document.body;

function toggle_theme(){
    if(body.classList.contains("darks_mode")){
        body.classList.remove("darks_mode");
    }else{
        body.classList.add("darks_mode");
    }
}

toggle.addEventListener("click", toggle_theme);