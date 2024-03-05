const zawodowe = [
    {
        idx: 0,
        tresc: "Które wielkości należy mierzyć w celu wyznaczenia zakresu liniowości wzmacniacza?",
        odpa: "Napięcie wejściowe i moc wyjściową.",
        odpb: "Napięcie wyjściowe i częstotliwość.",
        odpc: "Napięcie wyjściowe i napięcie zasilania.",
        odpd: "Napięcie wejściowe i wyjściowe.",
        prawidlowaodp: "D"
    },
    {
        idx: 1,
        tresc: "Podczas sprawdzania instalacji domofonu cyfrowego, po podłączeniu napięcia zasilającego okazało się, że w słuchawce słychać piski i rozmowa jest słabo słyszalna. Aby usunąć usterkę należy",
        odpa: "obniżyć poziom głośności wywołania w unifonie.",
        odpb: "podwyższyć napięcie zasilania elektrozaczepu.",
        odpc: "wyczyścić przyciski w kasecie rozmownej.",
        odpd: "wyregulować poziom głośności w centrali.",
        prawidlowaodp: "D"
    },
    {
        idx: 2,
        tresc: "Podłączenie po jednej stronie toru transmisyjnego źródła sygnału o stałej i znanej mocy, a po drugiej miernika mocy optycznej, umożliwia bezpośrednie określenie.",
        odpa: "tłumienia złączy.",
        odpb: "długości światłowodu.",
        odpc: "miejsca spawu lub zgięcia włókna światłowodowego.",
        odpd: "całkowitego tłumienia toru optycznego.",
        prawidlowaodp: "D"
    },
    {
        idx: 3,
        tresc: "Do sprawdzenia ciągłości połączeń w obwodach drukowanych urządzeń elektronicznych należy użyć.",
        odpa: "omomierza.",
        odpb: "watomierza.",
        odpc: "woltomierza.",
        odpd: "amperomierza.",
        prawidlowaodp: "A"
    },
    {
        idx: 4,
        tresc: "Która technologia wykorzystuje światło podczerwone do transmisji danych?",
        odpa: "IRDA",
        odpb: "BLUETOOTH",
        odpc: "ZIGBEE",
        odpd: "WIMAX",
        prawidlowaodp: "A"
    },
    {
        idx: 5,
        tresc: "Prawidłowa kolejność czynności przy wymianie uszkodzonej czujki ruchu instalacji kontroli dostępu jest następująca:",
        odpa: "wpisać kod serwisowy, odłączyć akumulator, wymienić czujkę.",
        odpb: "wpisać kod serwisowy, odłączyć zasilanie AC, odłączyć akumulator, wymienić czujkę.",
        odpc: "wpisać kod użytkownika, odłączyć zasilanie AC, wymienić czujkę.",
        odpd: "wpisać kod użytkownika, odłączyć zasilanie AC, odłączyć akumulator, wymienić czujkę.",
        prawidlowaodp: "B"
    },
    {
        idx: 6,
        tresc: "Która z poniższych liczb nie jest zapisem w kodzie BCD8421?",
        odpa: "11111111",
        odpb: "01100110",
        odpc: "00000000",
        odpd: "10011001",
        prawidlowaodp: "A"
    },
    {
        idx: 7,
        tresc: "Na podstawie oględzin instalacji telewizyjnej nie można określić:",
        odpa: "uszkodzenia powłoki kabla.", odpb: "skorodowania czaszy anteny.",
        odpc: "uszkodzenia elektroniki konwertera.",
        odpd: "zniekształcenia lustra czaszy anteny.",
        prawidlowaodp: "C"
    },
    {
        idx: 8,
        tresc: "Zgodnie z normą TIA/EIA-568-B.1 kabel UTP 5e z przeplotem jest tworzony poprzez zamianę ułożenia we wtyczce 8P8C następujących par przewodów (odpowiednio według kolorów):",
        odpa: "biało-pomarańczowy i pomarańczowy z biało-zielonym i zielonym.",
        odpb: "biało-zielony i zielony z biało-niebieskim i niebieskim.",
        odpc: "biało-zielony i zielony z biało-brązowym i brązowym.",
        odpd: "biało-pomarańczowy i pomarańczowy z biało-brązowym i brązowym.",
        prawidlowaodp: "A"
    },
    {
        idx: 9,
        tresc: "Urządzeniem, które umożliwia komputerom bezprzewodowy dostęp do przewodowej sieci komputerowej, jest:",
        odpa: "punkt dostępu.",
        odpb: "modem.",
        odpc: "regenerator.",
        odpd: "koncentrator.",
        prawidlowaodp: "A"
    },
    {
        idx: 10,
        tresc: "Host automatycznie pobiera adres IP z serwera DHCP. W przypadku gdy serwer DHCP ulegnie uszkodzeniu, karcie sieciowej zostanie przypisany adres IP z zakresu:",
        odpa: "192.168.0.1 ÷ 192.168.255.254",
        odpb: "169.254.0.1 ÷ 169.254.255.254",
        odpc: "127.0.0.1 ÷ 127.255.255.255.254",
        odpd: "224.0.0.1 ÷ 224.255.255.254",
        prawidlowaodp: "B"
    },
    {
        idx: 11,
        tresc: "Które polecenie systemu z rodziny Windows pozwala sprawdzić, przechowywane w pamięci podręcznej komputera, zapamiętane tłumaczenia nazw DNS na adresy IP?",
        odpa: "ipconfig /flushdns",
        odpb: "ipconfig /release",
        odpc: "ipconfig /displaydns",
        odpd: "ipconfig /renew",
        prawidlowaodp: "B"
    },
    {
        idx: 12,
        tresc: "Typ transmisji danych do jednego bądź kilku komputerów w jednej chwili, w której odbiorcy są widziani dla nadawcy jako pojedynczy grupowy odbiorca, to:",
        odpa: "unicast.",
        odpb: "broadcast.",
        odpc: "anycast.",
        odpd: "multicast.",
        prawidlowaodp: "D"
    },
    {
        idx: 13,
        tresc: "Oprogramowanie do wirtualizacji dostępne jako rola w systemie Windows Serwer 2012 to:",
        odpa: "Hyper-V",
        odpb: "VMware",
        odpc: "Virtual Box",
        odpd: "Virtual PC",
        prawidlowaodp: "A"
    },
    {
        idx: 14,
        tresc: "Ile maksymalnie adresów można przydzielić hostom w sieci 10.0.0.0/22?",
        odpa: "512 adresów.",
        odpb: "510 adresów.",
        odpc: "1 022 adresy.",
        odpd: "1 024 adresy.",
        prawidlowaodp: "C"
    },
    {
        idx: 15,
        tresc: "Aby zabezpieczyć komunikację terminalową z serwerem, należy użyć połączenia z wykorzystaniem protokołu:",
        odpa: "Telnet",
        odpb: "SSH",
        odpc: "SFTP",
        odpd: "TFTP",
        prawidlowaodp: "B"
    },
    {
        idx: 16,
        tresc: "Wskaż znacznik pozwalający na zapisanie tekstu nieprawidłowego lub nieodpowiedniego w sposób przekreślony.",
        odpa: "&lt;s&gt; &lt;/s&gt;",
        odpb: "&lt;b&gt; &lt;/b&gt;",
        odpc: "&lt;em&gt; &lt;/em&gt;",
        odpd: "&lt;sub&gt; &lt;/sub&gt;",
        prawidlowaodp: "A"
    },
    {
        idx: 17,
        tresc: "Znacznik &lt;pre&gt; &lt;/pre&gt; jest stosowany w celu wyświetlenia:",
        odpa: "znaku przekreślenia.",
        odpb: "znaku wielokropka.",
        odpc: "treści polską czcionką.",
        odpd: "treści czcionką o stałej szerokości.",
        prawidlowaodp: "D"
    },
    {
        idx: 18,
        tresc: "W znaczniku meta w miejsce kropek należy wpisać:  &lt;meta name='description' content='…'&gt;",
        odpa: "nazwę edytora.",
        odpb: "język dokumentu.",
        odpc: "streszczenie treści strony.",
        odpd: "informację o dostosowaniu do urządzeń mobilnych.",
        prawidlowaodp: "C"
    },
    {
        idx: 19,
        tresc: "W której części dokumentu HTML należy umieścić wewnętrzny arkusz stylów?",
        odpa: "W ciele strony.",
        odpb: "W części nagłówkowej strony.",
        odpc: "W skrypcie dołączonym do strony.",
        odpd: "Wewnątrz znacznika, którego styl dotyczy.",
        prawidlowaodp: "B"
    },
    {
        idx: 20,
        tresc: "Aby dołączyć kaskadowy arkusz stylów zapisany w zewnętrznym pliku, należy użyć następującego fragmentu kodu HTML",
        odpa: '&lt;meta charset="styl.css" /&gt;',
        odpb: '&lt;div id="styl.css" relation="css" /&gt;',
        odpc: '&lt;optionvalue="styl.css" type="text/css" /&gt;',
        odpd: '&lt;link rel="stylesheet" type="text/css" href="styl.css" /&gt;',
        prawidlowaodp: "D"
    },
    {
        idx: 21,
        tresc: "Głównym celem stosowania edytora WYSIWYG jest",
        odpa: "szybka wizualizacja tworzonej strony.",
        odpb: "wyszukiwanie błędów w bazie danych.",
        odpc: "pobieranie z Internetu kompletnych portali WWW.",
        odpd: "zautomatyzowanie odtwarzania plików multimedialnych.",
        prawidlowaodp: "A"
    },
    {
        idx: 22,
        tresc: "Aby obsłużyć połączenie z bazą MySQL podczas tworzenia aplikacji internetowej, można wykorzystać język",
        odpa: "CSS",
        odpb: "PHP",
        odpc: "HTML",
        odpd: "XHTML",
        prawidlowaodp: "B"
    },
    {
        idx: 23,
        tresc: "Aby wskazać błędy składniowe w kodzie HTML, należy zastosować",
        odpa: "debugger.",
        odpb: "walidator.",
        odpc: "interpreter.",
        odpd: "kompilator.",
        prawidlowaodp: "B"
    },
    {
        idx: 24,
        tresc: "W celu obliczenia przepływności strumienia cyfrowego generowanego przez pojedynczą rozmowę telefoniczną należy liczbę bitów przypadających na jedną próbkę pomnożyć przez",
        odpa: "częstotliwość próbkowania.",
        odpb: "częstotliwość pasma telefonicznego.",
        odpc: "dolną częstotliwość pasma telefonicznego.",
        odpd: "górną częstotliwość pasma telefonicznego.",
        prawidlowaodp: "A"
    },
    {
        idx: 25,
        tresc: "Pasmo fal radiowych oznaczone skrótem UHF (Ultra High Frequency) obejmuje zakres częstotliwości",
        odpa: "30 MHz ÷ 300 MHz",
        odpb: "3 MHz ÷ 30 MHz",
        odpc: "3 000 MHz ÷ 30 000 MHz",
        odpd: "300 MHz ÷ 3 000 MHz",
        prawidlowaodp: "D"
    },
    {
        idx: 26,
        tresc: "Jak jest oznaczona odmiana szerokopasmowego systemu telekomunikacyjnego FTTX (Fiber-To-The-X), w którym światłowód jest doprowadzony do mieszkania abonenta?",
        odpa: "FTTH",
        odpb: "FTTB",
        odpc: "FTTN",
        odpd: "FTTC",
        prawidlowaodp: "A"
    },
    {
        idx: 27,
        tresc: "W celu umożliwienia dostępu do Internetu komputerom, tabletom i innym urządzeniom w domu lub mieszkaniu należy zastosować ruter",
        odpa: "szkieletowy.",
        odpb: "dostępowy.",
        odpc: "brzegowy.",
        odpd: "korporacyjny.",
        prawidlowaodp: "B"
    },
    {
        idx: 28,
        tresc: "W którym medium transmisyjnym przesyłany sygnał jest najmniej narażony na zakłócenia radioelektryczne?",
        odpa: "W kablu koncentrycznym.",
        odpb: "W kablu światłowodowym.",
        odpc: "W skrętce komputerowej ekranowanej.",
        odpd: "W skrętce komputerowej nieekranowanej.",
        prawidlowaodp: "B"
    },
    {
        idx: 29,
        tresc: "Wskaż element sieci telefonii komórkowej GSM, który nie bierze udziału w zestawianiu połączeń między abonentami tej sieci, niekorzystającymi z usług sieci inteligentnych.",
        odpa: "VLR (Visitor Location Register)",
        odpb: "SCP (Service Control Point)",
        odpc: "MSC (Mobile Switching Centre)",
        odpd: "HLR (Home Location Register)",
        prawidlowaodp: "B"
    },
    {
        idx: 30,
        tresc: "Kabel optyczny oznaczony symbolem Z-XOTKtsd 16J ma powłokę zewnętrzną wykonaną",
        odpa: "z poliuretanu.",
        odpb: "z polwinitu.",
        odpc: "z poliamidu.",
        odpd: "z polietylenu.",
        prawidlowaodp: "D"
    },
    {
        idx: 31,
        tresc: "Usługa dodatkowa w sieci ISDN oznaczona skrótem CFNR (Call Forwarding No Reply) umożliwia przekierowanie połączenia, gdy abonent wywoływany",
        odpa: "jest zajęty.",
        odpb: "nie odpowiada.",
        odpc: "jest nieosiągalny.",
        odpd: "ma załączoną usługę DND.",
        prawidlowaodp: "B"
    },
    {
        idx: 32,
        tresc: "Obiektyw, wizjer, lampa błyskowa, migawka, układ zasilania to elementy budowy",
        odpa: "analogowego odtwarzacza fonograficznego.",
        odpb: "kamery internetowej.",
        odpc: "cyfrowej kamery wideo.",
        odpd: "cyfrowego aparatu fotograficznego.",
        prawidlowaodp: "D"
    },
    {
        idx: 33,
        tresc: "Który panel nie występuje w programie do obróbki grafiki rastrowej?",
        odpa: "Mikser.",
        odpb: "Ścieżki.",
        odpc: "Próbki.",
        odpd: "Kanały.",
        prawidlowaodp: "A"
    },
    {
        idx: 34,
        tresc: "W której rozdzielczości i w trybie koloru należy przygotować obraz cyfrowy przeznaczony do zamieszczania w prezentacji multimedialnej publikowanej w internecie?",
        odpa: "72 ppi, RGB",
        odpb: "300 ppi, RGB",
        odpc: "72 ppi, CMYK",
        odpd: "300 ppi, CMYK",
        prawidlowaodp: "A"
    },
    {
        idx: 35,
        tresc: "W którym trybie pracy aparatu fotograficznego można dokonać rejestracji obrazu z preselekcją czasu naświetlania?",
        odpa: "Auto",
        odpb: "P",
        odpc: "Tv",
        odpd: "Av",
        prawidlowaodp: "C"
    },
    {
        idx: 36,
        tresc: "Jak nazywa się specjalny adres, który posiada każda opublikowana strona i zasób internetowy?",
        odpa: "IMAP",
        odpb: "URL",
        odpc: "FTP",
        odpd: "IP",
        prawidlowaodp: "B"
    },
    {
        idx: 37,
        tresc: "Które oprogramowanie pozwala na tworzenie jednego slajdu w drugim techniką zoomowania z wykorzystaniem tzw. mapy myśli?",
        odpa: "Paint 3D",
        odpb: "Corel Draw",
        odpc: "Prezi Desktop",
        odpd: "LibreOffice Impress",
        prawidlowaodp: "C"
    },
    {
        idx: 38,
        tresc: "Obraz o walorach odwróconych i barwach dopełniających w stosunku do oryginału to",
        odpa: "odbitka fotograficzna.",
        odpb: "diapozytyw.",
        odpc: "negatyw.",
        odpd: "slajd.",
        prawidlowaodp: "C"
    },
    {
        idx: 39,
        tresc: "W którym trybie koloru należy zapisać fotografię cyfrową, która ma zostać wykorzystana w publikacji przygotowywanej przez drukarnię offsetową?",
        odpa: "RGB",
        odpb: "HSL",
        odpc: "CMYK",
        odpd: "Lab",
        prawidlowaodp: "C"
    },
    {
        idx: 40,
        tresc: "Oblicz wartość wyrażenia: 2x^2 + 3x - 5 dla x = 2.",
        odpa: "5",
        odpb: "11",
        odpc: "-3",
        odpd: "7",
        prawidlowaodp: "B"
    },
    {
        idx: 41,
        tresc: "Rozwiąż równanie kwadratowe: x^2 - 4x + 3 = 0.",
        odpa: "x = 1, x = 3",
        odpb: "x = 1, x = 3",
        odpc: "x = 3, x = -1",
        odpd: "x = 1, x = -3",
        prawidlowaodp: "B"
    },
    {
        idx: 41,
        tresc: "Jakie są współrzędne punktu przecięcia się prostej o równaniu y = 2x + 1 i prostej o równaniu y = -3x + 5?",
        odpa: "(2, 5)",
        odpb: "(-1, -1)",
        odpc: "(2, 5)",
        odpd: "(-2, -1)",
        prawidlowaodp: "C"
    },
    {
        idx: 42,
        tresc: "Oblicz pierwiastek kwadratowy z liczby 144.",
        odpa: "12",
        odpb: "14",
        odpc: "10",
        odpd: "16",
        prawidlowaodp: "A"
    },
    {
        idx: 43,
        tresc: "Rozwiąż równanie: 2x + 5 = 17.",
        odpa: "x = 6",
        odpb: "x = 7",
        odpc: "x = 8",
        odpd: "x = 9",
        prawidlowaodp: "A"
    },
    {
        idx: 44,
        tresc: "Oblicz wartość wyrażenia: 3(4 + 2)^2 - 5.",
        odpa: "59",
        odpb: "101",
        odpc: "65",
        odpd: "47",
        prawidlowaodp: "C"
    },
    {
        idx: 45,
        tresc: "Rozwiąż równanie kwadratowe: x^2 - 5x + 6 = 0.",
        odpa: "x = -2",
        odpb: "x = 1",
        odpc: "x = 3",
        odpd: "x = -1",
        prawidlowaodp: "C"
    },
    {
        idx: 46,
        tresc: "Oblicz wartość wyrażenia: 5!.",
        odpa: "120",
        odpb: "720",
        odpc: "24",
        odpd: "5040",
        prawidlowaodp: "A"
    },
    {
        idx: 47,
        tresc: "Oblicz pole powierzchni koła o promieniu 5 cm.",
        odpa: "5π",
        odpb: "10π",
        odpc: "25π",
        odpd: "15π",
        prawidlowaodp: "B"
    },
    {
        idx: 48,
        tresc: "Ile wynosi suma kątów wewnętrznych w sześciokącie?",
        odpa: "180°",
        odpb: "720°",
        odpc: "540°",
        odpd: "360°",
        prawidlowaodp: "B"
    },
    {
        idx: 49,
        tresc: "Oblicz logarytm dziesiętny liczby 1000.",
        odpa: "2",
        odpb: "3",
        odpc: "4",
        odpd: "5",
        prawidlowaodp: "B"
    },
    {
        idx: 50,
        tresc: "Jakie jest pole trójkąta o podstawie 6 cm i wysokości 8 cm?",
        odpa: "14 cm^2",
        odpb: "24 cm^2",
        odpc: "16 cm^2",
        odpd: "32 cm^2",
        prawidlowaodp: "C"
    },
    {
        idx: 51,
        tresc: "Rozwiąż nierówność: 3x - 7 < 5.",
        odpa: "x > 4",
        odpb: "x < 4",
        odpc: "x > 6",
        odpd: "x < 6",
        prawidlowaodp: "B"
    },
    {
        idx: 52,
        tresc: "Oblicz objętość sześcianu o krawędzi długości 4 cm.",
        odpa: "16 cm^3",
        odpb: "64 cm^3",
        odpc: "32 cm^3",
        odpd: "24 cm^3",
        prawidlowaodp: "B"
    },
    {
        idx: 53,
        tresc: "Rozwiąż równanie: 4x - 7 = 5.",
        odpa: "x = 3",
        odpb: "x = 4",
        odpc: "x = 5",
        odpd: "x = 6",
        prawidlowaodp: "A"
    },
    {
        idx: 54,
        tresc: "Oblicz wartość wyrażenia: 3/5 - 1/2 + 2/10.",
        odpa: "1/2",
        odpb: "1/5",
        odpc: "3/10",
        odpd: "1/10",
        prawidlowaodp: "C"
    },
    {
        idx: 55,
        tresc: "Rozwiąż równanie: 2cos(x) = √3 dla 0° ≤ x ≤ 360°.",
        odpa: "x = 30°, 150°",
        odpb: "x = 60°, 120°",
        odpc: "x = 45°, 135°",
        odpd: "x = 90°, 270°",
        prawidlowaodp: "B"
    },
    {
        idx: 56,
        tresc: "Oblicz średnią arytmetyczną liczb 5, 8, 11, 14, 17.",
        odpa: "11",
        odpb: "10",
        odpc: "12",
        odpd: "13",
        prawidlowaodp: "A"
    },
    {
        idx: 57,
        tresc: "Oblicz pole powierzchni trapezu o podstawach długości 6 cm i 10 cm, oraz wysokości 8 cm.",
        odpa: "56 cm^2",
        odpb: "80 cm^2",
        odpc: "64 cm^2",
        odpd: "72 cm^2",
        prawidlowaodp: "C"
    },
    {
        idx: 58,
        tresc: "Jakie są współrzędne punktu przecięcia się prostej o równaniu y = 2x + 1 i prostej o równaniu y = -3x + 5?",
        odpa: "(2, 5)",
        odpb: "(-1, -1)",
        odpc: "(2, 5)",
        odpd: "(-2, -1)",
        prawidlowaodp: "C"
    },
    {
        idx: 59,
        tresc: "Oblicz wartość wyrażenia: 4 + 7 * (3 - 2) / 7.",
        odpa: "5",
        odpb: "6",
        odpc: "7",
        odpd: "4",
        prawidlowaodp: "D"
    },
    {
        idx: 60,
        tresc: "Rozwiąż nierówność: 2x + 3 > 11.",
        odpa: "x > 4",
        odpb: "x < 4",
        odpc: "x > 6",
        odpd: "x < 6",
        prawidlowaodp: "A"
    },
    {
        idx: 61,
        tresc: "Oblicz pierwiastek kwadratowy z liczby 49.",
        odpa: "4",
        odpb: "5",
        odpc: "6",
        odpd: "7",
        prawidlowaodp: "D"
    },
    {
        idx: 62,
        tresc: "Rozwiąż równanie: 3x - 2 = 4.",
        odpa: "x = 2",
        odpb: "x = 3",
        odpc: "x = 4",
        odpd: "x = 5",
        prawidlowaodp: "B"
    },
    {
        idx: 63,
        tresc: "Oblicz wartość wyrażenia: 2^3 * 3^2 / 6.",
        odpa: "6",
        odpb: "8",
        odpc: "9",
        odpd: "12",
        prawidlowaodp: "C"
    },
    {
        idx: 64,
        tresc: "Jakie jest pole powierzchni bocznej stożka o promieniu podstawy 3 cm i wysokości 7 cm?",
        odpa: "21π cm^2",
        odpb: "42π cm^2",
        odpc: "14π cm^2",
        odpd: "28π cm^2",
        prawidlowaodp: "B"
    },
    {
        idx: 65,
        tresc: "Oblicz wartość wyrażenia: 1/3 + 1/4 + 1/6.",
        odpa: "2/3",
        odpb: "9/12",
        odpc: "5/6",
        odpd: "1",
        prawidlowaodp: "B"
    },
    {
        idx: 66,
        tresc: "Rozwiąż równanie: 2x - 5 = 7.",
        odpa: "x = 6",
        odpb: "x = 7",
        odpc: "x = 8",
        odpd: "x = 9",
        prawidlowaodp: "B"
    },
    {
        idx: 67,
        tresc: "Oblicz pole powierzchni prostopadłościanu o bokach długości 4 cm, 6 cm i 8 cm.",
        odpa: "112 cm^2",
        odpb: "96 cm^2",
        odpc: "88 cm^2",
        odpd: "104 cm^2",
        prawidlowaodp: "A"
    },
    {
        idx: 68,
        tresc: "Ile wynosi suma kątów w trójkącie?",
        odpa: "90°",
        odpb: "120°",
        odpc: "180°",
        odpd: "360°",
        prawidlowaodp: "C"
    },
    {
        idx: 69,
        tresc: "Oblicz średnią harmoniczną liczb 2, 3 i 6.",
        odpa: "3",
        odpb: "4",
        odpc: "5",
        odpd: "6",
        prawidlowaodp: "B"
    },
    {
        idx: 70,
        tresc: "Rozwiąż równanie: 5x - 2 = 3.",
        odpa: "x = 1",
        odpb: "x = 1.5",
        odpc: "x = 2",
        odpd: "x = 2.5",
        prawidlowaodp: "A"
    },
    {
        idx: 71,
        tresc: "Oblicz pole powierzchni kuli o promieniu 10 cm.",
        odpa: "400π cm^2",
        odpb: "300π cm^2",
        odpc: "200π cm^2",
        odpd: "100π cm^2",
        prawidlowaodp: "D"
    },
    {
        idx: 72,
        tresc: "Rozwiąż równanie: 3x - 7 = 5.",
        odpa: "x = 3",
        odpb: "x = 4",
        odpc: "x = 5",
        odpd: "x = 6",
        prawidlowaodp: "B"
    },
    {
        idx: 73,
        tresc: "Oblicz wartość wyrażenia: 3/5 - 1/2 + 2/10.",
        odpa: "1/2",
        odpb: "1/5",
        odpc: "3/10",
        odpd: "1/10",
        prawidlowaodp: "C"
    },
    {
        idx: 74,
        tresc: "Rozwiąż równanie: 2cos(x) = √3 dla 0° ≤ x ≤ 360°.",
        odpa: "x = 30°, 150°",
        odpb: "x = 60°, 120°",
        odpc: "x = 45°, 135°",
        odpd: "x = 90°, 270°",
        prawidlowaodp: "B"
    },
    {
        idx: 75,
        tresc: "Oblicz średnią arytmetyczną liczb 5, 8, 11, 14, 17.",
        odpa: "11",
        odpb: "10",
        odpc: "12",
        odpd: "13",
        prawidlowaodp: "A"
    },
    {
        idx: 76,
        tresc: "Oblicz objętość sześcianu o krawędzi długości 4 cm.",
        odpa: "16 cm^3",
        odpb: "64 cm^3",
        odpc: "32 cm^3",
        odpd: "24 cm^3",
        prawidlowaodp: "B"
    },
    {
        idx: 77,
        tresc: "Rozwiąż równanie: 4x - 7 = 5.",
        odpa: "x = 3",
        odpb: "x = 4",
        odpc: "x = 5",
        odpd: "x = 6",
        prawidlowaodp: "A"
    },
    {
        idx: 78,
        tresc: "Oblicz wartość wyrażenia: 2^3 * 3^3 / 1",
        odpa: "499",
        odpb: "352",
        odpc: "990",
        odpd: "648",
        prawidlowaodp: "D"
    },
    {
        idx: 79,
        tresc: "Jak nazywamy zdanie, które zawiera orzeczenie i podmiot?",
        odpa: "Zdanie pojedyncze",
        odpb: "Zdanie podrzędne",
        odpc: "Zdanie współrzędne",
        odpd: "Zdanie złożone",
        prawidlowaodp: "A"
    },
    {
        idx: 80,
        tresc: "Wskaż przykład zdania złożonego współrzędnie.",
        odpa: "Widzę, jak pada deszcz.",
        odpb: "Nie przeczytałem książki, ale usłyszałem o jej treści.",
        odpc: "Zjadłem obiad, ponieważ byłem głodny.",
        odpd: "Kotek mruczy, gdy jest głodny.",
        prawidlowaodp: "B"
    },
    {
        idx: 81,
        tresc: "Co to jest anafora?",
        odpa: "Ponawianie tych samych wyrazów lub ich elementów na początku kolejnych zdań lub zwrotów.",
        odpb: "Zastosowanie synonimów w celu urozmaicenia tekstu.",
        odpc: "Użycie porównań w celu zilustrowania treści.",
        odpd: "Powtórzenie tych samych wyrazów na końcu zdań.",
        prawidlowaodp: "A"
    },
    {
        idx: 82,
        tresc: "Jakie zdanie jest zdaniem pojedynczym?",
        odpa: "Widziałem, jak ptaki leciały wysoko.",
        odpb: "Byłem głodny, więc zjadłem kanapkę.",
        odpc: "Ponieważ padał deszcz, zabrałem ze sobą parasol.",
        odpd: "Kwiaty kwitną na wiosnę.",
        prawidlowaodp: "D"
    },
    {
        idx: 83,
        tresc: "Wskaż przykład zastosowania epitetyzacji w tekście.",
        odpa: "Biały śnieg opadał delikatnie na ziemię.",
        odpb: "Ptaki śpiewały wesoło w ogrodzie.",
        odpc: "Dziewczyna z pięknymi oczami uśmiechała się do mnie.",
        odpd: "Drzewa szumiały delikatnie pod wpływem wiatru.",
        prawidlowaodp: "A"
    },
    {
        idx: 84,
        tresc: "Co to jest elipsa?",
        odpa: "Krótka, zwięzła wypowiedź, zawierająca najważniejsze informacje.",
        odpb: "Rodzaj figury retorycznej, w której zastosowano powtórzenie tych samych wyrazów na końcu kolejnych segmentów zdania.",
        odpc: "Rodzaj figury retorycznej, w której kolejne zdania lub segmenty zdania rozpoczynają się od tych samych wyrazów.",
        odpd: "Długie, rozbudowane zdanie, zawierające wiele informacji i szczegółów.",
        prawidlowaodp: "C"
    },
    {
        idx: 85,
        tresc: "Co oznacza skrót PZPR?",
        odpa: "Partia Zjednoczonej Polski i Rosji",
        odpb: "Partia Zjednoczenia Polski i Rumunii",
        odpc: "Polska Zjednoczona Partia Robotnicza",
        odpd: "Partia Zjednoczenia Polski i Republik",
        prawidlowaodp: "C"
    },
    {
        idx: 86,
        tresc: "Który z podanych związków frazeologicznych jest poprawny?",
        odpa: "piłować nogi",
        odpb: "grać skrzypce",
        odpc: "rzucić kaszę na ścianę",
        odpd: "wrócić z deszczu pod rynnę",
        prawidlowaodp: "B"
    },
    {
        idx: 87,
        tresc: "Co to jest onomatopeja?",
        odpa: "Figura stylistyczna polegająca na przeciwstawieniu sobie dwóch elementów zdania.",
        odpb: "Zastosowanie synonimów w celu urozmaicenia tekstu.",
        odpc: "Nawiązanie do znanej baśni lub legendy w celu zilustrowania treści.",
        odpd: "Figura stylistyczna polegająca na naśladowaniu dźwięków za pomocą wyrazów.",
        prawidlowaodp: "D"
    },
    {
        idx: 88,
        tresc: "Jakie jest znaczenie zwrotu 'cicha noc' w kontekście językowym?",
        odpa: "Noc, w której panuje całkowita cisza.",
        odpb: "Noc, w której nie ma żadnych dźwięków.",
        odpc: "Noc spokojna, bezpieczna.",
        odpd: "Noc pełna tajemnic i nieznanych dźwięków.",
        prawidlowaodp: "C"
    },
    {
        idx: 89,
        tresc: "Co oznacza fraza 'kłaniać się z szacunkiem'?",
        odpa: "Kłaniać się w sposób nieuprzejmy.",
        odpb: "Kłaniać się z uśmiechem.",
        odpc: "Kłaniać się w geście uznania lub szacunku.",
        odpd: "Kłaniać się tylko z politowaniem.",
        prawidlowaodp: "C"
    },
    {
        idx: 90,
        tresc: "Jak nazywamy zbiorową nazwę dla rzeczowników określających ludzi, zwierzęta, rzeczy, miejsca itp.?",
        odpa: "Zbiorczniki",
        odpb: "Rzeczownik zbiorowy",
        odpc: "Kolektywy",
        odpd: "Odmiany",
        prawidlowaodp: "B"
    },
    {
        idx: 91,
        tresc: "Co to jest homonim?",
        odpa: "Słowo brzmiące podobnie, ale o różnym znaczeniu.",
        odpb: "Słowo o dwóch różnych formach fleksyjnych.",
        odpc: "Słowo posiadające dwie odmienne pisownie.",
        odpd: "Słowo, które jest jednocześnie rzeczownikiem i przymiotnikiem.",
        prawidlowaodp: "A"
    },
    {
        idx: 92,
        tresc: "Jakie jest znaczenie zwrotu 'grać na nosie'?",
        odpa: "Grać w sposób irytujący.",
        odpb: "Grać na instrumentach dętych.",
        odpc: "Próbować oszukać kogoś.",
        odpd: "Być utalentowanym muzycznie.",
        prawidlowaodp: "C"
    },
    {
        idx: 93,
        tresc: "What is the plural form of 'child'?",
        odpa: "childs",
        odpb: "childs'",
        odpc: "children",
        odpd: "childrens",
        prawidlowaodp: "C"
    },
    {
        idx: 94,
        tresc: "Which one is a synonym for the word 'beautiful'?",
        odpa: "ugly",
        odpb: "handsome",
        odpc: "plain",
        odpd: "attractive",
        prawidlowaodp: "D"
    },
    {
        idx: 95,
        tresc: "What is the past tense of the verb 'to go'?",
        odpa: "went",
        odpb: "gone",
        odpc: "goed",
        odpd: "going",
        prawidlowaodp: "A"
    },
    {
        idx: 96,
        tresc: "Choose the correct form of the verb: She ____ to the store yesterday.",
        odpa: "go",
        odpb: "goed",
        odpc: "went",
        odpd: "gone",
        prawidlowaodp: "C"
    },
    {
        idx: 97,
        tresc: "Which one is a synonym for the word 'happy'?",
        odpa: "sad",
        odpb: "joyful",
        odpc: "angry",
        odpd: "miserable",
        prawidlowaodp: "B"
    },
    {
        idx: 98,
        tresc: "What is the comparative form of the adjective 'good'?",
        odpa: "goodest",
        odpb: "better",
        odpc: "best",
        odpd: "gooder",
        prawidlowaodp: "B"
    },
    {
        idx: 99,
        tresc: "Co oznacza skrót HTML?",
        odpa: "Hyper Text Markup Language",
        odpb: "Hyperlinks and Text Markup Language",
        odpc: "Home Tool Markup Language",
        odpd: "Hyperlinks Text Management Language",
        prawidlowaodp: "A"
    },
    {
        idx: 100,
        tresc: "Jakiego typu jest zmienna 'age' w języku Python, jeśli ma wartość 25?",
        odpa: "String",
        odpb: "Boolean",
        odpc: "Integer",
        odpd: "Float",
        prawidlowaodp: "C"
    },
    {
        idx: 101,
        tresc: "Co robi operator '==' w języku programowania?",
        odpa: "Przypisuje wartość do zmiennej.",
        odpb: "Porównuje wartości dwóch zmiennych.",
        odpc: "Wykonuje operację modulo.",
        odpd: "Zmienia wartość zmiennej na przeciwną.",
        prawidlowaodp: "B"
    },
    {
        idx: 102,
        tresc: "Co oznacza skrót CSS?",
        odpa: "Computer Style Sheets",
        odpb: "Cascading Style Sheets",
        odpc: "Creative Style Sheets",
        odpd: "Colorful Style Sheets",
        prawidlowaodp: "B"
    },
    {
        idx: 103,
        tresc: "Który z poniższych jest przykładem pętli w języku Python?",
        odpa: "if-else",
        odpb: "for",
        odpc: "switch",
        odpd: "break",
        prawidlowaodp: "B"
    },
    {
        idx: 104,
        tresc: "Co to jest algorytm?",
        odpa: "Program komputerowy służący do rozwiązywania problemów.",
        odpb: "Zbiór reguł postępowania prowadzących do rozwiązania określonego problemu.",
        odpc: "Struktura danych przechowująca dane w formie tabelarycznej.",
        odpd: "Interfejs użytkownika umożliwiający komunikację z komputerem.",
        prawidlowaodp: "B"
    },
    {
        idx: 105,
        tresc: "Co to jest debugger?",
        odpa: "Program służący do tworzenia grafiki 3D.",
        odpb: "Osoba odpowiedzialna za testowanie oprogramowania.",
        odpc: "Narzędzie do wykrywania i eliminowania błędów w kodzie programu.",
        odpd: "Skrótowiec klawiaturowy używany do szybkiego dostępu do funkcji programu.",
        prawidlowaodp: "C"
    },
    {
        idx: 106,
        tresc: "Co to jest interfejs użytkownika?",
        odpa: "Zestaw instrukcji definiujących sposób wykonania konkretnego zadania.",
        odpb: "Program umożliwiający korzystanie z funkcji systemu operacyjnego.",
        odpc: "Warstwa oprogramowania umożliwiająca komunikację między użytkownikiem a systemem komputerowym.",
        odpd: "Narzędzie służące do analizy wydajności systemu komputerowego.",
        prawidlowaodp: "C"
    },
    {
        idx: 107,
        tresc: "Co to jest program komputerowy?",
        odpa: "Instrukcje zapisane na kartkach papieru.",
        odpb: "Urządzenie służące do wprowadzania danych do komputera.",
        odpc: "Zestaw instrukcji zapisanych w formie kodu, które komputer może wykonać.",
        odpd: "Skrót klawiaturowy służący do uruchamiania aplikacji.",
        prawidlowaodp: "C"
    },
    {
        idx: 108,
        tresc: "Co oznacza skrót SQL?",
        odpa: "Structured Language",
        odpb: "Simple Loop",
        odpc: "Sequential List",
        odpd: "Structured Query Language",
        prawidlowaodp: "D"
    },
    {
        idx: 109,
        tresc: "Co to jest algorytm sortowania?",
        odpa: "Proces wykonywania operacji na danych w określonej kolejności.",
        odpb: "Zbiór instrukcji wykonywanych przez komputer w celu rozwiązania problemu sortowania danych.",
        odpc: "Interfejs graficzny umożliwiający użytkownikowi sortowanie plików na komputerze.",
        odpd: "Sposób zapisu danych na dysku twardym w celu ich uporządkowania.",
        prawidlowaodp: "B"
    },
    {
        idx: 110,
        tresc: "Co to jest rekurencja w kontekście programowania?",
        odpa: "Pętla wykonująca się określoną liczbę razy.",
        odpb: "Proces, w którym funkcja wywołuje samą siebie w swoim ciele.",
        odpc: "Instrukcja warunkowa stosowana do wyboru pomiędzy dwoma alternatywami.",
        odpd: "Sposób zapisu danych w postaci drzewiastej.",
        prawidlowaodp: "B"
    },
    {
        idx: 111,
        tresc: "Jakie jest znaczenie skrótu 'URL'?",
        odpa: "Universal Resource Locator",
        odpb: "Uniform Resource Locator",
        odpc: "Universal Reference Link",
        odpd: "Unified Record Locator",
        prawidlowaodp: "B"
    },
    {
        idx: 112,
        tresc: "Co to jest 'cookie' w kontekście internetu?",
        odpa: "Krótka wiadomość tekstowa przesyłana przez użytkownika za pomocą przeglądarki internetowej.",
        odpb: "Plik tekstowy przechowujący informacje o użytkowniku odwiedzającym stronę internetową.",
        odpc: "Nazwa technologii używanej do szyfrowania danych przesyłanych przez internet.",
        odpd: "Metoda kompresji danych wykorzystywana podczas transmisji plików przez sieć.",
        prawidlowaodp: "B"
    },
    {
        idx: 113,
        tresc: "Co oznacza skrót 'HTTP'?",
        odpa: "Hyperlink Transfer Protocol",
        odpb: "Hypertext Transfer Program",
        odpc: "Hypertext Transfer Protocol",
        odpd: "Hypertext Terminal Program",
        prawidlowaodp: "C"
    },
    {
        idx: 114,
        tresc: "Co oznacza skrót 'API'?",
        odpa: "Application Programming Interface",
        odpb: "Automated Program Integration",
        odpc: "Advanced Programming Interface",
        odpd: "Automated Protocol Integration",
        prawidlowaodp: "A"
    },
    {
        idx: 115,
        tresc: "Co to jest 'cache' w kontekście internetu?",
        odpa: "Pamięć podręczna wykorzystywana do tymczasowego przechowywania danych w celu ich szybszego dostępu.",
        odpb: "Nazwa serwera internetowego odpowiedzialnego za przechowywanie plików multimedialnych.",
        odpc: "Metoda szyfrowania danych przesyłanych przez internet.",
        odpd: "Krótka wiadomość tekstowa przesyłana przez użytkownika za pomocą przeglądarki internetowej.",
        prawidlowaodp: "A"
    },
    {
        idx: 116,
        tresc: "Co to jest 'firewall'?",
        odpa: "Program do wykonywania operacji matematycznych na dużych zbiorach danych.",
        odpb: "Urządzenie służące do połączenia komputera z internetem.",
        odpc: "System zabezpieczeń sieci komputerowej, blokujący nieautoryzowany dostęp.",
        odpd: "Narzędzie służące do analizy wydajności komputera.",
        prawidlowaodp: "C"
    },
    {
        idx: 117,
        tresc: "Co to jest 'router'?",
        odpa: "Urządzenie sieciowe służące do łączenia komputerów w sieć lokalną.",
        odpb: "Program komputerowy do zarządzania bazą danych.",
        odpc: "Narzędzie do przesyłania plików między komputerami.",
        odpd: "Urządzenie sieciowe przekierowujące pakiety danych między sieciami komputerowymi.",
        prawidlowaodp: "D"
    },
    {
        idx: 118,
        tresc: "Co oznacza skrót 'LAN'?",
        odpa: "Local Area Network",
        odpb: "Large Area Network",
        odpc: "Long Access Node",
        odpd: "Local Access Network",
        prawidlowaodp: "A"
    },
    {
        idx: 119,
        tresc: "Co to jest 'DNS'?",
        odpa: "Digital Network System",
        odpb: "Dynamic Network Server",
        odpc: "Domain Name System",
        odpd: "Direct Network Service",
        prawidlowaodp: "C"
    },
    {
        idx: 120,
        tresc: "Co to jest 'RAM'?",
        odpa: "Read Access Memory",
        odpb: "Random Access Memory",
        odpc: "Remote Access Memory",
        odpd: "Read and Modify",
        prawidlowaodp: "B"
    },
    {
        idx: 121,
        tresc: "Jak nazywa się proces zapisywania danych na dysku twardym?",
        odpa: "Read",
        odpb: "Write",
        odpc: "Save",
        odpd: "Load",
        prawidlowaodp: "B"
    },
    {
        idx: 122,
        tresc: "Co to jest 'CPU'?",
        odpa: "Computer Processing Unit",
        odpb: "Central Processing Unit",
        odpc: "Computer Peripheral Unit",
        odpd: "Central Peripheral Unit",
        prawidlowaodp: "B"
    },
    {
        idx: 123,
        tresc: "Co to jest 'GUI'?",
        odpa: "Graphical Universal Interface",
        odpb: "Graphical User Interface",
        odpc: "General Universal Interface",
        odpd: "General User Interface",
        prawidlowaodp: "B"
    },
    {
        idx: 124,
        tresc: "Co to jest 'WAN'?",
        odpa: "Wide Area Node",
        odpb: "Wide Access Network",
        odpc: "Wide Area Network",
        odpd: "Wired Access Network",
        prawidlowaodp: "C"
    },
    {
        idx: 125,
        tresc: "Co oznacza skrót 'SMTP'?",
        odpa: "Simple Mail Transfer Protocol",
        odpb: "Simple Message Transfer Protocol",
        odpc: "System Mail Transfer Protocol",
        odpd: "System Message Transfer Protocol",
        prawidlowaodp: "A"
    },
    {
        idx: 126,
        tresc: "Co oznacza skrót 'FTP'?",
        odpa: "File Transfer Program",
        odpb: "File Transmission Protocol",
        odpc: "File Transfer Protocol",
        odpd: "File Transport Program",
        prawidlowaodp: "C"
    },
    {
        idx: 127,
        tresc: "Co to jest 'VPN'?",
        odpa: "Virtual Private Network",
        odpb: "Virtual Personal Network",
        odpc: "Virtual Public Network",
        odpd: "Visual Private Network",
        prawidlowaodp: "A"
    },
    {
        idx: 128,
        tresc: "Które z poniższych jest narzędziem służącym do wirtualizacji?",
        odpa: "VMware",
        odpb: "Firefox",
        odpc: "Microsoft Word",
        odpd: "Adobe Photoshop",
        prawidlowaodp: "A"
    },
    {
        idx: 129,
        tresc: "Co to jest 'HTTPS'?",
        odpa: "Hypertext Transfer Protocol Server",
        odpb: "Hypertext Transfer Protocol Secure",
        odpc: "Hypertext Transfer Program Server",
        odpd: "Hypertext Transfer Program Secure",
        prawidlowaodp: "B"
    },
    {
        idx: 130,
        tresc: "Was bedeutet das Wort 'Haus' auf Deutsch?",
        odpa: "Auto",
        odpb: "Haus",
        odpc: "Schule",
        odpd: "Flugzeug",
        prawidlowaodp: "B"
    },
    {
        idx: 131,
        tresc: "Welche Zeitform ist das? 'Ich habe Deutsch gelernt.'",
        odpa: "Präsens",
        odpb: "Präteritum",
        odpc: "Perfekt",
        odpd: "Futur I",
        prawidlowaodp: "C"
    },
    {
        idx: 132,
        tresc: "Was bedeutet 'Guten Morgen' auf Englisch?",
        odpa: "Good morning",
        odpb: "Good evening",
        odpc: "Goodbye",
        odpd: "Good afternoon",
        prawidlowaodp: "A"
    },
    {
        idx: 133,
        tresc: "Was ist das Gegenteil von 'neu'?",
        odpa: "Alt",
        odpb: "Groß",
        odpc: "Klein",
        odpd: "Jung",
        prawidlowaodp: "A"
    },
    {
        idx: 134,
        tresc: "Wie sagt man 'bitte' auf Englisch?",
        odpa: "Hello",
        odpb: "Please",
        odpc: "Thank you",
        odpd: "Goodbye",
        prawidlowaodp: "B"
    },
    {
        idx: 135,
        tresc: "Was bedeutet das Wort 'Buch' auf Deutsch?",
        odpa: "Haus",
        odpb: "Auto",
        odpc: "Buch",
        odpd: "Schule",
        prawidlowaodp: "C"
    },
    {
        idx: 136,
        tresc: "Welche Zeitform ist das? 'Ich werde nach Deutschland reisen.'",
        odpa: "Präsens",
        odpb: "Präteritum",
        odpc: "Perfekt",
        odpd: "Futur I",
        prawidlowaodp: "D"
    },
    {
        idx: 137,
        tresc: "Was bedeutet 'Hund' auf Englisch?",
        odpa: "Cat",
        odpb: "Dog",
        odpc: "Bird",
        odpd: "Fish",
        prawidlowaodp: "B"
    },
    {
        idx: 138,
        tresc: "Was ist das Gegenteil von 'kalt'?",
        odpa: "Heiß",
        odpb: "Warm",
        odpc: "Kühl",
        odpd: "Eis",
        prawidlowaodp: "A"
    },
    {
        idx: 139,
        tresc: "Wie sagt man 'Tisch' auf Englisch?",
        odpa: "Table",
        odpb: "Tissue",
        odpc: "Tablet",
        odpd: "Port",
        prawidlowaodp: "A"
    },
    {
        idx: 140,
        tresc: "Was bedeutet das Wort 'Apfel' auf Englisch?",
        odpa: "Apartment",
        odpb: "Apple",
        odpc: "Dog",
        odpd: "Hand",
        prawidlowaodp: "B"
    },
    {
        idx: 141,
        tresc: "Welche Zeitform ist das? 'Ich habe Fußball gespielt.'",
        odpa: "Präsens",
        odpb: "Präteritum",
        odpc: "Perfekt",
        odpd: "Futur I",
        prawidlowaodp: "C"
    },
    {
        idx: 142,
        tresc: "Was bedeutet 'danke' auf Englisch?",
        odpa: "Hello",
        odpb: "Goodbye",
        odpc: "Thank you",
        odpd: "Sorry",
        prawidlowaodp: "C"
    },
    {
        idx: 143,
        tresc: "Was ist das Gegenteil von 'alt'?",
        odpa: "Groß",
        odpb: "Klein",
        odpc: "Alt",
        odpd: "Jung",
        prawidlowaodp: "D"
    },
    {
        idx: 144,
        tresc: "Was ist das Gegenteil von 'alt'?",
        odpa: "Groß",
        odpb: "Klein",
        odpc: "Alt",
        odpd: "Jung",
        prawidlowaodp: "D"
    },
    {
        idx: 145,
        tresc: "Które państwo jest największe pod względem powierzchni?",
        odpa: "Rosja",
        odpb: "Stany Zjednoczone",
        odpc: "Chiny",
        odpd: "Kanada",
        prawidlowaodp: "A"
    },
    {
        idx: 146,
        tresc: "Które miasto jest stolicą Francji?",
        odpa: "Berlin",
        odpb: "Madryt",
        odpc: "Paryż",
        odpd: "Rzym",
        prawidlowaodp: "C"
    },
    {
        idx: 147,
        tresc: "Gdzie znajduje się największy na świecie pustynny obszar piaszczysty?",
        odpa: "Sahara",
        odpb: "Atakama",
        odpc: "Gobi",
        odpd: "Arabia Saudyjska",
        prawidlowaodp: "A"
    },
    {
        idx: 148,
        tresc: "Który z następujących oceanów jest największy pod względem powierzchni?",
        odpa: "Ocean Atlantycki",
        odpb: "Ocean Spokojny",
        odpc: "Ocean Indyjski",
        odpd: "Ocean Arktyczny",
        prawidlowaodp: "B"
    },
    {
        idx: 149,
        tresc: "Które państwo leży na półwyspie Apenińskim?",
        odpa: "Hiszpania",
        odpb: "Grecja",
        odpc: "Włochy",
        odpd: "Portugalia",
        prawidlowaodp: "C"
    },
    {
        idx: 150,
        tresc: "Który z następujących krajów nie graniczy z Morzem Śródziemnym?",
        odpa: "Francja",
        odpb: "Włochy",
        odpc: "Grecja",
        odpd: "Szwecja",
        prawidlowaodp: "D"
    },
    {
        idx: 151,
        tresc: "Jaki jest najwyższy szczyt w Afryce?",
        odpa: "Mount Kilimanjaro",
        odpb: "Mount Everest",
        odpc: "Mont Blanc",
        odpd: "Mount McKinley",
        prawidlowaodp: "A"
    },
    {
        idx: 152,
        tresc: "Gdzie znajduje się Wielki Kanion?",
        odpa: "Kanada",
        odpb: "Australia",
        odpc: "USA",
        odpd: "Brazylia",
        prawidlowaodp: "C"
    },
    {
        idx: 153,
        tresc: "Jakie miasto jest najbardziej na południe w Afryce?",
        odpa: "Kapsztad",
        odpb: "Pretoria",
        odpc: "Durban",
        odpd: "Johannesburg",
        prawidlowaodp: "A"
    },
    {
        idx: 154,
        tresc: "Jak nazywa się największe jezioro w Afryce?",
        odpa: "Jezioro Wiktorii",
        odpb: "Jezioro Tanganika",
        odpc: "Jezioro Malawi",
        odpd: "Jezioro Chad",
        prawidlowaodp: "A"
    },
    {
        idx: 155,
        tresc: "Gdzie znajduje się największa na świecie pustynia?",
        odpa: "Sahara",
        odpb: "Atakama",
        odpc: "Gobi",
        odpd: "Antarktyda",
        prawidlowaodp: "A"
    },
    {
        idx: 156,
        tresc: "Które z poniższych państw leży w Ameryce Południowej?",
        odpa: "Australia",
        odpb: "Egipt",
        odpc: "Brazylia",
        odpd: "Indonezja",
        prawidlowaodp: "C"
    },
    {
        idx: 157,
        tresc: "Jakie miasto jest stolicą Rosji?",
        odpa: "Sankt Petersburg",
        odpb: "Moskwa",
        odpc: "Kijów",
        odpd: "Warszawa",
        prawidlowaodp: "B"
    },
    {
        idx: 158,
        tresc: "Który z poniższych kontynentów jest najmniejszy pod względem powierzchni?",
        odpa: "Afryka",
        odpb: "Ameryka Północna",
        odpc: "Europa",
        odpd: "Australia",
        prawidlowaodp: "D"
    },
    {
        idx: 159,
        tresc: "Gdzie znajduje się największa wyspa na świecie?",
        odpa: "Madagaskar",
        odpb: "Wielka Brytania",
        odpc: "Nowa Gwinea",
        odpd: "Grenlandia",
        prawidlowaodp: "D"
    },
    {
        idx: 160,
        tresc: "Które miasto jest stolicą Japonii?",
        odpa: "Tokio",
        odpb: "Kioto",
        odpc: "Osaka",
        odpd: "Hiroshima",
        prawidlowaodp: "A"
    },
    {
        idx: 161,
        tresc: "Gdzie znajduje się Wielka Rafa Koralowa?",
        odpa: "Morze Czerwone",
        odpb: "Ocean Spokojny",
        odpc: "Morze Karaibskie",
        odpd: "Ocean Indyjski",
        prawidlowaodp: "B"
    },
    {
        idx: 162,
        tresc: "Które państwo leży na Półwyspie Apenińskim?",
        odpa: "Hiszpania",
        odpb: "Grecja",
        odpc: "Watykan",
        odpd: "Portugalia",
        prawidlowaodp: "C"
    },
    {
        idx: 163,
        tresc: "Które miasto leży na brzegu rzeki Amazonki?",
        odpa: "Bogota",
        odpb: "Rio de Janeiro",
        odpc: "Lima",
        odpd: "Manaus",
        prawidlowaodp: "D"
    },
    {
        idx: 164,
        tresc: "W którym kraju znajduje się Wielki Kanion Kolorado?",
        odpa: "USA",
        odpb: "Kanada",
        odpc: "Meksyk",
        odpd: "Australia",
        prawidlowaodp: "A"
    },
    {
        idx: 165,
        tresc: "Które państwo jest najmniejszym krajem świata pod względem powierzchni?",
        odpa: "Monako",
        odpb: "Watykan",
        odpc: "Nauru",
        odpd: "San Marino",
        prawidlowaodp: "B"
    },
    {
        idx: 166,
        tresc: "Na jakiej wyspie znajduje się Tajlandia?",
        odpa: "Sumatra",
        odpb: "Borneo",
        odpc: "Celebes",
        odpd: "Phuket",
        prawidlowaodp: "D"
    },
    {
        idx: 167,
        tresc: "Które miasto jest stolicą Kanady?",
        odpa: "Montreal",
        odpb: "Toronto",
        odpc: "Ottawa",
        odpd: "Vancouver",
        prawidlowaodp: "C"
    },
    {
        idx: 168,
        tresc: "Które miasto jest stolicą Australii?",
        odpa: "Sydney",
        odpb: "Melbourne",
        odpc: "Brisbane",
        odpd: "Canberra",
        prawidlowaodp: "D"
    },
    {
        idx: 169,
        tresc: "Gdzie znajduje się Pustynia Atacama?",
        odpa: "Afryka",
        odpb: "Ameryka Południowa",
        odpc: "Australia",
        odpd: "Azja",
        prawidlowaodp: "B"
    },
    {
        idx: 170,
        tresc: "Które miasto jest stolicą Szwajcarii?",
        odpa: "Zurych",
        odpb: "Bern",
        odpc: "Genewa",
        odpd: "Lozanna",
        prawidlowaodp: "B"
    },
    {
        idx: 171,
        tresc: "Który z poniższych kontynentów jest największy pod względem powierzchni?",
        odpa: "Europa",
        odpb: "Ameryka Północna",
        odpc: "Afryka",
        odpd: "Azja",
        prawidlowaodp: "D"
    },
    {
        idx: 172,
        tresc: "Gdzie znajduje się Wielkie Jezioro Słone?",
        odpa: "Afryka",
        odpb: "Ameryka Południowa",
        odpc: "Azja",
        odpd: "Australia",
        prawidlowaodp: "A"
    },
    {
        idx: 173,
        tresc: "Który z poniższych krajów nie graniczy z Morzem Śródziemnym?",
        odpa: "Grecja",
        odpb: "Hiszpania",
        odpc: "Bułgaria",
        odpd: "Włochy",
        prawidlowaodp: "C"
    },
    {
        idx: 174,
        tresc: "W którym kraju znajduje się najwyższy szczyt w Afryce, Kilimandżaro?",
        odpa: "Kenia",
        odpb: "Tanzania",
        odpc: "Uganda",
        odpd: "Etiopia",
        prawidlowaodp: "B"
    },
    {
        idx: 175,
        tresc: "Jak nazywa się najlżejszy pierwiastek chemiczny?",
        odpa: "Wodór",
        odpb: "Hel",
        odpc: "Azot",
        odpd: "Tlen",
        prawidlowaodp: "A"
    },
    {
        idx: 176,
        tresc: "Co oznacza skrót 'NaCl' w chemii?",
        odpa: "Woda",
        odpb: "Chlorek sodu",
        odpc: "Azotan potasu",
        odpd: "Węglan wapnia",
        prawidlowaodp: "B"
    },
    {
        idx: 177,
        tresc: "Jaka jest liczba atomowa węgla?",
        odpa: "6",
        odpb: "7",
        odpc: "8",
        odpd: "9",
        prawidlowaodp: "A"
    },
    {
        idx: 178,
        tresc: "Jakie są podstawowe składniki chemiczne wody?",
        odpa: "Tlen i wodór",
        odpb: "Azot i tlen",
        odpc: "Azot i węgiel",
        odpd: "Tlen i węgiel",
        prawidlowaodp: "A"
    },
    {
        idx: 179,
        tresc: "Jaki gaz jest najbardziej obfity w atmosferze Ziemi?",
        odpa: "Azot",
        odpb: "Tlen",
        odpc: "Wodór",
        odpd: "Argon",
        prawidlowaodp: "A"
    },
    {
        idx: 180,
        tresc: "Jak nazywa się proces przemiany ciekłej wody w parę wodną?",
        odpa: "Sublimacja",
        odpb: "Kondensacja",
        odpc: "Egzotermiczny",
        odpd: "Ewaporacja",
        prawidlowaodp: "D"
    },
    {
        idx: 181,
        tresc: "Ile atomów tlenu zawiera cząsteczka ozonu (O3)?",
        odpa: "1",
        odpb: "2",
        odpc: "3",
        odpd: "4",
        prawidlowaodp: "C"
    },
    {
        idx: 182,
        tresc: "Jak nazywa się związek chemiczny złożony z atomów dwóch różnych pierwiastków?",
        odpa: "Molekuła",
        odpb: "Związek kowalencyjny",
        odpc: "Związek jonowy",
        odpd: "Związek nieorganiczny",
        prawidlowaodp: "B"
    },
    {
        idx: 183,
        tresc: "Co to jest pH?",
        odpa: "Stężenie jonów wodorowych",
        odpb: "Stężenie jonów hydroksylowych",
        odpc: "Stężenie jonów amonowych",
        odpd: "Stężenie jonów chlorowych",
        prawidlowaodp: "A"
    },
    {
        idx: 184,
        tresc: "Jak nazywa się substancja, która zmniejsza szybkość reakcji chemicznej?",
        odpa: "Katalizator",
        odpb: "Produkt",
        odpc: "Reaktant",
        odpd: "Woda",
        prawidlowaodp: "A"
    },
    {
        idx: 185,
        tresc: "Jakie są trzy składniki podstawowe węglowodanów?",
        odpa: "Węgiel, tlen, azot",
        odpb: "Węgiel, wodór, tlen",
        odpc: "Azot, wodór, tlen",
        odpd: "Węgiel, wapń, magnez",
        prawidlowaodp: "B"
    },
    {
        idx: 186,
        tresc: "Co oznacza skrót 'CO2' w chemii?",
        odpa: "Tlenek węgla",
        odpb: "Tlenek azotu",
        odpc: "Tlenek żelaza",
        odpd: "Tlenek sodu",
        prawidlowaodp: "A"
    },
    {
        idx: 187,
        tresc: "Jaka jest nazwa procesu, w którym dwie lub więcej substancji łączą się, aby utworzyć nową substancję?",
        odpa: "Filtracja",
        odpb: "Sublimacja",
        odpc: "Synteza",
        odpd: "Destylacja",
        prawidlowaodp: "C"
    },
    {
        idx: 188,
        tresc: "Który pierwiastek chemiczny ma największą liczbę atomową?",
        odpa: "Węgiel",
        odpb: "Tlen",
        odpc: "Azot",
        odpd: "Uran",
        prawidlowaodp: "D"
    },
    {
        idx: 189,
        tresc: "Jak nazywa się proces, w którym gaz lub ciecz przekształca się w stały składnik?",
        odpa: "Sublimacja",
        odpb: "Kondensacja",
        odpc: "Egzotermiczny",
        odpd: "Destylacja",
        prawidlowaodp: "B"
    },
    {
        idx: 190,
        tresc: "Która reakcja chemiczna charakteryzuje się wymianą jonów między związkami chemicznymi?",
        odpa: "Reakcja syntezy",
        odpb: "Reakcja rozkładu",
        odpc: "Reakcja wymiany",
        odpd: "Reakcja egzotermiczna",
        prawidlowaodp: "C"
    },
    {
        idx: 191,
        tresc: "Jakie są składniki główne chlorofilu?",
        odpa: "Magnez i chlor",
        odpb: "Fosfor i azot",
        odpc: "Węgiel i wodór",
        odpd: "Wapń i potas",
        prawidlowaodp: "A"
    },
    {
        idx: 192,
        tresc: "Jaka jest nazwa jednostki podstawowej struktury związku chemicznego?",
        odpa: "Molekuła",
        odpb: "Atom",
        odpc: "Kation",
        odpd: "Anion",
        prawidlowaodp: "A"
    },
    {
        idx: 193,
        tresc: "Ile protonów zawiera atom wodoru?",
        odpa: "0",
        odpb: "1",
        odpc: "2",
        odpd: "3",
        prawidlowaodp: "B"
    },
    {
        idx: 194,
        tresc: "Jaka jest nazwa reakcji chemicznej, w której zachodzi wymiana miejsc grupy jonowej z innym atomem?",
        odpa: "Reakcja podwójnej zamiany",
        odpb: "Reakcja substytucji",
        odpc: "Reakcja addycji",
        odpd: "Reakcja dehydratacji",
        prawidlowaodp: "B"
    },
    {
        idx: 195,
        tresc: "Jak nazywa się proces, w którym materia ulega zmianie składu chemicznego i tworzą się nowe substancje?",
        odpa: "Proces fizyczny",
        odpb: "Proces chemiczny",
        odpc: "Proces egzotermiczny",
        odpd: "Proces endotermiczny",
        prawidlowaodp: "B"
    },
    {
        idx: 196,
        tresc: "Jaki pierwiastek jest najbardziej obfity w skorupie ziemi?",
        odpa: "Tlen",
        odpb: "Azot",
        odpc: "Węgiel",
        odpd: "Wodór",
        prawidlowaodp: "A"
    },
    {
        idx: 197,
        tresc: "Co oznacza symbol chemiczny 'Fe'?",
        odpa: "Wapń",
        odpb: "Żelazo",
        odpc: "Miedź",
        odpd: "Fluor",
        prawidlowaodp: "B"
    },
    {
        idx: 198,
        tresc: "Jaki gaz jest głównym składnikiem atmosfery Ziemi?",
        odpa: "Azot",
        odpb: "Tlen",
        odpc: "Argon",
        odpd: "Dwutlenek węgla",
        prawidlowaodp: "A"
    }
];
