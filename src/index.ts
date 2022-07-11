import './index.css'

const box = document.querySelector('#app')

function demo() {
    chrome.storage.sync.set({key: 'value'}, () => {
        console.log('set successed!');
    });
}

const b = document.createElement("input");
b.type = "button";
b.value = "启动";
b.className = "myButton";
b.addEventListener("click",demo);
box?.appendChild(b)
