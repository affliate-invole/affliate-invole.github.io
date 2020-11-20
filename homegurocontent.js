var data, i, x = "";
data = 'https://homeguru.homepro.co.th/wp-json/wp/v2/posts/';
fetch(data)
    .then(res => res.json())
    .then((result) => {
        console.log(result[0])

        for (i = 0; i < 2; i++) {

            console.log(result[i]);
            document.getElementById("homegurucontent").innerHTML += "<p>" + result[i].title.rendered + "</p>";

        }

    })
    .catch(err => { throw err });