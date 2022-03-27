import moment from 'moment';


export function dateInNumber(date) {
    const number = new Date(date);
    return number.getTime();
}

export function dateNumberInString(number) {
    const date = new Date(number);
    return moment(date.toString()).format('DD/MM/YYYY');
}

export const marks = [
    {
        value: dateInNumber(moment('01/01/2020').format('DD/MM/YYYY')),
        label: 'jan/2020',
    },
    {
        value: dateInNumber(moment('01/06/2020').format('DD/MM/YYYY')),
        label: 'jun/2020',
    },
    {
        value: dateInNumber(moment('01/01/2021').format('DD/MM/YYYY')),
        label: 'jan/2021',
    },
    {
        value: dateInNumber(moment('01/06/2021').format('DD/MM/YYYY')),
        label: 'jun/2021',
    },
    {
        value: dateInNumber(moment('01/01/2022').format('DD/MM/YYYY')),
        label: 'jan/2022',
    },
];