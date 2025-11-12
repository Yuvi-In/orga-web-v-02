import Link from 'next/link'

export function MenuButton() {
  return (
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white hover:text-yellow-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </span>
  );
}

export function CloseButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function ReqButton() {
  return (
    <Link
      href="/#contact"
      className="btn btn-primary w-full rounded-full border-2 border-yellow-300 bg-gradient-to-bl from-yellow-300/60 to-sky-400/60 px-4 py-2 text-white duration-300 ease-in-out hover:bg-gradient-to-br hover:from-yellow-400 hover:to-red-500 hover:text-sky-100 hover:opacity-100 hover:transition"
    >
      Request a Quote
    </Link>
  );
}
