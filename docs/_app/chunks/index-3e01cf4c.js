function b() {}
const K = (t) => t;
function at(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function Q(t) {
	return t();
}
function W() {
	return Object.create(null);
}
function x(t) {
	t.forEach(Q);
}
function B(t) {
	return typeof t == 'function';
}
function Mt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let C;
function Pt(t, e) {
	return C || (C = document.createElement('a')), (C.href = e), t === C.href;
}
function ft(t) {
	return Object.keys(t).length === 0;
}
function _t(t, ...e) {
	if (t == null) return b;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Rt(t, e, n) {
	t.$$.on_destroy.push(_t(e, n));
}
function Lt(t, e, n, i) {
	if (t) {
		const r = U(t, e, n, i);
		return t[0](r);
	}
}
function U(t, e, n, i) {
	return t[1] && i ? at(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function zt(t, e, n, i) {
	if (t[2] && i) {
		const r = t[2](i(n));
		if (e.dirty === void 0) return r;
		if (typeof r == 'object') {
			const o = [],
				c = Math.max(e.dirty.length, r.length);
			for (let l = 0; l < c; l += 1) o[l] = e.dirty[l] | r[l];
			return o;
		}
		return e.dirty | r;
	}
	return e.dirty;
}
function Bt(t, e, n, i, r, o) {
	if (r) {
		const c = U(e, n, i, o);
		t.p(c, r);
	}
}
function Ft(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Ht(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function It(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
const V = typeof window != 'undefined';
let X = V ? () => window.performance.now() : () => Date.now(),
	F = V ? (t) => requestAnimationFrame(t) : b;
const g = new Set();
function Y(t) {
	g.forEach((e) => {
		e.c(t) || (g.delete(e), e.f());
	}),
		g.size !== 0 && F(Y);
}
function Z(t) {
	let e;
	return (
		g.size === 0 && F(Y),
		{
			promise: new Promise((n) => {
				g.add((e = { c: t, f: n }));
			}),
			abort() {
				g.delete(e);
			}
		}
	);
}
let M = !1;
function dt() {
	M = !0;
}
function ht() {
	M = !1;
}
function mt(t, e, n, i) {
	for (; t < e; ) {
		const r = t + ((e - t) >> 1);
		n(r) <= i ? (t = r + 1) : (e = r);
	}
	return t;
}
function pt(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const s = [];
		for (let u = 0; u < e.length; u++) {
			const f = e[u];
			f.claim_order !== void 0 && s.push(f);
		}
		e = s;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let r = 0;
	for (let s = 0; s < e.length; s++) {
		const u = e[s].claim_order,
			f = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : mt(1, r, (_) => e[n[_]].claim_order, u)) - 1;
		i[s] = n[f] + 1;
		const a = f + 1;
		(n[a] = s), (r = Math.max(a, r));
	}
	const o = [],
		c = [];
	let l = e.length - 1;
	for (let s = n[r] + 1; s != 0; s = i[s - 1]) {
		for (o.push(e[s - 1]); l >= s; l--) c.push(e[l]);
		l--;
	}
	for (; l >= 0; l--) c.push(e[l]);
	o.reverse(), c.sort((s, u) => s.claim_order - u.claim_order);
	for (let s = 0, u = 0; s < c.length; s++) {
		for (; u < o.length && c[s].claim_order >= o[u].claim_order; ) u++;
		const f = u < o.length ? o[u] : null;
		t.insertBefore(c[s], f);
	}
}
function yt(t, e) {
	t.appendChild(e);
}
function tt(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function gt(t) {
	const e = et('style');
	return bt(tt(t), e), e.sheet;
}
function bt(t, e) {
	yt(t.head || t, e);
}
function xt(t, e) {
	if (M) {
		for (
			pt(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Wt(t, e, n) {
	M && !n ? xt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function $t(t) {
	t.parentNode.removeChild(t);
}
function Gt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function et(t) {
	return document.createElement(t);
}
function H(t) {
	return document.createTextNode(t);
}
function Jt() {
	return H(' ');
}
function Kt() {
	return H('');
}
function Qt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function wt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ut(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
			? (t.style.cssText = e[i])
			: i === '__value'
			? (t.value = t[i] = e[i])
			: n[i] && n[i].set
			? (t[i] = e[i])
			: wt(t, i, e[i]);
}
function vt(t) {
	return Array.from(t.childNodes);
}
function kt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function nt(t, e, n, i, r = !1) {
	kt(t);
	const o = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const l = t[c];
			if (e(l)) {
				const s = n(l);
				return s === void 0 ? t.splice(c, 1) : (t[c] = s), r || (t.claim_info.last_index = c), l;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const l = t[c];
			if (e(l)) {
				const s = n(l);
				return (
					s === void 0 ? t.splice(c, 1) : (t[c] = s),
					r ? s === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					l
				);
			}
		}
		return i();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function Et(t, e, n, i) {
	return nt(
		t,
		(r) => r.nodeName === e,
		(r) => {
			const o = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const l = r.attributes[c];
				n[l.name] || o.push(l.name);
			}
			o.forEach((c) => r.removeAttribute(c));
		},
		() => i(e)
	);
}
function Vt(t, e, n) {
	return Et(t, e, n, et);
}
function At(t, e) {
	return nt(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => H(e),
		!0
	);
}
function Xt(t) {
	return At(t, ' ');
}
function Yt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function Zt(t, e, n, i) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function te(t, e, n) {
	t.classList[n ? 'add' : 'remove'](e);
}
function it(t, e, n = !1) {
	const i = document.createEvent('CustomEvent');
	return i.initCustomEvent(t, n, !1, e), i;
}
function ee(t, e = document.body) {
	return Array.from(e.querySelectorAll(t));
}
const T = new Map();
let q = 0;
function jt(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function Ct(t, e) {
	const n = { stylesheet: gt(e), rules: {} };
	return T.set(t, n), n;
}
function rt(t, e, n, i, r, o, c, l = 0) {
	const s = 16.666 / i;
	let u = `{
`;
	for (let m = 0; m <= 1; m += s) {
		const j = e + (n - e) * o(m);
		u +=
			m * 100 +
			`%{${c(j, 1 - j)}}
`;
	}
	const f =
			u +
			`100% {${c(n, 1 - n)}}
}`,
		a = `__svelte_${jt(f)}_${l}`,
		_ = tt(t),
		{ stylesheet: d, rules: h } = T.get(_) || Ct(_, t);
	h[a] || ((h[a] = !0), d.insertRule(`@keyframes ${a} ${f}`, d.cssRules.length));
	const p = t.style.animation || '';
	return (t.style.animation = `${p ? `${p}, ` : ''}${a} ${i}ms linear ${r}ms 1 both`), (q += 1), a;
}
function L(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf('__svelte') === -1),
		r = n.length - i.length;
	r && ((t.style.animation = i.join(', ')), (q -= r), q || Nt());
}
function Nt() {
	F(() => {
		q ||
			(T.forEach((t) => {
				const { stylesheet: e } = t;
				let n = e.cssRules.length;
				for (; n--; ) e.deleteRule(n);
				t.rules = {};
			}),
			T.clear());
	});
}
let k;
function v(t) {
	k = t;
}
function A() {
	if (!k) throw new Error('Function called outside component initialization');
	return k;
}
function ne(t) {
	A().$$.on_mount.push(t);
}
function ie(t) {
	A().$$.after_update.push(t);
}
function re() {
	const t = A();
	return (e, n) => {
		const i = t.$$.callbacks[e];
		if (i) {
			const r = it(e, n);
			i.slice().forEach((o) => {
				o.call(t, r);
			});
		}
	};
}
function se(t, e) {
	A().$$.context.set(t, e);
}
function ce(t) {
	return A().$$.context.get(t);
}
function oe(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const w = [],
	G = [],
	S = [],
	J = [],
	st = Promise.resolve();
let z = !1;
function ct() {
	z || ((z = !0), st.then(ot));
}
function le() {
	return ct(), st;
}
function E(t) {
	S.push(t);
}
const R = new Set();
let N = 0;
function ot() {
	const t = k;
	do {
		for (; N < w.length; ) {
			const e = w[N];
			N++, v(e), St(e.$$);
		}
		for (v(null), w.length = 0, N = 0; G.length; ) G.pop()();
		for (let e = 0; e < S.length; e += 1) {
			const n = S[e];
			R.has(n) || (R.add(n), n());
		}
		S.length = 0;
	} while (w.length);
	for (; J.length; ) J.pop()();
	(z = !1), R.clear(), v(t);
}
function St(t) {
	if (t.fragment !== null) {
		t.update(), x(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
	}
}
let $;
function lt() {
	return (
		$ ||
			(($ = Promise.resolve()),
			$.then(() => {
				$ = null;
			})),
		$
	);
}
function D(t, e, n) {
	t.dispatchEvent(it(`${e ? 'intro' : 'outro'}${n}`));
}
const O = new Set();
let y;
function ue() {
	y = { r: 0, c: [], p: y };
}
function ae() {
	y.r || x(y.c), (y = y.p);
}
function Ot(t, e) {
	t && t.i && (O.delete(t), t.i(e));
}
function fe(t, e, n, i) {
	if (t && t.o) {
		if (O.has(t)) return;
		O.add(t),
			y.c.push(() => {
				O.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	}
}
const ut = { duration: 0 };
function _e(t, e, n) {
	let i = e(t, n),
		r = !1,
		o,
		c,
		l = 0;
	function s() {
		o && L(t, o);
	}
	function u() {
		const { delay: a = 0, duration: _ = 300, easing: d = K, tick: h = b, css: p } = i || ut;
		p && (o = rt(t, 0, 1, _, a, d, p, l++)), h(0, 1);
		const m = X() + a,
			j = m + _;
		c && c.abort(),
			(r = !0),
			E(() => D(t, !0, 'start')),
			(c = Z((P) => {
				if (r) {
					if (P >= j) return h(1, 0), D(t, !0, 'end'), s(), (r = !1);
					if (P >= m) {
						const I = d((P - m) / _);
						h(I, 1 - I);
					}
				}
				return r;
			}));
	}
	let f = !1;
	return {
		start() {
			f || ((f = !0), L(t), B(i) ? ((i = i()), lt().then(u)) : u());
		},
		invalidate() {
			f = !1;
		},
		end() {
			r && (s(), (r = !1));
		}
	};
}
function de(t, e, n) {
	let i = e(t, n),
		r = !0,
		o;
	const c = y;
	c.r += 1;
	function l() {
		const { delay: s = 0, duration: u = 300, easing: f = K, tick: a = b, css: _ } = i || ut;
		_ && (o = rt(t, 1, 0, u, s, f, _));
		const d = X() + s,
			h = d + u;
		E(() => D(t, !1, 'start')),
			Z((p) => {
				if (r) {
					if (p >= h) return a(0, 1), D(t, !1, 'end'), --c.r || x(c.c), !1;
					if (p >= d) {
						const m = f((p - d) / u);
						a(1 - m, m);
					}
				}
				return r;
			});
	}
	return (
		B(i)
			? lt().then(() => {
					(i = i()), l();
			  })
			: l(),
		{
			end(s) {
				s && i.tick && i.tick(1, 0), r && (o && L(t, o), (r = !1));
			}
		}
	);
}
const he =
	typeof window != 'undefined' ? window : typeof globalThis != 'undefined' ? globalThis : global;
function me(t, e) {
	const n = {},
		i = {},
		r = { $$scope: 1 };
	let o = t.length;
	for (; o--; ) {
		const c = t[o],
			l = e[o];
		if (l) {
			for (const s in c) s in l || (i[s] = 1);
			for (const s in l) r[s] || ((n[s] = l[s]), (r[s] = 1));
			t[o] = l;
		} else for (const s in c) r[s] = 1;
	}
	for (const c in i) c in n || (n[c] = void 0);
	return n;
}
function pe(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function ye(t) {
	t && t.c();
}
function ge(t, e) {
	t && t.l(e);
}
function Tt(t, e, n, i) {
	const { fragment: r, on_mount: o, on_destroy: c, after_update: l } = t.$$;
	r && r.m(e, n),
		i ||
			E(() => {
				const s = o.map(Q).filter(B);
				c ? c.push(...s) : x(s), (t.$$.on_mount = []);
			}),
		l.forEach(E);
}
function qt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(x(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Dt(t, e) {
	t.$$.dirty[0] === -1 && (w.push(t), ct(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function be(t, e, n, i, r, o, c, l = [-1]) {
	const s = k;
	v(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: null,
		props: o,
		update: b,
		not_equal: r,
		bound: W(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (s ? s.$$.context : [])),
		callbacks: W(),
		dirty: l,
		skip_bound: !1,
		root: e.target || s.$$.root
	});
	c && c(u.root);
	let f = !1;
	if (
		((u.ctx = n
			? n(t, e.props || {}, (a, _, ...d) => {
					const h = d.length ? d[0] : _;
					return (
						u.ctx &&
							r(u.ctx[a], (u.ctx[a] = h)) &&
							(!u.skip_bound && u.bound[a] && u.bound[a](h), f && Dt(t, a)),
						_
					);
			  })
			: []),
		u.update(),
		(f = !0),
		x(u.before_update),
		(u.fragment = i ? i(u.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			dt();
			const a = vt(e.target);
			u.fragment && u.fragment.l(a), a.forEach($t);
		} else u.fragment && u.fragment.c();
		e.intro && Ot(t.$$.fragment), Tt(t, e.target, e.anchor, e.customElement), ht(), ot();
	}
	v(s);
}
class xe {
	$destroy() {
		qt(this, 1), (this.$destroy = b);
	}
	$on(e, n) {
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !ft(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	ee as $,
	me as A,
	pe as B,
	qt as C,
	at as D,
	le as E,
	ce as F,
	E as G,
	Ut as H,
	Qt as I,
	B as J,
	Bt as K,
	Ft as L,
	zt as M,
	_e as N,
	de as O,
	x as P,
	It as Q,
	re as R,
	xe as S,
	Ht as T,
	Lt as U,
	oe as V,
	G as W,
	Rt as X,
	Pt as Y,
	te as Z,
	xt as _,
	vt as a,
	Gt as a0,
	he as a1,
	K as a2,
	wt as b,
	Vt as c,
	$t as d,
	et as e,
	Zt as f,
	Wt as g,
	At as h,
	be as i,
	Yt as j,
	Jt as k,
	Kt as l,
	Xt as m,
	b as n,
	ue as o,
	fe as p,
	ae as q,
	Ot as r,
	Mt as s,
	H as t,
	se as u,
	ie as v,
	ne as w,
	ye as x,
	ge as y,
	Tt as z
};
