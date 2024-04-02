export interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    categorias: string[];
    etiquetas: string[];
    precio: number;
    precioRebajado?: number;
    urlImagen: string;
}
