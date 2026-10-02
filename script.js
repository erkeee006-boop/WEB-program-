document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const daySchedules = document.querySelectorAll('.day-schedule');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      daySchedules.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetDay = tab.getAttribute('data-day');
      document.getElementById(targetDay).classList.add('active');
    });
  });

  const form = document.getElementById('supportForm');
  const statusMsg = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value.trim();

    if (!topic || !message) {
      statusMsg.textContent = 'Өтінішті толық толтырыңыз!';
      statusMsg.style.color = '#ef4444';
      return;
    }

    statusMsg.textContent = 'Өтінішіңіз сәтті тіркелді! Деканат жауабы 24 сағат ішінде жіберіледі.';
    statusMsg.style.color = '#a3e635';

    document.getElementById('topic').value = '';
    document.getElementById('message').value = '';
  });
});