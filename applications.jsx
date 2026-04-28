/* Applications tab — applied examples: business card, email signature, social profile,
   client-portal preview. Each rendered live using the system. */

function Applications() {
  return (
    <div style={{ padding: '64px 80px 96px', maxWidth: 1320, margin: '0 auto' }}>
      <SectionHead
        eyebrow="The System Applied"
        title="In the field."
        sub="The same tokens, in the contexts MOR communicates through every day. Hover the components — many of them are interactive. Everything you see is composed from the foundations and components in the prior tabs."
        mark
      />

      <ApplicationBlock title="Business card · front & back">
        <BusinessCard />
      </ApplicationBlock>

      <ApplicationBlock title="Email signature">
        <EmailSig />
      </ApplicationBlock>

      <ApplicationBlock title="Social profile · LinkedIn">
        <SocialProfile />
      </ApplicationBlock>

      <ApplicationBlock title="Client portal · dashboard preview">
        <PortalPreview />
      </ApplicationBlock>
    </div>
  );
}

function ApplicationBlock({ title, children }) {
  return (
    <section style={{ marginBottom: 64 }}>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 24, fontWeight: 500, color: 'var(--forest)',
        marginBottom: 18,
      }}>{title}</h3>
      <div className="rule-thin" style={{ marginBottom: 24 }} />
      {children}
    </section>
  );
}

function BusinessCard() {
  return (
    <div style={{
      background: 'var(--ivory-deep)',
      padding: 56,
      borderRadius: 4,
      display: 'flex', gap: 36, flexWrap: 'wrap', justifyContent: 'center',
    }}>
      {/* Front */}
      <div style={{
        width: 380, height: 217,
        background: 'var(--forest)',
        borderRadius: 3,
        padding: '26px 30px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        color: 'var(--ivory)',
        boxShadow: '0 12px 32px rgba(27,67,50,0.25)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500 }}>Matthew Ramer</div>
            <div className="mono" style={{ color: 'var(--brass-soft)', marginTop: 3, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 9 }}>Principal &amp; CEO · AIF®</div>
          </div>
          <BCorpMark inverted size={20} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <TripleMark size="md" colors={['#D4A84A', '#F5F1EB', '#7A8290']} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, letterSpacing: '0.14em', lineHeight: 1 }}>MOR</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass-soft)', marginTop: 4 }}>Wealth with Purpose</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 9, color: 'rgba(245,241,235,0.55)', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
          matthew@morwm.com · (267) 930-8300<br/>
          100 E Penn Square, Suite 400 · Philadelphia, PA
        </div>
      </div>

      {/* Back */}
      <div style={{
        width: 380, height: 217,
        background: 'var(--ivory)',
        borderRadius: 3,
        padding: '32px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        boxShadow: '0 12px 32px rgba(27,67,50,0.18)',
        border: '1px solid var(--rule)',
      }}>
        <span className="eyebrow" style={{ color: 'var(--brass)' }}>Triple Bottom Line</span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: 'var(--forest)',
        }}>
          <TripleMark size="lg" />
          <div style={{ fontSize: 22, lineHeight: 1.3 }}>
            <div>People.</div>
            <div>Planet.</div>
            <div>Profit.</div>
          </div>
        </div>
        <div className="mono" style={{ color: 'var(--slate)', textAlign: 'right' }}>est. Philadelphia · 2010</div>
      </div>
    </div>
  );
}

