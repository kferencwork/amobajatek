const tests = {
  "2026": {
    title: "A 2026-os területi előválogató megoldólapjának kérdéseiből készült interaktív teszt.",
    tasks: [
  {
    points: 2,
    type: "multi",
    prompt: "Milyen típusú DC-DC konverter látható az ábrán?",
    figure: "<img src=\"assets/pdf-page-3-image-1.jpg\" alt=\"DC-DC konverter kapcsolási rajza\">",
    options: ["Buck konverter", "Step-Down konverter", "Boost konverter", "Step-Up konverter"],
    key: [2, 3]
  },
  {
    points: 2,
    type: "single",
    prompt: "Az ábrán egy áteresztő tranzisztoros feszültségstabilizátor látható. A tranzisztor szilíciumból készült, a bemeneti feszültség kellően nagy. Ahhoz, hogy a kimeneti feszültség 5V legyen hány voltos Zener diódát kell alkalmazni?",
    figure: "<img src=\"assets/pdf-page-3-image-2.jpg\" alt=\"Áteresztő tranzisztoros feszültségstabilizátor kapcsolása\">",
    options: ["6,6V-os", "5,6V-os", "4,4V-os", "3,4V-os"],
    key: [1]
  },
  {
    points: 1,
    type: "single",
    prompt: "Melyik logikai kapu igazságtáblája látható az ábrán?",
    figure: "<table class=\"truth-table\"><tr><th>A</th><th>B</th><th>Q</th></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table>",
    options: ["AND", "NAND", "OR", "NOR"],
    key: [1]
  },
  {
    points: 2,
    type: "single",
    prompt: "A mikrokontroller melyik hardveregysége végzi el a logikai műveleteket?",
    options: ["USART", "TWI", "WDT", "ALU"],
    key: [3]
  },
  {
    points: 2,
    type: "single",
    prompt: "A mai korszerű mikrokontrollerek melyik hardveregységének elsődleges feladata, hogy újraindítás után is megőrizze a változókat?",
    options: ["EEPROM", "SRAM", "SD card", "FLASH"],
    key: [0]
  },
  {
    points: 3,
    type: "multi",
    prompt: "A mikrokontrollerekbe épített T/C hardveregységeket milyen funkciókra szokták használni?",
    options: ["referenciafeszültség előállítására", "késleltetésre", "dátumkonverzióra", "impulzusszámlálásra", "periódusidő mérésére", "megszakítás feldolgozására"],
    key: [1, 3, 4]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a mikrokontrollerek megszakítás kezelésére vonatkozó helyes állításokat!",
    options: ["A megszakítással felfüggesztett program változói törlődnek.", "Megszakítást szoftveresen is elő lehet idézni.", "A futó megszakítási rutin nem használhatja a vermet.", "A különböző szintű megszakítások között prioritási sorrend van.", "Egyes megszakítások letilthatók.", "Egyidőben csak három megszakítási rutin futhat."],
    key: [1, 3, 4]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a létradiagram programozási nyelvre vonatkozó helyes állításokat!",
    options: ["Leginkább az alacsony szintű assembly programozáshoz hasonlítható.", "Felhasználóbarát.", "A relés vezérléseknél használt áramútterv ábrázolásra épül.", "Grafikus programozási nyelv.", "A bemenetek és a kimenetek közötti függvénykapcsolatot a megadott logikai kapuk valósítják meg.", "A többi PLC programozási nyelvvel ellentétben nem használ merkereket."],
    key: [1, 2, 3]
  },
  {
    points: 2,
    type: "single",
    prompt: "A szabályozási lánc melyik elemének feladata a rendelkező jel előállítása?",
    options: ["Különbségképző szerv.", "Alapjelképző szerv.", "Beavatkozó szerv.", "Érzékelő szerv.", "Erősítő szerv."],
    key: [1]
  },
  {
    points: 2,
    type: "single",
    prompt: "Milyen fizikai működési elvű az LDR?",
    options: ["kapacitív", "induktív", "rezisztív", "termo"],
    key: [2]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a szenzorokra vonatkozó helyes állításokat!",
    options: ["Nem képesek elektromos áramot vagy feszültséget generálni.", "A mai korszerű érzékelők már nem használják a MEMS technológiát.", "A fizikai jellemzőt digitális formában érzékelik a további, számítógépes feldolgozás érdekében.", "Fizikai jelenséget észlelnek.", "Gyakran tartalmaznak beépített A/D átalakítót is.", "Elektromos jellé alakítanak át nem elektromos jelet."],
    key: [3, 4, 5]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a CAN buszra jellemző fogalmakat, állításokat!",
    options: ["Nagy méretű adatblokkok továbbítása.", "Rövid ciklusidő.", "A központi vezérlő teljesítménye határozza meg az egész rendszer hatékonyságát.", "Multi-master jellegű.", "Ütközések kezelésére a CSMA/CD módszer alkalmazása.", "CAN_L és CAN_H vezetékek használata a zavarszűrést is segíti."],
    key: [1, 3, 5]
  },
  {
    points: 2,
    type: "single",
    prompt: "Melyik terepi busz használ hibrid (analóg+digitális) kommunikációs megoldást?",
    options: ["CAN bus", "HART bus", "Foundation Fieldbus", "Profibus"],
    key: [1]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a SCADA rendszerekre jellemző helyes állításokat!",
    options: ["A nagy mennyiségű begyűjtött adat elemzése alapján egy jó karbantartási ütemterv alakítható ki.", "Lehetővé teszi az ipari folyamatok távoli megfigyelését és irányítását.", "Decentralizált rendszer, így biztosítva a stabilitást.", "A SCADA rendszer megválasztásakor az adott gyártók szenzoraihoz és vezérlőihez kell igazodni.", "A könnyebb felügyelet érdekében a SCADA összetevői egyazon protokollal kommunikálnak egymással.", "A valós idejű monitorozás segít a hibák korai észlelésében és lehetővé teszi az időben történő beavatkozást."],
    key: [0, 1, 5]
  },
  {
    points: 2,
    type: "multi",
    prompt: "Melyek a SCADA rendszerekben alkalmazott távoli terminálegységek (RTU-k) alapvető feladatai?",
    options: ["Adatgyűjtés.", "Adatok továbbítása a felügyeleti rendszernek.", "Adatok tárolása későbbi feldolgozásra.", "Eltárolt adatok feldolgozása."],
    key: [0, 1]
  },
  {
    points: 2,
    type: "single",
    prompt: "Melyik hálózati címfordítási módszer teszi lehetővé, hogy a publikus hálózatból elérhetővé váljon a privát hálózatban lévő szerver mindegyik működő szolgáltatása?",
    options: ["Port továbbítás.", "Statikus NAT.", "Dinamikus NAT.", "PAT."],
    key: [1]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a helyi hálózatokban használt csavart érpáras kábelekre vonatkozó helyes állításokat!",
    options: ["A kábel legnagyobb hossza két eszköz között maximum 150 m lehet.", "Az 1 Gb/s és annál nagyobb sebességű hálózatok esetén a keresztkötésű kábeleket már nem használjuk.", "Az érpárak előírt számú csavarása az RFI ellen teljes, az EMI ellen részleges védelmet nyújt.", "Az alkalmazott RJ45 típusú csatlakozók használatánál a bekötési színsorrendeket a TIA568B és a TIA568D szabványok írják elő.", "A kábelek ajánlott sávszélességére a gyártó által feltüntetett Cat jelölés utal.", "Az interferencia csökkentése érdekében a négy csavart érpár csavarási száma eltér egymástól."],
    key: [1, 4, 5]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki az alábbi IP-címek közül a szórási (broadcast) címeket!",
    options: ["120.40.12.127/25", "192.192.191.191/26", "10.15.127.191/25", "200.75.100.29/27", "172.16.129.31/26", "128.144.52.223/27"],
    key: [0, 1, 5]
  },
  {
    points: 2,
    type: "single",
    prompt: "Melyik vezeték nélküli hálózati szabványt nevezik még WiFi 6-nak is?",
    options: ["802.11g", "802.11ax", "802.11be", "802.11ac"],
    key: [1]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a vezetékes adatátvitelt megvalósító kommunikációs protokollokat!",
    options: ["ZigBee", "I2C", "LoRaWAN", "UART", "SPI", "Bluetooth"],
    key: [1, 3, 4]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki azokat az érzékelő típusokat, amelyeket mozgás detektálására használnak!",
    options: ["CO-érzékelő.", "Piezo érzékelő.", "Termisztoros érzékelő.", "Ultrahangos érzékelő.", "Gyorsulásmérő.", "PIR-szenzor."],
    key: [3, 4, 5]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Melyek azok az érzékelő típusok, amelyeket okos otthonokban szoktak használni?",
    options: ["CO-érzékelő.", "Mozgásérzékelő.", "Hőmérséklet-érzékelő.", "GPS-vevő.", "Glükózérzékelő.", "Nyomásérzékelő."],
    key: [0, 1, 2]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki azokat a szolgáltatásokat, amelyek egy IoT szerver alapvető feladatainak ellátására szolgálnak!",
    options: ["Adatgyűjtés és tárolás.", "Adatok grafikus megjelenítése.", "Adatfeldolgozás.", "Adattovábbítás levelező felületen.", "Adatelérés biztosítása proxyn keresztül.", "DNS-szolgáltatás az adatok webes eléréséhez."],
    key: [0, 1, 2]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki az MQTT protokollra vonatkozó helyes állításokat!",
    options: ["Biztosítja az IoT eszközök egymás közötti közvetlen kommunikációját.", "Lehetővé teszi jól skálázható rendszerek kiépítését.", "Az MQTT-vel üzemeltetett rendszerek bővítését nagy mértékben korlátozza az MQTT bővíthetőségének komplexitása.", "Az üzenetek közvetítése a broker feladata.", "Biztonsági hátrányai miatt az iparban nem használják, csak okosotthonokban.", "Működése közzététel/előfizetés (publish/subscribe) architektúrára épül."],
    key: [1, 3, 5]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Mik az adatbázis tervezésének alapvető lépései?",
    options: ["Űrlapok létrehozása a rekordok feltöltéséhez.", "Kulcsok meghatározása.", "Táblák létrehozása, megfelelő mezők és mezőtípusok kiválasztása.", "Relációk kialakítása.", "A kapcsolatok teszteléséhez lekérdezések létrehozása.", "Index tábla megtervezése és létrehozása."],
    key: [1, 2, 3]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki az elsődleges kulcsra vonatkozó helyes állításokat!",
    options: ["A rekord egyedi azonosítója.", "Több elsődleges kulcs használata biztonságosabbá teszi a tábla kezelését.", "Jellemzően „auto increment” tulajdonságú.", "Kezdeti értéke jellemzően: NULL.", "Egy vagy több mezőből áll.", "Az indexelésből kihagyható, de nem ajánlott."],
    key: [0, 2, 4]
  },
  {
    points: 2,
    type: "single",
    prompt: "Milyen sorrendben dolgozza fel az adatbázis kezelő rendszer az egymásba ágyazott függvényeket?",
    options: ["Balról jobbra.", "Prioritás szerint.", "Belülről kifelé.", "A beírás sorrendjében."],
    key: [2]
  },
  {
    points: 2,
    type: "single",
    prompt: "Válassza ki az SQL nyelvben használatos alias (álnév) működésére vonatkozó HELYTELEN állítást!",
    options: ["Álnevet rendel egy számított oszlophoz.", "Megkönnyíti az olvashatóságot egy lekérdezésnél.", "Álnevet rendel egy táblához.", "Álnevet rendel egy rekordhoz."],
    key: [3]
  },
  {
    points: 2,
    type: "single",
    prompt: "Válassza ki azt a módszert, amivel NEM lehet egy HTML elemre stílusdefiníciót megadni!",
    options: ["A HTML-dokumentumba beágyazott stílusdefinícióval.", "Külső fájlból beimportált stíluslappal.", "A CSS-fájlban a <style> taggel megadott stílusdefinícióval.", "A böngésző alapértelmezett stílusbeállításával."],
    key: [2]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a JavaScript programozási nyelvre vonatkozó helyes állításokat!",
    options: ["Elsősorban backend oldalon használják.", "Alkalmas az űrlap elemeinek kezelésére.", "Lehetővé teszi az OOP használatát.", "Statikus weboldalak kezelésére fejlesztették ki.", "Alkalmas pl. a pontos idő weblapon történő megjelenítésére is.", "A szerver oldali adatbázis lekérdezése a legelterjedtebb alkalmazása."],
    key: [1, 2, 4]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a helytelen JavaScript-változódefiníciókat!",
    options: ["let alma = 55;", "const PI; PI = 3.1415926;", "let first-name = \"Jack\";", "const old;", "const y = 'Kiss Pista';", "let address = \"Kossuth tér 1.\";"],
    key: [1, 2, 3]
  },
  {
    points: 2,
    type: "single",
    prompt: "Válassza ki az alábbi példák közül azt, amelyik egy CSS fájl helyes szintaktikával kommentelt egy sorát mutatja!",
    options: ["background-color: #80ced6; # Ez a háttérszín beállítása #", "/* Ez a háttérszín beállítása */", "background-color: #80ced6; */ Ez a háttérszín beállítása */", "// Ez a háttérszín beállítása"],
    key: [1]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a vállalatirányítási rendszerekre vonatkozó helyes állításokat!",
    options: ["A vállalatirányítási rendszerhez biztonsági okokból semmilyen formában sem lehet kívülről, az internetről hozzáférni.", "Gyártó vállalatoknál fontos a CAM-rendszerek integrálása az irányítási rendszerbe.", "Ugyanazon adatok többszörös bevitele növeli az adatbiztonságot.", "Az egyik legfontosabb jellemzője az egyes modulok közötti információátadás hatékonysága.", "A termelési folyamatba való távoli beavatkozást meggátolja a balesetek elkerülése érdekében.", "Fő feladata, hogy a vezetőket ellássa azokkal az információkkal, amelyek a vezetői döntések meghozatalához szükségesek."],
    key: [1, 3, 5]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki azokat a funkciókat, amelyeket egy vállalatirányítási rendszerben a pénzügyi modul kezel!",
    options: ["Rendelés automatikus indítása.", "Vevői számlák kezelése.", "Leltározás.", "Fizetési felszólítások automatikus küldése.", "Termékek nyilvántartása.", "Késedelmi kamat kezelése."],
    key: [1, 3, 5]
  },
  {
    points: 2,
    type: "single",
    prompt: "Miben segíti a vállalatot az ISO9002 bevezetése?",
    options: ["Megmutatja a minőségirányítási rendszerre vonatkozó általános követelményeket.", "Növeli a vállalati folyamatok hatékonyságát.", "Útmutatót ad a környezetközpontú irányítási rendszerek auditjához.", "Útmutatást ad a vezetőségnek a már működő rendszer továbbfejlesztéséhez."],
    key: [1]
  },
  {
    points: 2,
    type: "single",
    prompt: "Válassza ki a minőségbiztosított folyamatoknál alkalmazott PDCA ciklus 4 elemét tartalmazó felsorolást!",
    options: ["tervezés, cselekvés, ellenőrzés, beavatkozás.", "tanulmányozás, tervezés, beavatkozás, cselekvés.", "tervezés, cselekvés, javítás, dokumentálás.", "cselekvés, ellenőrzés, beavatkozás, dokumentálás."],
    key: [0]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki az alábbiak közül, hogy mit NEM kell tartalmaznia munkaszerződésnek!",
    options: ["A munkavállaló alapbérét.", "A munkakör részletes leírását.", "A végkielégítés összegét.", "A munkabér kifizetésének napját.", "A munkavállaló munkakörét.", "A munkáltató adatait."],
    key: [1, 2, 3]
  },
  {
    points: 2,
    type: "single",
    prompt: "Mi a jelentése az ábrán látható piktogramnak?",
    figure: "<img src=\"assets/pdf-page-13-image-1.png\" alt=\"Porvédő maszk piktogram\">",
    options: ["Egészségügyi részleg.", "Fertőző betegek karantén zónája.", "Porvédő maszk használata kötelező.", "Porvédő maszk használata javasolt."],
    key: [2]
  },
  {
    points: 2,
    type: "single",
    prompt: "Mi a jelentése az ábrán látható piktogramnak?",
    figure: "<img src=\"assets/pdf-page-13-image-2.jpg\" alt=\"Lift használata tűz esetén tilos piktogram\">",
    options: ["A vészfelvonó csak tűz esetén használható.", "A felvonón személy szállítása tilos.", "A lift használata tűz esetén tilos.", "Nagy létszámú csoport nem használhatja a felvonót."],
    key: [2]
  },
  {
    points: 3,
    type: "multi",
    prompt: "Válassza ki a munkavállaló kötelességei alá tartozó munkavédelmi feladatokat!",
    options: ["A munkaeszközben bekövetkező sérülést a lehetőségeknek megfelelően megjavítani.", "Az előírt pályaalkalmassági vizsgálaton részt kell vennie.", "A munkavédelmi oktatásban előírtaknak megfelelően végezni a munkáját.", "A munkáltatót tájékoztatni az észlelt, veszélyt jelentő rendellenességről.", "Az előírt munkavédelmi eszköz beszerzése és rendeltetésszerű használata.", "A munkahely megfelelő kialakítása a balesetmentes munkavégzés érdekében."],
    key: [1, 2, 3]
  }
    ]
  },
  "2025": {
    title: "A 2025-ös területi előválogató megoldólapjának kérdéseiből készült interaktív teszt.",
    tasks: [
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki az alábbi mondatból hiányzó kifejezést! Amennyiben a relációs adatbázis egy táblájának egyik mezője sem biztosítja az egyediséget, ……….. kulcs használatára van szükség.",
        options: ["idegen", "egyedi", "összetett", "elsődleges", "másodlagos"],
        key: [2]
      },
      {
        points: 6,
        type: "multi",
        prompt: "Válassza ki az adatbázisokban tárolt redundáns adatokra vonatkozó igaz állításokat!",
        options: ["növeli az adatbázis méretét", "inkonzisztenciát okozhat", "egyszerűsíti a rekordok törlését", "megkönnyíti a rekordok módosítását", "növeli az adatbiztonságot", "megnehezíti az új rekordok felvételét"],
        key: [0, 1, 5],
        pointPerCorrect: 2
      },
      {
        points: 2,
        type: "match",
        prompt: "Melyek a relációs adatbázisokban alkalmazott indexelés előnyei és melyek a hátrányai? Az előnyöket „E” betűvel, a hátrányokat „H” betűvel jelölje!",
        choices: ["E", "H"],
        items: [
          { text: "Nagyszámú index használatával az adatkezelési műveletek időigénye megnő.", key: "H", points: 0.5 },
          { text: "A táblák rekordjainak rendezési ideje csökken.", key: "E", points: 0.5 },
          { text: "Az elsődleges kulcs a hozzájárulásunk nélkül is indexelésre kerül.", key: "E", points: 0.5 },
          { text: "Indexek használatával az adatbázis kibővül, mérete növekszik.", key: "H", points: 0.5 }
        ]
      },
      {
        points: 2,
        type: "multi",
        prompt: "Melyik az a CSS-szelektor típus, amely használatával az összes <h2> elemnek ugyanazt a stílust tudjuk beállítani?",
        options: ["osztály", "elem", "csoport", "azonosító", "címke"],
        key: [1, 4]
      },
      {
        points: 4,
        type: "multi",
        prompt: "Válassza ki a HTML nyelvre vonatkozó igaz állításokat!",
        options: ["A HTML leíró nyelv az alapja a HTTP protokollnak.", "A HTML nyelv leírja a böngésző és a weboldal közötti kommunikációt.", "A HTML nyelv a weboldal struktúráját írja le.", "A HTML nyelv nem elsődleges célja az űrlapfeldolgozás."],
        key: [2, 3],
        pointPerCorrect: 2
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki a webdokumentum megjelenítendő tartalmát közvetlenül közrefogó tagpárt!",
        options: ["<doc></doc>", "<body></body>", "<html></html>", "<head></head>"],
        key: [1]
      },
      {
        points: 2,
        type: "match",
        prompt: "Válassza ki a tartalomkezelő rendszerek mellett és ellen szóló meghatározásokat! A mellette szólót „M” betűvel, az ellene szólót „E” betűvel jelölje!",
        choices: ["M", "E"],
        items: [
          { text: "Képzetlen felhasználók is egyszerűen szerkeszthetnek tartalmakat.", key: "M", points: 0.5 },
          { text: "Könnyen frissíthetők a weboldal menüi és egyéb elemei.", key: "M", points: 0.5 },
          { text: "A bővítményeket gyakran frissítik a fejlesztők.", key: "E", points: 0.5 },
          { text: "A weboldal utólagos átalakítása szakembert igényel.", key: "E", points: 0.5 }
        ]
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki az alábbi mondatból hiányzó kifejezést! A vállalatirányítási integrált informatikai rendszer ………… biztosítja, hogy a rendszert további funkciókkal igény szerint ki lehessen bővíteni.",
        options: ["modularitása", "hardver rendszere", "szoftver rendszere", "integrálhatósága"],
        key: [0]
      },
      {
        points: 2,
        type: "single",
        prompt: "Melyik szabvány írja le a minőségirányítási rendszerrel kapcsolatos követelményeket?",
        options: ["ISO 9000", "ISO 9001", "ISO 9002", "ISO 9004"],
        key: [1]
      },
      {
        points: 2,
        type: "single",
        prompt: "A vállalatirányítási informatikai rendszer melyik modulja kezeli az ajánlatkéréseket, a szállítók adatait, a szállítási előzményeket?",
        options: ["számlázás", "raktárkezelés", "beszerzés", "ügyfélkezelés"],
        key: [2]
      },
      {
        points: 4,
        type: "multi",
        prompt: "Válassza ki a PDCA ciklus elemeit!",
        options: ["beavatkozás", "tanulmányozás", "végrehajtás", "ellenőrzés", "ismétlés", "tervezés", "dokumentálás", "javítás"],
        key: [0, 2, 3, 5]
      },
      {
        points: 4,
        type: "multi",
        prompt: "Melyek azok az okok, amelyek alapján a munkáltató felmondhat a munkavállalónak?",
        options: ["A munkavállaló szülési szabadságra ment.", "A munkavállaló nem rendelkezik az új feladat ellátásához megfelelő szakmai képesítéssel.", "A munkavállaló egészségügyi okok miatt alkalmatlanná vált feladata elvégzésére.", "A munkavállaló megkezdte önkéntes tartalékos katonai szolgálatának teljesítését.", "A munkavállaló apasági szabadságra ment.", "A munkavállaló rendszeresen nem végzi el az előírt feladatát.", "A munkáltató létszámcsökkentéssel racionalizálja a termelést.", "A munkavállaló szülői szabadságra ment."],
        key: [1, 2, 5, 6]
      },
      {
        points: 2,
        type: "single",
        prompt: "Mi a jelentése az ábrán látható jelölésnek?",
        figure: "<img src=\"assets/pdf-2025-page-6-image-1.png\" alt=\"Kettős szigetelés jelölése\">",
        options: ["Közös földelési pont.", "Törpefeszültség.", "Kettős szigetelés.", "I. érintésvédelmi osztály."],
        key: [2]
      },
      {
        points: 2,
        type: "single",
        prompt: "Mik a teendők elektromos tűz esetén?",
        options: ["A tűzoltók értesítése, majd a tűz oltásának megkezdése minden rendelkezésre álló eszközzel.", "Az oltás azonnali megkezdése a rendelkezésre álló eszközökkel, majd sikeres oltás után a tűzoltók értesítése.", "Áramtalanítás, majd az oltás azonnali megkezdése porral vagy gázzal oltó készülékkel, valamint a tűzoltók értesítése.", "Az égő berendezést kihúzni a konnektorból, majd a tűzoltók értesítése."],
        key: [2]
      },
      {
        points: 2,
        type: "single",
        prompt: "Mi az előírás képernyős munkakör esetén a pihenőidőre?",
        options: ["Óránként tíz perc munkaszünet.", "Óránként tíz perc szünet, azaz tíz perc nem képernyős munka.", "Óránként tíz perc szünet, amelyekből maximum 3 szünet összevonható.", "Minden ledolgozott 60 perc után 5 perc szünet."],
        key: [1]
      },
      {
        points: 2,
        type: "single",
        prompt: "Struktúrájuk szerint milyen rendszernek tekinthetők a SCADA rendszerek?",
        options: ["digitális", "analóg", "hibrid", "bináris"],
        key: [2]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Mik a feladatai a PLC-nek a SCADA rendszerekben?",
        options: ["Fizikai mennyiségek mérése.", "Adatgyűjtés a terepi eszközökről.", "Adattovábbítás az adatfeldolgozó számítógépek felé.", "Mért adatok tárolása, naplózása.", "Ember-gép kapcsolat biztosítása.", "Alapvető vezérlési funkciók végrehajtása."],
        key: [1, 2, 5]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Válassza ki az RS-485 kommunikációs szabványra vonatkozó igaz állításokat!",
        options: ["pont-pont kapcsolat az eszközök között", "az OSI-modell alsó két rétegét fedi le", "szimmetrikus jelátvitel", "két vezetéken félduplex adatátviteli mód", "maximális átviteli távolság 100 m", "ipari környezethez tervezték"],
        key: [2, 3, 5]
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki a Foundation Fieldbus H1 terepi buszrendszerre vonatkozó hamis állítást!",
        options: ["Központi vezérjellel ütemezett (token-passing) kommunikáció az eszközök között.", "Peer to peer kommunikációs megoldás.", "Tápellátás és kommunikáció ugyanazon az érpáron biztosított.", "Az átviteli közege: koaxiális kábel."],
        key: [3]
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki a létradiagrammal megadott vezérlés logikai függvényét!",
        figure: "<img src=\"assets/pdf-2025-page-7-image-1.jpg\" alt=\"Létradiagram vezérlés\">",
        options: ["F = (B + C · Ā) + D", "F = (B + C · Ā) + D negált", "F = (B · C + Ā) · D", "F = (B · C negált + Ā) · D"],
        key: [2]
      },
      {
        points: 4,
        type: "multi",
        prompt: "Melyek azok a szabványos analóg jeltartományok, amelyeket a távadók állítanak elő a PLC-k számára?",
        options: ["0-20 mA", "4-20 mA", "0-10 V", "4-10 V"],
        key: [1, 2],
        pointPerCorrect: 2
      },
      {
        points: 3,
        type: "match",
        prompt: "Válogassa szét a vezérlésre és a szabályozásra vonatkozó állításokat! A vezérlést „V” betűvel, a szabályozást „SZ” betűvel jelölje!",
        choices: ["V", "SZ"],
        items: [
          { text: "A beavatkozó jel csak a bemeneti jel értékétől függ.", key: "V", points: 0.5 },
          { text: "Alapeleme a különbségképző szerv.", key: "SZ", points: 0.5 },
          { text: "Például egy üvegház fűtésének be- és kikapcsolása egy-egy konkrét időpontban.", key: "V", points: 0.5 },
          { text: "Hatáslánca nyitott.", key: "V", points: 0.5 },
          { text: "Például egy forrasztópáka hőmérsékletének egy adott értéken tartása.", key: "SZ", points: 0.5 },
          { text: "A rendelkező jel az alapjel és az ellenőrző jel különbségével arányos.", key: "SZ", points: 0.5 }
        ]
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki azt a programozási nyelvet, amelyet nem használnak PLC-k programozásakor!",
        options: ["utasításlista", "létradiagram", "assembly", "FB"],
        key: [2]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Válassza ki azokat a hardverelemeket, amelyeket a korszerű mikrovezérlők tartalmaznak!",
        options: ["CMOS-RAM", "ALU", "C/T", "DDR-RAM", "USART", "BIOS"],
        key: [1, 2, 4]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Melyek azok a jellemzők, amelyek a szilárdtestrelére mint beavatkozó szervre vonatkoznak?",
        options: ["Nem hajlamos peregni (prell).", "Nem igényel hűtést.", "Érzéketlen a mechanikus hatásokra.", "Kapcsoláskor nagyfrekvenciás zajt állít elő.", "Gyorsabban kapcsol, mint az elektromechanikus relé.", "Megbízható galvanikus leválasztást biztosít."],
        key: [0, 2, 4]
      },
      {
        points: 2,
        type: "single",
        prompt: "Mi a feladata a mikrovezérlőkben a flash memóriának?",
        options: ["Változók ideiglenes tárolása.", "Indító program tárolása.", "Futó program tárolása.", "Változók tartós tárolása."],
        key: [2]
      },
      {
        points: 2,
        type: "single",
        prompt: "Mi a célja a PWM megoldásnak a mikrovezérlőkben?",
        options: ["Állandó periódusidejű, állandó kitöltési tényezőjű jel előállítása.", "Változó periódusidejű, állandó kitöltési tényezőjű jel előállítása.", "Állandó periódusidejű, változó kitöltési tényezőjű jel előállítása.", "Változó periódusidejű, változó kitöltési tényezőjű jel előállítása."],
        key: [2]
      },
      {
        points: 2,
        type: "single",
        prompt: "Melyik IoT megoldásra vonatkozik az alábbi megfogalmazás? Rendkívül könnyű közzétételi/előfizetési üzenetátviteli megoldásnak készült, amely ideális távoli eszközök csatlakoztatására kis kódterület igénnyel és minimális hálózati sávszélességgel.",
        options: ["LoRa", "M2M", "DAS", "MQTT"],
        key: [3]
      },
      {
        points: 2,
        type: "single",
        prompt: "Melyik működési elvű érzékelőre igazak a következő tulajdonságok? Könnyen miniatürizálható, nem kopik, érintésmentes érzékelésre alkalmas, nedvességre igen érzékeny, vékony, de nem fémből készült tartály falán keresztül is érzékel.",
        options: ["kapacitív", "rezisztív", "induktív", "optikai"],
        key: [0]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Mik az IoT-gateway feladatai?",
        options: ["Az IoT-eszközök által gyűjtött adatok feldolgozása.", "Kapcsolat létesítése az IoT-eszközök és a felhő között.", "Az IoT-eszközök működésének naplózása.", "Az IoT-eszközöket összekötő HUB-ként való működés.", "Az IoT-eszközök védelme külső támadásokkal szemben.", "Kommunikáció más IoT-gateway eszközökkel erőforrás-megosztás céljából."],
        key: [1, 3, 4]
      },
      {
        points: 2,
        type: "single",
        prompt: "Melyik érzékelőtípust használják leggyakrabban súly mérésére?",
        options: ["HALL érzékelő", "nyúlásmérő bélyeg", "NTC termisztor", "LDR"],
        key: [1]
      },
      {
        points: 3,
        type: "match",
        prompt: "Párosítsa össze a felhőszolgáltatásokat a rájuk jellemző meghatározásokkal! A felhőszolgáltatások rövidítései: „IaaS”, „PaaS”, „SaaS”.",
        choices: ["IaaS", "PaaS", "SaaS"],
        items: [
          { text: "Alkalmazásfejlesztők számára teljes körű környezetet biztosít.", key: "PaaS", points: 1 },
          { text: "Az informatikai erőforrások rugalmas skálázhatóságát teszi lehetővé.", key: "IaaS", points: 1 },
          { text: "A legkisebb karbantartási és felügyeleti munkát igényli az előfizetőtől.", key: "SaaS", points: 1 }
        ]
      },
      {
        points: 3,
        type: "match",
        prompt: "Rendezze sorba az IoT rétegeit a háromrétegű architektúra szerint! Kezdje a fizikai eszközökhöz legközelebbi réteggel!",
        choices: ["1", "2", "3"],
        items: [
          { text: "Alkalmazási réteg.", key: "3", points: 1 },
          { text: "Érzékelési réteg.", key: "1", points: 1 },
          { text: "Hálózati réteg.", key: "2", points: 1 }
        ]
      },
      {
        points: 2,
        type: "single",
        prompt: "Milyen típusú DC-DC konverter látható az ábrán?",
        figure: "<img src=\"assets/pdf-2025-page-11-image-1.jpg\" alt=\"DC-DC konverter kapcsolási rajza\">",
        options: ["Boost konverter", "Buck konverter", "Buck-Boost konverter", "Stepdown konverter"],
        key: [1]
      },
      {
        points: 2,
        type: "single",
        prompt: "Melyik típusú tároló igazságtáblája látható az ábrán?",
        figure: "<table class=\"truth-table\"><tr><th>An</th><th>Bn</th><th>Qn+1</th></tr><tr><td>0</td><td>0</td><td>Qn</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>Q̅n</td></tr></table>",
        options: ["T tároló", "R-S tároló", "D tároló", "J-K tároló"],
        key: [0]
      },
      {
        points: 2,
        type: "single",
        prompt: "Válassza ki az alábbi alhálózatok közül a legnagyobb méretűt!",
        options: ["192.168.192.240 - 255.255.255.240", "172.100.50.64/27", "135.120.74.192 - 255.255.255.248", "224.100.0.0/30"],
        key: [1]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Válassza ki a vezeték nélküli helyi hálózatokra vonatkozó igaz állításokat!",
        options: ["Vállalati környezetben az EAP hitelesítést használják.", "A WLC feladata a vezeték nélküli hálózatok közötti biztonságos kommunikáció biztosítása.", "A dipól antennát AP-k közötti nagy távolságú kapcsolat kialakítására használják.", "Az AES titkosítási megoldás nagyobb biztonságot nyújt, mint a TKIP.", "A WiFi eszközök működését zavarhatják más, szintén ISM frekvenciákat használó eszközök.", "A 802.11ac szabványú eszközök felülről kompatibilisek a 802.11ax szabványú eszközökkel."],
        key: [0, 3, 4]
      },
      {
        points: 2,
        type: "match",
        prompt: "Párosítsa össze a vállalati forgalomirányítókban található memóriatípusokat azok feladatával! A memóriatípusok: „ROM”, „RAM”, „Flash”, „NVRAM”.",
        choices: ["ROM", "RAM", "Flash", "NVRAM"],
        items: [
          { text: "A futó operációs rendszer tárolása.", key: "RAM", points: 0.5 },
          { text: "A boot loader tárolása.", key: "ROM", points: 0.5 },
          { text: "A betöltendő operációs rendszer tárolása.", key: "Flash", points: 0.5 },
          { text: "Az indításkor betöltendő konfiguráció tárolása.", key: "NVRAM", points: 0.5 }
        ]
      },
      {
        points: 3,
        type: "multi",
        prompt: "Válassza ki a hálózati kapcsoló működésére vonatkozó igaz állításokat!",
        options: ["Ha a fizikai célcím nincs a címtáblájában, a keretet elárasztással továbbítja.", "Amikor a címtáblája betelik, törli abból a legrégebbi bejegyzéseket.", "Amint a keret fejléce beérkezik, a logikai cím alapján azonnal megkezdi a keret továbbítását.", "A szórásos célcímmel érkező kereteket minden aktív portján kiküldi, kivéve amelyiken az beérkezett.", "A kapcsolók között kialakult hurkok káros hatását az STP protokoll hivatott megakadályozni.", "A „tárol és továbbít” módszer bár nagyobb kerettovábbítási sebességet, de kisebb adatbiztonságot eredményez."],
        key: [0, 3, 4]
      }
    ]
  }
};

