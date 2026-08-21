// --- BASE DE DADOS DOS JOGOS COM PREÇOS POR PLATAFORMA ---
const menuData = [
    // --- RPG ---
    { 
        id: '1', cat: 'RPG', nome: "ELDEN RING", desc: "Aclamado RPG de ação no mundo das Terras Intermédias.", img: "./img/elden.jpg",
        precos: {
            'PC (Steam)': 274.50,
            'PC (Epic Games)': 274.50,
            'PlayStation 5': 299.00,
            'PlayStation 4': 299.90,
            'Xbox Series X/S': 299.90,
            'Xbox One': 299.90,
            'Nintendo Switch': 455.90
        }
    },
    { 
        id: '2', cat: 'RPG', nome: "CYBERPUNK 2077", desc: "RPG de aventura e ação no mundo aberto de Night City.", img: "./img/cyber.jpg",
        precos: {
            'PC (Steam)': 199.99,
            'PC (Epic Games)': 199.90,
            'PlayStation 5': 249.50,
            'PlayStation 4': 249.50,
            'Xbox Series X/S': 249.00,
            'Xbox One': 199.00,
            'Nintendo Switch': 339.99
        }
    },
    { 
        id: '7', cat: 'RPG', nome: "THE WITCHER 3", desc: "Geralt de Rívia em uma busca pela Criança da Profecia.", img: "./img/the.png",
        precos: {
            'PC (Steam)': 40.83,
            'PC (Epic Games)': 199.99,
            'PlayStation 5': 207.90,
            'PlayStation 4': 207.90,
            'Xbox Series X/S': 124.99,
            'Xbox One': 143.00,
            'Nintendo Switch': 179.99
        }
    },
    { 
        id: '9', cat: 'RPG', nome: "BALDUR'S GATE 3", desc: "RPG de turnos no universo de Dungeons & Dragons.", img: "./img/gate.jpg",
        precos: {
            'PC (Steam)': 199.99,
            'PlayStation 5': 299.90,
            'Xbox Series X/S': 259.95
        }
    },
    { 
        id: '15', cat: 'RPG', nome: "STARFIELD", desc: "Explore o universo neste RPG de ficção científica da Bethesda.", img: "./img/star.jpg",
        precos: {
            'PC (Steam)': 203.96,
            'Xbox Series X/S': 349.95
        }
    },
    { 
        //id: '16', cat: 'RPG', nome: "FINAL FANTASY XVI", desc: "Um épico de fantasia sombria onde os Eikons dominam o destino.", img: "./img/ff16.png",
        //precos: {
         //   'PC (Steam)': 101.95,
        //    'PlayStation 5': 249.50,
        //    'Xbox Series X/S': 249,50
       // }
    },
    { 
        id: '17', cat: 'RPG', nome: "PERSONA 5 ROYAL", desc: "Lidere os Phantom Thieves e mude os corações corrompidos.", img: "./img/p5r.jpg",
        precos: {
            'PC (Steam)': 306.55,
            'PlayStation 5': 299.90,
            'PlayStation 4': 299.90,
            'Xbox Series X/S': 295.00,
            'Nintendo Switch': 295.00
        }
    },
    { 
        id: '18', cat: 'RPG', nome: "DIABLO IV", desc: "Enfrente as hordas do Inferno e a ameaça de Lilith.", img: "./img/diablo4.jpg",
        precos: {
            'PC (Steam)': 349.00,
            'PlayStation 5': 349.00,
            'PlayStation 4': 349.00,
            'Xbox Series X/S': 349.00,
            'Xbox One': 349.00
        }
    },

    // --- AÇÃO ---
    { 
        id: '3', cat: 'Ação', nome: "GOD OF WAR RAGNARÖK", desc: "Embarque em uma jornada épica com Kratos e Atreus.", img: "./img/good.jpg",
        precos: {
            'PC (Steam)': 249.90,
            'PC (Epic Games)': 249.90,
            'PlayStation 5': 349.90,    
            'PlayStation 4': 299.90,
            'Xbox Series X/S': 249.90,
            'Xbox One': 299.90
        }
    },
    { 
        id: '4', cat: 'Ação', nome: "GRAND THEFT AUTO V", desc: "Realize golpes perigosos em uma cidade impiedosa.", img: "./img/gta.png",
        precos: {
            'PC (Steam)': 152.90,
            'PC (Epic Games)': 152.90,
            'PlayStation 5': 149.90,
            'PlayStation 4': 214.90,
            'Xbox Series X/S': 198.90,
            'Xbox One': 198.90
        }
    },
    { 
        id: '10', cat: 'Ação', nome: "SPIDER-MAN 2", desc: "Peter Parker e Miles Morales enfrentam o temível Venom.", img: "./img/spiderman.jpg",
        precos: {
            'PlayStation 5': 349.90
        }
    },
    { 
        id: '11', cat: 'Ação', nome: "RESIDENT EVIL 4", desc: "Leon S. Kennedy em missão para resgatar a filha do presidente.", img: "./img/re4.jpg",
        precos: {
            'PC (Steam)': 169.00,
            'PlayStation 5': 249.00,
            'PlayStation 4': 199.00,
            'Xbox Series X/S': 249.00
        }
    },
    { 
        id: '19', cat: 'Ação', nome: "HELLDIVERS 2", desc: "Junte-se aos Helldivers e lute pela liberdade em uma galáxia hostil.", img: "./img/helldivers2.jpg",
        precos: {
            'PC (Steam)': 199.50,
            'PlayStation 5': 199.50
        }
    },
    { 
        id: '20', cat: 'Ação', nome: "SEKIRO: SHADOWS DIE TWICE", desc: "Vingança e honra na era Sengoku do Japão.", img: "./img/sekiro.jpg",
        precos: {
            'PC (Steam)': 274.00,
            'PlayStation 4': 274.00,
            'Xbox One': 274.00
        }
    },
    { 
        id: '21', cat: 'Ação', nome: "DEVIL MAY CRY 5", desc: "Combates estilizados contra invasões demoníacas.", img: "./img/dmc5.jpg",
        precos: {
            'PC (Steam)': 99.90,
            'PlayStation 5': 169.90,
            'PlayStation 4': 129.90,
            'Xbox Series X/S': 169.90,
            'Xbox One': 129.90
        }
    },
    { 
        id: '22', cat: 'Ação', nome: "CALL OF DUTY: MW III", desc: "Ação frenética multiplayer e campanha intensa de tiro.", img: "./img/cod.jpg",
        precos: {
            'PC (Steam)': 319.00,
            'PlayStation 5': 359.00,
            'PlayStation 4': 359.00,
            'Xbox Series X/S': 359.00,
            'Xbox One': 359.00
        }
    },

    // --- AVENTURA ---
    { 
        id: '5', cat: 'Aventura', nome: "THE LEGEND OF ZELDA", desc: "Explore vastas paisagens cheias de mistérios e combates.", img: "./img/zelda.png",
        precos: {
            'Nintendo Switch': 390.00
        }
    },
    { 
        id: '6', cat: 'Aventura', nome: "RED DEAD REDEMPTION", desc: "Uma história épica sobre a vida no velho oeste americano.", img: "./img/red.jpg",
        precos: {
            'PC (Steam)': 249.50,
            'PC (Epic Games)': 249.50,
            'PlayStation 5': 158.00,
            'PlayStation 4': 250.00,
            'Xbox Series X/S': 248.95,
            'Xbox One': 248.95,
            'Nintendo Switch': 228.00
        }
    },
    { 
        id: '12', cat: 'Aventura', nome: "HOLLOW KNIGHT", desc: "Explore o vasto reino arruinado de insetos e heróis.", img: "./img/hollow.jpg",
        precos: {
            'PC (Steam)': 46.99,
            'PlayStation 4': 62.50,
            'Xbox One': 59.00,
            'Nintendo Switch': 27.99
        }
    },
    { 
        id: '13', cat: 'Aventura', nome: "THE LAST OF US PART I", desc: "Sobreviva em um mundo pós-apocalíptico com Joel e Ellie.", img: "./img/tlou.jpg",
        precos: {
            'PC (Steam)': 249.90,
            'PlayStation 5': 349.90
        }
    },
    { 
        id: '23', cat: 'Aventura', nome: "HORIZON FORBIDDEN WEST", desc: "Enfrente máquinas temíveis e explore terras distantes.", img: "./img/horizon.jpg",
        precos: {
            'PC (Steam)': 249.90,
            'PlayStation 5': 299.90,
            'PlayStation 4': 199.90
        }
    },
    { 
        id: '24', cat: 'Aventura', nome: "UNCHARTED: LEGACY", desc: "Busca por tesouros perdidos com Nathan Drake e Chloe Frazer.", img: "./img/uncharted.jpg",
        precos: {
            'PC (Steam)': 199.90,
            'PlayStation 5': 249.90
        }
    },
    { 
        id: '25', cat: 'Aventura', nome: "DEATH STRANDING", desc: "Conecte uma sociedade fragmentada em um mundo devastado.", img: "./img/deathstranding.jpg",
        precos: {
            'PC (Steam)': 159.00,
            'PlayStation 5': 249.90,
            'PlayStation 4': 149.90
        }
    },
    { 
        id: '26', cat: 'Aventura', nome: "STRAY", desc: "Guie um gato de rua perdido por uma cidade cibernética.", img: "./img/stray.jpg",
        precos: {
            'PC (Steam)': 89.99,
            'PlayStation 5': 149.50,
            'PlayStation 4': 149.50,
            'Xbox Series X/S': 112.45,
            'Nintendo Switch': 112.45
        }
    },
    { 
        id: '27', cat: 'Aventura', nome: "IT TAKES TWO", desc: "Aventura cooperativa focada na resolução de quebra-cabeças.", img: "./img/ittakestwo.jpg",
        precos: {
            'PC (Steam)': 199.00,
            'PlayStation 5': 199.00,
            'PlayStation 4': 199.00,
            'Xbox Series X/S': 199.00,
            'Xbox One': 199.00,
            'Nintendo Switch': 199.00
        }
    },

    // --- ESPORTES ---
    { 
        id: '8', cat: 'Esportes', nome: "FORZA HORIZON 4", desc: "Explore o mundo aberto e dinâmico do México.", img: "./img/forza.jpg",
        precos: {
            'PC (Steam)': 110.00,
            'Xbox Series X/S': 249.00,
            'Xbox One': 270.00
        }
    },
    { 
        id: '14', cat: 'Esportes', nome: "EA SPORTS FC 24", desc: "A experiência mais autêntica do futebol mundial.", img: "./img/eafc.jpg",
        precos: {
            'PC (Steam)': 359.00,
            'PlayStation 5': 358.90,
            'PlayStation 4': 358.90,
            'Xbox Series X/S': 358.90,
            'Xbox One': 358.90,
            'Nintendo Switch': 319.00
        }
    },
    { 
        id: '28', cat: 'Esportes', nome: "NBA 2K24", desc: "A simulação definitiva de basquete com gráficos realistas.", img: "./img/nba2k24.jpg",
        precos: {
            'PC (Steam)': 299.90,
            'PlayStation 5': 349.90,
            'PlayStation 4': 299.90,
            'Xbox Series X/S': 349.90,
            'Xbox One': 299.90,
            'Nintendo Switch': 299.90
        }
    },
    { 
        id: '29', cat: 'Esportes', nome: "GRAN TURISMO 7", desc: "O simulador de corridas real definitivo da PlayStation.", img: "./img/gt7.jpg",
        precos: {
            'PlayStation 5': 349.90,
            'PlayStation 4': 299.90
        }
    },
    { 
        id: '30', cat: 'Esportes', nome: "WWE 2K23", desc: "Lute com as maiores superestrelas e lendas da WWE.", img: "./img/wwe2k23.jpg",
        precos: {
            'PC (Steam)': 299.90,
            'PlayStation 5': 349.90,
            'PlayStation 4': 299.90,
            'Xbox Series X/S': 349.90,
            'Xbox One': 299.90
        }
    },
    { 
        id: '31', cat: 'Esportes', nome: "RIDERS REPUBLIC", desc: "Entre no playground multijogador de esportes radicais.", img: "./img/riders.jpg",
        precos: {
            'PC (Steam)': 169.90,
            'PlayStation 5': 239.90,
            'PlayStation 4': 199.90,
            'Xbox Series X/S': 239.90,
            'Xbox One': 199.90
        }
    },
    { 
        id: '32', cat: 'Esportes', nome: "TONY HAWK'S PRO SKATER 1+2", desc: "Os lendários jogos de skate remasterizados em HD.", img: "./img/tonyhawk.jpg",
        precos: {
            'PC (Steam)': 199.00,
            'PlayStation 5': 229.00,
            'PlayStation 4': 199.00,
            'Xbox Series X/S': 229.00,
            'Xbox One': 199.00,
            'Nintendo Switch': 199.00
        }
    }
];

