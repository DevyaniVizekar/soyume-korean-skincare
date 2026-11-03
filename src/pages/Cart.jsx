import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/CartContext';
export default function Cart() { const { cart, remove, qty, total } = useStore(); return <div className="page-shell cart-page">
<div className="page-title">
<span className="eyebrow">YOUR LITTLE LINE-UP</span>
<h1>Shopping <em>bag.</em>
</h1>
<p>{cart.length ? `You have ${cart.length} thoughtfully chosen item${cart.length > 1 ? 's' : ''} in your bag.` : 'Your bag is waiting for a little something.'}</p>
</div>{!cart.length ? <div className="empty-state">
<ShoppingBag size={35}/>
<h2>Your bag feels a little light.</h2>
<p>Discover your next everyday essential.</p>
<Link to="/shop" className="button button-dark">Explore the collection <ArrowRight size={15}/>
</Link>
</div> : <div className="cart-layout">
<div className="cart-items">{cart.map(p =>
<article className="cart-item" key={p.id}>
<Link to={'/product/' + p.id}>
<img src={p.image} alt={p.name}/>
</Link>
<div className="cart-info">
<Link to={'/product/' + p.id}>
<h3>{p.name}</h3>
</Link>
<p>{p.type}</p>
<strong>₹{p.price.toLocaleString('en-IN')}</strong>
<div className="qty-control">
<button onClick={() => qty(p.id, p.qty - 1)} aria-label="Decrease">
<Minus size={13}/>
</button>
<span>{p.qty}</span>
<button onClick={() => qty(p.id, p.qty + 1)} aria-label="Increase">
<Plus size={13}/>
</button>
</div>
</div>
<button className="remove-btn" onClick={() => remove(p.id)} aria-label="Remove item">
<Trash2 size={17}/>
</button>
</article>)}</div>
<aside className="order-summary">
<span className="eyebrow">A LITTLE SUMMARY</span>
<h2>Your order.</h2>
<div>
<span>Subtotal</span>
<b>₹{total.toLocaleString('en-IN')}</b>
</div>
<div>
<span>Shipping</span>
<b>{total >= 999 ? 'Complimentary' : '₹99'}</b>
</div>
<p>{total >= 999 ? 'Your order qualifies for complimentary shipping.' : 'Add a little more to enjoy complimentary shipping above ₹999.'}</p>
<div className="summary-total">
<span>Estimated total</span>
<strong>₹{(total + (total >= 999 ? 0 : 99)).toLocaleString('en-IN')}</strong>
</div>
<button className="button button-dark checkout" onClick={() => alert('This portfolio demo does not process real payments. Thank you for exploring SOYUNÉ!')}>Continue to checkout <ArrowRight size={16}/>
</button>
<Link to="/shop" className="continue-link">Continue shopping</Link>
<small>Secure checkout experience preview · No payment is collected.</small>
</aside>
</div>}</div>; }
