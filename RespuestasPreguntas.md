# Pregunta 1

Podemos guardar la lista de municipios nosotros mismos y añadirlo un campo
de fecha para saber de hace cuanto tiempo es la lista.

De esta forma podemos acceder a la lista de municipios de forma más rápida y
comprobar la fecha de actualización para cada X tiempo como 7 días realizar
de nuevo la llamada a la api y actualizar nuestra lista.

# Pregunta 2

Se hace para incrementar el rendimiento. En el caso de la llamada de la prediccion
es por 2 motivos.

Primero es que al tratarse de una llamada que sus valores cambian continuamente es
mejor en vez de calcular los datos en cada llamada guardarlos y pasar la referencia
a estos. Como se hace en la llamada donde la url de datos tendría la referencia a
los datos que necesitamos

Además, se trata de una llamada que contiene mucha información y seguramente se realice
muchas veces. Por esto es mejor dividir la información de la llamada en 2 partes.
Tenemos datos (la información que más necesitamos) y metadatos (más información sobre
la predicción).
Ahora cuando llamamos a este servicio podemos acceder primero a los datos que ya
es una coleccion de datos más pequeña y si el usuario desea puede acceder a los
metadatos que contiene más información.


# Pregunta 3

Para esto necesitamos alguna forma de identificar los usuarios que vuelven a entrar.
Para ello podríamos o guardar el municipio que busco por última vez en el localStorage
y cada vez que el usuario vuelva a entrar cargar el último municipio buscado

# Pregunta 4

Podemos seguir la misma lógica que para el problema del listado de municipios. Es decir,
guardar en nuestra base de datos los resultados de estas predicciones y servir las
predicciones que tenemos nosotros guardadas. Estas al igual que lista tenemos que ir
actualizandolas cuando haya pasado un tiempo desde la última. De esta forma evitamos
realizar las llamadas a la API.