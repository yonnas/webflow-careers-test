/* eslint-disable @typescript-eslint/no-empty-interface */
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

// SVG and HTML type declarations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      svg: React.SVGProps<SVGSVGElement>;
      path: React.SVGProps<SVGPathElement>;
      textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    }
  }
}
