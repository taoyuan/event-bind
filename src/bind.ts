import {EventAware, EventAwareListener, EventAwareEventNames, UnbindFn} from './types';

export function bind<T extends EventAware, E extends EventAwareEventNames<T>>(
  target: T,
  event: E,
  listener: EventAwareListener<T, E>,
): UnbindFn {
  target.on(event, listener);

  return function unbind() {
    target.off(event, listener);
  };
}
