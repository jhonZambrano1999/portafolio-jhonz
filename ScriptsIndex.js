let menuInvisible=false;
//funcion que oculta o muestra el menú
function mostrarOculatarMenu(){

    if(menuInvisible){
        document.getElementById("nav").classList="";
        menuInvisible=false;
    
    }else{  
        document.getElementById("nav").classList="responsive";
        menuInvisible=true;
    
    
    }

}
function seleccionar(){
    //se oculta cuando eligue una opcion
    document.getElementById("nav").classList="";
    menuInvisible=false;
}

function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("spring");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}

//funciones de habilidades
window.onscroll=function(){
    efectoHabilidades();
}

function mostrar(){
    document.getElementById('im').style.display='block';
}



