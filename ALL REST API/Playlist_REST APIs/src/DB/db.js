const config = require('../config/config')
const mariadb = require('mariadb')
const { Sequelize, DataTypes, QueryTypes} = require('sequelize');
const Config = config.module;

const db = {};

(async function (){
  try {
    const connection = await mariadb.createConnection({
      host:Config.DB_host,
      port:Config.DB_port,
      user:Config.DB_user,
      password:Config.DB_password
       })
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${Config.DB_database}\`;`);

    const sequelize = new Sequelize(
      Config.DB_database, 
      Config.DB_user, 
      Config.DB_password, 
            {host: Config.DB_host , 
              dialect: 'mariadb',
            logging:false});
  
      db.Sequelize = Sequelize;
      db.sequelize = sequelize;
      
      //DB Tables
      db.Users = require('../models/user.model')(sequelize, DataTypes);
      db.Songs = require('../models/songs.models')(sequelize, DataTypes);
      db.Artists = require('../models/artist.model')(sequelize, DataTypes);
      db.Albums = require('../models/album.model')(sequelize, DataTypes);
      db.Playlists = require('../models/playList.models')(sequelize, DataTypes);
      db.Playlist_songs = require('../models/song_playList.models')(sequelize, DataTypes);

      
      //Join Tables
            
      db.Users.hasMany(db.Playlists);
      db.Playlists.belongsTo(db.Users);
            
      db.Artists.hasMany(db.Songs);
      db.Songs.belongsTo(db.Artists);
      
      db.Albums.hasMany(db.Songs);
      db.Songs.belongsTo(db.Albums);
      
      db.Artists.hasMany(db.Albums);
      db.Albums.belongsTo(db.Artists);
      
      db.Playlists.hasMany(db.Playlist_songs);
      db.Playlist_songs.belongsTo(db.Playlists);

      db.Songs.hasMany(db.Playlist_songs);
      db.Playlist_songs.belongsTo(db.Songs);

      // Default 
      await sequelize.authenticate();      
      await sequelize.sync({ force: false });

      require('../default/user.default')();
      require('../default/artist.default')();

      console.log('DB connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

module.exports = db