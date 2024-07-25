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
/*
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

*/


const ilceler1 = [
    { name: "Adalar", mekanlar: ["Büyükada", "Heybeliada", "Kınalıada"] },
    { name: "Arnavutköy", mekanlar: ["Karaburun Sahili", "Terkos Gölü", "Aziz Pabuççu Cami"] },
    { name: "Ataşehir", mekanlar: ["Watergarden İstanbul", "Mimar Sinan Camii", "Düştepe Oyun Müzesi"] },
    { name: "Avcılar", mekanlar: ["Avcılar Sahili", "Pelican Mall", "Barış Manço Kültür Merkezi"] },
    { name: "Bağcılar", mekanlar: ["Güneşli Park AVM", "212 AVM", "Kirazlı Metro İstasyonu Çevresi"] },
    { name: "Bahçelievler", mekanlar: ["Bahçelievler Kültür Merkezi", "Metroport AVM", "İstanbul Aydın Üniversitesi Kampüsü"] },
    { name: "Bakırköy", mekanlar: ["Florya Atatürk Deniz Köşkü", "Capacity AVM", "Atatürk Ormanı"] },
    { name: "Başakşehir", mekanlar: ["Bahçeşehir Gölet Parkı", "Başakşehir Millet Bahçesi", "Mall of İstanbul"] },
    { name: "Bayrampaşa", mekanlar: ["Forum İstanbul AVM", "İsfanbul AVM", "Bayrampaşa Şehir Parkı"] },
    { name: "Beşiktaş", mekanlar: ["Dolmabahçe Sarayı", "Yıldız Parkı", "Bebek Sahili"] },
    { name: "Beykoz", mekanlar: ["Polonezköy Tabiat Parkı", "Küçüksu Kasrı", "Mihrabat Tabiat Parkı"] },
    { name: "Beylikdüzü", mekanlar: ["Yaşam Vadisi Parkı", "Beylikdüzü Sahili", "Marmara Park AVM"] },
    { name: "Beyoğlu", mekanlar: ["Galata Kulesi", "İstiklal Caddesi", "Pera Müzesi"] },
    { name: "Büyükçekmece", mekanlar: ["Büyükçekmece Sahili", "Tüyap Fuar ve Kongre Merkezi", "Mimar Sinan Köprüsü"] },
    { name: "Çatalca", mekanlar: ["İnceğiz Mağaraları", "Çilingoz Tabiat Parkı", "Elbasan Köyü"] },
    { name: "Çekmeköy", mekanlar: ["Taşdelen Mesire Alanı", "Alemdağ Ormanı", "Özyeğin Üniversitesi Kampüsü"] },
    { name: "Esenler", mekanlar: ["Esenler Kültür Merkezi", "Dörtyol Meydanı", "Havaalanı Mahallesi Parkı"] },
    { name: "Esenyurt", mekanlar: ["Torium AVM", "Esenyurt Belediyesi Kültür Merkezi", "Recep Tayyip Erdoğan Parkı"] },
    { name: "Eyüpsultan", mekanlar: ["Eyüp Sultan Camii", "Pierre Loti Tepesi", "Feshane"] },
    { name: "Fatih", mekanlar: ["Sultanahmet Camii", "Topkapı Sarayı", "Kapalıçarşı"] },
    { name: "Gaziosmanpaşa", mekanlar: ["Gaziosmanpaşa Kültür ve Sanat Merkezi", "Karayolları Mahallesi Parkı", "İstanbul Vialand Tema Park"] },
    { name: "Güngören", mekanlar: ["Kale Outlet Center", "Tozkoparan Kapalı Yüzme Havuzu", "Haznedar Parkı"] },
    { name: "Kadıköy", mekanlar: ["Moda Sahili", "Bağdat Caddesi", "Kadıköy Çarşısı"] },
    { name: "Kağıthane", mekanlar: ["Kağıthane Belediyesi Sosyal Tesisleri", "Hasbahçe Mesire Alanı", "Axis İstanbul AVM"] },
    { name: "Kartal", mekanlar: ["Aydos Tepesi", "Dragos Sahili", "Kartal İstmarina AVM"] },
    { name: "Küçükçekmece", mekanlar: ["Küçükçekmece Gölü", "Menekşe Plajı", "ArmoniPark Outlet Center"] },
    { name: "Maltepe", mekanlar: ["Maltepe Sahil Parkı", "Başıbüyük Ormanı", "İdealtepe Spor Kulübü"] },
    { name: "Pendik", mekanlar: ["Pendik Sahili", "Viaport Marina", "Aydos Tepesi"] },
    { name: "Sancaktepe", mekanlar: ["Samandıra Mesire Alanı", "Prof. Dr. Necmettin Erbakan Külliyesi", "Abdurrahmangazi Türbesi"] },
    { name: "Sarıyer", mekanlar: ["Emirgan Korusu", "Belgrad Ormanı", "Rumeli Hisarı"] },
    { name: "Silivri", mekanlar: ["Silivri Sahili", "Silivri Kalesi", "Selimpaşa Limanı"] },
    { name: "Sultanbeyli", mekanlar: ["Aydos Kalesi", "Sultanbeyli Gölet Parkı", "Prof. Dr. Necmettin Erbakan Kültür Merkezi"] },
    { name: "Sultangazi", mekanlar: ["Sultangazi Şehir Ormanı", "Habibler Mesire Alanı", "Cebeci Parkı"] },
    { name: "Şişli", mekanlar: ["İstanbul Cevahir AVM", "Bomontiada", "Atatürk Müzesi"] },
    { name: "Tuzla", mekanlar: ["Viaport Marina", "Tuzla Sahili", "Tuzla Belediyesi Şelale Eğitim Parkı"] },
    { name: "Ümraniye", mekanlar: ["Ümraniye Meydan AVM", "Canpark AVM", "Tantavi Sosyal Tesisleri"] },
    { name: "Üsküdar", mekanlar: ["Kız Kulesi", "Çamlıca Tepesi", "Beylerbeyi Sarayı"] },
    { name: "Zeytinburnu", mekanlar: ["Zeytinburnu Sahili", "Panorama 1453 Tarih Müzesi", "Merkezefendi Parkı"] }
];

const ilcelerListesi = document.getElementById('ilcelerListesi');

ilceler1.forEach(ilce => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<strong>${ilce.name}</strong>: ${ilce.mekanlar.join(', ')}`;
    ilcelerListesi.appendChild(li);
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