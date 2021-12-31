import {EventEmitter} from 'events';
import {AnyFunction} from '../../types';

export class Socket extends EventEmitter {
  on(event: 'close', listener: AnyFunction): this;
  on(event: 'data', listener: (data: Buffer | string) => void): this;
  on(event: string, listener: AnyFunction): this {
    return super.on(event, listener);
  }
}
