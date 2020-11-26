var data, i, x = "";
data = 'https://baannaroo.com/wordpress/wp-json/wp/v2/posts/?_embed&per_page=20';

document.getElementById('articlebaannaroo').innerHTML = "<img src='Ellipsis.gif'><br><p>กำลังดึงข้อมูลบทความ</p>";
setTimeout(2000);
document.getElementById('articlebaannaroo').innerHTML = "<img src='Ellipsis.gif'><br>";
fetch(data)
    .then(res => res.json())
    .then((result) => {
        document.getElementById('articlebaannaroo').innerHTML = " ";


        for (i = 0; i < 6; i++) {

            // console.log(result[i].title.rendered);
            // console.log(result[i].featured_media);
            // console.log(result[i]._embedded['wp:featuredmedia']['0'].source_url);

            document.getElementById("articlebaannaroo").innerHTML += "<div class='article'><p><b>" + result[i].title.rendered + "</b><a href='" + result[i].link + " '><img class='articleimg' src='" + result[i]._embedded['wp:featuredmedia']['0'].source_url + "'></a></p><div class = 'article-body'><p> " + result[i].content.rendered.slice(0, 180) + "..<a href = '" + result[i].link + "' > <br> อ่านบทความต่อ </a></p ></div></div>";

        }

    })
    .catch(err => { throw err });