deepFreeze(tests);

let selectedYear = "2026";
let tasks = tests[selectedYear].tasks;
let currentTaskIndex = 0;
let checkedMode = false;
let finishedMode = false;
let earnedScores = Array(tasks.length).fill(null);
let randomMode = true;
let darkMode = localStorage.getItem("darkMode") === "true";
const progressStorageKey = "szakmasztarProgress";
const progressStorageVersion = 3;
const yearRoutes = {
  "2026": "/2026szakmasztar",
  "2025": "/2025szakmasztar"
};
const progressByYear = Object.fromEntries(
  Object.entries(tests).map(([year, test]) => [year, {
    currentTaskIndex: 0,
    tasks: test.tasks.map(task => prepareTask(task)),
    taskOrder: test.tasks.map((_, index) => index),
    earnedScores: Array(test.tasks.length).fill(null),
    selectedAnswers: Array(test.tasks.length).fill(null),
    checkedMode: false,
    finishedMode: false
  }])
);

tasks = orderedTasksForYear(selectedYear);

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const startScreen = document.querySelector("#startScreen");
const appShell = document.querySelector("#appShell");
const startButtons = document.querySelectorAll("[data-start-year]");
const lessonTitle = document.querySelector("#lessonTitle");
const progressWidget = document.querySelector("#progressWidget");
const progressPercent = document.querySelector("#progressPercent");
const progressQuestions = document.querySelector("#progressQuestions");
const progressScore = document.querySelector("#progressScore");
const tasksRoot = document.querySelector("#tasks");
const finishPanel = document.querySelector("#finishPanel");
const finishText = document.querySelector("#finishText");
const answerSkippedBtn = document.querySelector("#answerSkippedBtn");
const submitBtn = document.querySelector("#submitBtn");
const summaryPanel = document.querySelector("#summaryPanel");
const skipBtn = document.querySelector("#skipBtn");
const nextBtn = document.querySelector("#nextBtn");
const exitBtn = document.querySelector("#exitBtn");
const confirmOverlay = document.querySelector("#confirmOverlay");
const confirmTitle = document.querySelector("#confirmTitle");
const confirmMessage = document.querySelector("#confirmMessage");
const confirmCancelBtn = document.querySelector("#confirmCancelBtn");
const confirmAcceptBtn = document.querySelector("#confirmAcceptBtn");
const loadingOverlay = document.querySelector("#loadingOverlay");
let pendingConfirmAction = null;
let skippedQuestions = new Set();
let reviewSkippedMode = false;
let reviewSkippedOrder = [];

