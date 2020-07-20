const url = 'http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd';


const parameters = url.slice(url.indexOf('?') + 1).split('&');
const root = document.getElementById('root');

const form1 = document.createElement('form');
const form2 = document.createElement('form');
const form3 = document.createElement('form')

form1.innerHTML = `
           <input type="radio" name="size" id="S">
            <label for="s">S</label>
            <input type="radio" name="size" id="M">
            <label for="m">M</label>
            <input type="radio"  name="size" id="L">
            <label for="l">L</label>
`;
form2.innerHTML = `
           <input type="checkbox" name="color" id="1" >
            <label for="checkbox1">1</label>
            <input type="checkbox" name="color" id="2">
            <label for="checkbox2">2</label>
            <input type="checkbox" name="color" id="3">
            <label for="checkbox3">3</label>
            <input type="checkbox" name="color" id="4">
            <label for="checkbox4">4</label>
            <input type="checkbox" name="color" id="5">
            <label for="checkbox5">5</label>
`;
form3.innerHTML = `
          <select name="select" id="select" multiple >
            <option value="aaa">aaa</option>
            <option value="b&c">b&c</option>
            <option value="ddd">ddd</option>
            <option value="eee">eee</option>
        </select>
`;


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

root.appendChild(form1)
root.appendChild(form2)
root.appendChild(form3)
