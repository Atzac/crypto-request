import axios from "axios";

const API_AWESOME = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL",
});

export async function getAwesomeData() {
  try {
    const response = await API_AWESOME.get();
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Erro no GET AWESOME");
    }
  } catch (e) {
    console.log(e);
  }
}
