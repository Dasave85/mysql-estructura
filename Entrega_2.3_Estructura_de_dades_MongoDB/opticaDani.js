
db.dropDatabase();


db.clientes.insertMany([
    {
        '_id': '1',
        'name': 'Carlos Martinez',
        'direccion': {
            'calle': 'c/diputacion',
            'numero': 25,
            'piso': 2,
            'puerta': 'C',
            'ciudad': 'Navarcles',
            'codigo postal': 08270,
            'pais': 'España'
        },
        'telefono': 653568974,
        'email': 'carlosmartinez@gmail.com',
        'fecha registro': new Date('2021-05-11'),
        'recomendacion cliente': null
    },
    {
        '_id': '2',
        'name': 'Maria Fernandez',
        'direccion': {
            'calle': 'c/Peru',
            'numero': 54,
            'piso': 1,
            'puerta': null,
            'ciudad': 'Cadiz',
            'codigo postal': 12985,
            'pais': 'España'
        },
        'telefono': 772456983,
        'email': 'mariafernanadez@gmail.com',
        'fecha registro': new Date('2020-06-05'),
        'recomandacion cliente': { '_id cliente': '1' }
    },
    {
        '_id': '3',
        'name': 'Tomas Lopez',
        'direccion': {
            'calle': 'c/Roma',
            'numero': 14,
            'piso': null,
            'puerta': null,
            'ciudad': 'Madrid',
            'codigo postal': 24569,
            'pais': 'España'
        },
        'telefono': 668321459,
        'email': 'tomaslopez@gmail.com',
        'fecha registro': new Date('2022-01-01'),
        'recomendacion cliente': { '_id cliente': '1'}
    }
]);

db.proveedor.insertMany([
    {
        '_id': '1',
        'name': 'Sun Vision S.L',
        'direccion': {
            'calle': 'c/gracia',
            'numero': 85,
            'piso': null,
            'puerta': null,
            'ciudad': 'Barcelona',
            'codigo postal': 08578,
            'pais': 'España'
        },
        'telefono': 722589634,
        'fax': 772569741,
        'NIF': 'C86547985'
    },
    {
        '_id': '2',
        'name': 'GafasyGafas S.L',
        'direccion': {
            'calle': 'c/roma',
            'numero': 154,
            'piso': null,
            'puerta': null,
            'ciudad': 'Granada',
            'codigo postal': 54789,
            'pais': 'España'
        },
        'telefono': 722548734,
        'fax': 772512441,
        'NIF': 'A85642378'
    },
    {
        '_id': '3',
        'name': 'gafas molonas S.L',
        'direccion': {
            'calle': 'c/Barcelona',
            'numero': 'S/N',
            'piso': null,
            'puerta': null,
            'ciudad': 'Barcelona',
            'codigo postal': 08240,
            'pais': 'España'
        },
        'telefono': 695327986,
        'fax': 695387641,
        'NIF': 'Z45698653'
    }
]);

db.marcaGafas.insertMany([
    {
        '_id': '1',
        'marca': 'Tous',
        'proveedor': { '_id proveedor': '1' }
    },
    {
        '_id': '2',
        'marca': 'RayBan',
        'proveedor': { '_id proveedor': '1' }
    },
    {
        '_id': '3',
        'marca': 'Okley',
        'proveedor': { '_id proveedor': '2' }
    }
]);

db.gafas.insertMany([
    {
        'marca': { '_id marca': '1' },
        'vidrio derecho': {
            'graduacion': 0.50,
            'color': 'azul'
        },
        'vidrio izquierdo': {
            'graduacion': 0.55,
            'color': 'azul'
        },
        'montura': {
            'tipo': 'metalica',
            'color': 'blanco'
        },
        'precio': 199.99,
        'cliente compra': { '_id cliente': '1' },
        'venta': {
            'trabajador': 'Raul',
            'fecha venta': new Date('2022-01-01')
        }
    },
    {
        'marca': { '_id marca': '2' },
        'vidrio derecho': {
            'graduacion': 0.20,
            'color': null
        },
        'vidrio izquierdo': {
            'graduacion': 0.25,
            'color': null
        },
        'montura': {
            'tipo': 'pasta',
            'color': 'negro'
        },
        'precio': 250.45,
        'cliente compra': { '_id cliente': '2' },
        'venta': {
            'trabajador': 'Jorge',
            'fecha venta': new Date('2022-05-12')
        }
    }
]);