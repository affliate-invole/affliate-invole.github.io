var data, i, x = "";
data = 'https://homeguru.homepro.co.th/wp-json/wp/v2/posts/';
fetch(data)
    .then(res => res.json())
    .then((result) => {

        for (i = 0; i < 3; i++) {

            console.log(result[i].title.rendered);
            console.log(result[i].featured_media);
            var x = result[i].featured_media;

            document.getElementById("articlehomeguru").innerHTML += "<div class='article'><p><b>" + result[i].title.rendered + "</b></p><div class = 'article-body'><p> " + result[i].content.rendered.slice(0, 180) + "..<a href = '" + result[i].link + "'' > <br>อ่านบทความต่อ </a></p ></div></div>";

        }

    })
    .catch(err => { throw err });




function Imgwp(imgid) {
    var img, k, p = "";
    img = 'https://homeguru.homepro.co.th/wp-json/wp/v2/media/' + imgid;
    fetch(img)
        .then(res => res.json())
        .then((img) => {

            if (img.id = x)
                console.log(img.guid.rendered);
        })
        .catch(err => { throw err });
}

Imgwp(18386);