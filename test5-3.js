const btn = document.getElementById('toggleBtn');
const displayArea = document.getElementById('displayArea');

btn.addEventListener('click', () => {
    // 現在の背景色を確認して切り替える
    if (displayArea.style.backgroundColor === 'yellow') {
        // ハイライトを消す（空文字にすると元の状態に戻ります）
        displayArea.style.backgroundColor = '';
        displayArea.style.fontWeight = 'normal';
    } else {
        // ハイライトをつける
        displayArea.style.backgroundColor = 'yellow';
        displayArea.style.fontWeight = 'bold';
    }
});