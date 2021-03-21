document.getElementById("back").addEventListener("click", function () {
    location.replace("./index.html");
});
function countForms(){
    return document.forms.length;
}
document.getElementById("add").addEventListener("click", function () {
    let id = countForms() + 1;
    let newDiv = document.createElement("LI");
    newDiv.id = `q${id}`;
    newDiv.innerHTML = `<form class="quoteForm q${id}" id="q${id}" >
                <textarea rows = "5" cols = "40" name ="quote" class="quote">
                </textarea>
                <textarea rows = "5" cols = "15" name ="source" class="source">
                </textarea>
                <input type="button" value="delete" class="delete q${id}" onclick="remove('q${id}')">
                <hr>
            </form>`;
    let quoteBlock = document.getElementById("qList");

    quoteBlock.appendChild(newDiv);
});

function remove(id) {
    console.log(id);
    let form = document.getElementById(id);
    form.remove();
}
document.getElementById("save").addEventListener("click", async function () {
    let xttp = new XMLHttpRequest();
    const url = 'http://jmajam.com/COMP4537/labs/DBAss/clear';
    xttp.open("POST",url,true);
    xttp.send("CLEAR");
    xttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("CLEAR");

            let forms = document.forms;
            for (let i = 0; i < forms.length;i++) {
                let f = forms[i];
                let quotes = f.elements[0].value;
                let names = f.elements[1].value;

                if (quotes ==="" || names ==="") {
                    alert("Not a valid input");
                } else {
                    console.log(quotes, names);
                    let xttp = new XMLHttpRequest();
                    //const url = 'http://localhost:8000/COMP4537/labs/DBAss/save';
                    const url = 'http://jmajam.com/COMP4537/labs/DBAss/save';
                    xttp.open("POST",url,true);
                    xttp.setRequestHeader("Content-Type", "application/json");
                    xttp.send(JSON.stringify({"quote":quotes,"name":names}));
                    xttp.onreadystatechange = function () {
                        console.log("processing");
                        if (this.readyState === 4 && this.status === 200) {
                            console.log("POG", xttp.responseText);

                        }
                    }
                }
            }
        }
    };

});

function makeForms() {
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
                let li = document.getElementById("q1");
                li.remove();

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
                <input type="button" value="delete" class="delete q${obj["id"]}" onclick="remove('q${obj["id"]}')">
                <hr>
            </form>`;
                    let quoteBlock = document.getElementById("qList");

                    quoteBlock.appendChild(newDiv);
                })
            }

        }
    }


}
makeForms();