function EmailSig() {
  return (
    <div style={{ background: 'var(--parchment)', padding: 40, borderRadius: 4, border: '1px solid var(--rule)' }}>
      <div style={{
        fontFamily: 'Georgia, serif', fontSize: 13, color: '#444',
        lineHeight: 1.55, marginBottom: 22,
      }}>
        Thank you, Matthew — looking forward to it.<br/>— Sarah
      </div>
      <div style={{ borderTop: '1px solid var(--rule-strong)', paddingTop: 18 }}>
        <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
          <span style={{
            width: 56, height: 56, borderRadius: '50%',
            border: '1.5px solid var(--forest)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--forest)',
            fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontStyle: 'italic',
          }}>M</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Matthew Ramer, AIF®</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'var(--slate)', marginBottom: 12 }}>Principal &amp; CEO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <MorWordmark size="sm" color="var(--forest)" />
            </div>
            <div style={{ fontSize: 11, color: 'var(--slate)', marginTop: 12, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
              matthew@morwm.com · (267) 930-8300 · morwm.com<br/>
              100 E Penn Square, Suite 400 · Philadelphia, PA 19107
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
              <BCorpMark size={20} />
              <span style={{ fontSize: 10, color: 'var(--slate-soft)', letterSpacing: '0.06em' }}>Certified since 2017 · Wealth with Purpose</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SOCIAL_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bannerStyle": "forest",
  "bannerHeight": 110,
  "taglinePlacement": "top-left",
  "showTagline": true,
  "showTripleMark": true,
  "showBcorp": true,
  "avatarStyle": "monogram",
  "accentColor": "#B5892A"
}/*EDITMODE-END*/;

function SocialProfile() {
  const [t, setTweak] = (window.useTweaks || ((d) => [d, () => {}]))(SOCIAL_TWEAK_DEFAULTS);

  const banners = {
    forest: { bg: 'var(--forest)', overlay: 'repeating-linear-gradient(135deg, transparent 0 24px, rgba(245,241,235,0.04) 24px 25px)' },
    grove:  { bg: 'var(--grove)',  overlay: 'repeating-linear-gradient(135deg, transparent 0 24px, rgba(245,241,235,0.05) 24px 25px)' },
    ink:    { bg: 'var(--ink)',    overlay: 'repeating-linear-gradient(135deg, transparent 0 24px, rgba(181,137,42,0.06) 24px 25px)' },
    brass:  { bg: 'var(--brass)',  overlay: 'repeating-linear-gradient(135deg, transparent 0 24px, rgba(28,28,28,0.05) 24px 25px)' },
  };
  const banner = banners[t.bannerStyle] || banners.forest;

  // Tagline placement options — all NON-overlapping with the avatar (which sits bottom-left)
  const placements = {
    'top-left':   { top: 14,    left: 20,   right: 'auto', bottom: 'auto', textAlign: 'left' },
    'top-right':  { top: 14,    right: 20,  left: 'auto',  bottom: 'auto', textAlign: 'right' },
    'top-center': { top: 14,    left: '50%', right: 'auto', bottom: 'auto', textAlign: 'center', transform: 'translateX(-50%)' },
    'bottom-right':{ bottom: 14, right: 20,  left: 'auto',  top: 'auto',   textAlign: 'right' },
  };
  const tag = placements[t.taglinePlacement] || placements['top-left'];

  return (
    <div style={{ background: 'var(--ivory-deep)', padding: 40, borderRadius: 4, display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div style={{
        width: 420, background: 'white', borderRadius: 6, overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          height: t.bannerHeight, background: banner.bg,
          backgroundImage: banner.overlay,
          position: 'relative',
        }}>
          {t.showTripleMark ? (
            <div style={{ position: 'absolute', top: 14, right: 18 }}>
              <TripleMark size="sm" colors={['#D4A84A', '#F5F1EB', '#7A8290']} />
            </div>
          ) : null}
          {t.showTagline ? (
            <span style={{
              position: 'absolute',
              ...tag,
              color: t.accentColor === '#B5892A' ? 'var(--brass-soft)' : t.accentColor,
              fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              maxWidth: t.taglinePlacement === 'top-center' ? '80%' : 240,
              lineHeight: 1.3,
            }}>Wealth with Purpose · Philadelphia</span>
          ) : null}
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            border: '3px solid white',
            background: t.avatarStyle === 'photo'
              ? 'linear-gradient(135deg, #2D6A4F, #1B4332)'
              : 'var(--forest)',
            margin: '-36px 0 12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ivory)',
            fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontStyle: 'italic',
            backgroundImage: t.avatarStyle === 'photo'
              ? 'repeating-linear-gradient(45deg, transparent 0 6px, rgba(245,241,235,0.06) 6px 7px)'
              : 'none',
            position: 'relative',
            overflow: 'hidden',
          }}>{t.avatarStyle === 'mark'
            ? <TripleMark size="md" colors={['#D4A84A','#F5F1EB','#7A8290']} />
            : 'M'}</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22, fontWeight: 500, color: 'var(--ink)',
          }}>MOR Wealth Management</div>
          <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>@morwealthmanagement · Philadelphia, PA</div>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: '#374151', marginTop: 14 }}>
            Certified B Corp · Independent RIA. Socially responsible investing, estate planning, and family wealth — rooted in Philadelphia, driven by purpose. Est. 2010.
          </p>
          {t.showBcorp ? (
            <div style={{ marginTop: 12 }}><BCorpMark size={20} /></div>
          ) : null}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
            <Badge tone="forest">B Corp</Badge>
            <Badge tone="brass">SRI</Badge>
            <Badge tone="slate">Philadelphia</Badge>
            <Badge tone="ivory">Estate Planning</Badge>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            <Button variant="primary" size="sm">Follow</Button>
            <Button variant="secondary" size="sm">Message</Button>
          </div>
        </div>
      </div>
      {window.TweaksPanel ? (
        <window.TweaksPanel title="Social Profile">
          <window.TweakSection label="Banner" />
          <window.TweakSelect
            label="Banner color"
            value={t.bannerStyle}
            options={[
              { value: 'forest', label: 'Forest' },
              { value: 'grove',  label: 'Grove' },
              { value: 'ink',    label: 'Ink' },
              { value: 'brass',  label: 'Brass' },
            ]}
            onChange={(v) => setTweak('bannerStyle', v)}
          />
          <window.TweakSlider label="Banner height" value={t.bannerHeight} min={70} max={180} unit="px"
            onChange={(v) => setTweak('bannerHeight', v)} />
          <window.TweakColor label="Tagline color" value={t.accentColor}
            onChange={(v) => setTweak('accentColor', v)} />

          <window.TweakSection label="Tagline" />
          <window.TweakToggle label="Show tagline" value={t.showTagline}
            onChange={(v) => setTweak('showTagline', v)} />
          <window.TweakSelect
            label="Placement"
            value={t.taglinePlacement}
            options={[
              { value: 'top-left',     label: 'Top left' },
              { value: 'top-right',    label: 'Top right' },
              { value: 'top-center',   label: 'Top center' },
              { value: 'bottom-right', label: 'Bottom right' },
            ]}
            onChange={(v) => setTweak('taglinePlacement', v)}
          />

          <window.TweakSection label="Identity" />
          <window.TweakRadio label="Avatar"
            value={t.avatarStyle}
            options={['monogram', 'photo', 'mark']}
            onChange={(v) => setTweak('avatarStyle', v)} />
          <window.TweakToggle label="Show triple-mark" value={t.showTripleMark}
            onChange={(v) => setTweak('showTripleMark', v)} />
          <window.TweakToggle label="Show B-Corp" value={t.showBcorp}
            onChange={(v) => setTweak('showBcorp', v)} />
        </window.TweaksPanel>
      ) : null}
    </div>
  );
}

