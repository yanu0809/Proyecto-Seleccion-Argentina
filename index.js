// Funcionalidad del menú hamburguesa
_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
}
// Cards
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verificar el estado actual del modo oscuro en el local storage
const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Aplicar el modo oscuro si está habilitado
if (darkModeEnabled) {
  body.classList.add('dark-mode');
}

// Cambiar el estado del modo oscuro al hacer clic en el botón
darkModeToggle.addEventListener('click', function() {
  // Alternar la clase del modo oscuro en el body
  body.classList.toggle('dark-mode');

  // Guardar el estado actual del modo oscuro en el local storage
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkModeEnabled.toString());
});

// Slider

// Obtener referencias a los elementos del DOM
const sliderImages = document.querySelectorAll('.slider-image');
const sliderIndicators = document.querySelectorAll('.slider-indicator span');

let currentSlide = 0;

// Mostrar la imagen actual y activar el indicador correspondiente
function showSlide(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  sliderIndicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Avanzar al siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

// Cambiar al slide seleccionado por el indicador
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);

// Avanzar al siguiente slide cada 3,5 segundos
setInterval(nextSlide, 3500);

// Asignar evento de clic a cada indicador
sliderIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    goToSlide(i);
  });
});

// Swiper
let swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Validación de longitud mínima
    if (username.length < 6 || password.length < 6) {
      alert("Los campos deben tener al menos 6 caracteres.");
      return false;
    }
  
    // Validación de contraseña sin caracteres especiales
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un número. No se permiten caracteres especiales.");
      return false;
    }
  
    // Redirección a index.html
    window.location.href = "index.html";
    return false;
  }
// Redireccion de registro a formulario
  function redirigir() {
    window.location.href = "formulario.html";
  }
