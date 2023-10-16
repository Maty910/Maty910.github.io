let boton = document.querySelector("#tema")
let body = document.querySelector("body")
let modoOscuro = false
boton.addEventListener("click",()=>{
    if(modoOscuro == false){
        modoOscuro = true;
        body.style.backgroundColor = "darkslategrey";
        boton.style.backgroundColor = "#2a815c";
        boton.textContent = "Modo Claro";
        boton.style.borderColor = "#f5f5dc";
        
    }else{
        modoOscuro = false;
        body.style.backgroundColor = "#f5f5dc";
        boton.textContent = "Modo Oscuro";
        boton.style.borderColor = "#f5f5dc";
        boton.style.borderColor = "rgb(27, 26, 26)";
        
    }
    

})

function tick(event) {
    const isChecked = event.target.checked;
    const taskBar = event.target.parentElement.nextElementSibling;
    if (isChecked) {
        taskBar.classList.add('line-through');
    } else {
        taskBar.classList.remove('line-through');
    }
}

let currentIndex = 0;
const dias = document.querySelectorAll(".dia");

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    cambiarPosicion();
  }
}

function moveRight() {
  if (currentIndex < dias.length - 1) {
    currentIndex++;
    cambiarPosicion();
  }
}

function cambiarPosicion() {
  const diaWidth = dias[0].offsetWidth;
  const offset = currentIndex * diaWidth * -1;
  for (let i = 0; i < dias.length; i++) {
    dias[i].style.transform = `translateX(${offset}px)`;
  }
}

