const files = [
    { name: "Documento1.docx", type: "Documento", lastModified: "10 nov 2023", size: "15 KB" },
    { name: "Imagen.jpg", type: "Imagen", lastModified: "5 nov 2023", size: "2.5 MB" },
    { name: "Presentación.pptx", type: "Presentación", lastModified: "28 oct 2023", size: "5.2 MB" }
];

const fileList = document.getElementById('fileList');
const gridViewContent = document.getElementById('gridViewContent');
const listViewContent = document.getElementById('listViewContent');
const gridViewButton = document.getElementById('gridView');
const listViewButton = document.getElementById('listView');
const newButton = document.getElementById('newButton');

function renderListView() {
    fileList.innerHTML = '';
    files.forEach(file => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 2V9H20" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${file.name}
            </td>
            <td>Yo</td>
            <td>${file.lastModified}</td>
            <td>${file.size}</td>
        `;
        fileList.appendChild(row);
    });
}

function renderGridView() {
    gridViewContent.innerHTML = '';
    files.forEach(file => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 2V9H20" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>${file.name}</p>
        `;
        gridViewContent.appendChild(item);
    });
}

function switchToGridView() {
    gridViewContent.classList.remove('hidden');
    listViewContent.classList.add('hidden');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
    renderGridView();
}

function switchToListView() {
    gridViewContent.classList.add('hidden');
    listViewContent.classList.remove('hidden');
    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
    renderListView();
}

gridViewButton.addEventListener('click', switchToGridView);
listViewButton.addEventListener('click', switchToListView);

/*
newButton.addEventListener('click', () => {
    const newFileName = prompt("Ingrese el nombre del nuevo archivo:");
    if (newFileName) {
        files.unshift({
            name: newFileName,
            type: "Documento",
            lastModified: new Date().toLocaleDateString(),
            size: "0 KB"
        });
        if (gridViewContent.classList.contains('hidden')) {
            renderListView();
        } else {
            renderGridView();
        }
    }
});
*/

// Inicializar la vista
renderListView();
renderGridView();
switchToListView(); // Comenzar con la vista de lista por defecto