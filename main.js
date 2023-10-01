var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];  
  document.addEventListener('DOMContentLoaded', () => { meniu_nav(); float_btn();});

  function float_btn() {

    function openWhatsApp() { window.open('https://wa.me/995577197583', '_blank'); }
    function openViber() { window.open('viber://chat?number=+995577197583', '_blank'); }
    function openMessenger() { window.open('https://m.me/100027079001008', '_blank'); }

    let soc_array = [
      ['img/icon/whatsapp.png', 'rgb(37, 211, 102)'],
      ['img/icon/viber.png', 'rgb(115, 96, 242)'],
      ['img/icon/messenger.png', 'rgb(0, 106, 255)'],
    ];
    let float_btn = document.getElementById('float_btn');
    let float_btn_img = document.getElementById('float_btn_img');
    let social_conteiner = document.getElementById('social_conteiner');
    let wast = document.getElementById('wats');
    let vib = document.getElementById('vib');
    let mes = document.getElementById('mes');
    let intervalId; 
    let float_btn_active = true;



    wast.addEventListener('click', openWhatsApp);
    vib.addEventListener('click', openViber);
    mes.addEventListener('click', openMessenger);

  
    social_conteiner.addEventListener('mouseover', () => {
      float_btn_active = false;
      clearInterval(intervalId); 
      float_btn.classList.add('float_btn_active');
      float_btn_img.src = "img/icon/close.png";
              wast.classList.add('soc_icons_active');
              vib.classList.add('soc_icons_active');
              mes.classList.add('soc_icons_active');
              social_conteiner.classList.add('social_conteiner_active')
    });
  
    social_conteiner.addEventListener('mouseout', () => {
              float_btn_active = true;
              startAnimation(); 
              float_btn.classList.remove('float_btn_active');
              float_btn_img.src = "img/icon/messenger.png";
              wast.classList.remove('soc_icons_active');
              vib.classList.remove('soc_icons_active');
              mes.classList.remove('soc_icons_active');
              social_conteiner.classList.remove('social_conteiner_active')
    });
  
    function float_btn_anime() {
      for (let i = 0; i < soc_array.length; i++) {
        setTimeout(() => {
          float_btn.style.backgroundColor = soc_array[i][1];
          float_btn_img.src = soc_array[i][0];
        }, i * 2000);
      }
    }
  
    function startAnimation() {intervalId = setInterval(float_btn_anime, 6000);}
  
    startAnimation();
  
  }
  



  
  //  mobile_desktop_view() 

  // function mobile_desktop_view(){
  //   let width = window.innerWidth;
  //   let height = window.innerHeight;
  //   let head_baner = document.querySelector('.head_baner');

  //   if(height>= width){
  //     head_baner.style.height = "40vh";
  //   }

  // }



function main(){


  // for (let i = 0; i < 500; i++) {
  //   let text = "გაიღიმე ბოთე ღიმილი საოცრად გისხება (-_-)";
  //   let ragac = document.getElementById('ragac');
  //   ragac.innerHTML += text +`\n`;
  // }
  
  mob_menu_btn();
      animation();
        section();

          let phone_icons_list = ["img/icon/phone.png", "img/icon/whatsapp.png", "img/icon/viber.png"];
            let phone_icons = document.querySelector('.phone_icons');
              setInterval(() => { let phoneIndex = Math.floor(Math.random() * phone_icons_list.length); phone_icons.src = phone_icons_list[phoneIndex]; }, 2000);
};











function animation(){
  let points = document.querySelectorAll('.points');
    let window_width = document.body.offsetWidth;
      let animation_interval_point = 30;
        if(window_width >=1920)
          {animation_interval_point = 60; }
            for (let i = 0; i < points.length; i++) {
              setInterval(() => {
                setTimeout(() => {
                  let randomIndex = Math.floor(Math.random() * colors.length);
                    let randomColor = colors[randomIndex];
                    let point = points[i];
                        point.style.backgroundColor = randomColor; 
                          point.style.marginTop = -animation_interval_point + "px"; 
                            setTimeout(() => { point.style.marginTop = animation_interval_point + "px"; }, 700);
                              setTimeout(() => { point.style.marginTop = "0px"; }, 1500);
                }, i*300);
              }, 6010);
            }
}

