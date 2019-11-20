React-redux application to display list of products for an e-commerce website.

**Tech Stack:**

React, Redux, Styled components, Jest, React Testing library, Create React App, json-server (for API mocks)

Other tools:
Prettier - code formatter

**Local Setup Steps:**

- clone repository using `git clone`
- in client folder, run `yarn install` to install the dependencies into root directory
- in server folder, run `yarn install` to install server dependencies
- in server folder, run `yarn start` to start json mocked server on 3000 port
- in client folder, run `yarn start` to start local api server and serve application there.

NOTE: Start api server first before client. As client can end up occupying 3000 port.

**Test suite Steps:**
`yarn test`

Note: `yarn start` to run application on client side

**Assumptions:**

- Using json-server to create fake REST API to return mocked data for product, brand and product type list
- Fetched brand and product type only once as list is static however we can re-fetch them if backend filters these lists on product name change
- Kept application theme resembling to flaconi website in order to ensure smooth transition to product details page on click of 'View details'.

## Available Utilities

Below are the utilities available.

### createConstants

```js
import { createConstants } from "../utils/constant";

// Without the utility
export const NAMESPACE = "manual";
export const STACKTAB_TOGGLE = `${NAMESPACE}/STACKTAB_TOGGLE`;
export const STACKTAB_OPEN = `${NAMESPACE}/STACKTAB_OPEN`;
export const STACKTAB_CLOSE = `${NAMESPACE}/STACKTAB_CLOSE`;

// Usage of the utility
export const NAMESPACE = "manual";
export const STACKTAB = createConstants(NAMESPACE, "stacktab")(
  "TOGGLE",
  "OPEN",
  "CLOSE"
);

// This will generate:
// {
//   TOGGLE: 'manual/STACKTAB_TOGGLE',
//   OPEN: 'manual/STACKTAB_OPEN',
//   CLOSE: 'manual/STACKTAB_CLOSE',
// }
```

### createApiConstants

```js
import { createApiConstants } from "../utils/constant";

// Without the utility
export const NAMESPACE = "manual";
export const SESSION_GET_REQUEST = `${NAMESPACE}/SESSION_GET_REQUEST`;
export const SESSION_GET_SUCCESS = `${NAMESPACE}/SESSION_GET_SUCCESS`;
export const SESSION_GET_FAILURE = `${NAMESPACE}/SESSION_GET_FAILURE`;

// Usage of the utility
export const NAMESPACE = "manual";
export const SESSION_GET = createApiConstants(NAMESPACE, "session_get");

// This will generate:
// {
//   REQUEST: 'manual/SESSION_GET_REQUEST',
//   SUCCESS: 'manual/SESSION_GET_SUCCESS',
//   FAILURE: 'manual/SESSION_GET_FAILURE',
// }
```

### createAction

For more info regarding action structure check [flux standard action](https://github.com/acdlite/flux-standard-action).

```js
import { createAction } from "../utils/action";

// Without the utility
const openStacktab = payload => ({
  type: constants.STACKTAB_OPEN,
  payload
});

// Usage of the utility
const openStacktab = createAction(constants.STACKTAB_OPEN);
```

### createErrorAction

```js
import { createErrorAction } from "../utils/action";

// Without the utility
const removeSessionFailure = payload => ({
  type: constants.SESSION_REMOVE_FAILURE,
  payload,
  error: true
});

// Usage of the utility
const removeSessionFailure = createErrorAction(
  constants.SESSION_REMOVE_FAILURE
);
```

### createApiAction

This utility helps only with super simple api calls

```js
import { createApiAction } from "../utils/action";
import { createApiConstants } from "../utils/constant";

// Without the utility
const getSessionRequest = () => ({
  type: constants.SESSION_GET_REQUEST
});

const getSessionSuccess = (payload, record) => ({
  type: constants.SESSION_GET_SUCCESS,
  payload,
  record
});

const getSessionFailure = (payload, record) => ({
  type: constants.SESSION_GET_FAILURE,
  payload,
  record
});

const getSession = payload => dispatch => {
  dispatch(getSessionRequest());

  return api.getSession(payload).then(
    ({ data }) => dispatch(getSessionSuccess(data)),
    error => {
      dispatch(getSessionFailure(error));
      throw error;
    }
  );
};

// Usage of the utility
const constants = createApiConstants("session_get", "manual"); // <- this should be imported from constants file
const getSession = createApiAction(constants, payload =>
  api.getSession(payload)
);
```
