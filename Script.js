document.querySelectorAll('.corte').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.corte').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById('corte-escolhido').value = el.getAttribute('data-value');
  });
});

document.getElementById('form-agendamento').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const msg = `Olá Mathias! Meu nome é ${f.nome.value}, telefone ${f.telefone.value}. ` +
    `Gostaria de agendar um corte ${f.corte.value} em ${f.data.value} às ${f.hora.value}, ` +
    `no(a) ${f.tipo.value}.`;
  const url = `https://wa.me/55[SEU_DDI_SEU_NUMERO]?text=` + encodeURIComponent(msg);
  document.getElementById('btn-whatsapp').href = url;
  document.getElementById('btn-whatsapp').scrollIntoView({ behavior: 'smooth' });
});

const audio = document.getElementById('tronch-beat');
const btnPlay = document.getElementById('btn-play');
btnPlay.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btnPlay.textContent = '⏸';
  } else {
    audio.pause();
    btnPlay.textContent = '🎵';
  }
});
