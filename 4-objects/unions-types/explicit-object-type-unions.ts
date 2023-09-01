type PoemWithPages = {
    name: string;
    pages: number;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
}

type PoemT = PoemWithPages | PoemWithRhymes;

const poemT: PoemT = Math.random() > 0.5 ? { name: "The double Image", pages: 7 }: { name: "Her Kind", rhymes: true };

poemT.name;
poemT.pages;
poemT.rhymes;
