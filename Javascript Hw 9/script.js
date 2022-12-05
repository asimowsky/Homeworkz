fetch("https://jsonplaceholder.typicode.com/todos/125")
    .then(res => {
        console.log(res);
        if(res.ok) {
            return res.json();
        } else {
            console.error("Check your connection");
        }
    }).then(fakeapi => {
        const idLeft = document.getElementById("id-left");
        const titleLeft = document.getElementById("title-left");
      idLeft.innerText = "ID: "+fakeapi.id;
      titleLeft.innerText= " Text: " + fakeapi.title;
     
    }).catch(err => {
        console.log(err);
    });

    fetch("    https://jsonplaceholder.typicode.com/photos/21")
    .then(res => {
        console.log(res);
        if(res.ok) {
            return res.json();
        } else {
            console.error("Check your connection");
        }
    }).then(fakeapi_photos => {
        const fetchImg = document.getElementById("img-left");
        fetchImg.src = fakeapi_photos.url;
        fetchImg.style.width = "200px";
     
    }).catch(err => {
        console.log(err);
    });

