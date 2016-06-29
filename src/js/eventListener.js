(function () {

    var EventListener = function () {};

    EventListener.prototype.listen = function (event, method, scope) {
        var listeners, handlers;
        if (!(listeners = this.listeners)) {
            listeners = this.listeners = {};
        }
        if (!(handlers = listeners[event])) {
            handlers = listeners[event] = [];
        }
        scope = scope ? scope : window;
        handlers.push({
            method: method,
            scope: scope
        });
    };

    EventListener.prototype.fireEvent = function (event, data) {
        var listeners, handlers;
        if (!(listeners = this.listeners)) {
            return;
        }
        if (!(handlers = this.listeners[event])) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            var handler = handlers[i];
            handler.method.call(handler.scope, this, event, data);
        }
    };

    module.exports = EventListener;
})();
