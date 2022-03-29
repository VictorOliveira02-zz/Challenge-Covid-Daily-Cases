import { supabase } from './supabase';


export const getData = async () => {
    const data = await supabase
        .from('data-countries')
        .select('*')

    return data;
}