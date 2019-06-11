export default function configurationReducer(configuration, action) {
  switch (action.type) {
    case 'FETCH_CONFIGURATION':
      return { ...configuration, isLoading: true };
    case 'SET_CONFIGURATION':
      return { ...action.payload, isLoading: false };
    default:
      return configuration;
  }
}
