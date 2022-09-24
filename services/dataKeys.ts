const dataKeys = Object.freeze({
  req: (key: string) => `/api?data=${key}`,
  dt0: 'mainCards',
  dt1: 'githubLanguagesTranslation',
  dt2: 'devicons',
});

export default dataKeys;