function slaid_cars() {
  // icons();


  // mobile_desktop_view();


  mob_menu_btn();
  section();



  let phone_ = document.querySelectorAll('.phone_');
    for (let i = 0; i < phone_.length; i++) {let phone = phone_[i]; phone.addEventListener('click', () => {window.location.href = "tel:+995577197583";});}

      let gmail_ =  document.querySelectorAll('.gmail_');
        for (let i = 0; i < gmail_.length; i++) {let gmail = gmail_[i]; gmail.addEventListener('click', ()=>{ window.location = "mailto:rartmeladze@gmail.com";})}






  let car_image = [

    "img/_2013_fusion1.jpg",
      // "img/_2013_fusion2.jpg",

      "img/_2019_camry1.jpg",
        // "img/_2019_camry2.jpg",

        "img/_2010_mercedes_benz1.jpeg",
          // "img/_2010_mercedes_benz2.jpeg",

          "img/_2012_escape1.jpg",
            // "img/_2012_escape2.jpg",

            "img/_2016_mercedes_benz_vito1.jpg",
              // "img/_2016_mercedes_benz_vito2.jpg",

              "img/_2016_camry1.jpg",
                // "img/_2016_camry2.jpg"

    ];
    let car_name = [

      "Ford Fusion 2013",
        "Ford Fusion 2013",

        "Toyota Camry 2019",
          "Toyota Camry 2019",

          "Mercedes-Benz GL 2010",
            "Mercedes-Benz GL 2010",

            "Ford Escape 2012",
              "Ford Escape 2012",

              "Mercedes-Benz Vito 2016",
                "Mercedes-Benz Vito 2016",

                "Toyota Camry 2016",
                  "Toyota Camry 2016"

      ];
      
      var actiuri_car = true;

      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          let alalbedze = Math.floor(Math.random() * car_image.length);
            // let car_info_satauri = document.getElementById('car_info_satauri');
            //   setTimeout(() => { car_info_satauri.textContent = car_name[alalbedze]; }, 3000);
                let first_car = document.getElementById('first_car');
                  let second_car = document.getElementById('second_car');

          if (actiuri_car) {
            actiuri_car = false;
              second_car.src = car_image[alalbedze];
                second_car.style.marginTop = "0px";
                  setTimeout(() => {
                    first_car.style.marginTop = "-100%";
                      first_car.src ="";
                        second_car.style.opacity = "1";
                          }, 5000);
          } 

            else {
              actiuri_car = true;
                first_car.src = car_image[alalbedze];
                  first_car.style.marginTop = "0px";
                    setTimeout(() => {
                      second_car.style.marginTop = "-100%";
                        first_car.style.opacity = "1";
                          second_car.src = "";
                            }, 5000);
            }

              car_slide_list.forEach(i => {
                setTimeout(() => {
                  i.classList.remove('slide_list_active');
                    car_slide_list[alalbedze].classList.add('slide_list_active');
                      }, 2000);
              });

      }, i * 10000);
  }
        
  let car_slider_nav = document.getElementById('car_slider_nav');
    for (let i=0; i<car_image.length; i++) {
      let car_slide_list = document.createElement('div');
        car_slide_list.className = "slide_list";
          car_slider_nav.append(car_slide_list);
    }
  
      var car_slide_list = document.querySelectorAll('.slide_list');
        car_slide_list.forEach((slide ,index)=> {
          slide.addEventListener('click', () => {
            car_slide_list.forEach(i => {
              i.classList.remove('slide_list_active');
                slide.classList.add('slide_list_active');
                  // let car_info_satauri = document.getElementById('car_info_satauri');
                  //   car_info_satauri.textContent = car_name[index];
                      first_car.src = car_image[index];
                        second_car.src = car_image[index];
            });

          });
        });
}

function meniu_nav(){

  footer_resolution()



  let logo =  document.querySelector('.logo');
    logo.addEventListener('click', ()=>{ window.location = "index.html"})

  let phone = document.querySelector('.phone');
    phone.addEventListener('click', ()=>{ window.location = "tel:+995577197583";})

    let mail = document.querySelector('.mail');
      mail.addEventListener('click', ()=>{ window.location = "mailto:rartmeladze@gmail.com";})

      let home = document.querySelector('.home');
        home.addEventListener('click', ()=>{ window.location = "index.html"})

        let about = document.querySelector('.about');
          about.addEventListener('click', ()=>{ window.location = "about.html";})

          let tours = document.querySelector('.tours');
            tours.addEventListener('click', ()=>{ window.location = "tours.html";})

            let cars = document.querySelector('.cars');
              cars.addEventListener('click', ()=>{ window.location = "cars.html";})

              let gallery = document.querySelector('.gallery');
                gallery.addEventListener('click', ()=>{ window.location = "gallery.html";})

                let contact = document.querySelector('.contact');
                  contact.addEventListener('click', ()=>{ window.location = "contact.html";})
}

function icons() {
  
      let kveba_icons_list = ["img/icon/food1.png", "img/icon/food2.png", "img/icon/food3.png"];
        let location_icons_list = ["img/icon/loc1.png", "img/icon/loc2.png", "img/icon/loc3.png"];
          let cars_icons_list = ["img/icon/icon-car1.png", "img/icon/icon-car2.png", "img/icon/icon-car3.png"];
  
              let kveba_icons = document.getElementById('kveba_icons');
                let location_icons = document.getElementById('location_icons');
                  let cars_icons = document.getElementById('cars_icons');
  
              setInterval(() => {
                  let kvebaIndex = Math.floor(Math.random() * kveba_icons_list.length);
                    let locationIndex = Math.floor(Math.random() * location_icons_list.length);
                      let carsIndex = Math.floor(Math.random() * cars_icons_list.length);
              
                          kveba_icons.src = kveba_icons_list[kvebaIndex];
                            location_icons.src = location_icons_list[locationIndex];
                              cars_icons.src = cars_icons_list[carsIndex];
              }, 2000);
  
                
}

