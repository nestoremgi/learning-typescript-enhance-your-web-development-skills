type PoemWithPagesT = {
    name: string;
    pages: number;
    type: 'pages';
};

type PoemWithRhymesT = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
};

type PoemTypes =  PoemWithPagesT | PoemWithRhymesT;

const poemTypes = Math.random() > 0.5 ? { name: "The double image", pages: 7, type: "pages", } :
{ name: "Her kind", rhymes: true, type: 'rhythm', };

if( poemTypes.type === "pages" ) {
    console.log(`It´s  got pages ${poemTypes.pages}`);
} else {
    console.log(`It´s  rhymes ${poemTypes.rhymes}`);

}

poemTypes.type;

