// Load reviews dynamically
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("reviews-container");
    data.reviews.forEach(review => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <p><strong>${review.reviewer}</strong> · ★ ${review.rating} · ${review.date}</p>
        <p>${review.text}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading reviews:", err));
