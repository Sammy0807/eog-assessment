import * as api from "../api";
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
  DELETE_WATERTEMP,
  API_ERROR
} from "../actions";

// get turbing pressure
export const getTpress = () => async dispatch => {
  try {
    const data = await api.tubingPressure;
    dispatch({
      type: GET_TURBING_PRESSURE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getFtemp = () => async dispatch => {
  try {
    const data = await api.flareTemp;
    dispatch({
      type: GET_FLARETEMP,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getinjVO = () => async dispatch => {
  try {
    const data = await api.injValveOpen;
    dispatch({
      type: GET_INJVALVEOPEN,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getOT = () => async dispatch => {
  try {
    const data = await api.oilTemp;
    dispatch({
      type: GET_OILTEMP,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getcasPre = () => async dispatch => {
  try {
    const data = await api.casingPressure;
    dispatch({
      type: GET_CASINGPRESSURE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getWatemp = () => async dispatch => {
  try {
    const data = await api.waterTemp;
    dispatch({
      type: GET_WATERTEMP,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: err.response.statusText
    });
  }
};
