import React from 'react';
import ListadoProducto from './Listado_producto';
import AgregarProducto from './agregar_producto';
import ListadoGuia from './listado_guia';
import AgregarGuia from './agregar_guia';
import Detalles from './Detalles';
const routes = {
	 "/": () => <ListadoProducto />,
  "/Examen/listado_producto": () => <ListadoProducto />,
  "/Examen/agregar_producto": () => <AgregarProducto />,
  "/Examen/listado_Guia": () => <ListadoGuia />,
  "/Examen/agregar_guia": () => <AgregarGuia />,
  '/Examen/Detalles/:id': ({id}) => <Detalles userId={id} />
};

export default routes;