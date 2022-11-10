import axios, { AxiosResponse } from "axios";

export const getHomeData = () => {
    const url = "../../../../data/homeData.json";
    return axios.get(url).then((res: AxiosResponse)=> res).catch((error: AxiosResponse) => error)
}