document.getElementById("button").addEventListener("click", validation);
function validation(event){
    const infosQuizz1 = {
        reponse_1: 322462,
        reponse_2: "Le premier président de la république de la Côte d'Ivoire",
        reponse_3: "En Egypte",
        reponse_4: "Philosophe et le père de la medecine",
        reponse_5: "L'independance de la Côte d'Ivoire"
    };

    const reponse_1 = document.getElementsByName("reponse-1");
    const reponse_2 = document.getElementsByName("reponse-2");
    const reponse_3 = document.getElementsByName("reponse-3");
    const reponse_4 = document.getElementsByName("reponse-4");
    const reponse_5 = document.getElementsByName("reponse-5");
    const strong = document.getElementById("strong")
    let score = 0;
    for(let i=0; i< reponse_1.length; i++){
        if(reponse_1[i].checked && reponse_1[i].value == infosQuizz1.reponse_1){
            document.getElementById("reponse-1").style.backgroundColor = "rgb(0, 255, 68, 0.5)";
            document.getElementById("reponse-1").classList.remove("erreur");
            score+=1;
            break;
        }else{
            document.getElementById("reponse-1").style.backgroundColor = "rgb(240, 58, 128, 0.5)";
            document.getElementById("reponse-1").classList.add("erreur");
            const inter1 = setInterval(()=>{
                document.getElementById("reponse-1").classList.remove("erreur");
                clearInterval(inter1);
            },400)
        }
    }

    for(let i=0; i< reponse_2.length; i++){
        if(reponse_2[i].checked && reponse_2[i].value == infosQuizz1.reponse_2){
            document.getElementById("reponse-2").style.backgroundColor = "rgb(0, 255, 68, 0.5)";
            document.getElementById("reponse-2").classList.remove("erreur");
            score+=1;
            break;
        }else{
            document.getElementById("reponse-2").style.backgroundColor = "rgb(240, 58, 128, 0.5)";
            document.getElementById("reponse-2").classList.add("erreur");
            const inter2 = setInterval(()=>{
                document.getElementById("reponse-2").classList.remove("erreur");
                clearInterval(inter2);
            },400)
        }
    }

    for(let i=0; i< reponse_3.length; i++){
        if(reponse_3[i].checked && reponse_3[i].value == infosQuizz1.reponse_3){
            document.getElementById("reponse-3").style.backgroundColor = "rgb(0, 255, 68, 0.5)";
            document.getElementById("reponse-3").classList.remove("erreur");
            score+=1;
            break;
        }else{
            document.getElementById("reponse-3").style.backgroundColor = "rgb(240, 58, 128, 0.5)";
            document.getElementById("reponse-3").classList.add("erreur");
            const inter3 = setInterval(()=>{
                document.getElementById("reponse-3").classList.remove("erreur");
                clearInterval(inter3);
            },400)
        }
    }

    for(let i=0; i< reponse_4.length; i++){
        if(reponse_4[i].checked && reponse_4[i].value == infosQuizz1.reponse_4){
            document.getElementById("reponse-4").style.backgroundColor = "rgb(0, 255, 68, 0.5)";
            document.getElementById("reponse-4").classList.remove("erreur");
            score+=1;
            break;
        }else{
            document.getElementById("reponse-4").style.backgroundColor = "rgb(240, 58, 128, 0.5)";
            document.getElementById("reponse-4").classList.add("erreur");
            const inter4 = setInterval(()=>{
                document.getElementById("reponse-4").classList.remove("erreur");
                clearInterval(inter4);
            },400)
        }
    }

    for(let i=0; i< reponse_5.length; i++){
        if(reponse_5[i].checked && reponse_5[i].value == infosQuizz1.reponse_5){
            document.getElementById("reponse-5").style.backgroundColor = "rgb(0, 255, 68, 0.5)";
            document.getElementById("reponse-5").classList.remove("erreur");
            score+=1;
            break;
        }else{
            document.getElementById("reponse-5").style.backgroundColor = "rgb(240, 58, 128, 0.5)";
            document.getElementById("reponse-5").classList.add("erreur");
            const inter5 = setInterval(()=>{
                document.getElementById("reponse-5").classList.remove("erreur");
                clearInterval(inter5);
            },400)
        }
    }
    strong.textContent = `${score} / 5`;
}

const questions = document.querySelector(".questions");
questions.querySelectorAll("input[type='radio']").forEach(cle => {
    cle.addEventListener("click", (event)=>{
        event.target.closest(".libelle").style.backgroundColor = "white";
    })
});



