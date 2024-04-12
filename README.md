# Inprodi - challenge

En este repositorio se utiliza el stack de React + TypeScript + Vite para desarrollar el reto frontend de la empresa Inprodi.
Herramientas que se utilizaron:
- useQuery y axios para la comunicación con al API.
- Se utilizo la API de stormglass que  te permite hacer 10 peticiones por dia para obtener los datos del clima.
- Redux-toolkit y redux-persist para el manejo de estado y la persistencia.
- react-router-dom para la navegación

Puedes acceder al link desplegado en: https://challenge-inprodi.vercel.app

# Vistas de la APP:
![vista-1 ](https://github.com/yacodev/challenge-inprodi/assets/6935006/2c228d6f-21eb-4b9b-b668-c5e7e0fd8087")
![vista-2 ](https://github.com/yacodev/challenge-inprodi/assets/6935006/73c2bd87-be03-4e64-8b8b-5c810772e1fd)
![vista-3 ](https://github.com/yacodev/challenge-inprodi/assets/6935006/c2bcf8d5-89ee-4345-b382-0738651d4254)

## Explicación de la App

1. En la primera vista, se muestra un listado de 5 usuarios predeterminados,  puedes editar la información de cada usuario (nombre, longitud, latitude), asi como puedes agregar nuevos usuarios y eliminar los existentes.
2. Al hacer click en cualquier usuario te muestra el clima (temperatura, velocidad del viento y humedad) para la longitud y latitud de dicho usuario. 
3. En una  tabla se muestra el pronostico para los 5 días siguientes por hora.


## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── ForecastWeatherTable             # Component
            ├── HeaderPage                     # Component
            ├── InformationCard                # Component
            ├── InputForm                      # Component
            ├── Modal                          # Component
            ├── UserCard                       # Component
            ├── UserModal                      # Component
            ├── WarningModal                   # Component
            ├── WeatherCard                    # Component
        ├── Pages
            ├── Home                 # Page to show all users
            ├── WeatherDetails       # Page to show weather for specific user
        ├── hooks
            ├── useWeather                # Service to get weather
        ├── models
            ├── selectorModel            # model
            ├── userModel                # model
        ├── router
            ├── AppRouter               # navigate
        ├── scss
            ├── abstracts               # to variables
            ├── base                    # base and  reset
        ├── store
            ├── slices                  # to plan and  user
        ├── utils
            ├── getEndDate               # get endDate to forecast weather
            ├── getNewId                  # get new id
    └── README.md                   # README

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Ejecutar:

```bash
npm install
```

1. Ejecutar

```bash
npm run dev
```

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://carlosyaco.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).