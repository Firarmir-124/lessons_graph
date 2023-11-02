export interface GraphType {
  month: number;
  data: string;
}

export interface GraphDateResponse {
  date: string;
  type: number;
  collaboration: number;
}

export interface DatesType {
  [id: string]: number;
}

export interface GraphDateResponse {
  date: number;
}

export interface TooltipContentType {
  type: number;
  contributions: number;
  week: string;
  month: string;
  day: number;
  year: number;
  fullData: string;
}
