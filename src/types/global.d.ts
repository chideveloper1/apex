interface Window {
  google?: {
    translate: {
      TranslateElement: {
        new (options: any, elementId: string): void;
        InlineLayout: {
          SIMPLE: number;
          HORIZONTAL: number;
        };
      };
    };
  };
  loadGoogleTranslate?: () => void;
}
