type SamePoet = {
    name: string;
    born: number;
};

const poetMatch: SamePoet = {
    born: 1935,
    name: "Maya Angelou",
};

const extraPoet: SamePoet = {
    activity : "walking",
    born: 1935,
    name: "Maya Angelou",
};

const existingObject = {
    activity : "walking",
    born: 1935,
    name: "Maya Angelou",
};

const extraPropetyOk: Poet = existingObject;