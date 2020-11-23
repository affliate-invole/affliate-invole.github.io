function loadproduct(namecat) {
    var data, i, x = "";
    data = 'jsondata/productfeed.json';
    fetch(data)
        .then(res => res.json())
        .then((result) => {

            for (i = 1; i < 500; i++) {
                if (result[i].name_th == namecat) {
                    console.log(result[i]);
                    document.getElementById("productname").innerHTML += "<div class='card cardmain'>" + "<div class='row cardproduct'>การันตีถูกจริง!! </div>" + "<img src='" + result[i].hp_image_medium + " 'class='card-img-top' alt=' " + result[i].hp_full_desc_th + " ' loading='lazy'></img><div class='card-body'><p class='sku'> SKU: " + result[i].partnumber + "</p></p><p class='productname'> " + result[i].hp_full_desc_th + "</p>" + "<a href='" + result[i].url + "'><p class='btnproduct'><button type='button' class='btn btn-primary'>ดูราคาล่าสุด</button></p></a>";
                }
            }

        })
        .catch(err => { throw err });
    delproduct();
}

function delproduct() {
    document.getElementById("productname").innerHTML = "";
}



// loadproduct("พัดลม");
// loadproduct("เครื่องดูดฝุ่น");
// loadproduct("สุขภาพและความงาม");
// loadproduct("เตารีด");

// var y, catdata = "";
// catdata = 'jsondata/catname.json';
// fetch(catdata)
//     .then(res => res.json())
//     .then((catresult) => {

//             for (y = Math.floor(Math.random() * Math.floor(1)); y < 12; y++) {
//                 loadproduct(catresult[y].name_th);
//                 console.log(loadproduct(catresult[y].name_th));
//             }

//         }

//     )
//     .catch(err => { throw err });