function slaid_vacation() {
  icons();

  let image_list = [
    "img/slide_1.jpg",
      "img/slide_2.jpg",
        "img/slide_3.jpg",
          "img/slide_4.jpg",
            "img/slide_5.jpg",
              "img/slide_6.jpg",
                "img/slide_7.jpg",
                  "img/slide_8.jpg",
                    "img/slide_9.jpg"
  ];
    var tours_list = [
      "Partridge Bakurin",
        "Eye-catching Rabati",
          "Unforgettable Kazbegi",
            "Beautiful Batumi",
              "The amazing nature of Ananur",
                "historical vardzia",
                  "Incredible Kakheti",
                    "Beautiful Tbilisi",
                      "Amazing Tsalka",
                        // "Unique Martwilliams Canyon",
    ];
      var tours_mandzili = [
        "184 ",  //"Partridge Bakurin",
          "208 ",  //"Eye-catching Rabati"
            "153 ",  //"Unforgettable Kazbegi"
              "368 ",  //"Beautiful Batumi"
                "66 ",  //"The amazing nature of Ananur"
                  "226 ",  //"historical vardzia"
                    "85 ",  //"Incredible Kakheti"
                      "0 ",  //"Beautiful Tbilisi"
                        "92 ",  //"Amazing Tsalka"
                          // "Unique Martwilliams Canyon",
      ];

       let actiuri_slide = true;

  for (let i = 0; i < 100; i++) {

    setTimeout(() => {
      var alalbedze = Math.floor(Math.random() * image_list.length);
        let turs_info_satauri = document.getElementById('turs_info_satauri');
          let mandzili = document.getElementById('mandzili');

            setTimeout(() => {
              turs_info_satauri.textContent = tours_list[alalbedze];
                mandzili.textContent = tours_mandzili[alalbedze] + "km.  from Tbilisi";
            }, 3000);
                  let first = document.getElementById('first');
                    let second = document.getElementById('second');

            if (actiuri_slide) {
              actiuri_slide = false;

                second.src = image_list[alalbedze];
                  second.style.marginTop = "0px";

                    setTimeout(() => {
                      first.style.marginTop = "-100%";
                        first.src ="";
                          second.style.opacity = "1";
                    }, 5000);
              } 
              else {
                actiuri_slide = true;

                  first.src = image_list[alalbedze];
                    first.style.marginTop = "0px";

                      setTimeout(() => {
                        second.style.marginTop = "-100%";
                          first.style.opacity = "1";
                            second.src = "";
                      }, 5000);

              }
                slide_list.forEach(i => {
                  setTimeout(() => {
                    i.classList.remove('slide_list_active');
                      slide_list[alalbedze].classList.add('slide_list_active');
                  }, 2000);
                });
    }, i * 10000);
  }
    
  let slider_nav = document.getElementById('slider_nav');
    for (let i=0; i<image_list.length; i++) {
      let slide_list = document.createElement('div');
        slide_list.className = "slide_list";
          slider_nav.append(slide_list);
    }
          var slide_list = document.querySelectorAll('.slide_list');
            slide_list.forEach((slide ,index)=> {
              slide.addEventListener('click', () => {
                slide_list.forEach(i => {
                  i.classList.remove('slide_list_active');
                    slide.classList.add('slide_list_active');
                    var alalbedze = Math.floor(Math.random() * image_list.length);
                      let turs_info_satauri = document.getElementById('turs_info_satauri');
                        let mandzili = document.getElementById('mandzili');
                            turs_info_satauri.textContent = tours_list[index];
                              mandzili.textContent = tours_mandzili[index] + "km.  from Tbilisi";
                                first.src = image_list[index];
                                  second.src = image_list[index];
                });

              });
            });
            

                          
            // let book_tour_list_select = document.querySelector('.book_tour_list_select');
            // let turs_info_satauri = document.getElementById('turs_info_satauri');
            
            //               let option = document.createElement('option');

            // let cvladi = turs_info_satauri.textContent;

            // option.value = cvladi;
            // option.textContent = cvladi;
            // book_tour_list_select.appendChild(option);

            //   for(i=0; i<tours_list.length; i++){
            //   let option = document.createElement('option');
            //   option.value = tours_list[i];
            //   option.textContent = tours_list[i];
            //   book_tour_list_select.appendChild(option);
            // }




            function book_tour(){ 
              let book_now_conteiner = document.querySelector('.book_now_conteiner');
              book_now_conteiner.style.transition = "height 3s ease-in-out";
              book_now_conteiner.classList.add('book_now_conteiner_active');


              let book_tour_list_select = document.querySelector('.book_tour_list_select');
            let turs_info_satauri = document.getElementById('turs_info_satauri');
            
                          let option = document.createElement('option');

            let cvladi = turs_info_satauri.textContent;

            option.value = cvladi;
            option.textContent = cvladi;
            book_tour_list_select.append(option);

              for(i=0; i<tours_list.length; i++){
              let option = document.createElement('option');
              option.value = tours_list[i];
              option.textContent = tours_list[i];
              book_tour_list_select.appendChild(option);
            }

            }

            let book_btn = document.querySelector('#book_uour_now');

            book_btn.addEventListener('click', ()=>{
              book_tour();
              if(window.innerWidth <=500){

              let mob_menu_btn = document.querySelector('.mob_menu_btn');
              mob_menu_btn.style.display = "none"
              }
            } );


            let close_book_form = document.getElementById('close_book_form');

            close_book_form.addEventListener('click', ()=>{
              let book_now_conteiner = document.querySelector('.book_now_conteiner');
              book_now_conteiner.classList.remove('book_now_conteiner_active');
              if(window.innerWidth <=500){
              let mob_menu_btn = document.querySelector('.mob_menu_btn');
              mob_menu_btn.style.display = "flex"
                }
            })





            function send_book() {
              const saxeli = document.getElementById('user_name').value;
              const emaili = document.getElementById('user_email').value;
              const telefoni = document.getElementById('user_phone').value;
              const dro = document.getElementById('book_data').value;
            
              const select_tour = document.getElementById('select_tour');
              const select_tour_active = select_tour.selectedIndex;
              const select_tour_Option = select_tour.options[select_tour_active];
              const tour_name = select_tour_Option.value;
            
              const select_car = document.getElementById('select_car');
              const select_car_active = select_car.selectedIndex;
              const select_car_Option = select_car.options[select_car_active];
              const car_name = select_car_Option.value;
            
              const select_food = document.getElementById('select_food');
              const select_food_active = select_food.selectedIndex;
              const select_food_Option = select_food.options[select_food_active];
              const food_name = select_food_Option.value;
            
              const user_coment = document.getElementById('user_coment').value;
            
              const gasagzavni_monacemebi = `<b>saxeli:</b> ${saxeli}\n 
                                            meili: ${emaili}\n 
                                            telefoni: ${telefoni}\n
                                            dro: ${dro}\n
                                            turi: ${tour_name}\n
                                            tansporti: ${car_name}\n
                                            kveba: ${food_name}\n
                                            komentari: ${user_coment}`;
            
              const formData = new FormData();
              formData.append('saxeli', saxeli);
              formData.append('emaili', emaili);
              formData.append('telefoni', telefoni);
              formData.append('dro', dro);
              formData.append('tour_name', tour_name);
              formData.append('car_name', car_name);
              formData.append('food_name', food_name);
              formData.append('user_coment', user_coment);
            
              fetch('send_email.php', {
                method: 'POST',
                body: formData
              })
              .then(response => {
                if (response.ok) {
                  alert('Email sent successfully!');
                  document.getElementById('book_now_form').reset();
                } else {
                  alert('Failed to send email. Please try again.');
                }
              })
              .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
              });
            }
            
            send_now.addEventListener('click', send_book);
            


          }


