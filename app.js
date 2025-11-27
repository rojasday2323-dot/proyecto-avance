const buttons = document.querySelectorAll('.menu button');
const panels = document.querySelectorAll('.panel');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('visible'));

    btn.classList.add('active');
    panels[index].classList.add('visible');
  });
});
