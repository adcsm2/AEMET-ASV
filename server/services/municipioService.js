const buscarMunicipio = function(municipios, municipio = ""){
    var listMun = []
    for(const mun of municipios){
        if(mun.nombre.toLowerCase().includes(municipio.toLowerCase())){
            listMun.push({
                codigo: mun.id.replace("id",""),
                nombre: mun.nombre
            })
        }
    }
    return listMun;
}

module.exports = {
    buscarMunicipio,
}