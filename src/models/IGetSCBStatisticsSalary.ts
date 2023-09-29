export interface IGetSCBStatisticsSalary {

  query: [
    ISCBQuery,
    ISCBFilterByGender,
    ISCBFilterByTime
  ],
  response: {
    format: string
  }
}

interface ISCBQuery {
  code: string,
  selection: {
    filter: string,
    values: string[]
    //SSYK as string
  }
}

interface ISCBFilterByGender {
  code: string,
  selection: {
    filter: string,
    values: string[]
  }
}

interface ISCBFilterByTime {
  code: string,
  selection: {
    filter: string,
    values: string[]
    //array med XXXX-årtalen som efterfrågas i statistiken
  }
}


export interface IGetSCBStatisticsSalaryResponse {
  columns: ISCBColumn[];
  comments: [],
  data: ISCBData[];
  metadata: ISCBMetadata[];
}

interface ISCBColumn {
  code: string,
  text: string,
  type: string,
}

export interface ISCBData {
  key: string[]
  values: string[]
}

interface ISCBMetadata {
  infofile: string,
  updated: string,
  label: string,
  source: string,
}
