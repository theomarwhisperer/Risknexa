// =========================================================
// RISKNEXA WEBSITE JAVASCRIPT
// =========================================================


// =========================================================
// 1. WEBSITE TRANSLATIONS
// =========================================================

const translations = {

    // =====================================================
    // ENGLISH
    // =====================================================

    en: {

        navAbout: "About",

        navServices: "Services",

        navMethod: "Methodology",

        navInsights: "Insights",

        navContact: "Contact",

        contactBtn: "Contact Us",

        eyebrow:
            "RISK ANALYSIS & ECONOMIC ADVISORY",

        heroTitle:
            'Turn uncertainty into <span>strategic clarity.</span>',

        heroText:
            "RiskNexa combines economic analysis, market intelligence and structured risk assessment to help organizations understand what could change, why it matters, and how to respond.",

        explore:
            "Explore Our Services →",

        how:
            "How We Work",

        countries:
            "Countries & markets",

        experience:
            "Years of expertise",

        organizations:
            "Organizations supported",

        indicators:
            "Risk indicators",

        aboutTag:
            "ABOUT RISKNEXA",

        aboutTitle:
            "Better decisions start with better intelligence.",

        aboutText:
            "We translate complex economic, market and geopolitical signals into practical intelligence for leaders navigating uncertainty, investment decisions and strategic change.",

        servicesTitle:
            "Advisory built around the risks that matter.",

        risk:
            "Risk Analysis",

        riskText:
            "Identify, assess and prioritize financial, operational and country risks.",

        econ:
            "Economic Advisory",

        econText:
            "Convert macroeconomic trends into actionable strategic insight.",

        market:
            "Market Intelligence",

        marketText:
            "Track markets, competitors, sectors and emerging opportunities.",

        geo:
            "Geopolitical Risk",

        geoText:
            "Understand political, social and regulatory developments worldwide.",

        strategy:
            "Strategic Advisory",

        strategyText:
            "Build resilient strategies for growth, investment and change.",

        sector:
            "Sector Intelligence",

        sectorText:
            "Focused intelligence for finance, energy, technology and other sectors.",

        methodTitle:
            "From signals to decisions.",

        step1:
            "Identify",

        step1t:
            "Map the forces, exposures and assumptions shaping the situation.",

        step2:
            "Assess",

        step2t:
            "Evaluate probability, impact, scenarios and leading indicators.",

        step3:
            "Advise",

        step3t:
            "Turn analysis into clear options, priorities and actions.",

        step4:
            "Monitor",

        step4t:
            "Track changes and update the outlook as conditions evolve.",

        insightTitle:
            "Ideas for a changing world.",

        contactTitle:
            "Let's make uncertainty actionable.",

        contactText:
            "Tell us what decision, market or risk you are evaluating."

    },


    // =====================================================
    // ARABIC
    // =====================================================

    ar: {

        navAbout:
            "من نحن",

        navServices:
            "خدماتنا",

        navMethod:
            "منهجيتنا",

        navInsights:
            "رؤى",

        navContact:
            "اتصل بنا",

        contactBtn:
            "اتصل بنا",

        eyebrow:
            "تحليل المخاطر والاستشارات الاقتصادية",

        heroTitle:
            'حوّل عدم اليقين إلى <span>وضوح استراتيجي.</span>',

        heroText:
            "تجمع RiskNexa بين التحليل الاقتصادي وذكاء الأسواق والتقييم المنهجي للمخاطر لمساعدة المؤسسات على فهم ما قد يتغير ولماذا يهم وكيفية الاستجابة.",

        explore:
            "استكشف خدماتنا ←",

        how:
            "كيف نعمل",

        countries:
            "دولة وسوق",

        experience:
            "سنوات من الخبرة",

        organizations:
            "مؤسسة مدعومة",

        indicators:
            "مؤشر مخاطر",

        aboutTag:
            "عن RISKNEXA",

        aboutTitle:
            "القرارات الأفضل تبدأ بذكاء أفضل.",

        aboutText:
            "نحوّل الإشارات الاقتصادية والسوقية والجيوسياسية المعقدة إلى معلومات عملية تساعد القادة في التعامل مع عدم اليقين والاستثمار والتغيير الاستراتيجي.",

        servicesTitle:
            "استشارات تركز على المخاطر التي تهم.",

        risk:
            "تحليل المخاطر",

        riskText:
            "تحديد وتقييم وترتيب المخاطر المالية والتشغيلية ومخاطر الدول.",

        econ:
            "الاستشارات الاقتصادية",

        econText:
            "تحويل اتجاهات الاقتصاد الكلي إلى رؤى استراتيجية قابلة للتنفيذ.",

        market:
            "ذكاء الأسواق",

        marketText:
            "متابعة الأسواق والمنافسين والقطاعات والفرص الناشئة.",

        geo:
            "المخاطر الجيوسياسية",

        geoText:
            "فهم التطورات السياسية والاجتماعية والتنظيمية حول العالم.",

        strategy:
            "الاستشارات الاستراتيجية",

        strategyText:
            "بناء استراتيجيات مرنة للنمو والاستثمار والتغيير.",

        sector:
            "ذكاء القطاعات",

        sectorText:
            "معلومات متخصصة للتمويل والطاقة والتكنولوجيا وغيرها.",

        methodTitle:
            "من الإشارات إلى القرارات.",

        step1:
            "تحديد",

        step1t:
            "رسم القوى ومصادر التعرض والافتراضات المؤثرة.",

        step2:
            "تقييم",

        step2t:
            "تقييم الاحتمالات والتأثير والسيناريوهات والمؤشرات المبكرة.",

        step3:
            "استشارة",

        step3t:
            "تحويل التحليل إلى خيارات وأولويات وإجراءات واضحة.",

        step4:
            "مراقبة",

        step4t:
            "متابعة التغيرات وتحديث التوقعات مع تطور الظروف.",

        insightTitle:
            "أفكار لعالم متغير.",

        contactTitle:
            "لنجعل عدم اليقين قابلاً للتنفيذ.",

        contactText:
            "أخبرنا بالقرار أو السوق أو المخاطر التي تقيّمها."

    },


    // =====================================================
    // SPANISH
    // =====================================================

    es: {

        navAbout:
            "Nosotros",

        navServices:
            "Servicios",

        navMethod:
            "Metodología",

        navInsights:
            "Perspectivas",

        navContact:
            "Contacto",

        contactBtn:
            "Contáctanos",

        eyebrow:
            "ANÁLISIS DE RIESGOS Y ASESORÍA ECONÓMICA",

        heroTitle:
            'Convierte la incertidumbre en <span>claridad estratégica.</span>',

        heroText:
            "RiskNexa combina análisis económico, inteligencia de mercado y evaluación estructurada de riesgos para ayudar a las organizaciones a entender qué puede cambiar, por qué importa y cómo responder.",

        explore:
            "Explorar servicios →",

        how:
            "Cómo trabajamos",

        countries:
            "Países y mercados",

        experience:
            "Años de experiencia",

        organizations:
            "Organizaciones apoyadas",

        indicators:
            "Indicadores de riesgo",

        aboutTag:
            "SOBRE RISKNEXA",

        aboutTitle:
            "Las mejores decisiones comienzan con mejor inteligencia.",

        aboutText:
            "Convertimos señales económicas, de mercado y geopolíticas complejas en inteligencia práctica para líderes que afrontan incertidumbre, inversión y cambio estratégico.",

        servicesTitle:
            "Asesoría centrada en los riesgos que importan.",

        risk:
            "Análisis de Riesgos",

        riskText:
            "Identificar, evaluar y priorizar riesgos financieros, operativos y de país.",

        econ:
            "Asesoría Económica",

        econText:
            "Convertir tendencias macroeconómicas en información estratégica accionable.",

        market:
            "Inteligencia de Mercado",

        marketText:
            "Seguir mercados, competidores, sectores y oportunidades emergentes.",

        geo:
            "Riesgo Geopolítico",

        geoText:
            "Comprender la evolución política, social y regulatoria a escala mundial.",

        strategy:
            "Asesoría Estratégica",

        strategyText:
            "Crear estrategias resilientes para crecimiento, inversión y cambio.",

        sector:
            "Inteligencia Sectorial",

        sectorText:
            "Inteligencia especializada para finanzas, energía, tecnología y otros sectores.",

        methodTitle:
            "De las señales a las decisiones.",

        step1:
            "Identificar",

        step1t:
            "Mapear fuerzas, exposiciones y supuestos que condicionan la situación.",

        step2:
            "Evaluar",

        step2t:
            "Evaluar probabilidad, impacto, escenarios e indicadores adelantados.",

        step3:
            "Asesorar",

        step3t:
            "Convertir el análisis en opciones, prioridades y acciones claras.",

        step4:
            "Monitorizar",

        step4t:
            "Seguir cambios y actualizar las perspectivas a medida que evolucionan.",

        insightTitle:
            "Ideas para un mundo cambiante.",

        contactTitle:
            "Hagamos accionable la incertidumbre.",

        contactText:
            "Cuéntanos qué decisión, mercado o riesgo estás evaluando."

    }

};


