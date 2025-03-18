
document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('form');
    let formdata = localStorage.getItem('userData');
    let obj=JSON.parse(formdata);
    let counter = 0;
    Object.keys(obj).map((key) => {
        console.log(obj[key]);
        // console.log(obj[])
       

        const tableBody = document.getElementById("usersTableBody");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${counter += 1}</td>
            <td><img src="${obj[key]["image"]}" ></td>
            <td>${obj[key]["username"]}</td>
            <td>${obj[key]["email"]}</td>
            <td>${obj[key]["githubUsername"]}</td>
        `;

        tableBody.appendChild(row);

    })


})
document.removeEventListener('DOMContentLoaded', function() {})

