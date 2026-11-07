import {
  alignerCloseUp,
  alignerInHand,
  alignerInsertion,
  bridgeOnBase,
  bridgeOnBlack,
  ceramicCrowns,
  checkUpInProgress,
  digitalScanning,
  implantDetail,
  patientInChair,
  procedureCloseUp,
  restorationDetail,
  retainerInGlove,
  shadeGuideInUse,
  shadeMatching,
  shadeMatchSmile,
  smileCloseUp,
  smileInMirror,
  smileOutdoors,
  smilePortraitWarm,
  smileWide,
  treatmentInProgress,
  veneerShells,
  whiteningTray,
  xrayConsultation,
} from "@/components/site/clinicPhotos";

/**
 * The treatment pages in Turkish, keyed by the same slugs as the English set so
 * every link resolves in either language. Wording stays deliberately careful:
 * figures are typical ranges rather than promises, and every plan is confirmed
 * after an examination.
 */
export const treatmentsTr = {
  "dental-veneers": {
    slug: "dental-veneers",
    name: "Diş laminaları",
    metaTitle: "İstanbul'da diş laminaları — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da özel üretim porselen diş laminaları: laminalar nasıl planlanır, nasıl uygulanır ve nasıl bakım yapılır, kimlere uygun olduğu ve konsültasyon randevusu.",
    hero: {
      label: "Tedavi",
      heading: "Diş laminaları",
      intro:
        "Dişlerinizin ön yüzüne yapıştırılan, rengini, boyutunu ve hattını değiştirmek için şekillendirilmiş ince el yapımı yapraklar — her şey üretilmeden önce kendi gülüşünüze göre planlanır.",
      img: shadeMatchSmile,
      alt: "Tedavi öncesi klinikte diş rengi karşılaştırılan hasta",
      imageClass: "object-[50%_30%]",
    },
    facts: [
      { label: "Randevular", value: "2–3 ziyaret" },
      { label: "Koltuk süresi", value: "Ziyaret başına 60–90 dakika" },
      { label: "Kalıcılık", value: "Doğru bakımla genellikle 10–15 yıl" },
    ],
    highlights: [
      {
        label: "Önce tasarım",
        text: "Önerilen şekil, tek bir dişe dokunulmadan önce kendi dişleriniz üzerinde görülür.",
      },
      {
        label: "Minimum hazırlık",
        text: "Çoğu vakada yalnızca ince bir mine tabakası düzenlenir; bazı vakalarda hiç gerekmez.",
      },
      {
        label: "Sonradan onarılabilir",
        text: "Kırılan tek bir lamina genellikle tüm takımı yenilemek yerine tek başına yeniden yapılabilir.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "Dişin ön yüzünde kişiye özel bir yaprak",
      paragraphs: [
        "Lamina; porselen veya katmanlı kompozitten yapılan ince bir tabakanın dişin ön yüzeyine yapıştırılmasıdır. Gülümsediğinizde gördüğünüzü değiştirir: renk tonunu, şekli, uzunluğu ve ön dişlerin birbiriyle uyumunu.",
        "Laminaları ağırlıklı olarak görünen dişlerde, genellikle ön altı dişte kullanıyoruz. Planlama fotoğraflar, dijital tarama ve bir maket ile başlar; böylece önerilen şekil hiçbir şey üretilmeden önce kendi dişlerinizde denenebilir. Renk tonu gün ışığında sizinle birlikte seçilir ve beyazlatma planda yer alıyorsa önce yapılır: porselen rengini sonradan korur, dolayısıyla komşu dişler son renge uyumlanır, tersi değil.",
      ],
      img: shadeGuideInUse,
      alt: "Klinikte renk skalası ile diş rengini karşılaştıran hasta",
      imageClass: "object-[50%_28%]",
      caption: "Hiçbir şey üretilmeden önce gün ışığında renk seçimi.",
    },
    benefits: {
      label: "Hastalar neden seçiyor",
      heading: "Laminaların değiştirebildikleri",
      intro:
        "Laminalar ön dişlerin görünümünü düzenler, kapanışı değil; bu nedenle genellikle genel diş bakımının yerine değil, onunla birlikte planlanır.",
      items: [
        {
          title: "Yüzünüze göre tasarlanmış bir şekil",
          text: "Uzunluk, genişlik ve kenar formu hazır bir kalıptan alınmak yerine gülüşünüzün etrafına çizilir; tasarımı üretilmeden önce görürsünüz.",
        },
        {
          title: "Çok az diş dokusu alınır",
          text: "Çoğu vakada yalnızca ince bir mine tabakası düzenlenir, bazılarında hiç gerekmez. Alınacak miktar önceden sizinle kararlaştırılır.",
        },
        {
          title: "Rengini koruyan bir sonuç",
          text: "Porselen tonunu iyi korur. Kahve, çay, kırmızı şarap ve tütün doğal dişleri ve kompoziti, sırlı seramiğe göre daha çok etkiler.",
        },
        {
          title: "Yalnızca renk değişimi değil",
          text: "Lekeleri kapatmanın yanı sıra küçük boşlukları kapatabilir, kırık kenarları yeniden oluşturabilir ve kısa ya da hafif dönmüş dişleri eşitleyebilir.",
        },
        {
          title: "Sonradan onarılabilir",
          text: "Bir lamina kırılır ya da gevşerse, gülüşün tamamı yenilenmeden genellikle yalnızca o parça yeniden yapılabilir veya yapıştırılabilir.",
        },
      ],
    },
    suitability: {
      label: "Kimlere uygun",
      heading: "Laminalar şu durumlarda değerlendirilebilir",
      intro: "Değerlendirme, üstteki görünüm kadar alttaki dişle de ilgilidir.",
      items: [
        "Beyazlatmanın düzeltemediği, kanal tedavisi sonrası ya da dişin içinden gelen lekelenmeler gibi renk değişimleri",
        "Kompozit onarımlardan sonra tekrar tekrar kırılan, aşınmış veya düzensiz kenarlar",
        "Ön dişler arasındaki küçük boşluklar ya da hafif dönmüş, sırası bozulmuş dişler",
        "Görünen dişlerde lekelenmiş ve artık uyum sağlamayan eski kompozit dolgular",
        "Konum değişikliği değil, şekil değişikliği gereken dişler",
      ],
      note:
        "Önce diş eti hastalığı tedavi edilir; dişlerinizi sıkıyor ya da gıcırdatıyorsanız laminalar takılmadan önce gece plağı hazırlanır — aksi halde yeni kenarlar bu yükü taşır.",
      img: patientInChair,
      alt: "Estetik diş randevusunda tedavi koltuğundaki hasta",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "Süreç",
      heading: "Tedavi nasıl ilerler",
      intro:
        "Çoğu lamina vakası birkaç haftaya yayılan iki ya da üç ziyarette tamamlanır. Tasarım onaylanmadan hiçbir dişe hazırlık yapılmaz.",
      steps: [
        {
          title: "Muayene, fotoğraflar ve tarama",
          text: "Dişleri ve diş etlerini inceler, fotoğraf ve dijital tarama alır ve neleri değiştirmek istediğinizi konuşuruz. Yanınızda yazılı bir plan ve maliyet hakkında bir fikirle ayrılırsınız.",
        },
        {
          title: "Tasarım ve ön izleme",
          text: "Önerilen şekil mum model ya da dijital tasarım olarak hazırlanır ve dişleriniz üzerinde maket olarak denenir. Düzeltmeler henüz bedelsizken bu aşamada yapılır.",
        },
        {
          title: "Hazırlık günü",
          text: "Gerekirse lokal anestezi altında ince bir mine tabakası düzenlenir ve son tarama veya ölçü alınır. Dişler hazırlandıysa geçici laminalar takılır.",
        },
        {
          title: "Uygulama",
          text: "Her lamina tek tek denenir, kapanışınız ve komşu dişlerle uyumu kontrol edilir, ardından ışıkla sertleşen siman ile yapıştırılır. Çoğu kişi aynı akşam normal şekilde yemek yiyebilir.",
        },
        {
          title: "Kontrol",
          text: "Birkaç hafta sonra kapanışı ve diş eti kenarlarını kontrol eder, lamina kenarlarının evde nasıl temizleneceğini gösteririz.",
        },
      ],
    },
    aftercare: {
      label: "İyileşme ve bakım",
      heading: "Yeni laminalarınıza bakım",
      intro:
        "Gerçek anlamda bir iyileşme süresi yoktur; önemli olan ilk hafta ve ardından gelen alışkanlıklardır.",
      items: [
        {
          title: "İlk günler",
          text: "Siman otururken sıcak-soğuk hassasiyeti görülebilir ve genellikle bir iki hafta içinde azalır. Diş eti kenarı hassassa yumuşak gıdalar yardımcı olur.",
        },
        {
          title: "Yemek",
          text: "Normal beslenin; ancak ön dişlerinizi alet gibi kullanmayın. Tırnak yemek, paket açmak ve buz çiğnemek porseleni kıran davranışlardır.",
        },
        {
          title: "Temizlik",
          text: "Günde iki kez fırçalayın ve lamina kenarlarını diş ipi ya da arayüz fırçasıyla temizleyin. Atlandığında sorunlar tam olarak diş etiyle birleştiği o hatta başlar.",
        },
        {
          title: "Gıcırdatma",
          text: "Geceleri dişlerinizi sıkıyor ya da gıcırdatıyorsanız sizin için hazırladığımız gece plağını kullanın. Plak, lamina kenarlarını taşımak için tasarlanmadıkları yükten korur.",
        },
        {
          title: "Kontroller",
          text: "Altı ile on iki ayda bir kontrol. Kırılan veya gevşeyen bir lamina, beklemek yerine erken gelindiğinde genellikle onarılabilir.",
        },
      ],
      img: smileCloseUp,
      alt: "Tedavi sonrası eşit ve doğal görünen bir gülüşün yakın çekimi",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Sonuçlar",
      heading: "Tamamlanan gülüş ve arkasındaki malzeme",
      intro:
        "Tedavi bittiğinde neye benzediği ve bunu sağlayan porselen: her yaprak tek bir parça olarak şekillendirilir, renklendirilir ve yerine yapıştırılır.",
      items: [
        {
          img: smilePortraitWarm,
          alt: "Doğal, eşit ve aydınlık gülüşe sahip hasta",
          caption: "Diş diş eşleştirilmiş doğal bir bitiş",
        },
        {
          img: smileWide,
          alt: "Eşit ön diş dizisinin yakın çekimi",
          caption: "Ön dişlerde eşitlenmiş kenarlar",
        },
        {
          img: veneerShells,
          alt: "Yapıştırma öncesi dizilmiş porselen lamina yaprakları",
          caption: "Yapıştırma öncesi renklendirilen porselen yapraklar",
        },
      ],
    },
    cta: {
      heading: "Önce şekli görmek ister misiniz?",
      text: "Konsültasyon, fotoğraflar ve tasarım ön izlemesiyle başlayalım. Herhangi bir dişe dokunulmadan önce görünümü siz onaylarsınız.",
    },
    faqs: [
      {
        q: "Laminalar dişlere zarar verir mi?",
        a: "Hazırlık yapılan bir dişten ince bir mine tabakası alınır ve mine geri gelmez; bu nedenle karar uzun vadeli bir karardır. Çoğu vakada hazırlık minimumdur ya da hiç gerekmez — sizinkinin hangisi olduğunu söyleriz ve herhangi bir işlem yapılmadan önce kararı siz verirsiniz. Hazırlık yapılan bir dişin sonrasında eksiksiz görünmesi ve hissettirmesi için her zaman bir lamina veya kron gerekir.",
      },
      {
        q: "Porselen mi, kompozit lamina mı?",
        a: "Porselen laboratuvarda üretilir: daha güçlüdür, rengini daha iyi korur ve genellikle iki ziyaret gerektirir. Kompozit doğrudan diş üzerinde, çoğu zaman tek randevuda yapılır, daha ekonomiktir ve daha erken lekelenebilir veya kırılabilir; ancak onarımı ve eklenmesi kolaydır. İkisi de makul seçeneklerdir ve hangisinin sizin vakanıza uyduğunu söyleriz.",
      },
      {
        q: "Diğer dişlerim gibi görünürler mi?",
        a: "Amaç bu. Renk tonu, yüzey dokusu ve kenarların ışık geçirgenliği doğal dişlerinize uyumlanır; şekil ise bir katalogdan kopyalanmak yerine yüzünüze göre tasarlanır. Kimse hangi dişin lamina olduğunu işaret edebilmemelidir.",
      },
      {
        q: "Laminaları sonradan beyazlatabilir miyim?",
        a: "Hayır. Beyazlatma jeli porselen veya kompozitte değil, doğal diş dokusunda etki eder; bu nedenle laminalar tonunu korur. Planda yer alıyorsa beyazlatmanın, laminaların rengi seçilmeden önce yapılmasının nedeni budur. Yanlarındaki doğal dişler gerektiğinde sonradan yine beyazlatılabilir.",
      },
      {
        q: "Laminalar ne kadar dayanır?",
        a: "Kapanışınıza, alışkanlıklarınıza ve kenarları ne kadar iyi temizlediğinize göre değişir. On ile on beş yıl yaygın bir aralıktır ve çoğu daha uzun dayanır. Biri bozulursa genellikle tüm takım yerine tek başına yenilenir.",
      },
      {
        q: "Tedavi ağrılı mı?",
        a: "Hazırlık lokal anestezi altında yapılır, dolayısıyla işlem sırasında ağrı olmaz. Sonrasında dişler ve diş etleri, özellikle geçici laminalar takılıyken birkaç gün hassas olabilir. Son laminaların yapıştırılması genellikle rahat geçer.",
      },
    ],
  },

  "dental-crowns": {
    slug: "dental-crowns",
    name: "Diş kronları",
    metaTitle: "İstanbul'da diş kronları — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da diş kronları: kron ne zaman gerekir, diş nasıl hazırlanır ve taranır, kullandığımız malzemeler, bakım ve tedaviye özel soruların yanıtları.",
    hero: {
      label: "Tedavi",
      heading: "Diş kronları",
      intro:
        "Kron, bir dişin görünen tüm bölümünü kaplar; çatlamış, aşınmış veya yoğun onarılmış bir dişi yeniden oluşturur ve yanındaki dişlerin rengine uyumlanır.",
      img: bridgeOnBlack,
      alt: "Koyu arka plan önünde fotoğraflanan porselen kronlar",
      imageClass: "object-[50%_50%]",
    },
    facts: [
      { label: "Randevular", value: "2 ziyaret" },
      { label: "Koltuk süresi", value: "Ziyaret başına 60–90 dakika" },
      { label: "Kalıcılık", value: "Doğru bakımla genellikle 10–15 yıl" },
    ],
    highlights: [
      {
        label: "Kalanı korur",
        text: "Kron dişi sarar; kalan duvarları ve tüberkülleri bir arada tutar.",
      },
      {
        label: "İki ziyaret",
        text: "İlk randevuda şekillendirilir ve taranır, ikincisinde takılır ve yapıştırılır.",
      },
      {
        label: "Ölçü değil, tarama",
        text: "Kron, dişin dijital taramasından tasarlanır ve kapanışınıza göre kontrol edilir.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "Tam kaplama bir restorasyon",
      paragraphs: [
        "Kron, dişin diş eti üzerindeki tamamını kaplayan bir başlıktır. Dolgunun tutunamayacağı kadar az sağlam doku kaldığında kullanılır: çatlamış bir tüberkül, büyük ve eski bir dolgu, gıcırdatma nedeniyle aşınmış diş ya da kanal tedavisi görmüş bir diş.",
        "Kronlar zirkonyum veya lityum disilikat gibi seramiklerden ya da metal-seramik kombinasyonundan üretilir. Hazırlanan dişi kaşık ölçü ile değil tarayarak dijital olarak tasarlar ve frezelenmek veya preslenmek üzere laboratuvara göndeririz. Şekil, temas noktaları ve kapanış karşı dişle kontrol edilir; renk tonu gün ışığında komşu dişlere göre eşleştirilir.",
      ],
      img: restorationDetail,
      alt: "Restore edilmiş ön dişi ayna ile kontrol eden diş hekimi",
      imageClass: "object-[50%_35%]",
      caption: "Bir kron, diş eti boyunca uzanan kenarda değerlendirilir.",
    },
    benefits: {
      label: "Hastalar neden seçiyor",
      heading: "Kronun dolgunun yapamadığı şey",
      intro:
        "Kron dolgudan daha kapsamlı bir tedavidir; bu nedenle neyi koruduğunu net biçimde bilmekte fayda var.",
      items: [
        {
          title: "Zayıflamış dişi bir arada tutar",
          text: "Dolgu dişin içinde oturur; kron ise etrafını sarar. Kalan duvarları ve tüberkülleri esneyip daha fazla çatlamasına izin vermek yerine bir arada tutar.",
        },
        {
          title: "Çiğneme yüzeyini yeniden oluşturur",
          text: "Kısa veya içi boşalmış bir diş bırakmak yerine çiğneme konforu ve karşı dişle temas yeniden kurgulanabilir.",
        },
        {
          title: "Kanal tedavisi görmüş dişi korur",
          text: "Kanal tedavisinden sonra bir diş daha kırılgandır ve günlük çiğneme yükünü taşımak için çoğu zaman bir kron gerekir.",
        },
        {
          title: "Uyumlu görünüm",
          text: "Modern seramikler renk tonu ve ışık geçirgenliği açısından yakından eşleştirilebilir; bu da en çok konuşurken görünen dişlerde önemlidir.",
        },
        {
          title: "Köprü ya da protez taşır",
          text: "Kronlar aynı zamanda bir köprünün taşıyıcıları veya hareketli bölümlü protezin dayanakları olarak da kullanılabilir.",
        },
      ],
    },
    suitability: {
      label: "Kimlere uygun",
      heading: "Kron genellikle şu durumlarda doğru seçimdir",
      intro:
        "Kronu dolgu, onley veya çekim ile karşılaştırır ve sizin dişinize özel dengeyi açıklarız.",
      items: [
        "Çatlağı olan ya da tüberkülü kırılmış bir diş",
        "Genişliğinin yaklaşık yarısından fazlası dolgu maddesiyle değiştirilmiş bir diş",
        "Kanal tedavisi görmüş bir diş",
        "Yüksekliğin yeniden kazandırılması gereken, gıcırdatma veya asit erozyonu ile aşınmış dişler",
        "Yoğun renk değişimi olan ve beyazlatma ile düzeltilemeyen bir diş",
        "Sabit köprü için destek gereken dişler",
      ],
      note:
        "Çürük ya da çatlak sinire ulaştıysa önce kanal tedavisi yapılır — tedavi edilmemiş bir sorunun üzerine konan kron onu yalnızca gizler.",
      img: digitalScanning,
      alt: "Bir dişin dijital modelini gösteren ağız içi tarayıcı ekranı",
      imageClass: "object-[50%_35%]",
    },
    process: {
      label: "Süreç",
      heading: "Tedavi nasıl ilerler",
      intro:
        "Genellikle bir iki hafta arayla iki ziyaret; arada geçici kron ile diş hiçbir zaman açıkta bırakılmaz.",
      steps: [
        {
          title: "Muayene ve röntgen",
          text: "Siniri kontrol eder, eski dolguların altındaki çatlak ve çürükleri inceler ve dişin korunacak kadar güçlü olup olmadığını doğrularız.",
        },
        {
          title: "Hazırlık",
          text: "Lokal anestezi altında diş, kron üzerine hacimli görünmeden oturacak şekilde yeniden şekillendirilir ve dijital tarama alınır.",
        },
        {
          title: "Renk ve tasarım",
          text: "Renk tonu anestezi etkisini yitirmeden seçilir ve kron, laboratuvarın üretmesi için taramadan tasarlanır.",
        },
        {
          title: "Geçici kron",
          text: "Geçici kron, kalıcı kron üretilirken dişi korur ve boşluğu muhafaza eder; bu süre genellikle bir iki haftadır.",
        },
        {
          title: "Takma ve yapıştırma",
          text: "Tamamlanan kron denenir, kapanış ve komşu dişlerle temas noktaları kontrol edilir, ardından yapıştırılır.",
        },
      ],
    },
    aftercare: {
      label: "İyileşme ve bakım",
      heading: "Kron sonrası günler",
      intro:
        "Çoğu kişi sürecin ne kadar kolay geçtiğine şaşırır; ancak kron ile diş arasındaki birleşim ömür boyu dikkat ister.",
      items: [
        {
          title: "Uyuşukluk geçene kadar",
          text: "Lokal anestezinin etkisi geçmeden bir şey yemeyin. Yanak veya dilinizi fark etmeden ısırmak kolaydır.",
        },
        {
          title: "İlk hafta",
          text: "Dişin etrafındaki bağ dokusu yerleşirken çiğnerken hafif hassasiyet normaldir. Isırdığınızda yüksek geliyorsa tekrar gelin; küçük bir düzeltme kısa sürer.",
        },
        {
          title: "Kenarın temizliği",
          text: "Kronun dişle birleştiği hat, çürüğün yeniden başladığı yerdir. Burayı her gün diş ipi veya arayüz fırçasıyla temizleyin; yalnızca diş fırçası yetmez.",
        },
        {
          title: "Geçici kronlar",
          text: "Geçici kron üzerinde yapışkan veya sert gıdalardan kaçının ve yanından nazikçe diş ipi kullanın. Çıkarsa saklayın ve bizi arayın; kendiniz yapıştırmaya çalışmayın.",
        },
        {
          title: "Kontroller",
          text: "Altı ile on iki ayda bir kontrol ve zaman zaman kenarın sızdırmadığını doğrulamak için röntgen.",
        },
      ],
      img: checkUpInProgress,
      alt: "Kontrol randevusunda hastanın dişlerini inceleyen diş hekimi",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Sonuçlar",
      heading: "Laboratuvardan koltuğa",
      intro:
        "Bir kron, ne kadar az fark edildiğiyle değerlendirilir: renk tonu, yüzey dokusu ve diş eti boyunca uzanan hat. Bunlar sonucu belirleyen parçalardır.",
      items: [
        {
          img: bridgeOnBase,
          alt: "Diş modeli üzerinde hazırlanmış porselen kronlar",
          caption: "Takma öncesi model üzerindeki porselen kronlar",
        },
        {
          img: treatmentInProgress,
          alt: "Klinikte hastaya tedavi uygulayan diş hekimi",
          caption: "Takılır, kapanışa göre kontrol edilir, sonra yapıştırılır",
        },
        {
          img: ceramicCrowns,
          alt: "Stüdyo ışığında fotoğraflanan iki porselen kron",
          caption: "Komşu dişlere uyumlanmış ton ve doku",
        },
      ],
    },
    cta: {
      heading: "Dişinizin kron gerektirip gerektirmediğinden emin değil misiniz?",
      text: "Bir muayene ve röntgen, dolgunun hâlâ tutup tutamayacağını ya da dişin kaplanması gerekip gerekmediğini söylemek için yeterlidir.",
    },
    faqs: [
      {
        q: "Kron kendi dişim gibi görünür mü?",
        a: "Hedef budur. Seramikler renk tonu ve ışık geçirgenliği bakımından eşleştirilir ve şekil, karşı taraftaki dişe uyacak biçimde oluşturulur. Ön dişler, arka dişlere göre daha ışık geçirgen seramiklerden yapılır; arka dişlerde ise görünümden çok dayanıklılık öne çıkar.",
      },
      {
        q: "Kron yaptırmak ağrılı mı?",
        a: "Hazırlık lokal anestezi altında yapılır, dolayısıyla randevu sırasında ağrı olmaz. Sonrasında diş eti kenarı birkaç gün hassas olabilir ve diş soğuğa duyarlılık gösterebilir. Kanal tedavisi görmüş bir diş, kapanış yerleşirken bir iki hafta basınç hissedebilir.",
      },
      {
        q: "Önce kanal tedavisi gerekir mi?",
        a: "Yalnızca sinir iltihaplıysa, enfekteyse ya da canlılığını yitirmişse. Bu, muayene ve röntgenle kararlaştırılır. Sinir sağlıklıysa, dişin kron için hazırlanması normalde kanal tedavisi gerektirmez.",
      },
      {
        q: "Kronlar ne kadar dayanır?",
        a: "Birçok kron on ile on beş yıl sonra da işlevini sürdürür. Sizinki ne kadar dayanır; ne kadar sağlıklı diş dokusu kaldığına, kapanışınıza ve gıcırdatma alışkanlığınıza ve kronun dişle birleştiği kenarı ne kadar iyi temizlediğinize bağlıdır.",
      },
      {
        q: "Kron mu, büyük dolgu mu?",
        a: "Küçük veya orta büyüklükte bir çürük için doğru yanıt dolgudur. Diş çatladığında, bir tüberkül kırıldığında, genişliğin yarısından fazlası doldurulduğunda ya da diş kanal tedavisi gördüğünde genellikle kron daha iyidir. Röntgeni size gösterir ve dişinizin bu çizginin hangi tarafında olduğunu anlatırız.",
      },
      {
        q: "Kron gevşerse ne olur?",
        a: "Bu olabilir ve diş ağrımıyorsa acil bir durum değildir. Kronu saklayın, o tarafla çiğnemeyin ve bizi arayın. Dişi temizler, altında çürük olup olmadığını kontrol eder ve kronu yeniden yapıştırırız; bu genellikle aynı gün yapılır.",
      },
    ],
  },

  "dental-implants": {
    slug: "dental-implants",
    name: "Diş implantları",
    metaTitle: "İstanbul'da diş implantları — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da diş implantları: implant 3 boyutlu görüntüleme ile nasıl planlanır, nasıl yerleştirilir ve üst yapısı yapılır, kimlere uygundur, iyileşme ve bakım süreci.",
    hero: {
      label: "Tedavi",
      heading: "Diş implantları",
      intro:
        "Yeni bir diş taşımak için çene kemiğine yerleştirilen titanyum kök; yanındaki dişlere dokunmadan eksik dişi kalıcı biçimde değiştirmenin bir yolu.",
      img: xrayConsultation,
      alt: "İmplant konsültasyonunda alınan diş röntgeni",
      imageClass: "object-[50%_35%]",
    },
    facts: [
      { label: "Randevular", value: "2–4 ziyaret" },
      { label: "İyileşme", value: "Son diş öncesi 3–6 ay" },
      { label: "Kalıcılık", value: "Doğru bakımla birçoğu onlarca yıl dayanır" },
    ],
    highlights: [
      {
        label: "3 boyutlu planlama",
        text: "Pozisyon, açı ve derinlik herhangi bir cerrahi işlemden önce tarama üzerinde belirlenir.",
      },
      {
        label: "Komşulara dokunulmaz",
        text: "Boşluğun iki yanındaki dişler olduğu gibi bırakılır.",
      },
      {
        label: "Diş gibi temizlenir",
        text: "Kemikte titanyum, üstünde seramik; normal şekilde fırçalanır ve diş ipi kullanılır.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "Yalnızca yeni bir diş değil, yeni bir kök",
      paragraphs: [
        "İmplant, eksik dişin kökünün bulunduğu yere çene kemiğine yerleştirilen küçük bir titanyum vidadır. Sonraki aylarda kemik çevresinde büyüyerek onu sıkıca tutar; bu sürece osseointegrasyon denir. İmplant sağlamlaştığında üzerine bir abutment ve kron yerleştirilir ve diş diğerleri gibi kullanılır.",
        "İmplant komşulara yaslanmak yerine kemikte durduğu için iki yanındaki dişler olduğu gibi kalır. Planlama 3 boyutlu tarama üzerinde yapılır; böylece pozisyon, açı ve derinlik cerrahiden önce belirlenir ve basılan bir cerrahi kılavuz bu pozisyonu işlem gününde koruyabilir. Kemik çok inceyse — bu, diş yıllardır eksikse sık görülür — greftleme gerekebilir; aynı seansta ya da ayrı bir adım olarak yapılır.",
      ],
      img: treatmentInProgress,
      alt: "Klinikte hastaya tedavi uygulayan diş hekimi",
      imageClass: "object-[50%_35%]",
      caption: "Yerleştirme lokal anestezi altında yapılır.",
    },
    benefits: {
      label: "Hastalar neden seçiyor",
      heading: "İmplantın değiştirdikleri",
      intro: "Eksik bir dişi değiştirmenin birden fazla yolu vardır; doğru yanıt çevresindeki dişlere bağlıdır.",
      items: [
        {
          title: "Komşu dişler dokunulmadan kalır",
          text: "Bir köprü iki yandaki dişlerden destek almak zorundadır, bu da onların hazırlanması anlamına gelir. İmplant kendi dişini taşır; dolayısıyla o dişler için hiçbir işlem gerekmez.",
        },
        {
          title: "Tek diş, tek implant",
          text: "Tek eksik diş, tek bir boşluğu doldurmak için üç üniteli köprü kesmek yerine kendi başına değiştirilebilir.",
        },
        {
          title: "Çene kemiğini korumaya yardımcı olur",
          text: "Artık diş taşımayan kemik yıllar içinde gerilemeye eğilimlidir. İmplant o bölgedeki kemiği çalışır durumda tutar; bu da yüz ve diş eti formuna yardımcı olur.",
        },
        {
          title: "Gevşek protezi sabitler",
          text: "İki implant, alt protezi klipslerle tutabilir; böylece konuşurken veya yerken hareket etmez.",
        },
        {
          title: "Doğal diş gibi kullanılır",
          text: "Çiğneme ve konuşma tanıdık gelir; temizliği de diğer dişlerinizle aynıdır.",
        },
      ],
    },
    suitability: {
      label: "Kimlere uygun",
      heading: "İmplant için kimleri değerlendiriyoruz",
      intro:
        "Eksik dişi olan neredeyse herkes değerlendirilebilir; ancak bazı tıbbi ve yaşamsal faktörler planı ya da başarı oranını değiştirir.",
      items: [
        "Tek eksik diş veya tüm bir çene dahil birden fazla boşluk",
        "Kurtarılamayan ve çekilmesi gereken bir diş",
        "Sağlıklı diş etleri ya da tedavi edilip stabilize edilmiş diş eti hastalığı",
        "İmplantı taşıyacak kadar kemik — ince olduğu yerlerde greftleme hacim ekleyebilir",
        "İyi kontrol altındaki diyabet dahil stabil tıbbi durumlar",
      ],
      note:
        "Sigara kullanımını, çeneye daha önce uygulanan radyoterapiyi ve kemiği etkileyen ilaçları (örneğin bazı osteoporoz tedavilerini) sorarız. Bunlar implantı her zaman dışlamaz; ancak değerlendirmenin parçasıdır ve iyileşme sürelerini değiştirebilir. Kontrolsüz diyabet ve yoğun sigara kullanımı başarı oranını belirgin biçimde düşürür.",
      img: procedureCloseUp,
      alt: "Yapılmakta olan bir diş işleminin yakın çekimi",
      imageClass: "object-[50%_40%]",
    },
    process: {
      label: "Süreç",
      heading: "Tedavi nasıl ilerler",
      intro:
        "İmplant tedavisi günlere değil aylara yayılır. Kemiğin bu süreye ihtiyacı vardır ve hiçbir adım aceleye getirilmez.",
      steps: [
        {
          title: "Değerlendirme ve 3 boyutlu görüntüleme",
          text: "Diş etlerini inceler, çenenin 3 boyutlu taramasını alır, tıbbi geçmişinizi gözden geçirir ve dişten beklentinizi konuşuruz.",
        },
        {
          title: "Planlama",
          text: "İmplant pozisyonu tarama üzerinde planlanır ve faydalı olacaksa bir cerrahi kılavuz basılır. Gerekiyorsa greftleme de bu aşamada planlanır.",
        },
        {
          title: "Yerleştirme",
          text: "Genellikle lokal anestezi altında ve tek implant için çoğunlukla 30–60 dakika sürer. Diş eti birkaç dikişle kapatılır ve çoğu zaman geçici bir diş takılabilir.",
        },
        {
          title: "İyileşme",
          text: "Kemik implantla bütünleşirken üç ile altı ay. Boşluğun yerine göre geçici bir diş ya da protez kullanabilirsiniz.",
        },
        {
          title: "Son diş",
          text: "İmplant sağlamlaştığında tarama veya ölçü alır, abutmenti ve ardından kronu takarız; kron vidalı ya da yapıştırılmış olarak yerleştirilir.",
        },
      ],
    },
    aftercare: {
      label: "İyileşme ve bakım",
      heading: "İlk günler ve uzun vadeli bakım",
      intro:
        "Cerrahi iyileşme genellikle sancılı geçmez. Asıl önemli olan, implantı yıllar boyunca koruyan sonraki bakımdır.",
      items: [
        {
          title: "İlk 24 saat",
          text: "Kuvvetli çalkalama veya tükürme yok, sigara yok, sıcak yiyecek ve içecek yok. Yanaktan dışarıya kısa aralıklarla buz uygulamak şişliği sınırlar.",
        },
        {
          title: "İlk hafta",
          text: "Şişlik ve morarma normaldir ve ikinci ya da üçüncü günde zirve yapar. Yumuşak gıdalar ile önerdiğimiz gargaralar veya antibiyotikler bu süreci kolaylaştırır. Genellikle normal ağrı kesiciler yeterlidir.",
        },
        {
          title: "Temizlik",
          text: "İyileştikten sonra implant diş gibi temizlenir; ayrıca implantın boyun bölgesine arayüz fırçası kullanılır. Atlandığında sorun tam olarak orada başlar.",
        },
        {
          title: "Dikkat edilmesi gereken riskler",
          text: "İmplant çevresindeki enfeksiyon, yani peri-implantitis, başlıca uzun vadeli risktir. Kırmızı ve kanayan diş etleri ile kötü tat, beklemek yerine kliniğe gelmeniz için bir nedendir.",
        },
        {
          title: "Kontroller",
          text: "Cerrahi sonrası iyileşme kontrolleri, ardından implantın röntgeniyle yıllık değerlendirmeler. Dişlerinizi gıcırdatıyorsanız gece plağı kullanın.",
        },
      ],
      img: smilePortraitWarm,
      alt: "İmplant tedavisi tamamlandıktan sonra gülümseyen hasta",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Sonuçlar",
      heading: "Fark etmeyi bıraktığınız diş",
      intro:
        "İmplantın gülüşün içinde kaybolması ve çevresindeki dişlerle tamamen aynı şekilde korunması amaçlanır. Tamamlanan işin görünümü şöyle:",
      items: [
        {
          img: bridgeOnBase,
          alt: "Diş modeli üzerinde taşınan yeni diş",
          caption: "Kendi implantı üzerinde taşınan yeni diş",
        },
        {
          img: smileOutdoors,
          alt: "İmplant tedavisi sonrası dışarıda gülümseyen hasta",
          caption: "Kendi gülüşünüz gibi okunan bir bitiş",
        },
        {
          img: implantDetail,
          alt: "Titanyum diş implantının makro görünümü",
          caption: "Titanyum yiv detayı, makro görünüm",
        },
      ],
    },
    cta: {
      heading: "Eksik bir dişiniz var ve seçenekleri değerlendiriyor musunuz?",
      text: "3 boyutlu tarama ve muayene, sizin ağzınız için implantı, köprüyü ve hareketli seçeneği karşılaştırmamızı sağlar.",
    },
    faqs: [
      {
        q: "İmplant yerleştirmek ağrılı mı?",
        a: "Yerleştirme lokal anestezi altında yapılır, dolayısıyla randevu sırasında ağrı olmaz. Sonrasında çoğu kişi birkaç gün normal ağrı kesicilerle idare eder. Bölgede şişlik ve morarma sık görülür ve bir hafta içinde geriler.",
      },
      {
        q: "Tüm tedavi ne kadar sürer?",
        a: "Yerleştirmeden son dişe kadar genellikle üç ile altı ay; çünkü önce kemiğin implantla bütünleşmesi gerekir. Greftleme gerekiyorsa süre birkaç ay uzayabilir. Kemik kalitesinin elverdiği bazı vakalarda geçici diş daha erken takılabilir.",
      },
      {
        q: "İmplant bana uygun mu?",
        a: "Mevcut kemiğe, diş etlerinizin sağlığına ve genel sağlığınıza bağlıdır. Yoğun sigara kullanımı ve kontrolsüz diyabet başarı oranını belirgin biçimde düşürür; ayrıca bazı kemik ilaçları ve çeneye uygulanan radyoterapi herhangi bir planlama yapılmadan önce konuşulmalıdır. Tümü, tedavi önerilmeden önce değerlendirilir.",
      },
      {
        q: "İmplant mı, köprü mü?",
        a: "Köprü daha hızlıdır, cerrahi gerektirmez ve genellikle daha ekonomiktir; ancak iki yandaki dişlerin hazırlanması ve altlarının dikkatle temizlenmesi gerekir. İmplant o dişlere dokunmaz ve doğal bir diş gibi temizlenir; ancak daha uzun sürer ve cerrahi bir adım gerektirir. Vakanız için ikisini, maliyetleriyle birlikte karşılaştırırız.",
      },
      {
        q: "İmplantlar başarısız olabilir mi?",
        a: "Olabilir. Erken kayıp sık değildir ve genellikle ilk aylardaki iyileşme veya enfeksiyonla ilişkilidir; sonraki sorunlar çoğunlukla hijyen, sigara ve kontrolsüz gıcırdatma ile bağlantılıdır. İmplantların uzun vadeli başarı oranları iyidir; ancak garanti değildir ve onları koruyan şey dikkatli temizliktir.",
      },
      {
        q: "İmplantlar tam proteze yardımcı olur mu?",
        a: "Evet. İki implant alt protezi klipslerle tutabilir, daha fazla implant ise sabit tam çene köprüyü destekleyebilir. Sonuç; vakum ya da yapıştırıcıya bağlı kalmak yerine konuşurken ve yerken yerinde duran bir protezdir.",
      },
    ],
  },

  "teeth-whitening": {
    slug: "teeth-whitening",
    name: "Diş beyazlatma",
    metaTitle: "İstanbul'da diş beyazlatma — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da profesyonel diş beyazlatma: klinikte seans ve kişiye özel ev plağı, beyazlatmanın değiştirebildikleri ve değiştiremedikleri, hassasiyet ve sonrasında bakım.",
    hero: {
      label: "Tedavi",
      heading: "Diş beyazlatma",
      intro:
        "Peroksit jeli ile profesyonel beyazlatma — klinikte tek ziyarette uygulanır ya da kendi dişlerinizin taramasından üretilen kişiye özel plaklarla evde yapılır.",
      img: smileOutdoors,
      alt: "Beyazlatma sonrası parlak ve eşit gülüşün yakın çekimi",
      imageClass: "object-[50%_30%]",
    },
    facts: [
      { label: "Klinik seansı", value: "60–90 dakika" },
      { label: "Ev plağı", value: "10–14 akşam" },
      { label: "Sonuç", value: "Alışkanlıklara göre aylar ya da birkaç yıl" },
    ],
    highlights: [
      {
        label: "Hiçbir doku alınmaz",
        text: "Jel dişin tonunu değiştirir; hiçbir bölüm şekillendirilmez, alınmaz veya eklenmez.",
      },
      {
        label: "Koltukta ya da evde",
        text: "Klinikte tek seans veya kendi dişlerinizin taramasından üretilen plaklarla.",
      },
      {
        label: "Ölçülür, tahmin edilmez",
        text: "Renk tonu öncesi ve sonrasında fotoğraflanır; ilerleme hatırlanmak yerine kaydedilir.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "Aşındırma değil, oksijen",
      paragraphs: [
        "Beyazlatma jeli hidrojen veya karbamid peroksit içerir. Mineye geçerek dişin içindeki renkli pigmentleri parçalar; bu nedenle etki, herhangi bir diş macununun yapabileceğinden daha derindir. Minenin yapısı alınmaz veya şekillendirilmez — ton değişir, diş değişmez.",
        "İki yol vardır ve bunlar sıklıkla birlikte kullanılır. Klinikte diş etleri bir bariyerle korunur ve yaklaşık bir saat boyunca kısa döngülerle daha güçlü bir jel uygulanır. Evde ise kendi dişlerinizin taramasından veya ölçüsünden plaklar üretiriz; siz bu plakları belirli sayıda akşam daha düşük yoğunluklu jelle doldurursunuz. Kişiye özel plaklar dişleri eşit biçimde kaplar ve jeli diş etinden uzak tutar; marketten alınan bantların tahrişe yol açtığı nokta genellikle burasıdır.",
        "Başlamadan önce bilinmesi gereken bir nokta: beyazlatma yalnızca doğal diş dokusunda etkilidir. Kronlar, laminalar, dolgular ve kompozit bonding özgün tonlarını korur; dolayısıyla beyazlatılan bir diş yanındaki restorasyondan daha açık kalabilir. Bu durum önceden planlanır ve uyumsuz kalan dolgu sonradan yenilenebilir.",
      ],
      img: shadeMatching,
      alt: "Beyazlatma öncesi diş rengini kaydeden diş hekimi",
      imageClass: "object-[50%_32%]",
      caption: "Başlangıç tonu, renk skalasına göre kaydedilir.",
    },
    benefits: {
      label: "Hastalar neden seçiyor",
      heading: "Profesyonel beyazlatmanın sundukları",
      intro:
        "Beyazlatma, dişlerinizin rengini değiştirmenin en az müdahaleci yoludur: hiçbir diş hazırlanmaz ve hiçbir şey eklenmez.",
      items: [
        {
          title: "Tek ziyarette görünür",
          text: "Klinik seansı aynı gün içinde tonu belirgin biçimde açar. Ev plakları ise bir iki hafta içinde daha kademeli çalışır.",
        },
        {
          title: "Dişlerinize uyan plaklar",
          text: "Kişiye özel plaklar jeli dişlere doğru tutar ve diş etinden uzak tutar; bu da tek ölçü bantlara göre daha eşit bir sonuç ve daha az tahriş demektir.",
        },
        {
          title: "Başlamadan önce kontrol",
          text: "Önce muayene ederiz. Tedavi edilmemiş bir çürüğün veya çatlak bir dişin üzerine beyazlatma yapmak ağrıya yol açabilir; bu nedenle bunlar jel uygulanmadan önce ele alınır.",
        },
        {
          title: "Ton kayıt altına alınır",
          text: "Başlangıç tonunu fotoğraflar ve kaydederiz; böylece ilerleme hatırlanmak yerine ölçülür.",
        },
        {
          title: "Koruması kolay",
          text: "Plakları saklayın. Birkaç ayda bir tek akşam ya da yoğun kahve ve kırmızı şarap dönemlerinden sonra bir uygulama, tonu istediğiniz yerde tutar.",
        },
      ],
    },
    suitability: {
      label: "Kimlere uygun",
      heading: "Beyazlatma en iyi şu durumlarda çalışır",
      intro:
        "Dişlerin ne kadar koyu göründüğünden çok, lekenin türü belirleyicidir: bazıları iyi yanıt verir, bazıları neredeyse hiç değişmez.",
      items: [
        "Yaşla birlikte kademeli olarak sararmış dişler",
        "Kahve, çay, kırmızı şarap, kola ve tütünden kaynaklanan lekeler",
        "Nedeni yüzeyde olan tek bir koyu diş",
        "Tedavi edilmemiş çürüğü, çatlağı veya açığa çıkmış kökü olmayan sağlıklı dişler",
        "Lamina veya kronların uyumlanacağı daha açık bir ton isteyenler",
      ],
      note:
        "Dişin içinden gelen gri lekelenme farklıdır. Genellikle bir travma veya kanal tedavisi sonrasında görülür, beyazlatma jeline dirençli olabilir ve yerine iç beyazlatma ya da lamina gerekebilir. Ayrıca gebelik ve emzirme döneminde isteğe bağlı beyazlatmayı genellikle erteleriz; dişleri hâlâ gelişen çocuklarda ve ergenlerde beyazlatma yapmayız.",
      img: shadeMatchSmile,
      alt: "Dişlerinin rengi kontrol edilirken gülümseyen hasta",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "Süreç",
      heading: "Tedavi nasıl ilerler",
      intro:
        "Beyazlatma her zaman muayene ile başlar; çünkü bir dişin rengi ilk değil, en son ele alınacak konudur.",
      steps: [
        {
          title: "Kontrol ve temizlik",
          text: "Bir muayene ve gerekiyorsa röntgen. Ardından diş taşı temizliği ve cila: yüzey lekeleri ve diş taşı önce alınır, böylece jel temiz mineye ulaşır.",
        },
        {
          title: "Ton kaydı",
          text: "Dişleri fotoğraflar ve tonu bir skalaya göre kaydederiz; böylece değişimi hatırlamaya çalışmak yerine sonradan görebilirsiniz.",
        },
        {
          title: "Klinik seansı",
          text: "Diş etleri koruyucu bir bariyerle izole edilir, ardından beyazlatma jeli yaklaşık bir saat içinde iki veya üç döngüyle uygulanır ve aralarda ton kontrol edilir.",
        },
        {
          title: "Ya da ev plağı",
          text: "Tarama veya ölçü alır ve dişlerinize tam oturan plaklar üretiriz. Bunları evde belirli sayıda akşam doldurursunuz: daha düşük yoğunluk, daha yavaş ve kontrolü daha kolay.",
        },
        {
          title: "Sonraki tazelemeler",
          text: "Plakları saklayın. Birkaç ayda bir tek akşam ya da leke yapan yiyecek ve içeceklerin yoğun olduğu dönemlerden sonra bir uygulama, tüm bir kürü tekrarlamadan tonu korur.",
        },
      ],
    },
    aftercare: {
      label: "İyileşme ve bakım",
      heading: "Hassasiyet ve tonu korumak",
      intro:
        "Dinlenme süresi yoktur; ancak ilk bir iki gün biraz özen ve sonrasında sonucun korunması gerekir.",
      items: [
        {
          title: "Hassasiyet",
          text: "Soğuğa karşı kısa ve keskin sızlamalar sık görülür ve genellikle ilk 24–48 saatte belirgindir. Plak içinde kullanılan hassasiyet giderici jel yardımcı olur. Şiddetli veya sürekliyse uygulamayı bırakın ve bizi arayın.",
        },
        {
          title: "İlk bir iki gün",
          text: "Çay, kahve, kırmızı şarap, kola, köri, kırmızı meyveler ve tütün, dişler yerleşirken en kolay leke bırakanlardır. Çoğu kişi bir iki gün daha açık renkli yiyecek ve içeceklere devam eder — ne kadar önemli olduğuna dair kanıt sınırlı olsa da bunun bir maliyeti yoktur.",
        },
        {
          title: "Restorasyonlar değişmez",
          text: "Kronlar, laminalar, dolgular ve bonding özgün tonunu korur. Açılan dişlerin yanında artık fark edilen bir restorasyon varsa, uyumlanacak şekilde değiştirilebilir veya parlatılabilir; bu genellikle ayrı ve kısa bir randevudur.",
        },
        {
          title: "Tonu korumak",
          text: "Beyazlatma kalıcı değildir. Sonuç ne içtiğinize, sigara kullanıp kullanmadığınıza ve minenize bağlı olarak genellikle aylar ile birkaç yıl arasında sürer. Aynı tonda kalmak için pratik yol tazeleme plaklarıdır.",
        },
        {
          title: "Kontroller",
          text: "Rutin kontroller ve diş taşı temizliği, yüzey lekelerinin yeniden birikmesini engeller ve dişlerin ve diş etlerinin hâlâ sağlıklı olduğunu doğrular.",
        },
      ],
      img: smileInMirror,
      alt: "Parlayan gülüşünü el aynasında kontrol eden hasta",
      imageClass: "object-[50%_45%]",
    },
    gallery: {
      label: "Sonuçlar",
      heading: "Vaat edilen değil, ölçülen ton",
      intro:
        "Beyazlatma, başladığınız tona göre değerlendirilir; bu nedenle ilk seanstan önce ve sonunda tekrar kaydedilir.",
      items: [
        {
          img: smileCloseUp,
          alt: "Eşit ve parlak bir gülüşün yakın çekimi",
          caption: "Tüm gülüş boyunca eşit bir sonuç",
        },
        {
          img: smilePortraitWarm,
          alt: "Parlak ve doğal gülüşe sahip hasta",
          caption: "Ton, öncesi ve sonrasında skalaya göre kontrol edilir",
        },
        {
          img: whiteningTray,
          alt: "Renk skalasının yanında kişiye özel beyazlatma plağı ve jeli",
          caption: "Taramadan üretilen kişiye özel plak ve jel",
        },
      ],
    },
    cta: {
      heading: "Önemli bir gün öncesi beyazlatmayı mı düşünüyorsunuz?",
      text: "Önce bir kontrol ve ton kaydı yapılır. Ardından klinik uygulamasının, ev plağının ya da ikisinin birden size uygun olup olmadığını söyleyebiliriz.",
    },
    faqs: [
      {
        q: "Beyazlatma mineye zarar verir mi?",
        a: "Sağlıklı dişlerde gözetim altında kullanıldığında peroksit bazlı beyazlatma mineyi almaz veya zarar vermez. Başlıca yan etki geçici hassasiyettir; bu nedenle önce dişleri muayene eder ve bir sorun varsa işlemi durdururuz. Beyazlatma çürük üzerinde etkili değildir; bir çürük varsa sonra değil, önce tedavi edilmelidir.",
      },
      {
        q: "Dişlerim neden daha beyaz olmadı?",
        a: "Genellikle rengin nedeninden dolayı. Kronlar, laminalar, dolgular ve kompozit bonding jele hiç yanıt vermez. Genellikle bir travma veya kanal tedavisi sonrası dişin içinden gelen gri lekelenme de dirençli olabilir ve iç beyazlatma ya da lamina gerektirebilir. Ton neredeyse hiç değişmediyse nedenini ve yerine neyin işe yarayacağını söyleriz.",
      },
      {
        q: "Dişlerim ne kadar beyaz olur?",
        a: "Kimse belirli bir ton vaat edemez. Bir dişin ne kadar açılacağı lekenin türüne ve derinliğine, ayrıca kendi minenize bağlıdır. Değişimin ölçülebilir olması için tonu öncesinde ve sonrasında kaydederiz; plaklar sizde kalır, böylece istediğiniz zaman tazeleme yapabilirsiniz.",
      },
      {
        q: "Ağrı olur mu?",
        a: "Beyazlatma ağrılı değildir; ancak en sık görülen yan etki hassasiyettir: çoğunlukla ilk bir iki günde kısa sızlamalar ve bazen gizli bir çatlağı ya da büyük eski bir dolgusu olan dişte küçük bir ağrı. Plakta hassasiyet giderici jel ve seansları aralıklı yapmak genellikle bunu çözer. Şiddetli veya tek taraflı ağrı, uygulamayı durdurup gelmeniz için bir nedendir.",
      },
      {
        q: "Sonuç ne kadar kalıcı?",
        a: "Çok değişkendir. Aylar ile birkaç yıl tipik bir aralıktır; ne kadar kahve, çay, kırmızı şarap ve tütün tükettiğinize ve minenizin doğal rengine bağlıdır. Plaklarınızla yapacağınız tazeleme akşamları, baştan başlamadan tonu sabit tutar.",
      },
      {
        q: "Gebelikte beyazlatma yapabilir miyim?",
        a: "Beyazlatma jelinin gebeliğe zarar verdiğine dair bir kanıt yoktur; ancak önlem amacıyla birçok klinisyen, bizim de tercih ettiğimiz gibi, isteğe bağlı beyazlatmayı gebelik ve emzirme sonrasına ertelemeyi tercih eder. Acil diş tedavisi farklı bir konudur ve ayrıca ele alınır.",
      },
    ],
  },

  invisalign: {
    slug: "invisalign",
    name: "Invisalign",
    metaTitle: "İstanbul'da Invisalign şeffaf plaklar — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da Invisalign şeffaf plaklar: plak tedavisi dijital taramadan nasıl planlanır, ne kadar sürer, günlük kullanım süresi, kontroller ve pekiştirme apareyleri.",
    hero: {
      label: "Tedavi",
      heading: "Invisalign",
      intro:
        "Dişleri planlanmış küçük adımlarla sıraya sokan, şeffaf ve çıkarılabilir bir plak serisi — dijital tarama üzerinde önceden kurgulanır ve braket ya da tel olmadan kullanılır.",
      img: alignerCloseUp,
      alt: "Diş düzeltme için üretilmiş şeffaf plakların yakın çekimi",
      imageClass: "object-[50%_45%]",
    },
    facts: [
      { label: "Plak değişimi", value: "Evde her 1–2 haftada" },
      { label: "Kullanım süresi", value: "Günde 20–22 saat" },
      { label: "Tipik tedavi", value: "Vakaya göre 6–18 ay" },
    ],
    highlights: [
      {
        label: "Tarama üzerinde planlanır",
        text: "Hareket, ilk plak üretilmeden önce diş diş haritalanır.",
      },
      {
        label: "Çıkarılabilir",
        text: "Yemek, içmek ve temizlik için çıkarılır; dişlere sabitlenen hiçbir şey yoktur.",
      },
      {
        label: "Süreç boyunca takip",
        text: "Her altı ile sekiz haftada bir uyumu ve plak takibini kontrol ederiz.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "Küçük ve planlı adımlarla düzeltme",
      paragraphs: [
        "Plaklar, dişlerinizin üzerine oturacak şekilde üretilen ince ve şeffaf kalıplardır. Her biri dişleri planlanan konuma milimetrenin bir kesri kadar yaklaştırır ve bir seri hâlinde aylar içinde dişleri kademeli olarak hareket ettirir. Yemek, içmek ve temizlik için çıkarıldıkları için etrafında dolaşılacak braket veya tel yoktur.",
        "Tedavi kaşık ölçü yerine tarama ile başlar; bu da tüm sıralamanın dijital olarak planlanmasına olanak tanır: hangi dişler hareket edecek, hangi sırayla ve ne kadar yer gerekiyor. Bu planı başlamadan önce görürsünüz. Plağın tutunabilmesi için bazı dişlere diş renginde küçük ataşmanlar yapıştırılabilir; hareket daha kapsamlıysa elastikler ya da kısa bir sabit tel aşaması planın parçası olabilir.",
      ],
      img: digitalScanning,
      alt: "Bir dişin dijital modelini gösteren ağız içi tarayıcı ekranı",
      imageClass: "object-[50%_35%]",
      caption: "Tarama plana dönüşür: her adım önce haritalanır.",
    },
    benefits: {
      label: "Hastalar neden seçiyor",
      heading: "Plak tedavisinin sundukları",
      intro:
        "Plaklar dişleri düzeltir, her kapanış sorununu çözmez; bu nedenle muayene, tercih kadar belirleyicidir.",
      items: [
        {
          title: "Neredeyse görünmez",
          text: "Plaklar şeffaftır ve dişlere yaslanır; konuşma mesafesinde metal veya seramik braketlere göre çok daha az fark edilir.",
        },
        {
          title: "Dişlere sabitlenen bir şey yok",
          text: "Yemeklerde ve fırçalarken çıkarılırlar; bu da tedavi boyunca yemek ve temizliğin normale yakın kalmasını sağlar.",
        },
        {
          title: "Önceden gördüğünüz bir plan",
          text: "Tarama ve planlama aşaması, dişlerin nerede biteceğini gösterir; böylece hedef varsayılmak yerine birlikte kararlaştırılır.",
        },
        {
          title: "Daha az ve daha kısa ziyaret",
          text: "Plak değişimleri evde yapılır; randevular ağırlıklı olarak kontroldür ve genellikle aylık ayar yerine her altı ile sekiz haftada birdir.",
        },
        {
          title: "Temizliği kolay",
          text: "Diş ipini altından geçireceğiniz tel yoktur. Dişler normal şekilde fırçalanır, plaklar ayrıca durulanır ve temizlenir.",
        },
      ],
    },
    suitability: {
      label: "Kimlere uygun",
      heading: "Plaklar en iyi şu durumlarda çalışır",
      intro:
        "Açık olalım: plaklar birçok vaka için çok iyidir, bazıları için uygun değildir. Hangisi olduğuna muayene karar verir.",
      items: [
        "Ön dişlerde hafif ile orta düzeyde çapraşıklık veya aralık",
        "Daha önceki ortodontik tedaviden sonra hafifçe kaymış dişler",
        "Dönmüş veya sırasından çıkmış tek bir diş",
        "Kalıcı dişleri ve ikinci büyük azı dişleri çıkmış yetişkinler ve geç ergenler",
        "Tedavi edilmemiş çürüğü olmayan sağlıklı dişler, diş etleri ve mine",
      ],
      note:
        "Plaklar bağlılık gerektirir: dişler yalnızca takılı oldukları sürece hareket eder, dolayısıyla plan günde 20 ile 22 saat kullanımı varsayar. Karmaşık kapanış sorunları, ileri düzeyde dönmüş dişler ve belirgin genişletme gerektiren vakalar çoğu zaman sabit tellere daha uygundur; sizin vakanız da böyleyse bunu açıkça söyleriz. Sonucu korumak için tedavi sonrasında bir pekiştirme apareyi kullanılır.",
      img: alignerInsertion,
      alt: "Şeffaf plağını çıkaran hasta",
      imageClass: "object-[50%_35%]",
    },
    process: {
      label: "Süreç",
      heading: "Tedavi nasıl ilerler",
      intro:
        "Plan görülüp onaylanmadan ve ilk plağın uyumu kontrol edilmeden hiçbir şey üretilmez.",
      steps: [
        {
          title: "Muayene ve tarama",
          text: "Dişleri ve diş etlerini inceler, fotoğraf ve gerektiğinde röntgen alır, her iki diş kavsini de dijital olarak tararız.",
        },
        {
          title: "Plan",
          text: "Hareket sırayla planlanır ve size gösterilir: hangi dişler ne kadar ve ne kadar sürede hareket edecek. Maliyet, hiçbir şey üretilmeden önce netleştirilir.",
        },
        {
          title: "İlk plakların takılması",
          text: "İlk takım takılır ve kontrol edilir; planın gerektirdiği yerlere diş renginde ataşmanlar yapıştırılır. Yanınızda sonraki takımlar ve kullanım talimatlarınızla ayrılırsınız.",
        },
        {
          title: "Evde değişim, klinikte kontrol",
          text: "Bir iki haftada bir sonraki plağa geçersiniz ve uyum ile takibin kontrol edilmesi için altı ile sekiz haftada bir gelirsiniz.",
        },
        {
          title: "Pekiştirme apareyleri",
          text: "Tedavi tamamlandığında yeni konumları korumak için pekiştirme apareyleri üretilir; başlangıçta tam zamanlı, ardından uzun vadede geceleri kullanılır.",
        },
      ],
    },
    aftercare: {
      label: "Kullanım",
      heading: "Plak tedavisinin sizden istedikleri",
      intro:
        "İyileşme süresi yoktur. Sonuç, kullanım süresine ve plaklar ile dişlerin temiz tutulmasına bağlıdır.",
      items: [
        {
          title: "Kullanım süresi",
          text: "Günde yirmi ile yirmi iki saat; yalnızca yemek için, soğuk su dışında bir şey içmek için ve fırçalayıp diş ipi kullanmak için çıkarılır. Atlanan günler tedaviye eklenen günlerdir.",
        },
        {
          title: "Yeni takımın ilk günleri",
          text: "Dişler hareket etmeye başlarken bir iki gün basınç ve hassasiyet, dil plağa alışırken hafif bir pelteklik olur. Takım kullanıldıkça ikisi de geçer.",
        },
        {
          title: "Temizlik",
          text: "Plakları soğuk su ve yumuşak bir fırça ile durulayıp fırçalayın; asla sıcak su kullanmayın, plağı deforme eder. Tekrar takmadan önce dişlerinizi fırçalayın ve diş ipi kullanın.",
        },
        {
          title: "Yeme ve içme",
          text: "Tüm yiyecekler için ve soğuk su dışındaki içecekler için plakları çıkarın. Sıcak içecekler plağı deforme eder; plak altında dişlere temas eden şekerli içecekler ise çürük riskidir.",
        },
        {
          title: "Kontroller ve pekiştirme",
          text: "Kontrol randevularını aksatmayın; takibi kopan bir plak erken fark edilir ve uygun maliyetle düzeltilir. Tedavi sonrasında pekiştirme apareylerini talimatlara göre kullanın, çünkü onlar olmadan dişler geri kayar.",
        },
      ],
      img: alignerInHand,
      alt: "Eldivenli bir elde tutulan şeffaf plak",
      imageClass: "object-[50%_40%]",
    },
    gallery: {
      label: "Elde plaklar",
      heading: "Kendi dişleriniz için üretilen şeffaf kalıplar",
      intro: "Plakların ağız dışında nasıl göründüğü ve tamamlanan dizilişin nasıl hissettirmesi gerektiği.",
      items: [
        {
          img: retainerInGlove,
          alt: "Eldivenli bir elde tutulan pekiştirme apareyi",
          caption: "Pekiştirme apareyleri sonucu korur",
        },
        {
          img: alignerInsertion,
          alt: "Şeffaf plağını çıkaran hasta",
          caption: "Yemekte çıkar, günün geri kalanında takılı",
        },
        {
          img: smilePortraitWarm,
          alt: "Doğal ve eşit gülüşe sahip hasta",
          caption: "Braket olmadan sıraya sokulmuş dişler",
        },
      ],
    },
    cta: {
      heading: "Plakların sizin için işe yarayıp yaramayacağını mı merak ediyorsunuz?",
      text: "Bir muayene ve tarama, plakların vakanıza uygun olup olmadığını, neleri kapsayacağını ve ne kadar süreceğini söylemek için yeterlidir.",
    },
    faqs: [
      {
        q: "Invisalign ne kadar sürer?",
        a: "Çoğu tedavi altı ile on sekiz ay sürer; bu, dişlerin ne kadar hareket etmesi gerektiğine ve plakların ne kadar düzenli kullanıldığına bağlıdır. Küçük düzeltmeler birkaç ayda bitebilir; daha büyük hareketler daha uzun sürer. Tahmin, taramadan sonra verilir ve tedavi boyunca gözden geçirilir.",
      },
      {
        q: "Ağrı olur mu?",
        a: "Plakların kendisi ağrı yapmaz. Her yeni takım, dişler hareket etmeye başlarken bir iki gün basınç ve hassasiyet getirir; çoğu kişi bunun hızla geçtiğini söyler. Keskin veya tek taraflı ağrı beklenmez; olursa zorlamak yerine kliniğe gelin.",
      },
      {
        q: "Günde kaç saat takmam gerekiyor?",
        a: "Yirmi ile yirmi iki saat. Plaklar dişleri yalnızca takılı oldukları sürece hareket ettirir; ağızda geçirilen süre azaldıkça tedavi uzar veya takip kopar. Yemek, içmek ve temizlik için çıkarmakta sorun yoktur; günün geri kalanında takılı kalırlar.",
      },
      {
        q: "Normal şekilde yiyip içebilir miyim?",
        a: "Evet, çünkü plaklar çıkar. Tüm yiyecekler ve soğuk su dışındaki içecekler için çıkarın, sonra tekrar takmadan önce dişlerinizi fırçalayın. Sıcak içecekler plastiği deforme eder; plak altında dişlere temas eden şekerli içeceklerden kaçınmak en iyisidir.",
      },
      {
        q: "Tedaviden sonra dişlerim geri kayar mı?",
        a: "Kayabilir; pekiştirme apareylerinin tedavinin opsiyonel bir eki değil, bir parçası olmasının nedeni budur. Pekiştirme apareyleri tedavinin sonunda üretilir, başlangıçta tam zamanlı sonra geceleri kullanılır ve kontrollerde değerlendirilir. Dişler yaşla birlikte zaten kaymaya devam eder, dolayısıyla pekiştirme uzun vadeli bir alışkanlıktır.",
      },
      {
        q: "Plaklar herkes için uygun mu?",
        a: "Hayır. Hafif ile orta düzeyde çapraşıklık, aralık ve önceki tel tedavisi sonrası kaymalarda çok iyi çalışır; karmaşık kapanış sorunları, ileri düzeyde dönmüş dişler ve genişletme gereken vakalarda ise daha az etkilidir ve bu durumlarda sabit teller genellikle daha iyi sonuç verir. Kararı muayene ve tarama verir; her iki durumda da dürüstçe bilgilendiririz.",
      },
    ],
  },

  "teeth-extraction": {
    slug: "teeth-extraction",
    name: "Diş çekimi",
    metaTitle: "İstanbul'da diş çekimi — BVD Clinic",
    metaDescription:
      "Güngören, İstanbul'da diş çekimi: diş kurtarılamadığında süreç nasıl ilerler, lokal anestezi altında çekim, iyileşme ve dişin yerine konulabilecek seçenekler.",
    hero: {
      label: "Tedavi",
      heading: "Diş çekimi",
      intro:
        "Kurtarılamayan bir dişin çekilmesi — röntgen üzerinden planlanır, lokal anestezi altında yapılır ve yalnızca alternatifler anlatıldıktan sonra önerilir.",
      img: procedureCloseUp,
      alt: "Diş çekimi yapan diş hekimi",
      imageClass: "object-[50%_40%]",
    },
    facts: [
      { label: "Randevular", value: "Genellikle tek ziyaret" },
      { label: "Koltuk süresi", value: "20–45 dakika" },
      { label: "İyileşme", value: "3–7 gün yumuşak gıda" },
    ],
    highlights: [
      {
        label: "Röntgenle planlanır",
        text: "Kök şekli ve çevresindeki kemik, herhangi bir işlem yapılmadan önce kontrol edilir.",
      },
      {
        label: "Tam uyuşma",
        text: "Lokal anestezi, dişin ağrı içinde değil, ağrı olmadan çıkması anlamına gelir.",
      },
      {
        label: "Boşluk önce konuşulur",
        text: "Dişin yerine konması gerekiyorsa seçenekler çekimden önce ortaya konur.",
      },
    ],
    overview: {
      label: "Nedir",
      heading: "İlk değil, son seçenek",
      paragraphs: [
        "Çekim, bir dişin kökü dahil tamamının çene kemiğindeki yuvasından alınmasıdır. Diş artık onarılamadığında veya korunamadığında önerilir: diş etinin çok altına inen çürük, kemiğin altına uzanan bir kırık, dişi hareketli hâle getiren ileri diş eti hastalığı ya da diş ağızda kaldığı sürece geçmeyen bir enfeksiyon.",
        "Her zaman dişi korumakla karşılaştırılır. İlk bakışta umutsuz görünen bir dişi kanal tedavisi, kron veya dolgu çoğu kez kurtarabilir; durum böyleyse bunu söyleriz. Çekimin gerçekten daha iyi bir seçenek olduğu durumlarda randevu kısadır: bölge uyuşturulur, diş gevşetilip çıkarılır ve dikiş yalnızca fayda sağlayacaksa atılır. Diş eti seviyesine kadar kırılmış dişler ya da sinire veya sinüse yakın konumdaki dişler bazen cerrahi çekim için uzmana yönlendirilir; bu karar randevu sırasında değil, öncesinde verilir.",
      ],
      img: xrayConsultation,
      alt: "Konsültasyonda alınan diş röntgeni",
      imageClass: "object-[50%_35%]",
      caption: "Dişin nasıl çıkacağını röntgen belirler.",
    },
    benefits: {
      label: "Neyi çözer",
      heading: "Çekimin çözdüğü durumlar",
      intro:
        "Diş çekmek bir amaca ulaşmanın yoludur: diş ağızda kaldığı sürece çözülemeyen bir sorunu ortadan kaldırır.",
      items: [
        {
          title: "Nedeni olan ağrı",
          text: "Sürekli hassas veya zonklayan bir diş genellikle iltihaplı, çatlak ya da enfektedir. Çekilmesi bu kaynağı ortadan kaldırır ve rahatlama çoğu zaman hemen gelir.",
        },
        {
          title: "Tekrar eden enfeksiyon",
          text: "Diş onarılamadığı için apse tekrar tekrar oluşuyorsa, çekim bölgenin düzgün iyileşmesini sağlar. Antibiyotikler bunu destekler; tek başına tedavi etmez.",
        },
        {
          title: "Komşuların korunması",
          text: "Diş etinin altına kırılmış ya da aşırı hareketli hâle gelmiş bir diş plak biriktirir; yanındaki dişleri ve çevresindeki kemiği riske sokar.",
        },
        {
          title: "Temiz bir başlangıç",
          text: "İmplant, köprü veya protez gibi bir yenileme planlanıyorsa bölgenin sağlıklı olması gerekir. Bir diş ortodontik tedavinin önünde engelse, çekilmesi planın ihtiyaç duyduğu alanı da yaratır.",
        },
        {
          title: "Tek ve kısa bir randevu",
          text: "Çoğu çekim lokal anestezi altında tek ziyarette tamamlanır; laboratuvar işi ve sonrasında bakımı gereken geçici bir restorasyon yoktur.",
        },
      ],
    },
    suitability: {
      label: "Ne zaman gerekir",
      heading: "Çekim genellikle şu durumlarda değerlendirilir",
      intro: "Değerlendirme, neyin kurtarılabileceği ve yerine ne konulacağı ile ilgilidir.",
      items: [
        "Diş eti seviyesinin altına inen ve hiçbir dolgu ya da kronun kapatamayacağı çürük veya kırık",
        "Tedaviye rağmen gerilemeyen ya da tekrar eden apse veya enfeksiyon",
        "İleri diş eti hastalığı nedeniyle çok hareketli bir diş",
        "Kök boyunca boydan boya çatlamış bir diş",
        "Ortodontik veya protetik nedenlerle çekilmesi gereken bir diş",
        "Tekrarlayan enfeksiyona yol açan ya da önündeki dişe zarar veren yirmilik diş",
      ],
      note:
        "Randevudan önce kan sulandırıcıları, kalp rahatsızlıklarını, çeneye daha önce uygulanan radyoterapiyi veya kemiği etkileyen ilaçları bize bildirin. Bunlar çekimi nadiren engeller; ancak planlamayı ve bölgenin sonrasında nasıl yönetileceğini değiştirir. Bir diş makul biçimde kurtarılabiliyorsa, çekim önermeden önce bunun ne gerektireceğini anlatırız.",
      img: patientInChair,
      alt: "Diş randevusunda tedavi koltuğundaki hasta",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "Süreç",
      heading: "Randevu nasıl ilerler",
      intro: "Çoğu diş için tek ziyaret; ayrılmadan önce bakım talimatları yazılı olarak verilir.",
      steps: [
        {
          title: "Muayene ve röntgen",
          text: "Dişe, diş etine ve kemiğe bakar, röntgen alır ve dişin kurtarılıp kurtarılamayacağını ve nasıl çıkarılması gerektiğini doğrularız.",
        },
        {
          title: "Planın kararlaştırılması",
          text: "Alternatifler ve boşluğun neyle doldurulacağı ortaya konur: implant, köprü, protez ya da şimdilik hiçbiri. Tüm tabloyu görerek karar verirsiniz.",
        },
        {
          title: "Bölgenin uyuşturulması",
          text: "Lokal anestezi uygulanır ve başlamadan önce uyuşma kontrol edilir. Diş ve çevresindeki diş eti randevu boyunca tamamen uyuşuktur.",
        },
        {
          title: "Çekim",
          text: "Diş gevşetilir ve çıkarılır. Diş etinin kapanmasına yardımcı olacaksa dikiş atılır ve kanamayı durdurmak için gazlı beze ısırılır. Çoğu işlem yirmi ile kırk beş dakika sürer.",
        },
        {
          title: "Talimatlar ve kontrol",
          text: "Yanınızda yazılı bakım talimatları ve endişelendiğinizde arayacağınız numarayla ayrılırsınız. İyileşme ve dişin yerine konulacak seçenekler sonraki kontrolde değerlendirilir.",
        },
      ],
    },
    aftercare: {
      label: "İyileşme ve bakım",
      heading: "Çekimden sonraki ilk hafta",
      intro:
        "Sonrasında ters giden şeylerin neredeyse tamamı ilk yirmi dört saatte belirlenir; bu nedenle talimatlar randevunun kendisinden daha önemlidir.",
      items: [
        {
          title: "İlk gün",
          text: "Çalkalama yok, tükürme yok, sigara yok, sıcak yiyecek ve içecek yok. Kanama sürüyorsa gazlı bezi yirmi dakika boyunca sıkıca ısırın ve başınız yüksekte dinlenin.",
        },
        {
          title: "Kilit nokta pıhtıdır",
          text: "Yuvada bir kan pıhtısı oluşur ve iyileşmeyi sağlayan odur. Parmakla, dille veya fırçayla kurcalamayın ve ilk gün kuvvetli çalkalamadan kaçının.",
        },
        {
          title: "Ağrı ve şişlik",
          text: "Genellikle normal ağrı kesiciler yeterlidir; yanaktan dışarıya kısa aralıklarla buz uygulamak şişliği sınırlar. Üçüncü günden sonra azalmak yerine artan ağrı kontrol edilmelidir.",
        },
        {
          title: "Yemek ve fırçalama",
          text: "Birkaç gün yumuşak ve serin gıdalar, diğer tarafla çiğneyerek. Ağzın geri kalanını normal fırçalayın ve yuvayı ovmadan temiz tutun.",
        },
        {
          title: "Kontroller",
          text: "İyileşme kontrolü ve dişin yerine ne konulacağına karar vermek için tekrar gelin. Boşluğu yıllarca bırakmak komşu dişlerin kaymasına ve altındaki kemiğin erimesine yol açar.",
        },
      ],
      img: checkUpInProgress,
      alt: "Kontrol randevusunda hastanın dişlerini inceleyen diş hekimi",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Randevu çevresinde",
      heading: "Planlanır, uygulanır, iyileşir",
      intro:
        "Çekim röntgene göre kararlaştırılır, koltukta yapılır ve sonrasında yuvanın nasıl iyileştiğiyle değerlendirilir.",
      items: [
        {
          img: treatmentInProgress,
          alt: "Klinikte hastaya tedavi uygulayan diş hekimi",
          caption: "Diş gevşetilir ve çıkarılır",
        },
        {
          img: restorationDetail,
          alt: "Restore edilmiş ön dişi ayna ile kontrol eden diş hekimi",
          caption: "Boşluk sonraki bir ziyarette doldurulabilir",
        },
        {
          img: smileOutdoors,
          alt: "Tedavi sonrası dışarıda gülümseyen hasta",
          caption: "İyileşti ve normal yemeye dönüldü",
        },
      ],
    },
    cta: {
      heading: "Sizi rahatsız eden bir diş mi var?",
      text: "Muayene ve röntgen için gelin. Diş kurtarılabiliyorsa nasıl kurtarılacağını, kurtarılamıyorsa sırada ne olduğunu anlatırız.",
    },
    faqs: [
      {
        q: "Çekim ağrılı mı?",
        a: "İşlem sırasında değil. Bölge lokal anestezi ile uyuşturulur ve başlamadan önce uyuşma kontrol edilir; böylece diş ağrı olmadan çıkar. Sonrasında yuva birkaç gün hassas olur ve genellikle normal ağrı kesiciler yeterlidir.",
      },
      {
        q: "İyileşme ne kadar sürer?",
        a: "Diş eti yuvayı bir iki hafta içinde kapatır, altındaki kemik ise sonraki aylarda dolar. Çoğu kişi ilk birkaç günü daha yumuşak gıdalarla geçirir ve bir hafta içinde normal yemeye döner.",
      },
      {
        q: "Kuru soket nedir?",
        a: "Yuvayı koruyan kan pıhtısının kaybolması ve kemiğin açıkta kalmasıdır. Ağrılıdır, genellikle çekimden iki üç gün sonra başlar ve kötü bir tat eşlik eder. Görülüp pansuman yapılması gerekir; geçmesini beklemek yerine bizi arayın. Sigara, çok kuvvetli çalkalama ve yuvayı kurcalamak sık görülen nedenlerdir.",
      },
      {
        q: "Dişin yerine yenisini yaptırmalı mıyım?",
        a: "Her boşluğun doldurulması gerekmez ve bu, boşluğun yerine bağlıdır. Görünen bir boşluk genellikle doldurulur; komşularını destekleyemez hâle gelen arka bölge dişleri ise zamanla kayma ve kapanış değişikliklerine yol açabilir. Seçenekler implant, köprü ve protezdir; bunları yuva iyileştikten sonra konuşuruz.",
      },
      {
        q: "Sonrasında yiyip içebilir miyim?",
        a: "Uyuşukluk geçene kadar hayır; çünkü yanağınızı veya dilinizi fark etmeden ısırmak kolaydır. Sonrasında birkaç gün serin ve yumuşak gıdalar, yuvadan uzakta çiğneyerek; ilk gün ise hiçbir sıcak gıda, çünkü sıcak kanamayı artırır.",
      },
      {
        q: "Dişi korumak her zaman daha mı iyidir?",
        a: "Bir diş kurtarılabiliyorsa — kanal tedavisi, kron veya dolgu ile — genellikle bu daha iyi yanıttır ve bunu söyleriz. Çekim, diş gerçekten onarılamadığında veya korunamadığında ya da ağızda bırakılması çevresindeki dişleri ve kemiği riske attığında önerilir.",
      },
    ],
  },
};