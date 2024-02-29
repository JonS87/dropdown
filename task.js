const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValue[0].addEventListener('click', function() {
  let classAvailability = dropdownList.className.includes('dropdown__list_active');
  if (classAvailability) {
    dropdownList.classList.remove('dropdown__list_active');
  } else {
    dropdownList.classList.add('dropdown__list_active');
  }
});

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].onclick = () => {
    dropdownValue[0].textContent = dropdownItem[i].textContent;
    dropdownList.classList.remove('dropdown__list_active');
  }

  let link = dropdownItem[i].getElementsByClassName('dropdown__link')[0];
  link.addEventListener('click', (event) => {
    event.preventDefault();
  })
}