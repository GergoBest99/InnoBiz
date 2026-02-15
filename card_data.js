const servicesData = [
    // SZERELŐ, KARBANTARTÓ
    {
        icon: "🚰",
        category: "SZERELŐ, KARBANTARTÓ",
        name: "Vízvezeték szerelő",
        description: "Teljes körű vízhálózat kiépítés és gyorsszolgálati javítások modern eszközökkel a vizesblokkok zavartalan működéséért.",
        tags: ["Csőtörés elhárítás", "Szaniterek beszerelése"]
    },
    {
        icon: "🔥",
        category: "SZERELŐ, KARBANTARTÓ",
        name: "Fűtésszerelő",
        description: "Korszerű fűtési rendszerek tervezése és karbantartása az optimális hőmérséklet és az alacsony rezsiszámlák érdekében.",
        tags: ["Radiátorcsere", "Padlófűtés tisztítás"]
    },
    {
        icon: "⚡",
        category: "SZERELŐ, KARBANTARTÓ",
        name: "Villanyszerelő",
        description: "Ipari és lakossági villanyszerelés, mérőhelyek kialakítása és napelemes rendszerek előkészítése a biztonság jegyében.",
        tags: ["Új hálózat kiépítése", "Érintésvédelem"]
    },
    {
        icon: "❄️",
        category: "SZERELŐ, KARBANTARTÓ",
        name: "Klímaszerelő",
        description: "Split klímák szakszerű telepítése és éves higiéniai tisztítása, hogy otthona minden évszakban a nyugalom szigete legyen.",
        tags: ["Klímatelepítés", "Antibakteriális tisztítás"]
    },
    {
        icon: "⛽",
        category: "SZERELŐ, KARBANTARTÓ",
        name: "Gázszerelő",
        description: "Gázkészülékek biztonsági felülvizsgálata és javítása, szem előtt tartva a legszigorúbb műszaki előírásokat.",
        tags: ["Készülék karbantartás", "Műszaki felülvizsgálat"]
    },

    // ÉPÍTŐIPAR
    {
        icon: "🖌️",
        category: "ÉPÍTŐIPAR",
        name: "Festő",
        description: "Minőségi szobafestés, mázolás és tapétázás precíz élképzéssel és tiszta munkavégzéssel a megújuló terekért.",
        tags: ["Gépi glettelés", "Dekorációs festés"]
    },
    {
        icon: "🧱",
        category: "ÉPÍTŐIPAR",
        name: "Burkoló",
        description: "Hideg- és melegburkolási munkák kivitelezése a legmodernebb segédanyagok és szintezőrendszerek használatával.",
        tags: ["Nagyméretű lapok fektetése", "Élvédőzés"]
    },
    {
        icon: "🔨",
        category: "ÉPÍTŐIPAR",
        name: "Ács",
        description: "Tetőszerkezetek komplett kivitelezése és fa építmények gyártása, ahol a hagyományos tudás találkozik a tartóssággal.",
        tags: ["Tetőfedés", "Kocsibeálló készítés"]
    },
    {
        icon: "🪑",
        category: "ÉPÍTŐIPAR",
        name: "Asztalos",
        description: "Egyedi bútorok és beépített szekrények készítése, amelyek milliméter pontosan illeszkednek otthona adottságaihoz.",
        tags: ["Egyedi bútorgyártás", "Nyílászáró beállítás"]
    },
    {
        icon: "🏠",
        category: "ÉPÍTŐIPAR",
        name: "Bádogos",
        description: "Ereszcsatorna rendszerek és lemezfedések precíz illesztése, megvédve az épületet az időjárás viszontagságaitól.",
        tags: ["Ereszcsatornázás", "Lemezfedés"]
    },
    {
        icon: "📐",
        category: "ÉPÍTŐIPAR",
        name: "Gipszkartonszerelő",
        description: "Szárazépítészeti megoldások, válaszfalak és rejtett világításos álmennyezetek gyors és tiszta kivitelezése.",
        tags: ["Válaszfalak", "Álmennyezet építés"]
    },

    // TAKARÍTÁS
    {
        icon: "🏡",
        category: "TAKARÍTÁS",
        name: "Apartman / Nyaraló takarítás",
        description: "Rövid távú kiadásra szánt ingatlanok villámgyors, magas szintű fertőtlenítő takarítása és vendégváró bekészítése.",
        tags: ["Ágyneműcsere", "Bekészítés ellenőrzés"]
    },
    {
        icon: "🧹",
        category: "TAKARÍTÁS",
        name: "Lakástakarítás",
        description: "Heti rendszertartás vagy szezonális nagytakarítás, hogy Önnek csak a kikapcsolódással kelljen foglalkoznia otthon.",
        tags: ["Vegyszermentes opció", "Ablaktisztítás"]
    },
    {
        icon: "🏢",
        category: "TAKARÍTÁS",
        name: "Telephely takarítás",
        description: "Irodák és telephelyek professzionális tisztán tartása, megteremtve az ideális munkakörnyezetet alkalmazottai számára.",
        tags: ["Ipari takarítás", "Szemétszállítás"]
    },

    // KERTÉSZET
    {
        icon: "💐",
        category: "KERTÉSZET",
        name: "Virágbolt / Virágkötő",
        description: "Egyedi virágkompozíciók és alkalmi dekorációk készítése, amelyek szavak nélkül is érzelmeket közvetítenek.",
        tags: ["Egyedi csokrok", "Rendezvénydekoráció"]
    },
    {
        icon: "✂️",
        category: "KERTÉSZET",
        name: "Kertész",
        description: "Szezonális kertgondozás, metszés és növényvédelem, hogy kertje minden évszakban a legszebb arcát mutassa.",
        tags: ["Metszés", "Fűnyírás és gyepszellőztetés"]
    },
    {
        icon: "🌳",
        category: "KERTÉSZET",
        name: "Kertépítés",
        description: "A puszta telektől a kész oázisig: teljes körű tervezés, tereprendezés és automata öntözőrendszerek kiépítése.",
        tags: ["Térkövezés", "Öntözőrendszer telepítés"]
    },
    {
        icon: "🌻",
        category: "KERTÉSZET",
        name: "Dísznövénykertész",
        description: "Esztétikus és harmonikus növénytársítások kialakítása, figyelembe véve az adott terület mikroklímáját.",
        tags: ["Növénytelepítés", "Szaktanácsadás"]
    },

    // SZÉPSÉGIPAR
    {
        icon: "💇",
        category: "SZÉPSÉGIPAR",
        name: "Fodrász",
        description: "Személyre szabott hajvágási technikák és professzionális színkezelések a legújabb divattrendeknek megfelelően.",
        tags: ["Ombre / Balayage", "Alkalmi frizura"]
    },
    {
        icon: "💅",
        category: "SZÉPSÉGIPAR",
        name: "Körmös",
        description: "Művészi körmök és tartós gél lakk készítése prémium alapanyagokkal, a kéz és láb teljes körű ápolásával.",
        tags: ["Gépi manikűr", "Épített zselé"]
    },
    {
        icon: "👁️",
        category: "SZÉPSÉGIPAR",
        name: "Szempillaépítő",
        description: "Természetes hatású vagy extra dús szempilla szettek építése, amelyek kiemelik a tekintet varázsát.",
        tags: ["3D / 6D Pilla", "Pilla lifting"]
    },
    {
        icon: "🧴",
        category: "SZÉPSÉGIPAR",
        name: "Kozmetikus",
        description: "Bőrmegújító kezelések és esztétikai megoldások egy pihentető környezetben, ahol a bőre újjászületik.",
        tags: ["Arckezelés", "Tartós szőrtelenítés"]
    },

    // OKTATÁS
    {
        icon: "📖",
        category: "OKTATÁS",
        name: "Magántanár",
        description: "Személyre szabott tanrend és motiváló közeg, hogy a tanulás ne kényszer, hanem sikerélmény legyen.",
        tags: ["Egyéni felkészítés", "Nyelvtanulás"]
    },
    {
        icon: "🚗",
        category: "OKTATÁS",
        name: "Autósiskola",
        description: "Türelmes szakoktatók és modern autók, hogy Ön magabiztos és biztonságosan közlekedő vezetővé váljon.",
        tags: ["B kategóriás jogosítvány", "Vezetési gyakorlat"]
    },
    {
        icon: "📝",
        category: "OKTATÁS",
        name: "Korrepetálás",
        description: "Célirányos segítség a lemaradások pótlására és sikeres vizsgák letételére minden korosztály számára.",
        tags: ["Érettségi felkészítő", "Tantárgyi segédlet"]
    },

    // BÚTOR ÖSSZESZERELÉS
    {
        icon: "🔧",
        category: "BÚTOR ÖSSZESZERELÉS",
        name: "IKEA bútor összeszerelés",
        description: "Szakszerű és gyors összeszerelés svéd precizitással, a gardróbrendszerektől a komplett konyhabútorokig.",
        tags: ["Falhoz rögzítés", "Ajtók pontos beállítása"]
    },
    {
        icon: "📦",
        category: "BÚTOR ÖSSZESZERELÉS",
        name: "Jysk / Möbelix bútorok",
        description: "Bármilyen típusú lapraszerelt bútor összeállítása otthonában, megkímélve Önt a bonyolult útmutatóktól.",
        tags: ["Komódok és asztalok", "Gardrób összeállítás"]
    },
    {
        icon: "🛠️",
        category: "BÚTOR ÖSSZESZERELÉS",
        name: "Praktiker bútorok",
        description: "Vásárolt kerti vagy beltéri bútorok stabil és biztonságos szerkezeti összeállítása a helyszínen.",
        tags: ["Konyhai elemek", "Kültéri bútorok"]
    },

    // KÉZMŰVESIPAR
    {
        icon: "🧶",
        category: "KÉZMŰVESIPAR",
        name: "Textilműves",
        description: "Egyedi horgolt és kötött termékek, valamint precíz varrás és hímzés, ahol minden öltésben ott a szeretet.",
        tags: ["Varrás és javítás", "Egyedi textilek"]
    },
    {
        icon: "🎨",
        category: "KÉZMŰVESIPAR",
        name: "Festő (kézműves)",
        description: "Dekoratív falfestések és egyedi művészeti alkotások készítése, amelyek stílust adnak otthonának.",
        tags: ["Portréfestés", "Falfestmény dekoráció"]
    },
    {
        icon: "💍",
        category: "KÉZMŰVESIPAR",
        name: "Ékszerész",
        description: "Kézzel készült, egyedi ékszerek tervezése és javítása, hogy a legfontosabb emlékei örökké ragyogjanak.",
        tags: ["Ékszerjavítás", "Egyedi tervezés"]
    },
    {
        icon: "⌚",
        category: "KÉZMŰVESIPAR",
        name: "Órás",
        description: "Mechanikus és quartz órák precíziós javítása, tisztítása és elemcsere garanciával.",
        tags: ["Szerkezeti tisztítás", "Elemcsere"]
    },

    // GÉPJÁRMŰIPAR
    {
        icon: "🔧",
        category: "GÉPJÁRMŰIPAR",
        name: "Gépjárműszerelő",
        description: "Márkafüggetlen szervizelés, diagnosztika és gyorsjavítások, hogy autója mindig üzembiztos maradjon.",
        tags: ["Olajcsere", "Futómű beállítás"]
    },
    {
        icon: "✨",
        category: "GÉPJÁRMŰIPAR",
        name: "Gépjárműkozmetikus",
        description: "Külső-belső tisztítás, prémium polírozás és kárpittisztítás, hogy autója visszanyerje újkori fényét.",
        tags: ["Nanokerámia bevonat", "Belső fertőtlenítés"]
    },
    {
        icon: "🧼",
        category: "GÉPJÁRMŰIPAR",
        name: "Gépjárműtakarító",
        description: "Gyors és alapos autómosás kézzel, ügyelve a legapróbb részletekre és a környezetbarát tisztítószerekre.",
        tags: ["Motormosás", "Felnitisztítás"]
    },
    {
        icon: "🏁",
        category: "GÉPJÁRMŰIPAR",
        name: "Fényező / Fóliázó",
        description: "Esztétikai színváltoztatás és karosszériavédő fóliák felhelyezése a maximális védelem és stílus érdekében.",
        tags: ["Elemenkénti fényezés", "Karosszéria fólia"]
    },

    // INFORMATIKA
    {
        icon: "👨‍💻",
        category: "INFORMATIKA",
        name: "Programozó",
        description: "Egyedi weboldalak és szoftvermegoldások fejlesztése, modern technológiákkal a digitális sikerért.",
        tags: ["Webfejlesztés", "Applikáció készítés"]
    },
    {
        icon: "🖥️",
        category: "INFORMATIKA",
        name: "Informatikus",
        description: "Otthoni és irodai hálózatok kiépítése, szerverüzemeltetés és IT biztonsági tanácsadás.",
        tags: ["Hálózatépítés", "Szoftveres karbantartás"]
    },
    {
        icon: "🔌",
        category: "INFORMATIKA",
        name: "Eszköz szerelő",
        description: "Laptopok, telefonok és egyéb okoseszközök gyors, szakszerű szervizelése és hardveres javítása.",
        tags: ["Kijelző csere", "Adatmentés"]
    },
    {
        icon: "📸",
        category: "INFORMATIKA / MÉDIA",
        name: "Fényképész",
        description: "Profi portré, termék- és eseményfotózás a legmodernebb digitális utómunkálati technikákkal.",
        tags: ["Rendezvényfotózás", "Portfólió fotózás"]
    },

    // ŐSTERMELŐK & MEZŐGAZDASÁG
    {
        icon: "🍎",
        category: "ŐSTERMELŐK",
        name: "Élelmiszer készítő",
        description: "Helyi alapanyagokból készült kézműves élelmiszerek, tartósítószer nélkül, egyenesen a termelőtől.",
        tags: ["Házi készítmények", "Szezonális finomságok"]
    },
    {
        icon: "🏺",
        category: "ŐSTERMELŐK",
        name: "Dísztárgy készítő",
        description: "Hagyományos technikákkal készült dísztárgyak, amelyek egyedi karaktert adnak minden otthonnak.",
        tags: ["Kézzel készült kerámia", "Fafaragás"]
    },
    {
        icon: "🐄",
        category: "ŐSTERMELŐK",
        name: "Állattenyésztő",
        description: "Felelős állattartásból származó minőségi termékek és friss alapanyagok a tudatos fogyasztók számára.",
        tags: ["Tejtermékek", "Friss húsáru"]
    },
    {
        icon: "🚜",
        category: "MEZŐGAZDASÁG",
        name: "Gépkezelő",
        description: "Mezőgazdasági munkagépek szakszerű üzemeltetése a szántástól a precíziós betakarításig.",
        tags: ["Talajelőkészítés", "Aratási munkálatok"]
    },
    {
        icon: "🍷",
        category: "MEZŐGAZDASÁG",
        name: "Borász",
        description: "Tradicionális borkészítés modern eszközökkel: a szőlőtőkétől egészen a palackozott élményig.",
        tags: ["Borkóstoló", "Szüretvezetés"]
    },
    {
        icon: "🥕",
        category: "MEZŐGAZDASÁG",
        name: "Termesztő",
        description: "Zöldség, gyümölcs és gyógynövény termesztése fenntartható módon, a természet tiszteletével.",
        tags: ["Zöldség-gyümölcs", "Gomba és gyógynövény"]
    },

    // BIZTOSÍTÁS & EGYÉB
    {
        icon: "🛡️",
        category: "BIZTOSÍTÁS",
        name: "Biztosítási szakértő",
        description: "Személyre szabott élet-, vagyon- és nyugdíjbiztosítási megoldások a gondtalan és biztos jövőért.",
        tags: ["Lakásbiztosítás", "Gépjármű CASCO"]
    },
    {
        icon: "🛋️",
        category: "LAKBERENDEZÉS",
        name: "Lakberendező",
        description: "Térszervezés és stílustanácsadás: álmai otthonának vizuális megtervezése és megvalósítása.",
        tags: ["3D Látványtervezés", "Bútorválasztás"]
    },
    {
        icon: "📒",
        category: "KÖNYVELÉS",
        name: "Könyvelő",
        description: "Precíz könyvvezetés, adóoptimalizálás és pénzügyi tanácsadás egyéni vállalkozók és cégek számára.",
        tags: ["Bérszámfejtés", "Adóbevallás készítés"]
    },
    {
        icon: "🎉",
        category: "RENDEZVÉNY",
        name: "Rendezvényszervező",
        description: "Komplett esküvő- és rendezvényszervezés az ötlettől a ceremóniamesterig, hogy Ön csak a pillanatnak éljen.",
        tags: ["Esküvőszervezés", "Ceremóniamester"]
    }
];