function loadproduct(namecat) {
    var datasa, i, x = "";
    datasa = 'jsondata/productfeed.json';
    fetch(datasa)
        .then(res => res.json())
        .then((result) => {

            for (i = Math.floor(Math.random() * Math.floor(50)); i < 50000; i++) {
                if (result[i].name_th == namecat) {

                    document.getElementById("productname").innerHTML += "<div class='card cardmain productcard '>" + "<div class='row cardproduct'>ผ่อน 0% นาน 10 เดือน </div>" + "<a href=' " + result[i].url + "'><img src='" + result[i].hp_image_medium + " 'class='card-img-top' alt='" + result[i].hp_full_desc_th + "' " + result[i].hp_full_desc_th + " ' loading='lazy'></a></img><div class='card-body'><p class='sku'> SKU: " + result[i].partnumber + "</p></p><p class='productname'> " + result[i].hp_full_desc_th + "</p> <p> ราคาล่าสุด " + result[i].price + "</p>" + " <a href='" + result[i].url + "'><p class='btnproduct'><button type='button' class='btn btn-primary'>ดูราคาล่าสุด</button></p></a>";
                }
            }

        })
        .catch(err => { throw err });

}

loadproduct("เครื่องฟอกอากาศ");


function delproduct() {
    document.getElementById("productname").innerHTML = "";
    document.getElementById("loading").innerHTML = "<img src='heart.gif'>";
    setTimeout(document.getElementById("loading").style.display = "none", 2000);

}

function loading(namecat) {
    loadproduct(namecat);
    delproduct();

}