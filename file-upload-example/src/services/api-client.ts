import axios from "axios";

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${this.endpoint}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  getAllData = async () => {
    try {
      const response = await axios.get("/api/data");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
}

export default APIClient;
