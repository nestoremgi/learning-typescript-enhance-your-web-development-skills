//Properties and methods must be exists on type specified
let rapper = "Queen Latifah";
rapper.length;

//rapper.push(); La propiedad 'push' no existe en el tipo 'string'.ts(2339)

let chier = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
};

//chier.middleName; La propiedad 'middleName' no existe en el tipo '{ firstName: string; lastName: string; }'.ts(2339)