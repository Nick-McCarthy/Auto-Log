const newFormHandler = async (event) => {
  event.preventDefault();

  const make = document.querySelector('#vehicle-make').value.trim();
  const model = document.querySelector('#vehicle-model').value.trim();
  const year = document.querySelector('#vehicle-year').value.trim();
  const color = document.querySelector('#vehicle-color').value.trim();
  const mileage = document.querySelector('#vehicle-mileage').value.trim();
  const vin = document.querySelector('#vehicle-vin').value.trim();

  if (make && model && year && color && mileage && vin) {
    const response = await fetch(`/api/vehicles`, {
      method: 'POST',
      body: JSON.stringify({ make, model, year, color, mileage, vin }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create vehicle');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/vehicles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete vehicle');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
