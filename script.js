
// Fungsi untuk menghitung BMI
function hitungBMI() {
  const beratBadan = parseFloat(document.getElementById('beratBadan').value);
  const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
  const usia = parseInt(document.getElementById('usia').value);

 // Validasi input (berat dan tinggi harus angka positif)
 if (beratBadan <= 0 || tinggiBadan <= 0 || isNaN(usia) || usia <= 0) {
  alert('Silakan isi semua field dengan angka positif.');
  return;
}

  if (!jenisKelamin) {
    alert('Pilih jenis kelamin terlebih dahulu.');
    return;
  }

  // Hitung BMI
  const tinggiMeter = tinggiBadan / 100;
  const bmi = beratBadan / (tinggiMeter * tinggiMeter);

  // Tentukan kategori BMI
  let kategori = '';
  if (bmi < 18.5) {
    kategori = 'Kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = 'Normal (Ideal)';
  } else if (bmi >= 25 && bmi < 29.9) {
    kategori = 'Kelebihan berat badan';
  } else {
    kategori = 'Kegemukan (Obesitas)';
  }

  // Tampilkan hasil BMI di halaman web
  document.getElementById('kategori').textContent = `Kategori: ${kategori}`;
  document.getElementById('hasilBMI').textContent = `BMI: ${bmi.toFixed(2)}`;
  document.getElementById('statusKategori').textContent = `Status Kategori: ${kategori}`;
  document.getElementById('antaraBMI').textContent = `Hasil: Rentang BMI ${bmi - 2} hingga ${bmi + 2}`;
  
  // Tampilkan informasi usia dan jenis kelamin
  const infoUsiaJenisKelamin = document.getElementById('infoUsiaJenisKelamin');
  const jenisKelaminText = jenisKelamin.value === 'pria' ? 'Pria' : 'Wanita';
  infoUsiaJenisKelamin.textContent = `Usia: ${usia} tahun, Jenis Kelamin: ${jenisKelaminText}`;

  // Tampilkan saran berdasarkan kategori BMI
  const saranParagraph = document.getElementById('saran');
  const nasihatParagraph = document.getElementById('nasihat');

  if (kategori === 'Kekurangan berat badan') {
    saranParagraph.textContent = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.';
    nasihatParagraph.textContent = 'Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.';
  } else if (kategori === 'Normal (Ideal)') {
    saranParagraph.textContent = 'Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.';
    nasihatParagraph.textContent = 'Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.';
  } else if (kategori === 'Kelebihan berat badan') {
    saranParagraph.textContent = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.';
    nasihatParagraph.textContent = 'Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.';
  } else {
    saranParagraph.textContent = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.';
    nasihatParagraph.textContent = 'Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.';
  }

  // Tampilkan daftar penyakit berdasarkan kategori BMI
  const penyakitList = document.getElementById('penyakit');
  penyakitList.innerHTML = '';

  if (kategori === 'Kekurangan berat badan') {
    const penyakitKurus = ['Anemia', 'Osteoporosis', 'Gangguan pertumbuhan', 'Gangguan reproduksi'];
    penyakitKurus.forEach(penyakit => {
      const listItem = document.createElement('li');
      listItem.textContent = penyakit;
      penyakitList.appendChild(listItem);
    });
  } else if (kategori === 'Normal (Ideal)') {
    const penyakitNormal = ['Tidak ada'];
    penyakitNormal.forEach(penyakit => {
      const listItem = document.createElement('li');
      listItem.textContent = penyakit;
      penyakitList.appendChild(listItem);
    });
  } else if (kategori === 'Kelebihan berat badan') {
    const penyakitGemuk = ['Hipertensi', 'Diabetes melitus', 'Penyakit jantung'];
    penyakitGemuk.forEach(penyakit => {
      const listItem = document.createElement('li');
      listItem.textContent = penyakit;
      penyakitList.appendChild(listItem);
    });
  } else {
    const penyakitObesitas = ['Kanker', 'Gangguan pernapasan', 'Stroke'];
    penyakitObesitas.forEach(penyakit => {
      const listItem = document.createElement('li');
      listItem.textContent = penyakit;
      penyakitList.appendChild(listItem);
    });
  }

  // Tampilkan bagian hasil dengan hasil perhitungan BMI
  document.getElementById('result').classList.remove('hidden');

  // Navigasi ke bagian hasil
  const resultSection = document.getElementById('result');
  resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk mengatur ulang formulir
function resetForm() {
  document.getElementById('myForm').reset();
  document.getElementById('result').classList.add('hidden');
}

// Untuk pengiriman formulir
const formBMI = document.getElementById('myForm');
formBMI.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validasi apakah semua form telah diisi
  const beratBadan = document.getElementById('beratBadan').value;
  const tinggiBadan = document.getElementById('tinggiBadan').value;
  const usia = document.getElementById('usia').value;

  if (beratBadan === '' || tinggiBadan === '' || usia === '') {
    alert('Semua form harus diisi sebelum melakukan submit.');
    return;
  }

  hitungBMI();
});
