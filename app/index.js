// ES6 feature. 從 jquery import $
import $ from 'jquery';

// 加入 css 檔
import './index.css';

function componet() {
	var element = document.createElement('div');
  element.innerHTML = '<h2>Hello World</h2>'
	element.innerHTML += '<button id="myBtn">Test</button>';
	return element;
}

document.body.appendChild(componet());

// 透過jquery 取 button id
let $btn = $('#myBtn');

// 讓button 帶click事件，點擊時彈出'Hello World'
$btn.click(function(evt) {
    alert('Hello world')
});
