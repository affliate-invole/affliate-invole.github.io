var data, i, x = "";
data = '/sa-product.json';


fetch(data)
    .then(res => res.json())
    .then((result) => {

        // console.log(result);
        // console.log(result[33].hp_full_desc_th);
        // console.log(result[33].hp_image_medium);
        // console.log(result[33].partnumber);
        // console.log(result[33].FIELD14)

        for (i = 0; i < 200; i++) {
            // <p id="productname"></p>
            // <p id="img"></p>
            // <p id="SKU:"></p>
            // <p id="link:"></p>
            //result.length
            document.getElementById("productname").innerHTML += "<h2>" + result[i].hp_full_desc_th + "</h2>" + "<br>" + "<p> SKU:" + result[i].partnumber + "</p><br>" + "<img src=" + result[i].hp_image_medium + " width='300' height='300'><br>" + "<a href=" + result[i].FIELD14 + "> คลิ้กลิงค์สินค้า</a>" + "<p>______________________</p>";


            console.log(result[i].hp_full_desc_th);
            console.log(result[i].hp_image_medium);
            console.log(result[i].partnumber);
            console.log(result[i].FIELD14)
        }
    })
    .catch(err => { throw err });