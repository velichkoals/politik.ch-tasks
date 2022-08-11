const table = document.querySelector('.table');
const searchBar = document.querySelector('.header__searchbar');
const tableBody = document.createElement('tbody');
const tableHead = document.querySelector('thead');
const url = 'http://ws-old.parlament.ch/councillors?format=json';

getCouncillorsByQuery(url).then((response) => renderTable(response));

searchBar.addEventListener('keyup', (e) => renderTable(localStorage.getItem('data'),e));

async function getCouncillorsByQuery(url) {
    console.log('called')
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem('data', JSON.stringify(data));

        return JSON.stringify(data);
}


function renderTable(data, event) {
    data = JSON.parse(data);

    tableBody.innerHTML = ''
    let validatedData;

    if (event?.target?.value) {
        let lowerCaseEvent = event.target.value.trim().toLowerCase();
        validatedData = data.filter((item) =>
                item.id.toString().includes(lowerCaseEvent)
                || item.firstName.toLowerCase().includes(lowerCaseEvent)
                || item.lastName.toLowerCase().includes(lowerCaseEvent)
            );
    } else {
        validatedData = data;
    }

    if (event === 'id') {
        sortByType('id', data)
    }
    if (event === 'firstName') {
        sortByType('firstName', data)
    }
    if (event === 'lastName') {
        sortByType('lastName', data)
    }

    validatedData.map((item) => {
        const row = document.createElement('tr');
        const user = {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
        }

        for (let key in user) {
            const rowElem = document.createElement('td');
            rowElem.textContent = user[key];
            row.appendChild(rowElem);
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        })
}

tableHead.addEventListener('click', (e) => {
    const data = localStorage.getItem('data');
    if (e.target.innerText === 'Id') {
        renderTable(data, 'id');
    }
    if (e.target.innerText === 'First Name') {
        renderTable(data, 'firstName');
    }
    if (e.target.innerText === 'Last Name') {
        renderTable(data, 'lastName');
    }
})

function sortByType(type, data) {
    return data.sort((a,b) => a[type] > b[type] ? 1 : -1);
}
