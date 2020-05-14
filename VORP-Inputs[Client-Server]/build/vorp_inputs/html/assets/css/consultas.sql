SELECT merchandising.Nombre_Merch, clientes.Nombre_Cli FROM compra_merchan INNER JOIN merchandising ON merchandising.Cod_Merchan = compra_merchan.Cod_Merchan INNER JOIN clientes ON clientes.Cod_Cliente = compra_merchan.Cod_Cliente;

SELECT merchandising.Nombre_Merch, clientes.Nombre_Cli, clientes.Telefono_Cli FROM compra_merchan INNER JOIN merchandising ON merchandising.Cod_Merchan = compra_merchan.Cod_Merchan INNER JOIN clientes ON clientes.Cod_Cliente = compra_merchan.Cod_Cliente WHERE clientes.Telefono_Cli LIKE '034%' AND clientes.Nombre_Cli NOT LIKE 'Manolo';

SELECT * FROM merchandising WHERE Precio_Merch BETWEEN 20 AND 50;

SELECT Origen_Producto, Precio_Merch FROM merchandising WHERE Tipo_Merch LIKE 'Poster';

SELECT merchandising.Nombre_Merch, juegos.Nombre_Ju, juegos.Descripcion_Ju FROM basada_en INNER JOIN merchandising ON merchandising.Cod_Merchan = basada_en.Cod_Merchan INNER JOIN juegos ON basada_en.Cod_Juego = juegos.Cod_Juego;

SELECT * FROM merchandising WHERE Fecha_Salida_Merch BETWEEN '2019-05-01' AND '2020-05-01' AND (Tipo_Merch = 'Figura' OR Tipo_Merch = 'Camiseta');

SELECT merch.Nombre_Merch, ju.Nombre_Ju, ju.Descripcion_Ju FROM basada_en AS ben INNER JOIN merchandising AS merch ON merch.Cod_Merchan = ben.Cod_Merchan INNER JOIN juegos AS ju ON ben.Cod_Juego = ju.Cod_Juego WHERE ju.Nombre_Ju IN ('Minecraft', 'FIFA 20');

SELECT merchandising.Nombre_Merch, juegos.Nombre_Ju, juegos.Descripcion_Ju, juegos.Precio_Ju, merchandising.Precio_Merch FROM juegos RIGHT JOIN merchandising ON merchandising.Precio_Merch = juegos.Precio_Ju WHERE juegos.Descripcion_Ju LIKE '%miedo%'

SELECT merchandising.Nombre_Merch AS 'Nombre Articulo', merchandising.Color_Camiseta AS 'Color Camiseta', merchandising.Diseño_Camiseta AS 'Diseño Camiseta', merchandising.Origen_Producto AS 'Origen/Juego de la Camiseta', merchandising.Talla_Camiseta AS 'Talla', merchandising.Precio_Merch AS 'Precio' FROM merchandising WHERE merchandising.Tipo_Merch LIKE 'Camiseta' AND merchandising.Precio_Merch BETWEEN 10 AND 15;