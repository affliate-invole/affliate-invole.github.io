function loadproductma(namecat) {
    var datama, i, x = "";
    datama = 'jsondata/csv_ma.json';
    fetch(datama)
        .then(res => res.json())
        .then((result) => {

            for (x = 0; x < 300; x++) {
                if (result[x].name_th == namecat) {

                    document.getElementById("productname").innerHTML += "<div class='card cardmain'>" + "<div class='row cardproduct'>การันตีถูกจริง!! </div>" + "<img src='" + result[x].hp_image_medium + " 'class='card-img-top' alt=' " + result[x].hp_full_desc_th + " ' loading='lazy'></img><div class='card-body'><p class='sku'> SKU: " + result[x].partnumber + "</p></p><p class='productname'> " + result[x].hp_full_desc_th + "</p>" + " <p>" + result[x].price + "</p><a href='" + result[x].url + "'><p class='btnproduct'><button type='button' class='btn btn-primary'>ดูราคาล่าสุด</button></p></a>";
                }
            }

        })
        .catch(err => { throw err });

}

function loadproductsa(namecat) {
    var datasa, i, x = "";
    datasa = 'jsondata/csv_sa.json';
    fetch(datasa)
        .then(res => res.json())
        .then((result) => {

            for (i = 0; i < 10000; i++) {
                if (result[i].name_th == namecat) {

                    document.getElementById("productname").innerHTML += "<div class='card cardmain'>" + "<div class='row cardproduct'>การันตีถูกจริง!! </div>" + "<img src='" + result[i].hp_image_medium + " 'class='card-img-top' alt=' " + result[i].hp_full_desc_th + " ' loading='lazy'></img><div class='card-body'><p class='sku'> SKU: " + result[i].partnumber + "</p></p><p class='productname'> " + result[i].hp_full_desc_th + "</p>" + "<a href='" + result[i].url + "'><p class='btnproduct'><button type='button' class='btn btn-primary'>ดูราคาล่าสุด</button></p></a>";
                }
            }

        })
        .catch(err => { throw err });

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