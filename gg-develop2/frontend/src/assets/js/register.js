        let ticketCount = 1;
        const basePrice = 15;
        const processingFee = 2;

        function updatePriceSummary() {
            const subtotal = ticketCount * basePrice;
            const total = subtotal + processingFee;
            
            document.querySelector('.price-row:first-child').innerHTML = 
                `<span>Tickets (${ticketCount})</span><span>$${subtotal.toFixed(2)}</span>`;
            document.querySelector('.price-total').innerHTML = 
                `<span>Total</span><span>$${total.toFixed(2)}</span>`;
        }

        function incrementTickets() {
            if (ticketCount < 5) {
                ticketCount++;
                document.getElementById('ticketCount').textContent = ticketCount;
                updatePriceSummary();
            }
        }

        function decrementTickets() {
            if (ticketCount > 1) {
                ticketCount--;
                document.getElementById('ticketCount').textContent = ticketCount;
                updatePriceSummary();
            }
        }