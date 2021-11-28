module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('album', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Product
}