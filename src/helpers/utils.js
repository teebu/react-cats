import _ from 'lodash';

export const removeEmpty = obj => {
  return _.pickBy(obj, _.identity);
};
