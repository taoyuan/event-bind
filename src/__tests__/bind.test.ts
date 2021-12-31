import {bind} from '../bind';
import {Socket} from './mocks/socket';

describe('bind', function () {
  it('should bind a listener', function () {
    const socket = new Socket();
    const onData = jest.fn();
    bind(socket, 'data', onData);
    socket.emit('data', 'Hello World');
    expect(onData).toHaveBeenCalledTimes(1);
  });

  it('should unbind a listener', function () {
    const socket = new Socket();
    const onData = jest.fn();
    const unbind = bind(socket, 'data', onData);
    socket.emit('data', 'Hello World');
    expect(onData).toHaveBeenCalledTimes(1);

    // Going to unbind
    onData.mockClear();
    unbind();
    socket.emit('data', 'Hello World');
    expect(onData).not.toHaveBeenCalled();
  });
});
