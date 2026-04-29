document.addEventListener('DOMContentLoaded', function() {
    
    const ticketPrices = 
    {
        'general': 50,  
        'vip': 150,    
        'premium': 250  
    };

    const form = document.querySelector('form');
    const ticketTypeSelect = document.getElementById('ticket-type');
    const quantityInput = document.getElementById('quantity');
    const totalDisplay = document.getElementById('total-display');
    const phoneInput = document.getElementById('phone');



    // 1. Calculate and Update Total Price
    function updatePrice() 
    {
        const type = ticketTypeSelect.value;
        const quantity = parseInt(quantityInput.value) || 0; // Default to 0 if empty
        
        let pricePerTicket = 0;

        // Check if a valid type is selected
        if (ticketPrices[type]) 
        {
            pricePerTicket = ticketPrices[type];
        }

        const total = pricePerTicket * quantity;

        
        totalDisplay.textContent = '£' + total.toFixed(2);
        
        // Add a glow effect if total > 0
        if (total > 0) 
        {
            totalDisplay.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
        } else 
        {
            totalDisplay.style.textShadow = "none";
        }
    }

    // 2. Validate Phone Number (Basic 10-digit check)
    function validatePhone(phone) 
    {
        
        const cleanPhone = phone.replace(/\D/g, '');
        
        return cleanPhone.length >= 10 && cleanPhone.length <= 15;
    }


    // Update price when user changes ticket type or quantity
    ticketTypeSelect.addEventListener('change', updatePrice);
    quantityInput.addEventListener('input', updatePrice);

    // Handle Form Submission
    form.addEventListener('submit', function(event) 
    {
        event.preventDefault();

      
        const fullname = document.getElementById('fullname').value;
        const phone = phoneInput.value;
        const type = ticketTypeSelect.value;
        
        // Perform Validation
        if (!validatePhone(phone)) 
        {
            alert("Please enter a valid phone number (at least 10 digits).");
            phoneInput.focus();
            phoneInput.style.borderColor = "#ff4444";
            return;
        }

        // Reset error style if valid
        phoneInput.style.borderColor = "rgba(255, 255, 255, 0.3)";

        // Simulate a successful booking
        const total = totalDisplay.textContent;
        alert(`Success!\n\nBooking for: ${fullname}\nTicket: ${type.toUpperCase()}\nTotal to Pay: ${total}\n\nWe have sent a confirmation to your email.`);
        
        // Optional: Reset form
        form.reset();
        updatePrice();
    });
});