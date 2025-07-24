// Get the elements
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const dateContainer = document.getElementById('dateContainer');

  option1.addEventListener('click', (e) => {
    //e.preventDefault();
    option1.checked = true;
    option2.checked = false;
    option1.setAttribute('aria-checked', 'true');
    option2.setAttribute('aria-checked', 'false');
    dateContainer.classList.add('visuallyhidden');
    dateContainer.setAttribute('aria-hidden', 'true');
  });

  option2.addEventListener('click', (e) => {
    //e.preventDefault();
    option2.checked = true;
    option1.checked = false;
    option2.setAttribute('aria-checked', 'true');
    option1.setAttribute('aria-checked', 'false');
    dateContainer.classList.remove('visuallyhidden');
    dateContainer.setAttribute('aria-hidden', 'false');
  });
