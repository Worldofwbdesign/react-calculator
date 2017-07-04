import { ACTIVATE_READY_RESULT, DISACTIVATE_READY_RESULT } from './types';

export function activateReadyResult() {
  return {
    type: ACTIVATE_READY_RESULT
  }
}

export function disactivateReadyResult() {
  return {
    type: DISACTIVATE_READY_RESULT
  }
}
