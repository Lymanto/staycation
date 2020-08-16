import { FETCH_PAGE } from "../types";
const initialPage = {};

export default function (state = initialPage, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
