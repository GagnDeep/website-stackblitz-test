import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="35"
      height="30"
      viewBox="0 0 426 426"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M243.579 20.448H253.843C320.259 20.448 351.184 55.1803 364.084 147.822L384.678 146.917L381.909 0H44.091L40.7761 146.917L60.5319 147.822C63.9931 113.09 68.0934 94.359 77.0394 75.7215C92.7881 40.9892 125.643 20.448 166.127 20.448H180.491V340.161C180.491 373.988 178.481 384.678 170.227 392.719C163.358 398.962 149.712 401.598 133.897 401.598H118.148V422.951H305.908V401.598H290.106C274.437 401.598 260.645 398.976 253.843 392.719C245.656 384.678 243.579 373.988 243.579 340.161V20.448ZM35.5044 193.031H122.102V279.496H35.5044V193.031ZM300.583 193.031H387.167V279.496H300.583V193.031Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
