const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }
        });
    },
    {
        threshold: 0.12
    }
);

elementos.forEach(function (elemento) {
    observador.observe(elemento);
});


const numeros = document.querySelectorAll("[data-number]");

const numerosAnimados = new Set();

function animarNumero(elemento) {

    if (numerosAnimados.has(elemento)) {
        return;
    }

    numerosAnimados.add(elemento);

    const valorFinal = Number(elemento.dataset.number);
    const duracao = 1800;
    const inicio = performance.now();

    function atualizar(tempoAtual) {

        const progresso = Math.min(
            (tempoAtual - inicio) / duracao,
            1
        );

        const suavizado = 1 - Math.pow(1 - progresso, 3);

        elemento.textContent = Math.floor(
            valorFinal * suavizado
        ).toLocaleString("pt-BR");

        if (progresso < 1) {
            requestAnimationFrame(atualizar);
        }
    }

    requestAnimationFrame(atualizar);
}

const observadorNumeros = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {
                animarNumero(entrada.target);
            }

        });

    },
    {
        threshold: 0.5
    }
);

numeros.forEach(function (numero) {
    observadorNumeros.observe(numero);
});


const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});


const linksMenu = document.querySelectorAll(".mobile-menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

});


const hero = document.querySelector(".hero");
const heroImage = document.getElementById("heroImage");

hero.addEventListener("mousemove", function (evento) {

    const x = (evento.clientX / window.innerWidth - 0.5) * 2;
    const y = (evento.clientY / window.innerHeight - 0.5) * 2;

    heroImage.style.transform =
        `translate(${x * -10}px, ${y * -8}px) scale(1.03)`;

});

hero.addEventListener("mouseleave", function () {

    heroImage.style.transform =
        "translate(0, 0) scale(1)";

});


const engineButtons = document.querySelectorAll(".engine-part");
const engineInfo = document.getElementById("engineInfo");

const engineData = {

    motor: {
        title: "V8 4.0L",
        text: "O coração da Senna é um V8 biturbo de 3.994 cc desenvolvido para entregar 800 PS."
    },

    turbo: {
        title: "Twin Turbo",
        text: "Dois turbocompressores Twin Scroll ajudam o motor a produzir sua enorme potência e torque."
    },

    dry: {
        title: "Dry Sump",
        text: "O sistema de lubrificação dry sump foi desenvolvido para atender às exigências de um carro de alto desempenho."
    },

    torque: {
        title: "800 Nm",
        text: "O motor entrega 800 Nm de torque, contribuindo para a forte aceleração do carro."
    }

};

engineButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        engineButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const tipo = button.dataset.engine;
        const dados = engineData[tipo];

        engineInfo.innerHTML = `
            <span>ENGINE SYSTEM</span>
            <h3>${dados.title}</h3>
            <p>${dados.text}</p>
        `;

    });

});


const engineeringButtons =
    document.querySelectorAll(".engineering-btn");

const engineeringNumber =
    document.getElementById("engineeringNumber");

const engineeringLabel =
    document.getElementById("engineeringLabel");

const engineeringTitle =
    document.getElementById("engineeringTitle");

const engineeringText =
    document.getElementById("engineeringText");


const engineeringData = {

    aero: {
        number: "01",
        label: "ACTIVE AERODYNAMICS",
        title: "O ar também é engenharia",
        text: "A Senna utiliza aerodinâmica ativa para gerar níveis extremos de downforce e melhorar o comportamento do carro."
    },

    suspension: {
        number: "02",
        label: "PROACTIVE CHASSIS CONTROL",
        title: "Controle em movimento",
        text: "Suspensão, chassi e eletrônica trabalham juntos para manter o carro controlado durante a condução."
    },

    brakes: {
        number: "03",
        label: "BRAKING SYSTEM",
        title: "Parar também é desempenho",
        text: "O sistema de freios foi desenvolvido para lidar com as enormes velocidades alcançadas pelo carro."
    },

    chassis: {
        number: "04",
        label: "CARBON FIBRE",
        title: "Leveza estrutural",
        text: "A fibra de carbono permite criar uma estrutura rígida mantendo o foco intenso na redução de massa."
    },

    tires: {
        number: "05",
        label: "PIRELLI",
        title: "O contato com o asfalto",
        text: "Os pneus são uma parte fundamental do equilíbrio entre potência, frenagem, aderência e comportamento."
    }

};

engineeringButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        engineeringButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const sistema = button.dataset.system;
        const dados = engineeringData[sistema];

        engineeringNumber.textContent = dados.number;
        engineeringLabel.textContent = dados.label;
        engineeringTitle.textContent = dados.title;
        engineeringText.textContent = dados.text;

    });

});


const yearButtons = document.querySelectorAll(".year-btn");

const yearNumber = document.getElementById("yearNumber");
const yearTitle = document.getElementById("yearTitle");
const yearText = document.getElementById("yearText");

const years = {

    1988: {
        title: "O começo de uma era",
        text: "Ayrton Senna inicia sua trajetória pela McLaren e conquista seu primeiro campeonato mundial."
    },

    1989: {
        title: "Uma batalha intensa",
        text: "Senna disputa novamente o campeonato e protagoniza uma das temporadas mais marcantes da Fórmula 1."
    },

    1990: {
        title: "Segundo título",
        text: "Senna conquista seu segundo campeonato mundial de Fórmula 1 pela McLaren."
    },

    1991: {
        title: "Terceiro campeonato",
        text: "Senna conquista seu terceiro campeonato mundial e consolida seu nome na história da McLaren."
    },

    1992: {
        title: "Nova geração",
        text: "A McLaren enfrenta forte concorrência enquanto Senna continua sendo uma das grandes referências da categoria."
    },

    1993: {
        title: "Último ano na McLaren",
        text: "Senna encerra sua trajetória pela McLaren após uma das relações mais importantes da história da Fórmula 1."
    }

};

yearButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        yearButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const ano = button.dataset.year;
        const dados = years[ano];

        yearNumber.textContent = ano;
        yearTitle.textContent = dados.title;
        yearText.textContent = dados.text;

    });

});


const compareButtons =
    document.querySelectorAll(".compare-btn");

const compareName =
    document.getElementById("compareName");

const comparePower =
    document.getElementById("comparePower");

const compareWeight =
    document.getElementById("compareWeight");

const compareUse =
    document.getElementById("compareUse");

const comparePhilosophy =
    document.getElementById("comparePhilosophy");


const comparisonData = {

    senna: {
        name: "SENNA",
        power: "800",
        weight: "1.198 KG",
        use: "ROAD + TRACK",
        philosophy: "DRIVER FOCUSED"
    },

    gtr: {
        name: "SENNA GTR",
        power: "825",
        weight: "TRACK FOCUSED",
        use: "TRACK ONLY",
        philosophy: "MAXIMUM PERFORMANCE"
    }

};

compareButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        compareButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const tipo = button.dataset.compare;
        const dados = comparisonData[tipo];

        compareName.textContent = dados.name;
        comparePower.textContent = dados.power;
        compareWeight.textContent = dados.weight;
        compareUse.textContent = dados.use;
        comparePhilosophy.textContent = dados.philosophy;

    });

});


const curiosidades =
    document.querySelectorAll(".curiosity");

const modal =
    document.getElementById("modal");

const modalText =
    document.getElementById("modalText");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");


curiosidades.forEach(function (card) {

    card.addEventListener("click", function () {

        modalTitle.textContent = "McLaren Senna";
        modalText.textContent = card.dataset.text;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
});


modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {
        modal.classList.remove("active");
    }

});


const gtrBtn =
    document.getElementById("gtrBtn");

gtrBtn.addEventListener("click", function () {

    modalTitle.textContent = "McLaren Senna GTR";

    modalText.textContent =
        "A Senna GTR é a versão de pista da família Senna, desenvolvida para utilização em circuitos fechados e para levar ainda mais longe a filosofia de desempenho do projeto.";

    modal.classList.add("active");

});


const secretBtn =
    document.getElementById("secretBtn");

const secretMessage =
    document.getElementById("secretMessage");

const closeSecret =
    document.getElementById("closeSecret");

let clicks = 0;

secretBtn.addEventListener("click", function () {

    clicks++;

    if (clicks >= 1) {
        secretMessage.classList.add("active");
    }

});


closeSecret.addEventListener("click", function () {
    secretMessage.classList.remove("active");
});


document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        modal.classList.remove("active");
        secretMessage.classList.remove("active");
        mobileMenu.classList.remove("active");

    }

});


window.addEventListener("scroll", function () {

    const topbar =
        document.getElementById("topbar");

    if (window.scrollY > 50) {

        topbar.style.background =
            "rgba(0,0,0,0.92)";

    } else {

        topbar.style.background =
            "rgba(0,0,0,0.55)";

    }

});
