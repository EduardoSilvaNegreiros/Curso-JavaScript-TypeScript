import ValidateCpf from "./validateCpf";

export default class CreateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatted(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '.' +
            cpf.slice(9, 11)
        );
    }

    createNewCpf() {
        const cpfWithOutDigit = this.rand();
        const digit1 = ValidateCpf.generateDigit(cpfWithOutDigit);
        const digit2 = ValidateCpf.generateDigit(cpfWithOutDigit + digit1);
        const newCpf = cpfWithOutDigit + digit1 + digit2;
        return this.formatted(newCpf);
    }
}