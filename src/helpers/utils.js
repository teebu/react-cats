import _ from 'lodash';

export const removeNull = obj => {
  return _.omitBy(obj, _.isNil)
};
