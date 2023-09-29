import { useEffect, useState } from "react";
import { getEducation } from "../services/educationServices";
import { IEducation } from "../models/IEducation";
import {
  DigiButton,
  DigiLink,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { LinkVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { Link } from "react-router-dom";

interface IEducationResultSummaryProps {
  id: string;
}

export default function EducationResultSummary(
  props: IEducationResultSummaryProps
) {
  const [data, setData] = useState<IEducation>();
  useEffect(() => {
    const getData = async () => {
      const data = await getEducation(props.id);
      setData(data);
    };
    getData();
  }, [props.id]);

  const setDescription = () => {
    localStorage.setItem(
      "educationDescriptionText",
      data ? data.education.description[0].content : ""
    );
  };

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <div className="searchEducationSummary">
          <h4>Utbildningsform:</h4>
          <p>{data?.education.form.code}</p>
          <h4>Utbildningsbeskrivning:</h4>
          <p>{data?.education.description[0].content}</p>
          <h4>Vill du veta mer?</h4>
          <DigiLink
            afHref={data ? data.events[0].urls[0].content : "/"}
            afVariation={LinkVariation.SMALL}
            afTarget="_blank"
          >
            Läs mer på utbildningsanordnarens webbplats
          </DigiLink>
          <br></br>
          <DigiButton onAfOnClick={setDescription}>
            <Link to="/sok-yrke" className="link">
              Se vilka yrkestitlar utbildningen leder till
            </Link>
          </DigiButton>
        </div>
      </DigiTypography>
    </>
  );
}