document.body.classList.toggle("dark-mode", darkMode);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffledIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}

function shuffleValues(values) {
  return shuffledIndexes(values.length).map(index => values[index]);
}

function prepareTask(task) {
  const prepared = {
    ...task,
    figure: task.figure,
    options: task.options ? [...task.options] : undefined,
    key: Array.isArray(task.key) ? [...task.key] : task.key,
    items: task.items ? task.items.map(item => ({ ...item })) : undefined,
    choices: task.choices ? [...task.choices] : undefined
  };

  if (prepared.type === "single" || prepared.type === "multi") {
    const optionOrder = shuffledIndexes(prepared.options.length);
    const oldToNew = new Map(optionOrder.map((oldIndex, newIndex) => [oldIndex, newIndex]));
    prepared.options = optionOrder.map(oldIndex => task.options[oldIndex]);
    prepared.key = task.key.map(oldIndex => oldToNew.get(oldIndex)).sort((a, b) => a - b);
  }

  if (prepared.type === "match") {
    prepared.items = shuffleValues(prepared.items);
  }

  return prepared;
}

function prepareTaskSet(yearTasks) {
  const taskOrder = randomMode ? shuffledIndexes(yearTasks.length) : yearTasks.map((_, index) => index);
  return taskOrder.map(index => prepareTask(yearTasks[index]));
}

