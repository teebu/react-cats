import _ from 'lodash';

export const removeEmpty = <T extends Record<string, unknown>>(obj: T): Partial<T> => {
  return _.pickBy(obj, _.identity) as Partial<T>;
};
