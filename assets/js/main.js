const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const formData = new FormData(this);
      const object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });

      axios.post('https://northwind.vercel.app/api/customers', object)
        .then(response => {
          console.log('Successful:', response);
          alert('An error occurred while sending data!');
          
        })

    });