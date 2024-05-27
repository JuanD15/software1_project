import { supabase } from "./ConnectService.mjs";

export const insertProfile = async (profile) => {
    const { data, error } = await supabase
        .from('Profile')
        .insert([profile])
        .select()

    return { data, error }
}

export const fetchProfileWithUserID = async (id) => {
    const { data, error } = await supabase
        .from('Profile')
        .select()
        .eq('user_id', id)
        .maybeSingle()

    return { data, error }
}