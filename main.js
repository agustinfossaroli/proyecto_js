let nombre = prompt('Bienvenido a Mi Tienda. Por favor, ingrese su nombre: ');
let edad = prompt('Hola '+nombre+' ¿eres mayor de 18 años?').toLowerCase();
let bebidaAlcoholica;
let bebidaSinAlcohol;
    function preguntarOpcion(mensaje, opcionesValidas) {
        let opcion;
        let validChoice = false;
    
        while (!validChoice) {
            opcion = parseInt(prompt(mensaje));
            if (opcionesValidas.includes(opcion)) {
                validChoice = true;
            } else {
                alert("Opción no válida. Vuelva a intentarlo.");
            }
        }
        return opcion;
    }
    if (edad === 'si') {
        bebidaAlcoholica = preguntarOpcion(
            '¿Qué estás buscando? Ingrese el número correspondiente \n1 Bebidas alcohólicas \n2 Bebidas sin alcohol',
            [1, 2]
        );
        switch (bebidaAlcoholica) {
            case 1:
                let opcionAlcohol = preguntarOpcion(
                    'Seleccione una opción: \n1 Vino ($2000) \n2 Fernet ($10000)',
                    [1, 2]
                );
                switch (opcionAlcohol) {
                    case 1:
                        alert("Has seleccionado Vino por $2000");
                        break;
                    case 2:
                        alert("Has seleccionado Fernet por $10000");
                        break;
                }
                break;
            case 2:
                let opcionSinAlcohol = preguntarOpcion(
                    'Seleccione una opción: \n1 Con gas \n2 Sin gas',
                    [1, 2]
                );
                switch (opcionSinAlcohol) {
                    case 1:
                        let opcionConGas = preguntarOpcion(
                            'Seleccione una opción: \n1 Coca Cola ($1000)\n2 Sprite ($1000)',
                            [1, 2]
                        );
                        switch (opcionConGas) {
                            case 1:
                                alert("Has seleccionado Coca Cola por $1000");
                                break;
                            case 2:
                                alert("Has seleccionado Sprite por $1000");
                                break;
                        }
                        break;
                    case 2:
                        let opcionSinGas = preguntarOpcion(
                            'Seleccione una opción: \n1 Levité ($800)\n2 Aquarius ($800)',
                            [1, 2]
                        );
                        switch (opcionSinGas) {
                            case 1:
                                alert("Has seleccionado Levité por $800");
                                break;
                            case 2:
                                alert("Has seleccionado Aquarius por $800");
                                break;
                        }
                        break;
                }
                break;
        }
    } else {
        bebidaSinAlcohol = preguntarOpcion(
            '¿Qué tipo de bebida estás buscando? Ingrese el número correspondiente \n1 Gasificada \n2 Sin gas',
            [1, 2]
        );
    
        switch (bebidaSinAlcohol) {
            case 1:
                let opcionConGas = preguntarOpcion(
                    'Seleccione una opción: \n1 Coca Cola ($1000)\n2 Sprite ($1000)',
                    [1, 2]
                );
                switch (opcionConGas) {
                    case 1:
                        alert("Has seleccionado Coca Cola por $1000");
                        break;
                    case 2:
                        alert("Has seleccionado Sprite por $1000");
                        break;
                }
                break;
            case 2:
                let opcionSinGas = preguntarOpcion(
                    'Seleccione una opción: \n1 Levité ($800)\n2 Aquarius ($800)',
                    [1, 2]
                );
                switch (opcionSinGas) {
                    case 1:
                        alert("Has seleccionado Levité por $800");
                        break;
                    case 2:
                        alert("Has seleccionado Aquarius $800");
                        break;
                }
                break;
        }
    }