function orderedTasksForYear(year) {
  return progressByYear[year].tasks;
}

function resetProgressForYear(year) {
  const yearTasks = tests[year].tasks;
  const preparedTasks = prepareTaskSet(yearTasks);
  progressByYear[year] = {
    currentTaskIndex: 0,
    tasks: preparedTasks,
    taskOrder: preparedTasks.map((_, index) => index),
    earnedScores: Array(yearTasks.length).fill(null),
    selectedAnswers: Array(yearTasks.length).fill(null),
    checkedMode: false,
    finishedMode: false
  };
}

function showStartScreen() {
  startScreen.hidden = false;
  appShell.hidden = true;
}

function showAppScreen() {
  startScreen.hidden = true;
  appShell.hidden = false;
}

function returnToStartScreen({ clearProgress = false, routeMode = "replace" } = {}) {
  if (clearProgress) {
    clearStoredProgress();
  }
  showStartScreen();
  updateBrowserRoute(null, routeMode);
}

function yearFromLocation() {
  const normalizedPath = window.location.pathname
    .replace(/\/index\.html$/i, "")
    .replace(/\/+$/, "");
  return Object.entries(yearRoutes).find(([, route]) => normalizedPath.endsWith(route))?.[0] || null;
}

function updateBrowserRoute(year, mode = "push") {
  if (window.location.protocol === "file:") {
    const target = new URL(
      year ? `${year}szakmasztar/index.html` : "index.html",
      document.baseURI
    ).href;

    if (window.location.href !== target) {
      window.location[mode === "replace" ? "replace" : "assign"](target);
    }
    return;
  }

  const route = year ? yearRoutes[year] : "/";
  const state = year ? { view: "test", year } : { view: "home" };
  const method = mode === "replace" ? "replaceState" : "pushState";

  window.history[method](state, "", route);
}

