/* Components tab — buttons, inputs, cards, nav, badges. All interactive. */

function Components() {
  return (
    <div style={{ padding: '64px 80px 96px', maxWidth: 1320, margin: '0 auto' }}>
      <SectionHead
        eyebrow="The Library"
        title="Components in the system."
        sub="Every component is built from the foundations: forest as primary, brass as emphasis, ivory as ground. Try them — buttons depress, inputs focus, cards hover, the nav switches."
        mark
      />
      <ComponentSection title="Buttons" id="buttons" code='<Button variant="primary">Schedule a call</Button>'>
        <ButtonShowcase />
      </ComponentSection>
      <ComponentSection title="Inputs & forms" id="inputs" code='<Field label="Email" type="email" />'>
        <InputShowcase />
      </ComponentSection>
      <ComponentSection title="Badges & tags" id="badges" code='<Badge tone="brass">Certified B Corp</Badge>'>
        <BadgeShowcase />
      </ComponentSection>
      <ComponentSection title="Cards" id="cards" code='<Card title="Wealth with Purpose" />'>
        <CardShowcase />
      </ComponentSection>
      <ComponentSection title="Navigation" id="nav" code='<TopNav items={...} />'>
        <NavShowcase />
      </ComponentSection>
    </div>
  );
}

function ComponentSection({ title, code, children, id }) {
  return (
    <section id={id} style={{ marginBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 32, fontWeight: 500, color: 'var(--forest)',
          letterSpacing: '-0.005em',
        }}>{title}</h3>
        <CopyChip value={code} />
      </div>
      <div className="rule-thin" style={{ marginBottom: 24 }} />
      {children}
    </section>
  );
}

/* ---------- Buttons ---------- */
function Button({ variant = 'primary', size = 'md', children, icon, disabled, onClick, type = 'button' }) {
  const sizes = {
    sm: { padY: 8, padX: 16, font: 12 },
    md: { padY: 12, padX: 22, font: 13 },
    lg: { padY: 16, padX: 30, font: 14 },
  }[size];
  const variants = {
    primary: {
      bg: 'var(--forest)', color: 'var(--ivory)', border: '1px solid var(--forest)',
      hoverBg: 'var(--forest-deep)', hoverColor: 'var(--ivory)',
    },
    brass: {
      bg: 'var(--brass)', color: 'var(--ink)', border: '1px solid var(--brass)',
      hoverBg: '#A07820', hoverColor: 'var(--ivory)',
    },
    secondary: {
      bg: 'transparent', color: 'var(--forest)', border: '1px solid var(--forest)',
      hoverBg: 'var(--forest)', hoverColor: 'var(--ivory)',
    },
    ghost: {
      bg: 'transparent', color: 'var(--forest)', border: '1px solid transparent',
      hoverBg: 'rgba(27,67,50,0.06)', hoverColor: 'var(--forest)',
    },
    link: {
      bg: 'transparent', color: 'var(--forest)', border: 'none',
      hoverBg: 'transparent', hoverColor: 'var(--brass)',
    },
  }[variant];
  const [hover, setHover] = React.useState(false);
  const isLink = variant === 'link';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none',
        background: hover && !disabled ? variants.hoverBg : variants.bg,
        color: hover && !disabled ? variants.hoverColor : variants.color,
        border: variants.border,
        borderRadius: 2,
        padding: isLink ? 0 : `${sizes.padY}px ${sizes.padX}px`,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: sizes.font,
        fontWeight: 500,
        letterSpacing: isLink ? '0.01em' : '0.06em',
        textTransform: isLink ? 'none' : 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        transition: 'all 0.18s ease',
        textDecoration: isLink ? (hover ? 'underline' : 'none') : 'none',
        textUnderlineOffset: 4,
        position: 'relative',
      }}
    >
      {children}
      {icon === 'arrow' ? <span style={{ fontSize: sizes.font + 2, lineHeight: 1 }}>→</span> : null}
    </button>
  );
}

function ButtonShowcase() {
  return (
    <Panel pad={32}>
      <Row label="Variants">
        <Button variant="primary">Schedule a call</Button>
        <Button variant="brass">Become a client</Button>
        <Button variant="secondary">Read the report</Button>
        <Button variant="ghost">Download PDF</Button>
        <Button variant="link" icon="arrow">View our philosophy</Button>
      </Row>
      <Row label="Sizes">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg" icon="arrow">Large</Button>
      </Row>
      <Row label="States">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button variant="primary" icon="arrow">With chevron</Button>
      </Row>
    </Panel>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'center', padding: '14px 0', borderTop: '1px solid var(--rule)' }}>
      <span className="eyebrow" style={{ color: 'var(--slate)' }}>{label}</span>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
    </div>
  );
}

