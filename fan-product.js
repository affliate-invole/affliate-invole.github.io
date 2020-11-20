var data, i, x = "";
data = 'jsondata/csv_sa.json';

fetch(data)
    .then(res => res.json())
    .then((result) => {
        //console.log(result.name_th);


        for (i = 0; i < 300; i++) {

            if (result[i].name_th == "พัดลม") {
                document.getElementById("productname").innerHTML += "<div class='card cardmain'>" + "<div class='row cardproduct'>การันตีถูกจริง!! </div>" + "<img src='" + result[i].hp_image_medium + " ' class='card-img-top' alt='...'></img><div class='card-body'><p class='productname'> " + result[i].hp_full_desc_th + "</p>" + "<a href='" + result[i].url + "'><button type='button' class='btn btn-primary'>ดูราคาสินค้าล่าสุด</button></a>";
            }
        }


    })
    .catch(err => { throw err });