function clearStoredProgress() {
  localStorage.removeItem(progressStorageKey);
}

function withLoading(action, delay = 1000) {
  loadingOverlay.hidden = false;
  requestAnimationFrame(() => {
    loadingOverlay.classList.add("active");
  });

  window.setTimeout(() => {
    loadingOverlay.classList.add("settled");

    window.setTimeout(() => {
      action();
      requestAnimationFrame(() => {
        loadingOverlay.classList.remove("active", "settled");
        window.setTimeout(() => {
          loadingOverlay.hidden = true;
        }, 420);
      });
    }, 180);
  }, delay);
}

function updateLessonTitle() {
  if (lessonTitle) {
    lessonTitle.textContent = `${selectedYear} Szakmasztár feladatsor`;
  }
}

function updateProgressWidget() {
  const answeredCount = earnedScores.filter(value => value !== null).length;
  const progressValue = Math.round((answeredCount / tasks.length) * 100);
  const score = calculateScore();

  progressWidget.style.setProperty("--progress", `${progressValue}%`);
  progressPercent.textContent = `${progressValue}%`;
  progressQuestions.textContent = `${Math.min(currentTaskIndex + 1, tasks.length)} / ${tasks.length} kérdés`;
  progressScore.textContent = "";
  progressScore.hidden = true;
}

