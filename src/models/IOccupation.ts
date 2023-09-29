export interface IOccupation1 {
  hits_return: number;
  hits_total: number;
  identified_keywords_for_input: IOccupation2;
  related_occupations: IOccupation[];
}

export interface IOccupation2 {
  competencies: [];
  occupations: [];
}

export interface IOccupation {
  id: string;
  occupation_label: string;
  concept_taxonomy_id: string;
  legacy_ams_taxonomy_id: string;
  metadata?: {
    enriched_candidates_term_frequency: {
      competencies: IOccupationCompetencies[];
    };
  };
  occupation_group: {
    occupation_group_label: string;
    concept_taxonomy_id: string;
    ssyk: string;
  };
}

export interface IOccupationCompetencies {
  term: string;
  percennt_for_occupation: number;
}
