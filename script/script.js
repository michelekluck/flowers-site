function openModal(flor) {
    var title = document.getElementById("title");
    var text = document.getElementById("text");

    switch (flor) {
        case "tulipa":
            title.innerHTML = "Tulipa";
            text.innerHTML = "A tulipa (Tulipa) é nativa da Ásia Central e se popularizou na Europa, especialmente na Holanda, no século XVII. Ela prefere climas temperados, com invernos frios e verões quentes, prosperando em solos bem drenados. As tulipas florescem na primavera, oferecendo cores vibrantes aos jardins.";
            break;
        case "boca_de_lobo":
            title.innerHTML = "Boca-de-Lobo";
            text.innerHTML =  "A boca-de-lobo, nativa do Mediterrâneo, prefere climas quentes e ensolarados, mas também tolera frio moderado, florescendo bem na primavera e verão.";
            break;
        case "jacinto":
            title.innerHTML = "Jacinto";
            text.innerHTML =  "O jacinto é originário da região do Mediterrâneo, especialmente da Grécia e Turquia. Ele prefere climas temperados, florescendo na primavera, e se adapta bem a solos bem drenados e ensolarados, embora possa tolerar geadas leves.";
            break;
        case "gerbera":
            title.innerHTML = "Gérbera";
            text.innerHTML =  "A gerbera é originária da África do Sul, mas também é encontrada em outras regiões tropicais e subtropicais do mundo. Ela prefere climas quentes e ensolarados, se desenvolvendo bem em temperaturas amenas. A gerbera é sensível ao frio e se destaca por suas flores vibrantes e variadas, sendo popular em jardins e arranjos florais.";
            break;
        case "zinia":
            title.innerHTML = "Gérbera";
            text.innerHTML =  "A gerbera é originária da África do Sul, mas também é encontrada em outras regiões tropicais e subtropicais do mundo. Ela prefere climas quentes e ensolarados, se desenvolvendo bem em temperaturas amenas. A gerbera é sensível ao frio e se destaca por suas flores vibrantes e variadas, sendo popular em jardins e arranjos florais.";
            break;
        case "girassol":
            title.innerHTML = "Girassol";
            text.innerHTML =  "O girassol é nativo da América do Norte e prefere climas quentes e ensolarados, prosperando em temperaturas entre 20°C e 30°C. É resistente e se adapta a diversos tipos de solo.";
            break;
        case "hibisco":
            title.innerHTML = "Hibisco";
            text.innerHTML =  "O hibisco é originário de regiões tropicais e subtropicais, como a Ásia e o Pacífico. Ele prefere climas quentes e úmidos, prosperando em temperaturas elevadas e luz solar direta.";
            break;
        case "petunia":
            title.innerHTML = "Petúnia";
            text.innerHTML =  "A petúnia é nativa da América do Sul, especialmente da Argentina e do Brasil. Ela prefere climas quentes e ensolarados, adaptando-se bem a temperaturas amenas e tolerando períodos de seca, o que a torna uma escolha popular para jardins e canteiros.";
            break;
        case "cravo":
            title.innerHTML = "Cravo";
            text.innerHTML =  "O cravo é nativo da região do Mediterrâneo e prefere climas temperados, prosperando em condições de solo variadas. É conhecido por suas flores aromáticas e coloridas, comumente cultivado em jardins.";
            break;
        case "camelia":
            title.innerHTML = "Camélia";
            text.innerHTML =  "A camélia é nativa da Ásia, especialmente da China e do Japão. Ela prefere climas temperados e úmidos, florescendo em sombra parcial e solos bem drenados.";
            break;
        case "crisantemo":
            title.innerHTML = "Crisântemo";
            text.innerHTML =  "O crisântemo é nativo da Ásia, especialmente da China, e prefere climas temperados. Ele se desenvolve bem em sol pleno e tolera temperaturas amenas, sendo popular em jardins, especialmente no outono.";
            break;
        case "angelica":
            title.innerHTML = "Angélica";
            text.innerHTML =  "A angélica (Angelica) é nativa do Hemisfério Norte, especialmente na Europa, Ásia e América do Norte. Ela prefere climas temperados e úmidos, desenvolvendo-se em solos ricos e bem drenados, frequentemente em áreas sombreadas. É conhecida por suas flores em forma de guarda-chuva e seu aroma distinto.";
            break;
        case "flor_de_maio":
            title.innerHTML = "Flor-de-Maio";
            text.innerHTML =  "A flor-de-maio (Schlumbergera) é nativa das florestas tropicais do Brasil, onde cresce em ambientes úmidos e sombreados. Ela se adapta bem a climas quentes e úmidos, florescendo no outono e inverno, especialmente entre novembro e fevereiro. A planta é popular como ornamental devido às suas flores vibrantes e decorativas.";
            break;
        case "hellebores":
            title.innerHTML = "Hellebores";
            text.innerHTML =  "As hellebores (Helleborus) são nativas da Europa e da Ásia, encontradas em florestas sombreadas. Elas prosperam em climas temperados e úmidos, com solos ricos e bem drenados, florescendo no final do inverno e início da primavera.";
            break;
        case "neve_da_montanha":
            title.innerHTML = "Neve-da-Montanha";
            text.innerHTML =  "A neve da montanha (Edelweiss), nativa dos Alpes europeus, prefere climas frios e montanhosos, crescendo em altitudes elevadas em solos rochosos e bem drenados. É conhecida por sua aparência delicada e resistência às condições adversas.";
            break;
        case "pansy":
            title.innerHTML = "Pansy";
            text.innerHTML =  "A pansy (Viola tricolor) é nativa da Europa e da Ásia, preferindo climas temperados. É resistente ao frio e floresce na primavera, outono e até no inverno em regiões amenas. Conhecida por suas grandes e coloridas flores, é popular em jardins e paisagens.";
            break;
    }

    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

function mascaraTelefone(event) {
    let telefone = event.target.value.replace(/\D+/g, "");

    telefone = telefone.substring(0, 11);

    if (telefone.length > 10) {
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (telefone.length > 6) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (telefone.length > 2) {
        telefone = telefone.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else {
        telefone = telefone.replace(/^(\d*)/, "($1");
      }

      event.target.value = telefone;
}

function toggleMenu() {
    const header = document.querySelector('nav .header');
    const hamburger = document.querySelector('.hamburger');

    header.classList.toggle('active');

    if (hamburger.innerHTML === '☰') {
        hamburger.innerHTML = '✕'
    } else {
        hamburger.innerHTML = '☰';
    }
}