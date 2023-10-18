/*type Poem = {
    author: {
        firstName: string;
        secondName: string;
    };
    name: string;
};
This was refactorized to the next
*/
type Author = {
    firstName: string;
    secondName: string;
};

type Poem = {
    author: Author;
    name: string;
}


const poemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        secondName: "Plath"
    },
    name: "Lady Lazarus",
};

const poemMismatch: Poem = {
    author: {
        firstName: "Sylvia Plath",
    },
    name: "Tulips",
};