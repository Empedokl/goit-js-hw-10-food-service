const ref = {
  input: document.querySelector('.js-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
startPage();
function startPage() {
  ref.body.classList.add(Theme.LIGHT);
  const savedTheme = localStorage.getItem('Theme');
  if (JSON.parse(savedTheme) === Theme.DARK) {
    ref.body.classList.add(Theme.DARK);
    ref.input.checked = true;
  }
}

const handleChange = event => {
  const { checked } = event.currentTarget;
  if (checked) {
    ref.body.classList.add(Theme.DARK);
    ref.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    ref.body.classList.add(Theme.LIGHT);
    ref.body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
};

ref.input.addEventListener('change', handleChange);
