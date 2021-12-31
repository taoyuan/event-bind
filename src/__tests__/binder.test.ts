import {Socket} from './mocks/socket';
import {Binder} from '../binder';

describe('binder', function () {
  it('should bind multiple listeners', function () {
    const l1 = jest.fn();
    const l2 = jest.fn();
    const socket = new Socket();
    Binder.for(socket).bind('data', l1).bind('data', l2);
    socket.emit('data', 'Hello World');
    expect(l1).toHaveBeenCalledTimes(1);
    expect(l2).toHaveBeenCalledTimes(1);
  });

  it('should unbind multiple listeners', function () {
    const l1 = jest.fn();
    const l2 = jest.fn();
    const socket = new Socket();
    const binder = Binder.for(socket).bind('data', l1).bind('data', l2);
    socket.emit('data', 'Hello World');
    expect(l1).toHaveBeenCalledTimes(1);
    expect(l2).toHaveBeenCalledTimes(1);

    l1.mockClear();
    l2.mockClear();
    binder.unbind();
    socket.emit('data', 'Hello World');
    expect(l1).not.toHaveBeenCalled();
    expect(l2).not.toHaveBeenCalled();
  });
});
