export interface ISearchEducationParams {
  query?: string;
  education_type?: string;
  education_form?: string;
  municipality_code?: string;
  pace_of_study_percentage?: string;
  education_code?: string;
  distance?: boolean;
  limit?: number;
  offset?: number;
}
