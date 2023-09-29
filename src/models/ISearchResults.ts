export interface ISearchResults {
  hits_total: number;
  hits_returned: number;
  identified_keywords_for_input: {
    competencies: string[];
    occupations: string[];
  };
  related_occupations: {
    id: string;
    occupation_label: string;
    concept_taxonomy_id: string;
    legacy_ams_taxonomy_id: string;
    occupation_group: {
      occupation_group_label: string;
      concept_taxonomy_id: string;
      ssyk: string;
    };
  }[];
}
