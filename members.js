document.addEventListener("DOMContentLoaded", () => {
  const memberCards = document.querySelectorAll(".member-card");
  let activeCard = null;

  // Function to remove active state from all cards
  const removeActiveStates = () => {
    memberCards.forEach((card) => {
      card.classList.remove("active");
    });
  };

  // Handle card clicks
  memberCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // If clicking the same card that's active, deactivate it
      if (card === activeCard) {
        card.classList.remove("active");
        activeCard = null;
        return;
      }

      // Remove active state from previous card
      removeActiveStates();

      // Set new active card
      card.classList.add("active");
      activeCard = card;
      e.stopPropagation();
    });
  });

  // Handle clicks outside of cards
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".member-card")) {
      removeActiveStates();
      activeCard = null;
    }
  });
});
