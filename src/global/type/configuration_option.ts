type ConfigurationOption = {
  readonly yml?: boolean;
  readonly html?: boolean;
  readonly json?: boolean;
  readonly regex?: boolean;
  readonly solid?: boolean;
  readonly astro?: boolean;
  readonly ignore?: string[];
  readonly unicorn?: boolean;
  readonly tailwind?: boolean;
  readonly stylistic?: boolean;
  readonly typescript?: boolean;
  readonly perfectionist?: boolean;
};

export type { ConfigurationOption };