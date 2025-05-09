// Optional: Add scroll animation logic if needed
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
});


  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartContainer = document.getElementById("cart-container");
    const totalPriceEl = document.getElementById("total-price");

    let total = 0;
    cart.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeItem(${item.id})">Remove</button>
      `;
      total += item.price;
      cartContainer.appendChild(card);
    });

    totalPriceEl.textContent = `Total: $${total.toFixed(2)}`;

    function removeItem(id) {
      const updatedCart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      location.reload();
    }