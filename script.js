const API_URL = "https://glamping-server-production.up.railway.app";

const houses = [
  {
    name: "A-frame «Сосна»",
    price: 6000,
    img: "images/house-1.png",
    desc: "Уютный домик для двоих с панорамным окном и камином."
  },
  {
    name: "A-frame «Кедр»",
    price: 8500,
    img: "images/house-2.png",
    desc: "Просторный домик для семьи, терраса с видом на лес."
  },
  {
    name: "Шатёр «Поляна»",
    price: 4500,
    img: "images/house-3.png",
    desc: "Глэмпинг-шатёр с мягкой кроватью и видом на звёзды."
  }
];

const slidesContainer = document.getElementById("slidesContainer");

houses.forEach(function (house, index) {
  const slide = document.createElement("div");
  slide.className = "slide";
  if (index === 0) {
    slide.classList.add("active");
  }
  slide.innerHTML =
    '<img src="' + house.img + '" alt="' + house.name + '">' +
    '<h3>' + house.name + '</h3>' +
    '<p>' + house.desc + '</p>' +
    '<p class="slide-price">от ' + house.price + ' ₽ / ночь</p>';
  slidesContainer.appendChild(slide);
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let current = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", function () {
  current = current + 1;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
});

prevBtn.addEventListener("click", function () {
  current = current - 1;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
});

const weatherCards = document.getElementById("weatherCards");

const weatherIcons = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  61: "🌦️", 63: "🌧️", 65: "🌧️",
  80: "🌧️", 81: "🌧️", 82: "⛈️",
  71: "🌨️", 73: "🌨️", 75: "❄️"
};

const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

fetch(API_URL + "/weather")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    weatherCards.innerHTML = "";

    const days = data.daily.time;
    const tempMax = data.daily.temperature_2m_max;
    const tempMin = data.daily.temperature_2m_min;
    const codes = data.daily.weather_code;

    for (let i = 0; i < days.length; i++) {
      const date = new Date(days[i]);
      const dayName = dayNames[date.getDay()];
      const icon = weatherIcons[codes[i]] || "🌡️";

      const card =
        '<div class="weather-card">' +
        '<div class="day">' + dayName + '</div>' +
        '<div class="icon">' + icon + '</div>' +
        '<div class="temp">' + Math.round(tempMax[i]) + '°</div>' +
        '<div class="temp-min">ночью ' + Math.round(tempMin[i]) + '°</div>' +
        '</div>';

      weatherCards.innerHTML = weatherCards.innerHTML + card;
    }
  })
  .catch(function () {
    weatherCards.innerHTML = "<p>Не удалось загрузить погоду</p>";
  });

  const houseSelect = document.getElementById("houseSelect");

  houses.forEach(function (house) {
    const option = document.createElement("option");
    option.value = house.price;
    option.textContent = house.name + " — " + house.price + " ₽/ночь";
    houseSelect.appendChild(option);
  });

  const nightsInput = document.getElementById("nightsInput");
  const calcBtn = document.getElementById("calcBtn");
  const calcResult = document.getElementById("calcResult");
  
  calcBtn.addEventListener("click", function () {
    const pricePerNight = Number(houseSelect.value);
    const nights = Number(nightsInput.value);
  
    if (nights < 1) {
      calcResult.textContent = "Введите хотя бы 1 ночь";
      return;
    }
  
    const total = pricePerNight * nights;
  
    calcResult.textContent = "Итого: " + total + " ₽ за " + nights + " ноч.";
  });

 const bookingForm = document.getElementById("bookingForm");
 const formStatus = document.getElementById("formStatus");

 houses.forEach(function (house) {
   const option = document.createElement("option");
   option.value = house.name;
   option.textContent = house.name;
   document.getElementById("houseBooking").appendChild(option);
 });

 const today = new Date().toISOString().split("T")[0];
 document.getElementById("dateFrom").min = today;
 document.getElementById("dateTo").min = today;

  bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const house = document.getElementById("houseBooking").value;
  const dateFrom = document.getElementById("dateFrom").value;
  const dateTo = document.getElementById("dateTo").value;

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  nameError.textContent = "";
  phoneError.textContent = "";

  let valid = true;

  if (name.length < 2) {
    nameError.textContent = "Введите имя";
    valid = false;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    phoneError.textContent = "Введите корректный телефон";
    valid = false;
  }

  const dateError = document.getElementById("dateError");
  dateError.textContent = "";

  if (dateFrom === "" || dateTo === "") {
    dateError.textContent = "Выберите даты заезда и выезда";
    valid = false;
   } else if (dateFrom < today) {
     dateError.textContent = "Дата заезда не может быть в прошлом";
     valid = false;
   } else if (dateTo <= dateFrom) {
     dateError.textContent = "Дата выезда должна быть позже заезда";
     valid = false;
   }

  if (!valid) {
    return;
  }

  formStatus.textContent = "Отправляем...";

  fetch(API_URL + "/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      phone: phone,
      house: house,
      dateFrom: dateFrom,
      dateTo: dateTo
    })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.ok) {
        formStatus.textContent = "Заявка отправлена! Свяжемся с вами.";
        bookingForm.reset();
      } else {
        formStatus.textContent = "Ошибка отправки. Попробуйте позже.";
      }
    })
    .catch(function () {
      formStatus.textContent = "Ошибка отправки. Попробуйте позже.";
    });
});

const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burgerBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

const navLinkItems = navLinks.querySelectorAll("a");
navLinkItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});