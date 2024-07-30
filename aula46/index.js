// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou um erro');
//     console.log('Fechei o arquivo');


//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally.');
//     }


// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function horaAtual (data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


try{
    const data = new Date ('01-01-1970 12:58:12');
    const hora = horaAtual(11);
    console.log(hora);
} catch (error) {
    console.log(error)
} finally {
    console.log('Tenha um bom dia.');
}