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
  (...args: infer A7): infer R7;
  (...args: infer A8): infer R8;
  (...args: infer A9): infer R9;
  (...args: infer A10): infer R10;
  (...args: infer A11): infer R11;
  (...args: infer A12): infer R12;
  (...args: infer A13): infer R13;
  (...args: infer A14): infer R14;
  (...args: infer A15): infer R15;
  (...args: infer A16): infer R16;
}
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
      | ((...args: A12) => R12)
      | ((...args: A13) => R13)
      | ((...args: A14) => R14)
      | ((...args: A15) => R15)
      | ((...args: A16) => R16)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
      (...args: infer A11): infer R11;
      (...args: infer A12): infer R12;
      (...args: infer A13): infer R13;
      (...args: infer A14): infer R14;
      (...args: infer A15): infer R15;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
      | ((...args: A12) => R12)
      | ((...args: A13) => R13)
      | ((...args: A14) => R14)
      | ((...args: A15) => R15)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
      (...args: infer A11): infer R11;
      (...args: infer A12): infer R12;
      (...args: infer A13): infer R13;
      (...args: infer A14): infer R14;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
      | ((...args: A12) => R12)
      | ((...args: A13) => R13)
      | ((...args: A14) => R14)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
      (...args: infer A11): infer R11;
      (...args: infer A12): infer R12;
      (...args: infer A13): infer R13;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
      | ((...args: A12) => R12)
      | ((...args: A13) => R13)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
      (...args: infer A11): infer R11;
      (...args: infer A12): infer R12;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
      | ((...args: A12) => R12)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
      (...args: infer A11): infer R11;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
      | ((...args: A11) => R11)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
      (...args: infer A10): infer R10;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
      | ((...args: A10) => R10)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
      (...args: infer A9): infer R9;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
      | ((...args: A9) => R9)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
      (...args: infer A8): infer R8;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
      | ((...args: A8) => R8)
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
      (...args: infer A4): infer R4;
      (...args: infer A5): infer R5;
      (...args: infer A6): infer R6;
      (...args: infer A7): infer R7;
    }
  ?
      | ((...args: A1) => R1)
      | ((...args: A2) => R2)
      | ((...args: A3) => R3)
      | ((...args: A4) => R4)
      | ((...args: A5) => R5)
      | ((...args: A6) => R6)
      | ((...args: A7) => R7)
  : T extends {
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
