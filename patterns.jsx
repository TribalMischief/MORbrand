/* Patterns tab — recurring layouts: hero, pull-quote, stat-row, section header, footer */

function Patterns() {
  return (
    <div style={{ padding: '64px 80px 96px', maxWidth: 1320, margin: '0 auto' }}>
      <SectionHead
        eyebrow="The Vocabulary"
        title="Patterns the system speaks in."
        sub="These are the recurring shapes a piece of MOR communication should take. Heroes that lead with conviction. Quotes set as documents. Statistics in service of story."
        mark
      />

      <PatternBlock title="Hero · forest ground" id="hero-forest">
        <HeroForest />
      </PatternBlock>

      <PatternBlock title="Hero · ivory ground" id="hero-ivory">
        <HeroIvory />
      </PatternBlock>

      <PatternBlock title="Pull-quote · principle">
        <PullQuote />
      </PatternBlock>

      <PatternBlock title="Stat row · evidence">
        <StatRow />
      </PatternBlock>

      <PatternBlock title="Section opener">
        <SectionOpener />
      </PatternBlock>

      <PatternBlock title="Footer">
        <Footer />
      </PatternBlock>
    </div>
  );
}

function PatternBlock({ title, children, id }) {
  return (
    <section id={id} style={{ marginBottom: 56 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 24, fontWeight: 500, color: 'var(--forest)',
        }}>{title}</h3>
        <span className="mono" style={{ color: 'var(--slate-soft)' }}>{id ? `#${id}` : ''}</span>
      </div>
      <div style={{ border: '1px solid var(--rule)', borderRadius: 4, overflow: 'hidden' }}>
        {children}
      </div>
    </section>
  );
}

function HeroForest() {
  return (
    <div style={{
      background: 'var(--forest)',
      color: 'var(--ivory)',
      padding: '80px 64px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
        <TripleMark size="md" colors={['#D4A84A', '#F5F1EB', '#7A8290']} />
        <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>Wealth with Purpose</span>
      </div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        fontSize: 88,
        lineHeight: 1.0,
        letterSpacing: '-0.015em',
        marginBottom: 24,
        maxWidth: 900,
        textWrap: 'balance',
      }}>Independent. Principled.<br/><em style={{ color: 'var(--brass-soft)', fontWeight: 400 }}>Philadelphia-rooted.</em></h1>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 18, lineHeight: 1.65,
        color: 'rgba(245,241,235,0.78)',
        maxWidth: 580, marginBottom: 36,
      }}>A Certified B Corporation managing wealth for families who believe their portfolio should reflect what they stand for. Ten years of giving with purpose. A measured approach to what comes next.</p>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <Button variant="brass" size="lg" icon="arrow">Schedule a conversation</Button>
        <button style={{
          background: 'transparent', border: '1px solid rgba(245,241,235,0.4)',
          color: 'var(--ivory)', padding: '14px 28px',
          fontFamily: "'DM Sans', sans-serif", fontSize: 13,
          letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
          cursor: 'pointer', borderRadius: 2,
        }}>Read our philosophy</button>
      </div>
      <div style={{
        position: 'absolute', top: 28, right: 32,
      }}>
        <BCorpMark inverted size={26} />
      </div>
    </div>
  );
}

function HeroIvory() {
  return (
    <div style={{
      background: 'var(--ivory)',
      padding: '80px 64px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 48,
      alignItems: 'center',
    }}>
      <div>
        <span className="eyebrow" style={{ color: 'var(--brass)' }}>Notes from Philadelphia · April 2026</span>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: 64, lineHeight: 1.05,
          color: 'var(--forest)',
          margin: '14px 0 22px',
          letterSpacing: '-0.01em',
          textWrap: 'balance',
        }}>A little tax-loss harvesting <em style={{ color: 'var(--brass)' }}>never hurt nobody.</em></h1>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: 'var(--ash)',
          maxWidth: 540, marginBottom: 26,
        }}>Dear Clients and Friends — every spring we revisit the question of what the market gave us, what it took, and what we can quietly recover by paying attention to the calendar. Here's what we're doing this April.</p>
        <Button variant="link" icon="arrow">Read the note</Button>
      </div>
      <div style={{
        background: 'var(--ivory-deep)',
        border: '1px solid var(--rule)',
        borderRadius: 3,
        aspectRatio: '4 / 5',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 14px, rgba(27,67,50,0.05) 14px 15px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span className="mono" style={{ color: 'var(--slate)' }}>[ portrait · M. Ramer ]</span>
      </div>
    </div>
  );
}

