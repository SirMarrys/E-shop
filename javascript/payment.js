document.getElementById('differentBilling').addEventListener('change', function() {
    const billingSection = document.getElementById('billingAddressSection');
    if (this.checked) {
        billingSection.classList.remove('hidden');
    } else {
        billingSection.classList.add('hidden');
    }
});