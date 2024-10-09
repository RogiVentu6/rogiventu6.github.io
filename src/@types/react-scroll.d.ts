declare module 'react-scroll' {
    export function Link(props: any): JSX.Element;
    export function Element(props: any): JSX.Element;
    export function scrollTo(props: any): void;
    export function scrollSpy(props: any): void;
    export function animateScroll(props: any): void;
  
    export interface ScrollLinkProps {
      to: string;
      smooth?: boolean | string;
      duration?: number;
      offset?: number;
      onClick?: () => void;
      // Otros props que quieras definir
    }
  
    export interface ElementProps {
      name: string;
      // Otros props que quieras definir
    }
  }
  