const produtos = [
    { numero: '001', nome: 'Caneta Azul', quantidade: 100, saida: '10/05/2024', entrega: '15/05/2024' },
    
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
