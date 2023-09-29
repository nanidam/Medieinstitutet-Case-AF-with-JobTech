import axios from "axios";
import { IEducationForms, IEducations } from "../models/IEducations";
import { IEducation } from "../models/IEducation";
import { ISearchEducationParams } from "../models/ISearchEducationParams";

const URL = "https://jobed-connect-api.jobtechdev.se/v1/educations";

//https://jobed-connect-api.jobtechdev.se/v1/educations/

// interface ISearchEducationParams {
//   query?: string;
//   education_type?: string;
//   education_form?: string;
//   municipality_code?: string;
//   pace_of_study_percentage?: string;
//   education_code?: string;
//   distance?: boolean;
//   limit?: number;
//   offset?: number;
// }

export const getEducations = async (params: ISearchEducationParams) => {
  try {
    const response = await axios.get<IEducations>(URL + "?", { params });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getEducation = async (id: string) => {
  try {
    const response = await axios.get<IEducation>(URL + "/" + id);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getEductionForms = async () => {
  try {
    const response = await axios.get<IEducationForms[]>(
      "https://jobed-connect-api.jobtechdev.se/v1/searchparameters/education_forms"
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getMunicipalities = async () => {
  try {
    const response = await axios.get<IEducationForms[]>(
      "https://jobed-connect-api.jobtechdev.se/v1/searchparameters/municipalities"
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getEducationTypes = async () => {
  try {
    const response = await axios.get<IEducationForms[]>(
      'https://jobed-connect-api.jobtechdev.se/v1/searchparameters/education_types' 
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
