const usuario = { nome: "José Aldo", email: "jose11@email.com", idade: 36 };
entrada = [];
console.log("Digite o seu email para encontrar o seu cadastro.");
process.stdin.on("data", function (data) {
  entrada = data.toString().trim();
  if (entrada == usuario.email)
    console.log("Seu email foi encontrado aqui está o seu cadastro. \n");
  console.log(usuario);
});