function section() {
  let revers = true;
    let sections = document.querySelectorAll('.section');
      let colors = [
          "rgba(4, 76, 82, 0.6)", 
            "rgba(15, 86, 3, 0.5)", 
              "rgba(64, 10, 76,0.6", 
                "rgba(81, 86, 10, 0.5)", 
                  "rgba(82, 31, 6, 0.4)", 
                    "rgba(51, 38, 2, 0.6)", 
                      "rgba(67, 24, 43, 0.5)", 
                        "rgba(65, 4, 30, 0.4)"
                  ];
        for (let i = 0; i < sections.length; i++) {
          if(!revers){ sections[i].style.flexDirection = "row-reverse"; revers = true; }
            else {sections[i].style.flexDirection = "row";revers = false; }
              let randomIndex1 = Math.floor(Math.random() * colors.length);
                let randomIndex2 = Math.floor(Math.random() * colors.length);
                  let color1 = colors[randomIndex1];
                    let color2 = colors[randomIndex2];
                      while (color1 === color2) { randomIndex2 = Math.floor(Math.random() * colors.length);color2 = colors[randomIndex2];}
                        sections[i].style.backgroundImage = `linear-gradient(to bottom, ${color1} 40%, ${color2} 60%)`;
                          sections[i].style.borderTop = `5px solid ${color1}`;
        }
}

function mob_menu_btn(){
  var meniu_active = false;
    let mob_menu_btn = document.getElementById('mob_menu_btn');
      let line1 = document.getElementById('line1');
        let line2 = document.getElementById('line2');
          let line3 = document.getElementById('line3');

            let meniu = document.getElementById('meniu');

    mob_menu_btn.addEventListener('click', ()=>{
        if(!meniu_active){
          mob_menu_btn.classList.add('mob_menu_btn_active')
            line1.classList.add('line1')
              line2.classList.add('line2')
                line3.classList.add('line3')
                  meniu.style.display = "flex"
                    setTimeout(() => {meniu.style.opacity = 1;}, 400);
                      meniu_active = true;
        } 
      else {
        mob_menu_btn.classList.remove('mob_menu_btn_active');
          line1.classList.remove('line1')
            line2.classList.remove('line2')
              line3.classList.remove('line3')
                meniu.style.opacity = 0;
                  setTimeout(() => { meniu.style.display = "none" }, 1000);
                    meniu_active = false;
      }
    })
}


