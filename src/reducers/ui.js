import * as UiActionTypes from '../actions/ui';

export function paymentModal(state = false, action) {
  switch (action.type) {
    case UiActionTypes.TOOGLE_PAYMENT_MODEL:
      return !state;
    default:
      return state;
  }
}
