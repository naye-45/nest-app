import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import {productos}from './baseDatos'
import { Producto } from './entities/producto.entity';
import { AnyAaaaRecord } from 'node:dns';


@Injectable()
export class ProductosService {
  create(createProductosDto: any) {
    const nuevoId = productos.length > 0 
      ? productos[productos.length - 1].id + 1 
      : 1;
    const productoConId = {
      id: nuevoId,
      ...createProductosDto, 
    };
    productos.push(productoConId);
    return productoConId;
  }
  

  findAll() {
    return productos;
  }

  findOne(id: number) {
    return productos.find((p)=>p.id === id)
  }

  update(id: number, updateProductoDto: any) {

   const index = productos.findIndex((p) => p.id === id);
   productos[index] = { ...productos[index], ...updateProductoDto };
  return productos[index];
  }

  remove(id: number) {
    const index = productos.findIndex((p) => p.id === id);
    const borrado = productos.splice(index, 1);
    return borrado[0];
    
  }
}