const categorias = ['RPG', 'Ação', 'Aventura', 'Esportes'];

// --- AUTENTICAÇÃO E SESSÃO DO USUÁRIO ---
let usuarioLogado = null;

function carregarSessao() {
    const sessaoSalva = localStorage.getItem('jogae_sessao');
    if (sessaoSalva) {
        usuarioLogado = JSON.parse(sessaoSalva);
    } else {
        usuarioLogado = null;
    }
    atualizarMenuUsuario();
    carregarCarrinho();
}

function atualizarMenuUsuario() {
    const areaMenu = document.getElementById('area-usuario-mobile') || document.getElementById('area-usuario-mobile-menu');
    if (!areaMenu) return;

    if (usuarioLogado) {
        const elNome = document.getElementById('cliente-nome');
        if (elNome) elNome.value = usuarioLogado.nome;

        areaMenu.innerHTML = `
            <div class="flex flex-col gap-3">
                <span class="text-sm text-gold font-bold">Olá, ${usuarioLogado.nome}</span>
                <button onclick="realizarLogout()" class="w-full text-center bg-neutral-900 border border-red-500/50 hover:bg-red-500 hover:text-white text-red-400 text-sm px-4 py-2 rounded-lg transition font-bold">
                    Sair da Conta
                </button>
            </div>
        `;
    } else {
        const elNome = document.getElementById('cliente-nome');
        if (elNome) elNome.value = '';

        areaMenu.innerHTML = `
            <button onclick="abrirModalAuth()" class="w-full text-left bg-neutral-900 border border-gold/40 text-gold font-bold px-4 py-3 rounded-lg flex items-center gap-2">
                🔑 Entrar ou Cadastrar
            </button>
        `;
    }
}