/* ---------- Inputs ---------- */
function Field({ label, type = 'text', placeholder, hint, error, value, onChange, multiline }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', marginBottom: 4 }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: error ? '#9B2A2A' : 'var(--slate)',
        marginBottom: 6,
        fontWeight: 500,
      }}>{label}</div>
      <Tag
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={multiline ? 3 : undefined}
        style={{
          width: '100%',
          appearance: 'none',
          background: 'var(--parchment)',
          border: `1px solid ${error ? '#9B2A2A' : focus ? 'var(--forest)' : 'var(--rule-strong)'}`,
          borderRadius: 2,
          padding: '11px 14px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: 'var(--ink)',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px rgba(27,67,50,0.08)' : 'none',
          transition: 'all 0.18s ease',
          resize: multiline ? 'vertical' : 'none',
          minHeight: multiline ? 80 : undefined,
        }}
      />
      {hint || error ? (
        <div style={{
          fontSize: 12, color: error ? '#9B2A2A' : 'var(--slate-soft)', marginTop: 6,
        }}>{error || hint}</div>
      ) : null}
    </label>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      padding: '6px 0',
    }}>
      <span style={{
        width: 18, height: 18,
        border: `1.5px solid ${checked ? 'var(--forest)' : 'var(--slate-soft)'}`,
        background: checked ? 'var(--forest)' : 'var(--parchment)',
        borderRadius: 1,
        display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.18s',
      }}>
        {checked ? <span style={{ color: 'var(--ivory)', fontSize: 12, lineHeight: 1 }}>✓</span> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ fontSize: 14, color: 'var(--ink)' }}>{label}</span>
    </label>
  );
}

function InputShowcase() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('matthew@morwm.com');
  const [bad, setBad] = React.useState('not-an-email');
  const [agree, setAgree] = React.useState(true);
  const [interests, setInterests] = React.useState({ sri: true, estate: false, family: false });
  const [topic, setTopic] = React.useState('');
  return (
    <Panel pad={32}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Field label="Full name" placeholder="Jane Worthington" value={name} onChange={(e) => setName(e.target.value)} hint="As it appears on your statements." />
          <Field label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Field label="Email · with error" type="email" value={bad} onChange={(e) => setBad(e.target.value)} error={bad.includes('@') ? null : 'Please enter a valid email address.'} />
          <Field label="Tell us about your goals" multiline placeholder="What are you hoping to do with your wealth?" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="eyebrow" style={{ color: 'var(--slate)' }}>I'm interested in</span>
          <Checkbox label="Socially responsible investing" checked={interests.sri} onChange={() => setInterests(s => ({ ...s, sri: !s.sri }))} />
          <Checkbox label="Estate planning" checked={interests.estate} onChange={() => setInterests(s => ({ ...s, estate: !s.estate }))} />
          <Checkbox label="Family wealth management" checked={interests.family} onChange={() => setInterests(s => ({ ...s, family: !s.family }))} />
          <div style={{ height: 12 }} />
          <Checkbox label="I've read MOR's privacy policy" checked={agree} onChange={() => setAgree(!agree)} />
          <div style={{ height: 8 }} />
          <Button variant="primary" icon="arrow" disabled={!agree}>Request introduction</Button>
        </div>
      </div>
    </Panel>
  );
}

/* ---------- Badges ---------- */
function Badge({ tone = 'forest', children, outline = false }) {
  const tones = {
    forest: { bg: 'rgba(27,67,50,0.1)', color: 'var(--forest)', border: 'rgba(27,67,50,0.3)' },
    brass:  { bg: 'rgba(181,137,42,0.14)', color: '#7E5F1B', border: 'rgba(181,137,42,0.4)' },
    slate:  { bg: 'rgba(74,85,104,0.1)', color: 'var(--slate)', border: 'rgba(74,85,104,0.3)' },
    ivory:  { bg: 'var(--ivory-deep)', color: 'var(--ink)', border: 'rgba(0,0,0,0.1)' },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 12px',
      background: outline ? 'transparent' : tones.bg,
      border: `1px solid ${tones.border}`,
      borderRadius: 999,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 11,
      letterSpacing: '0.08em',
      color: tones.color,
      fontWeight: 500,
    }}>{children}</span>
  );
}

