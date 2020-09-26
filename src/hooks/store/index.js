import React from 'react';
import globalHook from 'use-global-hook';
import initialState from "./initialState.json";
import actions from "./actions";
export const useGlobal = globalHook(React, initialState, actions);