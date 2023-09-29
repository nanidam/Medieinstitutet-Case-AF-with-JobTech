/* eslint-disable no-mixed-spaces-and-tabs */
import {
  FormTextareaVariation,
  FormTextareaValidation,
  ButtonSize,
  ButtonVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormSelect,
  DigiFormTextarea,
} from "@digi/arbetsformedlingen-react";
import {
  DigiFormSelectCustomEvent,
  DigiFormTextareaCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useEffect, useState } from "react";
import {
  getEducationTypes,
  getEducations,
  getMunicipalities,
} from "../services/educationServices";
import { IEducationForms, IEducations } from "../models/IEducations";
import { StyledDigiLoaderSpinner } from "./styled/Loader";

interface ISubmitSearchEduProps {
  showNoResult: boolean;
  setShowNoResult: (value: boolean) => void;
  setSerachEduData: (value: IEducations | null) => void;
  setIsLoading: (value: boolean) => void;
  setEduSeachHistory: (value: object) => void;
}

export default function SearchEducation({
  showNoResult,
  setShowNoResult,
  setSerachEduData,
  setIsLoading,
  setEduSeachHistory,
}: ISubmitSearchEduProps) {
  const [searchEduText, setSearchEduText] = useState<string | undefined>(
    undefined
  );
  const [municipalities, setMunicipalities] = useState<IEducationForms[]>([]);
  const [eduTypes, setEduTypes] = useState<IEducationForms[]>([]);
  const [remote, setRemote] = useState<boolean>(true);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string | undefined>(undefined);
  const [isFormLoading, setIsFormLoading] = useState<boolean>(true);

  const getData = async () => {
    const municipalitiesData = await getMunicipalities();
    if (municipalitiesData) {
      setMunicipalities(municipalitiesData);
    }
    const eduTypeData = await getEducationTypes();
    if (eduTypeData) {
      setEduTypes(eduTypeData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getData()]);
      setIsFormLoading(false);
    };

    fetchData();
  }, []);

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const search = {
      query: searchEduText,
      distance: remote,
      municipality_code: location,
      education_type: type,
    };
    setEduSeachHistory(search);
    const result = await getEducations(search);

    if (result) {
      if (result.hits > 0) {
        setShowNoResult(false);
        setSerachEduData(result);
      } else {
        setSerachEduData(result);

        if (!showNoResult) {
          setShowNoResult(true);
        }
      }
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSerachEduData(null);
  };

  const textInput = (e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>) => {
    if (e.target.value === "") {
      setSearchEduText(undefined);
    } else {
      setSearchEduText(e.target.value);
    }
  };

  const handleRemote = (
    e: DigiFormSelectCustomEvent<HTMLDigiFormSelectElement>
  ) => {
    if (e.target.value === "yes") {
      setRemote(true);
    } else if (e.target.value === "no") {
      setRemote(false);
    }
  };

  const handleLocation = (
    e: DigiFormSelectCustomEvent<HTMLDigiFormSelectElement>
  ) => {
    if (e.target.value === "anywhere") {
      setLocation(undefined);
    } else {
      setLocation(e.target.value);
    }
  };

  const handleType = (
    e: DigiFormSelectCustomEvent<HTMLDigiFormSelectElement>
  ) => {
    if (e.target.value === "all") {
      setType(undefined);
    } else {
      setType(e.target.value);
    }
  };

  if (isFormLoading) {
    return <StyledDigiLoaderSpinner></StyledDigiLoaderSpinner>;
  } else {
    return (
      <>
        <section className="searchEducationForm">
          <h2>Sök utbildning</h2>
          <form
            onSubmit={(e: FormEvent) => {
              submitSearchEdu(e);
            }}
          >
            <DigiFormTextarea
              afLabel="Vilket yrke vill du att utbildningen ska leda till?"
              afVariation={FormTextareaVariation.MEDIUM}
              afValidation={FormTextareaValidation.NEUTRAL}
              onAfOnKeyup={textInput}
              afValue={searchEduText}
            ></DigiFormTextarea>
            <DigiFormSelect
              afLabel="Vill du läsa på distans?"
              afDescription="Om du väljer 'ja' visas utbildningar som är helt eller delvis på distans"
              onAfOnChange={handleRemote}
            >
              <option value="yes">Ja</option>
              <option value="no">Nej</option>
            </DigiFormSelect>
            <DigiFormSelect
              afLabel="Vill du läsa kurs eller program?"
              afPlaceholder="Kurs eller program"
              onAfOnChange={handleType}
            >
              <option value="all">Alla</option>
              {eduTypes.map((type) => (
                <option key={type.key} value={type.key}>
                  {type.value}
                </option>
              ))}
            </DigiFormSelect>
            <DigiFormSelect
              afLabel="Vart vill du studera?"
              afPlaceholder="Välj stad"
              onAfOnChange={handleLocation}
            >
              <option value="anywhere">Hela Sverige</option>
              {municipalities.map((location) => (
                <option key={location.key} value={location.key}>
                  {location.value}
                </option>
              ))}
            </DigiFormSelect>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.PRIMARY}
              afFullWidth={false}
              afType="submit"
            >
              Sök utbildning
            </DigiButton>
            <DigiButton
              afType="button"
              afVariation={ButtonVariation.SECONDARY}
              onAfOnClick={handleReset}
            >
              Rensa sökresultat
            </DigiButton>
          </form>
        </section>
      </>
    );
  }
}
