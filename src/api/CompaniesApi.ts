import { Company } from "../Contracts";
import { api } from "./apiConfig";
import { buildUrl } from "./apiHelper";
import { companies } from "./mock";

export class CompaniesApi {
  static get = async (): Promise<Array<Company>> => {
    // const url = buildUrl(`a1b1c28b32d9785bb26c`, [], "", false);
    // const response = await api.get(url);
    // return response.data;

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(companies), 1000);
    });
  };
}
