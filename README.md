# Desafío Técnico - Fondos de Inversión

Este proyecto corresponde a un desafío técnico que consiste en consumir la API pública de Fintual para visualizar la variación histórica de fondos de inversión. La aplicación permite filtrar la información por tipo de fondo y rango de fechas. 
El desarrollo fue realizado completamente con **Angular**, utilizando herramientas como `HttpClient` para consumo de API y `ApexCharts` para la visualización de datos.

👉 Puedes ver la aplicación funcionando [aquí](https://anthonygs17.github.io/desafioCapital/)

## 🧩 Parte 1: Uso de API

### Objetivo
Mostrar en una interfaz gráfica la variación mensual histórica de cada uno de los 4 fondos disponibles en la [API pública de Fintual](https://fintualist.com/chile/tecnologia/el-api-de-fintual/).

### Endpoints utilizados

Los datos de fondos fueron obtenidos desde la API pública de Fintual, utilizando los siguientes endpoints principales:

- `https://fintual.cl/api/real_assets/{real_asset_id}/days`  
  Para obtener la información histórica de cada fondo.

- `https://fintual.cl/api/real_assets/{id}`  
  Para obtener los nombres de los fondos de inversion.

Más detalles sobre esta API están disponibles en la [documentación oficial](https://fintual.cl/api-docs).


## 📂 Parte 2: Consultas SQL

### Tabla `user_data`

| Columna    | Tipo     | Descripción                     |
|------------|----------|---------------------------------|
| user_id    | INTEGER  | Identificador único del usuario |
| name       | TEXT     | Nombre del usuario              |
| last_name  | TEXT     | Apellido del usuario            |

### Tabla `user_movements`

| Columna        | Tipo      | Descripción                                       |
|----------------|-----------|---------------------------------------------------|
| user_id        | INTEGER   | Identificador del usuario                         |
| movement_type  | TEXT      | Tipo de movimiento: `subscription` o `withdrawal` |
| amount         | DECIMAL   | Monto del movimiento en CLP                       |
| date           | DATE      | Fecha del movimiento                              |

En el archivo [`queries.sql`](./queries.sql) se encuentran tres consultas que responden a los siguientes requerimientos:

1. Total de aportes y retiros realizados en diciembre de 2021
2. Cantidad y monto promedio de aportes y rescates por fecha
3. Obtener el usuario con el mayor monto total de aportes

---

## 📎 Notas adicionales

* El proyecto fue desarrollado completamente en Angular como SPA.
* El diseño y arquitectura buscan facilitar la mantenibilidad y escalabilidad.
* Se priorizó la claridad del código y la experiencia de usuario.
