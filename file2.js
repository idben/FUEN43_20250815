var tbody = document.querySelector("table tbody");

loadData();

async function loadData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        console.log(result);
        let contentHTML = "";

        result.forEach((value, index) => {
            console.log(value["地區"]);
            contentHTML += `<tr>
                                <th scope="row">${index + 1}</th>
                                <td>${value["地區"]}</td>
                                <td>${value["欄位名稱"]}</td>
                                <td>${value["數值"]}</td>
                            </tr>`;
        });

        tbody.innerHTML = contentHTML;
    } catch (error) {
        console.log(error);

    }
}