function abrirModalAuth() {
    fecharMenuMobile();
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('opacity-0', 'pointer-events-none');
}

function fecharModalAuth() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('opacity-0', 'pointer-events-none');
}

function alternarAbaAuth(aba) {
    const formLogin = document.getElementById('form-login');
    const formCad = document.getElementById('form-cadastro');
    const tabLogin = document.getElementById('tab-login');
    const tabCad = document.getElementById('tab-cadastro');

    if (aba === 'login') {
        formLogin.classList.remove('hidden');
        formCad.classList.add('hidden');
        tabLogin.className = "flex-1 pb-3 text-center font-bold text-gold border-b-2 border-gold transition";
        tabCad.className = "flex-1 pb-3 text-center font-bold text-neutral-400 hover:text-white transition";
    } else {
        formLogin.classList.add('hidden');
        formCad.classList.remove('hidden');
        tabCad.className = "flex-1 pb-3 text-center font-bold text-gold border-b-2 border-gold transition";
        tabLogin.className = "flex-1 pb-3 text-center font-bold text-neutral-400 hover:text-white transition";
    }
}

function realizarCadastro(e) {
    e.preventDefault();
    const nome = document.getElementById('cad-nome').value.trim();
    const email = document.getElementById('cad-email').value.trim().toLowerCase();
    const senha = document.getElementById('cad-senha').value;

    let usuarios = JSON.parse(localStorage.getItem('jogae_usuarios') || '[]');

    if (usuarios.some(u => u.email === email)) {
        alert("E-mail já cadastrado! Faça login.");
        return;
    }

    const novoUsuario = { nome, email, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('jogae_usuarios', JSON.stringify(usuarios));

    localStorage.setItem('jogae_sessao', JSON.stringify(novoUsuario));
    fecharModalAuth();
    carregarSessao();
    alert(`Conta criada com sucesso! Bem-vindo, ${nome}.`);
}

function realizarLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const senha = document.getElementById('login-senha').value;

    let usuarios = JSON.parse(localStorage.getItem('jogae_usuarios') || '[]');
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
        alert("E-mail ou senha incorretos!");
        return;
    }

    localStorage.setItem('jogae_sessao', JSON.stringify(usuario));
    fecharModalAuth();
    carregarSessao();
}

