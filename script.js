alert("Welcome to DemandingHack!");
function searchFunction() {
    let query = document.getElementById("search-box").value.toLowerCase();
    let result = document.getElementById("result");

    if (query === "about") {
        result.innerHTML = "You searched for 'About'. Click <a href='#'>here</a> to learn more.";
    } else if (query === "contact") {
        result.innerHTML = "You searched for 'Contact'. Click <a href='#'>here</a> to contact us.";
    } else {
        result.innerHTML = "No results found.";
    }
}
