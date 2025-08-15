var tbody = document.querySelector("table tbody");
var pagination = document.querySelector(".pagination");
var numPerPage = 4;
var totalPage;

var urlObject = new URL(window.location.href);
var page = urlObject.searchParams.get("page") ?? 1;
console.log(page);


loadData();

async function loadData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        console.log(result);

        // Math.round 無條件進位
        totalPage = Math.round(result.length / numPerPage);
        console.log(totalPage);
        for (let i = 0; i < totalPage; i++) {
            const node = document.createElement("li");
            // 條件運算子的用法, 可以把條件寫在等號的右邊, 變數切換時很方便
            const active = (page == (i + 1)) ? "active" : "_";
            node.classList.add("page-item", active);
            node.innerHTML = `<a class="page-link" href="?page=${i + 1}#file2">${i + 1}</a>`;
            pagination.append(node);
        }

        let contentHTML = "";
        const start = numPerPage * (page - 1);
        const end = numPerPage * page;
        result.slice(start, end).forEach((value, index) => {
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