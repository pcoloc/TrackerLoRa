# TrackerLoRa
LoRa tracker to estimate the location of any client that connects to one or more gateways
# Proyecto individual de DRA

> Este año se me está haciendo imposible.

La página va a estar alojada en: 
[TrackerLoRa](https://tracker.lopezcarrillo.com)

## 1. Diagrama y diseño del proyecto

![Captura de pantalla de 2022-02-25 18-23-29](https://user-images.githubusercontent.com/38069658/155759553-5ca53652-802b-4063-a81d-e3f600677012.png)



## 2. Propuesta de tecnologías a usar en el Proyecto Individual

### Dockers 
* Todas las herramientas estarán montadas en docker e introducidas en una imagen o serie de imágenes.

### BackEnd
* Spring Boot
* Java 11

### FrontEnd
* Angular o React, el que mejor encaje 
* Bootstrap 5
* JavaScript (?)

### DataBases
* PostgreSQL para el manejo de usuarios
* Influxdb o MongoDB (Base de datos de series temporales) para almacenamiento de sensores
* Sitio donde guardar datos sin catalogar

### Otras tecnologías
* ThingsNetwork que usa MQTT para obtener datos de los sensores existentes
* MQTT Server para poder suscribir a Spring y obtener datos


## 3. Contenidos más relevantes

### Datos de los usuarios
* Nombre, Contraseña, Email, Organizacion
* Posibilidad de crear equipos para compartir los sensores
* Guardar los datos de los sensores tales como IPs, datos a recopilar, contaseñas de conexion... 
* Posibilidad de añadir multiples BBDD de conexiones para guardar los datos
* Ver dashboards, crear dashboards personalizadas... 

...
Authentication -- 

![image](https://user-images.githubusercontent.com/38069658/170887326-0bf051d2-3c4f-4184-8084-bbcbe7b724a3.png)

