# event-bind

> An event binder utility for event binding and unbinding easier

## Usage

`socket.ts`

```ts
// socket.ts

import {AnyFunction} from 'event-bind';

// A event aware class
export class Socket extends EventEmitter {
  on(event: 'close', listener: AnyFunction): this;
  on(event: 'data', listener: (data: Buffer | string) => void): this;
  on(event: string, listener: AnyFunction): this {
    return super.on(event, listener);
  }
}
```

### `bind` one listener

```ts
import {bind} from 'event-bind';

// any event emitter
const socket = new Socket();

const unbind = bind(socket, 'data', data => {});

// after all done
unbind();
```

### `Binder` for multiple listeners

```ts
import {Binder} from 'event-bind';

// any event emitter
const socket = new Socket();

const binder = Binder.for(socket)
  .bind('data', data => {})
  .bind('close', () => {});

// after all done
// unbind all
binder.unbind();

// unbind exact properties
binder.unbind('data', 'close');
```
