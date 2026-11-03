import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Search, UserRound, Heart, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useStore } from '../context/CartContext';
export function Header() { const [open, setOpen] = useState(false), [search, setSearch] = useState(false), [term, setTerm] = useState(''); const { count, wishlist } = useStore(); const nav = useNavigate(); const goSearch = e => { e.preventDefault(); nav('/shop?q=' + encodeURIComponent(term)); setSearch(false); setTerm(''); }; return <>
<div className="announcement">A little ritual, a lot of glow <span>·</span> Complimentary shipping on orders above ₹999</div>
<header className="header">
<button className="icon mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
<nav className={'nav-links ' + (open ? 'nav-open' : '')}>
<NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
<a href="/#collections" onClick={() => setOpen(false)}>Collections</a>
<a href="/#bestsellers" onClick={() => setOpen(false)}>Bestsellers</a>
<NavLink to="/about" onClick={() => setOpen(false)}>Our Story</NavLink>
<NavLink to="/journal" onClick={() => setOpen(false)}>Journal</NavLink>
</nav>
<Link to="/" className="brand-mark">
<img src="/images/logo.png" alt="SOYUNÉ Korean Skincare"/>
</Link>
<div className="header-actions">
<button className="icon" aria-label="Search" onClick={() => setSearch(!search)}>
<Search />
</button>
<button className="icon account-icon" aria-label="Account" onClick={() => alert('Your SOYUNÉ account space is coming soon.')}>
<UserRound />
</button>
<Link className="icon with-count" aria-label="Wishlist" to="/shop?wishlist=true">
<Heart />{wishlist.length > 0 && <i>{wishlist.length}</i>}</Link>
<Link className="icon with-count" aria-label="Shopping bag" to="/cart">
<ShoppingBag />{count > 0 && <i>{count}</i>}</Link>
</div>
</header>{search && <form className="search-panel" onSubmit={goSearch}>
<Search size={18}/>
<input autoFocus placeholder="Search your skincare essentials…" value={term} onChange={e => setTerm(e.target.value)}/>
<button>Search</button>
</form>}</>; }
export function Footer() { return <footer className="footer">
<div className="footer-top">
<div className="footer-brand">
<img src="/images/logo.png" alt="SOYUNÉ"/>
<p>Thoughtful skincare. Beautifully simple rituals.</p>
<a className="social" href="https://instagram.com" target="_blank" rel="noreferrer">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
<rect x="3" y="3" width="18" height="18" rx="5"/>
<circle cx="12" cy="12" r="4"/>
<circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
</svg> Follow our rituals <ArrowUpRight size={14}/>
</a>
</div>
<div>
<h4>SHOP</h4>
<Link to="/shop">All Products</Link>
<a href="/#bestsellers">Bestsellers</a>
<a href="/shop?category=Serums">Serums</a>
<a href="/shop?category=Cleansers">Cleansers</a>
</div>
<div>
<h4>ABOUT</h4>
<Link to="/about">Our Story</Link>
<Link to="/about">Our Philosophy</Link>
<a href="/#ingredients">Ingredients</a>
<Link to="/journal">Beauty Journal</Link>
</div>
<div>
<h4>HELP</h4>
<a href="mailto:hello@soyune.example">Contact Us</a>
<a href="/#faq">FAQs</a>
<a href="/#shipping">Shipping Information</a>
<a href="/#returns">Returns & Refunds</a>
</div>
</div>
<div className="footer-bottom">
<span>© 2026 SOYUNÉ. A skincare concept created with care.</span>
<span>Privacy&nbsp;&nbsp; · &nbsp;&nbsp;Terms&nbsp;&nbsp; · &nbsp;&nbsp;Made for your everyday glow</span>
</div>
</footer>; }
export default function Layout() { return <>
<Header />
<main>
<Outlet />
</main>
<Footer />
</>; }
