export const validarRegistro = (dados) => {
 
  const erros = [];

  if (!dados.username.trim()) erros.push('O nome de usuário não pode estar vazio!');
  if (!dados.email.includes('@')) erros.push('Por favor, insira um email válido!');
  if (!dados.password.trim()) erros.push('A senha não pode estar vazia!');
  else if (dados.password.length < 6) erros.push('A senha deve ter pelo menos 6 caracteres!');
  if (dados.password !== dados.passwordCheck) erros.push('As senhas não coincidem!');

  // Retornamos um objeto dizendo se é válido e a lista de erros
  return {
    valido: erros.length === 0, // Será true se não houver nenhum erro
    erros: erros // A lista com as mensagens
  };
};