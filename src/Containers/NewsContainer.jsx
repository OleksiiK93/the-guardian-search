import React, {useState, useEffect} from "react";
import NewsList from "../Components/NewsList";

const NewsContainer = () => {

    const [newsList, setNewsList] = useState([]);
    const [apiUrl, setApiUrl] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setApiUrl(`https://content.guardianapis.com/search?q=${searchQuery}&format=json&api-key=test`)}, [searchQuery])

      
    const handleInput = (event) => {
        setSearchQuery(event.target.value)
    };
    
    const getNews = (event) => {
        event.preventDefault();
        // if (searchQuery) {setApiUrl(`https://content.guardianapis.com/search?q=${searchQuery}&format=json&api-key=test`)
        fetch(apiUrl)
        .then(res => res.json())
        .then(articles => setNewsList(articles.response.results))
        setSearchQuery("")}
    
    return(
        <>
        <h1>Use this website to search the Guardian articles instead of, well, the Guardian website</h1>
        <form onSubmit={getNews}> 
            <input id="new-item" type="text" value={searchQuery} onChange={handleInput}/>
            <input type="submit" value="Search" />
        </form>
        <hr></hr>
        <NewsList news={newsList}/>
        </>
    );

};

export default NewsContainer;