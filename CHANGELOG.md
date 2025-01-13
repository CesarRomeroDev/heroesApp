# Changelog

Todas las modificaciones importantes de este proyecto se documentarán en este archivo.

El formato se adhiere a [Keep a Changelog](https://keepachangelog.com/) y sigue la versión semántica [SemVer](https://semver.org/).

## Cómo escribir registros por actualización

1.Título de la versión: ## [x.y.z] - YYYY-MM-DD

- x.y.z es el número de versión (siguiendo SemVer: mayor, menor, parche).
- YYYY-MM-DD es la fecha de la versión.

2.Categorías de cambios:

- Usa “Added” para lo nuevo.
- Usa “Changed” para modificaciones.
- Usa “Fixed” para errores corregidos.
- Usa “Removed” para lo eliminado.

3.Formato:

- Enumera cada punto con guiones (-).
- Sé claro y conciso.

### [1.1.0]

### Added 2025-01-13

- Se realiza diseño de heroes-layout
- Se implementa toolbar para el encabezado y boton para el desplazamiento de menu lateral.
- Se implementa mat-sidenav para ocultar y mostrar menu lateral.
- Se implementa mat-nav-list en menu lateral para el desplazamiento de views( listado, añadir y buscar ).
- Se agrega dependencia para la creación de servidor para desarrollo: "json-server": "^1.0.0-beta.3"
- Se crea carperta en la raiz "data" -> archivo "db.json", archivo 'bd-back.json'.
- Se agrega script en archivo package.json para correr Servidor localmente.

### Added 2025-01-10

- Instalación de Angular Material: versión material@17.0.0 [https://material.angular.io/].
- Se agrega link tag de PrimeFlex : [https://primeflex.org/].
- Diseño de Login y Auth Layout

## [1.0.0] 2025-01-09

### Added 2025-01-09

- Inicio de proyecto HeroesApp
- Se agrega CHANGELOG.md para los cambios importantes.
- Se crean carpetas y componentes, negocio cliente.

- Carpeta auth -> views: layout, login, register.
- Carpeta auth -> auth-routing, auth.module.

- Carpeta heroes -> views: hero, layout, list, new, search.
- Carpeta heroes -> heroes-routing, heroes.module.

- Carpeta material -> material.module.

- Carpeta shared -> views: error404.
- Carpeta shared -> shared.module -> export: error404.

- Se agrega el modulo shared.module -> app.module.

- Se agregan las rutas principales en app-routing.
  - ruta principal: HeroesLayoutViewsComponent.
  - ruta principal: AuthLayoutViewsComponent.
  - ruta no encontrada: SharedError404ViewsComponent.
  - ruta si es vacia: redireccionar a HeroesLayoutViewsComponent.
  - ruta no encontrada: redireccionar SharedError404ViewsComponent.

- Se agregan rutas secundarias en heroes-routing.
  - ruta padre: HeroesLayoutViewsComponent.
    - rutas hijas: new-hero, search, edit/:id, list, :id, redirectTo: 'list'

- Se agregan rutas secundarias en auth-routing.
  - ruta padre: AuthLayoutViewsComponent.
    - rutas hijas: login, new-account, redirectTo: 'login'
