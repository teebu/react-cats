import { useState, useEffect } from 'react';

export interface CatImage {
  id: string;
  url: string;
  width?: number;
  height?: number;
  breeds?: CatBreed[];
}

export interface CatBreed {
  id: string;
  name: string;
  description?: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  wikipedia_url?: string;
}

interface UseCatApiOptions {
  limit?: number;
  breed_ids?: string;
  autoFetch?: boolean;
}

interface UseCatApiResult {
  cats: CatImage[];
  loading: boolean;
  error: Error | null;
  fetchCats: () => void;
}

const API_BASE = 'https://api.thecatapi.com/v1';

export function useCatApi(options: UseCatApiOptions = {}): UseCatApiResult {
  const { limit = 1, breed_ids, autoFetch = true } = options;
  const [cats, setCats] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCats = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        limit: limit.toString(),
        order: 'random',
        size: 'medium',
      });

      if (breed_ids) {
        params.append('breed_ids', breed_ids);
      }

      const response = await fetch(`${API_BASE}/images/search?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCats(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchCats();
    }
  }, []);

  return { cats, loading, error, fetchCats };
}

export function useCatBreeds() {
  const [breeds, setBreeds] = useState<CatBreed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/breeds`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBreeds(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  return { breeds, loading, error };
}
