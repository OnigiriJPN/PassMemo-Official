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

function generate() {
  const level = document.getElementById('level').value;
  const sets = { sym: "!@#$%^&*", num: "0123456789", upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower: "abcdefghijklmnopqrstuvwxyz" };
  let chars = "";
  if (level === 'strong') chars = sets.sym + sets.num + sets.upper + sets.lower;
  else {
  }
}
