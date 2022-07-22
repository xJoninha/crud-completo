module.exports = function(sequelize, dataTypes) {

    let alias = "Genre";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genre = sequelize.define(alias, cols, config)

    // Criação 'relações'
    Genre.associate = function(models) {
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }//--------------

    return Genre
}