function tour_baner_animation() {

  let shefaseba = document.querySelector('.shefaseba');
  let shefaseba_btn = document.querySelector('.shefaseba_btn');
  
  document.querySelector('.shefaseba_btn').addEventListener('click', function() {
    var radioButtons = document.getElementsByName('radioGroup');
    var selectedValue = '';

    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) { selectedValue = radioButtons[i].value;
        shefaseba.classList.remove('shefaseba_active');
        shefaseba_btn.classList.remove('shefaseba_btn_active')
        shefaseba_btn.textContent = "Submited";

          break;
      }
    }
    document.querySelector('h1').textContent = 'value = ' + selectedValue;
  });





  shefaseba_btn.addEventListener("mouseover", ()=>{
    shefaseba.classList.add('shefaseba_active');
      shefaseba_btn.classList.add('shefaseba_btn_active');
      shefaseba_btn.textContent = "Submit now"

      
      });
            

      shefaseba_btn.addEventListener("mouseout", ()=>{
        shefaseba.classList.remove('shefaseba_active');
          shefaseba_btn.classList.remove('shefaseba_btn_active')
            shefaseba_btn.textContent = "Please rate"
          });

          shefaseba.addEventListener("mouseover", ()=>{
            shefaseba.classList.add('shefaseba_active');
              shefaseba_btn.classList.add('shefaseba_btn_active');
              shefaseba_btn.textContent = "Submit now"

              });

              shefaseba.addEventListener("mouseout", ()=>{
                shefaseba.classList.remove('shefaseba_active');
                  shefaseba_btn.classList.remove('shefaseba_btn_active');
                    shefaseba_btn.textContent = "Please rate";
                    });



  var tour_baner_animation1 = false;
    var tour_baner_animation2 = false;
      var tour_baner_animation3 = false;
        var tour_baner_animation4 = false;

if (document.documentElement.offsetWidth >= 1441) {
                                                    tour_baner_animation1 = true; 
                                                    tour_baner_animation2 = false;
                                                  }
  else if (document.documentElement.offsetWidth <= 1020 && document.documentElement.offsetWidth >= 500){
                                                                                                          tour_baner_animation2 = false; 
                                                                                                          tour_baner_animation1 = false; 
                                                                                                          tour_baner_animation3 = true;
                                                                                                        }
    else if (document.documentElement.offsetWidth < 500){    
                                                          tour_baner_animation1 = false; 
                                                          tour_baner_animation2 = false; 
                                                          tour_baner_animation3 = false; 
                                                          tour_baner_animation4 = true; 
                                                        }
        else {
                tour_baner_animation1 = false; 
                tour_baner_animation2 = true;
              }

    let tours_baner_image_list = [
      "img/ananur_01.jpg",
      "img/ananur_04.jpg",
      "img/bakur_01.jpg",
      "img/bakur_02.jpg",
      "img/bat_08.jpg",
      "img/bat_10.jpg",
      "img/borj_02.jpg",
      "img/borj_03.jpg",
      "img/kakhet_03.jpeg",
      "img/kakhet_07.jpg",
      "img/kazbeg_03.jpg",
      "img/kazbeg_04.jpg",
      "img/makhun_01.jpg",
      "img/makhun_02.jpg",
      "img/rabat_02.jpg",
      "img/rabat_03.jpg",
      "img/tbil_03.jpg",
      "img/tbil_09.jpg",
      "img/tsalka_03.jpg",
      "img/tsalka_06.jpg",
      "img/vardz_03.jpg",
      "img/vardz_04.jpg"
     ];

     let border_radius =[ "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%" ]

      let tours_baner_images = document.querySelectorAll('.tours_baner_image');
  

  if(tour_baner_animation1){
      for (let i = 0; i < tours_baner_images.length; i++) {

        setTimeout(() => {
          let border1 = Math.floor(Math.random() * border_radius.length);
          let border2 = Math.floor(Math.random() * border_radius.length);
          let border3 = Math.floor(Math.random() * border_radius.length);
          let border4 = Math.floor(Math.random() * border_radius.length);
  
          let randomIndex = Math.floor(Math.random() * tours_baner_image_list.length);
            let tours_baner_image_item = tours_baner_images[i];

              tours_baner_image_item.style.transition = "1s ease-in-out";
              tours_baner_image_item.style.borderRadius = border_radius[border1] + ' ' + border_radius[border2] + ' ' + border_radius[border3] + ' ' + border_radius[border4];

                tours_baner_image_item.src = tours_baner_image_list[randomIndex];
                  tours_baner_image_item.style.display = "flex";
                    setTimeout(() => {tours_baner_image_item.style.opacity = "1";}, 500);
          }, i*1000);
      }

    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {









        setTimeout(() => {
          let border1 = Math.floor(Math.random() * border_radius.length);
          let border2 = Math.floor(Math.random() * border_radius.length);
          let border3 = Math.floor(Math.random() * border_radius.length);
          let border4 = Math.floor(Math.random() * border_radius.length);
  
          let randomIndex_item = Math.floor(Math.random() * tours_baner_images.length);
            let randomIndex_img = Math.floor(Math.random() * tours_baner_image_list.length);
              let tours_baner_image_item_shercheuli = tours_baner_images[randomIndex_item];
                tours_baner_image_item_shercheuli.style.transition = "3s ease-in-out";
                  tours_baner_image_item_shercheuli.style.opacity = "0";
                    setTimeout(() => {tours_baner_image_item_shercheuli.src = tours_baner_image_list[randomIndex_img];}, 2800);
                      setTimeout(() => {tours_baner_image_item_shercheuli.style.opacity = "1";
                      tours_baner_image_item_shercheuli.style.borderRadius = border_radius[border1] + ' ' + border_radius[border2] + ' ' + border_radius[border3] + ' ' + border_radius[border4];
                    }, 3000);


        }, i* 2500);

      }
    }, 15000);

  }

  if(tour_baner_animation2){
      for(i=0; i<100; i++){
        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              let tours_baner_image_item = tours_baner_images[i];
                let randomIndex = Math.floor(Math.random() * tours_baner_image_list.length);
            tours_baner_image_item.style.marginTop = "-8%";
              tours_baner_image_item.src = tours_baner_image_list[randomIndex];
                tours_baner_image_item.style.transition = "3s ease-in-out";
                  tours_baner_image_item.style.display = "flex";
            setTimeout(() => {tours_baner_image_item.style.opacity = "1";}, 500);

              setTimeout(() => { tours_baner_image_item.style.transition = "8s ease-in-out"; tours_baner_image_item.style.marginTop = "40%";}, 1500);
                setTimeout(() => {tours_baner_image_item.style.opacity = "0"; tours_baner_image_item.style.transition = "2s ease-in-out";}, 8000);
                  setTimeout(() => {tours_baner_image_item.style.opacity = "0";     tours_baner_image_item.style.display = "none"; tours_baner_image_item.style.marginTop = "0%";}, 14000);

            }, i* 2000);

          } 

        },i* 14500);
}
  }

