const usuario = { nome: "José", email: "jose11@email.com", idade: 25 };
entrada = [];
console.log("Digite o seu email para encontrar o seu cadastro.");
process.stdin.on("data", function (data) {
  entrada = data.toString().trim();
  if (entrada == usuario.email) console.log(usuario);
});
