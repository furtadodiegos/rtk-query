export interface Options {
  name: string;
  value: string;
  validation: any;
  id: string;
  label?: string;
  placeholder?: string;
}

export type Schema<T = any> = Record<keyof T, Options>;
