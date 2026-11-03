import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export function About() { return <div className="editorial-page">
<section className="editorial-hero">
<div>
<span className="eyebrow">A NOTE FROM SOYUNÉ</span>
<h1>Skincare, with<br />
<em>a little more soul.</em>
</h1>
<p>Inspired by the care and intention of Korean beauty rituals, SOYUNÉ is a fictional skincare concept built around the everyday art of looking after yourself.</p>
</div>
<img src="/images/secondary-model.webp" alt="SOYUNÉ beauty editorial"/>
</section>
<section className="about-values">
<span className="eyebrow">OUR PHILOSOPHY</span>
<h2>Good skin days are<br />
<em>built one layer at a time.</em>
</h2>
<p>We believe the best routines are the ones you can return to. A gentle cleanse. A comforting layer of hydration. A few minutes to slow down. SOYUNÉ brings together familiar skincare ingredients and considered textures to make those everyday moments feel special.</p>
<div className="value-grid">
<div>
<b>01</b>
<h3>Thoughtful by nature</h3>
<p>Ingredient-led product concepts with a clear place in your routine.</p>
</div>
<div>
<b>02</b>
<h3>Gentle everyday care</h3>
<p>Simple rituals designed around comfort, consistency and skin goals.</p>
</div>
<div>
<b>03</b>
<h3>Beauty in the details</h3>
<p>From soft textures to considered packaging, every detail has a purpose.</p>
</div>
</div>
</section>
<section className="about-image-band">
<img src="/images/hero-model.webp" alt="Luminous skincare portrait"/>
<div>
<span className="eyebrow">A RITUAL, NOT A RUSH</span>
<h2>Make room for<br />
<em>your own glow.</em>
</h2>
<Link to="/shop" className="button button-dark">Explore the collection</Link>
</div>
</section>
<div className="concept-disclaimer">SOYUNÉ is a fictional, Korean-inspired skincare brand concept created as a frontend e-commerce portfolio project. It is not represented as an established Korean manufacturer or retailer.</div>
</div>; }
const articles = [['The Korean glass-skin routine', 'A gentle guide to layering for a fresh, dewy-looking finish.', '/images/secondary-model.webp', 'SKIN ROUTINES'], ['How to build a hydration ritual', 'Small, consistent steps for skin that feels comfortably hydrated.', '/images/products/dew-veil.webp', 'INGREDIENT NOTES'], ['Get to know your skin barrier', 'A simple introduction to the role of your skin barrier and everyday care.', '/images/products/barrier-silk.webp', 'SKIN SCHOOL'], ['The art of double cleansing', 'Why an oil-based first cleanse can be a useful evening ritual.', '/images/products/blossom-melt.webp', 'SKIN ROUTINES'], ['How to layer your skincare', 'A simple order for making the most of your everyday products.', '/images/products/rice-dew.webp', 'SKIN SCHOOL']];
export function Journal() { return <div className="page-shell journal-page">
<div className="page-title">
<span className="eyebrow">NOTES FROM THE VANITY</span>
<h1>The SOYUNÉ <em>journal.</em>
</h1>
<p>Thoughts, rituals and little lessons for your everyday skincare journey.</p>
</div>
<div className="journal-feature">
<img src={articles[0][2]} alt="Skincare journal feature"/>
<div>
<span className="eyebrow">FEATURED STORY · SKIN ROUTINES</span>
<h2>The Korean glass-skin routine.</h2>
<p>A thoughtful approach to layers, hydration and a healthy-looking glow — without making your routine feel complicated.</p>
<Link className="text-link" to="/journal">Explore the journal <ArrowUpRight size={16}/>
</Link>
</div>
</div>
<div className="journal-grid journal-all">{articles.slice(1).map(([t, d, img, tag], i) =>
<article className="journal-card" key={t}>
<div>
<img src={img} alt="" loading="lazy"/>
</div>
<span className="eyebrow">{tag} · 0{i + 2}</span>
<h3>{t}</h3>
<p>{d}</p>
<a className="text-link" href="mailto:hello@soyune.example?subject=SOYUNE%20Journal">Read the story <ArrowUpRight size={15}/>
</a>
</article>)}</div>
<p className="concept-disclaimer">Editorial content is educational and intended as general skincare information, not medical advice.</p>
</div>; }
