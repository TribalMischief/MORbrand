/* Foundations tab — color, typography, scale, spacing/radius, logo system, voice */

function Foundations() {
  return (
    <div style={{ padding: '64px 80px 96px', maxWidth: 1320, margin: '0 auto' }}>
      <FoundationIntro />
      <FoundationColor />
      <FoundationLogo />
      <FoundationType />
      <FoundationScale />
      <FoundationSpace />
      <FoundationVoice />
    </div>
  );
}

function FoundationIntro() {
  return (
    <section style={{ marginBottom: 88 }}>
      <span className="eyebrow">The System · 04 Synthesis</span>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        fontSize: 96,
        lineHeight: 0.98,
        color: 'var(--forest)',
        letterSpacing: '-0.02em',
        margin: '14px 0 18px',
        textWrap: 'balance',
      }}>Wealth&nbsp;with<br/><em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--brass)' }}>Purpose.</em></h1>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--ash)',
        maxWidth: 720,
        marginBottom: 32,
      }}>The MOR design system is built around the triple-rule mark — three ascending bars representing People, Planet, Profit — and a palette rooted in the forests of Pennsylvania. Forest green for sustainability and conviction. Brass for principled intent. Ivory for warmth where banks default to white. A two-typeface system that says <em>serious about your wealth</em> and <em>human about your life</em> in the same breath.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <CopyChip value="--forest: #1B4332" />
        <CopyChip value="--brass: #B5892A" />
        <CopyChip value="--ivory: #F5F1EB" />
        <CopyChip value="font-family: 'Cormorant Garamond'" />
        <CopyChip value="font-family: 'DM Sans'" />
      </div>
    </section>
  );
}

/* ----- Color ----- */
function FoundationColor() {
  const [dark, setDark] = React.useState(false);
  const order = ['forest','grove','moss','brass','brass-soft','slate','slate-soft','ivory','ivory-deep','parchment','ink','ash'];
  return (
    <section style={{ marginBottom: 88 }}>
      <SectionHead
        eyebrow="01 · Palette"
        title="Forest, brass, ivory."
        sub="A palette that signals sustainability without leaning on greenwashing tropes. Forest leads. Brass is the principled accent — never decorative. Ivory replaces stark white so every surface feels warm. Click any swatch to copy its hex."
        mark
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <span className="mono" style={{ color: 'var(--slate)' }}>preview surface</span>
        <ToggleSeg
          options={[{ id: 'light', label: 'Light' }, { id: 'dark', label: 'Dark' }]}
          value={dark ? 'dark' : 'light'}
          onChange={(v) => setDark(v === 'dark')}
        />
      </div>
      <div style={{
        background: dark ? 'var(--forest)' : 'var(--parchment)',
        border: dark ? '1px solid rgba(245,241,235,0.1)' : '1px solid var(--rule)',
        borderRadius: 4,
        padding: 36,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 16,
        }}>
          {order.map(key => <Swatch key={key} k={key} dark={dark} />)}
        </div>
      </div>
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 920 }}>
        <UsageCard title="Forest" body="Primary surface for confidence — major identity, headers, hero backgrounds, the wordmark. Roughly 60% of brand weight." dot="var(--forest)" />
        <UsageCard title="Brass" body="Reserved for emphasis — call-to-action, the bottom bar of the triple mark, B Corp credential. Use sparingly; brass earns its weight." dot="var(--brass)" />
        <UsageCard title="Ivory" body="Replaces pure white. The default page background, card surface for warmth. Slightly creamy; never sterile." dot="var(--ivory)" border />
        <UsageCard title="Slate" body="Supporting type, dividers, UI scaffolding. Never compete with Forest for attention." dot="var(--slate)" />
      </div>
    </section>
  );
}

function Swatch({ k, dark }) {
  const t = TOKENS.color[k];
  const isLight = ['ivory', 'ivory-deep', 'parchment', 'brass-soft'].includes(k);
  const fg = isLight ? '#1C1C1C' : 'rgba(255,255,255,0.95)';
  const sub = isLight ? 'rgba(28,28,28,0.55)' : 'rgba(255,255,255,0.65)';
  return (
    <button
      onClick={() => {
        if (navigator.clipboard) navigator.clipboard.writeText(t.hex);
      }}
      style={{
        background: t.hex,
        border: isLight ? '1px solid rgba(0,0,0,0.07)' : 'none',
        borderRadius: 3,
        padding: 14,
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'transform 0.15s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = ''}
      title={`Copy ${t.hex}`}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 9,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: sub,
        fontWeight: 500,
      }}>{t.role}</span>
      <span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 400,
          color: fg,
          display: 'block',
          lineHeight: 1,
          marginBottom: 6,
        }}>{t.name}</span>
        <span className="mono" style={{ color: sub, fontSize: 11 }}>{t.hex}</span>
      </span>
    </button>
  );
}

