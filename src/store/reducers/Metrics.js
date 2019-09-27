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

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const initialState = {
  val: null,
  current: null,
  time: null,
  error: false
};
