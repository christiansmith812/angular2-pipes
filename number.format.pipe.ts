import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberFormat' })

    @Injectable()
        export class NumberFormatPipe implements PipeTransform {

            public settings: object;

            constructor() {
                this.settings = {
                    decimal: 0,
                    sepThousands: ' ',
                    sepDecimal: '.',
                    padding: '000000',
                    prefix: '',
                    suffix: '',
                };
            }

            transform(value: number | string, decimal: number | null, sepThousands: string | null, sepDecimal: string | null, prefix: string | null, suffix: string | null): string {
                if (!decimal) { decimal = this.settings['decimal']; }
                if (!sepDecimal) { sepDecimal = this.settings['sepDecimal']; }
                if (!sepThousands) { sepThousands = this.settings['sepThousands']; }
                if (!prefix) { prefix = this.settings['prefix']; }
                if (!suffix) { suffix = this.settings['suffix']; }

                let [integer, decimalNumber = ''] = (value || '').toString().split(sepDecimal);

                integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sepThousands);
                decimalNumber = (decimal > 0) ? sepDecimal + (decimalNumber + this.settings['padding']).substring(0, decimal) : '';

                return (integer + decimalNumber !== '') ? (prefix + integer + decimalNumber + suffix) : '';
            }


            parse(value: number | string, decimal: number | null, sepThousands: string | null, sepDecimal: string | null, prefix: string | null, suffix: string | null): string {
                if (!decimal) { decimal = this.settings['decimal']; }
                if (!sepDecimal) { sepDecimal = this.settings['sepDecimal']; }
                if (!sepThousands) { sepThousands = this.settings['sepThousands']; }
                if (!prefix) { prefix = this.settings['prefix']; }
                if (!suffix) { suffix = this.settings['suffix']; }

                let [integer, decimalNumber = ''] = (value || '').toString()
                                                                 .replace(prefix, '')
                                                                 .replace(suffix, '')
                                                                 .split(sepDecimal);

                integer = integer.replace(new RegExp(sepThousands, 'g'), '');
                decimalNumber = (parseInt(decimalNumber, 10) > 0 && decimal > 0) ? sepDecimal + (decimalNumber + this.settings['padding']).substring(0, decimal) : '';

                return integer + decimalNumber;
            }

        }
