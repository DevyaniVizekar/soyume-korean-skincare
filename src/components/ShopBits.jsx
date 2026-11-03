import { Link } from 'react-router-dom';
import { Heart, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/CartContext';
export function ProductCard({ product }) { const { add, wishlist, toggleWish } = useStore(); const wished = wishlist.includes(product.id); return <article className="product-card">
<div className="product-image">
<Link to={'/product/' + product.id}>
<img src={product.image} alt={`${product.name} ${product.type}`} loading="lazy" decoding="async"/>
</Link>
<button className={'wish-btn ' + (wished ? 'wished' : '')} onClick={() => toggleWish(product.id)} aria-label="Toggle wishlist">
<Heart size={17} fill={wished ? 'currentColor' : 'none'}/>
</button>
<button className="quick-add" onClick={() => add(product)}>
<ShoppingBag size={15}/> Add to bag</button>
</div>
<div className="product-meta">
<div>
<Link to={'/product/' + product.id} className="product-name">{product.name}</Link>
<p>{product.type}</p>
</div>
<strong>₹{product.price.toLocaleString('en-IN')}</strong>
</div>
<div className="rating">★★★★★ <span>4.9 · Concept product</span>
</div>
</article>; }
export function SectionHeading({ eyebrow, title, copy, link, linkText = 'View all' }) { return <div className="section-heading">
<div>
<span className="eyebrow">{eyebrow}</span>
<h2>{title}</h2>{copy && <p>{copy}</p>}</div>{link && <Link className="text-link" to={link}>{linkText}<ArrowUpRight size={16}/>
</Link>}</div>; }
