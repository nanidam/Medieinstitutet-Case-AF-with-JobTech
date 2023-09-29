import axios from "axios";
import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";

const URL = 'https://data.jobtechdev.se/yrkesprognoser/current/Yrkesprognos.json';

export const getCurrentOccupationalForecast = async () => {
  try {
    const response = await axios.get<ICurrentOccupationalForecast[]>(URL)
    return response.data;
  } catch (error) {
    console.error('Error:', error)
  }

}
