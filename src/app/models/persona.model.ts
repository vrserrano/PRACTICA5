export class Persona {
    nombrePersona: string;
    apellidosPersona: string;
    edadPersona: number;
    dniPersona: string;
    cumpleanosPersona: Date;
    colorFavoritoPersona: string;
    sexoPersona: string;

    constructor(nombrePersona: string, apellidosPersona: string, edadPersona: number, dniPersona: string, cumpleanosPersona: Date, colorFavoritoPersona: string, sexoPersona: string) {
        this.nombrePersona = nombrePersona;
        this.apellidosPersona = apellidosPersona;
        this.edadPersona = edadPersona;
        this.dniPersona = dniPersona;
        this.cumpleanosPersona = cumpleanosPersona;
        this.colorFavoritoPersona = colorFavoritoPersona;
        this.sexoPersona = sexoPersona;
    }

    get getNombre(): (string) {
        return this.nombrePersona;
    }

    set setNombre(value: string) {
        if (value == undefined) throw "Introduzca un nombre";
        this.nombrePersona = value;
    }

    get getApellidos(): (string) {
        return this.apellidosPersona;
    }

    set setApellidos(value: string) {
        if (value == undefined) throw "Introduzca los apellidos";
        this.apellidosPersona = value;
    }

    get getEdad(): (number) {
        return this.edadPersona;
    }

    set setEdad(value: number) {
        if (value == undefined) throw "Introduzca la edad";
        this.edadPersona = value;
    }

    get getDni(): (string) {
        return this.dniPersona;
    }

    set setDni(value: string) {
        if (value == undefined) throw "Introduzca el DNI";
        this.dniPersona = value;
    }

    get getCumpleaños(): (string) {
        var mes = this.cumpleanosPersona.getMonth();
        var diaMes = this.cumpleanosPersona.getDate();
        var año = this.cumpleanosPersona.getFullYear();

        return "" + diaMes + "-" + mes + "-" + año;
    }

    set setCumpleaños(value: Date) {
        if (value == undefined) throw "Introduzca su fecha de cumpleaños";
        this.cumpleanosPersona = value;
    }

    get getColorFavorito(): (string) {
        return this.colorFavoritoPersona;
    }

    set setColorFavorito(value: string) {
        if (value == undefined) throw "Introduzca su color favorito";
        this.colorFavoritoPersona = value;
    }

    get getSexo(): (string) {
        return this.sexoPersona;
    }

    set setSexo(value: string) {
        if (value == undefined) throw "Introduzca sexo";
        this.sexoPersona = value;
    }
}