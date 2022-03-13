import { ref } from "vue";
import useSupabase from "./useSupabase";

const links = ref("");

export default function useGetLinks() {
  const supabase = useSupabase();

  const getLinks = async () => {
    let { data } = await supabase.from("links").select("*");
    links.value = data;
  };
}

return {
  links,
  getLinks,
};
