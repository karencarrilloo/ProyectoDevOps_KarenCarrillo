# ProyectoDevOps

Proyecto de ejemplo creado para practicar los fundamentos de Azure DevOps.
Contiene una aplicacion sencilla en Node.js con dos funciones (sumar y saludar).
Incluye pruebas automaticas basicas escritas con el modulo nativo node:test.
El repositorio esta alojado en Azure Repos y las tareas se gestionan en Azure Boards.
Una pipeline de integracion continua (azure-pipelines.yml) instala, compila y prueba el codigo en cada push a main.

## Comandos locales
- `npm install` : instala dependencias
- `npm run build` : compila el proyecto
- `npm test` : ejecuta las pruebas
