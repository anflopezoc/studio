module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('song', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            defaultValue: null
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Product
}
