'use strict'
{
  // DOM取得
  const draw = document.getElementById('btn-draw');
  const reset = document.getElementById('btn-reset');
  const div1 = document.getElementById('div1');

  // const source = [];
  // for (let i = 0; i < 100; i++) {
  //   source.push(i);
  // }

  let result;

  // 関数
  function createResult() {
    const n = Math.random();
    console.log(n);
    if (n < 0.2) {
      result = '大吉';
    } else if (n < 0.5) {
      result = '吉';
    } else {
      result = '凶';
    }
  }
  function addBox() {
    const item = document.createElement('a');//ガチャ結果の箱
    item.textContent = result;
    div1.appendChild(item);
  }
  let playing = true;
  function stopAction() {
    if (playing === false) {
      return;
    }
    playing = false;
  }
  // function createAllresult() {
  //   for (let i = 0; i < 10; i++) {
  //     console.log(source);
  //     createResult();
  //     createBox();
  //   }
  // }
  let i = 0;
  function showResult() {
    createResult();
    addBox();
    const timeoutId = setTimeout(showResult, 700);
    i++;
    if (i > 9) {
      clearTimeout(timeoutId);
      i = 0;
      reset.classList.remove('disabled');
    }
  }

  // イベント
  reset.addEventListener('click', () => {
    if (reset.classList.contains('disabled')) {
      return;
    }
    reset.classList.add('disabled');

    while (div1.firstChild) {
      div1.removeChild(div1.firstChild)
    }

    draw.classList.remove('disabled');
  });


  draw.addEventListener('click', () => {
    if (draw.classList.contains('disabled')) {
      return;
    }
    draw.classList.add('disabled');
    stopAction();
    showResult();
    
  });
}
