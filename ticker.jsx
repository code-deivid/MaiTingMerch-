// ticker.jsx — infinite scrolling marquee of artists/festivals
function Ticker({ items }) {
  const content = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="ticker">
      <div className="ticker-track">
        {content}
        {content}
      </div>
    </div>
  );
}

window.Ticker = Ticker;
