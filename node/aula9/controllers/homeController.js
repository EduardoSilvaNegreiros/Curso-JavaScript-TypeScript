exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="qualquerCoisa"><br>
            <button>Olá Mundo</button>
            </form>
        `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post');
}

