import { Ticket } from "../Contracts";
import { api } from "./apiConfig";
import { buildUrl } from "./apiHelper";
import { tickets } from "./mock";

export class TicketsApi {
  static get = async (): Promise<Array<Ticket>> => {
    // const url = buildUrl(`a1b1c28b32d9785bb26c`, [], "", false);
    // const response = await api.get(url);
    // return response.data;

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(tickets), 1000);
    });
  };
}
