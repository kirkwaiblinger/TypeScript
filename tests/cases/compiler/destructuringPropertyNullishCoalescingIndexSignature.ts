// test for #51665

declare const maybeIndexable: { [key: string]: string} | undefined
const { anyThing } = maybeIndexable ?? {};
const { anyThing2 } = maybeIndexable || {};