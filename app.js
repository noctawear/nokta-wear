const container = document.getElementById("packageContainer");
const modal = document.getElementById("packageModal");
const modalData = document.getElementById("modalData");
const closeBtn = document.querySelector(".close");

fetch("data.json")
.then(res => res.json())
.then(data => {

  data.packages.forEach(pack => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${pack.image}" alt="${pack.name}">
      <div class="card-content">
        <h3>${pack.name}</h3>
        <p>${pack.description}</p>
        <div class="price">${pack.price} MAD</div>
        <button onclick="openPackage(${pack.id})">Choose Package</button>
      </div>
    `;

    container.appendChild(card);
  });

  window.openPackage = function(id){

    const selected = data.packages.find(p => p.id === id);

    modal.style.display = "flex";

    modalData.innerHTML = `
      <img src="${selected.image}">
      <h2>${selected.name}</h2>
      <p>${selected.description}</p>

      <select id="size">
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
      </select>

      <input type="number" id="qty" value="1" min="1">
      <input type="text" id="fullname" placeholder="Full Name">
      <input type="text" id="city" placeholder="City">
      <input type="text" id="phone" placeholder="Phone Number">

      <a class="whatsapp-btn" onclick="sendWhatsApp('${selected.name}', ${selected.price})">
        Order via WhatsApp
      </a>
    `;
  }

  window.sendWhatsApp = function(name, price){

    const size = document.getElementById("size").value;
    const qty = document.getElementById("qty").value;
    const fullname = document.getElementById("fullname").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    const total = qty * price;

    const message = `NOCTA WEAR Order

Package: ${name}
Size: ${size}
Quantity: ${qty}
Total: ${total} MAD

Name: ${fullname}
City: ${city}
Phone: ${phone}`;

    window.open(`https://wa.me/212643911326?text=${encodeURIComponent(message)}`);
  }

});

closeBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
}
