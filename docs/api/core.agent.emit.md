---
id: core.agent.emit
title: Agent.emit() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Agent.emit() method

Broadcasts an `Event` to potential listeners.

Listeners are `IEventListener` instances that declare `eventTypes` and implement an `async onEvent({type, data}, context)` method. Note that `IAgentPlugin` is also an `IEventListener` so plugins can be listeners for events.

During creation, the agent automatically registers listener plugins to the `eventTypes` that they declare.

Events are processed asynchronously, so the general pattern to be used is fire-and-forget. Ex: `agent.emit('foo', {eventData})`

In situations where you need to make sure that all events in the queue have been exhausted, the `Promise` returned by `emit` can be awaited. Ex: `await agent.emit('foo', {eventData})`

In case an error is thrown while processing an event, the error is re-emitted as an event of type `CoreEvents.error` with a `EventListenerError` as payload.

Note that `await agent.emit()` will NOT throw an error. To process errors, use a listener with `eventTypes: [ CoreEvents.error ]` in the definition.

**Signature:**

```typescript
emit(eventType: string, data: any): Promise<void>;
```

## Parameters

| Parameter | Type   | Description                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------- |
| eventType | string | the type of event being emitted                                                                       |
| data      | any    | event payload. Use the same <code>data</code> type for events of a particular <code>eventType</code>. |

**Returns:**

Promise&lt;void&gt;
