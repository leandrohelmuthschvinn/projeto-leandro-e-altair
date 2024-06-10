const produtos = [
    { numero: '001', nome: 'Caneta Azul', quantidade: 100, saida: '10/05/2024', entrega: '15/05/2024' },
    { numero: '002', nome: 'Lápis Preto', quantidade: 50, saida: '12/05/2024', entrega: '17/05/2024' },
    { numero: '003', nome: 'Caderno Grande', quantidade: 30, saida: '11/05/2024', entrega: '16/05/2024' },
    { numero: '012', nome: 'Borracha', quantidade: 200, saida: '14/05/2024', entrega: '19/05/2024' },
    { numero: '013', nome: 'Marcador de Texto', quantidade: 80, saida: '13/05/2024', entrega: '18/05/2024' },   
    { numero: '022', nome: 'Clips', quantidade: 500, saida: '16/05/2024', entrega: '21/05/2024' }
];

const tbody = document.querySelector('tbody');
produtos.forEach((produto) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${produto.numero}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.saida}</td>
        <td>${produto.entrega}</td>
    `;
    tbody.appendChild(row);
});
