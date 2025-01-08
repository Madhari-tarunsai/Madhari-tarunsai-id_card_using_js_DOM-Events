function div() {
    let x=document.createElement("div");
    x.style.height="550px";
    x.style.width="350px";
    x.style.border="6px solid red";
    x.style.backgroundColor="lightgreen";
    x.innerHTML="College id_card";
    x.style.textAlign="center";
    x.style.fontSize="20px";
    x.style.fontStyle="bold";
    x.style.padding="20px"
    document.body.appendChild(x)
    // ==========================================
    let image=document.createElement("img");
    image.setAttribute("src","./Tarunsai_pic.jpg");
    image.style.height="50%";
    image.style.width="50%";
    image.style.margin="80px";
    image.style.borderRadius="50px"
    image.style.boxShadow="10px 10px 10px black"
    x.appendChild(image)
    // ===============================================
    let cont=document.createElement("h1")
    cont.innerHTML="Madhari Tarunsai"
    cont.style.marginTop="-80px"
    x.append(cont)
    // ==================================================
    let cont4=document.createElement("p")
    cont4.innerHTML="ID :- 19211A04B0"
    cont4.style.marginTop="-10px"
    x.append(cont4)
    // ==================================================
    let cont2=document.createElement("p")
    cont2.innerHTML="Year of passing :- (2019 - 2023)"
    cont2.style.marginTop="-13px"
    x.append(cont2)
    // ==================================================
    let cont3=document.createElement("p")
    cont3.innerHTML="Colege Name:- BVRIT (Narsapur)"
    cont3.style.marginTop="-13px"
    x.append(cont3)
    // ==================================================
    let cont1=document.createElement("p")
    cont1.innerHTML="branch:- ECE"
    cont1.style.marginTop="-10px"
    x.append(cont1)
    // ==================================================
    }