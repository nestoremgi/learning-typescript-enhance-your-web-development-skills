type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { type: 'haiku', kigo: string; };
type Villanelle = ShortPoemBase & { type: 'villanelle', meter: string; };
type ShortPoemType = Haiku | Villanelle;


const oneArt: ShortPoemType = {
    author: "Elizabeth Bishop",
    type: "villanelle"
 };

 const NotPossible =  number & string;
 let notPossible: NotPossible = 0;
 let notString: never = "";
