const rp = require('request-promise')
const fs = require('fs')
// curl https://api.discogs.com/database/search?q=Nirvana -H "Authorization: Discogs key=XNrTTlZWQGTHHJIgYpSe, secret=cEXGOZpGtcpaeFjrRAemlQGEZjViyQjY"

const query = process.env.QUERY || 'the beatles'
const Authorization = 'Discogs key=XNrTTlZWQGTHHJIgYpSe, secret=cEXGOZpGtcpaeFjrRAemlQGEZjViyQjY'

const userAgent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'

var options = {
  url: 'https://api.discogs.com/database/search?q=' + query,
  headers: { Authorization, 'User-Agent': userAgent }
}

rp(options)
	.then(data => JSON.parse(data))
	.then(data => data.results)
	.then(data => data.map(({title, type, id }) => ({title, type, id })))
	.then(data => data.filter(({ type }) => type === 'artist'))
// 	.then(([{ id }]) => {
// 	  const URL = `https://api.discogs.com/artists/${id}`
// 	  return rp({ url: URL, headers: { 'User-Agent': userAgent }})
// })
// 	.then(data => JSON.parse(data))
// 	.then(data => data.results)
	.then(data => {
	  const jsonData = JSON.stringify(data, null, 2)
	  fs.writeFile('artist.json', jsonData, () => console.log('written in file...'))
})

