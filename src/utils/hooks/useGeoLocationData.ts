import { useState, useEffect } from 'react';

interface GeolocationData {
    country_code: string;
    country_name: string;
    city: string;
    postal: string;
    latitude: number;
    longitude: number;
    IPv4: string;
    state: string;
}

const defaultGeolocationData: GeolocationData = {
    country_code: "",
    country_name: "",
    city: "",
    postal: "",
    latitude: -1,
    longitude: -1,
    IPv4: "",
    state: "",
};
const useGeolocationData = () => {
    const [data, setData] = useState<GeolocationData>(defaultGeolocationData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://geolocation-db.com/json/');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            setData(defaultGeolocationData);
            setError(null);
        };
    }, []);

    return { data, loading, error };
};

export default useGeolocationData;
