import { IOccupation } from "../models/IOccupation";

interface IAction {
  type: string;
  payload: IOccupation[];
}

export const EnrichedOccupationReducer = (
  state: IOccupation[],
  action: IAction
): IOccupation[] => {
  if (action.type === "GOT_ENRICHED_DATA") {
    return action.payload;
  }

  return state;
};
