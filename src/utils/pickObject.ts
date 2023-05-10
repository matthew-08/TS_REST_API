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

export type Entity =
  | {
      type: 'user';
    }
  | {
      type: 'post';
    }
  | {
      type: 'comment';
    };

type EntityWithId = {
  [EntityType in Entity['type']]: {
    type: EntityType;
  };
}[Entity['type']];

type TestThree = {
  [E in Entity['type']]: {
    amazing: E;
  };
}[Entity['type']];

export const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type FruitCounts = typeof fruitCount;

type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

type Test = {
  apple: string;
  pear: string;
  banana: string;
}[keyof FruitCounts];
