 //! index 
 const ilceler = [
    { name: "Adalar", url: "https://www.adalar.bel.tr/" },
    { name: "Arnavutköy", url: "https://www.arnavutkoy.bel.tr/" },
    { name: "Ataşehir", url: "https://www.atasehir.bel.tr/" },
    { name: "Avcılar", url: "https://www.avcilar.bel.tr/" },
    { name: "Bağcılar", url: "https://www.bagcilar.bel.tr/" },
    { name: "Bahçelievler", url: "https://www.bahcelievler.bel.tr/" },
    { name: "Bakırköy", url: "https://www.bakirkoy.bel.tr/" },
    { name: "Başakşehir", url: "https://www.basaksehir.bel.tr/" },
    { name: "Bayrampaşa", url: "https://www.bayrampasa.bel.tr/" },
    { name: "Beşiktaş", url: "https://www.besiktas.bel.tr/" },
    { name: "Beykoz", url: "https://www.beykoz.bel.tr/" },
    { name: "Beylikdüzü", url: "https://www.beylikduzu.bel.tr/" },
    { name: "Beyoğlu", url: "https://www.beyoglu.bel.tr/" },
    { name: "Büyükçekmece", url: "https://www.bcekmece.bel.tr/" },
    { name: "Çatalca", url: "https://www.catalca.bel.tr/" },
    { name: "Çekmeköy", url: "https://www.cekmekoy.bel.tr/" },
    { name: "Esenler", url: "https://www.esenler.bel.tr/" },
    { name: "Esenyurt", url: "https://www.esenyurt.bel.tr/" },
    { name: "Eyüpsultan", url: "https://www.eyupsultan.bel.tr/" },
    { name: "Fatih", url: "https://www.fatih.bel.tr/" },
    { name: "Gaziosmanpaşa", url: "https://www.gaziosmanpasa.bel.tr/" },
    { name: "Güngören", url: "https://www.gungoren.bel.tr/" },
    { name: "Kadıköy", url: "https://www.kadikoy.bel.tr/" },
    { name: "Kağıthane", url: "https://www.kagithane.bel.tr/" },
    { name: "Kartal", url: "https://www.kartal.bel.tr/" },
    { name: "Küçükçekmece", url: "https://www.kucukcekmece.bel.tr/" },
    { name: "Maltepe", url: "https://www.maltepe.bel.tr/" },
    { name: "Pendik", url: "https://www.pendik.bel.tr/" },
    { name: "Sancaktepe", url: "https://www.sancaktepe.bel.tr/" },
    { name: "Sarıyer", url: "https://www.sariyer.bel.tr/" },
    { name: "Silivri", url: "https://www.silivri.bel.tr/" },
    { name: "Sultanbeyli", url: "https://www.sultanbeyli.bel.tr/" },
    { name: "Sultangazi", url: "https://www.sultangazi.bel.tr/" },
    { name: "Şile", url: "https://www.sile.bel.tr/" },
    { name: "Şişli", url: "https://www.sisli.bel.tr/" },
    { name: "Tuzla", url: "https://www.tuzla.bel.tr/" },
    { name: "Ümraniye", url: "https://www.umraniye.bel.tr/" },
    { name: "Üsküdar", url: "https://www.uskudar.bel.tr/" },
    { name: "Zeytinburnu", url: "https://www.zeytinburnu.bel.tr/" }
];

// 3 sütunu seçiyoruz
const col1 = document.getElementById('ilce-listesi-1');
const col2 = document.getElementById('ilce-listesi-2');
const col3 = document.getElementById('ilce-listesi-3');

// İlçeleri 3 sütuna eşit olarak dağıtıyoruz
ilceler.forEach((ilce, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = ilce.url;
    a.textContent = ilce.name;
    li.appendChild(a);

    if (index % 3 === 0) {
        col1.appendChild(li);
    } else if (index % 3 === 1) {
        col2.appendChild(li);
    } else {
        col3.appendChild(li);
    }
});




//!İstanbul 

