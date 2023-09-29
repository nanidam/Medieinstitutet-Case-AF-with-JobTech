export interface IEducation{
  id: string,
  education: {
    identifier: string,
    resultIsDegree: boolean,
    expires: string,
    recommendedPriorKnowledge: [],
    code: string,
    description: [
      {
        lang: string,
        content: string
      }
    ]
    form: {
      code: string,
      type: string
    }
  }
  events: [
    {
      urls: [
      {
        lang: string,
        content: string
      }
      ]
    }
  ]
  education_providers: [
    {
      name: [
        {
          lang: "swe",
          content: "KYH AB Stockholm"
        }
      ]
    }
  ],
  providerSummary:{
    providers: string[];
  }
}