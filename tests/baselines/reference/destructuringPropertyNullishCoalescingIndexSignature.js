//// [tests/cases/compiler/destructuringPropertyNullishCoalescingIndexSignature.ts] ////

//// [destructuringPropertyNullishCoalescingIndexSignature.ts]
// test for #51665

declare const maybeIndexable: { [key: string]: string} | undefined
const { anyThing } = maybeIndexable ?? {};
const { anyThing2 } = maybeIndexable || {};

//// [destructuringPropertyNullishCoalescingIndexSignature.js]
// test for #51665
var anyThing = (maybeIndexable !== null && maybeIndexable !== void 0 ? maybeIndexable : {}).anyThing;
var anyThing2 = (maybeIndexable || {}).anyThing2;