function UsageCard({ title, body, dot, border = false }) {
  return (
    <div style={{
      padding: '20px 22px',
      background: 'var(--parchment)',
      border: '1px solid var(--rule)',
      borderRadius: 3,
      borderLeft: `3px solid ${dot}`,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
      }}>
        <span style={{
          width: 10, height: 10, borderRadius: '50%',
          background: dot,
          border: border ? '1px solid rgba(0,0,0,0.1)' : 'none',
        }} />
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 19, fontWeight: 500, color: 'var(--forest)',
        }}>{title}</span>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ash)' }}>{body}</p>
    </div>
  );
}

function ToggleSeg({ options, value, onChange }) {
  return (
    <div style={{
      display: 'inline-flex',
      border: '1px solid var(--rule-strong)',
      borderRadius: 2,
      overflow: 'hidden',
    }}>
      {options.map(o => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          style={{
            appearance: 'none',
            background: value === o.id ? 'var(--forest)' : 'transparent',
            color: value === o.id ? 'var(--ivory)' : 'var(--slate)',
            border: 'none',
            padding: '6px 14px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.18s',
          }}
        >{o.label}</button>
      ))}
    </div>
  );
}

/* ----- Logo / Mark ----- */
function FoundationLogo() {
  const [bg, setBg] = React.useState('ivory');
  const bgMap = {
    ivory: { bg: 'var(--ivory)', color: 'var(--forest)' },
    forest: { bg: 'var(--forest)', color: 'var(--ivory)' },
    parchment: { bg: 'var(--parchment)', color: 'var(--ink)' },
    ink: { bg: 'var(--ink)', color: 'var(--ivory)' },
  };
  const cur = bgMap[bg];
  return (
    <section style={{ marginBottom: 88 }}>
      <SectionHead
        eyebrow="02 · Logo & Mark"
        title="The triple-rule mark."
        sub="Three ascending bars — Brass, Forest, Slate — representing People, Planet, Profit. The Triple Bottom Line, expressed silently. The mark stands alone or pairs with the wordmark in horizontal or stacked lockup."
      />
      <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        {Object.keys(bgMap).map(k => (
          <button key={k}
            onClick={() => setBg(k)}
            style={{
              appearance: 'none',
              background: bgMap[k].bg,
              border: `1px solid ${bg === k ? 'var(--brass)' : 'var(--rule-strong)'}`,
              borderRadius: 2,
              padding: '6px 14px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: bgMap[k].color,
              cursor: 'pointer',
              outline: bg === k ? '2px solid rgba(181,137,42,0.3)' : 'none',
              outlineOffset: '2px',
            }}
          >{k}</button>
        ))}
      </div>

      <div style={{
        background: cur.bg,
        borderRadius: 4,
        padding: 64,
        border: '1px solid var(--rule)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        transition: 'background 0.3s',
      }}>
        <div>
          <span className="mono" style={{ color: cur.color, opacity: 0.5, marginBottom: 14, display: 'block' }}>primary lockup · horizontal</span>
          <MorWordmark size="lg" color={cur.color} lockup="horizontal" />
        </div>
        <div>
          <span className="mono" style={{ color: cur.color, opacity: 0.5, marginBottom: 14, display: 'block' }}>secondary lockup · stacked</span>
          <MorWordmark size="md" color={cur.color} lockup="stacked" />
        </div>
        <div>
          <span className="mono" style={{ color: cur.color, opacity: 0.5, marginBottom: 14, display: 'block' }}>mark only · favicon, embroidery, watermark</span>
          <TripleMark size="lg" colors={bg === 'ivory' || bg === 'parchment'
            ? ['#B5892A', '#1B4332', '#4A5568']
            : ['#D4A84A', '#F5F1EB', '#7A8290']} />
        </div>
        <div>
          <span className="mono" style={{ color: cur.color, opacity: 0.5, marginBottom: 14, display: 'block' }}>monogram · avatar, social, embossing</span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            width: 64, height: 64,
            border: `1.5px solid ${cur.color}`,
            borderRadius: '50%',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 32,
            color: cur.color,
          }}>M</span>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <span className="eyebrow" style={{ color: 'var(--slate)' }}>Construction</span>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ash)', maxWidth: 760, marginTop: 8 }}>
          The bars step in 1.6× ratio (≈ short : medium : long = 10 : 18 : 26). Bar weight scales with point size; minimum is 1.5px. Clear-space around any lockup equals the height of the wordmark cap. Minimum wordmark size is 14px (digital) / 8pt (print).
        </p>
      </div>
    </section>
  );
}

