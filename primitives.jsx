/* Shared primitives for MOR design-system prototype.
   Exports onto window so other Babel <script> files can use them. */

const TOKENS = {
  color: {
    forest:      { hex: '#1B4332', role: 'Primary',     name: 'Forest' },
    grove:       { hex: '#2D6A4F', role: 'Secondary',   name: 'Grove' },
    moss:        { hex: '#52796F', role: 'Tertiary',    name: 'Moss' },
    brass:       { hex: '#B5892A', role: 'Accent',      name: 'Brass' },
    'brass-soft':{ hex: '#D4A84A', role: 'Accent · Soft', name: 'Brass Soft' },
    ivory:       { hex: '#F5F1EB', role: 'Neutral',     name: 'Ivory' },
    'ivory-deep':{ hex: '#ECE6DA', role: 'Neutral · Deep', name: 'Ivory Deep' },
    parchment:   { hex: '#FAF7F1', role: 'Surface',     name: 'Parchment' },
    slate:       { hex: '#4A5568', role: 'Support',     name: 'Slate' },
    'slate-soft':{ hex: '#7A8290', role: 'Support · Soft', name: 'Slate Soft' },
    ink:         { hex: '#1C1C1C', role: 'Type',        name: 'Ink' },
    ash:         { hex: '#3D3D3D', role: 'Type · Soft', name: 'Ash' },
  },
  type: {
    display: { family: "'Cormorant Garamond', serif", role: 'Display & Headings', sample: 'Wealth with Purpose.' },
    body:    { family: "'DM Sans', sans-serif", role: 'Body & UI', sample: 'A measured approach to wealth.' },
    mono:    { family: "'JetBrains Mono', monospace", role: 'Code & Data', sample: 'AAPL · 0.42% YTD' },
  },
  scale: [
    { name: 'Display XL', cls: 'tf-display-xl', size: '72px', lh: '1.02', weight: 400, family: 'display' },
    { name: 'Display L',  cls: 'tf-display-l',  size: '56px', lh: '1.05', weight: 400, family: 'display' },
    { name: 'Display M',  cls: 'tf-display-m',  size: '40px', lh: '1.1',  weight: 500, family: 'display' },
    { name: 'Heading',    cls: 'tf-heading',    size: '28px', lh: '1.2',  weight: 500, family: 'display' },
    { name: 'Subhead',    cls: 'tf-subhead',    size: '20px', lh: '1.35', weight: 400, family: 'display' },
    { name: 'Lede',       cls: 'tf-lede',       size: '18px', lh: '1.55', weight: 400, family: 'body' },
    { name: 'Body',       cls: 'tf-body',       size: '15px', lh: '1.65', weight: 400, family: 'body' },
    { name: 'Caption',    cls: 'tf-caption',    size: '13px', lh: '1.5',  weight: 400, family: 'body' },
    { name: 'Eyebrow',    cls: 'tf-eyebrow',    size: '10px', lh: '1.4',  weight: 500, family: 'body' },
  ],
  space: [
    { token: '--space-1', val: '4px',  use: 'Hairlines, icon insets' },
    { token: '--space-2', val: '8px',  use: 'Tight grouping' },
    { token: '--space-3', val: '12px', use: 'Inline gaps' },
    { token: '--space-4', val: '16px', use: 'Default rhythm' },
    { token: '--space-5', val: '24px', use: 'Block spacing' },
    { token: '--space-6', val: '32px', use: 'Section breaks' },
    { token: '--space-7', val: '48px', use: 'Major rhythm' },
    { token: '--space-8', val: '64px', use: 'Page padding' },
    { token: '--space-9', val: '96px', use: 'Section padding' },
  ],
  radius: [
    { token: '--radius-0', val: '0px',  use: 'Documents, formal surfaces' },
    { token: '--radius-1', val: '2px',  use: 'Inputs, badges' },
    { token: '--radius-2', val: '4px',  use: 'Cards, buttons' },
    { token: '--radius-3', val: '8px',  use: 'Modals, large surfaces' },
    { token: '--radius-pill', val: '999px', use: 'Tags, pills, avatars' },
  ],
  voice: {
    adjectives: [
      { word: 'Warmly Principled', def: 'Conviction without coldness. We have a point of view and we share it like a friend.' },
      { word: 'Transparent',       def: 'Plain language. Real numbers. We never hide behind jargon.' },
      { word: 'Philadelphia-Rooted', def: 'Specific, local, civic. The city\u2019s ethical-commerce tradition is in our bones.' },
      { word: 'Accessible',        def: 'You don\u2019t need an MBA to understand us. Wealth talk that respects the reader.' },
      { word: 'Confident',         def: 'A decade of evidence behind us. We don\u2019t over-explain what we\u2019ve already done.' },
    ],
    pairs: [
      {
        yes: '"A little tax-loss harvesting never hurt nobody."',
        no:  '"Leverage proprietary tax optimization solutions for HNW clients."',
        ctx: 'Blog headline · conversational register',
      },
      {
        yes: '"We measure success by how your wealth performs \u2014 and by what it stands for."',
        no:  '"MOR is committed to maximizing risk-adjusted stakeholder value."',
        ctx: 'Web hero · formal register',
      },
      {
        yes: '"Dear Clients and Friends \u2014 ten years of giving with purpose, and counting."',
        no:  '"Q3 portfolio performance metrics are now available for review."',
        ctx: 'Email · relational register',
      },
      {
        yes: '"Your portfolio can reflect your values. Performance does not have to be the price."',
        no:  '"SRI strategies may underperform conventional benchmarks (see disclosures)."',
        ctx: 'Pitch · principled register',
      },
    ],
  },
};