function PortalPreview() {
  const holdings = [
    { name: 'Parnassus Core Equity', kind: 'SRI · US Equity', val: '$842,310', ret: '+8.2%', up: true },
    { name: 'Calvert Bond', kind: 'SRI · Fixed Income', val: '$316,442', ret: '+3.1%', up: true },
    { name: 'Domini Impact Intl', kind: 'SRI · Intl Equity', val: '$214,890', ret: '−1.4%', up: false },
    { name: 'iShares ESG Aware', kind: 'ESG · Diversified', val: '$118,720', ret: '+5.6%', up: true },
  ];
  return (
    <div style={{ background: 'var(--ivory)', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--rule)' }}>
      {/* Top bar */}
      <div style={{
        background: 'var(--forest)', color: 'var(--ivory)',
        padding: '16px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <MorWordmark size="sm" color="var(--ivory)" tagline={false} />
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          {['Overview','Holdings','Plan','Impact','Documents'].map((i, idx) => (
            <span key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: idx === 0 ? 'var(--brass-soft)' : 'rgba(245,241,235,0.65)',
              fontWeight: idx === 0 ? 500 : 400,
              borderBottom: `2px solid ${idx === 0 ? 'var(--brass)' : 'transparent'}`,
              padding: '4px 0',
              cursor: 'pointer',
            }}>{i}</span>
          ))}
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'rgba(245,241,235,0.1)',
          border: '1px solid rgba(245,241,235,0.3)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontStyle: 'italic',
        }}>S</div>
      </div>

      {/* Body */}
      <div style={{ padding: '40px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--brass)' }}>Welcome back, Sarah</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 44, fontWeight: 400, color: 'var(--forest)',
            margin: '8px 0 4px', letterSpacing: '-0.01em',
          }}>$1,492,362</h2>
          <div style={{ fontSize: 13, color: 'var(--slate)', marginBottom: 28 }}>
            Total balance · <span style={{ color: '#2D6A4F', fontWeight: 500 }}>+4.8% YTD</span> · as of April 26, 2026
          </div>

          {/* Mock chart strip */}
          <div style={{
            height: 180, background: 'var(--parchment)',
            border: '1px solid var(--rule)', borderRadius: 3,
            padding: 18, position: 'relative', marginBottom: 28,
            display: 'flex', alignItems: 'flex-end', gap: 4,
          }}>
            {Array.from({ length: 32 }).map((_, i) => {
              const h = 30 + Math.sin(i * 0.4) * 25 + (i / 32) * 60 + (Math.random() * 10 | 0);
              return <div key={i} style={{
                flex: 1, height: `${h}%`,
                background: i > 26 ? 'var(--brass)' : 'var(--forest)',
                opacity: i > 26 ? 0.9 : 0.6,
                borderRadius: 1,
              }} />;
            })}
            <div style={{ position: 'absolute', top: 14, right: 18 }}>
              <span className="mono" style={{ color: 'var(--slate)' }}>YTD · monthly</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span className="eyebrow" style={{ color: 'var(--slate)' }}>Holdings</span>
            <Button variant="link" icon="arrow">View all</Button>
          </div>
          <div style={{ background: 'var(--parchment)', border: '1px solid var(--rule)', borderRadius: 3 }}>
            {holdings.map((h, i) => (
              <div key={h.name} style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
                padding: '14px 18px', alignItems: 'center',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
                gap: 16,
              }}>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{h.name}</div>
                  <div className="mono" style={{ color: 'var(--slate)', marginTop: 2 }}>{h.kind}</div>
                </div>
                <div className="mono" style={{ color: 'var(--ink)', textAlign: 'right' }}>{h.val}</div>
                <div style={{ textAlign: 'right', color: h.up ? '#2D6A4F' : '#9B2A2A', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>
                  {h.ret}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Impact card */}
          <div style={{
            background: 'var(--forest)', color: 'var(--ivory)',
            padding: 24, borderRadius: 3,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>Your Impact · YTD</span>
              <TripleMark size="sm" colors={['#D4A84A', '#F5F1EB', '#7A8290']} />
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28, lineHeight: 1.3, marginBottom: 16, fontStyle: 'italic',
            }}>Your portfolio funds 40% less fossil-fuel exposure than the S&amp;P 500.</div>
            <div className="rule-thin" style={{ background: 'rgba(245,241,235,0.15)', marginBottom: 14 }} />
            <ImpactRow label="Carbon avoided" val="11.2 tons" />
            <ImpactRow label="Living-wage employers" val="68%" />
            <ImpactRow label="Female-led boards" val="42%" />
          </div>

          {/* Note from advisor */}
          <div style={{
            background: 'var(--parchment)', border: '1px solid var(--rule)',
            padding: 22, borderRadius: 3,
          }}>
            <span className="eyebrow" style={{ color: 'var(--brass)' }}>A Note · April 26</span>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17, fontStyle: 'italic',
              lineHeight: 1.5, color: 'var(--forest)',
              marginTop: 10, marginBottom: 14,
            }}>“A little tax-loss harvesting never hurt nobody — here's what we're doing this April.”</p>
            <Button variant="link" icon="arrow">Read the full note</Button>
          </div>

          <div style={{ padding: '14px 18px', border: '1px solid var(--rule)', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 12 }}>
            <BCorpMark size={22} />
            <div style={{ fontSize: 11, color: 'var(--slate)', lineHeight: 1.5 }}>
              MOR Wealth Management is a Certified B Corporation. Recertified 2024.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactRow({ label, val }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
      <span style={{ color: 'rgba(245,241,235,0.7)' }}>{label}</span>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: 'var(--ivory)' }}>{val}</span>
    </div>
  );
}

Object.assign(window, { Applications });
