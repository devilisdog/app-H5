import { SET_USER_INFO } from '@/constants/index';

export const INITIAL_STATE = {};

export default function user(
  state = INITIAL_STATE,
  action: { type: string; value: any },
) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
}
