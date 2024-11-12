document.addEventListener('DOMContentLoaded', function () {
    // Select the input and the select elements
    let select = document.querySelector('select');
    let cleave = new Cleave('.phone', {
      phone: true,
      phoneRegionCode: 'CA' // Initial region code
    });
  
    // Event listener for changing phone region
    select.addEventListener('change', function () {
      cleave.setPhoneRegionCode(this.value);
      cleave.setRawValue(''); // Clear the input when region changes
    });
  });
  