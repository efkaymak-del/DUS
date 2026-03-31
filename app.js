// ========================================
// DUS 2026 — Simple App
// ========================================

// --- TAB NAVIGATION ---
document.getElementById('tabs').addEventListener('click', e => {
  if (!e.target.classList.contains('tab')) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('page-' + e.target.dataset.tab).classList.remove('hidden');
});

// --- COUNTDOWN ---
function updateCountdown() {
  const d = Math.max(0, Math.ceil((new Date('2026-04-26T10:15:00+03:00') - new Date()) / 864e5));
  document.getElementById('countdown').textContent = `1. Dönem: ${d} gün kaldı`;
  document.getElementById('days-left').textContent = d;
}
updateCountdown(); setInterval(updateCountdown, 60000);

// ========================================
// DATA
// ========================================
const STUDY = {
  temel: [
    { t:'🦴 Anatomi', s:'6 soru', items:[
      {h:'İnferior Alveolar Sinir',p:'Yüksek',txt:'V3 dalı. Foramen mandibulae\'den kanala girer, alt dişleri innerve eder. Lingula mandibulae hizasında blok yapılır.'},
      {h:'TME',p:'Yüksek',txt:'Kondil-temporal kemik arası sinovyal eklem. Açılma: önce rotasyon (25mm) sonra translasyon. Lateral pterygoid: disk+mandibula hareketi.'},
      {h:'Maksiller Sinüs',p:'Orta',txt:'En büyük paranazal sinüs. Üst premolar ve 1. molar ile yakın. Ostium orta meatusa açılır.'}
    ]},
    { t:'🔬 Histoloji & Embriyoloji', s:'4 soru', items:[
      {h:'Diş Gelişimi Evreleri',p:'Yüksek',txt:'Tomurcuk→Kapak→Zil→Apozisyon. Mine içten dışa (ameloblast), dentin dıştan içe (odontoblast).'},
      {h:'PDL Lifleri',p:'Yüksek',txt:'Oblik lifler en kalabalık, çiğneme kuvvetini en iyi absorbe eder. Sharpey lifleri: kemik/sement içine gömülü.'},
      {h:'Pulpa Histolojisi',p:'Orta',txt:'4 bölge: Odontoblast, Weil (hücresiz), Hücre zengin, Merkez. Tersiyer dentin irritasyonda oluşur.'}
    ]},
    { t:'💊 Farmakoloji', s:'4 soru', items:[
      {h:'Lokal Anestezikler',p:'Yüksek',txt:'Altın standart: Lidokain %2 + Epi 1:80.000. Amid→KC, Ester→plazma. Artikain: kemik penetrasyonu en yüksek.'},
      {h:'NSAİİ\'ler',p:'Yüksek',txt:'İbuprofen: ilk tercih. Aspirin: irreversibl COX inhibisyonu, 7 gün önce kes. COX-2 seçici: KV risk artışı.'},
      {h:'Antibiyotikler',p:'Yüksek',txt:'İlk tercih: Amoksisilin 500mg 3×1. Alerji: Klindamisin. İE profilaksisi: Amoksisilin 2g tek doz 30-60dk önce.'}
    ]},
    { t:'⚗️ Fizyoloji & Biyokimya', s:'12 soru', items:[
      {h:'Tükürük',p:'Yüksek',txt:'Submandibular en fazla üretir. Parotis: seröz. Parasempatik→sulu, Sempatik→koyu. Kritik pH: 5.5.'},
      {h:'Kemik Metabolizması',p:'Yüksek',txt:'PTH↑→kemik rezorbsiyonu. Kalsitonin↑→kemik yapımı. D vit→Ca emilimi. Osteoblast:ALP, Osteoklast:TRAP.'},
      {h:'Kollajen',p:'Orta',txt:'Tip I: kemik, dentin, sement, PDL. C vitamini gerekli (prolil hidroksilaz). Eksiklik: skorbüt.'}
    ]}
  ],
  klinik: [
    { t:'🦷 Endodonti', s:'~10 soru', items:[
      {h:'Kanal Dolum',p:'Yüksek',txt:'Lateral kondenzasyon: en yaygın. AH Plus (epoksi reçine): altın standart sealer. Dolum apeksten 0-2mm kısa.'},
      {h:'Başarısızlık',p:'Yüksek',txt:'En sık: yetersiz şekillendirme/dezenfeksiyon. MB2 kaçırılır. Vertikal kök fraktürü: geri dönüşsüz.'},
      {h:'VPT',p:'Yüksek',txt:'Direkt kuafaj: mekanik açılmada MTA/Biodentine. Biodentine avantajı: 12dk sertleşme (MTA: 3-4 saat).'}
    ]},
    { t:'🌿 Periodontoloji', s:'~10 soru', items:[
      {h:'2017 Sınıflama',p:'Yüksek',txt:'Evre I-IV (şiddet) + Grade A-C (hız). Evre IV: kapanış kollapsı. Grade C: hızlı, genç, sigara, DM.'},
      {h:'Flep Teknikleri',p:'Yüksek',txt:'Modifiye Widman: derin cepler. Koronale kaydırılmış: kök örtme. GBR: membran+greft.'},
      {h:'Miller Çekilme',p:'Yüksek',txt:'I-II: tam örtme mümkün. III: kısmi. IV: yok. Altın standart: bağ dokusu grefti + koronale flep.'}
    ]},
    { t:'⚕️ Cerrahi', s:'~12 soru', items:[
      {h:'Gömük Diş',p:'Yüksek',txt:'Winter: Mezioangüler en sık (%43). Distoangüler en zor. Pell-Gregory: Sınıf I-III (ramus), A-C (kemik).'},
      {h:'Alveolit',p:'Yüksek',txt:'3-5. gün pıhtı kaybı + şiddetli yayılan ağrı + fetor. Risk: sigara, OKS. Tedavi: irrigasyon + alvogyl.'},
      {h:'MRONJ',p:'Orta',txt:'Bisfosfonat + cerrahi → kemik ekspozisyonu ≥8 hafta. IV bisfosfonatta cerrahiden kaçın. Önleme en önemli.'}
    ]},
    { t:'🦿 Protetik', s:'~12 soru', items:[
      {h:'Kennedy Sınıflaması',p:'Yüksek',txt:'Sınıf I: bilateral serbest uçlu (en sık). II: tek taraflı. III: sınırlı alan. IV: anterior çapraz.'},
      {h:'Tam Protez',p:'Yüksek',txt:'Serbest mesafe=İVB-OVB (2-4mm). Bilateral dengeli oklüzyon: stabilite. OVB↑→kas yorulması.'},
      {h:'İmplant',p:'Orta',txt:'Lekholm-Zarb: Tip II ideal. Osseointegrasyon: titanyum-kemik doğrudan bağ. Primer stabilite: kemik yoğunluğu.'}
    ]},
    { t:'📐 Ortodonti', s:'~10 soru', items:[
      {h:'Angle Sınıflaması',p:'Yüksek',txt:'I: normal molar. II Div1: protrüzyon. II Div2: retroklüzyon+deepbite. III: alt molar mezial.'},
      {h:'Kemik Remodeling',p:'Yüksek',txt:'Baskı→osteoklast (rezorbsiyon). Gerilim→osteoblast (apozisyon). İdeal: 25-50g/diş. Ağır→hiyalinizasyon.'},
      {h:'Retansiyon',p:'Orta',txt:'Sabit retainer (3-3): uzun vadeli en etkili. Hawley: ayarlanabilir. Crowding: ömür boyu retansiyon.'}
    ]},
    { t:'👶 Pedodonti', s:'~8 soru', items:[
      {h:'Süt Dişi Pulpa',p:'Yüksek',txt:'Pulpotomi: MTA/Biodentine (FC tartışmalı-karsinojen). Pulpektomi: ZOE rezorblabl pat.'},
      {h:'ECC',p:'Yüksek',txt:'71 ay altı ≥1 süt diş çürük/dolgu/kayıp. Flor vernisi: 6 aydan itibaren. 1. molar: ~6 yaşında sürer.'},
      {h:'Yer Tutucular',p:'Orta',txt:'Band&Loop: tek taraflı arka. Lingual ark: bilateral alt. Nance: bilateral üst. TPA: üst ankraj.'}
    ]},
    { t:'🩻 Radyoloji', s:'~6 soru', items:[
      {h:'ALARA',p:'Yüksek',txt:'As Low As Reasonably Achievable. Doz: Periapical<Bite-wing<Pano<CBCT<BT. Gebelik: kurşun+periapical.'},
      {h:'Periapical Lezyonlar',p:'Yüksek',txt:'Granülom: en sık. Kist: kortike kenar. Kesin ayrım: histolojik (radyografik kesin değil).'},
      {h:'CBCT',p:'Orta',txt:'İmplant planlama, gömük diş, kök rezorbsiyon. Doz 2D\'den yüksek. Rutin endodontide önerilmez.'}
    ]}
  ]
};

