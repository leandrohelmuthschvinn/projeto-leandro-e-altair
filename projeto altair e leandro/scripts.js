const produtos = [
    { numero: '001', nome: 'Caneta vermelha', quantidade: 100, fornecedor: 'bic', },
    { numero: '002', nome: 'Lápis HB', quantidade: 200, fornecedor: 'Faber-Castell' },
    { numero: '003', nome: 'Caderno Grande', quantidade: 50, fornecedor: 'Tilibra' },
    { numero: '004', nome: 'Borracha', quantidade: 300, fornecedor: 'Mercur' },
    { numero: '005', nome: 'Marcador de Texto', quantidade: 150, fornecedor: 'Stabilo' },
    { numero: '006', nome: 'Régua', quantidade: 80, fornecedor: 'Maped' },
    { numero: '007', nome: 'Pasta Plástica', quantidade: 120, fornecedor: 'DAC' },
    { numero: '008', nome: 'Agenda 2024', quantidade: 30, fornecedor: 'Foroni' },
    { numero: '009', nome: 'Grampeador', quantidade: 40, fornecedor: 'Maxprint' },
    { numero: '010', nome: 'Clips', quantidade: 500, fornecedor: 'Papelmix' }
];


const tbody = document.querySelector('tbody');
produtos.forEach((produto) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${produto.numero}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.fornecedor}</td>
        
    `;
    tbody.appendChild(row);
});