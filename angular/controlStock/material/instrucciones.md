## App Control Stock

  1 - Instalar bootstrap en el proyecto
        npm install bootstrap
  2 - Cargar bootstrap en angular.jsn
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  3 - Creamos el interface de producto. Siempre el interfaz va en singular representa un producto
        ng g i interfaces/IProducto --type=interface
                - id?: number - opcional por que formulario no recoge
                - title: string
                - price: number
                - quantity: number
  4 - Creamos el servicio de productos. El servicio es en plural por que representa a todas las funciones que podemos hacer con los datos de producto
        ng g s services/productos --skip-tests
                 - getAll() : IProduct[]
                 - insert() : any
  5 - Creamos los componetes necesario - 4 componentes
                - formProduct
                - productList
                - product
                - total
            ng g c componentes/subcarpeta/nombreComponente --skip-tests
            subcarpeta no es obligatoria
