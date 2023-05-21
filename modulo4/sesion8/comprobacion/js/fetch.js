export const fetchMeteorologyData = async () => {
    try {
      const response = await fetch(
        "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch meteorology data");
    }
  };
  