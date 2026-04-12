export default function SlideLayout({
  children,
  className = '',
  bgClass = 'bg-slide-light',
  style = {},
}) {
  return (
    <div
      className={`slide-viewport ${bgClass} ${className}`}
      style={style}
    >
      {/* Main scroll area */}
      <div className="slide-content slide-pb">
        {children}
      </div>
    </div>
  )
}
