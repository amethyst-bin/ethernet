import { memo } from '../../../lib/teact/teact';

interface OwnProps {
  isOwn?: boolean;
}

function MessageAppendix({ isOwn }: OwnProps) {
  return (
    <svg width="9" height="17" viewBox="0 0 9 17" className="svg-appendix" aria-hidden="true">
      <g fill="none" fillRule="evenodd">
        <path
          className="corner-right"
          d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
          fill="var(--appendix-bg, var(--color-background-own, currentColor))"
        />
        <path
          className="corner-left"
          d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
          fill="var(--appendix-bg, var(--color-background-secondary, currentColor))"
        />
      </g>
    </svg>
  );
}

export default memo(MessageAppendix);
