import {bind} from './bind';
import {EventAware, EventAwareListener, EventAwareEventNames, UnbindFn} from './types';

export interface Binding {
  [event: string | symbol]: UnbindFn[];
}

export class Binder<T extends EventAware> {
  protected bindings: Binding = {};

  constructor(public target: T) {}

  static create<T extends EventAware>(target: T) {
    return new this(target);
  }

  static for<T extends EventAware>(target: T) {
    return this.create(target);
  }

  bind<E extends EventAwareEventNames<T>>(event: E, listener: EventAwareListener<T, E>): this {
    const unbinds = (this.bindings[event] = this.bindings[event] ?? []);
    unbinds.push(bind(this.target, event, listener));
    return this;
  }

  unbind(...events: string[]): this {
    if (events?.length) {
      // unbind all listeners for events
      for (const event of events)
        if (this.bindings[event]) {
          this.bindings[event]?.map(fn => fn());
          delete this.bindings[event];
        }
    } else {
      // unbind all and clear bindings
      Object.values(this.bindings).map(unbinds => unbinds.map(fn => fn()));
      this.bindings = {};
    }
    return this;
  }
}
