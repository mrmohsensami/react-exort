import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
    };

    useEffect(() => {
        getPhotos();
    }, [url]);
    return { loading, photos };
};
