const createText = document.querySelector(".create-text");
const replaceText = document.querySelector(".replace-text");
const myUrl = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";

let getData = fetch(myUrl)
  .then((response) => {
    return response.json();
  })
  .catch((error) => console.error(error));

createText.onclick = function () {
  getData.then((data) => {
    let text = data.text.join(" <br> ");
    const ins = document.querySelector(".text");
    ins.innerHTML = text;
  });
};

replaceText.onclick = function () {
  getData.then((data) => {
    const ins = document.querySelector(".text");
    let text = data.text.join(" <br> ");
    console.log("data", text);
    let var1 = document.querySelector("[name=var1]").value;
    text = text.replace(/{var1}/g, var1);
    let var2 = document.querySelector("[name=var2]").value;
    text = text.replace(/{var2}/g, var2);
    let var3 = document.querySelector("[name=var3]").value;
    text = text.replace(/{var3}/g, var3);
    let var4 = document.querySelector("[name=var4]").value;
    text = text.replace(/{var4}/g, var4);
    let var5 = document.querySelector("[name=var5]").value;
    text = text.replace(/{var5}/g, var5);
    let var6 = document.querySelector("[name=var6]").value;
    text = text.replace(/{var6}/g, var6);
    let speach = document.querySelector("[name=speach]").value;
    text = text.replace(/{speach}/g, speach);
    ins.innerHTML = text;
  });
};