// Build study accordions
['temel','klinik'].forEach(sec => {
  const el = document.getElementById('study-'+sec);
  el.innerHTML = STUDY[sec].map(g => `
    <div class="bg-white rounded-xl border mb-3 overflow-hidden">
      <button class="w-full flex justify-between items-center p-4 hover:bg-slate-50 text-left" onclick="this.nextElementSibling.classList.toggle('open');this.querySelector('.arr').style.transform=this.nextElementSibling.classList.contains('open')?'rotate(180deg)':''">
        <div><span class="font-bold text-slate-800">${g.t}</span><span class="text-slate-400 text-xs ml-2">${g.s}</span></div>
        <span class="arr text-slate-400 transition-transform">▼</span>
      </button>
      <div class="acc-body">
        <div class="px-4 pb-4 space-y-2">${g.items.map(i=>`
          <div class="bg-slate-50 rounded-lg p-3 border-l-4 ${i.p==='Yüksek'?'border-red-400':'border-amber-400'}">
            <div class="flex justify-between mb-1">
              <span class="font-semibold text-sm text-slate-800">${i.h}</span>
              <span class="text-xs px-2 py-0.5 rounded-full ${i.p==='Yüksek'?'bg-red-100 text-red-700':'bg-amber-100 text-amber-700'}">${i.p}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${i.txt}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>`).join('');
});

// Study tab switch
document.querySelectorAll('.study-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.study-tab').forEach(b=>{b.classList.remove('active');b.classList.add('bg-slate-100','text-slate-500')});
    btn.classList.add('active');btn.classList.remove('bg-slate-100','text-slate-500');
    document.getElementById('study-temel').classList.toggle('hidden', btn.dataset.section!=='temel');
    document.getElementById('study-klinik').classList.toggle('hidden', btn.dataset.section!=='klinik');
  });
});

// ========================================
// EXAM — 40 Temel + 80 Klinik = 120 Q
// ========================================
const Q = {
  temel: [
    {q:"Dişhekimliğinde altın standart lokal anestezik?",o:["Mepivakain %3","Artikain %4","Lidokain %2 + Epi 1:80.000","Bupivakain %0.5","Prokain %2"],a:2,e:"Lidokain %2 + Epi 1:80.000 altın standarttır."},
    {q:"Çiğneme kuvvetini en iyi absorbe eden PDL lifi?",o:["Alveoler krest","Horizontal","Oblik","Apikal","İnterradiküler"],a:2,e:"Oblik lifler en kalabalık PDL grubudur."},
    {q:"Ektomezenkimal kondansasyon hangi evrede?",o:["İnitiasyon","Tomurcuk","Kapak","Zil","Apozisyon"],a:1,e:"Tomurcuk (Bud) evresinde."},
    {q:"İrreversibl COX inhibitörü hangisi?",o:["İbuprofen","Diklofenak","Naproksen","Aspirin","Selekoksib"],a:3,e:"Aspirin irreversibl asetilasyon yapar."},
    {q:"Lingula mandibulae nerededir?",o:["Proc. coronoideus","For. mandibulae ön-üst kenar","Condylus","Sigmoid çentik","Gonion"],a:1,e:"İnferior alveolar blok anatomi işareti."},
    {q:"Mine hangi yönde birikir?",o:["Dıştan içe","İçten dışa","Merkezden","Periferdden","Homojen"],a:1,e:"Mine içten dışa, dentin dıştan içe."},
    {q:"Amid grubu LA nerede metabolize edilir?",o:["Böbrek","Plazma","Karaciğer","Akciğer","Bağırsak"],a:2,e:"Amid: KC. Ester: plazmada psödokolinesteraz."},
    {q:"En fazla tükürük üreten bez?",o:["Parotis","Submandibular","Sublingual","Minor bezler","Von Ebner"],a:1,e:"Submandibular: günlük üretimin ~%65-70'i."},
    {q:"Tip I kollajen en fazla nerede?",o:["Pulpa","Granülasyon","Dentin ve kemik","Bazal membran","Elastik kıkırdak"],a:2,e:"Kemik, dentin, sement, PDL."},
    {q:"PTH hipokalsemide ne yapar?",o:["Kemik yapımı↑","Kemik rezorbsiyonu↑","Ca emilimi↓","Ca atılımı↑","Kalsitonin↑"],a:1,e:"PTH→osteoklast aktivasyonu→rezorbsiyon."},
    {q:"Weil bölgesi = ?",o:["Odontoblast","Hücresiz bölge","Hücre zengin","Merkez pulpa","Predentin"],a:1,e:"Odontoblast tabakası altındaki hücresiz bölge."},
    {q:"Kollajen sentezinde C vitamini neden gerekli?",o:["DNA sentezi","Prolin hidroksilasyonu","Lipid sentezi","Heme sentezi","Karboksilasyon"],a:1,e:"C vitamini prolil hidroksilaz kofaktörüdür."},
    {q:"Parasempatik→tükürük tipi?",o:["Koyu-müsinöz","Sulu-seröz","Protein","Yağlı","Salgı yok"],a:1,e:"Parasempatik: bol sulu-seröz."},
    {q:"Osteoklast enzimi?",o:["ALP","TRAP","Amilaz","Lipaz","Kollajenaz"],a:1,e:"Osteoklast: TRAP. Osteoblast: ALP."},
    {q:"İE profilaksisi standart rejim?",o:["Amoksisilin 500mg 3×1","Amoksisilin 2g tek doz 30dk önce","Klindamisin 600mg","Metronidazol 500mg","Azitromisin 250mg"],a:1,e:"2g Amoksisilin tek doz."},
    {q:"TME açılmada ilk hareket?",o:["Translasyon","Laterotrüzyon","Protrüzyon","Rotasyon","Retropulsiyon"],a:3,e:"İlk 25mm: rotasyon (alt kompartman)."},
    {q:"Artikainin farkı?",o:["En kısa etkili","Ester+amid özellik","Böbrekte metabolize","Vazokonstriktörsüz","Topikal kullanılmaz"],a:1,e:"Tiyofen halkası: hem amid hem ester benzeri."},
    {q:"Sharpey lifleri nerede?",o:["Pulpa merkezi","Mine-dentin sınırı","Kemik ve sement içinde","Tükürük kanalı","Sinüs mukozası"],a:2,e:"PDL liflerinin kemik/sement içi kısımları."},
    {q:"Ameloblast/odontoblast hangi evrede?",o:["İnitiasyon","Tomurcuk","Kapak","Zil","Apozisyon"],a:3,e:"Zil (Bell) evresinde diferansiyasyon."},
    {q:"Tamamen seröz bez?",o:["Submandibular","Sublingual","Parotis","Minor","Labial"],a:2,e:"Parotis: tamamen seröz (amilaz)."},
    {q:"Diş çürüğünde kritik pH?",o:["7.0","6.5","5.5","4.5","3.5"],a:2,e:"pH 5.5 altında mine demineralizasyonu başlar."},
    {q:"Plak oluşumunda ilk adım?",o:["Bakteri kolonizasyonu","Pelikül oluşumu","Kalkülüs","Demineralizasyon","Enflamasyon"],a:1,e:"Tükürük glikoproteinleri→pelikül→bakteri."},
    {q:"D vitamini eksikliğinde ne olur?",o:["Skorbüt","Beri-beri","Raşitizm","Pellegra","Keratomalazi"],a:2,e:"Raşitizm (çocuk) / Osteomalazi (yetişkin)."},
    {q:"Ameloblast salgı ucu?",o:["Bazal","Tomes uzantısı","Lateral","Apikal mitokondri","Proksimal"],a:1,e:"Tomes uzantısından mine matriksi salgılanır."},
    {q:"N. lingualis ne taşır?",o:["Üst diş ağrısı","Alt diş ağrısı","Dil ön 2/3 genel duyusu","Dil arka 1/3 tadı","Yanak"],a:2,e:"V3 dalı. Chorda tympani ile tat da taşır."},
    {q:"Mine %96 ne?",o:["Ca karbonat","Hidroksiapatit","Fluorapatit","Ca fosfat","Mg"],a:1,e:"Hidroksiapatit kristalleri."},
    {q:"Akut sialodenitin en sık etkeni?",o:["S.mutans","S.aureus","Lactobacillus","P.gingivalis","C.albicans"],a:1,e:"S. aureus."},
    {q:"Dentin hassasiyeti teorisi?",o:["Nöral","Odontoblast reseptör","Hidrodinamik","Vibrasyon","Osmotik"],a:2,e:"Brännström: tübüler sıvı hareketi→sinir uyarısı."},
    {q:"Kırmızı kompleks patojeni?",o:["S.mutans","Lactobacillus","P.gingivalis","A.naeslundii","Veillonella"],a:2,e:"P.gingivalis+T.forsythia+T.denticola."},
    {q:"Mandibula hangi arktan gelişir?",o:["1. faringeal","2. faringeal","3. faringeal","Nöral tüp","Notokord"],a:0,e:"1. faringeal ark (Meckel kıkırdağı)."},
    {q:"S.mutans çürük mekanizması?",o:["Proteaz","Glukan sentezi+asit","Toksin","Fagositoz","Mine parçalama"],a:1,e:"Glukan→yapışma + asit→demineralizasyon."},
    {q:"Predentin nedir?",o:["Mineralize olmamış dentin matriksi","Mine-dentin sınırı","Kök dentin dış katman","Sekonder dentin","Tübüler dentin"],a:0,e:"Henüz mineralize olmamış odontoblast matriksi."},
    {q:"Oral kandidiazis en sık etken?",o:["C.albicans","C.glabrata","C.krusei","Aspergillus","Mucor"],a:0,e:"C. albicans en sık."},
    {q:"LA'ya eklenen vazokonstriktör?",o:["Epinefrin","Atropin","Dopamin","Norepinefrin","Asetilkolin"],a:0,e:"Epinefrin: emilim↓, süre↑, toksisite↓."},
    {q:"CEJ en sık konfigürasyon?",o:["%60 sement mineyi örter","%30 kenardan kenar","%10 boşluk","Mine sement örter","Eşit"],a:0,e:"Sement mineyi örter (%60)."},
    {q:"En yaygın oral enflamatuvar lezyon?",o:["Glossit","Eritroplaki","Aftöz stomatit","Liken planus","Pemfigus"],a:2,e:"RAU (rekürran aftöz ülserasyon)."},
    {q:"Apoptoz vs nekroz farkı?",o:["Apoptozda şişlik","Nekrozda enflamasyon yok","Apoptoz: programlı, enflamasyon yok","Aynı","Apoptozda lizozom yıkılır"],a:2,e:"Apoptoz: programlı, enflamasyon tetiklemez."},
    {q:"Seröz demilune nerede?",o:["Müköz hücrelerde","Submandibular asinus ucunda","Miyoepitelyalde","Stellat retikulumda","Goblette"],a:1,e:"Mikst bezlerde müköz asinus ucunda seröz salgı."},
    {q:"V2 (Maksiller sinir) neyi innerve eder?",o:["Alt dudak","Dil ön 2/3","Üst çene+üst dişler+yanak","Mandibula","Temporal"],a:2,e:"Üst çene, üst dişler, yanak, alt göz kapağı."},
    {q:"Oral tolerans hangi mekanizma?",o:["Th1","Th2","Treg aracılı supresyon","Th17","NK hücre"],a:2,e:"Treg hücreleri→sistemik immün tolerans."}
  ],
  klinik: [
    {q:"Pell-Gregory Sınıf III?",o:["Tamamen serbest","Yarısı ramusta","Tamamı ramusta gömük","Kret seviyesinde","Gingival altında"],a:2,e:"Tamamı ramus içinde."},
    {q:"2017 Grade C ne?",o:["50+ yaş","Yaşla orantılı","Hızlı,genç,sigara/DM","Başlangıç","Gingivitis"],a:2,e:"Hızlı progresyon, genç, sigara>10/gün, DM."},
    {q:"Üst 1. molarda en sık kaçırılan kanal?",o:["MB1","DB","Palatal","MB2","Distal"],a:3,e:"MB2: %50-95 vakada bulunur."},
    {q:"Kennedy Sınıf I?",o:["Tek taraflı serbest","Bilateral serbest uçlu","Sınırlı alan","Anterior çapraz","Tam dişsizlik"],a:1,e:"Bilateral posterior serbest uçlu (en sık)."},
    {q:"Angle Sınıf II Div 2 kesiciler?",o:["Protrüzyon","Retroklüzyon","Alt kesici öne","Çapraşıklık yok","Açık kapanış"],a:1,e:"Retroklüzyon + deepbite."},
    {q:"Alveolit en belirgin bulgu?",o:["Şişlik+ateş","Pıhtı kaybı+şiddetli ağrı","Sarı akıntı","Lenfadenopati","Granülasyon"],a:1,e:"3-5. gün pıhtı kaybı+yayılan ağrı+fetor."},
    {q:"MTA'nın VPT avantajı?",o:["Ucuz","Hızlı sertleşme","Biyouyumluluk+köprü dentini","Antibakteriyal","Renk değişimi yok"],a:2,e:"Köprü dentini oluşumu uyarır."},
    {q:"Miller I çekilmede altın standart?",o:["Serbest dişeti grefti","Bağ dokusu+koronale flep","Apikale flep","Lateral flep","Gingivektomi"],a:1,e:"Bağ dokusu grefti+koronale kaydırılmış flep."},
    {q:"KKT en sık başarısızlık?",o:["Alet kırılması","Perforasyon","Yetersiz şekillendirme/dezenfeksiyon","Fazla dolgu","Restorasyonsuz"],a:2,e:"Yetersiz kanal temizliği."},
    {q:"Tam protezde bilateral dengeli oklüzyon neden?",o:["Estetik","Stabilite","Aşınma önleme","Kolay yapım","Fonasyon"],a:1,e:"Protez stabilitesi için."},
    {q:"Winter en sık gömük pozisyon?",o:["Vertikal","Horizontal","Mezioangüler","Distoangüler","Transversal"],a:2,e:"Mezioangüler: %43."},
    {q:"Evre IV'ü ayıran özellik?",o:["5mm cep","Horizontal kayıp","Kapanış kollapsı","Mobilite","Gingivitis"],a:2,e:"Kapanış kollapsı, ≥5 diş kaybı."},
    {q:"Süt dişi pulpektomi dolgusu özelliği?",o:["Radyoopak","Rezorblabl","Antibakteriyal","Estetik","Sert"],a:1,e:"ZOE bazlı rezorblabl pat."},
    {q:"Baskı tarafında dominant hücre?",o:["Osteoblast","Fibroblast","Osteoklast","Sementoblast","Ameloblast"],a:2,e:"Osteoklast→kemik rezorbsiyonu."},
    {q:"AH Plus hangi grup?",o:["ZOE","Ca(OH)₂","Epoksi reçine","CIS","Bioseramik"],a:2,e:"Epoksi reçine: altın standart sealer."},
    {q:"ALARA prensibi?",o:["En yüksek doz","En düşük makul doz","Ortalama","Sabit","Kritik eşik"],a:1,e:"As Low As Reasonably Achievable."},
    {q:"İdeal kemik kalitesi (Lekholm-Zarb)?",o:["I","II","III","IV","V"],a:1,e:"Tip II: kalın kortikal+yoğun trabeküler."},
    {q:"ECC yaş sınırı?",o:["12 ay","36 ay","60 ay","71 ay","84 ay"],a:3,e:"71 ay (≈6 yaş) altı."},
    {q:"Periapical lezyonlarda kesin ayrım?",o:["CBCT","Periapical RG","Pano","Histolojik","Klinik muayene"],a:3,e:"Histolojik inceleme kesin ayrım sağlar."},
    {q:"Angle III alt molar?",o:["Distal","Nötral","Mezial","Posterior","Transversal"],a:2,e:"Sınıf III: alt molar mezial."},
    {q:"FC neden tartışmalı?",o:["Pahalı","Karsinojenite","Sertleşmez","Alerji","Radyolüsen"],a:1,e:"Formaldehit→potansiyel karsinojen."},
    {q:"MRONJ kemik ekspozisyonu min süresi?",o:["2 hf","4 hf","6 hf","8 hf","12 hf"],a:3,e:"≥8 hafta."},
    {q:"Band&Loop endikasyonu?",o:["Bilateral alt kayıp","Bilateral üst kayıp","Tek taraflı arka kayıp","Anterior kayıp","Tüm kayıp"],a:2,e:"Tek taraflı arka bölge süt dişi kaybı."},
    {q:"Vertikal kök fraktürü prognozu?",o:["İyi","Antibiyotik","Geri dönüşsüz, çekim","Bekle izle","KKT çözer"],a:2,e:"Geri dönüşsüz: çekim."},
    {q:"Koronale kaydırılmış flep ne için?",o:["Derin cep","Diş eti çekilmesi","İmplant","Kemik augmentasyonu","Çürük"],a:1,e:"Kök örtme cerrahisi."},
    {q:"Uzun vadeli en etkili retansiyon?",o:["Hawley","Vakuform","Sabit retainer 3-3","Positioner","Aktivatör"],a:2,e:"Sabit retainer: uzun vadeli en etkili."},
    {q:"Direkt kuafaj endikasyonu?",o:["Kronik pulpitis","Nekrotik pulpa","Mekanik non-enfekte açılma","İnternal rezorbsiyon","Periapical apse"],a:2,e:"Mekanik/travmatik non-enfekte açılma."},
    {q:"Panoramikte en sık artefakt?",o:["Ghost image","Metal artefakt","Scatter","Grid","Aliasing"],a:0,e:"Ghost image (hayalet görüntü)."},
    {q:"Serbest mesafe (freeway space)?",o:["0-1mm","2-4mm","5-7mm","8-10mm","10+mm"],a:1,e:"İVB-OVB = 2-4mm."},
    {q:"Modifiye Widman flebi endikasyonu?",o:["Sığ cep","Derin cep+kemik defekti","Dişeti büyümesi","Frenektomi","İmplant"],a:1,e:"Derin periodontal cepler."},
    {q:"CBCT en önemli avantajı?",o:["Düşük doz","3D görüntüleme","Ucuz","Portatif","Film gerektirmez"],a:1,e:"3 boyutlu. Doz 2D'den yüksek."},
    {q:"Osseointegrasyon nedir?",o:["Fibröz bağlanma","Titanyum-kemik doğrudan bağ","Yumuşak doku","Mekanik","Sement ile"],a:1,e:"Titanyum ile canlı kemik arasında doğrudan bağ."},
    {q:"Nance apareysi ne için?",o:["Alt bilateral kayıp","Üst bilateral arka kayıp","Tek taraflı ön kayıp","Crowding","TME"],a:1,e:"Üst bilateral arka: palatal button ile yer tutma."},
    {q:"3 duvarlı kemik defekti?",o:["Kayıp yok","3 duvar sağlam, 1 yıkılmış","Tüm duvarlar yıkılmış","Furkasyon","Horizontal"],a:1,e:"En iyi rejenerasyon potansiyeli."},
    {q:"Dikey kondenzasyonun avantajı?",o:["Daha ucuz","Boşlukları daha iyi doldurur","Daha basit","Daha az materyal","Radyolüsen"],a:1,e:"Isıtılmış gutta-perka: lateral kanallara daha iyi nüfuz."},
    {q:"OVB artarsa?",o:["Angular cheilitis","Kas yorulması, çene açıklığı↑","Derin kapanış","Değişmez","Kas gevşer"],a:1,e:"OVB↑: çene açıklığı↑, kas yorulması."},
    {q:"Apikal rezeksiyon kaç mm?",o:["1","2","3","5","10"],a:2,e:"3mm: apikal dallanmaların %98'i."},
    {q:"İdeal ortodontik kuvvet?",o:["5-10g","15-20g","25-50g","100-150g","200+g"],a:2,e:"25-50 g/diş: hafif ve sürekli."},
    {q:"En sık periodontal kemik kaybı tipi?",o:["Vertikal","Horizontal","Krater","Circumferential","Apikal"],a:1,e:"Horizontal: tüm duvarlar eşit rezorbe."},
    {q:"NaOCl temel etkisi?",o:["Smear tabakası","Organik doku çözme+antibakteriyal","Kalsifikasyon","Anestetik","Hemostatik"],a:1,e:"Organik doku çözer + güçlü antibakteriyal."},
    {q:"GBR membranı görevi?",o:["Enfeksiyon önleme","Epitel göçünü engelleme","Pıhtı","Anestezi","Drenaj"],a:1,e:"Yumuşak doku invajinasyonunu engeller."},
    {q:"Cam iyonomer avantajı?",o:["Yüksek estetik","Flor salınımı+kimyasal bağlanma","Yüksek basınç","Işık polimerizasyon","Çürük garantisi"],a:1,e:"Kimyasal bağlanma + flor salınımı."},
    {q:"İndirekt kuafaj endikasyonu?",o:["Pulpa açılmış","Nekrotik","Açılmamış ince dentin bariyeri","İnternal rezorbsiyon","Periapical"],a:2,e:"Derin çürükte pulpaya yakın ama açılmamış."},
    {q:"4mm+ sondaj derinliği?",o:["Normal sulkus","Yalancı cep","Patolojik periodontal cep","Dişeti büyümesi","Travma"],a:2,e:"Normal: 1-3mm. 4mm+: patolojik cep."},
    {q:"Kompozit en sık başarısızlık?",o:["Kırılma","Sekonder çürük","Renk değişimi","Büzülme","Alerji"],a:1,e:"Kenar sızıntısı→sekonder çürük."},
    {q:"Gebelikte dental radyografi?",o:["Kesinlikle çekilmez","CBCT","Panoramik","Kurşun önlük+periapical","Sadece ultrason"],a:3,e:"Acilde: kurşun önlük + periapical (en düşük doz)."},
    {q:"Oklüzal travma belirtisi?",o:["Dişeti kanaması","Mobilite artışı","Çürük","Dentin hassasiyeti","Mine hipoplazisi"],a:1,e:"Mobilite↑, PDL genişleme, vertikal kayıp."},
    {q:"Flor vernisi kaç aydan?",o:["Doğumdan","6 aydan","12 aydan","24 aydan","36 aydan"],a:1,e:"İlk diş sürdükten sonra (6 ay)."},
    {q:"En sık periapical lezyon?",o:["Kist","Granülom","Apse","Lateral kist","Residüel kist"],a:1,e:"Periapical granülom en sık."},
    {q:"İmplantlarda en sık materyal?",o:["Çelik","Kobalt-krom","Titanyum","Zirkonyum","Altın"],a:2,e:"Titanyum: biyouyumlu, osseointegrasyon."},
    {q:"Ağır kuvvette ne tür rezorbsiyon?",o:["Frontal","Undermining","Apikal","İnternal","Eksternal"],a:1,e:"Hiyalinizasyon→undermining rezorbsiyon."},
    {q:"EDTA irrigasyonda temel etki?",o:["Organik çözme","Smear tab. kaldırma (inorganik)","Antibakteriyal","Hemostatik","Vazokonstriktör"],a:1,e:"Kelatlama ile smear tabakası inorganik kısmı."},
    {q:"Endodontik tedavi sonrası koronal restorasyon neden kritik?",o:["Estetik","Mikrosızıntı→reenfeksiyon önleme","Renk","Sadece estetik","Vitalite"],a:1,e:"Koronal mikrosızıntı başarısızlık nedeni."},
    {q:"Ferric sülfat pulpotomide neden?",o:["Antibakteriyal","Hemostatik","Kanal dolgusu","Anestetik","Kalsifikasyon"],a:1,e:"Hemostaz sağlayan hemostatik ajan."},
    {q:"Biodentine'in MTA'ya avantajı?",o:["Ucuz","Hızlı sertleşme (~12dk)","Renk yok","Radyoopasitesi↑","Antibakteriyal↑"],a:1,e:"~12dk sertleşme (MTA: 3-4 saat)."},
    {q:"İmplant primer stabilitesi neye bağlı?",o:["Yumuşak doku","Kemik yoğunluğu+dizayn","Protez tipi","Yaş","Abutment"],a:1,e:"Kemik yoğunluğu + implant makrodizaynı."},
    {q:"Tarnow: papilla kaybı ne zaman olası?",o:["Kemik-kontakt <5mm","Kemik-kontakt >5mm","Kalın biyotip","Genç hasta","Sigara yok"],a:1,e:">5mm mesafede papilla kaybı olasılığı↑."},
    {q:"Oklüzyon kaydında üst çene neden esas?",o:["Daha büyük","Kraniyuma sabit bağlı","Kolay ölçü","Estetik","Diş sayısı"],a:1,e:"Üst çene sabit→referans. Mandibula hareketli."},
    {q:"Avülse diş ideal replantasyon?",o:["5dk","30dk","60dk","2 saat","6 saat"],a:1,e:"İdeal: 30dk. PDL canlılığı süreyle azalır."},
    {q:"İrreversibl pulpitis belirgin semptom?",o:["Spontan, yayılan, lokalize edilemeyen ağrı","Hafif ısı hassasiyeti","Perküsyon","Mobilite","Fistül"],a:0,e:"Spontan, yayılan, uzun süren ağrı."},
    {q:"Working length neye göre belirlenir?",o:["Radyografik apeks","Anatomik apeks","Apikal foramen","Apikal darlanma","Sement-dentin birleşimi"],a:3,e:"Apikal darlanma (minor foramen) esas."},
    {q:"OKS+sigara alveolit riskini neden artırır?",o:["Trombosit↑","Pıhtı oluşumu/stabilizasyonu bozulur","Bağışıklık↑","Anestezik↑","Kemik↑"],a:1,e:"OKS: fibrinoliz↑. Sigara: vazokonstrüksiyon."},
    {q:"Klorheksidin gargaranın yan etkisi?",o:["Dişeti kanaması","Kahverengi renk değişimi","Tat kaybı","Ülserasyon","Xerostomi"],a:1,e:"Uzun kullanım: kahverengi diş lekelenmesi."},
    {q:"1. molar hangi yaşta sürer?",o:["3","6","9","12","15"],a:1,e:"~6 yaş (altı yaş dişi)."},
    {q:"Diş rengini belirleyen ana yapı?",o:["Mine","Dentin","Pulpa","Sement","PDL"],a:1,e:"Mine translusent; dentin renk belirler."},
    {q:"kVp artışı ne sağlar?",o:["Daha sert X-ışını","Daha yumuşak","Doz↓","Süre↓","Kontrast↑"],a:0,e:"kVp↑→penetran (sert) ışın→kontrast↓."},
    {q:"Rezorbabl membranın dezavantajı?",o:["Pahalı","İkinci cerrahi","Mekanik dayanıklılık düşük","Enfeksiyon","Biyouyumsuzluk"],a:2,e:"İkinci cerrahi yok ama mekanik dayanıklılık↓."},
    {q:"Sınıf II kompozitin en kritik aşaması?",o:["Asitleme","Matriks+proksimal kontakt","Polisaj","Renk seçimi","Kurutma"],a:1,e:"Proksimal kontakt oluşturma."},
    {q:"SNA açısı ne ölçer?",o:["Mandibula","Maksilla sagittal pozisyonu","Alt kesici","Üst kesici","Gonial"],a:1,e:"Maksilla: SN düzlemine göre. Normal ~82°."},
    {q:"SRP ne zaman endike?",o:["Sadece gingivitiste","Cep ≥4mm","Cerrahi sonrası","Antibiyotikle","Cep derinliğine bakılmaz"],a:1,e:"≥4mm periodontal cepte."},
    {q:"TPA ne için?",o:["Alt ön yer tutma","Üst bilateral yer tutma/ankraj","Beyazlatma","Çene genişletme","Ekstrüzyon"],a:1,e:"Üst 1. molarlar arası ankraj."},
    {q:"Pulpa kanama kontrolü MTA öncesi?",o:["1dk","3-5dk","10-15dk","30dk","1 saat"],a:1,e:"Nemli pamukla 3-5dk basınç→hemostaz."},
    {q:"Amalgamın en önemli dezavantajı?",o:["Düşük dayanıklılık","Estetik olmaması+cıva","Bağlanma","Alerji","Maliyet"],a:1,e:"Gümüş rengi + cıva (Hg) içeriği."},
    {q:"Frankel apareyinin fonksiyonu?",o:["Diş hareketi","Vestibül kalkan→yanak baskısını kaldırma→çene yönlendirme","Sabit aparey","Retansiyon","Hızlı genişletme"],a:1,e:"Yanak/dudak baskısı kaldırılır→büyüme yönlendirilir."},
    {q:"İnterradiküler lifler hangi dişlerde?",o:["Tek köklü","Çok köklü","Kesiciler","Kaninler","Tüm dişlerde"],a:1,e:"Çok köklü dişlerde (molar) kökler arası."},
    {q:"CAD/CAM dijital ölçü avantajı?",o:["Ucuz","Hassas+hasta konforlu","Lab gerektirmez","Her vakada","Geçici gerektirmez"],a:1,e:"Konforlu, hassas, distorsiyonsuz."}
  ]
};

// --- EXAM STATE ---
let EX = { on:false, timed:false, qs:[], ans:{}, cur:0, timer:null, left:150*60 };

function startExam(timed) {
  EX = { on:true, timed, qs:[...Q.temel,...Q.klinik], ans:{}, cur:0, timer:null, left:150*60 };
  document.getElementById('exam-start').classList.add('hidden');
  document.getElementById('exam-active').classList.remove('hidden');
  document.getElementById('exam-results').classList.add('hidden');
  if (timed) EX.timer = setInterval(()=>{ EX.left--; if(EX.left<=0){clearInterval(EX.timer);endExam();} renderQ(); },1000);
  renderQ();
}

function renderQ() {
  const q=EX.qs[EX.cur], tot=EX.qs.length, done=Object.keys(EX.ans).length;
  const sec=EX.cur<40?'Temel':'Klinik';
  const ft=s=>{const m=Math.floor(s/60);return m+':'+(s%60+'').padStart(2,'0')};
  let dots='<div class="flex flex-wrap gap-1 mb-3">';
  for(let i=0;i<tot;i++){
    let c='q-dot';
    if(EX.ans[i]!==undefined)c+=' done';
    if(i===EX.cur)c+=' cur';
    dots+=`<div class="${c}" onclick="EX.cur=${i};renderQ()">${i+1}</div>`;
  }
  dots+='</div>';
  let opts='';
  q.o.forEach((o,j)=>{
    const sel=EX.ans[EX.cur]===j?' selected':'';
    opts+=`<button class="ans-btn${sel}" onclick="EX.ans[EX.cur]=${j};${EX.cur<tot-1?'EX.cur++;':''}renderQ()">${String.fromCharCode(65+j)}) ${o}</button>`;
  });
  document.getElementById('exam-active').innerHTML=`
    <div class="bg-white rounded-xl p-3 border mb-3 flex justify-between items-center">
      <span class="text-sm font-semibold">${sec} · ${done}/${tot}</span>
      ${EX.timed?`<span class="font-bold ${EX.left<600?'text-red-600':'text-slate-700'} timer-text">⏱️ ${ft(EX.left)}</span>`:'<span class="text-sm text-slate-400">Süresiz</span>'}
    </div>
    <div class="bg-white rounded-xl p-3 border mb-3 max-h-36 overflow-y-auto">${dots}</div>
    <div class="bg-white rounded-xl p-5 border mb-3">
      <p class="font-semibold text-slate-800 mb-4"><span class="bg-slate-800 text-white text-xs px-2 py-1 rounded mr-2">${EX.cur+1}</span>${q.q}</p>
      ${opts}
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2">
        ${EX.cur>0?'<button onclick="EX.cur--;renderQ()" class="bg-white border rounded-lg px-4 py-2 text-sm">← Önceki</button>':''}
        ${EX.cur<tot-1?'<button onclick="EX.cur++;renderQ()" class="bg-slate-800 text-white rounded-lg px-4 py-2 text-sm">Sonraki →</button>':''}
      </div>
      <button onclick="endExam()" class="bg-red-600 text-white rounded-lg px-4 py-2 text-sm font-bold">🏁 Bitir</button>
    </div>`;
}

function endExam() {
  if(EX.timer)clearInterval(EX.timer);
  document.getElementById('exam-active').classList.add('hidden');
  document.getElementById('exam-results').classList.remove('hidden');
  let tD=0,tY=0,tB=0,kD=0,kY=0,kB=0;
  EX.qs.forEach((q,i)=>{const a=EX.ans[i];if(i<40){if(a===undefined)tB++;else if(a===q.a)tD++;else tY++}else{if(a===undefined)kB++;else if(a===q.a)kD++;else kY++}});
  const tN=tD-tY/4, kN=kD-kY/4, tot=tN+kN, allD=tD+kD, allY=tY+kY, allB=tB+kB;
  let g,gc;
  if(tot>=100){g='🌟 Mükemmel';gc='text-green-600'}
  else if(tot>=80){g='👍 Çok İyi';gc='text-blue-600'}
  else if(tot>=60){g='📚 İyi';gc='text-amber-600'}
  else if(tot>=40){g='⚠️ Orta';gc='text-orange-600'}
  else{g='🔴 Gelişmeli';gc='text-red-600'}

  let rev='<details class="mt-4"><summary class="cursor-pointer text-sm font-semibold text-slate-600 mb-2">📋 Tüm Sorular ve Cevaplar</summary><div class="space-y-2 mt-2">';
  EX.qs.forEach((q,i)=>{
    const a=EX.ans[i],ok=a===q.a,bl=a===undefined;
    const ic=bl?'⬜':ok?'✅':'❌';
    rev+=`<div class="bg-white rounded-lg border p-3"><p class="text-sm mb-1">${ic} <strong>${i+1}.</strong> ${q.q}</p>`;
    q.o.forEach((o,j)=>{
      let c='text-xs px-2 py-0.5 rounded block ';
      if(j===q.a)c+='bg-green-100 text-green-800 font-semibold';
      else if(j===a&&!ok)c+='bg-red-100 text-red-800';
      else c+='text-slate-400';
      rev+=`<span class="${c}">${String.fromCharCode(65+j)}) ${o}${j===q.a?' ✓':''}</span>`;
    });
    rev+=`<p class="text-xs text-blue-700 mt-1 bg-blue-50 rounded p-1">💡 ${q.e}</p></div>`;
  });
  rev+='</div></details>';

  document.getElementById('exam-results').innerHTML=`
    <div class="bg-white rounded-xl p-6 border text-center mb-4">
      <div class="text-4xl mb-2">${tot>=60?'🎉':'📖'}</div>
      <div class="text-2xl font-bold ${gc}">${g}</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
        <div class="bg-green-50 rounded-lg p-3"><div class="text-xl font-bold text-green-600">${allD}</div>Doğru</div>
        <div class="bg-red-50 rounded-lg p-3"><div class="text-xl font-bold text-red-600">${allY}</div>Yanlış</div>
        <div class="bg-slate-50 rounded-lg p-3"><div class="text-xl font-bold text-slate-600">${allB}</div>Boş</div>
        <div class="bg-purple-50 rounded-lg p-3"><div class="text-xl font-bold text-purple-600">${tot.toFixed(1)}</div>Net</div>
      </div>
      <div class="grid grid-cols-2 gap-3 mt-3 text-sm">
        <div class="bg-blue-50 rounded-lg p-2">Temel: <strong>${tN.toFixed(1)}/40</strong></div>
        <div class="bg-green-50 rounded-lg p-2">Klinik: <strong>${kN.toFixed(1)}/80</strong></div>
      </div>
      <button onclick="document.getElementById('exam-start').classList.remove('hidden');document.getElementById('exam-results').classList.add('hidden')" class="mt-4 bg-slate-800 text-white px-6 py-2 rounded-lg text-sm font-bold">🔄 Tekrar</button>
    </div>
    ${rev}`;
}

// ========================================
// FLASHCARDS
// ========================================
const FC=[
  {c:"Endodonti",q:"KKT'de en sık kaçırılan kanal?",a:"MB2 — Üst 1. molar. %50-95 vakada bulunur."},
  {c:"Periodontoloji",q:"2017 Evre IV'ü ayıran özellik?",a:"Kapanış kollapsı, estetik bozukluk, ≥5 diş kaybı."},
  {c:"Cerrahi",q:"Winter en sık gömük pozisyon?",a:"Mezioangüler (%43). En zor: distoangüler."},
  {c:"Protetik",q:"Kennedy Sınıf I?",a:"Bilateral serbest uçlu dişsizlik. En sık. Destek: diş+doku."},
  {c:"Ortodonti",q:"Baskı tarafında dominant hücre?",a:"Osteoklast→rezorbsiyon. Gerilim: osteoblast→apozisyon."},
  {c:"Farmakoloji",q:"Amid LA nerede metabolize?",a:"Karaciğer. Ester: plazmada. Artikain: tiyofen halkası."},
  {c:"Anatomi",q:"TME açılmada ilk hareket?",a:"Rotasyon (alt kompartman, 25mm). Sonra translasyon."},
  {c:"Histoloji",q:"Mine birikim yönü?",a:"İçten dışa (ameloblast). Dentin: dıştan içe (odontoblast)."},
  {c:"Pedodonti",q:"Süt dişi pulpektomi dolgusu?",a:"Rezorblabl olmalı. ZOE bazlı pat: kök rezorbsiyonuyla erir."},
  {c:"Radyoloji",q:"ALARA ne demek?",a:"As Low As Reasonably Achievable. Minimum doz prensibi."},
  {c:"Endodonti",q:"AH Plus hangi grup?",a:"Epoksi reçine bazlı altın standart sealer."},
  {c:"Periodontoloji",q:"Miller I altın standart tedavi?",a:"Bağ dokusu grefti + koronale flep → tam kök örtme."},
  {c:"Cerrahi",q:"Alveolit ne zaman/bulgusu?",a:"3-5. gün. Pıhtı kaybı + şiddetli ağrı + fetor."},
  {c:"Protetik",q:"Serbest mesafe (freeway)?",a:"İVB − OVB = 2-4mm. Protez dikey boyut tespitinde kritik."},
  {c:"Ortodonti",q:"Angle II Div 2 kesiciler?",a:"Retroklüzyon (linguale yatık) + derin kapanış (deepbite)."},
  {c:"Farmakoloji",q:"Aspirin neden 7 gün kesilir?",a:"İrreversibl COX-1 → trombosit ömrü boyunca agregasyon↓."},
  {c:"Anatomi",q:"Lingula mandibulae nerede?",a:"For. mandibulae ön-üst kenarı. İnferior alveolar blok işareti."},
  {c:"Histoloji",q:"Hidrodinamik teori?",a:"Dentin hassasiyeti: tübüler sıvı hareketi → sinir uyarısı."},
  {c:"Pedodonti",q:"ECC tanımı ve yaş sınırı?",a:"71 ay altı ≥1 süt dişinde çürük/dolgu/kayıp."},
  {c:"Radyoloji",q:"Radyografik doz sırası?",a:"Periapical < Bite-wing < Pano < CBCT < BT."}
];

let fc={i:0,fl:false,cards:[...FC],ok:[],re:[]};

function fcRender(){
  const c=fc.cards,i=fc.i;
  if(i>=c.length){document.getElementById('fc-q').textContent='Tamamlandı! 🎉';document.getElementById('fc-a').textContent='Sıfırlamak için 🔀 basın.';return}
  fc.fl=false;
  document.getElementById('flip-card').classList.remove('flipped');
  document.getElementById('fc-q').textContent=c[i].q;
  document.getElementById('fc-a').textContent=c[i].a;
  document.getElementById('fc-cat').textContent=c[i].c;
  document.getElementById('fc-pos').textContent=`${i+1}/${c.length}`;
  document.getElementById('fc-ok').textContent=fc.ok.length;
  document.getElementById('fc-re').textContent=fc.re.length;
  document.getElementById('fc-left').textContent=Math.max(0,c.length-i);
}
function fcFlip(){fc.fl=!fc.fl;document.getElementById('flip-card').classList.toggle('flipped',fc.fl)}
function fcNext(){if(fc.i<fc.cards.length-1){fc.i++;fcRender()}}
function fcPrev(){if(fc.i>0){fc.i--;fcRender()}}
function fcMark(t){
  const q=fc.cards[fc.i].q;
  if(t==='ok'){if(!fc.ok.includes(q))fc.ok.push(q);fc.re=fc.re.filter(x=>x!==q)}
  else{if(!fc.re.includes(q))fc.re.push(q);fc.ok=fc.ok.filter(x=>x!==q)}
  fcNext();fcRender();
}
function fcShuffle(){fc.cards=[...fc.cards].sort(()=>Math.random()-.5);fc.i=0;fcRender()}
function fcFilter(){
  const v=document.getElementById('fc-filter').value;
  fc.cards=v==='all'?[...FC]:FC.filter(c=>c.c===v);
  fc.i=0;fc.ok=[];fc.re=[];fcRender();
}
fcRender();

// ========================================
// CALCULATOR
// ========================================
function calc(){
  const td=+(document.getElementById('c-td').value)||0;
  const ty=+(document.getElementById('c-ty').value)||0;
  const kd=+(document.getElementById('c-kd').value)||0;
  const ky=+(document.getElementById('c-ky').value)||0;
  if(!td&&!ty&&!kd&&!ky){document.getElementById('calc-out').classList.add('hidden');return}
  document.getElementById('calc-out').classList.remove('hidden');
  const tn=td-ty/4, kn=kd-ky/4, tot=tn+kn;
  document.getElementById('r-tn').textContent=tn.toFixed(1);
  document.getElementById('r-kn').textContent=kn.toFixed(1);
  document.getElementById('r-tot').textContent=tot.toFixed(1);
  let p,m;
  if(tot>=100){p='Ortodonti/Endo';m='🌟 Harika! Üst sıralarda yerleşme şansın yüksek.'}
  else if(tot>=85){p='Cerrahi/Perio';m='👍 Güçlü. Eksikleri gidermeye devam.'}
  else if(tot>=70){p='Pedodonti/Rest.';m='📚 İyi gidiyorsun. Tekrar ve pratik yap.'}
  else if(tot>=55){p='Radyoloji/Pato.';m='⚠️ Orta düzey. Sistematik çalışma planı yap.'}
  else{p='Zor';m='🔴 Temel konulara dön, düzenli çalış.'}
  document.getElementById('r-place').textContent=p;
  document.getElementById('r-bar').style.width=Math.min(100,(tot/120)*100)+'%';
  document.getElementById('r-msg').textContent=m;
}
