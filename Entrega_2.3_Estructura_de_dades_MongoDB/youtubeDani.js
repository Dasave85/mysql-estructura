db.dropDatabase();

db.usuarios.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'email': 'carlosmartin@gmail.com',
        'password': '12134',
        'nombre': 'Carlos Martin Martin',
        'fecha nacimiento': new Date('1990-05-04'),
        'sexo': 'H',
        'pais': 'España',
        'C.P.': 08256
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'email': 'oscargonzalez@gmail.com',
        'password': '12569',
        'nombre': 'Oscar Gonzalez Martin',
        'fecha nacimiento': new Date('1985-09-01'),
        'sexo': 'H',
        'pais': 'España',
        'C.P.': 06777
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'email': 'martagalindo@gmail.com',
        'password': '98647',
        'nombre': 'Marta Galindo Martin',
        'fecha nacimiento': new Date('1989-04-04'),
        'sexo': 'M',
        'pais': 'España',
        'C.P.': 09856
    }
]);

db.videos.insertMany([
    {
        '_id': ObjectId('000000000000000000000003'),
        'titulo': 'vaya ostia',
        'descripcion': 'hombre se la pega en bici',
        'thumbnail': 'http://galleta.com',
        'nº reproducciones': 955,
        'nº likes': 5,
        'nº dislikes': 300,
        'estado': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'publico'
        },
        'archivo': {
            'nombre': 'torton',
            'tamaño': 12.25,
            'duracion': '00:03:25',
        },
        'publicacion': {
            'usuario': {'_id': ObjectId('000000000000000000000001')},
            'fecha': new Date()
        }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'titulo': 'gatitos jugando',
        'descripcion': 'muchos gatitos jugando entre ellos',
        'thumbnail': 'http://miau.com',
        'nº reproducciones': 3600,
        'nº likes': 3000,
        'nº dislikes': 3,
        'estado': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'publico'
        },
        'archivo': {
            'nombre': 'gatitos',
            'tamaño': 15.25,
            'duracion': '00:30:25',
        },
        'publicacion': {
            'usuario': {'_id': ObjectId('000000000000000000000002')},
            'fecha': new Date()
        }
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'titulo': 'cb1000r',
        'descripcion': 'review cb1000r',
        'thumbnail': 'http://cb1000r.com',
        'nº reproducciones': 650,
        'nº likes': 400,
        'nº dislikes': 30,
        'estado': {
            '_id': ObjectId('000000000000000000000001'),
            'nombre': 'publico'
        },
        'archivo': {
            'nombre': 'cb1000r',
            'tamaño': 50.25,
            'duracion': '00:40:25',
        },
        'publicacion': {
            'usuario': {'_id': ObjectId('000000000000000000000001')},
            'fecha': new Date()
        }
    }
]);

db.canales.insert(
    {
        '_id': ObjectId('000000000000000000000001'),
        'nombre': 'videos tontos',
        'descripcion': 'variedad de videos tontos',
        'fecha': new Date(),
        'videos': [{'_id': ObjectId('000000000000000000000001')}, {'_id': ObjectId('000000000000000000000003')}],
        'usuario creacion': {'_id': ObjectId('000000000000000000000001')},
        'usuarios suscritos': [{'_id': ObjectId('000000000000000000000002')}, {'_id': ObjectId('000000000000000000000003')}]
    }
);

db. playlists.insert({
    '_id': ObjectId('000000000000000000000001'),
    'nombre': 'mis favoritos',
    'fecha': new Date(),
    'estado': {
        '_id': ObjectId('000000000000000000000001'),
        'nombre': 'publico'
    },
    'usuario playlist': {'_id': ObjectId('000000000000000000000001')},
    'videos': [{'_id': ObjectId('000000000000000000000001')}, {'_id': ObjectId('000000000000000000000002')}, {'_id': ObjectId('000000000000000000000003')}]
})

db.etiquetas.insertMany([
    {
    '_id': ObjectId('000000000000000000000001'),
    'nombre': 'mishu',
    'video': {'_id': ObjectId('000000000000000000000002')},
    'usuario': {'_id': ObjectId('000000000000000000000001')} 
},
{
'_id': ObjectId('000000000000000000000002'),
'nombre': 'ostia',
'video': {'_id': ObjectId('000000000000000000000001')},
'usuario': {'_id': ObjectId('000000000000000000000001')} 
},
{
'_id': ObjectId('000000000000000000000003'),
'nombre': 'moninos',
'video': {'_id': ObjectId('000000000000000000000002')},
'usuario': {'_id': ObjectId('000000000000000000000003')} 
}
]);

db.comentarios.insert(
    {
        '_id': ObjectId('000000000000000000000001'),
        'texto': 'gatitos bonitos',
        'fecha': new Date(),
        'usuario': {'_id': ObjectId('000000000000000000000001')},
        'video': {'_id': ObjectId('000000000000000000000002')}
    }
);

db.likes/dislikes.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'tipo': {
            '_id': ObjectId('000000000000000000000001'),
            'reaccion': 'like'
        },
        'usuario': {'_id': ObjectId('000000000000000000000001')},
        'video': null,
        'comentario': {'_id': ObjectId('000000000000000000000001')},
        'fecha': new Date()
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'tipo': {
            '_id': ObjectId('000000000000000000000002'),
            'reaccion': 'dislike'
        },
        'usuario': {'_id': ObjectId('000000000000000000000002')},
        'video': null,
        'comentario': {'_id': ObjectId('000000000000000000000001')},
        'fecha': new Date()
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'tipo': {
            '_id': ObjectId('000000000000000000000001'),
            'reaccion': 'like'
        },
        'usuario': {'_id': ObjectId('000000000000000000000001')},
        'video': {'_id': ObjectId('000000000000000000000001')},
        'comentario': null,
        'fecha': new Date()
    }
])

