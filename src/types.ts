export type UnbindFn = () => void;

export type AnyFunction = (...args: any[]) => any;

export interface EventAware {
  on(event: string, listener: AnyFunction): unknown;

  off(event: string, listener: AnyFunction): unknown;
}

// https://github.com/microsoft/TypeScript/issues/32164
type Overloads<T extends (...args: any[]) => any> = T extends {
  (...args: infer A1): infer R1;
  (...args: infer A2): infer R2;
  (...args: infer A3): infer R3;
  (...args: infer A4): infer R4;
  (...args: infer A5): infer R5;
  (...args: infer A6): infer R6;
}
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
    }
  ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3) | ((...args: A4) => R4)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
    }
  ? ((...args: A1) => R1) | ((...args: A2) => R2) | ((...args: A3) => R3)
  : T extends {(...args: infer A1): infer R1; (...args: infer A2): infer R2}
  ? ((...args: A1) => R1) | ((...args: A2) => R2)
  : T extends {(...args: infer A1): infer R1}
  ? (...args: A1) => R1
  : never;

export type OverloadedParameters<T extends (...args: any[]) => any> = Parameters<Overloads<T>>;
export type TupleToObject<T extends [string, any]> = {
  [key in T[0]]: Extract<T, [key, any]>[1];
};

export type EventListenerAddingFn = (eventName: string, listener: (...args: any[]) => void) => any;
// get event map {[event]: listener, ...}
export type EventMap<F extends EventListenerAddingFn> = TupleToObject<OverloadedParameters<F>>;

// get event names from event map
export type EventAwareEventNames<T extends EventAware, F extends keyof EventAware = 'on'> = keyof EventMap<T[F]>;
// get event listener according to event name
export type EventAwareListener<
  T extends EventAware,
  E extends EventAwareEventNames<T, F>,
  F extends keyof EventAware = 'on',
> = EventMap<T[F]>[E] extends never ? AnyFunction : EventMap<T[F]>[E];
