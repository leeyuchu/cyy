// 获取 HTML 元素
const userInput = document.getElementById('userInput');
const displayButton = document.getElementById('displayButton');
const displayArea = document.getElementById('displayArea');

// 添加按钮点击事件
displayButton.addEventListener('click', () => {
    const text = userInput.value; // 获取用户输入的内容
    if (text.trim() === '') {
        displayArea.textContent = 'Please type something!'; // 提示输入为空
    } else {
        displayArea.textContent = `You typed: "${text}"`; // 显示用户输入的内容
    }
    userInput.value = ''; // 清空输入框
});