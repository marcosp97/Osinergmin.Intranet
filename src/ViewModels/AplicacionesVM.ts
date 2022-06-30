class AplicacionesVM {
    public Id?: number;
    public Title?: string;
    public Categoria?: string;
    public URL?: string;
    public top?: number;
    public Activo?: boolean;
}

class AplicacionesDinamicoVM {
    public Categoria?: string
    public Aplicaciones?: AplicacionesItemVM[]
}

class AplicacionesItemVM {
    public Id?: number;
    public Title?: string
    public URL?: string;
}