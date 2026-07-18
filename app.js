window.addEventListener('blur', () => document.body.classList.add('mica-inactive'))
window.addEventListener('focus', () => document.body.classList.remove('mica-inactive'))

function switchTab(id) {
  document.querySelectorAll('.page').forEach(p = () => p.classList.remove('active'));
  document.getElementById(id + '-page').classList.add('active);
}

function toggleCustom() {
  document.getElementById('custom-options').style.display =
    (document.getElementById('level').value === 'custom') ? 'block' : 'none';
}
