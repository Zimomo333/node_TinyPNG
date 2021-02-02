const fs = require('fs')
const https = require('https')
const items = require('./items')

const testItems = [
  {
    wikiIcon: 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/01/SlingBackPackIcon.png/105px-SlingBackPackIcon.png?version=9165cf849b843362af2ba6fb6b42e55a',
    uid: 'test123',
  }
]

let count = 1;

items.forEach(item=>{
  item.wikiIcon && https.get(item.wikiIcon, res => {
    let bufferArray = [];
    res.on('data', data => {
      bufferArray.push(data);
    })
  
    res.on('end', () => {
      fs.writeFile('./icons/' + item.uid + '.png', Buffer.concat(bufferArray), err => {
        if (err) {
          console.error('uid:'+item.uid + '---' + err);
          return
        }
        console.log(count++);
      })
    })
  })
});

