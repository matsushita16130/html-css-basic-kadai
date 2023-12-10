const btn = document.getElementById('btn');

// 2秒後に文章を書き換える
btn.addEventListener('click', () => {
    setTimeout(() => {
        const text = document.getElementById('text');
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});