function realizarLogout() {
    localStorage.removeItem('jogae_sessao');
    carrinho = [];
    salvarCarrinho();

    const campos = [
        'login-email', 
        'login-senha', 
        'cad-nome', 
        'cad-email', 
        'cad-senha', 
        'cliente-nome', 
        'cliente-endereco',
        'cliente-pagamento'
    ];
    campos.forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = '';
    });

    carregarSessao();
    alert("Sessão encerrada! O carrinho e os campos foram resetados.");
}

// --- PONTE NATIVA ---
async function abrirCamera() {
    fecharMenuMobile();
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        alert("✅ Câmera acessada com sucesso!");
        stream.getTracks().forEach(track => track.stop()); 
    } catch (erro) {
        alert("❌ Erro ao acessar câmera: Permissão negada ou dispositivo sem câmera.");
    }
}

function verGPS() {
    fecharMenuMobile();
    if ("geolocation" in navigator) {
        alert("📍 Buscando sua localização, aguarde...");
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const lat = posicao.coords.latitude;
                const lon = posicao.coords.longitude;
                alert(`✅ Localização encontrada!\nLatitude: ${lat}\nLongitude: ${lon}`);
            },
            (erro) => {
                alert("❌ Erro ao buscar GPS: Permissão de localização necessária.");
            }
        );
    } else {
        alert("❌ Seu dispositivo ou navegador não suporta GPS.");
    }
}

