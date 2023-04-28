function myFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function (e) 
{
    if (!e.target.matches('.dropbtn')) 
    {
        var myDropdown = document.getElementById("myDropdown");

        if (myDropdown.classList.contains('show')) 
        {
            myDropdown.classList.remove('show');
        }
    }
}

let main = document.querySelector('#main')

let pages = {
    '#login':`
<h1>登入</h1>
<input type="text" placeholder="帳號"/><br/>
<input type="text" placeholder="密碼"/><br/>
<a href="#home">確認</a>
`,
    '#home':`
<h1>首頁</h1>
<p>本網頁可以按功能表去切換畫面</p>
`,
    '#logout':`
<a href="#home">登出</a>
`,
    '#signup':`
<h1>註冊</h1>

<input class="c1" type="text" placeholder="姓名">
<br>
<input class="c1" type="text" placeholder="帳號">
<br>
<input class="c1" type="text" placeholder="email">
<br>
<input class="c1" type="password" placeholder="密碼">
<br>

<input type="radio" id="男" name="性別">
<label for="男">男</label>
<input type="radio" id="女" name="性別">
<label for="女">女</label>
<input type="radio" id="保密" name="性別">
<label for="保密">保密</label>
<br><br>

<label class="c2" for="血型">血型:</label>
<select id="血型">
    <option>A</option>
    <option>B</option>
    <option>AB</option>
    <option>O</option>
</select>
<br><br>

<label class="c2">生日:</label>
<input type="date">
<br><br>

<input type="button" onclick="alert('感謝參與!')" value="註冊">
`,
}

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}