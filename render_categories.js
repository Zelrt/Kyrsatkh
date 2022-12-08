'uses strict';

document.addEventListener('DOMContentLoaded', () => {
    const lava = document.querySelectorAll('.glava'),
          main = document.querySelector('.tablo'),
          main_right = document.querySelector('.main_right');
    let categoties = [];
    
    const MainRender = (title, data, author, description, dataPost) => {
        main.innerHTML += ``;
    };

    const response = new XMLHttpRequest();
    response.open("GET", "./database/glaves.json");
    response.setRequestHeader("Content-type", "application/json; charset=utf-8");
    response.send();
    response.addEventListener('load', () => {
            if(response.status === 200) {
                let result = JSON.parse(response.response);
                for (let key in result) {
                    categoties.push(result[key]); 
                }
                console.log(categoties);
            } else {
                console.log('fail');
            }
        });

    lava.forEach(e => {
        e.addEventListener('click', event => {
        let current = event.currentTarget.dataset.cotegoriis;
        main.innerHTML = `
            <tr class="colors_a">
                <th><span class="zag_a">Тема</span></th>
            </tr>`;
        categoties.forEach(e => {
            if (e.dataCall == current ) {
                main.innerHTML += `
            <tr>
                <td>
                    <div class="poloz">
                        <img src="./img/screpka.png" class="text_img">
                        <div>
                            <span class="text_a" data-post="${e.dataPost}">${e.title}</span> <br><br>
                            <span class="telo_a">${e.description}</span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="data_nike">
                        <span class="vrema">${e.date}<span class="vrem_">от </span><span class="nike">${e.author}</span></span>
                    </div>
                </td>
            </tr>`;}
            });
            main_right.style.display = "none";
    });
        });        
    });
    