//   if(tour_baner_animation3){

//   for (let i = 0; i < 15; i++) {
      
//     setTimeout(() => {
      

//     let tours_baner_image_item = tours_baner_images[i];
//       let randomIndex = Math.floor(Math.random() * tours_baner_image_list.length);
//         tours_baner_image_item.style.marginTop = "-8%";
//           tours_baner_image_item.style.marginLeft = "68%";
//             tours_baner_image_item.style.heigth = "auto";
//               tours_baner_image_item.src = tours_baner_image_list[randomIndex];
//                 tours_baner_image_item.style.display = "flex";

//           setTimeout(() => {tours_baner_image_item.style.transition = "3s ease-in-out"; tours_baner_image_item.style.opacity = "1";}, 500);

//           setTimeout(() => { tours_baner_image_item.style.transition = "3.3s ease-in-out"; tours_baner_image_item.style.marginTop = "55%";}, 2500);
//           setTimeout(() => { tours_baner_image_item.style.transition = "1s ease-in-out"; tours_baner_image_item.style.opacity = "0"; }, 4800);
//            setTimeout(() => {  tours_baner_image_item.src ="";  tours_baner_image_item.style.display = "none"; }, 5200);
          
//     }, i* 5000);

//   } 
// }


if(tour_baner_animation4 || tour_baner_animation3){

  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      
    let tours_baner_image_item = tours_baner_images[i];
      let randomIndex = Math.floor(Math.random() * tours_baner_image_list.length);
      tours_baner_image_item.style.position = "absolute";
      tours_baner_image_item.style.marginTop = "10%";
      tours_baner_image_item.style.width = "20px";
      tours_baner_image_item.style.height = "20px";
      tours_baner_image_item.style.borderRadius = "100%";

      tours_baner_image_item.style.display = "flex";

        tours_baner_image_item.src = tours_baner_image_list[randomIndex];
          tours_baner_image_item.style.display = "flex";
          setTimeout(() => {tours_baner_image_item.style.transition = "3s ease-in-out"; tours_baner_image_item.style.opacity = "1";}, 500);

          setTimeout(() => {tours_baner_image_item.style.transition = "6s ease-in-out"; 
          tours_baner_image_item.style.marginTop = "0%";
          tours_baner_image_item.style.marginLeft = "0%";

          tours_baner_image_item.style.width = "100%";
          tours_baner_image_item.style.height = "100%";
          tours_baner_image_item.style.borderRadius = "0%";
        }, 1000);
        setTimeout(() => {
          tours_baner_image_item.style.transition = "3s ease-in-out"; tours_baner_image_item.style.opacity = "0"        }, 14000);
        setTimeout(() => {
          tours_baner_image_item.style.display = "none";
        }, 16000);
            

    }, i* 10000);

}

}


}


