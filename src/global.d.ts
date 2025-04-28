interface ImportMeta {
  readonly dirname: string;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
