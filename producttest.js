function loadproduct(namecat) {
    var datama, i, x = "";
    datama = 'jsondata/csv_sa.json';
    fetch(datama)
        .then(res => res.json())
        .then((result) => {

            for (i = Math.floor(Math.random() * Math.floor(50)); i < 200; i++) {
                if (result[i].name_th == namecat) {

                    document.getElementById("productname").innerHTML += "<div class='card cardmain'>" + "<div class='row cardproduct'>การันตีถูกจริง!! </div>" + "<img src='" + result[i].hp_image_medium + " 'class='card-img-top' alt=' " + result[i].hp_full_desc_th + " ' loading='lazy'></img><div class='card-body'><p class='sku'> SKU: " + result[i].partnumber + "</p></p><p class='productname'> " + result[i].hp_full_desc_th + "</p>" + "<a href='" + result[i].url + "'><p class='btnproduct'><button type='button' class='btn btn-primary'>ดูราคาล่าสุด</button></p></a>";
                }
            }

        })
        .catch(err => { throw err });

}

loadproduct("เตารีด");