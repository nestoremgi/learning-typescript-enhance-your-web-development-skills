let admiral: number | string;
admiral = "Grace Hopper";

admiral.toString();
//Error: Esta propiedad no esta en un tipo string
admiral.toFixed();

let inventor: number | string = "Hedy Lamarr";
inventor.toString();
//Error: Esta propiedad no se encuentra en un tipo string
inventor.toFixed();
