from flask import Flask, render_template, request, redirect
from flaskext.mysql import MySQL
from datetime import datetime
import os  # Para trabajar con la foto

app = Flask(__name__)

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'localhost'  # La dirección de la base
app.config['MYSQL_DATABASE_USER'] = 'root'  # usuario por defecto
app.config['MYSQL_DATABASE_PASSWORD'] = ''  # la clave
app.config['MYSQL_DATABASE_PORT'] = 3306  # Por defecto es el 3306
app.config['MYSQL_DATABASE_BD'] = 'eventos'  # Es la base de datos
# Aqui le estamos pasando toda la configuración de app al objeto MySQL creado para iniciar la conexión
mysql.init_app(app)

# El método path.join une componentes de ruta, para concatenarlos con el separador de directorios y generar el acceso a la carpeta
CARPETA = os.path.join('img/streamings')
app.config['CARPETA'] = CARPETA


@app.route('/')
def admin():

    sql = "SELECT * FROM `eventos`.`tabla_streamings`;"
    conn = mysql.connect()
    # Es un método, para el procesamiento indv de las filas que devolverá el sistema
    cursor = conn.cursor()
    cursor.execute(sql)  # Pasamos la info de la instrucción

    # Estoy asignando a empleados todos los datos que tiene cursor (que está trayendo toda la base de datos con el SELECT * ALL)
    streamings = cursor.fetchall()

    # print(empleados)
    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL
    # esto es lo que va a retornar. La ruta empleados/index que es el html. Toma por defecto la carpeta template.
    return render_template('streamings/index.html', streamings=streamings)


@app.route('/create')
def create():

    return render_template('streamings/create.html')


@app.route('/store', methods=['POST'])
def storage():
    nombre = request.form['txtNombre']
    titulo = request.form['txtTitulo']
    foto = request.files['txtFoto']
    cuando = request.form['txtCuando']
    donde = request.form['txtDonde']
    direccion = request.form['txtDireccion']

    now = datetime.now()

    tiempo = now.strftime("%Y%H%M%S")
    if foto.filename != "":  # Si hay foto
        nuevoNombreFoto = tiempo + nombre + ".jpg"
        # aqui guardamos la foto concatenando el filename con el tiempo
        foto.save("img/streamings/"+nuevoNombreFoto)

    sql = "INSERT INTO `eventos`.`tabla_streamings` (`id`, `nombre`, `titulo`, `foto`,`cuando`,`donde`,`direccion`) VALUES (NULL, %s, %s, %s, %s, %s, %s);"
    datos = (nombre, titulo, nuevoNombreFoto, cuando, donde, direccion)

    conn = mysql.connect()
    cursor = conn.cursor()
    # Pasamos la info de la instrucción (SE AGREGA DATOS EN EL EXECUTE)
    cursor.execute(sql, datos)
    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    return redirect('/')


@app.route('/destroy/<int:id>')
def destroy(id):
    sql = "DELETE FROM `eventos`.`tabla_streamings` WHERE id = %s;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(
            "SELECT foto FROM `eventos`.`tabla_streamings` WHERE id=%s;", id)
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
    cursor.execute("SELECT * FROM `eventos`.`tabla_streamings` WHERE id=%s;", id)
    streamings = cursor.fetchall()
    conn.commit()

    return render_template('streamings/edit.html', streamings=streamings)

@app.route('/update', methods=['POST'])
def update():

    nombre = request.form['txtNombre']
    titulo = request.form['txtTitulo']
    foto = request.files['txtFoto']
    cuando = request.form['txtCuando']
    donde = request.form['txtDonde']
    direccion = request.form['txtDireccion']
    id = request.form['txtID']

    sql = "UPDATE `eventos`.`tabla_streamings` SET `nombre`=%s, `titulo`=%s, `cuando`=%s, `donde`=%s, `direccion`=%s WHERE id=%s;"
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
        foto.save("img/streamings/" + nuevoNombreFoto)

        cursor.execute(
            "SELECT foto FROM `eventos`.`tabla_streamings` WHERE id=%s;", id)
        fila = cursor.fetchall()

        os.remove(os.path.join(app.config['CARPETA'], fila[0][0]))

        cursor.execute(
            "UPDATE `eventos`.`tabla_streamings` SET foto=%s WHERE id=%s", (nuevoNombreFoto, id))
        conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    conn.commit()  # Se confirma los cambios para que haga la instrucción SQL

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
