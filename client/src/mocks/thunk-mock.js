/**
 * mocked thunk with store
 */

interface Store {
  dispatch?: any;
  getState?: any;
}
const thunk = ({ dispatch, getState }: Store) => (next: any) => (
  action: any
) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunk;
