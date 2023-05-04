import * as moment from 'moment';

export class GovioFile {

  id: number | null = null;
  filename: string | null = null;
  expiration_file_id: number | null = null;
  status: any = null;
  creation_date: string | null = null;
  message_count: number = 0;

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