// =========================================================
// 2. CHANGE WEBSITE LANGUAGE
// =========================================================

function setLanguage(lang) {

    /*
       Get the selected language.

       If something goes wrong,
       English will be used.
    */

    const language =
        translations[lang]
            ? lang
            : "en";


    const translation =
        translations[language];


    /*
       Change HTML language.
    */

    document.documentElement.lang =
        language;


    /*
       Arabic uses Right-To-Left layout.
    */

    if (language === "ar") {

        document.documentElement.dir =
            "rtl";

    } else {

        document.documentElement.dir =
            "ltr";

    }


    /*
       Find every element containing
       a data-i18n attribute.
    */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.dataset.i18n;


            /*
               Replace its text with
               the translated version.
            */

            if (translation[key]) {

                element.innerHTML =
                    translation[key];

            }

        });


    /*
       Remember the selected language
       in the visitor's browser.
    */

    localStorage.setItem(
        "risknexaLanguage",
        language
    );

}


// =========================================================
// 3. LANGUAGE SELECTOR
// =========================================================

const languageSelector =
    document.getElementById("language");


if (languageSelector) {

    languageSelector.addEventListener(
        "change",
        function (event) {

            setLanguage(
                event.target.value
            );

        }
    );

}


// =========================================================
// 4. LOAD SAVED LANGUAGE
// =========================================================

const savedLanguage =
    localStorage.getItem(
        "risknexaLanguage"
    ) || "en";


if (languageSelector) {

    languageSelector.value =
        savedLanguage;

}


setLanguage(savedLanguage);


// =========================================================
// 5. MOBILE MENU
// =========================================================

const menuButton =
    document.getElementById("menu");

const navigation =
    document.getElementById("nav");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "open"
            );

        }
    );


    /*
       Close the mobile menu after
       clicking a navigation link.
    */

    navigation
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "open"
                    );

                }
            );

        });

}
