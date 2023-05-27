export interface IDealers {
  id: number;
  dealerId: number;
  name: string;
  logo: string;
  openingHours: {
    [key: string]: {
      [key: string]: string;
    };
  };
  address: {
    [key: string]: string;
  };
  geo: {
    [key: string]: number;
  };
}
[];
