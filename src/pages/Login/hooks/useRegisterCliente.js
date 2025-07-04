import { supabase } from '../../../../src/suprabaseClient.js';

export default function useRegisterCliente() {

  const registerCliente = async (cliente) => {
    const { data, error } = await supabase
      .from('clientes')
      .insert([cliente]);

    return { data, error };
  };

  return { registerCliente };
}
