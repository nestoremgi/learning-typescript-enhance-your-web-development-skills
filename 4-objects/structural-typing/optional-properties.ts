type Book = {
    author?: string;
    pages: number;
};

const bookOk: Book = {
    author: "Rita Dove",
    pages: 80,
};

const missingBook: Book = {
    author: "Rita Dove",
};

//undefined is not same that use ?
type Writter = {
    author: string | undefined;
    editor?: string;
};

const hasRequired: Writter = {
    author: undefined
};

const missingRequired: Writter = {};