/* ----- Type families ----- */
function FoundationType() {
  return (
    <section style={{ marginBottom: 88 }}>
      <SectionHead
        eyebrow="03 · Typography"
        title="Cormorant & DM Sans."
        sub="A serif with editorial gravitas, paired with a modern sans that reads cleanly at any size. The pairing reconciles MOR's two voices: aspirational on the page, accessible in the inbox."
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <TypeFamilyCard
          family="'Cormorant Garamond', serif"
          name="Cormorant Garamond"
          role="Display & Headings"
          weights="300 · 400 · 500 · 600 · italics"
          sample="Wealth, considered."
          italics="Wealth, considered."
        />
        <TypeFamilyCard
          family="'DM Sans', sans-serif"
          name="DM Sans"
          role="Body & UI"
          weights="300 · 400 · 500 · 600"
          sample="A measured approach to wealth."
          italics={null}
        />
      </div>
    </section>
  );
}

function TypeFamilyCard({ family, name, role, weights, sample, italics }) {
  return (
    <div style={{
      background: 'var(--parchment)',
      border: '1px solid var(--rule)',
      borderRadius: 3,
      padding: 32,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <span className="eyebrow" style={{ color: 'var(--slate)' }}>{role}</span>
        <CopyChip value={`font-family: ${family}`} />
      </div>
      <div style={{
        fontFamily: family,
        fontSize: 56,
        lineHeight: 1.05,
        color: 'var(--forest)',
        fontWeight: family.includes('Cormorant') ? 400 : 500,
        marginBottom: italics ? 6 : 18,
        letterSpacing: family.includes('Cormorant') ? '-0.005em' : '-0.01em',
      }}>{sample}</div>
      {italics ? (
        <div style={{
          fontFamily: family,
          fontSize: 32,
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--brass)',
          marginBottom: 18,
        }}>{italics}</div>
      ) : null}
      <div className="rule-thin" style={{ marginBottom: 16 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
        <span style={{ fontFamily: family, fontWeight: 500, color: 'var(--ink)' }}>{name}</span>
        <span className="mono" style={{ color: 'var(--slate)' }}>{weights}</span>
      </div>
    </div>
  );
}

/* ----- Type scale ----- */
function FoundationScale() {
  return (
    <section style={{ marginBottom: 88 }}>
      <SectionHead
        eyebrow="04 · Type scale"
        title="A measured rhythm."
        sub="Nine sizes from Display XL to Eyebrow. Display sizes are always Cormorant; UI uses DM Sans. The scale is roughly 1.25× and is more important to honor than absolute sizes."
      />
      <div style={{
        background: 'var(--parchment)',
        border: '1px solid var(--rule)',
        borderRadius: 3,
        overflow: 'hidden',
      }}>
        {TOKENS.scale.map((s, i) => {
          const fam = s.family === 'display' ? "'Cormorant Garamond', serif" : "'DM Sans', sans-serif";
          const samples = {
            'tf-display-xl': 'Wealth with Purpose.',
            'tf-display-l':  'Independent. Principled. Rooted.',
            'tf-display-m':  'A decade of giving with purpose.',
            'tf-heading':    'Socially Responsible Investment',
            'tf-subhead':    'Estate planning for what matters next',
            'tf-lede':       'We measure success by how your wealth performs — and what it stands for.',
            'tf-body':       'MOR Wealth Management is a Certified B Corporation registered as an investment adviser, headquartered in Center City Philadelphia.',
            'tf-caption':    'matthew@morwm.com · (267) 930-8300',
            'tf-eyebrow':    'WEALTH WITH PURPOSE',
          };
          return (
            <div key={s.cls} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr 200px',
              alignItems: 'baseline',
              padding: '18px 28px',
              borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              gap: 24,
            }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: 'var(--forest)', fontWeight: 500 }}>{s.name}</div>
                <div className="mono" style={{ color: 'var(--slate)', marginTop: 2 }}>{s.size} / {s.lh}</div>
              </div>
              <div style={{
                fontFamily: fam,
                fontSize: parseInt(s.size, 10) > 56 ? '56px' : s.size,
                lineHeight: s.lh,
                color: s.family === 'display' ? 'var(--forest)' : 'var(--ink)',
                fontWeight: s.weight,
                fontStyle: s.cls === 'tf-eyebrow' ? 'normal' : 'normal',
                letterSpacing: s.cls === 'tf-eyebrow' ? '0.22em' : (s.family === 'display' ? '-0.005em' : 0),
                textTransform: s.cls === 'tf-eyebrow' ? 'uppercase' : 'none',
                textWrap: 'balance',
              }}>{samples[s.cls]}</div>
              <div style={{ textAlign: 'right' }}>
                <CopyChip value={`.${s.cls}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ----- Spacing & radius ----- */
function FoundationSpace() {
  return (
    <section style={{ marginBottom: 88 }}>
      <SectionHead
        eyebrow="05 · Spacing & shape"
        title="Generous, never crowded."
        sub="The system favors air. Wealth management is a slow medium; the design should feel that way. Radii are restrained — squared corners signal documents and seriousness; pill shapes are reserved for tags and avatars."
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--slate)' }}>Spacing scale</span>
          <div style={{ marginTop: 12, background: 'var(--parchment)', border: '1px solid var(--rule)', borderRadius: 3 }}>
            {TOKENS.space.map((s, i) => (
              <div key={s.token} style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 180px',
                alignItems: 'center',
                padding: '14px 20px',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
                gap: 16,
              }}>
                <span className="mono" style={{ color: 'var(--forest)' }}>{s.token}</span>
                <div style={{
                  height: 14,
                  width: s.val,
                  background: 'var(--brass)',
                  borderRadius: 1,
                  maxWidth: '100%',
                }} />
                <div style={{ textAlign: 'right' }}>
                  <span className="mono" style={{ color: 'var(--slate)' }}>{s.val}</span>
                  <div style={{ fontSize: 11, color: 'var(--slate-soft)', marginTop: 2 }}>{s.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow" style={{ color: 'var(--slate)' }}>Radii</span>
          <div style={{ marginTop: 12, background: 'var(--parchment)', border: '1px solid var(--rule)', borderRadius: 3, padding: 24 }}>
            {TOKENS.radius.map((r) => (
              <div key={r.token} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '12px 0',
                borderBottom: '1px solid var(--rule)',
              }}>
                <div style={{
                  width: 36, height: 36,
                  background: 'var(--forest)',
                  borderRadius: r.val,
                }} />
                <div style={{ flex: 1 }}>
                  <span className="mono" style={{ color: 'var(--forest)' }}>{r.token}</span>
                  <div style={{ fontSize: 11, color: 'var(--slate-soft)', marginTop: 2 }}>{r.use}</div>
                </div>
                <span className="mono" style={{ color: 'var(--slate)' }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Voice ----- */
function FoundationVoice() {
  return (
    <section>
      <SectionHead
        eyebrow="06 · Voice"
        title="Two registers, one firm."
        sub="MOR speaks two ways without contradicting itself. Formal contexts lead with the principled; conversational contexts lead with warmth. Both share a commitment to plain language and a dislike of financial jargon."
      />
      <div style={{
        display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28,
      }}>
        {TOKENS.voice.adjectives.map(a => (
          <div key={a.word} style={{
            padding: '14px 18px',
            border: '1px solid var(--rule-strong)',
            borderRadius: 2,
            background: 'rgba(27,67,50,0.04)',
            maxWidth: 280,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
              color: 'var(--forest)',
              fontWeight: 500,
              marginBottom: 4,
            }}>{a.word}</div>
            <div style={{ fontSize: 12, color: 'var(--ash)', lineHeight: 1.55 }}>{a.def}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {TOKENS.voice.pairs.map((p, i) => (
          <div key={i} style={{
            background: 'var(--parchment)',
            border: '1px solid var(--rule)',
            borderRadius: 3,
            padding: 24,
          }}>
            <span className="mono" style={{ color: 'var(--slate)', marginBottom: 14, display: 'block' }}>{p.ctx}</span>
            <div style={{
              borderLeft: '2px solid var(--brass)',
              paddingLeft: 14,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              fontStyle: 'italic',
              color: 'var(--forest)',
              lineHeight: 1.5,
              marginBottom: 12,
            }}>{p.yes}</div>
            <div style={{
              borderLeft: '2px solid rgba(0,0,0,0.12)',
              paddingLeft: 14,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: 'rgba(28,28,28,0.4)',
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(28,28,28,0.2)',
              lineHeight: 1.5,
            }}>{p.no}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Foundations });
