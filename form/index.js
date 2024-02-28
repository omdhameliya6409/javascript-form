let products = [];

const uimekar = () => {
    document.getElementById("data").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let title = document.createElement("h2");
        title.innerHTML = products[i].title;
        let price = document.createElement("p");
        price.innerHTML = products[i].price;
        let img = document.createElement("img");
        img.src = products[i].img;
      let btn = document.createElement("button");
      btn.innerHTML="delete";
      btn.addEventListener("click",() =>{
        products.splice(i, 1);
        uimekar();
      });
       let div = document.createElement("div");
       div.append(title,img,price,btn);
      document.getElementById("data").append(div);
    }
}

const datap = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("Price").value;
  let password = document.getElementById("password").value;

  if(title.length < 2){
    alert("please enter a title")

    let p = document.createElement("p")

    p.innerHTML="please enater a valid title"

    console.log(p);
    document.getElementById("t-error").append(p)

    return
  }
  if(price < 0){
    alert("please enter a price")

    let h1 = document.createElement("h1")

    p.innerHTML="please enater a valid price"
    console.log(h1);
    document.getElementById("p-error").append(h1)
    return
  }
  if(password.length < 8){
    alert("must be 8 character")

 let h6 = document.createElement("h6")

 h6.innerHTML="please enater a valid password"
 console.log(h6);
 document.getElementById("pass-e").append(h6)
 return
  }
    let product = {
        title: title,
        img: img,
        price: price
    };
    products.push(product);

    uimekar();
}

document.getElementById("form").addEventListener("submit", datap);