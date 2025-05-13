// Şehirler ve ipuçları listesi
const cities = [
  {
    name: "Bursa",
    hint: "Uludağ’ın eteklerine kurulmuş bu şehir, Osmanlı'nın ilk başkentidir. Aynı zamanda İskender kebabı ve yeşil türbeleriyle tanınır."
  },
  {
    name: "Konya",
    hint: "Türkiye'nin yüzölçümü en büyük ili olan bu şehir, Mevlana’nın 'Gel, ne olursan ol yine gel' sözüyle bilinir ve semazenleriyle meşhurdur."
  },
  {
    name: "Ankara",
    hint: "Cumhuriyetin kalbi burada atar. Anıtkabir’e ev sahipliği yapan bu şehir, İç Anadolu’nun tam ortasında yer alır."
  },
  {
    name: "İstanbul",
    hint: "İki kıtayı birleştiren tek şehir olan bu yer, Boğaziçi, Ayasofya ve Topkapı Sarayı ile ünlüdür."
  },
  {
    name: "Erzurum",
    hint: "Türkiye’nin en soğuk illerinden biridir. Palandöken Dağı’nda kayak yapabilir, Çifte Minareli Medrese’yi görebilirsin."
  },
  {
    name: "Antalya",
    hint: "Masal gibi plajları, antik kentleri ve güneşiyle Türkiye’nin turizm cennetidir. Aspendos Tiyatrosu buradadır."
  },
  {
    name: "Şanlıurfa",
    hint: "Balıklıgöl ile tanınır. Hz. İbrahim’in doğduğu yer olduğuna inanılır ve Göbeklitepe burada bulunur."
  }
];

// Şehir sırasını tutmak için index
let currentIndex = 0;

// İlk şehir ipucunu göster
document.getElementById("hint").innerText = cities[currentIndex].hint;

// Tahmini kontrol eden fonksiyon
function checkGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase(); // Kullanıcının tahmini
  const correct = cities[currentIndex].name.toLowerCase(); // Doğru şehir
  const result = document.getElementById("result"); // Sonuç yazılacak alan

  if (guess === correct) {
    result.innerText = "✅ Tebrikler! Doğru tahmin!";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Yanlış tahmin. Doğru cevap: " + cities[currentIndex].name;
    result.style.color = "red";
  }

  // 3 saniye sonra bir sonraki şehre geç
  setTimeout(() => {
    currentIndex++; // Bir sonraki şehir
    if (currentIndex < cities.length) {
      document.getElementById("hint").innerText = cities[currentIndex].hint;
      document.getElementById("guess").value = "";
      result.innerText = "";
    } else {
      // Tüm şehirler bitti
      document.getElementById("hint").innerText = "🎉 Tüm şehirleri tahmin ettiniz!";
      document.getElementById("guess").style.display = "none";
      document.querySelector("button").style.display = "none";
    }
  }, 3000);
}
