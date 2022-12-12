# Esta app funcionará como controlador
# Una vez instaladas las librerias con "pip install flask" se importan
from flask import Flask
# Se necesita para que retorne las funciones desde los templates
from flask import render_template
from flask import request  # Para hacer una solicitud del formulario
from flask import redirect  # Para volver al index
# para darle acceso a flask a la carpeta de las imagenes
from flask import send_from_directory
from flask import url_for  # Es otro método que se está usando en el edit
from flask import flash  # Se usa comunmente para dar mensajes informativos
from flask import jsonify #El que me va a permitir crear los datos en formato JSON
# Para poder conectarnos a la base de datos, ahora importamos mysql. Ya habíamos instalado la librería MySQL para Flask
from flaskext.mysql import MySQL
# Se usará para obtener la fecha y concatenar con la foto
from datetime import datetime
from flask_cors import CORS
import os  # Para trabajar con la foto

# Creamos un objeto de flask y se le pasa el atributo "__name__"
app = Flask(__name__)
app.secret_key = 'clavesecretanecesaria'
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# Para configurar la conexión, creamos un objeto MySQL
mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'eventos.ck25opae5r3t.sa-east-1.rds.amazonaws.com'  # La dirección de la base
app.config['MYSQL_DATABASE_USER'] = 'admin'  # usuario por defecto
app.config['MYSQL_DATABASE_PASSWORD'] = 'eventoscodoacodo'  # la clave
app.config['MYSQL_DATABASE_PORT'] = 3306  # Por defecto es el 3306
app.config['MYSQL_DATABASE_BD'] = 'eventos'  # Es la base de datos
# Aqui le estamos pasando toda la configuración de app al objeto MySQL creado para iniciar la conexión
mysql.init_app(app)

# El método path.join une componentes de ruta, para concatenarlos con el separador de directorios y generar el acceso a la carpeta
CARPETA = os.path.join('img/eventos')
app.config['CARPETA'] = CARPETA


@app.route('/')  # Es la ruta a la que ingresa el usuario
def index():
    try:
        # Aqui va la instrucción SQL
        sql = "SELECT * FROM `eventos`.`tabla_eventos`;"
    #
    # Creamos la variable de tipo conexión.
        conn = mysql.connect()
    # Es un método, para el procesamiento indv de las filas que devolverá el sistema
        cursor = conn.cursor()
        cursor.execute(sql)  # Pasamos la info de la instrucción

    # Estoy asignando a eventos todos los datos que tiene cursor (que está trayendo toda la base de datos con el SELECT * ALL)
        eventos = cursor.fetchall()

    # print(eventos)
        conn.commit()  # Se confirma los cambios para que haga la instrucción SQL
    # esto es lo que va a retornar. La ruta eventos/index que es el html. Toma por defecto la carpeta template.
        return render_template('eventos/index.html', eventos=eventos)
    except Exception as ex:
        return "Error"


@app.route('/create')
def create():

    return render_template('eventos/create.html')


@app.route('/store', methods=['POST'])
def storage():
    # Antes de configurar el query, debemos crear las variables para tomar la info del formulario. Para ello se creó la librería request
    nombre = request.form['txtNombre']
    titulo = request.form['txtTitulo']
    foto = request.files['txtFoto']
    cuando = request.form['txtCuando']
    donde = request.form['txtDonde']
    direccion = request.form['txtDireccion']

    if nombre == '' or titulo == '' or cuando == '' or donde == '' or direccion == ''or foto.filename == '':
        flash("Todos los campos son obligatorios")
        return redirect(url_for('create'))
    # almacenamos la fecha
    now = datetime.now()  # Trae la fecha y hora actual
    # Nos quedaremos con años, minutos y segundos
    tiempo = now.strftime("%Y%H%M%S")

    if foto.filename != "":  # Si hay foto
        nuevoNombreFoto = tiempo + nombre + ".jpg"
        # aqui guardamos la foto concatenando el filename con el tiempo
        foto.save("img/eventos/"+nuevoNombreFoto)

    sql = "INSERT INTO `eventos`.`tabla_eventos` (`id`, `nombre`, `titulo`, `foto`, `cuando`, `donde`, `direccion`) VALUES (NULL, %s, %s, %s, %s, %s, %s);"
    datos = (nombre, titulo, nuevoNombreFoto,cuando,donde,direccion)

    conn = mysql.connect()
    cursor = conn.cursor()
    # Pasamos la info de la instrucción (SE AGREGA DATOS EN EL EXECUTE)
    cursor.execute(sql, datos)
    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    return redirect('/')

