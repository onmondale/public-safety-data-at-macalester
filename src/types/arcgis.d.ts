declare namespace JSX {
    interface IntrinsicElements {
      'arcgis-embedded-map': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'item-id'?: string;
          'portal-url'?: string;
          theme?: string;
          'share-enabled'?: boolean;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
  }
}
