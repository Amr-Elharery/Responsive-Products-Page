// classes:
// content contains product


//Main Color
let myGreen = 'rgb(35, 169, 110)';

//Main Script
let mainScript = document.scripts[0];

//Main Body
let myBody = document.querySelector("body");
myBody.style = "margin:0;padding:0;box-sizing:border-box;font-family:tahoma;";

//                                      Start Header
let myHead = document.createElement("header");
myHead.style = "margin:0;padding:0 10px; display:flex; justify-content:space-between; align-items:center; background-color: #fff;";

let myLogo = document.createElement("div");
myLogo.className = "logo";

let logoText = "Elharery"

myLogo.append(document.createTextNode(logoText))
myLogo.style = `font-weight:bold; color:${myGreen}`

let myUl = document.createElement("ul");
myUl.className = "menu";
myUl.style = "padding:0;"

let myLinks = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < myLinks.length; i++){
    let li = document.createElement("li"); // Li's in UL
    li.style = "list-style-type:none;display:inline-block;padding:5px;"; // Styling Li's

    let a = document.createElement("a"); // Hyper Links In Ul Li
    a.style = "color: #a7a7a7; text-decoration:none;"; // Styling Hyper Links In Ul Li
    a.href = '#'; // Set Link href = #
    a.append(document.createTextNode(myLinks[i])); // Add Links In <a> Element
    li.append(a); // Append <a> element to <li>
    myUl.append(li); // Append <li> to <ul>
}




// Appenf Elements To Header
myHead.append(myLogo);
myHead.append(myUl);

// Appending To Body Before Script
// mainScript.before(myHead);
// Or
// Prepend Header In Body
myBody.prepend(myHead);

//                                      End Header

//                                      Start Content
let myContent = document.createElement("div");
myContent.className = "content";
myContent.style = "padding:15px; background-color:#eee;margin:0; \
                    display: flex; flex-wrap: wrap; gap: 15px";

let numOfProducts = 15;

// Looping on content div to add products
for(let i = 1; i <= numOfProducts; i++) {
    let myProduct = document.createElement("div");
    myProduct.className = "product";
    myProduct.style =
        "width:calc((100% - 30px) / 3);padding: 25px; \
        box-sizing: border-box; background-color: #fff;\
        border-raduis: 6px; text-align: center; ";
        
    let myProductNumber = document.createElement("p");
    myProductNumber.style = "margin:5px 0; ;text-weight:bold;\
                            font-size:22px;color:#000;";
    myProductNumber.append(document.createTextNode(i));
    
    let myProductName = document.createElement("span");
    myProductName.style = "display:block; color: #a7a7a7;\
                            font-size:12px;";
    myProductName.append(document.createTextNode("product"));
    
    //Adding To Product
    myProduct.append(myProductNumber);
    myProduct.append(myProductName);
    myContent.append(myProduct);
    }
    
// Appending To Body After Header
myHead.after(myContent);

    
    //                                      End Content
    //                                      Start Footer

let myFooter = document.createElement("footer");
myFooter.className = "footer";
myFooter.style = `background-color:${myGreen};padding:21px;color:#fff;\
                    text-align:center;`;


//Add Text To Footer
myFooter.append(document.createTextNode("Copyright 2023"));

// Appending To Body After Contnet
myContent.after(myFooter);


//                                  End Footer & Challenge 
//                                             :)😁