# Aqui estoy enviando el id del que deseo eliminar, en la tabla se pasa con el <a href="/destroy/{{evento[0]}}


@app.route('/destroy/<int:id>')
def destroy(id):
    sql = "DELETE FROM `eventos`.`tabla_eventos` WHERE id = %s;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT foto FROM `eventos`.`tabla_eventos` WHERE id=%s;", id)
    fila = cursor.fetchall()

    os.remove(os.path.join(app.config['CARPETA'], fila[0][0]))
    # Pasamos la info de la instrucción (SE AGREGA id EN EL EXECUTE)
    cursor.execute(sql, id)
    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL
    return redirect('/')


@app.route('/edit/<int:id>')
def edit(id):

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM `eventos`.`tabla_eventos` WHERE id=%s;", id)
    eventos = cursor.fetchall()
    conn.commit()

    return render_template('eventos/edit.html', eventos=eventos)


@app.route('/update', methods=['POST'])
def update():

    # Antes de configurar el query, debemos crear las variables para tomar la info del formulario. Para ello se creó la librería request
    nombre = request.form['txtNombre']
    titulo = request.form['txtTitulo']
    foto = request.files['txtFoto']
    cuando = request.form['txtCuando']
    donde = request.form['txtDonde']
    direccion = request.form['txtDireccion']
    id = request.form['txtID']

    sql = "UPDATE `eventos`.`tabla_eventos` SET `nombre`=%s, `titulo`=%s, `cuando`=%s, `donde`=%s, `direccion`=%s WHERE id=%s;"
    datos = (nombre, titulo, cuando, donde, direccion, id)

    conn = mysql.connect()
    cursor = conn.cursor()
    # Pasamos la info de la instrucción (SE AGREGA DATOS EN EL EXECUTE)
    cursor.execute(sql, datos)

    # Vamos a codificar el nombre del archivo
    now = datetime.now()  # Trae la fecha y hora actual
    # Nos quedaremos con años, minutos y segundos
    tiempo = now.strftime("%Y%H%M%S")

    if foto.filename != "":  # Si hay foto
        nuevoNombreFoto = tiempo + nombre + ".jpg"
        # aqui guardamos la foto concatenando el filename con el tiempo
        foto.save("img/eventos/" + nuevoNombreFoto)

        cursor.execute(
            "SELECT foto FROM `eventos`.`tabla_eventos` WHERE id=%s;", id)
        fila = cursor.fetchall()

        os.remove(os.path.join(app.config['CARPETA'], fila[0][0]))

        cursor.execute(
            "UPDATE `eventos`.`tabla_eventos` SET foto=%s WHERE id=%s", (nuevoNombreFoto, id))
        conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    return redirect('/')


@app.route('/img/eventos/<nombreFoto>')
def uploads(nombreFoto):
    # aca paso el pasametro nombreFoto y la ruta es la carpeta con la foto
    return send_from_directory(app.config['CARPETA'], nombreFoto)

# -----    API   ------------
@app.route('/api/eventos', methods=['GET'])
def listar_eventos():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT * FROM `eventos`.`tabla_eventos`;"
        cursor.execute(sql)
        data = cursor.fetchall()
        eventos = []
        for fila in data:
            evento = {'name': fila[0], 'carpeta': fila[1], 'titulo': fila[2],
                      'cuando': fila[3], 'donde': fila[4], 'direccion': fila[5], 'id': fila[6]}
            eventos.append(evento)
        return jsonify({'eventos': eventos, 'mensaje': "Eventos listados correctamente"})

    except Exception as ex:
        return jsonify({'mensaje': "ERROR"})

def pag_no_encontrada(error):
    return "<h1>La página no existe brother</h1>",404

if __name__ == '__main__':
    app.register_error_handler(404, pag_no_encontrada)

    app.run(debug=True)
