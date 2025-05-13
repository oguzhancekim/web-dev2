document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.querySelector('input[name="ad"]').value;
    const soyad = document.querySelector('input[name="soyad"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked')?.value || "Belirtilmedi";
    const bolge = document.querySelector('select[name="bolge"]').value;
    const yorum = document.querySelector('textarea[name="yorum"]').value;

    const formVerisi = {
      ad,
      soyad,
      email,
      cinsiyet,
      bolge,
      yorum
    };

    localStorage.setItem("formVerisi", JSON.stringify(formVerisi));
    window.location.href = "sonuc.html";
  });
});
const formData = JSON.parse(localStorage.getItem("formVerisi"));

if (formData) {
  const tablo = document.getElementById("veriTablosu");
  const satir = document.createElement("tr");

  for (let i in formData) {
    const hucre = document.createElement("td");
    hucre.textContent = formData[i];
    satir.appendChild(hucre);
  }

  tablo.appendChild(satir);
}
