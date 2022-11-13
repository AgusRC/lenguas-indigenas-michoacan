# Informacion general

Apartado Front del proyecto de Diccionario de Lenguas indigena
Desarrollado con el framwork `Ionic`, utiliza `capacitor` para traducir de NodeJS a Android/iOS

Instalar dependencias: `npm install`
Ejecutar: `ionic serve`

En ciertas versiones de NodeJs ocurre un error al ejecutar el comando para solucionarlo se ejecuta:
'export NODE_OPTIONS=--openssl-legacy-provider'



# Build del proyecto

 sync al directorio `www` : `ionic capacitor sync`
 build del proyecto para la plataforma (android/iOS): `ionic capacitor build`

 Se genera el codigo para Android y se puede ejecutar desde Android Studio