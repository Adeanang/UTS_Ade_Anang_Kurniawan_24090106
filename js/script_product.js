document.addEventListener('DOMContentLoaded', function() {
    // Data produk
    let products = [
        { id: 1, name: "Kopi Gula Aren", price: 25000, stock: 50 },
        { id: 2, name: "Kopi Coco", price: 21000, stock: 23 },
        { id: 3, name: "Teh Hitam", price: 18000, stock: 30 },
        { id: 4, name: "Ice Teh Ancu", price: 20000, stock: 33 },
        { id: 5, name: " Ice Coklat Aceh", price: 23000, stock: 20 },
        { id: 6, name: "Coklat Panas", price: 21000, stock: 44 },
        { id: 7, name: "Ice Latte Brown", price: 19000, stock: 25 },
        { id: 8, name: "Latte Pandan", price: 22000, stock: 10 }
    ];
    const tableBody = document.getElementById('productTableBody');
    function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    }
    function renderTable() {
        tableBody.innerHTML = ''; 

        products.forEach((product, index) => {
            const row = tableBody.insertRow();
            row.id = `product-row-${product.id}`; 
            row.insertCell().textContent = index + 1;
            row.insertCell().textContent = product.name;
            row.insertCell().textContent = formatRupiah(product.price);
            row.insertCell().textContent = product.stock;
            const actionCell = row.insertCell();
            const editButton = document.createElement('button');
            editButton.className = 'action-btn edit-btn';
            editButton.innerHTML = '<i class="fas fa-pen"></i>';
            editButton.onclick = () => {
                alert(`Edit produk: ${product.name}`);
            };
            const deleteButton = document.createElement('button');
            deleteButton.className = 'action-btn delete-btn';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.onclick = () => {
                handleDelete(product.id, product.name);
            };

            actionCell.appendChild(editButton);
            actionCell.appendChild(deleteButton);
        });
    }

    function handleDelete(productId, productName) {
        if (confirm(`Yakin hapus produk ${productName} ini?`)) {
            products = products.filter(p => p.id !== productId);
            const rowToRemove = document.getElementById(`product-row-${productId}`);
            if (rowToRemove) {
                rowToRemove.remove();
            }
            renderTable();
        }
    }
    renderTable();
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            if (!confirm('Apakah Anda yakin ingin Logout?')) {
                event.preventDefault(); 
            }
        });
    }
});