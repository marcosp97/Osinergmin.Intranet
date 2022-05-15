class AplicacionesVM {
    public Id?: number;
    public Title?: string;
    public Categoria?: string;
    public SubCategoria?: string;
    public URL?: string;
    public top?: number
}

class AplicacionesDinamicoVM {
    public Categoria?: string
    public SubCategorias?: AplicacionesSubCategoriaVM[]
}

class AplicacionesSubCategoriaVM {
    public SubCategoria?: string
    public Aplicaciones?: AplicacionesItemVM[]
}

class AplicacionesItemVM {
    public Id?: number;
    public Title?: string
    public URL?: string;
    public SubCategoria?: string
}