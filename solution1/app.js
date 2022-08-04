const table = document.querySelector('.table');
const searchBar = document.querySelector('.header__searchbar');
const tableBody = document.createElement('tbody');
const tableHead = document.querySelector('thead');
const url = 'http://ws-old.parlament.ch/councillors?format=json';

getCouncillorsByQuery(url, '');

searchBar.addEventListener('keyup', (e) => getCouncillorsByQuery(url,e));

async function getCouncillorsByQuery(url, event) {
        tableBody.innerHTML = ''

        const response = await fetch(url);
        const data = await response.json();
        let validatedData;

        if (event?.target?.value) {
            validatedData = data.filter((item) =>
                item.id.toString().includes(event.target.value)
                || item.firstName.toLowerCase().includes(event.target.value)
                || item.lastName.toLowerCase().includes(event.target.value)
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
    if (e.target.innerText === 'Id') {
        getCouncillorsByQuery(url, 'id');
    }
    if (e.target.innerText === 'First Name') {
        getCouncillorsByQuery(url, 'firstName');
    }
    if (e.target.innerText === 'Last Name') {
        getCouncillorsByQuery(url, 'lastName');
    }
})

function sortByType(type, data) {
    return data.sort((a,b) => a[type] > b[type] ? 1 : -1);
}
