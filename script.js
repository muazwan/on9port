function showTab(tabId, btn) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none');

  document.getElementById(tabId).style.display = 'block';

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
