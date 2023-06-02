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

const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.slider-prev-button');
const nextButton = document.querySelector('.slider-next-button');

let currentIndex = 0;
const slideCount = 5;
const slideWidth = sliderWrapper.clientWidth;

function slideTo(index) {
  currentIndex = index;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  slideTo(currentIndex);
}

const autoSlideInterval = setInterval(autoSlide, 3000);

prevButton.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  slideTo(currentIndex);
});

nextButton.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex + 1) % slideCount;
  slideTo(currentIndex);
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

  