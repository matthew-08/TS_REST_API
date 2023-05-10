// This is Pick, lol.
type Optional<T> = {
  [P in keyof T]?: unknown;
};

const pickObject = <T extends object, A extends keyof T>(
  object: T,
  propsToReturn: A[]
): Optional<T> => {
  const objToReturn = propsToReturn.reduce((acc: Optional<T>, prop: A) => {
    acc[prop] = object[prop];
    return acc;
  }, {});
  return objToReturn;
};

export default pickObject;
