angular.module('swissPlant', ['pascalprecht.translate'])
    .config(function ($translateProvider) {
        $translateProvider.translations('de', {
            meta_title_name: "SwissPlant GmbH",
            meta_title_slogan: "Ihr Spezialist für Gemüsejungpflanzen",
            meta_description: "Die Swissplant GmbH ist Ihr Ansprechpartner für professionellen Gemüseanbau im Berner Seeland. Bei uns bekommen Sie Warmhauspflanzen in verschiedenen Varianten.",
            meta_keywords: "Gemüse, Gemuese, Jungpflanzen, Setzlinge, Salat, Schweiz, Seeland, SwissPlant",
            nav_about: "Über uns",
            nav_portfolio: "Angebot",
            nav_partners: "Partner",
            nav_contact: "Kontakt",
            nav_start: "Start",
            about_heading: "Wer wir sind",
            about_copy: "Die Firma SwissPlant GmbH ist Verkaufsstelle für Gemüsejungpflanzen der Firmen AgriPlant AG Schweiz und Gipmans Holland.",
            about_detail_copy_p1: "Den Anfang nehmen all diese Gemüse und Salate als Jungpflanzen, die von der Firma AgriPlant AG in Müntschemier angezogen werden.",
            about_detail_copy_p2: 'Geschäftsführer unserer Firmen Martin Löffel, fasst den Weg der Keimlinge bis hin zu ausgewachsenen Pflanzen so zusammen: "Wir stehen als Zulieferbetrieb der Gemüsebaubetriebe am Anfang der Produktionskette und kultivieren die Jungpflanzen, die anschliessend von den Gemüsegärtnern gepflanzt werden."',
            about_detail_copy_p3: "Die Handelsfirma SwissPlant GmbH, bietet Ihnen Gemüsejungpflanzen in allen möglichen Variationen und Grössen an. Durch unsere jahrelange Erfahrung im Gemüsebau können wir Ihnen eine kompetente und fachspezifische Beratung für unsere klimatischen Bedingungen garantieren.",
            about_detail_copy_p4: "Unser Sortiment ist eine Zusammenstellung aus verschiedenen Züchtungsprogrammen der weltweit tätigen Anbieter von Hochleistungssaatgut.",
            about_detail_copy_p5: "Zu unseren Zulieferfirmen im Bereich Saatgut gehören: Bejo, Enza, Rijk Zwaan, Hild, Syngenta und Sakata.",
            about_detail_copy_p6: "Unsere Anzuchterde beziehen wir bei den Firmen Floragard und Klasmann.",
            portfolio_heading: "Was wir Ihnen bieten",
            portfolio_copy: "Unser Produktionsstandort der Firma AgriPlant AG befindet sich im Berner Seeland. Die zentrale Lage der Firma bietet uns die Möglichkeit Sie schnell und kompetent zu beliefern.",
            portfolio_detail_copy_table_1x1: "3cm-Topf",
            portfolio_detail_copy_table_1x2: "Buntsalate und Sellerie",
            portfolio_detail_copy_table_2x1: "4cm-Einzeltopf",
            portfolio_detail_copy_table_2x2: "Buntsalate, Kohlarten und Sellerie",
            portfolio_detail_copy_table_3x1: "4cm-Riegeltopf",
            portfolio_detail_copy_table_3x2: "Buntsalate, Kohlarten und Sellerie",
            portfolio_detail_copy_table_4x1: "6cm-Erdtopf",
            portfolio_detail_copy_table_4x2: "Zucchini",
            portfolio_detail_copy_table_5x1: "8cm-Erdtopf",
            portfolio_detail_copy_table_5x2: "Tomaten, Gurken und Zucchini für den Hobbybereich",
            portfolio_detail_copy_table_6x1: "Superseeding",
            portfolio_detail_copy_table_6x2: "Lauch und Fenchel",
            portfolio_detail_copy_table_7x1: "G195",
            portfolio_detail_copy_table_7x2: "Kohlarten und Sellerie",
            portfolio_detail_copy_table_8x1: "G280",
            portfolio_detail_copy_table_8x2: "Kohlarten und Sellerie",
            portfolio_detail_copy_p1: "Wir bieten Ihnen Warmhauspflanzen in verschiedenen Varianten an. Beispielsweise veredelte und unveredelte Pflanzen oder Pflanzen in Steinwolle oder Erde. Über unser reichhaltiges Jungpflanzensortiment informieren wir Sie gerne. Für kundenspezifische Auskünfte oder Fragen steht Ihnen unser Verkaufspersonal jederzeit zur Verfügung.",
            partners_heading: "Mit wem wir arbeiten",
            partners_copy: "Die Firma Gipmans aus Holland beliefert uns als Sortimentsergänzung mit Warmhaus- und Speedypflanzen.",
            partners_detail_header_h1: "AgriPlant AG",
            partners_detail_header_h2: "Gipmans Holland",
            partners_detail_copy_p1: 'Durch unseren ortsansässigen Produktionsbetrieb wachsen unsere Jungpflanzen im selben "Haus", wo sie anschliessend weiter kultiviert werden. Dank der individuellen Ausliefertage und den kurzen Transportdistanzen zum Kunden, können wir Ihnen stressfreie Pflanzen anbieten.',
            partners_detail_copy_p2: "Um alle Wünsche und Bedürfnisse der Kundschaft zu erfüllen, stehen verschiedene Kulturräume zur Verfügung. Der Betrieb ist in der Lage Jungpflanzen von Auberginen bis Zwiebeln bestens zu kultivieren. Die Gewächshäuser entsprechen den neusten technischen Erkenntnissen im Gewächshausbau. Freilandflächen und Cabrio-Häuser zum Abhärten der Pflanzen garantieren optimale Startbedingungen nach dem Pflanzen.",
            partners_detail_copy_p3: "Bei der Firma Gipmans in Holland lassen wir unsere Speedy- und Warmhauspflanzen aussäen. Traypflanzen werden halbfertig bezogen, um sie anschliessend bei uns fertig zu kultivieren.",
            partners_detail_copy_p4: "Warmhauspflanzen werden fertig zu uns geliefert und durch unsere eigene Betriebsspedition direkt zum Kunden geliefert.",
            partners_detail_copy_p5: "Die Firma Gipmans steht für eine marktorientiertes Wissen und Können. Gemeinsame Wissensentwicklungen und Innovationen führen nicht nur zu einem besseren Ertrag, sondern tragen auch dazu bei, dass wir uns weitaus besser auf Ihre jeweils spezifische Marktsituation und die gewünschte Qualität einstellen können.",
            contact_heading: "Wie Sie uns erreichen",
            contact_copy: "Wir stehen natürlich gerne für allfällige Informationen und Ratschläge zur Verfügung. Egal, ob E-Mail, Telefon oder vor Ort.",
            contact_detail_header_h1: "Von Bern her",
            contact_detail_header_h2: "Von Neuchâtel her",
            contact_detail_header_h3: "Karte",
            contact_detail_copy_p1: "Autobahn Bern – Neuenburg Ausfahrt Kerzers anschliessend Richtung Neuenburg. In Müntschemier Richtung Bahnhof. Firmenwegweiser beachten.",
            contact_detail_copy_p2: "Richtung Ins – Müntschemier anschliessend in Müntschemier Richtung Bahnhof. Firmenwegweiser beachten.",
            common_button_more: "Mehr erfahren",
            common_logo_alt: "Logo der SwissPlant GmbH",
            footer_address: "Spitzallmendweg 11, CH-3225 Müntschemier",
            footer_mailbox: "Postfach 11 (SwissPlant GmbH) / Postfach 5 (Agriplant AG)",
            footer_mo_fr: "Montag bis Freitag",
            footer_to: "bis",
            footer_robin: "Entwickelt und gestaltet von ",
            footer_copyright: "SwissPlant GmbH und AgriPlant AG"
        });

        $translateProvider.translations('en', {
            meta_title_name: "SwissPlant Ltd",
            meta_title_slogan: "Your specialist for vegetable seedings",
            meta_description: "SwissPlant is your go-to specialist for the professional cultivation of vegetables in the Bernese Seeland. We offer warm house plants in many variations.",
            meta_keywords: "vegetables, seeds, seedings, salad, swiss, switzerland, seeland, swissplant",
            nav_about: "About us",
            nav_portfolio: "Portfolio",
            nav_partners: "Partners",
            nav_contact: "Contact",
            nav_start: "Start",
            about_heading: "Who we are",
            about_copy: "SwissPlant is the official point of selling of seedings and saplings from AgriPlant Switzerland and Gipmans Netherlands.",
            about_detail_copy_p1: "In the beginning, all these vegetables and salands are seedings, which come directly from AgriPlant here in Müntschemier.",
            about_detail_copy_p2: 'CEO and founder of both of our companies, SwissPlant Ltd. and AgriPlant Corp., is Martin Löffel. He summarizes the process from the seedings growing to plants like this: "We grow the seedings and then supply the cultivation firms with saplings. These then get planted out in the fields."',
            about_detail_copy_p3: "The tranding company (SwissPlant) offers vegetables in all possible variations and sizes. Through years of experience, whe can guarantee competent and specific consultings for our climatic circumstances.",
            about_detail_copy_p4: "Our product line is based around products of different breeding programs from worldwide leading companies.",
            about_detail_copy_p5: "Our suppliers are Bejo, Enza, Rijk Zwaan, Hild, Syngenta and Sakata.",
            about_detail_copy_p6: "We obtain the soild we're using from Floragard and Klasmann.",
            portfolio_heading: "What we offer",
            portfolio_copy: "Our production site (AgriPlant) is placed in the Bernese Seeland. Our central location makes it possible for us to deliver as fast and as competent as possible.",
            portfolio_detail_copy_table_1x1: "3cm pot",
            portfolio_detail_copy_table_1x2: "Salads and celery",
            portfolio_detail_copy_table_2x1: "4cm single pot",
            portfolio_detail_copy_table_2x2: "Salads, cabbages and celery",
            portfolio_detail_copy_table_3x1: "4cm pot",
            portfolio_detail_copy_table_3x2: "Salads, cabbages and celery",
            portfolio_detail_copy_table_4x1: "6cm soil pot",
            portfolio_detail_copy_table_4x2: "Zucchini",
            portfolio_detail_copy_table_5x1: "8cm soil pot",
            portfolio_detail_copy_table_5x2: "Tomatoes, cucumbers and zucchini for hobbyists",
            portfolio_detail_copy_table_6x1: "Superseeding",
            portfolio_detail_copy_table_6x2: "Leek and fennel",
            portfolio_detail_copy_table_7x1: "G195",
            portfolio_detail_copy_table_7x2: "Cabbages and celery",
            portfolio_detail_copy_table_8x1: "G280",
            portfolio_detail_copy_table_8x2: "Cabbages and celery",
            portfolio_detail_copy_p1: "We offer warm house plants in various variants. For example refined or unrefined plants or plants in mineral wool or soil. If you need any client-specific information or have questions, our personnel would be happy to help.",
            partners_heading: "Who we work with",
            partners_copy: "Gipmans Netherlands provides us with warm house and speedy plants as an addition to our existing product line.",
            partners_detail_header_h1: "AgriPlant Corp.",
            partners_detail_header_h2: "Gipmans Netherlands",
            partners_detail_copy_p1: 'Since we produce where we sell, all our saplings grow up in the same "house" as they will be cultivated in. Thanks to the individual delivery days and short transportation distances to our clients, we can offer stress-free plants.',
            partners_detail_copy_p2: "To make every wish of our clients come true, there are several different cultivation areas in our house. From a like aspargus to z like zucchini, we're able to cultivate saplings in the best quality. Our growing houses are updated with the latest technical improvements, and free field areas as well as convertible roof houses allow us to harden the plants before delivering them to you.",
            partners_detail_copy_p3: "At Gipmans in the Netherlands, we seed our speedy and warm house saplings. Tray plants are obtained half-finished, so we can then cultivate them in our own house.",
            partners_detail_copy_p4: "The warm house plants are delivered to us already finished. They get delivered to our clients through our transportation units.",
            partners_detail_copy_p5: "Gipmans stands for market-oriented knowledge and know-how. Joint knowledge improvements and innovations lead not only to a greater gain, but let us also help us adapt to your specific market situation and desired quality.",
            contact_heading: "How to contact us",
            contact_copy: "Of course we stand by your side if you need more information or want some tips and tricks.",
            contact_detail_header_h1: "Coming from Bern",
            contact_detail_header_h2: "Coming from Neuchâtel",
            contact_detail_header_h3: "Map",
            contact_detail_copy_p1: "Freeway Bern – Neuchâtel, take the exit to Kerzers and then towards Neuchâtel. In Müntschemier, go in the direction of the train station. Once you're there, take a left and you should see us.",
            contact_detail_copy_p2: "Go towards Ins. After Ins, keep that direction. In Müntschemier, go in the direction of the train station. Once you're there, take a left and you should see us.",
            common_button_more: "Find out more",
            common_logo_alt: "Logo of SwissPlant Ltd.",
            footer_address: "Spitzallmendweg 11, CH-3225 Müntschemier",
            footer_mailbox: "Mailbox 11 (SwissPlant GmbH) / Mailbox 5 (Agriplant AG)",
            footer_mo_fr: "Monday to Friday",
            footer_to: "to",
            footer_robin: "Developed and designed by ",
            footer_copyright: "SwissPlant Ltd. and AgriPlant Corp."
        });

        $translateProvider.useSanitizeValueStrategy('escape');
    })
    .controller('langCtrl', function ($scope, $translate) {
        determineLang();

        function determineLang() {
            if (!localStorage.swissPlantLang) {
                var userLang = navigator.language;
                if (userLang.indexOf('de') > -1) {
                    $translate.use('de');
                    localStorage.swissPlantLang = 'de';
                } else if (userLang.indexOf('fr') > -1) {
                    $translate.use('fr');
                    localStorage.swissPlantLang = 'fr'
                } else if (userLang.indexOf('en') > -1) {
                    $translate.use('en');
                    localStorage.swissPlantLang = 'en'
                }
            } else {
                $translate.use(localStorage.swissPlantLang);
            }
        }

        $scope.changeLang = function (langKey) {
            $translate.use(langKey);
            localStorage.swissPlantLang = langKey;
        }
    });
