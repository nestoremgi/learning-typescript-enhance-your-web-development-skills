type ArtWork = {
    genre: string;
    name: string;
};

type Writting = {
    page: number;
    name: string;
};

 type WrittingArt = ArtWork & Writting;

 //descrimination type can be used with name

 type ShortPoem = { author: string } & (
    | { kigo: string; type: 'haiku' } 
    | { meter: number; type: 'villanelle'}
 );

 const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: 'haiku',
 };

 const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle"
 }

