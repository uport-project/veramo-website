---
id: event_system
title: Event System
sidebar_label: Event System
---

The event system provides a way for components to interact in a decoupled way. Veramo agents provide a simple event system where events can be emitted by application code or plugin and consumed asynchronously by event listeners.

### Emitting an event

The agent exposes an emit method:

```ts
agent.emit(type, data)
```

Usually events are follow the fire-and-forget pattern.

However, there may be situations where an application may need to make sure all events are consumed before exiting, or that some state change has been performed by an event listener before going forward.

For this situation, there is another pattern that can be used:

```ts
await agent.emit(type, data)
```

### Listening for events

Listeners are registered at the time of agent creation, and are declared alongside the plugin array. In fact, agent plugins can also behave as event listeners.
A listener must declare `eventTypes` that it can handle and an async `onEvent({type, data}, context)` method that will be called when an event is fired.

```ts
const fooEventLogger: IEventListener {
  eventTypes: ['fooEvent']
  onEvent: async (event, context) => { console.log(event.data) }
}

const agent = new Agent({
  plugins: [fooEventLogger,...],
})
```

### Listening for multiple event types

Event listeners can register for multiple event types by using multiple entries in the eventTypes array.
The same `onEvent` method will be called for all types, so it is up to the listener implementation to differentiate between the events if necessary.

```ts
const foobarPlugin: IEventListener = {
  eventTypes: ['fooEvent', 'barEvent'],
  onEvent: async (event, context) => {
    if (event.type === 'fooEvent') {
      const fooData = event.data as FooData
      //do something with fooData
    } else if (event.type === 'barEvent') {
      const barData = event.data as BarData
      //do something with barData
    }
  },
}
```

### Error handling

In case an Error is thrown during the processing of an event, the error is emitted as a new event of type "error" with the Error instance as the event data.
Handling errors, therefore means registering an error listener on the agent.

```ts
const faultyListener: IEventListener {
  eventTypes: ['fooEvent']
  onEvent: async () => { throw new Error('crashing!!'); }
}

const errorLogger: IEventListener {
  eventTypes: ['error']
  onEvent: console.error
}

const agent = new Agent({
  plugins: [faultyListener, errorLogger],
})

```
