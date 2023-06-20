const eTotakeValue = document.getElementById('textarea');
const eSendValue = document.getElementById('btnSend');
const eResult = document.getElementById('resultSQl');

eSendValue.onclick = (e) => {
    e.preventDefault();
    var value = eTotakeValue.value.trim();
    var lines = value.split('\n');
  
    for (let i = 0; i < lines.length; i++) {
      var items = lines[i].split(' ').filter(item => item !== 'undefined');
  
      items = items.map(item => {
        if (!isNaN(item)) {
          return item; 
        } else {
          return "'" + item + "'"; 
        }
      });
  
      lines[i] = '(' + items.join(', ') + ')';
    }
  
    var result = lines.join(',\n');
  
    eResult.innerHTML = result;
  };
  