function activateYear(year, { reset = true } = {}) {
  selectedYear = year;
  if (reset) {
    clearStoredProgress();
    resetProgressForYear(selectedYear);
  }
  tasks = orderedTasksForYear(selectedYear);
  loadYearProgress(selectedYear);
  skippedQuestions = reset ? new Set() : skippedQuestions;
  reviewSkippedMode = reset ? false : reviewSkippedMode;
  reviewSkippedOrder = reset ? [] : reviewSkippedOrder;
  updateLessonTitle();
  renderTasks();
  showQuestionView();
  updateProgressWidget();
  showAppScreen();
  saveYearProgress();
}

function startYear(year) {
  withLoading(() => {
    activateYear(year);
    updateBrowserRoute(year);
  });
}

function renderTasks() {
  const task = tasks[currentTaskIndex];
  const index = currentTaskIndex;
  const shouldRestoreCheckedMode = checkedMode;
  const reviewPosition = reviewSkippedMode ? reviewSkippedOrder.indexOf(currentTaskIndex) + 1 : 0;
  const taskCounter = reviewSkippedMode && reviewPosition > 0
    ? `${reviewPosition} / ${reviewSkippedOrder.length}`
    : `${index + 1} / ${tasks.length}`;
  skipBtn.hidden = reviewSkippedMode;

  tasksRoot.innerHTML = (() => {
    if (task.type === "match") {
      const rows = task.items.map((item, itemIndex) => `
        <div class="match-row">
          <div class="match-text">${escapeHtml(item.text)}</div>
          <div class="match-choices" aria-label="${index + 1}. feladat ${itemIndex + 1}. sor">
            ${task.choices.map(choice => `
              <label class="match-choice">
                <input type="radio" name="task-${index}-item-${itemIndex}" value="${escapeHtml(choice)}">
                <span>${escapeHtml(choice)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `).join("");

      return `
        <article class="task" data-task="${index}">
          <div class="task-header">
            <h3>${taskCounter}</h3>
          </div>
          <p class="prompt">${escapeHtml(task.prompt)}</p>
          ${task.figure ? `<div class="task-figure">${task.figure}</div>` : ""}
          <div class="match-list">${rows}</div>
          <div class="feedback" aria-live="polite"></div>
        </article>
      `;
    }

    const inputType = task.type === "single" ? "radio" : "checkbox";
    const options = task.options.map((option, optionIndex) => {
      return `
        <li class="option">
          <label>
            <input type="${inputType}" name="task-${index}" value="${optionIndex}">
            <span><span class="letter">${letters[optionIndex]})</span> ${escapeHtml(option)}</span>
          </label>
        </li>
      `;
    }).join("");

    return `
      <article class="task" data-task="${index}">
        <div class="task-header">
          <h3>${taskCounter}</h3>
        </div>
        <p class="prompt">${escapeHtml(task.prompt)}</p>
        ${task.type === "multi" ? "<p class='hint'>Több helyes válasz is lehet. Hibás jelölés pontlevonással jár.</p>" : ""}
        ${task.figure ? `<div class="task-figure">${task.figure}</div>` : ""}
        <ol class="options">${options}</ol>
        <div class="feedback" aria-live="polite"></div>
      </article>
    `;
  })();
  restoreSelectedAnswer(index);
  tasksRoot.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", saveYearProgress);
  });
  updateProgressWidget();
}

function selectedValues(taskIndex) {
  return [...document.querySelectorAll(`[name="task-${taskIndex}"]:checked`)]
    .map(input => Number(input.value))
    .sort((a, b) => a - b);
}

function selectedMatchValues(taskIndex, itemCount) {
  return Array.from({ length: itemCount }, (_, itemIndex) => {
    return document.querySelector(`[name="task-${taskIndex}-item-${itemIndex}"]:checked`)?.value || "";
  });
}

function scoreTask(task, selected) {
  if (task.type === "match") {
    return task.items.reduce((sum, item, itemIndex) => {
      return sum + (selected[itemIndex] === item.key ? item.points : 0);
    }, 0);
  }

  if (task.type === "single") {
    return selected.length === 1 && selected[0] === task.key[0] ? task.points : 0;
  }

  const correctSet = new Set(task.key);
  const pointValue = task.pointPerCorrect || 1;
  let raw = 0;
  selected.forEach(value => {
    raw += correctSet.has(value) ? pointValue : -pointValue;
  });
  return Math.max(0, Math.min(task.points, raw));
}

function answerKeyHtml(task, selected) {
  if (task.type === "match") {
    return task.items.map((item, index) => {
      const answer = `${index + 1}. ${escapeHtml(item.key)}`;
      return selected[index] === item.key ? `<span class="answer-hit">${answer}</span>` : answer;
    }).join("; ");
  }

  const selectedSet = new Set(selected);
  return task.key.map(index => {
    const answer = `${letters[index]}) ${escapeHtml(task.options[index])}`;
    return selectedSet.has(index) ? `<span class="answer-hit">${answer}</span>` : answer;
  }).join("; ");
}

function selectedAnswerText(task, selected) {
  if (!selected || !selected.length) {
    return "Nincs válasz";
  }

  if (task.type === "match") {
    return selected.map((value, index) => `${index + 1}. ${escapeHtml(value || "-")}`).join("; ");
  }

  return selected.map(index => `${letters[index]}) ${escapeHtml(task.options[index])}`).join("; ");
}

function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

function yearLabel(year) {
  return year === "2026" ? "2026-os" : `${year}-ös`;
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }

  Object.values(value).forEach(deepFreeze);
  return Object.freeze(value);
}

function calculateScore() {
  const score = earnedScores.reduce((sum, value) => sum + (value || 0), 0);
  return score;
}

function selectedHasCorrectAnswer(task, selected) {
  if (task.type === "match") {
    return selected.some((value, index) => value === task.items[index].key);
  }

  const correctSet = new Set(task.key);
  return selected.some(value => correctSet.has(value));
}

function selectedAnswerForTask(task, taskIndex) {
  return task.type === "match" ? selectedMatchValues(taskIndex, task.items.length) : selectedValues(taskIndex);
}

function restoreSelectedAnswer(taskIndex) {
  const selected = progressByYear[selectedYear].selectedAnswers[taskIndex];
  if (!selected) {
    return;
  }

  const task = tasks[taskIndex];
  if (task.type === "match") {
    selected.forEach((value, itemIndex) => {
      const input = document.querySelector(`[name="task-${taskIndex}-item-${itemIndex}"][value="${CSS.escape(value)}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return;
  }

  selected.forEach(value => {
    const input = document.querySelector(`[name="task-${taskIndex}"][value="${value}"]`);
    if (input) {
      input.checked = true;
    }
  });
}

function saveYearProgress() {
  const selected = tasksRoot.querySelector(".task") ? selectedAnswerForTask(tasks[currentTaskIndex], currentTaskIndex) : null;
  const selectedAnswers = [...progressByYear[selectedYear].selectedAnswers];
  if (selected) {
    selectedAnswers[currentTaskIndex] = selected;
  }

  progressByYear[selectedYear] = {
    currentTaskIndex,
    tasks: [...tasks],
    taskOrder: [...progressByYear[selectedYear].taskOrder],
    earnedScores: [...earnedScores],
    selectedAnswers,
    checkedMode,
    finishedMode
  };

  localStorage.setItem(progressStorageKey, JSON.stringify({
    version: progressStorageVersion,
    selectedYear,
    currentTaskIndex,
    progressByYear,
    skippedQuestions: [...skippedQuestions],
    reviewSkippedMode,
    reviewSkippedOrder
  }));
}

function loadYearProgress(year) {
  const progress = progressByYear[year];
  currentTaskIndex = progress.currentTaskIndex;
  earnedScores = [...progress.earnedScores];
  checkedMode = progress.checkedMode;
  finishedMode = progress.finishedMode;
}

function restoreStoredProgress(expectedYear = null) {
  const raw = localStorage.getItem(progressStorageKey);
  if (!raw) {
    return false;
  }

  try {
    const saved = JSON.parse(raw);
    if (
      !saved
      || saved.version !== progressStorageVersion
      || !tests[saved.selectedYear]
      || !saved.progressByYear?.[saved.selectedYear]
      || (expectedYear && saved.selectedYear !== expectedYear)
    ) {
      return false;
    }

    for (const [year, progress] of Object.entries(saved.progressByYear)) {
      if (!tests[year]) {
        continue;
      }
      const taskCount = tests[year].tasks.length;
      const validOrder = Array.isArray(progress.taskOrder) && progress.taskOrder.length === taskCount;
      const validTasks = Array.isArray(progress.tasks) && progress.tasks.length === taskCount;
      if (!validTasks) {
        clearStoredProgress();
        return false;
      }
      progressByYear[year] = {
        currentTaskIndex: Number.isInteger(progress.currentTaskIndex) ? Math.min(Math.max(progress.currentTaskIndex, 0), taskCount - 1) : 0,
        tasks: progress.tasks,
        taskOrder: validOrder ? progress.taskOrder : tests[year].tasks.map((_, index) => index),
        earnedScores: Array.isArray(progress.earnedScores) && progress.earnedScores.length === taskCount ? progress.earnedScores : Array(taskCount).fill(null),
        selectedAnswers: Array.isArray(progress.selectedAnswers) && progress.selectedAnswers.length === taskCount ? progress.selectedAnswers : Array(taskCount).fill(null),
        checkedMode: Boolean(progress.checkedMode),
        finishedMode: Boolean(progress.finishedMode)
      };
    }

    selectedYear = saved.selectedYear;
    tasks = orderedTasksForYear(selectedYear);
    skippedQuestions = new Set(Array.isArray(saved.skippedQuestions) ? saved.skippedQuestions : []);
    reviewSkippedMode = Boolean(saved.reviewSkippedMode);
    reviewSkippedOrder = Array.isArray(saved.reviewSkippedOrder) ? saved.reviewSkippedOrder : [];
    loadYearProgress(selectedYear);
    return true;
  } catch {
    clearStoredProgress();
    return false;
  }
}

function resetAnswers() {
  clearStoredProgress();
  reviewSkippedMode = false;
  skippedQuestions = new Set();
  reviewSkippedOrder = [];
  resetProgressForYear(selectedYear);
  tasks = orderedTasksForYear(selectedYear);
  loadYearProgress(selectedYear);
  renderTasks();
  document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(input => {
    input.checked = false;
    input.disabled = false;
  });
  document.querySelectorAll(".feedback").forEach(item => {
    item.className = "feedback";
    item.textContent = "";
  });
  calculateScore();
  updateProgressWidget();
  saveYearProgress();
}

function showQuestionView() {
  appShell.classList.remove("summary-mode");
  tasksRoot.hidden = false;
  finishPanel.hidden = true;
  summaryPanel.hidden = true;
  exitBtn.hidden = false;
  document.querySelector(".toolbar").hidden = false;
  skipBtn.hidden = reviewSkippedMode;
}

function showFinishPanel() {
  if (reviewSkippedMode) {
    withLoading(submitTest);
    return;
  }

  if (!skippedQuestions.size) {
    withLoading(submitTest);
    return;
  }

  tasksRoot.hidden = true;
  appShell.classList.remove("summary-mode");
  summaryPanel.hidden = true;
  finishPanel.hidden = false;
  exitBtn.hidden = false;
  document.querySelector(".toolbar").hidden = true;
  finishText.textContent = skippedQuestions.size
    ? `${skippedQuestions.size} átugrott kérdésed maradt. Visszamehetsz ezekre, vagy beadhatod így is.`
    : "Nincs átugrott kérdésed. Beadhatod a feladatsort.";
  answerSkippedBtn.hidden = skippedQuestions.size === 0;
}

function recordCurrentAnswer({ allowEmpty = false } = {}) {
  const task = tasks[currentTaskIndex];
  const selected = selectedAnswerForTask(task, currentTaskIndex);
  const answered = hasAnswered(task, selected);

  if (!answered && !reviewSkippedMode && !allowEmpty) {
    progressByYear[selectedYear].selectedAnswers[currentTaskIndex] = selected;
    saveYearProgress();
    updateProgressWidget();
    return false;
  }

  earnedScores[currentTaskIndex] = 0;
  skippedQuestions.delete(currentTaskIndex);
  saveYearProgress();
  updateProgressWidget();
  return true;
}

function openEmptyAnswerConfirm() {
  pendingConfirmAction = () => {
    closeConfirm();
    recordCurrentAnswer({ allowEmpty: true });
    moveToNextQuestion();
  };
  confirmTitle.textContent = "Tovább lépsz válasz nélkül?";
  confirmMessage.textContent = "Ehhez a kérdéshez nem jelöltél be választ. Biztosan tovább szeretnél lépni?";
  confirmAcceptBtn.textContent = "Igen, tovább";
  confirmOverlay.hidden = false;
  confirmAcceptBtn.focus();
}

function moveToNextQuestion() {
  const nextIndex = tasks.findIndex((_, index) => index > currentTaskIndex && earnedScores[index] === null && !skippedQuestions.has(index));
  if (nextIndex !== -1) {
    currentTaskIndex = nextIndex;
    saveYearProgress();
    renderTasks();
    return;
  }

  if (reviewSkippedMode && skippedQuestions.size) {
    currentTaskIndex = [...skippedQuestions][0];
    saveYearProgress();
    renderTasks();
    return;
  }

  showFinishPanel();
}

function skipCurrentQuestion() {
  skippedQuestions.add(currentTaskIndex);
  saveYearProgress();
  updateProgressWidget();
  moveToNextQuestion();
}

function continueFromSkippedQuestions() {
  if (!skippedQuestions.size) {
    submitTest();
    return;
  }
  reviewSkippedMode = true;
  reviewSkippedOrder = [...skippedQuestions];
  currentTaskIndex = [...skippedQuestions][0];
  showQuestionView();
  renderTasks();
}

function submitTest() {
  tasks.forEach((task, index) => {
    const selected = progressByYear[selectedYear].selectedAnswers[index] || [];
    earnedScores[index] = hasAnswered(task, selected) ? scoreTask(task, selected) : 0;
  });
  skippedQuestions.clear();
  reviewSkippedOrder = [];
  reviewSkippedMode = false;
  saveYearProgress();
  updateProgressWidget();
  showSummary();
}

function showSummary() {
  const totalScore = calculateScore();
  const rows = tasks.map((task, index) => {
    const selected = progressByYear[selectedYear].selectedAnswers[index] || [];
    const earned = earnedScores[index] || 0;
    const ok = earned === task.points;
    const partial = !ok && selectedHasCorrectAnswer(task, selected);
    const selectedText = selectedAnswerText(task, selected);
    return `
      <article class="summary-item ${ok ? "summary-correct" : partial ? "summary-partial" : "summary-wrong"}">
        <h3>${index + 1}. kérdés - ${formatScore(earned)} / ${formatScore(task.points)} pont</h3>
        <p>${escapeHtml(task.prompt)}</p>
        <p><strong>Válaszod:</strong> ${selectedText}</p>
        <p><strong>Helyes válasz:</strong> ${answerKeyHtml(task, selected)}</p>
      </article>
    `;
  }).join("");

  tasksRoot.hidden = true;
  finishPanel.hidden = true;
  appShell.classList.add("summary-mode");
  document.querySelector(".toolbar").hidden = true;
  exitBtn.hidden = false;
  summaryPanel.hidden = false;
  summaryPanel.innerHTML = `
    <div class="summary-card">
      <div class="summary-head">
        <h1>Eredmény: ${formatScore(totalScore)} / 100 pont</h1>
        <p>${earnedScores.filter(value => value !== null).length}/${tasks.length} megválaszolt kérdés</p>
      </div>
      <div class="summary-list">${rows}</div>
    </div>
    <div class="summary-actions">
      <button id="summaryRestartBtn" class="secondary-button" type="button">Újrakezdés</button>
      <button id="summaryHomeBtn" type="button">Főmenü</button>
    </div>
  `;
  document.querySelector("#summaryRestartBtn").addEventListener("click", () => {
    resetAnswers();
    showQuestionView();
  });
  document.querySelector("#summaryHomeBtn").addEventListener("click", () => {
    withLoading(() => {
      returnToStartScreen({ clearProgress: true });
    });
  });
  updateProgressWidget();
}

function hasAnswered(task, selected) {
  if (task.type === "match") {
    return selected.length === task.items.length && selected.every(Boolean);
  }
  return selected.length > 0;
}

nextBtn.addEventListener("click", () => {
  const task = tasks[currentTaskIndex];
  const selected = selectedAnswerForTask(task, currentTaskIndex);
  if (!reviewSkippedMode && !hasAnswered(task, selected)) {
    openEmptyAnswerConfirm();
    return;
  }

  recordCurrentAnswer();
  moveToNextQuestion();
});

skipBtn.addEventListener("click", skipCurrentQuestion);
answerSkippedBtn.addEventListener("click", () => {
  continueFromSkippedQuestions();
});
submitBtn.addEventListener("click", () => {
  withLoading(submitTest);
});
exitBtn.addEventListener("click", openExitConfirm);

function closeConfirm() {
  pendingConfirmAction = null;
  confirmOverlay.hidden = true;
}

function openExitConfirm() {
  if (!summaryPanel.hidden) {
    withLoading(() => {
      returnToStartScreen({ clearProgress: true });
    });
    return;
  }

  pendingConfirmAction = () => {
    closeConfirm();
    withLoading(() => {
      resetAnswers();
      returnToStartScreen({ clearProgress: true });
    });
  };
  confirmTitle.textContent = "Kilépsz a főmenübe?";
  confirmMessage.textContent = "Ha most kilépsz, az aktuális feladatsor eddigi válaszai és előrehaladása elveszik. Biztosan visszalépsz a főmenübe?";
  confirmAcceptBtn.textContent = "Igen, kilépek";
  confirmOverlay.hidden = false;
  confirmAcceptBtn.focus();
}

confirmCancelBtn.addEventListener("click", closeConfirm);

confirmAcceptBtn.addEventListener("click", () => {
  if (!pendingConfirmAction) {
    closeConfirm();
    return;
  }

  pendingConfirmAction();
});

confirmOverlay.addEventListener("click", event => {
  if (event.target === confirmOverlay) {
    closeConfirm();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !confirmOverlay.hidden) {
    closeConfirm();
  }
});

document.addEventListener("contextmenu", event => {
  event.preventDefault();
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  const blockedShortcut = event.key === "F12"
    || (event.ctrlKey && event.shiftKey && ["i", "j", "c", "k"].includes(key))
    || (event.ctrlKey && ["u", "s", "p"].includes(key));

  if (blockedShortcut) {
    event.preventDefault();
  }
});

startButtons.forEach(button => {
  button.addEventListener("click", () => startYear(button.dataset.startYear));
});

function renderLocation({ updateState = false } = {}) {
  const routeYear = yearFromLocation();

  if (!routeYear) {
    showStartScreen();
    if (updateState) {
      updateBrowserRoute(null, "replace");
    }
    return;
  }

  const restored = restoreStoredProgress(routeYear);
  activateYear(routeYear, { reset: !restored });
  if (updateState) {
    updateBrowserRoute(routeYear, "replace");
  }
}

window.addEventListener("popstate", () => {
  withLoading(() => renderLocation());
});

renderLocation({ updateState: true });
withLoading(() => {});
