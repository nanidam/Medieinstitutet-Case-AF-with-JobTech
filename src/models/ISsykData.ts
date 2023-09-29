export interface ISSYKData {
  title: string;
  variables: ISSYKVariable[];
}

export interface ISSYKVariable {
  code: string;
  text: string;
  values: string[];
  valueTexts: string[];
}