function BadgeShowcase() {
  return (
    <Panel pad={32}>
      <Row label="Tones">
        <Badge tone="forest">Independent RIA</Badge>
        <Badge tone="brass">Certified B Corp</Badge>
        <Badge tone="slate">Philadelphia · 2010</Badge>
        <Badge tone="ivory">SRI</Badge>
      </Row>
      <Row label="Outline">
        <Badge tone="forest" outline>Independent RIA</Badge>
        <Badge tone="brass" outline>Certified B Corp</Badge>
        <Badge tone="slate" outline>Estate Planning</Badge>
      </Row>
      <Row label="Credentials">
        <BCorpMark />
        <span className="mono" style={{ color: 'var(--slate)' }}>AIF® · CFP® · CFA</span>
      </Row>
    </Panel>
  );
}

/* ---------- Cards ---------- */
function CardShowcase() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
      <ServiceCard
        eyebrow="Practice"
        title="Socially Responsible Investing"
        body="Portfolios that perform — and reflect what their owners stand for. Built around the values our clients have spent a lifetime defining."
        cta="Read our SRI thesis"
      />
      <ServiceCard
        eyebrow="Practice"
        title="Estate Planning"
        body="What happens next is not just a legal question. It's a values question. We work alongside your attorney to align both."
        cta="See our process"
      />
      <ServiceCard
        eyebrow="Practice"
        title="Family Wealth"
        body="Multigenerational planning grounded in the conviction that wealth, well-stewarded, makes families and communities stronger."
        cta="Plan together"
        dark
      />
    </div>
  );
}

function ServiceCard({ eyebrow, title, body, cta, dark }) {
  return (
    <Panel hover dark={dark} pad={28} style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="eyebrow" style={{ color: dark ? 'var(--brass-soft)' : 'var(--brass)' }}>{eyebrow}</span>
        <TripleMark size="sm" colors={dark
          ? ['#D4A84A', '#F5F1EB', '#7A8290']
          : ['#B5892A', '#1B4332', '#4A5568']} />
      </div>
      <h4 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 28,
        fontWeight: 500,
        color: dark ? 'var(--ivory)' : 'var(--forest)',
        lineHeight: 1.15,
        textWrap: 'balance',
      }}>{title}</h4>
      <p style={{
        fontSize: 14, lineHeight: 1.65,
        color: dark ? 'rgba(245,241,235,0.75)' : 'var(--ash)',
        flex: 1,
      }}>{body}</p>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12, fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: dark ? 'var(--brass-soft)' : 'var(--forest)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>{cta} <span style={{ fontSize: 14 }}>→</span></div>
    </Panel>
  );
}

/* ---------- Nav ---------- */
function NavShowcase() {
  const [active, setActive] = React.useState('Philosophy');
  const items = ['Philosophy', 'Practice', 'Our Family', 'Notes', 'Contact'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Panel pad={0} style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 28px',
          background: 'var(--ivory)',
          borderBottom: '1px solid var(--rule)',
        }}>
          <MorWordmark size="sm" />
          <nav style={{ display: 'flex', gap: 4 }}>
            {items.map(i => (
              <button key={i}
                onClick={() => setActive(i)}
                style={{
                  appearance: 'none', background: 'transparent', border: 'none',
                  padding: '8px 14px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: active === i ? 'var(--forest)' : 'var(--slate)',
                  fontWeight: active === i ? 500 : 400,
                  cursor: 'pointer',
                  position: 'relative',
                  borderBottom: `2px solid ${active === i ? 'var(--brass)' : 'transparent'}`,
                  transition: 'all 0.18s',
                }}
              >{i}</button>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <BCorpMark size={20} />
            <Button variant="primary" size="sm">Schedule</Button>
          </div>
        </div>
      </Panel>

      <Panel pad={0} dark style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 28px',
        }}>
          <MorWordmark size="sm" color="var(--ivory)" />
          <nav style={{ display: 'flex', gap: 4 }}>
            {items.map(i => (
              <span key={i} style={{
                padding: '8px 14px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: i === 'Philosophy' ? 'var(--brass-soft)' : 'rgba(245,241,235,0.6)',
                fontWeight: i === 'Philosophy' ? 500 : 400,
                borderBottom: `2px solid ${i === 'Philosophy' ? 'var(--brass)' : 'transparent'}`,
              }}>{i}</span>
            ))}
          </nav>
          <BCorpMark inverted size={20} />
        </div>
      </Panel>

      <span className="mono" style={{ color: 'var(--slate)' }}>// nav · light + dark variants · brass underline marks the active route</span>
    </div>
  );
}

Object.assign(window, { Components, Button, Field, Checkbox, Badge, ServiceCard });
