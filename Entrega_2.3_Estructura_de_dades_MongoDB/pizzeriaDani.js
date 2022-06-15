db.dropDatabase();

db.clients.insertMany([
    {
        'nombre': 'Carlos',
        'apellidos': 'Maryin Martin',
        'direccion': 'c/girona, 25',
        'C.P.': 08256,
        'telefono': 654589631,
        'localidad': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'Navarcles',
            'provincia': {
                '_id': ObjectId('000000000000000000000001'),
                'nombre': 'Barcelona'
            }
        },

    },
    {
        'nombre': 'Jose',
        'apellidos': 'Sanchez Garcia',
        'direccion': 'c/peru, 47',
        'C.P.': 09568,
        'telefono': 772589654,
        'localidad': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'Manresa',
            'provincia': {
                '_id': ObjectId('000000000000000000000001'),
                'nombre': 'Barcelona'
            }
        },

    },
    {
        'nombre': 'Olga',
        'apellidos': 'Lopez Lopez',
        'direccion': 'c/roma, 78',
        'C.P.': 24568,
        'telefono': 772658963,
        'localidad': {
            '_id': ObjectId('000000000000000000000003'),
            'nombre': 'Sallent',
            'provincia': {
                '_id': ObjectId('000000000000000000000001'),
                'nombre': 'Barcelona'
            }
        },

    }
])

db.tiendas.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nombre': 'Di Pecorino',
        'direccion': 'C/Las Matas, S/N',
        'C:P': 08657,
        'localidad': {
            '_id': ObjectId('000000000000000000000003'),
            'nombre': 'Sallent',
            'provincia': {
                '_id': ObjectId('000000000000000000000001'),
                'nombre': 'Barcelona'
            }
        }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'nombre': 'La Mia Mama',
        'direccion': 'C/poligono, S/N',
        'C:P': 09526,
        'localidad': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'Manresa',
            'provincia': {
                '_id': ObjectId('000000000000000000000001'),
                'nombre': 'Barcelona'
            }
        }
    }
]);

db.trabajadores.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nombre': 'Tomas',
        'apellidos': 'Bruc Corderroure',
        'NIF': '44587331-Z',
        'rol': 'cocinero',
        'tienda': {'_id': ObjectId('000000000000000000000001')}
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'nombre': 'Marc',
        'apellidos': 'Canet Roure',
        'NIF': '39657896-Z',
        'rol': 'repartidor',
        'tienda': {'_id': ObjectId('000000000000000000000001')}
    }
]);

db.productos.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'tipo': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'hamburguesas'
        },
        'nombre': 'completa',
        'descripcion': 'carne angus, con lechuga, tomate, queso, huevo frito',
        'imagen': 'http://hamburguesacompleta.com',
        'precio': 14.99
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'tipo': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'hamburguesas'
        },
        'nombre': 'mexicana',
        'descripcion': 'carne angus, jalapeños, con lechuga, tomate, queso, salsa picante',
        'imagen': 'http://hamburguesa_mexicana.com',
        'precio': 16.99
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'tipo': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'bebidas'
        },
        'nombre': 'cocacola',
        'descripcion': 'sabor a cola',
        'imagen': 'http://cocacola.com',
        'precio': 3.99
    },
    {
        '_id': ObjectId('000000000000000000000004'),
        'tipo': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'bebidas'
        },
        'nombre': '7up',
        'descripcion': 'sabor lima-limon',
        'imagen': 'http://7up.com',
        'precio': 3.99
    },
    {
        '_id': ObjectId('000000000000000000000005'),
        'tipo': {
            '_id': ObjectId('000000000000000000000003'),
            'nombre': 'pizzas'
        },
        'categoria': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'picantes' 
        },
        'nombre': 'hot hot',
        'descripcion': 'pizza con jalapeños, carne picante',
        'imagen': 'http://pizza_hothot.com',
        'precio': 12.95
    },
    {
        '_id': ObjectId('000000000000000000000006'),
        'tipo': {
            '_id': ObjectId('000000000000000000000003'),
            'nombre': 'pizzas'
        },
        'categoria': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'picantes' 
        },
        'nombre': 'mexicana',
        'descripcion': 'pizza con frijoles, carne especiada picante',
        'imagen': 'http://pizza_mexicana.com',
        'precio': 12.95
    },
    {
        '_id': ObjectId('000000000000000000000007'),
        'tipo': {
            '_id': ObjectId('000000000000000000000003'),
            'nombre': 'pizzas'
        },
        'categoria': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'blanca' 
        },
        'nombre': 'carbonara',
        'descripcion': 'cebolla, champiñones y salsa blanca',
        'imagen': 'http://pizza_carbonara.com',
        'precio': 12.95
    }
]);

db.pedido.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'fecha': new Date(),
        'entrega': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'Recoger en tienda'
        },
        'productos': [
            {'_id': ObjectId('000000000000000000000001')},
            {'_id': ObjectId('000000000000000000000005')},
            {'_id': ObjectId('000000000000000000000003')},
            {'_id': ObjectId('000000000000000000000001')}
        ],
        'precio total': 45.99,
        'tienda': {
            '_id': ObjectId('000000000000000000000001')
        },
        'cliente': {
            '_id': ObjectId('000000000000000000000001')
        }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'fecha': new Date(),
        'entrega': {
            '_id': ObjectId('000000000000000000000002'),
            'nombre': 'domicilio',
            'trabajador': ObjectId('000000000000000000000002'),
            'fecha': new Date()
        },
        'productos': [
            {'_id': ObjectId('000000000000000000000002')},
            {'_id': ObjectId('000000000000000000000002')},
            {'_id': ObjectId('000000000000000000000007')},
            {'_id': ObjectId('000000000000000000000006')}
        ],
        'precio total': 50.99,
        'tienda': {
            '_id': ObjectId('000000000000000000000001')
        },
        'cliente': {
            '_id': ObjectId('000000000000000000000002')
        }
    }
]);
