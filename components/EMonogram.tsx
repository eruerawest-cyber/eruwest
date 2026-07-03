export default function EMonogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 358 418"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <rect x="0" y="0" width="358" height="63" />
        <rect x="0" y="0" width="66" height="418" />
        <rect x="0" y="355" width="358" height="63" />
        <path d="M119 118H358V298H119V238H293V183H119Z" />
      </g>
    </svg>
  );
}
