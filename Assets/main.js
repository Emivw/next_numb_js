// document.querySelector(
//     "#name"
// ).innerText = `${item["name"].title} ${item["name"].first} ${item["name"].last}`;
// document.querySelector(
//     "#email"
// ).innerText = `${item["email"]}`;
// document.querySelector("#image").src = `${item["picture"].large}`;

// document.getElementById("name").innerHTML = item;
// document.getElementById("email").innerHTML = item;
// document.getElementById("name").innerHTML = [
//     `${item["name"].title} - ${item["name"].first} ${item["name"].last}`,
// ];
// document.getElementById("email").innerHTML = [`${item.email}`];
async function getData() {
    let collections = await fetch("https://randomuser.me/api?results=3");
    let data = collections.json();
    return data;
}

async function displayData() {
    let data = await getData();
    let container = document.querySelector("#container");
    data.results.forEach((item, index) => {
        container.innerHTML += `<div class="card-deck">
                    <div class="card" id="${index}">
                        <img class="card-img-top" src="${item["picture"].large}" alt="Company logo">
                        <div class="card-body">
                            <h5 class="card-title">${item["name"].title} ${item["name"].first} ${item["name"].last}</h5>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-success"><i class="fa fa-briefcase" style="font-size:20px;"></i> Company</li>
                                <li class="list-group-item list-group-item-success"><i class="fa fa-user" style="font-size:20px;"></i> Role</li>
                                <li class="list-group-item list-group-item-success"><i class="fa fa-map-marker" style="font-size:20px;"></i> Location</li>
                                <li class="list-group-item list-group-item-success"><i class="fa fa-clock-o" style="font-size:20px;"></i> Duration</li>
                                <li class="list-group-item list-group-item-success"><i class="fa fa-inr" style="font-size:20px;"></i> Cost</li>
                            </ul>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn" id="left-panel-link">Register</button>
                            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal1" id="right-panel-link">Learn More</button>
                        </div>
                    </div>`
    });
}