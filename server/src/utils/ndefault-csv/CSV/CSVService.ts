import { parse } from 'csv-parse';
import { stringify } from 'csv-stringify';

let CSVServiceInstance: CSVService = null;
export class CSVService {
    private constructor() {}

    static getInstance(): CSVService {
        if (!CSVServiceInstance) {
            CSVServiceInstance = new CSVService();
        }
        return CSVServiceInstance;
    }

    jsonToCsv(
        json,
        options: {
            delimiter?: string; // default to ,
            header?: boolean; // default to no header
            columns?: any; // keeping only object structure for simplicity
            eof?: boolean; // default to eof always
            quoted?: boolean;
        }
    ) {
        return new Promise((resolve, reject) => {
            stringify(json, options, (err, output) => {
                if (err) {
                    return reject(err);
                }
                return resolve(output);
            });
        });
    }

    csvToJson(
        csv,
        options: {
            bom?: boolean;
            columns?: any;
            max_record_size?: number;
            relax_column_count?: boolean;
            skip_lines_with_error?: boolean;
            delimiter?: string;
        }
    ) {
        return new Promise((resolve, reject) => {
            parse(csv, options, (err, records) => {
                if (err) {
                    return reject(err);
                }
                return resolve(records);
            });
        });
    }
}
