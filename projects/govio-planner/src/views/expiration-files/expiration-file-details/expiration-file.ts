import * as moment from 'moment';

export class ExpirationFile {

  id: number | null = null;
  filename: string | null = null;
  uploader_id: number | null = null;
  plan_id: number | null = null;
  file: any = null;
  creation_date: string | null = null;
  processing_date: string | null = null;

  constructor(_data?: any) {
    if (_data) {
      for (const key in _data) {
        if (this.hasOwnProperty(key)) {
          if (_data[key] !== null && _data[key] !== undefined) {
            switch (key) {
              default:
                (this as any)[key] = _data[key];
            }
          }
        }
      }
    }
  }
}
