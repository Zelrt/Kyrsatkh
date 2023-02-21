'uses strict';

document.addEventListener('DOMContentLoaded', () => {
    let   lava = document.querySelectorAll('.glava'),
          main = document.querySelector('.tablo'),
          main_right = document.querySelector('.main_right');
    let categoties = [],
        a = 0,
        stats = [];
    
    const MainRender = (title, data, author, description, dataPost) => {
        main.innerHTML += ``;
    };

    const response1 = new XMLHttpRequest();
    response1.open("GET", "./database/stats.json");
    response1.setRequestHeader("Content-type", "application/json; charset=utf-8");
    response1.send();
    response1.addEventListener('load', () => {
            if(response1.status === 200) {
                let result1 = JSON.parse(response1.response);
                for (let key in result1) {
                    stats.push(result1[key]); 
                }
            } else {
                console.log('fail1');
            }
        });

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
            } else {
                console.log('fail');
            }
        });
function abc() {
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
                        <span class="vrema">${e.date}<span class="vrem_"> от </span><span class="nike">${e.author}</span></span>
                    </div>
                </td>
            </tr>`;}
            a = 1;
            });
            setTimeout(() => {
                let text_a = document.querySelectorAll(".text_a");
            text_a.forEach(e => {
                e.addEventListener("click", event => {
                    document.querySelector("main").innerHTML = "";
                    stats.forEach(e => {
                        if (e.id ==  event.currentTarget.dataset.post) {
                            document.querySelector("main").innerHTML = `
                            <div class="Imaine">
            <h1 class="Izag">${e.head}</h1>
            <p class="Icontent">${e.stat}</p><hr>
        <div class="polzole">
            <div class="img_plz">
            <img  class="avatarka" src="/img/avatar/${e.afka}.jpg">
                 </div>
            <div class="kto_eto">
            <p><span class="nickI">${e.author}</span><br><span class="dateI">${e.data}</span></p>
            </div>
            <div class="bred">
                <div class="otital"><img class="otital_img" src="/img/icon/otital.png"></div>
                <div class="posmotret"><img class="posmotre_img" src="/img/icon/glaz.png"><p class="smotr"> ${e.watch}</p></div>
                <div class="Like"><img class="dizI" src="/img/icon/like.png"><p class="smotr2">${e.smotr2}</p></div>
                <div class="diz"><img class="dizI" src="/img/icon/diz.png"><p class="smotr3"">${e.smotr3}</p></div>
             </div>
        </div>
    </div>`;
                        }
                    });
                    
                });
            });
            }, 500);
            
            
            main_right.style.display = "none";
    });
        });  
        
    document.querySelector(".left_heder").addEventListener("click", () => {
        document.querySelector("main").innerHTML = `
        <div class="main_left">
            <div class="main_content">
                <div class="main_title">
                    <br><br>
                    <h1>Форумы GoodG — обсуждение игр</h1>
                    <br><br>
                    <table class="tablo" width="100%">
                       <tr class="colors">
                            <th width="60%"><span class="content1">Форумы</span></th>
                            <th width="25%"><span class="content2">Тем</span></th>
                            <th width="15%"><span class="content3">Ответы</span></th>
                        </tr> 
                            <tr>
                                <td> <br></div><div class="content4"><img src="./img/favicon/home_tem.png" class="hom_img"><div><span data-cotegoriis="1" class="glava">Общий</span><br><span class="opisan">Общие темы.</span></div></div></td>
                                <td></div><span class="content2">2740</span></div></td>
                                <td></div><span class="content3">53432</span></td><br>
                            </tr>
                            <tr class="tras">
                                <td colspan ="3">
                                    <div class="br_height_one"></div>
                                </td> 
                            </tr>
                            <tr>
                                <td><div class="content4"><img src="./img/favicon/iron.png" class="hom_img"><div><span data-cotegoriis="2" class="glava">Компьютерное железо</span><br><span class="opisan">Обсуждаем свой любимый ПК.</span></div></div></td>
                                <td><span class="content2">2321</span></td>
                                <td><span class="content3">43902</span></td>
                            </tr>
                            <tr class="tras">
                                <td colspan ="3">
                                    <div class="br_height_one"></div>
                                </td> 
                            </tr>
                            <tr>
                                <td><div class="content4"><img src="./img/favicon/rupor.png" class="hom_img"><div><span data-cotegoriis="3" class="glava">Флуд</span><br><span  class="opisan">Оффтопик и Смайлабуз.</span></div></div></td>
                                <td><span class="content2">4321</span></td>
                                <td><span class="content3">43202</span></td>
                            </tr>
                            <tr class="tras">
                                <td colspan ="3">
                                    <div class="br_height_one"></div>
                                </td> 
                            </tr>
                            <tr>
                                <td><div class="content4"><img src="./img/favicon/mani.png" class="hom_img"><div><span data-cotegoriis="4" class="glava">Куплю/продам/отдам</span><br><span class="opisan">Покупка, продажа и даже добровольная отдача девайсов и железа в хорошие руки.</span></div></div></td>
                                <td><span class="content2">1325</span></td>
                                <td><span class="content3">76322</span></td>
                            </tr>
                            <tr class="tras">
                                <td colspan ="3">
                                    <div class="br_height_one"></div>
                                </td> 
                            </tr>
                            <tr>
                                <td><div class="content4"><img src="./img/favicon/dota2.png" class="hom_img"><div><span data-cotegoriis="5" class="glava">Dota 2</span><br><span class="opisan">Все в корабль, все в Артстайла!.</span></div></div></td>
                                <td><span class="content2">2345</span></td>
                                <td><span class="content3">65322</span></td>
                            </tr>
                            <tr class="tras">
                                <td colspan ="3">
                                    <div class="br_height_one"></div>
                                </td> 
                            </tr>
                            <tr>
                                <td><div class="content4"><img src="./img/favicon/Cs.png" class="hom_img"><div><span data-cotegoriis="6" class="glava">Counter-Strike</span><br><span class="opisan">Все в корабль, все в Артстайла!.</span></div></div></td>
                                <td><span class="content2">5345</span></td>
                                <td><span class="content3">65422</span></td>
                            </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="main_right">
            <div class="main_content">
                <div class="main_title">
                    <br><br>
                    <h1>Горячие темы</h1>
                </div> <br> <br>
                <div class="ramca_main">
                <table class="tablo_two tablo"  width="100%">
                    <tr class="colors tablo_two_tr_one">
                        <th width="100%">
                            <span class="content1 cont">Форумы</span>
                        </th>
                    </tr>
                    <tr> 
                        <td><br><div class="br_height"></div>
                            <div class="content4">
                                <img src="./img/favicon/rupor.png" class="hom_img">
                                <div>
                                    <a class="glava_a"  data-id="104" href="#">Реестр запрещённых игр</a> 
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tras">
                        <td colspan ="3">
                            <div class="br_height_one"></div>
                        </td> 
                    </tr>
                    <tr> 
                        <td><br><div class="br_height"></div>
                            <div class="content4">
                                <img src="./img/favicon/rupor.png" class="hom_img">
                                <div>
                                    <a class="glava_a"  data-id="103" href="#">Обсуждение Cyberpunk 2077</a> 
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tras">
                        <td colspan ="3">
                            <div class="br_height_one"></div>
                        </td> 
                    </tr>
                    <tr> 
                        <td><br><div class="br_height"></div>
                            <div class="content4">
                                <img src="../img/favicon/iron.png" class="hom_img">
                                <div>
                                    <a class="glava_a"  data-id="102" href="#">Помогаем юзерам выбирать ПК конфигурации</a> 
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tras">
                        <td colspan ="3">
                            <div class="br_height_one"></div>
                        </td> 
                    </tr>
                    <tr> 
                        <td><br><div class="br_height"></div>
                            <div class="content4">
                                <img src="./img/favicon/rupor.png" class="hom_img">
                                <div>
                                    <a class="glava_a"  data-id="101" href="#">Темы по Genshim Impact</a> 
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tras">
                        <td colspan ="3">
                            <div class="br_height_one"></div>
                        </td> 
                    </tr>
                    <tr class="last_themes"> 
                        <td><br><div class="br_height"></div>
                            <div class="content4">
                                <img src="./img/favicon/rupor.png" class="hom_img">
                                <div>
                                    <a class="glava_a" data-id="100" href="#">КУРОПАТКА или КУРАПАТКА? Вот в чём вопрос?</a> 
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                     </div>
                </div>
            </div>
        </div>`;
        lava = document.querySelectorAll('.glava'),
          main = document.querySelector('.tablo'),
          main_right = document.querySelector('.main_right');
          abc();
    });}
    abc();
    let glava_a = document.querySelectorAll('.glava_a');
    setTimeout(() => {
        glava_a.forEach(e => {
            e.addEventListener("click", event => {
                document.querySelector("main").innerHTML = "";
                console.log(stats);
                    stats.forEach(e => {
                        if (e.id ==  event.currentTarget.dataset.id) {
                            document.querySelector("main").innerHTML = `
                            <div class="Imaine">
            <h1 class="Izag">${e.head}</h1>
            <p class="Icontent">${e.stat}</p><hr>
        <div class="polzole">
            <div class="img_plz">
            <img  class="avatarka" src="/img/avatar/${e.afka}.jpg">
                 </div>
            <div class="kto_eto">
            <p><span class="nickI">${e.author}</span><br><span class="dateI">${e.data}</span></p>
            </div>
            <div class="bred">
                <div class="otital"><img class="otital_img" src="/img/icon/otital.png"></div>
                <div class="posmotret"><img class="posmotre_img" src="/img/icon/glaz.png"><p class="smotr"> ${e.watch}</p></div>
                <div class="Like"><img class="dizI" src="/img/icon/like.png"><p class="smotr2">${e.smotr2}</p></div>
                <div class="diz"><img class="dizI" src="/img/icon/diz.png"><p class="smotr3"">${e.smotr3}</p></div>
             </div>
        </div>
    </div>`;
                        }
                    });
            });
        });
    }, 1000);
        
    });