function home_page() {
  var home_image_content_list = [
    about_georgia_image_content = [
      "img/_aboutgeorgia1.jpg",
      "img/_aboutgeorgia2.jpg",
      "img/_aboutgeorgia3.jpg",
      "img/_aboutgeorgia4.jpg"
    ],
    gastronomy_image_content = [
      "img/_samzareulo1.jpg",
      "img/_samzareulo2.jpg",
      "img/_samzareulo3.JPG",
      "img/_samzareulo4.jpg"
    ],
    adventure_image_content = [
      "img/_satavgadasavlo1.jpg",
      "img/_satavgadasavlo2.jpg",
      "img/_satavgadasavlo3.jpg",
      "img/_satavgadasavlo4.jpg"
    ],
    film_image_content = [
      "img/_kino1.jpg",
      "img/_kino2.jpg",
      "img/_kino3.jpg",
      "img/_kino4.jpg"
    ],
    hospitality_image_content = [
      "img/_stumartmoyvare1.jpg",
      "img/_stumartmoyvare2.jpg",
      "img/_stumartmoyvare3.jpg",
      "img/_stumartmoyvare4.jpg"
    ],
    easetravel_image_content = [
      "img/_simartive1.jpg",
      "img/_simartive2.jpg",
      "img/_simartive3.jpg",
      "img/_simartive4.jpg",
    ],
    sustainable_image_content = [
      "img/_mdgraditurizmi1.jpeg",
      "img/_mdgraditurizmi2.jpg",
      "img/_mdgraditurizmi3.jpg",
      "img/_mdgraditurizmi4.jpg"
    ]
  ];




  let home_content = document.querySelectorAll('.section');
  let img_numb = 1;
  let img_numb1 = true;
  if (window.innerWidth <= 1120) { img_numb1 = false; }

  for (let i = 0; i < home_content.length; i++) {
    let img_numb = 1;
    if (document.documentElement.offsetWidth <= 500) {
      img_numb = 4;
    }
  
    let content_element = home_content[i];
    let container = content_element.querySelector('.about_georgia_image');
    let border_radius = ["5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%"];
  
    for (let j = 0; j < img_numb; j++) {
      let image = document.createElement('img');
      let shemtxveviti_foto = Math.floor(Math.random() * home_image_content_list[i].length);
      let border1 = Math.floor(Math.random() * border_radius.length);
      let border2 = Math.floor(Math.random() * border_radius.length);
      let border3 = Math.floor(Math.random() * border_radius.length);
      let border4 = Math.floor(Math.random() * border_radius.length);
  
      image.style.borderRadius =
        border_radius[border1] + ' ' +
        border_radius[border2] + ' ' +
        border_radius[border3] + ' ' +
        border_radius[border4];
  
      if (j < img_numb) {
        image.src = home_image_content_list[i][j];
      } else {
        image.src = home_image_content_list[i][shemtxveviti_foto];
      }
  
      container.appendChild(image);
    }
  }
    


  if(img_numb1){


  let transitionDuration = 3; // Transition duration in seconds
  
  for (let i = 0; i < home_content.length; i++) {
    let content_elementi = home_content[i];
    let image = content_elementi.getElementsByTagName('img');
  
    let border_radius = ["5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%"];
  
    for (let j = 0; j < image.length; j++) {
      setInterval(() => {
        let border1 = Math.floor(Math.random() * border_radius.length);
        let border2 = Math.floor(Math.random() * border_radius.length);
        let border3 = Math.floor(Math.random() * border_radius.length);
        let border4 = Math.floor(Math.random() * border_radius.length);
        let shemtxveviti_foto = Math.floor(Math.random() * home_image_content_list[i].length);
  
        image[j].style.transition = `${transitionDuration}s`;
        image[j].style.borderRadius =
          border_radius[border1] + ' ' +
          border_radius[border2] + ' ' +
          border_radius[border3] + ' ' +
          border_radius[border4];
  
        setTimeout(() => {
          image[j].src = home_image_content_list[i][shemtxveviti_foto];
        }, transitionDuration * 2000);
      }, Math.floor(Math.random() * 9000) + 4000); 
    }
  }
    
}
else {
  let home_content = document.querySelectorAll('.section');

  for (let i = 0; i < home_content.length; i++) {
    let content_element = home_content[i];
    let images = content_element.getElementsByTagName('img');

    for (let j = 0; j < images.length; j++) {
      images[j].style.borderRadius = "0px";
    }
  }
}

}




