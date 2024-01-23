
// Ett exempel när vi fetchar data från ett API

type MyFetchedData = {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Address; // Här använder vi oss av en annan type Adrress (s)
    phone: string;
    website: string;
    company: Company; // Här använder vi oss av en annan type Adrress (s)

}

type Address = {
    street: string;
    suite: string;
    city: string; 
    zipcode: string;
    geo: {
        lat: string;
        long: string;
    }
}


type Company = {
    name: string;
    catchPhrase: string;
    bs: string
}


async function makeFetch(): Promise<void>  {

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data: MyFetchedData[] = await response.json();

//data.forEach((element) => console.log(element))

const users = document.querySelector(".users");
if(users !== null) {

    const div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "user");
    data.forEach(element => {
        div.innerHTML += `<div>${element.name} - ${element.company.name}<div>`;
    })

    users.appendChild(div);
}


}

makeFetch()