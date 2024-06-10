const produtos = [
    { numero: '001', nome: 'Caneta vermelha', quantidade: 100, entrega: '15/05/2024', fornecedor: 'Papelmix', stats: 'Em análise' },
    { numero: '002', nome: 'Lápis HB', quantidade: 200, entrega: '20/05/2024', fornecedor: 'Faber-Castell', stats: 'Aprovado' },
    { numero: '003', nome: 'Caderno Grande', quantidade: 50, entrega: '18/05/2024', fornecedor: 'Tilibra', stats: 'Recusado' },
    
    { numero: '004', nome: 'Borracha', quantidade: 300, entrega: '22/05/2024', fornecedor: 'Mercur', stats: 'Em análise' },
    { numero: '005', nome: 'Marcador de Texto', quantidade: 150, entrega: '19/05/2024', fornecedor: 'Stabilo', stats: 'Aprovado' },
    { numero: '006', nome: 'Régua', quantidade: 80, entrega: '21/05/2024', fornecedor: 'Maped', stats: 'Recusado' },
    
    { numero: '007', nome: 'Pasta Plástica', quantidade: 120, entrega: '17/05/2024', fornecedor: 'DAC', stats: 'Em análise' },
    { numero: '008', nome: 'Agenda 2024', quantidade: 30, entrega: '16/05/2024', fornecedor: 'Foroni', stats: 'Aprovado' },
    { numero: '009', nome: 'Grampeador', quantidade: 40, entrega: '23/05/2024', fornecedor: 'Maxprint', stats: 'Recusado' },
    
    { numero: '010', nome: 'Clips', quantidade: 500, entrega: '24/05/2024', fornecedor: 'Papelmix', stats: 'Em análise' }
];

const tbody = document.querySelector('tbody');
produtos.forEach((produto) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${produto.numero}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.fornecedor}</td>
        <td>${produto.entrega}</td>
        <td>${produto.stats}</td>
    `;
    tbody.appendChild(row);
});
