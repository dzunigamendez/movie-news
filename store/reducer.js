import configurationReducer from './configuration-reducer';

export default function reducer({ configuration }, action) {
  return {
    configuration: configurationReducer(configuration, action),
  };
}
