import axios from "axios";
import API from "source/components/api";

export const handleCheckName = (name: string): string[] => {
 const {data}= axios<string[]>(API.api + API.isJocarto).then;
 return data
};