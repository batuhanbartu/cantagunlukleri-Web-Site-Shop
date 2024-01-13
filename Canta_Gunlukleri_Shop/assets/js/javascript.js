/* js/script.js */
function kaydet() {
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    var kullaniciAdi = document.getElementById("kullaniciAdi").value;
    var sifre = document.getElementById("sifre").value;
    var sifreTekrar = document.getElementById("sifreTekrar").value;
    var email = document.getElementById("email").value;

    // Şifre kontrolü
    if (sifre !== sifreTekrar) {
        alert("Şifreler uyuşmuyor!");
        return;
    }

    // JSON verisi oluştur
    var data = {
        isim: isim,
        soyisim: soyisim,
        kullaniciAdi: kullaniciAdi,
        sifre: sifre,
        email: email
    };

    // Fetch API kullanarak POST isteği gönder, HTTP isteğinin POST olduğunu söylüyor 
    fetch("kaydet.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" //"Content-Type": verinin JSON formatında olduğunu belirtiyo
        },
        body: JSON.stringify(data)//JavaScript nesnesini JSON formatına çeviriiyo
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
    })
    .catch(error => {
        alert("hata");
    });
}
