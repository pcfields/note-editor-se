const apiPrefix = import.meta.env.VITE_API_PREFIX;

export async function apiRequest<TData>(
  path: string,
  options: RequestInit,
): Promise<TData> {
  const url = `${apiPrefix}/${path}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`[api error]:  ${response.statusText}`);
    }

    const data: TData = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
