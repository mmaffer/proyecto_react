import { useCallback, useEffect, useState } from "react";
import { getCharacterById } from "../services/entityService.js";

export const useEntity = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(null);

  const fetchEntity = useCallback(
    async (entityId) => {
      if (!entityId) return;
      setLoading(true);
      setError(null);
      try {
        const response = await getCharacterById(entityId);
        setData(response);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchEntity(id);
  }, [fetchEntity, id]);

  return { data, loading, error, refetch: () => fetchEntity(id) };
};
