

# Wax Deal

## Add Deal

```
curl -X POST --data "Albumtitle=Dark Side Of The Moon ‎(LP, Album&ArtistAlbum=Pink Floyd&VinylCode=SMAS 11163&Genre=Rock&Cuntry=US&image=https://img.discogs.com/Nl8kCdyuk1yWz86jw9MO_TbDlt4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10338260-1495746105-4925.jpeg.jpg" 127.0.0.1:3000/api/waxDeals

curl -X POST --data "Albumtitle=Kraftwerk(LP, Album&ArtistAlbum=Kraftwerk&VinylCode=6305 058&Genre=Electronic&Cuntry=EUROPE&image=https://img.discogs.com/pU2sYR4XNq-5c_PDtsqjP_7PgdM=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-125204-1221179767.jpeg.jpg" 127.0.0.1:3000/api/waxDeals

curl -X POST --data "Albumtitle=Homework(LP, Album&ArtistAlbum=Daftpunk&VinylCode=7243 8 42609 10&Genre=Electronic&Cuntry=UK&image=https://img.discogs.com/H83c9ZlL8O2fl8LIpEis3wCTMfk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3906203-1362936046-3738.jpeg.jpg" 127.0.0.1:3000/api/waxDeals

```

## Get All Deals

```
curl 127.0.0.1:3000/api/waxDeals
```


## Remove Deal

```
curl -X DELETE 127.0.0.1:3000/api/waxDeal/5937b3fc213e761848ab89fa
```

## Update Deal

```
curl -X PUT --data "Albumtitle=Punk Floyd" 127.0.0.1:3000/api/waxdeal/593691a5eac2f80c94123538
```