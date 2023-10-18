type FirstAndSecondLastNames = {
    first: string,
    last: string,
};

const hasBothNames: FirstAndSecondLastNames = {
    first: "Sarojini",
    last: "Naidu",
};

const hasOnlyOne: FirstAndSecondLastNames = {
    first: "Sarojini",
};

type TimeRange = {
    start: Date;
};

const hasStartString: TimeRange = {
    start: "1879-02-13"
};