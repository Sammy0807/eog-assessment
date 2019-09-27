import {
  GET_TURBING_PRESSURE,
  ADD_TURBING_PRESSURE,
  DELETE_TURBING_PRESSURE,
  GET_FLARETEMP,
  ADD_FLARETEMP,
  DELETE_FLARETEMP,
  GET_INJVALVEOPEN,
  ADD_INJVALVEOPEN,
  DELETE_INJVALVEOPEN,
  GET_OILTEMP,
  ADD_OILTEMP,
  DELETE_OILTEMP,
  GET_CASINGPRESSURE,
  ADD_CASINGPRESSURE,
  DELETE_CASINGPRESSURE,
  GET_WATERTEMP,
  ADD_WATERTEMP,
  DELETE_WATERTEMP
} from "../actions";

const initialState = {
  val: null,
  created: null,
  time: null,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TURBING_PRESSURE:
      return {
        ...state,
        val: action.payload
      };
    case ADD_TURBING_PRESSURE:
      return {
        //
      };
    case DELETE_TURBING_PRESSURE:
      return {
        //
      };
    case GET_FLARETEMP:
      return {
        ...state,
        val: action.payload
      };
    case ADD_FLARETEMP:
      return {
        //
      };
    case DELETE_FLARETEMP:
      return {
        //
      };
    case GET_INJVALVEOPEN:
      return {
        ...state,
        val: action.payload
      };
    case ADD_INJVALVEOPEN:
      return {
        //
      };
    case DELETE_INJVALVEOPEN:
      return {
        //
      };
    case GET_OILTEMP:
      return {
        ...state,
        val: action.payload
      };
    case ADD_OILTEMP:
      return {
        //
      };
    case DELETE_OILTEMP:
      return {
        ...state,
        val: action.payload
      };
    case GET_CASINGPRESSURE:
      return {
        ...state,
        val: action.payload
      };
    case ADD_CASINGPRESSURE:
      return {
        //
      };
    case DELETE_CASINGPRESSURE:
      return {
        //
      };
    case GET_WATERTEMP:
      return {
        ...state,
        val: action.payload
      };
    case ADD_WATERTEMP:
      return {
        //
      };
    case DELETE_WATERTEMP:
      return {
        //
      };
    default:
      return state;
  }
};
