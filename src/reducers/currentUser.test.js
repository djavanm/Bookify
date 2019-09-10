import { currentUser } from './currentUser';

describe('currentUser reducer', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state with a found user when FOUND_USER action is passed through', () => {
    const expected = {
        name: 'Djavan'
      };
    const actionObj = {
      type: 'FOUND_USER',
      foundUser: {
        name: 'Djavan'
      }
    };

    const result = currentUser(undefined, actionObj);
    expect(result).toEqual(expected);
  });

  it('should return the new state of null when REMOVE_USER action is passed through', () => {
    const actionObj = {
      type: 'REMOVE_USER'
    };

    const result = currentUser(undefined, actionObj);

    expect(result).toEqual(null);
  });
});
