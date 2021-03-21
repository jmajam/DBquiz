document.getElementById("back").addEventListener("click", function () {
    location.replace("./index.html");
});

function deleteAll(){
    let elem = document.getElementById('qList');
    elem.parentNode.removeChild(elem);
    let ul = document.createElement("UL");
    ul.id = "qList";
    document.body.appendChild(ul);

}
document.getElementById("latest").addEventListener("click",()=>{
    deleteAll();
    let xttp = new XMLHttpRequest();
    //const url = 'http://localhost:8000/COMP4537/labs/DBAss/save';
    const url = 'http://jmajam.com/COMP4537/labs/DBAss/quotes/1';
    xttp.open("GET",url,true);
    xttp.send();

    xttp.onreadystatechange = function () {
        console.log("fasdf");
        if (this.readyState === 4 && this.status === 200) {
            console.log("POGGER", xttp.responseText);

            let items = JSON.parse(xttp.responseText);
            if (items.length !== 0) {

                items.forEach(obj => {
                    let newDiv = document.createElement("LI");
                    newDiv.id = `q${obj.id}`;
                    newDiv.innerHTML = `<form class="quoteForm q${obj["id"]}" id="q${obj["id"]}" >
                                <textarea rows = "5" cols = "40" name ="quote" class="quote">
                                ${obj["quoteData"]}
                                </textarea>
                                <textarea rows = "5" cols = "15" name ="source" class="source">
                                ${obj["nameData"]}
                                </textarea>
                                <hr>
                                </form>`;
                    let quoteBlock = document.getElementById("qList");

                    quoteBlock.appendChild(newDiv);
                })
            }

        }
    }
});

document.getElementById("all").addEventListener("click",()=>{
    deleteAll();
    let xttp = new XMLHttpRequest();
    //const url = 'http://localhost:8000/COMP4537/labs/DBAss/save';
    const url = 'http://jmajam.com/COMP4537/labs/DBAss/quotes';
    xttp.open("GET",url,true);
    xttp.send();

    xttp.onreadystatechange = function () {
        console.log("fasdf");
        if (this.readyState === 4 && this.status === 200) {
            console.log("POGGER", xttp.responseText);

            let items = JSON.parse(xttp.responseText);
            if (items.length !== 0) {

                items.forEach(obj => {
                    let newDiv = document.createElement("LI");
                    newDiv.id = `q${obj.id}`;
                    newDiv.innerHTML = `<form class="quoteForm q${obj["id"]}" id="q${obj["id"]}" >
                                <textarea rows = "5" cols = "40" name ="quote" class="quote">
                                ${obj["quoteData"]}
                                </textarea>
                                <textarea rows = "5" cols = "15" name ="source" class="source">
                                ${obj["nameData"]}
                                </textarea>
                                <hr>
                                </form>`;
                    let quoteBlock = document.getElementById("qList");

                    quoteBlock.appendChild(newDiv);
                })
            }

        }
    }
});