import { CardInfo } from "@/interfaces";

export const getCardData = async (): Promise<CardInfo> => {
  try {
    const response = await fetch(
      "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`HTTP error! status: ${error}`);
  }
};
