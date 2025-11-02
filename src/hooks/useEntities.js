import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacters } from "../services/entityService.js";

const DEFAULT_FILTERS = {
  page: 1,
  pageSize: 20,
  name: "",
  status: "",
  species: "",
};

const NORMALIZED_PAGE_SIZES = new Set([10, 20, 50]);

const parseParams = (searchParams) => {
  const filters = { ...DEFAULT_FILTERS };

  const page = Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("pageSize"));

  filters.page = Number.isFinite(page) && page > 0 ? page : DEFAULT_FILTERS.page;
  filters.pageSize = NORMALIZED_PAGE_SIZES.has(pageSize)
    ? pageSize
    : DEFAULT_FILTERS.pageSize;
  filters.name = searchParams.get("name") ?? DEFAULT_FILTERS.name;
  filters.status = searchParams.get("status") ?? DEFAULT_FILTERS.status;
  filters.species = searchParams.get("species") ?? DEFAULT_FILTERS.species;

  return filters;
};

const buildSearchParamsObject = (filters) => {
  const params = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && `${value}`.trim() !== "") {
      params[key] = String(value).trim();
    }
  });
  return params;
};

export const useEntities = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: DEFAULT_FILTERS.page,
    totalPages: 0,
    totalRecords: 0,
    pageSize: DEFAULT_FILTERS.pageSize,
  });
  const [error, setError] = useState(null);

  const filters = useMemo(
    () => parseParams(searchParams),
    [searchParams],
  );

  const fetchEntities = useCallback(
    async (appliedFilters) => {
      setLoading(true);
      setError(null);
      try {
        const { items: fetchedItems, pagination: meta } = await getCharacters(
          appliedFilters,
        );
        setItems(fetchedItems);
        setPagination(meta);
      } catch (err) {
        setItems([]);
        setPagination((prev) => ({
          ...prev,
          currentPage: appliedFilters.page,
          totalPages: 0,
          totalRecords: 0,
        }));
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchEntities(filters);
  }, [fetchEntities, filters]);

  const updateFilters = useCallback(
    (updater) => {
      const nextFilters =
        typeof updater === "function" ? updater(filters) : updater;
      setSearchParams(buildSearchParamsObject(nextFilters));
    },
    [filters, setSearchParams],
  );

  const setFilter = useCallback(
    (key, value) => {
      updateFilters({
        ...filters,
        [key]: value,
        page: 1,
      });
    },
    [filters, updateFilters],
  );

  const setPage = useCallback(
    (pageNumber) => {
      updateFilters({
        ...filters,
        page: pageNumber,
      });
    },
    [filters, updateFilters],
  );

  const setPageSize = useCallback(
    (size) => {
      if (!NORMALIZED_PAGE_SIZES.has(size)) return;
      updateFilters({
        ...filters,
        pageSize: size,
        page: 1,
      });
    },
    [filters, updateFilters],
  );

  const clearFilters = useCallback(() => {
    updateFilters(DEFAULT_FILTERS);
  }, [updateFilters]);

  const refetch = useCallback(() => {
    fetchEntities(filters);
  }, [fetchEntities, filters]);

  return {
    items,
    loading,
    error,
    pagination,
    filters,
    setFilter,
    setPage,
    setPageSize,
    clearFilters,
    refetch,
    allowedPageSizes: Array.from(NORMALIZED_PAGE_SIZES).sort((a, b) => a - b),
  };
};
