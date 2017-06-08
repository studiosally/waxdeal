

# Wax Deal

## Add Deal

```
curl -X POST --data "Albumtitle=The Best of Quincy Jones‎(LP, Album&ArtistAlbum=Quincy Jones&VinylCode=SMAS 11163&Genre=Funk / Soul &Country=US&image=http://studiosally.com/portadas/disco1.png" 127.0.0.1:3000/api/waxDeals


curl -X POST --data "Albumtitle=Offering for anxius(LP, Album&ArtistAlbum=Digss DukeKraftwerk&VinylCode=6305 058&Genre=Jazz&Country=EUROPE&image=http://studiosally.com/portadas/disco2.png" 127.0.0.1:3000/api/waxDeals

curl -X POST --data "Albumtitle=Traggic kindom(LP, Album&ArtistAlbum=No doubt&VinylCode=6305 058&Genre=Jazz&Country=EUROPE&image=http://studiosally.com/portadas/disco3.png" 127.0.0.1:3000/api/waxDeals


```

## Get All Deals

```
curl 127.0.0.1:3000/api/waxDeals
```


## Remove Deal

```
curl -X DELETE 127.0.0.1:3000/api/waxDeal/593691a5eac2f80c94123538
```

## Update Deal

```
curl -X PUT --data "Albumtitle=Punk Floyd" 127.0.0.1:3000/api/waxdeal/593691a5eac2f80c94123538
```