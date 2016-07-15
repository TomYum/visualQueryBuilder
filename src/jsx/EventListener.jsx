'use strict';

class EventCollection {
    constructor(parent) {
        this.events = {};
        this.parent = parent || null;
    }

    getEvent(path) {
        let current, event;

        if ('string' == typeof path) {
            path = path.split(':');
        }

        current = path.shift();

        if (!( event = this.events[current])) {
            event = this.events[current] = new Event(current, this.parent);
        }
        return path.length ? event.children.getEvent(path) : event;
    }

    invoke(object, data) {
        let event;
        for (let key in this.events) {
            event = this.events[key];
            //console.log(`EC invoke key ${key}:`);
            event.invoke(object, data);
            //console.log(`EC invoke children of key ${key}:`);
            event.invokeChildren(object, data);
        }
    }
}

class Event {
    constructor(EventPath, Parent = false) {
        this.eventPath = EventPath;
        this.Parent = Parent;
        this.children = new EventCollection(this);
        this.listeners = [];
    }

    invoke(object, data) {
        //console.log(`invoke_event ${this.eventPath}:`);
        let that = this;
        for (let callback of this.listeners) {
            callback.method.call(callback.scope, object, that, data);
        }
    }

    invokeParents(object, data) {
        let parent;
        if (parent = this.Parent) {
            // console.log(`invoke_parent of ${this.eventPath}: ${parent.eventPath}`);
            parent.invoke(object, data);
            parent.invokeParents(object, data);
        }
    }

    invokeChildren(object, data) {
        //console.log(`call invoke children of ${this.eventPath}:`);
        this.children.invoke(object, data);
    }

    addListener(method, scope) {
        let handlers;
        handlers = this.listeners;
        scope = scope ? scope : window;
        handlers.push({
            method: method,
            scope: scope
        });
    }
}

export default class EventListener {
    /**
     * @param invokeAlgorithm
     */
    constructor(invokeAlgorithm = EventListener.invokeSelfWithChildrenAndParents) {
        this.eventCollection = new EventCollection();
        this.invokeAlgorithm = invokeAlgorithm;
    }

    /**
     * invoke algorithm: invoke himself
     */
    static get invokeSelf() {
        return 0;
    }

    /**
     * invoke algorithm: invoke self and children
     * @returns {number}
     */
    static get invokeSelfAndChildren() {
        return 1;
    }

    /**
     * invoke algorithm: invoke self,children an parents
     * @returns {number}
     */
    static get invokeSelfWithChildrenAndParents() {
        return 2;
    }

    /**
     *
     * @param eventPath
     * @param method
     * @param scope
     * @returns {EventListener}
     */
    listen(eventPath, method, scope) {
        let event;

        try {
            if ((event = this.eventCollection.getEvent(eventPath))) {
                scope = scope ? scope : window;
                event.addListener(method, scope)
            }
        } catch (error) {
            throw new Error(`Cannot add listener, because "${error.message}".`);
        }
        return this;
    }

    /**
     * invoke events
     * @param eventPath
     * @param data
     * @returns {EventListener}
     */
    notify(eventPath, data) {
        let event;

        if ((event = this.eventCollection.getEvent(eventPath))) {
            switch (this.invokeAlgorithm) {
                case EventListener.invokeSelfWithChildrenAndParents:
                    event.invokeParents(this, data);
                case EventListener.invokeSelfAndChildren:
                    event.invokeChildren(this, data);
                case EventListener.invokeSelf:
                    event.invoke(this, data);
                    break;
            }
        }
        return this;
    }
}
