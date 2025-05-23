export interface IEntrega {
  tarea: number;
  estudiante: number;
  archivo: Blob;
  entregado_en: Date;
  calificacion: number;
  retroalimentacion: string;
}
