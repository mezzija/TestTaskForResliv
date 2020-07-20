const url = 'http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd';


const parameters = url.slice(url.indexOf('?') + 1).split('&');


const form1 = document.getElementById('radio');
const form2 = document.getElementById('checkbox');
const form3 = document.getElementById('selected')

const form=document.getElementById('form');

form.addEventListener('change',event=>{
    const changeUrl=[]
    form1.childNodes.forEach(item=>{
        if(item.checked){
            changeUrl.push(`size=${item.id}`)
        }
    })
    form2.childNodes.forEach(item=>{
        if(item.checked){
            changeUrl.push(`color=${item.id}`)
        }
    })
    form3.firstElementChild.childNodes.forEach(item=>{
        if(item.selected){
            changeUrl.push(`manufacturer=${item.value}`)
        }
    })
    if(event.target.id!=='sale'){
        console.log(`http://любой_домен/filter?`+changeUrl.join('&'));
    }


})

parameters.forEach(item => {
    if (item.slice(0, item.indexOf('=')) === 'size') {
        form1.childNodes.forEach(element => {
            if (element.id === item.slice(item.indexOf('=') + 1)) {
                element.checked = true;
            }
        })
    }
    if (item.slice(0, item.indexOf('=')) === 'color') {
        form2.childNodes.forEach(element => {
            if (element.id === item.slice(item.indexOf('=') + 1)) {
                element.checked = true;
            }
        })
    }
    if (item.slice(0, item.indexOf('=')) === 'manufacturer') {
        form3.firstElementChild.childNodes.forEach(element => {
            if (element.value === item.slice(item.indexOf('=') + 1)) {
                element.selected = true
            }
        })
    }
})
