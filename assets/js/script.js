// simple nav toggle for all pages
document.addEventListener('DOMContentLoaded', function(){
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(t => {
    const id = t.nextElementSibling ? t.nextElementSibling.id : null;
    t.addEventListener('click', () => {
      // find sibling ul.nav-list
      const list = t.parentElement.querySelector('.nav-list');
      if(list) list.classList.toggle('show');
    });
  });

  // close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const lists = document.querySelectorAll('.nav-list');
    const togg = document.querySelectorAll('.nav-toggle');
    let insideNav = false;
    togg.forEach(t=> { if(t.contains(e.target)) insideNav = true; });
    lists.forEach(l => {
      if(!l.contains(e.target) && !insideNav && l.classList.contains('show')) l.classList.remove('show');
    });
  });
});

// --- HERO SLIDER ---
document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    {
      img: 'assets/img/sinode.jpg',
      title: 'Persidangan Sinode GPM ke-39 dibuka di Gedung Gereja Marantha Ambon',
      meta: '19–25 Oktober 2025 • Ambon',
      desc: 'Persidangan Sinode Gereja Protestan Maluku (GPM) ke-39 membahas pemilihan pengurus, kebijakan gereja, dan tantangan zaman termasuk perubahan iklim dan disrupsi pangan.',
      link: 'berita.html'
    },
    {
      img: 'assets/img/benteng.jpg',
      title: 'Benteng Amsterdam — Jejak Kolonial di Negeri Hila, Maluku Tengah',
      meta: 'Feature • Sejarah dan Wisata',
      desc: 'Benteng Amsterdam di Ambon menjadi saksi sejarah panjang Maluku sejak abad ke-16. Kini menjadi destinasi wisata sejarah yang ramai dikunjungi.',
      link: 'feature.html'
    },
    {
    img: 'assets/img/penduduk.jpg',
    title: 'Infografik Penduduk Indonesia 2024',
    meta: 'Data Statistik • BPS Indonesia',
    desc: 'Jawa 55,93%, Sumatera 21,81%, Sulawesi 7,36%, Kalimantan 6,18%, Sunda Kecil 5,56%, Maluku-Papua 3,17%.',
    link: 'infografik.html'
  },
  ];

  let current = 0;
  const heroImg = document.getElementById('heroImage');
  const heroTitle = document.getElementById('heroTitle');
  const heroMeta = document.getElementById('heroMeta');
  const heroDesc = document.getElementById('heroDesc');
  const heroLink = document.getElementById('heroLink');

  if(heroImg && slides.length > 1) {
    setInterval(() => {
      current = (current + 1) % slides.length;
      const s = slides[current];

      // animasi lembut saat berganti
      heroImg.classList.add('fade-out');
      heroTitle.classList.add('fade-out');
      setTimeout(() => {
        heroImg.src = s.img;
        heroImg.alt = s.title;
        heroTitle.textContent = s.title;
        heroMeta.textContent = s.meta;
        heroDesc.textContent = s.desc;
        heroLink.href = s.link;
        heroImg.classList.remove('fade-out');
        heroTitle.classList.remove('fade-out');
      }, 600);
    }, 5000); // ganti tiap 5 detik
  }
});
