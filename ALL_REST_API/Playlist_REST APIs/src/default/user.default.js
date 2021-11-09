const bcrypt = require('bcrypt');
const db = require('../DB/db');

const adminDefault = async () => {
    const userAdmin = await db.Users.findOrCreate({
         where: 
             {
             email: 'admin@57blocks.com',
             },
         defaults: 
             {
             email: 'admin@57blocks.com',
             password: bcrypt.hashSync('Admin123456@', 10),
             }
         });
         await db.Playlists.findOrCreate({
            where: 
                {
                title: 'Mi Admin Playlist',
                userId: userAdmin[0]['id']
                },
            defaults: 
                {
                title: 'Mi Admin Playlist',
                userId: userAdmin[0]['id']
                }
            });
  }

module.exports = adminDefault;
