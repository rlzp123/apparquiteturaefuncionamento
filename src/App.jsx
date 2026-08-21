import { useEffect, useMemo, useRef, useState } from 'react';
import GameCard from './components/GameCard';
import NativeTools from './components/NativeTools';
import { categories, formatBRL, games, heroGames } from './data/games';

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className={`toast toast-${toast.type || 'info'}`} role="status">
      <span>{toast.type === 'success' ? '✓' : toast.type === 'error' ? '!' : 'i'}</span>
      <p>{toast.message}</p>
    </div>
  );
}

function DetailsModal({ game, onClose, onAdd }) {
  const [platform, setPlatform] = useState(game?.platforms?.[0] || '');

  useEffect(() => {
    setPlatform(game?.platforms?.[0] || '');
  }, [game]);

  if (!game) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="details-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
        <div className="details-art">
          <img src={game.image} alt={game.title} />
          <div className="details-art-overlay" />
          <span>{game.tag}</span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="section-kicker">{game.category}</p>
          <h3 className="mt-2 text-3xl font-black tracking-tight">{game.title}</h3>
          <p className="mt-4 text-zinc-400 leading-7">{game.description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <label className="field-label">Plataforma
              <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                {game.platforms.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <div className="price-box">
              <small>A partir de</small>
              <strong>{formatBRL(game.price)}</strong>
            </div>
          </div>
          <button className="btn-primary mt-6 w-full" onClick={() => { onAdd(game, platform); onClose(); }}>
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, cart, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className={`cart-overlay ${open ? 'is-open' : ''}`} onMouseDown={onClose}>
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} onMouseDown={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div>
            <p className="section-kicker">JOGAÊ</p>
            <h3>Seu carrinho</h3>
          </div>
          <button className="modal-close static-close" onClick={onClose}>×</button>
        </div>

        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-cart"><span>🛒</span><strong>Seu carrinho está vazio.</strong><p>Escolha um jogo para começar.</p></div>
          ) : cart.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.platform}`}>
              <img src={item.image} alt={item.title} />
              <div>
                <strong>{item.title}</strong>
                <small>{item.platform}</small>
                <span>{formatBRL(item.price)}</span>
              </div>
              <button onClick={() => onRemove(item.cartId)} aria-label={`Remover ${item.title}`}>×</button>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div><span>Total</span><strong>{formatBRL(total)}</strong></div>
          <button className="btn-primary w-full" disabled={!cart.length} onClick={onCheckout}>FINALIZAR DEMONSTRAÇÃO</button>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [details, setDetails] = useState(null);
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jogae_cart') || '[]'); }
    catch { return []; }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const heroTimer = useRef(null);

  const hero = heroGames[heroIndex];

  const filteredGames = useMemo(() => games.filter((game) => {
    const sameCategory = category === 'Todos' || game.category === category;
    const sameSearch = game.title.toLowerCase().includes(search.toLowerCase());
    return sameCategory && sameSearch;
  }), [category, search]);

  function showToast(message, type = 'info') {
    setToast({ message, type, id: Date.now() });
  }

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 3500);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    localStorage.setItem('jogae_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const start = () => {
      window.clearInterval(heroTimer.current);
      heroTimer.current = window.setInterval(() => {
        setHeroIndex((current) => (current + 1) % heroGames.length);
      }, 5500);
    };
    start();
    return () => window.clearInterval(heroTimer.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal-card').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filteredGames.length]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setDetails(null);
        setCartOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function nextHero(direction = 1) {
    setHeroIndex((current) => (current + direction + heroGames.length) % heroGames.length);
  }

  function addToCart(game, platform = game.platforms[0]) {
    const duplicate = cart.some((item) => item.id === game.id && item.platform === platform);
    if (duplicate) {
      showToast(`${game.title} já está no carrinho nessa plataforma.`, 'info');
      return;
    }
    setCart((items) => [...items, { ...game, platform, cartId: `${game.id}-${Date.now()}` }]);
    showToast(`${game.title} adicionado ao carrinho.`, 'success');
  }

  function removeFromCart(cartId) {
    setCart((items) => items.filter((item) => item.cartId !== cartId));
  }

  function checkoutDemo() {
    showToast('Demonstração concluída. O carrinho foi mantido para você continuar testando.', 'success');
    setCartOpen(false);
  }

  function goToCatalog(selected = 'Todos') {
    setCategory(selected);
    setMenuOpen(false);
    document.getElementById('jogos')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06070b] text-white selection:bg-amber-300 selection:text-black">
      <Toast toast={toast} />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="brand"><span>J</span>JOGAÊ</a>

          <nav className="desktop-nav">
            <a href="#inicio">Início</a>
            <button onClick={() => goToCatalog('RPG')}>RPG</button>
            <button onClick={() => goToCatalog('Ação')}>Ação</button>
            <button onClick={() => goToCatalog('Aventura')}>Aventura</button>
            <button onClick={() => goToCatalog('Esportes')}>Esportes</button>
            <a href="#nativo">Native Bridge</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="cart-button" onClick={() => setCartOpen(true)}><span>🛒</span><b>{cart.length}</b></button>
            <button className={`hamburger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
              <i /><i /><i />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          {categories.slice(1).map((item) => <button key={item} onClick={() => goToCatalog(item)}>{item}</button>)}
          <a href="#nativo" onClick={() => setMenuOpen(false)}>Native Bridge</a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${hero.image})` }} />
          <div className="hero-grid" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-24 pt-28 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
            <div className="hero-copy">
              <div className="eyebrow"><i /> <span>{hero.category}</span><b>{hero.tag}</b></div>
              <p className="hero-number">0{heroIndex + 1}</p>
              <h1>{hero.title}</h1>
              <p className="hero-description">{hero.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <div className="hero-price"><small>A partir de</small><strong>{formatBRL(hero.price)}</strong></div>
                <span className="delivery-pill">⚡ ENTREGA DIGITAL</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn-primary" onClick={() => addToCart(hero)}>COMPRAR AGORA <span>↗</span></button>
                <button className="btn-secondary" onClick={() => setDetails(hero)}>VER DETALHES</button>
              </div>
            </div>

            <div className="hero-art-wrap">
              <div className="hero-orbit orbit-a" />
              <div className="hero-orbit orbit-b" />
              <div className="hero-frame" />
              <img key={hero.image} src={hero.image} alt={hero.title} className="hero-art" />
              <div className="floating-badge badge-a">PREMIUM</div>
              <div className="floating-badge badge-b">JOGAÊ</div>
            </div>
          </div>

          <div className="hero-controls">
            <button onClick={() => nextHero(-1)}>←</button>
            <div className="hero-thumbs">
              {heroGames.map((item, index) => (
                <button key={item.id} className={index === heroIndex ? 'active' : ''} onClick={() => setHeroIndex(index)}>
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
            <button onClick={() => nextHero(1)}>→</button>
          </div>
        </section>

        <section id="jogos" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="section-heading reveal-card">
            <div><p className="section-kicker">ESCOLHA SUA PRÓXIMA JORNADA</p><h2 className="section-title">CATÁLOGO <span>PREMIUM</span></h2></div>
            <p>Filtre os jogos, pesquise pelo nome, veja os detalhes e teste a experiência de compra.</p>
          </div>

          <div className="catalog-toolbar reveal-card">
            <div className="category-pills">
              {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'active' : ''}>{item}</button>)}
            </div>
            <label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar jogo..." /></label>
          </div>

          <div className="games-grid">
            {filteredGames.map((game) => <GameCard key={game.id} game={game} onDetails={setDetails} onAdd={addToCart} />)}
          </div>
          {!filteredGames.length && <div className="empty-search">Nenhum jogo encontrado.</div>}
        </section>

        <NativeTools onToast={showToast} />

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="architecture-panel reveal-card">
            <p className="section-kicker">ARQUITETURA DA ATIVIDADE</p>
            <h2 className="section-title mt-3">COMO O APP <span>CHEGA AO ANDROID</span></h2>
            <div className="architecture-flow">
              {['src/\nReact + JSX', 'npm run build', 'dist/\nHTML + CSS + JS', 'Capacitor', 'WebView + Bridge', 'Android'].map((item, index) => (
                <div className="contents" key={item}><div className="architecture-node">{item.split('\n').map((part) => <span key={part}>{part}</span>)}</div>{index < 5 && <b>→</b>}</div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-zinc-400 leading-7">Você trabalha principalmente em <strong className="text-white">src/</strong>. O Vite cria <strong className="text-white">dist/</strong>. Depois o Capacitor sincroniza esse build para a estrutura nativa Android, que roda o conteúdo web dentro de uma WebView e usa plugins para acessar recursos nativos.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8"><div><strong>JOGAÊ</strong><span>React + Vite + Tailwind + Capacitor</span></div><p>Projeto didático para a atividade de Web App → Mobile.</p></div>
      </footer>

      <DetailsModal game={details} onClose={() => setDetails(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} onCheckout={checkoutDemo} />
    </div>
  );
}
