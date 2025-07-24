export default function SectionDividerSVG({ direction = "down" }) {
    // direction: "down" or "up"
    const svg =
      direction === "down" ? (
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative -mb-1">
          <path
            d="M0,0 C300,80 1100,0 1440,80 L1440,80 L0,80 Z"
            fill="#023CFF"
            opacity="0.16"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative -mt-1">
          <path
            d="M0,80 C300,0 1100,80 1440,0 L1440,0 L0,0 Z"
            fill="#023CFF"
            opacity="0.16"
          />
        </svg>
      );
    return <div aria-hidden="true">{svg}</div>;
  }
  