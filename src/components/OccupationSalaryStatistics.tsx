import {
  ChartLineData,
  LoaderSpinnerSize,
  QuoteMultiContainerHeadingLevel,
} from "@digi/arbetsformedlingen";
import { ChartLineParent, StyledChartLine } from "./styled/CharLine";
import { StyledDigiLoaderSpinner } from "./styled/Loader";

interface ISalaryStatisticsProps {
  chartLineXValues: string[];
  chartLineYValues: number[];
  isLoading: boolean;
}

export const SalaryStatistics = ({
  chartLineXValues,
  chartLineYValues,
  isLoading,
}: ISalaryStatisticsProps) => {
  const chartLineXValuesToIndexArray: number[] = chartLineXValues.map(
    (_, index) => index + 1
  );

  const afChartData: ChartLineData = {
    data: {
      xValues: chartLineXValuesToIndexArray,
      series: [
        {
          yValues: chartLineYValues,
          title: "Medellön",
        },
      ],
      xValueNames: chartLineXValues,
    },
    x: "År",
    y: "y-axis",
    title: "Löneutveckling 2017-2022",
    subTitle: "Källa: SCB",
    infoText: "",
  };

  return (
    <>
      <ChartLineParent>
        {isLoading ? (
          <StyledDigiLoaderSpinner
            afSize={LoaderSpinnerSize.LARGE}
          ></StyledDigiLoaderSpinner>
        ) : (
          <StyledChartLine
            afChartData={JSON.stringify(afChartData)}
            afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
          ></StyledChartLine>
        )}
      </ChartLineParent>
    </>
  );
};
