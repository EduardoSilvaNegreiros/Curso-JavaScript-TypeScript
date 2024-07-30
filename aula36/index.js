const elements = [
    {tag: 'p', text: 'Qualquer texto que voce quiser'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let {tag, text} = elements[i];
    let tagCreated = document.createElement(tag);
    let textCreated = document.createTextNode(text);
    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated);
};

container.appendChild(div);