// --- MENUS E NAVEGAÇÃO ---
const btnMenu = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        document.getElementById('bar1').style.transform = 'translateY(7px) rotate(45deg)';
        document.getElementById('bar2').style.opacity = '0';
        document.getElementById('bar3').style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
        mobileMenu.style.maxHeight = '0';
        document.getElementById('bar1').style.transform = '';
        document.getElementById('bar2').style.opacity = '1';
        document.getElementById('bar3').style.transform = '';
    }
}
if (btnMenu) btnMenu.addEventListener('click', toggleMenu);
function fecharMenuMobile() { if (menuOpen) toggleMenu(); }

// --- CATÁLOGO DE JOGOS ---
function inicializarCategorias() {
    const navCategorias = document.getElementById('nav-categorias');
    if (!navCategorias) return;
    navCategorias.innerHTML = '';
    categorias.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `px-6 py-2 rounded-full font-bold text-sm bg-neutral-900 border border-neutral-700 text-neutral-300 transition hover:border-gold btn-cat uppercase tracking-wide`;
        btn.innerText = cat;
        btn.onclick = () => selecionarCategoria(cat);
        navCategorias.appendChild(btn);
    });
    selecionarCategoria('RPG');
}

function selecionarCategoria(categoria) {
    const categoriaTitulo = document.getElementById('categoria-titulo');
    if (categoriaTitulo) categoriaTitulo.innerText = "Jogos de " + categoria;

    document.querySelectorAll('.btn-cat').forEach(btn => {
        if (btn.innerText.trim().toUpperCase() === categoria.toUpperCase()) {
            btn.classList.add('bg-gold', 'border-gold', 'text-black', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
            btn.classList.remove('bg-neutral-900', 'border-neutral-700', 'text-neutral-300');
        } else {
            btn.classList.remove('bg-gold', 'border-gold', 'text-black', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
            btn.classList.add('bg-neutral-900', 'border-neutral-700', 'text-neutral-300');
        }
    });

    renderizarProdutos(menuData.filter(item => item.cat.toUpperCase() === categoria.toUpperCase()));
}

function selecionarCategoriaMobile(cat) { selecionarCategoria(cat); fecharMenuMobile(); }

function renderizarProdutos(produtos) {
    const listaProdutos = document.getElementById('lista-produtos');
    if (!listaProdutos) return;
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const primeiraPlataforma = Object.keys(produto.precos)[0];
        const precoBase = produto.precos[primeiraPlataforma];

        const cardHTML = `
            <div class="bg-card rounded-2xl p-5 border border-gold/20 flex flex-col items-center text-center shadow-lg hover:border-gold/50 transition">
                <img src="${produto.img}" alt="${produto.nome}" class="w-24 h-24 rounded-xl object-cover mb-4" onerror="this.src='https://via.placeholder.com/150/111827/FFFFFF?text=JOGAÊ'">
                <div class="flex-1 w-full">
                    <h3 class="font-bold text-lg text-white mb-1">${produto.nome}</h3>
                    <p class="text-xs text-neutral-400 mb-1">A partir de</p>
                    <p class="text-gold font-black text-xl mb-3">R$ ${precoBase.toFixed(2).replace('.', ',')}</p>
                    <div class="flex gap-2 justify-center">
                        <button onclick="abrirModalDetalhes('${produto.id}')" class="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg text-xs font-bold transition">
                            Detalhes
                        </button>
                        <button onclick="adicionarAoCarrinho('${produto.id}')" class="bg-gold hover:bg-gold-hover text-black px-3 py-1.5 rounded-lg text-xs font-black transition">
                            Adicionar 🛒
                        </button>
                    </div>
                </div>
            </div>
        `;
        listaProdutos.innerHTML += cardHTML;
    });
}

