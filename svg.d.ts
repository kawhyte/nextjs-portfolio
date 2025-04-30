

declare module '*.svg' {
    import * as React from 'react';
  
    // Define the type for the SVG React component
    // It accepts standard SVG attributes (like className, fill, etc.)
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  
    // If you also need the URL/path of the SVG as a string:
    const src: string;
    // export default src; // Use this if default import gives you the path
  
    // Use this if the default import IS the React component (common with Next.js/SVGR)
    export default ReactComponent;
  }
  