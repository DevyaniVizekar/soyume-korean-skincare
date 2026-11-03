import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ShopBits';
import { useStore } from '../context/CartContext';
export default function Shop() { const [params] = useSearchParams(); const [category, setCategory] = useState(params.get('category') || 'All'); const [sort, setSort] = useState('featured'); const [query, setQuery] = useState(params.get('q') || ''); const [max, setMax] = useState('all'); const [onlyWish, setOnlyWish] = useState(params.get('wishlist') === 'true'); const { wishlist } = useStore(); const categories = ['All', ...new Set(products.map(p => p.category))]; const filtered = useMemo(() => { let a = products.filter(p => (category === 'All' || p.category === category) && (`${p.name} ${p.type} ${p.ingredients}`.toLowerCase().includes(query.toLowerCase())) && (max === 'all' || p.price <= Number(max)) && (!onlyWish || wishlist.includes(p.id))); if (sort === 'low')
    a.sort((x, y) => x.price - y.price); if (sort === 'high')
    a.sort((x, y) => y.price - x.price); if (sort === 'az')
    a.sort((x, y) => x.name.localeCompare(y.name)); return a; }, [category, sort, query, max, onlyWish, wishlist]); return <div className="page-shell">
<div className="page-title">
<span className="eyebrow">THE COMPLETE EDIT</span>
<h1>Find your <em>feel-good ritual.</em>
</h1>
<p>Thoughtful essentials for the everyday moments that make a difference.</p>
</div>
<div className="shop-toolbar">
<div className="category-pills">{categories.map(c =>
<button className={category === c ? 'active' : ''} key={c} onClick={() => setCategory(c)}>{c}</button>)}</div>
<div className="shop-controls">
<label className="search-input">
<SlidersHorizontal size={15}/>
<input placeholder="Find a product" value={query} onChange={e => setQuery(e.target.value)}/>
</label>
<select value={max} onChange={e => setMax(e.target.value)} aria-label="Filter by price">
<option value="all">All prices</option>
<option value="1000">Under ₹1,000</option>
<option value="1500">Under ₹1,500</option>
<option value="2000">Under ₹2,000</option>
</select>
<select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products">
<option value="featured">Featured</option>
<option value="low">Price: low to high</option>
<option value="high">Price: high to low</option>
<option value="az">Name: A–Z</option>
</select>
<button className={'filter-wish ' + (onlyWish ? 'active' : '')} onClick={() => setOnlyWish(!onlyWish)}>♡ Wishlist</button>
</div>
</div>
<p className="result-count">Showing {filtered.length} of 15 considered essentials</p>{filtered.length ? <div className="product-grid shop-grid">{filtered.map(p =>
<ProductCard product={p} key={p.id}/>)}</div> : <div className="empty-state">
<h2>No products found just yet.</h2>
<p>Try another search or clear your filters.</p>
<button className="button button-dark" onClick={() => { setCategory('All'); setQuery(''); setMax('all'); setOnlyWish(false); }}>Clear filters</button>
</div>}</div>; }