// --- MODAL DE DETALHES ---
function abrirModalDetalhes(id) {
    const jogo = menuData.find(item => item.id === id);
    if (!jogo) return;

    const primeiraPlataforma = Object.keys(jogo.precos)[0];
    const precoBase = jogo.precos[primeiraPlataforma];

    document.getElementById('detalhes-img').src = jogo.img;
    document.getElementById('detalhes-nome').innerText = jogo.nome;
    document.getElementById('detalhes-preco').innerText = `A partir de R$ ${precoBase.toFixed(2).replace('.', ',')}`;
    document.getElementById('detalhes-desc').innerText = jogo.desc;
    
    const btnAdd = document.getElementById('detalhes-btn-add');
    btnAdd.onclick = () => { adicionarAoCarrinho(id); fecharModalDetalhes(); };

    const modal = document.getElementById('detalhes-modal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('detalhes-modal-content').classList.remove('scale-95');
    document.getElementById('detalhes-modal-content').classList.add('scale-100');
}

function fecharModalDetalhes() {
    const modal = document.getElementById('detalhes-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('detalhes-modal-content').classList.remove('scale-100');
    document.getElementById('detalhes-modal-content').classList.add('scale-95');
}

// --- CARRINHO DE COMPRAS ---
let carrinho = [];

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('jogae_carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    } else {
        carrinho = [];
    }
    atualizarInterfaceCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem('jogae_carrinho', JSON.stringify(carrinho));
    atualizarInterfaceCarrinho();
}

function adicionarAoCarrinho(id) {
    const jogo = menuData.find(item => item.id === id);
    if (!jogo) return;

    const itemExistente = carrinho.find(item => item.id === id);
    if (itemExistente) {
        alert(`${jogo.nome} já está no carrinho!`);
    } else {
        const platPadrao = Object.keys(jogo.precos)[0];
        const precoInicial = jogo.precos[platPadrao];

        carrinho.push({ 
            ...jogo, 
            plataforma: platPadrao,
            preco: precoInicial
        });
        
        salvarCarrinho();
        alert(`${jogo.nome} (${platPadrao}) adicionado ao carrinho!`);
    }
}

function alterarPlataformaItem(id, novaPlataforma) {
    const item = carrinho.find(i => i.id === id);
    if (item) {
        item.plataforma = novaPlataforma;
        if (item.precos && item.precos[novaPlataforma]) {
            item.preco = item.precos[novaPlataforma];
        }
        salvarCarrinho();
    }
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
}

function atualizarInterfaceCarrinho() {
    const navCount = document.getElementById('nav-cart-count');
    if (navCount) navCount.innerText = carrinho.length;

    const total = carrinho.reduce((sum, item) => sum + (item.preco || 0), 0);
    const totalFormatado = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    const cartTotal = document.getElementById('carrinho-total');
    if (cartTotal) cartTotal.innerText = totalFormatado;

    const footer = document.getElementById('carrinho-footer');
    if (footer) {
        if (carrinho.length > 0) {
            footer.classList.remove('translate-y-full');
        } else {
            footer.classList.add('translate-y-full');
        }
    }

    const modalTotal = document.getElementById('modal-carrinho-total');
    if (modalTotal) modalTotal.innerText = totalFormatado;

    const itensContainer = document.getElementById('carrinho-itens-container');
    if (!itensContainer) return;
    
    itensContainer.innerHTML = '';

    const btnFechar = document.getElementById('btn-fechar-pedido');

    if (carrinho.length === 0) {
        itensContainer.innerHTML = `
            <div class="text-center py-10 text-neutral-500 flex flex-col items-center gap-4">
                <span class="text-6xl">🛒</span>
                <p class="font-bold">Seu carrinho está vazio.</p>
                <button onclick="fecharModalCarrinho()" class="bg-neutral-800 text-gold px-5 py-2 rounded-lg text-sm font-bold">Explorar Jogos</button>
            </div>
        `;
        if (btnFechar) {
            btnFechar.disabled = true;
            btnFechar.classList.add('opacity-50', 'cursor-not-allowed');
        }
    } else {
        if (btnFechar) {
            btnFechar.disabled = false;
            btnFechar.classList.remove('opacity-50', 'cursor-not-allowed');
        }
        
        carrinho.forEach(item => {
            let platAtual = item.plataforma;
            if (!item.precos || !item.precos[platAtual]) {
                platAtual = Object.keys(item.precos)[0];
                item.plataforma = platAtual;
                item.preco = item.precos[platAtual];
            }

            const opcoesPlataformas = Object.keys(item.precos).map(plat => `
                <option value="${plat}" ${platAtual === plat ? 'selected' : ''}>
                    ${plat} - R$ ${item.precos[plat].toFixed(2).replace('.', ',')}
                </option>
            `).join('');

            const itemHTML = `
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                    <img src="${item.img}" alt="${item.nome}" class="w-16 h-16 rounded-lg object-cover" onerror="this.src='https://via.placeholder.com/150/111827/FFFFFF?text=JOGAÊ'">
                    <div class="flex-1 w-full">
                        <h4 class="font-bold text-white text-sm">${item.nome}</h4>
                        <p class="text-gold font-black text-sm mb-1">R$ ${(item.preco || 0).toFixed(2).replace('.', ',')}</p>
                        
                        <div class="flex items-center gap-2 mt-1">
                            <label class="text-[11px] text-neutral-400 font-bold">Plataforma:</label>
                            <select onchange="alterarPlataformaItem('${item.id}', this.value)" class="bg-neutral-800 text-white text-xs p-1 rounded border border-neutral-700 outline-none focus:border-gold">
                                ${opcoesPlataformas}
                            </select>
                        </div>
                    </div>
                    <button onclick="removerDoCarrinho('${item.id}')" class="text-neutral-500 hover:text-red-500 transition text-xl px-2 self-end sm:self-center">
                        &times;
                    </button>
                </div>
            `;
            itensContainer.innerHTML += itemHTML;
        });
    }
}

// --- MODAIS DO CARRINHO ---
function abrirModalCarrinho() {
    const modal = document.getElementById('carrinho-modal');
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('carrinho-modal-content').classList.remove('translate-y-full');
    }
}

