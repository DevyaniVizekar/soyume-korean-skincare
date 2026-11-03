import { useState as ReactUseState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Sun, Moon, Droplets, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard, SectionHeading } from '../components/ShopBits';
const concerns = [['Hydration', 'A fresh drink of moisture.', '/images/products/dew-veil.webp'], ['Acne & Blemishes', 'Balance, without the fuss.', '/images/products/pore-balance.webp'], ['Brightening', 'Bring back your natural-looking glow.', '/images/products/bright-reveal.webp'], ['Skin Barrier', 'Comfort for your everyday skin.', '/images/products/barrier-silk.webp'], ['Anti-Ageing', 'A softer, replenished-looking finish.', '/images/products/peptide-renewal.webp'], ['Lip Care', 'A little gloss, a lot of care.', '/images/products/dew-drop.webp']];
export default function Home() {
    return <>
<section className="hero">
<div className="hero-copy">
<span className="eyebrow">THE SOYUNÉ SKIN RITUAL</span>
<h1>The art of<br />
<em>skin that glows.</em>
</h1>
<p>Discover the beauty of Korean-inspired skincare, thoughtfully created for hydrated, healthy-looking, radiant skin.</p>
<div className="hero-ctas">
<Link className="button button-dark" to="/shop">Explore collection <ArrowRight size={16}/>
</Link>
<Link className="button button-light" to="/about">Discover SOYUNÉ</Link>
</div>
<div className="hero-note">
<span className="note-line"/> A little more care. A little more you.</div>
</div>
<div className="hero-photo">
<img src="/images/hero-model.webp" alt="Luminous skincare editorial portrait" width="1736" height="2304" fetchPriority="high" decoding="async"/>
<div className="hero-caption">
<span>01 / THE GLOW EDIT</span>
<span>Skin, in its own light.</span>
</div>
</div>
</section>
<div className="trust-strip">
<span>THOUGHTFUL FORMULAS</span>
<i>✳</i>
<span>EVERYDAY SKIN RITUALS</span>
<i>✳</i>
<span>K-BEAUTY INSPIRED</span>
<i>✳</i>
<span>MADE FOR YOUR MOMENT</span>
</div>
<section className="intro section-wrap">
<div className="intro-image">
<img src="/images/secondary-model.webp" alt="Soft, luminous beauty portrait" width="1728" height="2304" loading="lazy" decoding="async"/>
<span className="image-stamp">A MOMENT<br />FOR YOU</span>
</div>
<div className="intro-copy">
<span className="eyebrow">A MORE MINDFUL KIND OF GLOW</span>
<h2>Beauty in<br />
<em>every layer.</em>
</h2>
<p>SOYUNÉ brings a thoughtful approach to the little things you do for your skin. Inspired by the care and intention of Korean beauty rituals, our edit is made for simple, feel-good routines — one gentle layer at a time.</p>
<p className="muted-copy">Because skincare should feel like a moment you look forward to.</p>
<Link className="text-link" to="/about">Explore our philosophy <ArrowUpRight size={16}/>
</Link>
</div>
</section>
<section className="concerns section-wrap" id="collections">
<SectionHeading eyebrow="FIND YOUR SKIN RITUAL" title="Care, by concern." copy="A considered edit for wherever your skin is today."/>
<div className="concern-grid">{concerns.map(([name, desc, img], i) =>
<Link to={'/shop?category=' + encodeURIComponent(name)} className="concern-card" key={name}>
<div className="concern-img">
<img src={img} alt="" loading="lazy"/>
<span>0{i + 1}</span>
</div>
<div>
<h3>{name}</h3>
<p>{desc}</p>
<ArrowUpRight size={17}/>
</div>
</Link>)}</div>
</section>
<section className="bestsellers section-wrap" id="bestsellers">
<SectionHeading eyebrow="THE SOYUNÉ EDIT" title="Everyday, elevated." copy="Your everyday essentials for a naturally radiant-looking complexion." link="/shop" linkText="Shop all products"/>
<div className="product-grid">{[products[0], products[1], products[8], products[9]].map(p =>
<ProductCard product={p} key={p.id}/>)}</div>
</section>
<section className="ingredient-band" id="ingredients">
<div className="ingredient-photo">
<img src="/images/products/rice-dew.webp" alt="Rice Dew milky toner" loading="lazy"/>
</div>
<div className="ingredient-copy">
<span className="eyebrow">A LITTLE INGREDIENT KNOW-HOW</span>
<h2>Good skin starts<br />with <em>good ingredients.</em>
</h2>
<p>From comforting centella to moisture-loving hyaluronic acid, discover familiar skincare favourites chosen for thoughtful, everyday routines.</p>
<div className="ingredient-list">
<span>
<Droplets /> Hyaluronic Acid</span>
<span>
<Sparkles /> Niacinamide</span>
<span>
<Check /> Ceramides</span>
<span>
<Sun /> Rice Extract</span>
</div>
<a href="/#ritual" className="text-link">Explore the ingredients <ArrowUpRight size={16}/>
</a>
</div>
</section>
<section className="routine section-wrap" id="ritual">
<div className="routine-head">
<span className="eyebrow">LESS RUSH, MORE RITUAL</span>
<h2>The beauty of a<br />
<em>thoughtful routine.</em>
</h2>
<p>Skincare is not about doing everything. It is about finding the layers that feel right for you.</p>
</div>
<div className="routine-columns">
<div className="routine-card">
<div className="routine-icon">
<Sun />
</div>
<span className="eyebrow">01 / MORNING</span>
<h3>A fresh start.</h3>{['Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'].map((x, i) =>
<div className="routine-step" key={x}>
<b>0{i + 1}</b>
<span>{x}</span>
<small>{['A gentle refresh', 'A first layer of comfort', 'Target your skin goals', 'Seal in hydration', 'Daily sun protection'][i]}</small>
</div>)}</div>
<div className="routine-card evening">
<div className="routine-icon">
<Moon />
</div>
<span className="eyebrow">02 / EVENING</span>
<h3>Unwind & replenish.</h3>{['Cleansing Balm', 'Cleanser', 'Toner', 'Essence', 'Serum', 'Moisturizer or Mask'].map((x, i) =>
<div className="routine-step" key={x}>
<b>0{i + 1}</b>
<span>{x}</span>
<small>{['Melt away the day', 'A clean, soft canvas', 'Restore a little moisture', 'Add a comforting layer', 'Care for your skin goals', 'Finish with nourishment'][i]}</small>
</div>)}</div>
</div>
</section>
<section className="story-banner">
<img src="/images/secondary-model.webp" alt="SOYUNÉ skincare editorial" loading="lazy"/>
<div className="story-overlay">
<span className="eyebrow">THE SOYUNÉ POINT OF VIEW</span>
<h2>A little more care.<br />
<em>A little more you.</em>
</h2>
<p>Inspired by Korean skincare rituals and the belief that consistency can be its own kind of self-care.</p>
<Link className="button button-light" to="/about">Our story <ArrowRight size={16}/>
</Link>
</div>
</section>
<section className="spotlight section-wrap">
<div className="spotlight-image">
<img src={products[9].image} alt="Water Bloom Hydrogel Mask" loading="lazy"/>
</div>
<div className="spotlight-copy">
<span className="eyebrow">YOUR LITTLE RESET</span>
<h2>Meet your moment<br />of <em>Water Bloom.</em>
</h2>
<p>A cooling hydrogel mask for the days your skin could use a little extra comfort and a fresh, dewy-looking finish.</p>
<div className="mini-tags">
<span>HYALURONIC ACID</span>
<span>ALLANTOIN</span>
<span>15–20 MIN RITUAL</span>
</div>
<Link className="button button-dark" to="/product/10">Discover Water Bloom <ArrowRight size={16}/>
</Link>
</div>
</section>
<section className="reviews section-wrap">
<SectionHeading eyebrow="KIND WORDS, FICTIONAL FACES" title="A softer kind of self-care." copy="Sample testimonials shown for this concept-store portfolio experience."/>
<div className="review-grid">{[['Mira S.', '“The milky textures make my evening routine feel like a little reset.”', 'Rice Dew'], ['Ananya R.', '“A lovely, simple edit. The packaging is as dreamy as the ritual.”', 'Barrier Silk'], ['Rhea K.', '“Water Bloom is my favourite at-home pamper moment.”', 'Water Bloom']].map(([n, t, p]) =>
<div className="review" key={n}>
<div className="review-stars">★★★★★</div>
<p>{t}</p>
<b>{n}</b>
<small>{p} · Sample review</small>
</div>)}</div>
</section>
<section className="journal-preview section-wrap">
<SectionHeading eyebrow="NOTES FROM THE VANITY" title="The SOYUNÉ journal." link="/journal" linkText="Visit the journal"/>
<div className="journal-grid">{[['The Korean glass-skin routine', 'A gentle guide to layering for a fresh, dewy-looking finish.', '/images/secondary-model.webp'], ['How to build a hydration ritual', 'Small, consistent steps for skin that feels comfortably hydrated.', '/images/products/dew-veil.webp'], ['Get to know your skin barrier', 'Why a thoughtful, gentle routine can make all the difference.', '/images/products/barrier-silk.webp']].map(([t, d, img], i) =>
<Link className="journal-card" to="/journal" key={t}>
<div>
<img src={img} alt="" loading="lazy"/>
</div>
<span className="eyebrow">SKIN NOTES · 0{i + 1}</span>
<h3>{t}</h3>
<p>{d}</p>
<span className="text-link">Read the story <ArrowUpRight size={15}/>
</span>
</Link>)}</div>
</section>
<section className="newsletter">
<span className="eyebrow">A LITTLE NOTE FROM US</span>
<h2>A little glow in<br />
<em>your inbox.</em>
</h2>
<p>Join the SOYUNÉ community for skincare inspiration, new edits and thoughtful updates.</p>
<NewsletterForm />
</section>
</>;
}
function NewsletterForm() { const [email, setEmail] = ReactUseState(''); const [message, setMessage] = ReactUseState(''); function submit(e) { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) {
    setMessage('Please enter a valid email address.');
    return;
} setMessage('You’re on the list — thank you for joining SOYUNÉ.'); setEmail(''); } return <form className="newsletter-form" onSubmit={submit}>
<input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email address"/>
<button className="button button-dark">Subscribe <ArrowRight size={15}/>
</button>
<small>{message || 'By subscribing, you agree to receive occasional notes from SOYUNÉ.'}</small>
</form>; }
