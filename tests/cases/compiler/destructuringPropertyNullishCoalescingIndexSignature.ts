// test for #51665
const EMPTY_OBJECT = {};
declare const maybeIndexable: { [key: string]: string }
{
    const { anyThing } = maybeIndexable ?? EMPTY_OBJECT;
}
{
    const { anyThing } = maybeIndexable ?? {};
}
