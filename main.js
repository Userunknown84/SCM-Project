//Dropdwon
function toggleDropdown() {
    const menu = document.getElementById('dropdowncontent');
    const arrow = document.getElementById('arrow');
    menu.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }

//Slide Bar
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideTimer;

function showSlides(n = null) {
  if (n !== null) {
    slideIndex = n - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  slideTimer = setTimeout(() => showSlides(), 2000);
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex + n);
}
function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(n);
}

showSlides();

//card
const staffBtn = document.getElementById("staff-read-more");//professional staff
  const staffShort = document.getElementById("staff-short");
  const staffMore = document.getElementById("staff-more");

  staffBtn.addEventListener("click", function () {
    if (staffMore.style.display === "none") {
      staffMore.style.display = "block";
      staffBtn.textContent = "SHOW LESS";
    } else {
      staffMore.style.display = "none";
      staffBtn.textContent = "READ MORE";
    }
  });
  const priceBtn = document.getElementById("price-read-more");//affordable price
  const priceShort = document.getElementById("price-short");
  const priceMore = document.getElementById("price-more");

  priceBtn.addEventListener("click", function () {
    if (priceMore.style.display === "none") {
      priceMore.style.display = "block";
      priceBtn.textContent = "SHOW LESS";
    } else {
      priceMore.style.display = "none";
      priceBtn.textContent = "VIEW PRICELIST";
    }
  });

  const readMoreBtn = document.getElementById("read-more-btn");//Insurance Partner
  const moreText = document.getElementById("more-text");
  const shortText = document.getElementById("short-text");

  readMoreBtn.addEventListener("click", function () {
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      readMoreBtn.textContent = "SHOW LESS";
    } else {
      moreText.style.display = "none";
      readMoreBtn.textContent = "READ MORE";
    }
  });


//doctor
  const doctorInfo = {
    "Dr. Devi Prasad Shetty": "Cardiac Surgeon – Founder of Narayana Health. Studied at Kasturba Medical College.",
    "Dr. Naresh Trehan": "Cardiovascular and Cardiothoracic Surgeon – Founder of Medanta. Studied at King George’s Medical College.",
    "Dr. Randeep Guleria": "Pulmonologist – Former Director of AIIMS Delhi. Specialized in respiratory medicine.",
    "Dr. A. Velumani": "Pathologist – Founder of Thyrocare. Holds a PhD in Thyroid Biochemistry.",
    "Dr. Sudhansu Bhattacharyya": "Cardiothoracic Surgeon – Known for innovations in heart surgery. Alumni of AIIMS.",
    "Dr. B. M. Hegde": "Cardiologist and Medical Scientist – Former VC of Manipal University. Studied at Stanley Medical College.",
    "Dr. Ashok Seth": "Interventional Cardiologist – Chairman of Fortis Escorts Heart Institute. Trained at AIIMS and abroad.",
    "Dr. Gagandeep Kang": "Virologist – Expert in enteric infections and vaccines. Studied at Christian Medical College, Vellore.",
    "Dr. Lalit Kant": "Epidemiologist – Former Head of Epidemiology at ICMR. Specialized in infectious diseases.",
    "Dr. N. K. Venkataramana": "Neurosurgeon – Founder of Advanced Neurosciences Institute. Studied at Bangalore Medical College."
  };

  const selectElement = document.getElementById("doctor-select");
  const detailView = document.getElementById("detail-view");
  const selectView = document.getElementById("select-view");
  const doctorDetails = document.getElementById("doctor-details");
  const backButton = document.getElementById("back-button");

  selectElement.addEventListener("change", function () {
    const selectedDoctor = selectElement.value;
    if (doctorInfo[selectedDoctor]) {
      doctorDetails.textContent = doctorInfo[selectedDoctor];
      selectView.style.display = "none";
      detailView.style.display = "block";
    }
  });

  backButton.addEventListener("click", function () {
    selectElement.value = "Choose a doctor";
    detailView.style.display = "none";
    selectView.style.display = "block";
  });



// chatbot.js

const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

chatIcon.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
    chatIcon.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    chatIcon.style.display = 'block';
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    chatBody.innerHTML = ''; 
    userInput.value = ''; 
    userInput.focus();
});

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        userMessage.style.margin = '5px 0';
        userMessage.style.color = '#2980b9';
        chatBody.appendChild(userMessage);
        userInput.value = '';

        try {
            const response = await fetch(`http://127.0.0.1:5000/medical-query?query=${encodeURIComponent(message)}`);
            const data = await response.json();

            const botMessage = document.createElement('div');
            if (data.advice) {
                botMessage.textContent = data.advice;
                botMessage.style.textAlign = 'left';
                botMessage.style.margin = '5px 0';
                botMessage.style.color = '#7f8c8d';
            } else {
                botMessage.textContent = data.message || "Sorry, I couldn't understand your query.";
                botMessage.style.textAlign = 'left';
                botMessage.style.margin = '5px 0';
                botMessage.style.color = '#7f8c8d';
            }

            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; 
        } catch (error) {
            console.error("Error with API request:", error);
            const botMessage = document.createElement('div');
            botMessage.textContent = "Sorry, there was an error processing your request. Please try again later.";
            botMessage.style.textAlign = 'left';
            botMessage.style.margin = '5px 0';
            botMessage.style.color = '#7f8c8d';
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; 
        }
    }
}
