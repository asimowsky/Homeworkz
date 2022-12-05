
fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => {
        console.log(res);
        if (res.ok) {
            return res.json();
        } else {
            console.error("Check your connection");
        }
    }).then(fakeapi => {
        const ul_list = document.createElement('ul');
        const bodyUl = document.getElementById("test")
        for(let i=1; i<=100;i++){
        const list_item = document.createElement('li');
        const titles = (fakeapi[i].title)
        list_item.innerHTML = titles;
        ul_list.appendChild(list_item);
    
     }
     
     bodyUl.append(ul_list);
    }).catch(err => {
        console.log(err);
    });

fetch("https://jsonplaceholder.typicode.com/photos/21")
    .then(res => {
        console.log(res);
        if (res.ok) {
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