function gallery(){


  var gallery_img_list = [
    "img/ananur_01.jpg",
    "img/ananur_04.jpg",
    "img/bakur_01.jpg",
    "img/bakur_02.jpg",
    "img/bat_08.jpg",
    "img/bat_10.jpg",
    "img/borj_02.jpg",
    "img/borj_03.jpg",
    "img/kakhet_03.jpeg",
    "img/kakhet_07.jpg",
    "img/kazbeg_03.jpg",
    "img/kazbeg_04.jpg",
    "img/makhun_01.jpg",
    "img/makhun_02.jpg",
    "img/rabat_02.jpg",
    "img/rabat_03.jpg",
    "img/tbil_03.jpg",
    "img/tbil_09.jpg",
    "img/tsalka_03.jpg",
    "img/tsalka_06.jpg",
    "img/vardz_03.jpg",
    "img/vardz_04.jpg",



      "img/_aboutgeorgia1.jpg",
      "img/_aboutgeorgia2.jpg",
      "img/_aboutgeorgia3.jpg",
      "img/_aboutgeorgia4.jpg",
      "img/_samzareulo1.jpg",
      "img/_samzareulo2.jpg",
      "img/_samzareulo3.jpg",
      "img/_samzareulo4.jpg",
      "img/_satavgadasavlo1.jpg",
      "img/_satavgadasavlo2.jpg",
      "img/_satavgadasavlo3.jpg",
      "img/_satavgadasavlo4.jpg",
      "img/_kino1.jpg",
      "img/_kino2.jpg",
      "img/_kino3.jpg",
      "img/_kino4.jpg",
      "img/_stumartmoyvare1.jpg",
      "img/_stumartmoyvare2.jpg",
      "img/_stumartmoyvare3.jpg",
      "img/_stumartmoyvare4.jpg",
      "img/_simartive1.jpg",
      "img/_simartive2.jpg",
      "img/_simartive3.jpg",
      "img/_simartive4.jpg",
      "img/_mdgraditurizmi1.jpeg",
      "img/_mdgraditurizmi2.jpg",
      "img/_mdgraditurizmi3.jpg",
      "img/_mdgraditurizmi4.jpg"
  ];

  let image_list = [
    "img/slide_1.jpg",
      "img/slide_2.jpg",
        "img/slide_3.jpg",
          "img/slide_4.jpg",
            "img/slide_5.jpg",
              "img/slide_6.jpg",
                "img/slide_7.jpg",
                  "img/slide_8.jpg",
                    "img/slide_9.jpg"
  ];



   let gallery_content = document.getElementById('gallery_content');

   for(i=0; i<gallery_img_list.length; i++){
    let galleri_item = gallery_content[i];
let galeri_img_conteiner = document.createElement('div');
galeri_img_conteiner.className = "galeri_img_conteiner";
    let galeri_img =document.createElement('img');
    galeri_img.src= gallery_img_list[i];
galeri_img_conteiner.append(galeri_img);
gallery_content.append(galeri_img_conteiner);


   }

   function head_gallery_slide(){
    let head_slide_gallery = document.querySelector('.head_slide_gallery')
    let shemtxveviti_foto = Math.floor(Math.random() * image_list.length);
 
    let head_slide_gallery_img = document.createElement('img');
    head_slide_gallery_img.className="head_slide_gallery_img";
    head_slide_gallery_img.src = image_list[shemtxveviti_foto];
    head_slide_gallery_img.style.opacity = "1";
 
    setTimeout(() => {
     
    head_slide_gallery_img.style.transition = "15s ease-in-out";
 
    head_slide_gallery_img.style.marginLeft = "100%";
    }, 1000);
 
 setTimeout(() => {
   head_slide_gallery_img.remove();
 
 }, 15000);
 
 head_slide_gallery.append(head_slide_gallery_img)
 
 
   }

   head_gallery_slide();
   setInterval(() => {
    head_gallery_slide();
   }, 16000);




  
}

function footer_resolution(){
  let footer = document.getElementById('footer');
  if (window.innerWidth <=500){
    footer.style.backgroundImage = "url('img/footer_baner1.jpg')";  }
  else {
    footer.style.backgroundImage = "url('img/footer_baner.jpg')";  }



  }

  function contact() {

    let section_contact = document.querySelector('.section_contact');
    if (window.innerWidth <= 500) {
      section_contact.style.backgroundImage = "url('img/contact_bacground1.jpg')";
    } else {
      section_contact.style.backgroundImage = "url('img/contact_bacground.jpg')";
    }
  }
  


  function about(){
    let tours_list = [
      ["Bakurin","5"],
        ["Rabati","4"],
          ["Kazbegi","3"],
            ["Batumi","5"],
              ["Ananur","4"],
                ["vardzia","3"],
                  ["Kakheti","5"],
                    ["Tbilisi","4"],
                      ["Tsalka","3"]
                        // "Unique Martwilliams Canyon",
    ];




    let rate_list = document.getElementById('rate_list');

    let margin_left = 2;

    for (let i = 0; i < tours_list.length; i++) {
      let list_item = document.createElement('li');
      list_item.style.marginLeft = margin_left + "%";
    
      let rate_icon = document.createElement('img');
      rate_icon.src = "img/icon/rating.png";
    
      let list_text = document.createElement('samp');
      list_text.textContent = tours_list[i][0];
    
      let rate_div = document.createElement('div');
          rate_div.className = "rate_contact";
      
    
      for (let j = 0; j < tours_list[i][1]; j++) {
        let rate_image = document.createElement('img');
    
          rate_image.src = "img/icon/rate_star1.png";
    
        rate_div.append(rate_image);
      }
    
      list_item.append(rate_icon, list_text, rate_div);
      rate_list.append(list_item);
    }
    


  }