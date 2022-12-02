
let butLickes=document.querySelectorAll(".cat-img")
butLickes.forEach((item)=>{
    let like = document.createElement("i");
    like.className = "fa fa-heart but-licke";
    like.addEventListener("click",()=>{
        if (like.style.color==="rgb(255, 67, 67)"){
            like.style.color="#fff";
        }else{
            like.style.color="#ff4343";
        }
    })
    item.append(like);
})
const content = document.querySelector(".bell .bellContent");
const cnt = document.querySelector(".bell .indicator");

let x = document.querySelectorAll(".latex-code")
let y = document.querySelectorAll(".latex-code code")
for (let i = 0; i < x.length; ++i){
    let c = document.createElement("i");
    c.className = "fa fa-code copy";
    let star = document.createElement("i");
    star.className = "fa fa-star star";
    star.id = "star" + i;
    c.addEventListener("click",()=>{
        navigator.clipboard.writeText(y[i].textContent);
    })
    star.addEventListener("click",()=>{
        if (star.style.color ==="rgb(201, 201, 108)") {

            let a = document.getElementById("copy" + star.id);
            a.remove();
            cnt.innerHTML = Number(cnt.innerHTML) - 1;
            star.style.color = "black";
        } else {
            newNotification(y[i].textContent, "copy" + star.id);
            star.style.color = "rgb(201, 201, 108)";
        }
    })
    x[i].append(star);

    x[i].append(c);
}

let a = document.querySelectorAll(".latex-code_im")
let b = document.querySelectorAll(".latex-code_im code")
for (let i = 0; i < a.length; ++i){
    let c = document.createElement("i");
    c.className = "fa fa-code copy";
    let star = document.createElement("i");
    star.className = "fa fa-star star";
    star.id = "star_im" + i;
    c.addEventListener("click",()=>{
        navigator.clipboard.writeText(b[i].textContent);
    })
    star.addEventListener("click",()=>{
        if (star.style.color ==="rgb(201, 201, 108)") {
            let cp= document.getElementById("copy_im" + star.id);
            cp.remove();
            cnt.innerHTML = Number(cnt.innerHTML) - 1;
            star.style.color = "black";
        } else {
            newNotification(b[i].textContent, "copy_im" + star.id);
            star.style.color = "rgb(201, 201, 108)";
        }
    })
    a[i].append(star);

    a[i].append(c);
}



bell.style.borderRadius = "50%";


bell.onclick = function () {
    if (bell.style.borderRadius === "50%") {
        bell.style = `
    width: 15rem;
    height: 15rem;
    border-radius: 50px;
    `;
        bellIcon.style = `
    margin-left: 1.5rem;
    `;
        bellContent.style = `
    transition: color 0.37s 0.3s;
    color: black;
    `;
        indicator.style = `
    transform: scale(1.2);
    `;
    } else {
        bell.style = `
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    `;
        bellIcon.style = `
    margin-left: 0.2rem;
    `;
        bellContent.style = `
    height: 0rem;
    transition: color 0.1s;
    color: rgba(234, 229, 202);
    `;
        indicator.style = `
    transform: scale(1);
    `;
    }
};

function newNotification(text, textid) {
    cnt.innerHTML = Number(cnt.innerHTML) + 1;
    let newNotif = document.createElement("div");
    newNotif.id = textid;
    content.append(newNotif);
    newNotif.innerHTML = text;
}
