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


//! Detail
 // Gezilecek Yerler Listesi
 const gezilecekYerler = [
    "İstanbul Surf School", "İstanbul Kiteboard Academy", "Burç Beach", "Suma Beach", "Solar Bach",
    "Baykuş Beach", "Doğada Yaşam Okulu", "Belgrad Ormanı", "Bahçeköy Fidanlığı", "Atatürk Arboretumu",
    "Life Park", "Zekeriyaköy", "Göçmen’s Ranch", "Garipçe Köyü", "Kuş Gözlem Kulesi", "Rumeli Kavağı",
    "Altınkum Plajı", "Rumeli Feneri", "Marmaracık Milli Parkı", "Camp Rumelifeneri Karavan Kampı",
    "Xtrem Aventures", "Uniq Açık Hava Sineması", "Turkcell Platinum Park", "Kemerburgaz Kent Ormanı",
    "Bol Pazar", "İstanbul Golf Kulübü", "Kemer Country Club", "Forest Kemerburgaz – Macera Parkı",
    "Göktürk Göleti Tabiat Parkı", "Çilingoz Tabiat Parkı", "İnceğiz", "Villa Fe Butik Otel", "Akademi Binicilik",
    "Grandma’s Wonderland", "Arka Bahçe", "Windsurf TR", "Klassis Golf Kulübü", "İBB Florya Sosyal Tesisleri",
    "Florya Atatürk Deniz Köşkü", "Florya Atatürk Ormanı", "Vira Kürek", "Altınboynuz Spor Kulübü",
    "Haliç Yelken Kulübü", "Fener-Balat", "Polonezköy Tabiat Parkı", "Ağaç Oyma Heykel Sergisi",
    "İstanbul Kelebek Çiftliği", "Zosia Teyzenin Anı Evi", "Częstochowska Kilisesi",
    "Polonezköy Cam Sanat Merkezi", "Dila Atlı Spor Kulübü", "Çatalay Binicilik Atlı Spor Kulübü",
    "Riva’s Club", "Pegasus Binicilik Kulübü", "Yako House & Park", "Komşuköy", "Bi Nevi Atölye",
    "Rita Çiftlik", "Beykoz Kundura", "Cam Ocağı Vakfı", "Seshane", "Anadolu Hisarı Kürek Akademisi",
    "Beykoz Öğretmenevi", "Küçüksu Kasrı", "Göztepe Tabiat Parkı", "Mihrabat Tabiat Parkı", "Hz. Yuşa Tepesi",
    "Elmasburnu Tabiat Parkı", "Riva Cam Sanatları Merkezi", "Riva Surf House", "Ulupelit Köyü",
    "Casa Lavanda Boutique Hotel", "At Köyü Binicilik Spor Kulübü", "Avcıkoru Tabiat Parkı", "Darlık Barajı",
    "Sahilköy", "Sahilkamp", "Parma Sole Boutique Hotel", "İncekum Macerapark", "Şile Feneri ve Müzesi",
    "Kavala Parkı", "Şile Bezi El Sanatları Merkezi", "Yeryüzü Pazarı", "Ala Kadınlar Plajı", "Ağlayan Kayalar",
    "Baia Beach", "Uzunkum Plajı", "Aqua Beach", "Kabakoz", "North Beach", "Fusha Beach",
    "Šuma Sanjati Boutique Hotel", "Akçakese Plaji", "Şile Saklıgöl", "Boho Tables", "Hacılı Köyü ve Şelalesi",
    "Gökmaslı Köyü", "Wineport Lodge", "Tranquilla Nehir Evi", "Lethe Exclusive Hotel", "Greenline Guest House",
    "Kilimli Koyu", "Kayra Yelken", "İstanbul Yelken Kulübü", "Marmara Yelken Spor Kulübü", "Kalamış Yelken",
    "Hedef Yelken", "İstanbul Windsurf Center", "Sup Yoga Island", "Sup Yoga Türkiye", "Kano İstanbul",
    "İstanbul Kürek", "Aydos Tepesi", "Forestanbul", "Büyükada", "Heybeliada Sanatoryumu",
    "İnönü Evi Müzesi", "Hüseyin Rahmi Gürpınar Müzesi", "Heybeliada Ruhban Okulu", "Değirmenburnu Tabiat Parkı",
    "Heybeli Sahaf", "Ada Beach Club", "Sait Faik Abasıyanık Müzesi", "Madam Marta Koyu", "Cennet Bahçesi",
    "Noya Beach", "Sedef Adası Plajı"
];

// Yeme-İçme Listesi
const yemeIcme = [
    "Emel’in Bahçesi", "Kayıkhane", "Mako Balık", "Üzüm Kızı", "Uzunya Balık Restoran",
    "Tarihi Bilice Börekçisi", "Bizim Kanatçı", "Pideban", "Anzer Sofrası", "Limandere Kavurmacısı",
    "İzoletta", "Ahali 279", "Brio İtalian Restaurant", "Gusina", "RokaPups Cafe",
    "Antilop Brasserie", "Balıkçı Kahraman", "Güzelyer Yedigün Balık Lokantası", "Balıkçı Yılmaz",
    "Balıkçı Anne", "Üçüncü Mekan", "Good Mood Coffee", "Spicy Orman Evi", "Sushi Manga",
    "La Mensa", "Yasemin & Tuncel", "Stella", "Leonardo", "Polina", "İBB Beykoz Sosyal Tesisleri",
    "Beltur Hıdiv Kasrı", "Bayramoğlu Döner", "Wren & Spoon", "Yalı 77", "Kulindağ Dağ Evi",
    "Çam Vadisi Cafe", "Yoros Cafe Restaurant", "Poyraz Çapari Restaurant", "Poyraz Sahil Balık Restaurant",
    "Renkli Bahçe", "Mavi Kapı Cafe", "Mola Gözleme Evi", "Massha Şile Balıkçısı",
    "Rokethane Restoran Kafe", "Luz Cafe", "Heyamola Ada Lokantası", "Tadım Roma Dondurma",
    "Helios Coffeeshop", "Kalpazankaya Restaurant", "Four Letter Word Coffee", "Barba Yani",
    "Ergün Pastanesi", "Sinem Dondurma", "Jash Kınalıada", "Yeşil Roma Dondurma", "İkikapı",
    "Yuka Beach Bar", "Elio Sedef", "Liya Sedef"
];

function populateList(id, items) {
    const listElement = document.getElementById(id);
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        listElement.appendChild(li);
    });
}

function splitAndPopulateList(idPrefix, items) {
    const half = Math.ceil(items.length / 2);
    const firstHalf = items.slice(0, half);
    const secondHalf = items.slice(half);
    
    populateList(idPrefix + '-1', firstHalf);
    populateList(idPrefix + '-2', secondHalf);
}

// Listeleri doldur
splitAndPopulateList('gezilecek-list', gezilecekYerler);
splitAndPopulateList('yeme-icme-list', yemeIcme);