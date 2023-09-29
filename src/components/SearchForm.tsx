import {
  ButtonVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  FormTextareaValidation,
  FormTextareaVariation,
  FormValidationMessageVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormInput,
  DigiFormTextarea,
  DigiFormValidationMessage,
} from "@digi/arbetsformedlingen-react";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { ISearchByText } from "../models/ISearchByText";
import {
  DigiFormInputCustomEvent,
  DigiFormTextareaCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import { IOccupation1 } from "../models/IOccupation";

interface ISearchFormProps {
  getWorkData: (search: ISearchByText) => void;
  setSearchData: (data: SetStateAction<IOccupation1 | null>) => void;
}

export default function SearchForm(props: ISearchFormProps) {
  const descriptionFromLocalStorage = localStorage.getItem(
    "educationDescriptionText"
  );

  const [freeSearch, setFreeSearch] = useState<string>("");
  const [headerSearch, setHeaderSearch] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [inputLength, setInputLength] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!descriptionFromLocalStorage) return;
    const getFromLocalStorage = () => {
      handleReset();
      setFreeSearch(descriptionFromLocalStorage);
      setInputLength(wordCount(descriptionFromLocalStorage));
    };
    if (descriptionFromLocalStorage) {
      getFromLocalStorage();
    }
  });

  const getWorkTitles = (e: FormEvent) => {
    e.preventDefault();

    if (inputLength < 3) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);

      let search: ISearchByText;

      if (headerSearch === "") {
        search = {
          input_text: freeSearch,
        };
      } else {
        search = {
          input_text: freeSearch,
          input_headline: headerSearch,
        };
      }
      props.getWorkData(search);
      setFreeSearch("");
      setHeaderSearch("");
      localStorage.removeItem("educationDescriptionText");
    }
  };

  function wordCount(s: string) {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    return s.split(" ").filter(function (str) {
      return str != "";
    }).length;
  }

  function handleFreeSearch(
    e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>
  ) {
    setInputLength(wordCount(freeSearch));
    localStorage.setItem("educationDescriptionText", e.target.value);
    setFreeSearch(e.target.value);
  }

  function handleHeaderSearch(e: DigiFormInputCustomEvent<HTMLInputElement>) {
    const newValue = e.target.value as string;
    setHeaderSearch(newValue);
  }

  function handleReset() {
    props.setSearchData(null);
  }

  return (
    <>
      <section className="searchWorkForm">
        <h2>Sök yrken</h2>
        <form onSubmit={(e: FormEvent) => getWorkTitles(e)}>
          <DigiFormTextarea
            afLabel="Vad innehåller utbildningen du är intresserad av?"
            afLabelDescription="Ange minst tre saker du kommer lära dig på utbildningen"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            afRequired={true}
            onAfOnKeyup={handleFreeSearch}
            afValue={freeSearch}
          ></DigiFormTextarea>
          {!isValid ? (
            <DigiFormValidationMessage
              afVariation={FormValidationMessageVariation.ERROR}
            >
              Du måste ange minst tre ord
            </DigiFormValidationMessage>
          ) : null}
          <DigiFormInput
            afLabel="Vad heter utbildningen?"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            afRequired={false}
            onAfOnKeyup={handleHeaderSearch}
            afValue={headerSearch}
          ></DigiFormInput>
          <DigiButton afType="submit" afVariation={ButtonVariation.PRIMARY}>
            Sök
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
