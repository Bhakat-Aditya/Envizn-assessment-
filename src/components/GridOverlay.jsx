export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {/* Diagonal converging lines - left side */}
      <div
        style={{
          position: 'absolute',
          width: '456px',
          height: '0.71px',
          left: 'calc(50% + 440px)',
          top: '16px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(0.42, -0.91, 0.15, 0.99, 0, 0)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '456px',
          height: '0.71px',
          left: 'calc(50% - 610px)',
          top: '17px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(-0.42, -0.91, -0.15, 0.99, 0, 0)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '494px',
          height: '0.71px',
          left: 'calc(50% + 660px)',
          top: '43px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(0.59, -0.81, 0.1, 1, 0, 0)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '494px',
          height: '0.71px',
          left: 'calc(50% - 940px)',
          top: '42px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(-0.59, -0.81, -0.1, 1, 0, 0)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '433px',
          height: '0.73px',
          left: 'calc(50% + 168px)',
          top: '74px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(0.22, -0.98, 0.3, 0.95, 0, 0)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '433px',
          height: '0.73px',
          left: 'calc(50% - 264px)',
          top: '75px',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)',
          transform: 'matrix(-0.22, -0.98, -0.3, 0.95, 0, 0)',
        }}
      />

      {/* Horizontal lines */}
      <div className="grid-line" style={{ top: '103px' }} />
      <div className="grid-line" style={{ top: '140px' }} />
      <div className="grid-line" style={{ top: '188px' }} />
      <div className="grid-line" style={{ top: '337px', background: 'rgba(217,217,217,0.05)' }} />
      <div className="grid-line" style={{ top: '427px', background: 'rgba(217,217,217,0.03)' }} />
    </div>
  )
}
