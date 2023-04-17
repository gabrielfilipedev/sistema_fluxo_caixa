// Pega os elementos do formulário
const form = document.querySelector('#form');
const tipo = document.querySelector('#tipo');
const valor = document.querySelector('#valor');
const descricao = document.querySelector('#descricao');

// Pega o elemento onde o histórico será exibido
const tbody = document.querySelector('#tbody');

// Pega o elemento onde o saldo será exibido
const valorSaldo = document.querySelector('#valor-saldo');

// Inicializa o saldo em 0
let saldo = 0;

// Função para adicionar uma transação ao histórico
function adicionarTransacao(tipo, valor, descricao) {
  // Cria uma nova linha na tabela
  const tr = document.createElement('tr');
  
  // Cria as células da linha
  const tdTipo = document.createElement('td');
  const tdValor = document.createElement('td');
  const tdDescricao = document.createElement('td');
  const tdData = document.createElement('td');
  
  // Adiciona o conteúdo nas células
  tdTipo.textContent = tipo;
  tdValor.textContent = `R$ ${valor.toFixed(2)}`;
  tdDescricao.textContent = descricao;
  tdData.textContent = new Date().toLocaleString();
  
  // Adiciona as células na linha
  tr.appendChild(tdTipo);
  tr.appendChild(tdValor);
  tr.appendChild(tdDescricao);
  tr.appendChild(tdData);
  
  // Adiciona a linha na tabela
  tbody.appendChild(tr);
  
  // Atualiza o saldo
  if (tipo === 'entrada') {
    saldo += valor;
  } else {
    saldo -= valor;
  }
  
  // Exibe o saldo na página
  valorSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
}

// Adiciona um listener no formulário para adicionar transações
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Pega os valores dos campos do formulário
  const tipoValor = tipo.value;
  const valorValor = parseFloat(valor.value);
  const descricaoValor = descricao.value;
  
  // Verifica se o valor é válido
  if (isNaN(valorValor) || valorValor <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }
  
  // Adiciona a transação ao histórico
  adicionarTransacao(tipoValor, valorValor, descricaoValor);
  
  // Limpa os campos do formulário
  tipo.value = 'entrada';
  valor.value = '';
  descricao.value = '';
});