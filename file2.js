var tbody = document.querySelector("table tbody");
var pagination = document.querySelector(".pagination");
var numPerPage = 4;
var totalPage;

loadData();

async function loadData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        console.log(result);
        totalPage = Math.round(result.length / numPerPage);
        console.log(totalPage);
        for (let i = 0; i < totalPage; i++) {
            const node = document.createElement("li");
            node.classList.add("page-item");
            node.innerHTML = `<a class="page-link" href="#">${i + 1}</a>`;
            pagination.append(node);
        }

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