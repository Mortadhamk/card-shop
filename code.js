function increaseQuantity(button) {
      quantityElement = button.parentElement.querySelector('.item-quantity');
      quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  }
  
  function decreaseQuantity(button) {
    quantityElement = button.parentElement.querySelector('.item-quantity');
    quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
    }
    }
    
    function toggleLike(heartIcon) {
    heartIcon.classList.toggle('liked');
    updateTotalPrice();
    } 
    
    
    function removeItem(button) {
    const cartItem = button.parentElement;
    cartItem.remove();
    updateTotalPrice();
    }
    
    function updateTotalPrice() {
    const items = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    
    items.forEach(item => {
      const quantity = parseInt(item.querySelector('.item-quantity').textContent);
      const price = parseInt(item.getAttribute('data-price'));
      const isLiked = item.querySelector('.heart-icon').classList.contains('liked');
  
      totalPrice += quantity * price * (isLiked ? 1.2 : 1);
    });
  
    document.getElementById('total-price').textContent = totalPrice;
  }
  