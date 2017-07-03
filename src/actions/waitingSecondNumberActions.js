import { ON_WAITING_SECOND_NUMBER, OFF_WAITING_SECOND_NUMBER } from './types';

export function onWaitingSecond() {
  return {
    type: ON_WAITING_SECOND_NUMBER
  }
}

export function offWaitingSecond() {
  return {
    type: OFF_WAITING_SECOND_NUMBER
  }
}