/* ---------------- Eyebrow / Section header ---------------- */
function SectionHead({ eyebrow, title, sub, mark }) {
  return (
    <header style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        {mark ? <TripleMark size="sm" muted /> : null}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="rule-thin" style={{ marginBottom: 18 }} />
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        fontSize: 44,
        lineHeight: 1.05,
        color: 'var(--forest)',
        letterSpacing: '-0.01em',
        marginBottom: sub ? 10 : 0,
      }}>{title}</h2>
      {sub ? (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          lineHeight: 1.65,
          color: 'var(--ash)',
          maxWidth: 680,
        }}>{sub}</p>
      ) : null}
    </header>
  );
}

/* ---------------- TripleMark ----------------
   Three ascending bars: Brass / Forest / Slate
   = People / Planet / Profit. Pure CSS. */
function TripleMark({ size = 'md', vertical = false, muted = false, colors }) {
  const heights = { sm: 1.5, md: 2, lg: 3, xl: 4 }[size] || 2;
  const widths = { sm: [6, 11, 16], md: [10, 18, 26], lg: [14, 26, 38], xl: [20, 36, 52] }[size] || [10, 18, 26];
  const palette = colors || (muted
    ? ['rgba(181,137,42,0.55)', 'rgba(27,67,50,0.55)', 'rgba(74,85,104,0.55)']
    : ['#B5892A', '#1B4332', '#4A5568']);
  return (
    <span
      aria-label="MOR triple-rule mark"
      style={{
        display: 'inline-flex',
        flexDirection: vertical ? 'row' : 'column',
        alignItems: vertical ? 'flex-end' : 'flex-start',
        justifyContent: 'flex-end',
        gap: heights >= 3 ? 5 : 3,
      }}
    >
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            display: 'block',
            background: palette[i],
            borderRadius: 1,
            ...(vertical
              ? { width: heights, height: widths[i] }
              : { height: heights, width: widths[i] }),
          }}
        />
      ))}
    </span>
  );
}

