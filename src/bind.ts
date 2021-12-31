import {EventAware, EventListener, EventNames, UnbindFn} from './types';

export function bind<T extends EventAware, E extends EventNames<T>>(
  target: T,
  event: E,
  listener: EventListener<T, E>,
): UnbindFn {
  target.on(event, listener);

  return function unbind() {
    target.off(event, listener);
  };
}
