require('dotenv').config();

module.exports = {
  isProduction: process.env.NODE_ENV === 'production' ? true : false,
  port: process.env.PORT || 3005,
  flickrSecret: process.env.FLICKR_SECRET,
  flickrKey: 'bac9f1ccfd854f27894fd47c4f01b1e8',
  getImageUrl: (photo) => {
    const {farm, server, id, secret} = photo;
    return `http://farm${farm}.staticFlickr.com/${server}/${id}_${secret}.jpg`;
  }   
}