document.addEventListener('DOMContentLoaded', function() {
    // İstanbul ilçeleri listesi ve URL'leri
    const ilceler = [
        { name: "Adalar", url: "https://www.adalar.bel.tr/" },
        { name: "Arnavutköy", url: "https://www.arnavutkoy.bel.tr/" },
        { name: "Ataşehir", url: "https://www.atasehir.bel.tr/" },
        { name: "Avcılar", url: "https://www.avcilar.bel.tr/" },
        { name: "Bağcılar", url: "https://www.bagcilar.bel.tr/" },
        { name: "Bahçelievler", url: "https://www.bahcelievler.bel.tr/" },
        { name: "Bakırköy", url: "https://www.bakirkoy.bel.tr/" },
        { name: "Başakşehir", url: "https://www.basaksehir.bel.tr/" },
        { name: "Bayrampaşa", url: "https://www.bayrampasa.bel.tr/" },
        { name: "Beşiktaş", url: "https://www.besiktas.bel.tr/" },
        { name: "Beykoz", url: "https://www.beykoz.bel.tr/" },
        { name: "Beylikdüzü", url: "https://www.beylikduzu.bel.tr/" },
        { name: "Beyoğlu", url: "https://www.beyoglu.bel.tr/" },
        { name: "Büyükçekmece", url: "https://www.bcekmece.bel.tr/" },
        { name: "Çatalca", url: "https://www.catalca.bel.tr/" },
        { name: "Çekmeköy", url: "https://www.cekmekoy.bel.tr/" },
        { name: "Esenler", url: "https://www.esenler.bel.tr/" },
        { name: "Esenyurt", url: "https://www.esenyurt.bel.tr/" },
        { name: "Eyüpsultan", url: "https://www.eyupsultan.bel.tr/" },
        { name: "Fatih", url: "https://www.fatih.bel.tr/" },
        { name: "Gaziosmanpaşa", url: "https://www.gaziosmanpasa.bel.tr/" },
        { name: "Güngören", url: "https://www.gungoren.bel.tr/" },
        { name: "Kadıköy", url: "https://www.kadikoy.bel.tr/" },
        { name: "Kağıthane", url: "https://www.kagithane.bel.tr/" },
        { name: "Kartal", url: "https://www.kartal.bel.tr/" },
        { name: "Küçükçekmece", url: "https://www.kucukcekmece.bel.tr/" },
        { name: "Maltepe", url: "https://www.maltepe.bel.tr/" },
        { name: "Pendik", url: "https://www.pendik.bel.tr/" },
        { name: "Sancaktepe", url: "https://www.sancaktepe.bel.tr/" },
        { name: "Sarıyer", url: "https://www.sariyer.bel.tr/" },
        { name: "Silivri", url: "https://www.silivri.bel.tr/" },
        { name: "Sultanbeyli", url: "https://www.sultanbeyli.bel.tr/" },
        { name: "Sultangazi", url: "https://www.sultangazi.bel.tr/" },
        { name: "Şile", url: "https://www.sile.bel.tr/" },
        { name: "Şişli", url: "https://www.sisli.bel.tr/" },
        { name: "Tuzla", url: "https://www.tuzla.bel.tr/" },
        { name: "Ümraniye", url: "https://www.umraniye.bel.tr/" },
        { name: "Üsküdar", url: "https://www.uskudar.bel.tr/" },
        { name: "Zeytinburnu", url: "https://www.zeytinburnu.bel.tr/" }
    ];

    // İlçeleri listeye ekleme
    const ilcelerListesi = document.getElementById('ilcelerListesi');
    ilceler.forEach(ilce => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = ilce.name;
        li.addEventListener('click', function() {
            window.location.href = ilce.url;
        });
        ilcelerListesi.appendChild(li);
    });

    // "Plan Oluştur" butonuna tıklanma işlevi
    document.getElementById('planOlustur').addEventListener('click', function() {
        alert('Plan Oluştur butonuna tıklandı.');
        // Burada "Plan Oluştur" butonuna tıklanınca yapılacak işlemleri belirleyebilirsiniz
        // Örneğin, başka bir sayfaya yönlendirme yapabilirsiniz:
        // window.location.href = '/plan-olustur';
    });
});