function PullQuote() {
  return (
    <div style={{
      background: 'var(--parchment)', padding: '72px 80px',
      display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'flex-start',
    }}>
      <div style={{ paddingTop: 16 }}>
        <TripleMark size="lg" />
      </div>
      <div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36, lineHeight: 1.3, fontWeight: 400,
          fontStyle: 'italic', color: 'var(--forest)',
          marginBottom: 24,
          textWrap: 'balance',
        }}>“Your portfolio can reflect your values. Performance does not have to be the price you pay for that.”</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--forest)', color: 'var(--ivory)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: 'italic',
          }}>M</span>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Matthew Ramer, AIF®</div>
            <div className="mono" style={{ color: 'var(--slate)' }}>Principal &amp; CEO · MOR Wealth Management</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow() {
  const stats = [
    { n: '15', s: 'Years', body: 'Independent, fee-only fiduciary practice in Philadelphia.' },
    { n: '$1.2B', s: 'Assets', body: 'Stewarded across families, foundations, and individuals.' },
    { n: '12,400', s: 'Volunteer hours', body: 'Logged by our team across a decade of community service.' },
    { n: '100%', s: 'B Corp aligned', body: 'Certified since 2017. Recertified every three years.' },
  ];
  return (
    <div style={{ background: 'var(--ivory)', padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '40px 32px',
            borderRight: i < stats.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 64, fontWeight: 400,
              color: 'var(--forest)',
              lineHeight: 1, letterSpacing: '-0.02em',
            }}>{s.n}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--brass)',
              marginTop: 6, marginBottom: 14, fontWeight: 500,
            }}>{s.s}</div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ash)' }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionOpener() {
  return (
    <div style={{ background: 'var(--ivory)', padding: '64px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <TripleMark size="md" />
        <span className="eyebrow" style={{ color: 'var(--brass)' }}>Section · 02 / 06</span>
      </div>
      <div className="rule-thin" style={{ marginBottom: 22, maxWidth: 720 }} />
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 56, fontWeight: 400, color: 'var(--forest)',
        letterSpacing: '-0.015em', lineHeight: 1.05,
        marginBottom: 16, maxWidth: 720, textWrap: 'balance',
      }}>What we mean when we say <em style={{ color: 'var(--brass)' }}>purpose.</em></h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ash)', maxWidth: 640 }}>
        Purpose is not a marketing word for us. It is the basis on which we evaluate every position, every recommendation, every relationship.
      </p>
    </div>
  );
}

function Footer() {
  const cols = [
    { title: 'Practice', items: ['Socially Responsible Investing', 'Estate Planning', 'Family Wealth', 'Foundations & Endowments'] },
    { title: 'Firm', items: ['Our Philosophy', 'Our Family', 'B Corp Report', 'Notes & Letters'] },
    { title: 'Connect', items: ['Schedule a conversation', 'matthew@morwm.com', '(267) 930-8300', 'Center City, Philadelphia'] },
  ];
  return (
    <div style={{ background: 'var(--forest)', color: 'var(--ivory)', padding: '56px 64px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <MorWordmark size="md" color="var(--ivory)" />
          <p style={{
            fontSize: 13, lineHeight: 1.7, color: 'rgba(245,241,235,0.7)',
            marginTop: 22, maxWidth: 320,
          }}>An independent, B Corp certified RIA managing socially responsible investments, estate plans, and family wealth from Center City Philadelphia.</p>
          <div style={{ marginTop: 22 }}><BCorpMark inverted size={22} /></div>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>{c.title}</span>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map(i => (
                <span key={i} style={{ fontSize: 13, color: 'rgba(245,241,235,0.78)' }}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid rgba(245,241,235,0.14)',
        paddingTop: 22,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: 'rgba(245,241,235,0.5)',
        letterSpacing: '0.06em',
      }}>
        <span>© 2026 MOR Wealth Management · Wealth with Purpose</span>
        <span>Privacy · Form ADV · Form CRS · Disclosures</span>
      </div>
    </div>
  );
}

Object.assign(window, { Patterns });
