const mids = document.querySelectorAll(".mids");
const show_link = document.querySelector("#show_link");
const btn_submit = document.querySelector("#btn_submit");
const input_number = document.querySelector("#input_number");
const loaded = document.querySelector("#loaded");
const fa_bar = document.querySelector("#fa-bars");
const nav = document.querySelector("#nav");
const list_items = document.querySelectorAll(".list_item");

// const Accesstrade = `https://go.isclix.com/deep_link/4665406253457732723/5658510394970733460?utm_source=${phone}&url=https%3A%2F%2Fapp.appsflyer.com%2Fvn.esgame.luckystar.apk-apk%3Faf_siteid%3D%7Bpsn%7D%26af_c_id%3D%7Bcampaign%7D%26pid%3Daccesstradevn_int%26af_r%3Dhttps%3A%2F%2Fvtco.esgame.vn%2Fdownload-apk%26af_click_lookback%3D7d%26clickid%3D%7Bclickid%7D`;

let input = '';
let BoxShow = () => {
  const number = (window.innerHeight / 5) * 4.8; 
  mids.forEach((mid) => {
    const boxTop = mid.getBoundingClientRect().top; 
    if (boxTop <= number)
      mid.classList.add("show_show");
    else mid.classList.remove("show_show");
  });
};
window.addEventListener("scroll", BoxShow);

BoxShow();


var checkPhone = () => {
    var vnf_regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    return vnf_regex.test(input_number.value);
};

input_number.addEventListener('change', (e) =>{
    input = e.target.value.trim();
})

btn_submit.addEventListener('click', (e) =>{
    e.preventDefault();
    if (input.length != 10 || checkPhone() === false) {
      setTimeout(() => {
        show_link.innerHTML = `<p class = 'notify'>Điền số điện thoại + Nhấp nhận Link để lấy link tham gia chương trình</p> `;
      }, 2000);
      show_link.innerHTML = `<p class = 'notify'>Số điện thoại không hợp lệ</p> `;
    } else {
        setTimeout(() => {
                show_link.innerHTML = `
                    <p>Chào: <span style="color: #007bff;">${input}</span></p>
                    <p style="border-bottom: 3px solid #fff; display: inline-block;">Link tham gia: <a href="https://go.isclix.com/deep_link/4665406253457732723/5658510394970733460?utm_source=${input}&url=https%3A%2F%2Fapp.appsflyer.com%2Fvn.esgame.luckystar.apk-apk%3Faf_siteid%3D%7Bpsn%7D%26af_c_id%3D%7Bcampaign%7D%26pid%3Daccesstradevn_int%26af_r%3Dhttps%3A%2F%2Fvtco.esgame.vn%2Fdownload-apk%26af_click_lookback%3D7d%26clickid%3D%7Bclickid%7D" target="_blank">Tại đây</a> </p>
                    <p class = 'notify'>Bạn vui lòng nhấp vào đường link phía trên để tham gia</p>`
                    ;
                loaded.classList.remove("load_active");
        }, 2000);  
        loaded.classList.add('load_active');
    }
})

fa_bar.addEventListener("click", () => {
  nav.classList.toggle("nav_show");
})

list_items.forEach(list_item => {
    list_item.addEventListener('click', () => {
        nav.classList.toggle("nav_show");
    })
})