function fecharModalCarrinho() {
    const modal = document.getElementById('carrinho-modal');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.getElementById('carrinho-modal-content').classList.add('translate-y-full');
    }
}

// --- FINALIZAÇÃO DE PEDIDO ---
function fecharPedido() {
    if (carrinho.length === 0) return;

    if (!usuarioLogado) {
        alert("🔑 Você precisa estar cadastrado e logado para finalizar a compra!");
        fecharModalCarrinho();
        abrirModalAuth();
        return;
    }

    const nome = document.getElementById('cliente-nome')?.value.trim();
    const endereco = document.getElementById('cliente-endereco')?.value.trim();
    const elPagamento = document.getElementById('cliente-pagamento');
    const pagamento = elPagamento ? elPagamento.value : 'PIX';

    if (!nome || !endereco) {
        alert("Por favor, preencha o seu NOME e o ENDEREÇO completo para a entrega!");
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + (item.preco || 0), 0).toFixed(2).replace('.', ',');
    
    let mensagem = `Olá JOGAÊ! Gostaria de finalizar meu pedido.\n\n`;
    mensagem += `👤 *Cliente:* ${nome}\n`;
    mensagem += `📍 *Endereço:* ${endereco}\n`;
    mensagem += `💳 *Forma de Pagamento:* ${pagamento}\n\n`;
    mensagem += `🎮 *Jogos e Plataformas Escolhidas:* \n`;
    
    carrinho.forEach((item, index) => {
        const plat = item.plataforma || Object.keys(item.precos)[0];
        mensagem += `${index + 1}. ${item.nome} [${plat}] - R$ ${(item.preco || 0).toFixed(2).replace('.', ',')}\n`;
    });
    
    mensagem += `\n💰 *Total:* R$ ${total}`;

    const foneWhatsapp = "5515999991234";
    const url = `https://wa.me/${foneWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');

    carrinho = [];
    salvarCarrinho();
    fecharModalCarrinho();
    alert("Pedido enviado via WhatsApp! Aguarde o retorno do suporte.");
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    carregarSessao();
    inicializarCategorias();
});