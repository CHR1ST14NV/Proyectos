const lorem1 = `La educación digital avanza rápidamente en América Latina. Cada vez más 
instituciones adoptan plataformas virtuales, inteligencia artificial y aulas híbridas para
 mejorar el aprendizaje. Según el BID, más del 65% de los colegios públicos han incorporado 
 herramientas tecnológicas desde 2023.`;

const lorem2 = `América Latina duplicó su inversión en energías renovables en el último año. 
Países como Chile, Brasil y Colombia lideran proyectos solares y eólicos a gran escala. Esto 
forma parte de la estrategia climática para reducir emisiones en un 40% hacia 2030, según CEPAL.`;

class AppRoot extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
      <style>
        .frame{
          max-width: 1100px;
          margin: 24px auto;
          border: 2px solid var(--line);
          background: white;
          box-shadow: 0 6px 18px rgba(0,0,0,.08);
        }
        header, footer{padding:16px 20px; border-bottom:2px solid var(--line)}
        footer{border-top:2px solid var(--line); border-bottom:none}
        .bar{
          display:flex; align-items:center; gap:12px;
          border-bottom:2px solid var(--line); padding:8px 12px; background:#eee;
          font-weight:600;
        }
        .titleRow{
          position:relative; display:flex; align-items:center; justify-content:center;
          padding:28px 16px;
        }
        .logo{
          position:absolute; left:16px; top:50%; transform:translateY(-50%);
          width:207px; height:101px; border:2px solid var(--line);
          display:flex; align-items:center; justify-content:center; font-weight:600;
        }
        h1{margin:0; font-weight:700; letter-spacing:.3px}
        .grid{
          display:grid; grid-template-columns: 3fr 1fr; gap:16px; padding:16px 20px;
        }
        .contentWrap{
          border:2px solid var(--line); padding:16px; position:relative;
        }
        .ribbon{
          position:absolute; right:8px; top:-12px; background:white; padding:0 6px;
          font-size:12px; color:var(--muted);
        }
      </style>
      <div class="frame">
        <div class="bar">Hoja de Trabajo Grupo #6</div>
        <div class="titleRow">
          <div class="logo">
              <img src="https://banner2.cleanpng.com/20180715/yvk/aav1gv6nz.webp" width="150" height="80" alt="Logotipo">
          </div>
          <h1>Desarrollo Web 2025</h1>
        </div>
        <div class="grid">
          <section class="contentWrap">
            <wc-section titulo="H3 Educación Digital" texto="${lorem1}"></wc-section>
            <wc-section titulo="H3 Inversión en Energías Renovables" texto="${lorem2}"></wc-section>
          </section>
          <wc-news></wc-news>
        </div>
        <wc-footer></wc-footer>
      </div>
      <style>
        :host {
          --line: rgba(60, 213, 255, 1);
          --bg: rgb(30, 35, 45);
          --ink: rgb(255, 255, 255);
          --muted: rgb(180, 180, 180);
          --highlight: rgb(255, 221, 87);
          --card: rgba(245, 245, 245, 0.05);
        }

        .frame {
          background: var(--card);
          border: 2px solid var(--line);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .bar {
          background: var(--line);
          color: white;
        }

        .ribbon {
          background: var(--highlight);
          color: black;
        }

        body {
          background: var(--bg);
          color: var(--ink);
        }
      </style>
      </div>
    `;
  }
}
customElements.define('app-root', AppRoot);

class WcSection extends HTMLElement{
  static get observedAttributes(){ return ['titulo','texto']; }
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
      <style>
        .box{ border:2px solid var(--line); padding:14px; margin-bottom:14px; background:#fafafa; }
        h3{ margin:0 0 6px 0; display:flex; align-items:baseline; gap:8px; }
        h3 small{ font-weight:600; color:var(--muted) }
        p{ margin:6px 0 10px 0; line-height:1.4 }
        .thumbs{ display:grid; grid-template-columns: repeat(5, auto); gap:10px; }
        .ph{
          width:101px; height:78px; border:2px dashed #555; display:flex;
          align-items:center; justify-content:center; font: 600 12px/1 system-ui, sans-serif;
          color:#555; background:#fff;
        }
      </style>
      <article class="box">
        <h3><span class="t">Tema</span><small></small></h3>
        <p class="txt"></p>
       <div class="thumbs">
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="101" height="78" alt="Imagen 1">
         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="101" height="78" alt="Imagen 2">
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="101" height="78" alt="Imagen 3">
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="101" height="78" alt="Imagen 4">
         <img src="https://media.elcomercio.com/wp-content/uploads/2025/04/chatgpt-imagenes-1024x683.jpg" width="101" height="78" alt="Imagen 5">
        </div>
      </article>
    `;
  }
  
  connectedCallback(){ this._render(); }
  attributeChangedCallback(){ this._render(); }
  _render(){
    const t = this.getAttribute('titulo') || 'Tema';
    const x = this.getAttribute('texto') || '';
    this.shadowRoot.querySelector('.t').textContent = t;
    this.shadowRoot.querySelector('.txt').textContent = x;
  }
}
customElements.define('wc-section', WcSection);

class WcNews extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    const items = [
      'vix libertas subsidiare induit habitandoc collaepse',
      'dissereptosor pro pluvagque collaebit',
      'nullus nix quod deorum fretu orans habendum fabricator deorum meminisse',
      'parvexerat cum talione doerant homoi mustri rudis quinta terris tollere inter sumonaga tolle orios iussi aperis manobst fuit coeso fingere'
    ];
    this.shadowRoot.innerHTML = `
      <style>
       aside {
  border: 2px solid var(--line);
  padding: 12px;
  background: var(--white);
  height: 100%;
}
h2 {
  margin: 0 0 8px 0;
  text-align: center; 
  color: var(--accent);
}
.k {
  display: block;
  text-align: right;
  color: var(--muted);
  margin-bottom: 8px;
}
ul {
  margin: 0;
  padding-left: 16px;
}
li {
  margin: 8px 0;
}
      </style>
      <aside>
        <h2>H2 Noticias</h2>
        <ul class="list"></ul>
      </aside>
    `;
    const ul = this.shadowRoot.querySelector('.list');
    items.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });
  }
}
customElements.define('wc-news', WcNews);

class WcFooter extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
      <style>
        footer{ border-top:2px solid var(--line); padding:16px 20px; }
        h2{ margin:0 0 10px 0; text-align:center }
        .meta{ text-align:right; color:var(--muted); margin-top:-6px; margin-bottom:12px; }
        .cols{ display:grid; grid-template-columns: 1fr 1fr; gap:16px; color:#333; }
        p{ margin:0; line-height:1.35 }
      </style>
      <footer>
        <h2>H2 Pie de página</h2>
        <div class="meta"></div>
        <div class="cols">
          <p>regio gravitate acervo legebantur fulit fulgura lapidosos non secrevit vos subsidere obliguis rerum sibi flexi non nonndum spectent caeleste membra</p>
          <p>legebantur di caligine solidumque speciem</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('wc-footer', WcFooter);

