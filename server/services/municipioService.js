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

const ordenarMunicipios = function sortByLength(array)
{
    console.log(array)
    return array.sort(function(a, b)
    {
        var x = a['nombre']; var y = b['nombre'];
        console.log(x)
        return x.length - y.length;
    });
}

module.exports = {
    buscarMunicipio,
    ordenarMunicipios
}