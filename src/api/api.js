import axios from "axios";

const API_NOMICS = axios.create({
  baseURL: "https://api.nomics.com/v1/currencies/",
});

export async function getNomicData() {

  try {
    const response = await API_NOMICS.get("ticker", {
      params: {
        key: "2b50ff95fdb0466b5f1c37f438b5e5cd72095bf0",
        "per-page": 5,
        convert: "BRL"
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Erro no GET NOMICS");
    }
  } catch (e) {
    console.log(e);
  }
}
