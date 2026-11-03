import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../context/CartContext';
import { ProductCard, SectionHeading } from '../components/ShopBits';
export default function Product() { const { id } = useParams(); const p = products.find(x => x.id === Number(id)); const [qty, setQty] = useState(1); const [tab, setTab] = useState('details'); const { add, toggleWish, wishlist } = useStore(); if (!p)
    return <div className="empty-state">
<h2>We couldn't find that product.</h2>
<Link to="/shop" className="button button-dark">Back to shop</Link>
</div>; return <div className="page-shell product-page">
<Link className="back-link" to="/shop">
<ArrowLeft size={15}/> Back to the collection</Link>
<div className="product-detail">
<div className="detail-image">
<img src={p.image} alt={`${p.name} ${p.type}`} loading="eager" decoding="async"/>
</div>
<div className="detail-copy">
<span className="eyebrow">SOYUNÉ · THE DAILY EDIT</span>
<h1>{p.name}</h1>
<h3>{p.type}</h3>
<div className="detail-rating">★★★★★ <span>4.9 · Concept product</span>
</div>
<strong className="detail-price">₹{p.price.toLocaleString('en-IN')}</strong>
<p>{p.desc}</p>
<div className="detail-tags">
<span>Thoughtful skincare</span>
<span>K-beauty inspired</span>
</div>
<div className="buy-row">
<div className="qty-control">
<button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
<Minus size={14}/>
</button>
<span>{qty}</span>
<button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
<Plus size={14}/>
</button>
</div>
<button className="button button-dark add-detail" onClick={() => { for (let i = 0; i < qty; i++)
    add(p); }}>
<ShoppingBag size={16}/> Add to bag</button>
<button className={'detail-wish ' + (wishlist.includes(p.id) ? 'wished' : '')} onClick={() => toggleWish(p.id)} aria-label="Toggle wishlist">
<Heart fill={wishlist.includes(p.id) ? 'currentColor' : 'none'}/>
</button>
</div>
<div className="detail-tabs">
<div>{[['details', 'The details'], ['ingredients', 'Ingredients'], ['how', 'How to use']].map(([k, t]) =>
<button className={tab === k ? 'selected' : ''} onClick={() => setTab(k)} key={k}>{t}</button>)}</div>{tab === 'details' ? <p>{p.benefit}</p> : tab === 'ingredients' ? <p>{p.ingredients}. Thoughtfully selected for a comfortable, everyday skincare ritual.</p> : <p>{p.use}</p>}</div>
<small className="concept-note">SOYUNÉ is a fictional skincare concept brand. Product details are for portfolio demonstration only.</small>
</div>
</div>
<section className="related-products">
<SectionHeading eyebrow="A LITTLE SOMETHING TO PAIR" title="Complete your ritual."/>
<div className="product-grid">{products.filter(x => x.id !== p.id).slice(0, 4).map(x =>
<ProductCard key={x.id} product={x}/>)}</div>
</section>
</div>; }
