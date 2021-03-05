const nombre = "Pablo";
const apellido = "Moron";

const completo = nombre + " " + apellido;
console.log(completo);

const template = `${nombre} ${apellido}`;
console.log(template);

console.log(template == completo);

const html1 = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html1);

const html2 = `<h1>Hola</h1>
<p>Mundo</p>`;
console.log(html2);
