//Dropdwon
function toggleDropdown() {
    const menu = document.getElementById('dropdowncontent');
    const arrow = document.getElementById('arrow');
    menu.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }


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

//welcome to medical
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read Less";
        moreText.style.display = "inline";
    }
}

//search bar
document.getElementById("search-icon").addEventListener("click", function () {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const services = document.querySelectorAll(".test-item");

  let found = false;

  services.forEach(service => {
      const title = service.querySelector("h3")?.textContent.toLowerCase() || "";

      // Reset all borders
      service.style.border = "none";

      if (title.includes(query) && query !== "") {
          // Highlight and scroll to the matching service
          service.style.border = "3px solid #007bff";
          service.scrollIntoView({ behavior: "smooth", block: "center" });
          found = true;
      }
  });

  if (!found && query !== "") {
      alert("No matching service found.");
  }
});

// chatbot.js
