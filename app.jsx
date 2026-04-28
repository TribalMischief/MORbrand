/* App shell — top bar, tabs, theme switcher, footer. Mounts the four section components. */

const TABS = [
  { id: 'foundations',  label: 'Foundations',  Component: () => <Foundations /> },
  { id: 'components',   label: 'Components',   Component: () => <Components /> },
  { id: 'patterns',     label: 'Patterns',     Component: () => <Patterns /> },
  { id: 'applications', label: 'Applications', Component: () => <Applications /> },
];

function App() {
  const initial = (typeof window !== 'undefined' && window.location.hash || '').replace('#', '');
  const [tab, setTab] = React.useState(TABS.find(t => t.id === initial) ? initial : 'foundations');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '#' + tab);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [tab]);

  const Active = TABS.find(t => t.id === tab).Component;

  return (
    <div className="ds-shell" data-screen-label={`MOR DS · ${tab}`}>
      <TopBar tab={tab} setTab={setTab} />
      <main style={{ flex: 1, background: 'var(--ivory)' }}>
        <Active />
      </main>
      <Colophon />
    </div>
  );
}

function TopBar({ tab, setTab }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,241,235,0.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--rule)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 32px',
        maxWidth: 1480, margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <MorWordmark size="sm" />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--slate)',
            paddingLeft: 18, borderLeft: '1px solid var(--rule-strong)',
          }}>Design System v1.0 · Synthesis</span>
        </div>
        <nav style={{ display: 'flex', gap: 4 }}>
          {TABS.map(t => (
            <button key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                appearance: 'none', background: 'transparent', border: 'none',
                padding: '10px 16px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: tab === t.id ? 'var(--forest)' : 'var(--slate)',
                fontWeight: tab === t.id ? 500 : 400,
                cursor: 'pointer',
                position: 'relative',
                borderBottom: `2px solid ${tab === t.id ? 'var(--brass)' : 'transparent'}`,
                marginBottom: -2,
                transition: 'all 0.18s',
              }}
            >{t.label}</button>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <BCorpMark size={20} />
          <span className="mono" style={{ color: 'var(--slate)' }}>v1.0 · Apr 2026</span>
        </div>
      </div>
    </header>
  );
}

function Colophon() {
  return (
    <footer style={{
      background: 'var(--forest-deep)',
      color: 'rgba(245,241,235,0.6)',
      padding: '40px 32px',
      borderTop: '1px solid rgba(245,241,235,0.08)',
    }}>
      <div style={{
        maxWidth: 1480, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <MorWordmark size="sm" color="var(--ivory)" tagline={false} />
          <span className="mono" style={{ color: 'rgba(245,241,235,0.45)' }}>
            // design system · synthesis direction
          </span>
        </div>
        <div className="mono" style={{ color: 'rgba(245,241,235,0.45)' }}>
          forest #1B4332 · brass #B5892A · ivory #F5F1EB · cormorant + dm sans
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
