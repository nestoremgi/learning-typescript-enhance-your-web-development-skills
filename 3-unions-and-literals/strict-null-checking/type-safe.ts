let nameMaybe = Math.random() > 0.5 ? 'Tony Hore' : undefined;
nameMaybe.toLocaleLowerCase();//this is not safe because maybe Math.random get undefined and undefined doesnt have toLower