/* ---------------- Wordmark / Lockup ---------------- */
function MorWordmark({ size = 'md', color = 'var(--forest)', tagline = true, lockup = 'horizontal' }) {
  const sizes = {
    sm: { word: 18, sub: 8, gap: 10 },
    md: { word: 28, sub: 9, gap: 14 },
    lg: { word: 44, sub: 11, gap: 20 },
    xl: { word: 72, sub: 13, gap: 28 },
  }[size] || { word: 28, sub: 9, gap: 14 };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: lockup === 'horizontal' ? 'center' : 'flex-start',
      flexDirection: lockup === 'horizontal' ? 'row' : 'column',
      gap: sizes.gap,
      color,
    }}>
      <TripleMark size={size === 'xl' ? 'xl' : size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: sizes.word,
          letterSpacing: '0.15em',
          color,
          lineHeight: 1,
        }}>MOR</span>
        {tagline ? (
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: sizes.sub,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color,
            opacity: 0.7,
            marginTop: sizes.word * 0.18,
          }}>Wealth&nbsp;Management</span>
        ) : null}
      </span>
    </span>
  );
}

/* ---------------- BCorp pseudo-mark (placeholder, recognizable but original) ---------------- */
function BCorpMark({ inverted = false, size = 22 }) {
  const fg = inverted ? 'var(--ivory)' : 'var(--forest)';
  const bg = inverted ? 'transparent' : 'transparent';
  return (
    <span
      title="Certified B Corporation (placeholder)"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 8px',
        border: `1px solid ${inverted ? 'rgba(245,241,235,0.5)' : 'rgba(27,67,50,0.35)'}`,
        borderRadius: 2,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: size * 0.42,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: fg,
        background: bg,
        fontWeight: 500,
      }}
    >
      <span style={{
        width: size * 0.56, height: size * 0.56, borderRadius: '50%',
        border: `1.5px solid ${fg}`, display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: size * 0.4, fontWeight: 500,
        fontStyle: 'italic',
      }}>B</span>
      <span>Certified</span>
    </span>
  );
}

/* ---------------- Copyable token chip ---------------- */
function CopyChip({ value, label, mono = true, dark = false }) {
  const [copied, setCopied] = React.useState(false);
  const onClick = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1100);
      }).catch(() => {});
    }
  };
  return (
    <button
      onClick={onClick}
      style={{
        appearance: 'none',
        background: dark ? 'rgba(245,241,235,0.06)' : 'rgba(27,67,50,0.05)',
        border: `1px solid ${dark ? 'rgba(245,241,235,0.18)' : 'rgba(27,67,50,0.18)'}`,
        borderRadius: 2,
        padding: '4px 10px',
        fontFamily: mono ? "'JetBrains Mono', monospace" : "'DM Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.02em',
        color: dark ? 'var(--ivory)' : 'var(--forest)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        transition: 'all 0.18s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = dark ? 'rgba(245,241,235,0.12)' : 'rgba(27,67,50,0.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = dark ? 'rgba(245,241,235,0.06)' : 'rgba(27,67,50,0.05)'; }}
      title="Copy to clipboard"
    >
      {label ? <span style={{ opacity: 0.55 }}>{label}</span> : null}
      <span>{copied ? 'copied' : value}</span>
      <span style={{ opacity: 0.4, fontSize: 9 }}>{copied ? '✓' : '⧉'}</span>
    </button>
  );
}

/* ---------------- Card / panel ---------------- */
function Panel({ children, dark = false, pad = 32, style = {}, hover = false }) {
  return (
    <div
      style={{
        background: dark ? 'var(--forest)' : 'var(--parchment)',
        color: dark ? 'var(--ivory)' : 'var(--ink)',
        border: dark ? '1px solid rgba(245,241,235,0.08)' : '1px solid var(--rule)',
        borderRadius: 4,
        padding: pad,
        transition: hover ? 'transform 0.25s ease, box-shadow 0.25s ease' : 'none',
        ...style,
      }}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,67,50,0.10)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      } : undefined}
    >
      {children}
    </div>
  );
}

Object.assign(window, { TOKENS, SectionHead, TripleMark, MorWordmark, BCorpMark, CopyChip, Panel });
