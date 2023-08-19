//truthiness and falsiness primitive types on js
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
if (geneticist) {
    //geneticist tiene 2 possibles valores uno es trouthy y otro es falsy
    geneticist.toUpperCase();
}

geneticist && geneticist.toUpperCase();

geneticist.toUpperCase();

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist.toUpperCase();
} else {
    //string is falsy when is empty
    biologist;
}

