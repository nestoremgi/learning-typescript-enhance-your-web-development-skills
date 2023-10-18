type WithFirstName = {
    firstName: string,
};

type WithLastName = {
    lastName: string,
};

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};

//Its like reduce props
let WithFirstName: WithFirstName = hasBoth;
let WithLastName: WithLastName = hasBoth;