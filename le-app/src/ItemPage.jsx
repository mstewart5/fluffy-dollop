import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Item from './ItemPageModule';
function ItemPage() {
    const [offerJSON, setOffer] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    const url = window.location.href;
    useEffect(() => {
        const getPosts = async () => {
            if (url == `http://localhost:3000/item/offer/${id}`) {
                try {
                    const offersResponse = await axios.get(`http://localhost:8080/post/getoffer/${id}`);
                    setOffer(offersResponse.data);
                    console.log("Fetched post");
                } catch (error) {
                    console.error(error);
                }
            } else if (url == `http://localhost:3000/item/request/${id}`) {
                try {
                    const offersResponse = await axios.get(`http://localhost:8080/post/getrequest/${id}`);
                    setOffer(offersResponse.data);
                    console.log("Fetched post");
                } catch (error) {
                    console.error(error);
                }
            } else {
                navigate('/mainpage')
            }
        };
        getPosts();
    }, []);
    return (
        <Item data={offerJSON} />
    )
}
export default ItemPage;