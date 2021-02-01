const fs = require('fs')
const https = require('https')

const url = 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/01/SlingBackPackIcon.png/105px-SlingBackPackIcon.png?version=9165cf849b843362af2ba6fb6b42e55a'

const bufferArray = [];
https.get(url, res => {
  res.on('data', data => {
    bufferArray.push(data);
  })

  res.on('end', () => {
    const content = Buffer.concat(bufferArray)
    fs.writeFile('test.png', content, err => {
      console.error(err)
    })
  })
})