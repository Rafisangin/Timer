const box = document.querySelector('.start-box');
const input = document.querySelector('#input-counter');
const start = document.querySelector('#start-counter');
const error = document.querySelector('#error');
const timeC = document.querySelector('.c100');
const timerNum = document.querySelector('.c100 > span');
const loading = document.querySelector('.message .loading');
const success = document.querySelector('.message .success ');
function takeinput() {
    let inputFirst = parseInt(input.value);
    if (isNaN(inputFirst)) {
        error.style.display = " block";

    } else if (Number(inputFirst)) {

        timeC.style.display = "block";
        box.style.display = 'none';
        timerNum.textContent = inputFirst;
        loading.style.display = "block";
        success.style.display = "none";



    }
    let originalTime = inputFirst;
    let lastparecent = 'p100';
    let timeID = setInterval(() => {
        if (lastparecent) timeC.classList.remove(lastparecent);

        if (inputFirst <= 0) {
            clearInterval(timeID);
            timeC.style.display = "none";
            box.style.display = 'block';
            input.value = null;
            loading.style.display = "none";
            success.style.display = "block";
            input.value='';
            return;
 
        }

        
        inputFirst -= 1;
        timerNum.textContent = inputFirst;
        let parecent =lastparecent=`p${ Math.abs(Math.floor((((originalTime - inputFirst) / originalTime) * 100)-100))}`;
        timeC.classList.add(parecent);

    }, 1000);

}

