// tslint:disable: no-any

import { useEffect, useReducer } from "react";

interface ActionRequestReducerLoading {
  type: "loading";
}
interface ActionRequestReducerSuccess<State> {
  type: "success";
  payload: State;
}
interface ActionRequestReducerFail {
  type: "fail";
  // tslint:disable-next-line: no-any
  payload: any;
}
type ActionRequestReducer<State> =
  | ActionRequestReducerLoading
  | ActionRequestReducerSuccess<State>
  | ActionRequestReducerFail;

interface StateRequestReducer<State> {
  loading: boolean;
  // tslint:disable-next-line: no-any
  error: any;
  data: State | undefined;
}

type ReducerRequest<S> = (
  state: StateRequestReducer<S>,
  action: ActionRequestReducer<S>
) => StateRequestReducer<S>;
// tslint:disable-next-line: no-any
// eslint-disable-next-line no-unused-vars
const reducerRequest: ReducerRequest<any> = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { loading: false, error: undefined, data: action.payload };
    case "fail":
      const error = action.payload;
      return { loading: false, error, data: undefined };
    default:
      throw new Error("has-no-action");
  }
};

export const useRequest = <PromiseResponse>(
  request: (...any: any[]) => Promise<PromiseResponse>,
  ...params: any[]
): [boolean, any, PromiseResponse | undefined] => {
  const initialState: StateRequestReducer<PromiseResponse> = {
    loading: true,
    error: undefined,
    data: undefined,
  };
  const [state, dispatch] = useReducer<ReducerRequest<PromiseResponse>>(
    reducerRequest,
    initialState
  );

  useEffect(() => {
    dispatch({ type: "loading" });
    request(...params)
      .then((payload) => {
        dispatch({ type: "success", payload });
      })
      .catch((error) => {
        dispatch({ type: "fail", payload: error });
      });
    // eslint-disable-next-line
  }, params);

  return [state.loading, state.error, state.data];
};
