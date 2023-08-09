const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://placehold.co/600x400/png',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://placehold.co/600x400/png',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://placehold.co/600x400/png',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://placehold.co/600x400/png',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://placehold.co/600x400/png',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://placehold.co/600x400/png',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://placehold.co/600x400/png',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://placehold.co/600x400/png',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://placehold.co/600x400/png',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://placehold.co/600x400/png',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://placehold.co/600x400/png',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://placehold.co/600x400/png',
    price: 9.99,
  },
];

let uniqvalues = products.reduce(function(pre,value){

  if(pre.includes(value.company)==false){
    pre.push(value.company)
    
  }
  return pre;

},[])
console.log(uniqvalues)

let button = uniqvalues.map(function(value) {

  return `<button class="company-btn" id="com" onclick="filter('${value}')">${value}</button>`
})





function filter(cat)
{
    let filterData= products.filter(function(value) {


       return value.company == cat;
   

    });

    display(filterData)
}

document.getElementById("com").innerHTML = button.join("");

function display(d)
{

  let t = d.map(function(value,index) {

    return (`   <article class="product">
    <img
      src="${value.image}"
      class="product-img img"
      alt=""
    />
    <footer>
      <h5 class="product-name">${value.title}</h5>
      <span class="product-price">${value.price}</span>
    </footer>
  </article>`)


  })


  document.getElementById("product").innerHTML = t.join(" ");


}

display(products);
