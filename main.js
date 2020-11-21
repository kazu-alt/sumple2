'use strict'
{
  const btn = document.getElementById('btn');
  const btn0 = document.getElementById('btn0');

  const div1 = document.getElementById('div1');
  const source = [];
  let result;
  let playing = true;
  btn0.addEventListener('click', () => {
    location.reload();
  });

  // for (let i = 0; i < 100; i++) {
  //   source.push(i);
  // }


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
  function createBox() {
    const item = document.createElement('a');//ガチャ結果の箱
    item.textContent = result;
    div1.appendChild(item);
  }
  // function createAllresult() {
  //   for (let i = 0; i < 10; i++) {
  //     console.log(source);
  //     createResult();
  //     createBox();
  //   }
  // }

  btn.addEventListener('click', () => {
    if (playing === false) {
      return;
    }
    playing = false
    let i = 0;
    function showResult() {
      // createAllresult();
      createResult();
      createBox();
      const timeoutId = setTimeout(showResult, 700);
      i++;
      if (i > 9) {
        clearTimeout(timeoutId);
      }
      
    }
    showResult();
    
  });
}
