const para = document.querySelector('#para');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    para.append(`${key} = ${value}`);
    para.append(document.createElement('br'));
});