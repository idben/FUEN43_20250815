loadData();

async function loadData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);

    }
}