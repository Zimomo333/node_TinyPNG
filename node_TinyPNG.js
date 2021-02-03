const fs = require('fs')
const axios = require('axios');
const items = require('./items');

const testItems = [
  {
    wikiIcon: 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/01/SlingBackPackIcon.png/105px-SlingBackPackIcon.png?version=9165cf849b843362af2ba6fb6b42e55a',
    uid: 'test123',
  }
]

let count = 1;

items.forEach(item => {
  item.wikiIcon && axios.get(encodeURI(item.wikiIcon), {
    responseType: 'arraybuffer',
  })
    .then(res => {
      fs.writeFile('./icons/' + item.uid + '.png', Buffer.from(res.data), err => {
        if (err) {
          console.error('uid:'+item.uid + '---' + err);
          return
        }
        console.log(count++);
      })
    })
    .catch(err => {
      console.error('uid:'+item.uid + '---' + err);
    })
})