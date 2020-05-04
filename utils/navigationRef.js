import React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export function navigateReplace(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
}
