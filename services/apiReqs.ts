/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) - 2022
 @license MIT
*//**/

const apiReqs = Object.freeze({
  requestURL: (key: string) => `/api?data=${key}`,
  MAIN_CARDS: 'mainCards',
  GITHUB_COLORS_TRANSLATION: 'githubColorsTranslation'
});

export default apiReqs;
