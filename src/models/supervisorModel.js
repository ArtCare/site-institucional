var database = require("../database/config");

function buscarSupervisor(fkMuseu) {
  var instrucaoSql = `select * from supervisor where fkMuseu = ${fkMuseu};`;
  return database.executar(instrucaoSql);
}
function buscarPorEmail(email) {
  var instrucaoSql = `SELECT * FROM supervisor WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}
function cadastrarSupervisor(nome, email, senha, fkMuseu) {
  var instrucaoSql = `
  insert into supervisor (nome, email, senha, fkMuseu) values
  ('${nome}', '${email}', '${senha}', ${fkMuseu})`;

  return database.executar(instrucaoSql);
}


function autenticar(email, senha) {
  var instrucaoSql = `
      SELECT idSupervisor, nome, email, fkMuseu FROM supervisor WHERE email = '${email}' AND senha = '${senha}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function excluirSupervisor(idSupervisor) {
  var instrucaoSql = `  
      DELETE FROM supervisor WHERE idSupervisor = '${idSupervisor}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarSupervisor(idSupervisor, nome, email, senha) {
  var instrucaoSql = `  
      UPDATE supervisor SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE idSupervisor = ${idSupervisor};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}module.exports = { 
  buscarSupervisor,
  cadastrarSupervisor,
  buscarPorEmail,
  autenticar,
  excluirSupervisor,
  atualizarSupervisor
};
