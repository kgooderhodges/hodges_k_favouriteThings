// import your packages here
import { fetchData, postData } from "./modules/DataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    // console.log('loaded');
    
    function popErrorBox(message) {
        alert("Mistakes were made.");
    }

    function handleDataSet(data) {
        // populate a lightbox with this data and then open it
        let lightbox = document.querySelector(".lightbox");
        }
    
    function retrieveProjectInfo(event) {
        // test for an ID
        // console.log(event.target.id);
        // check for id, and if there isn't one don't try the fetch call. It'll break (the PHP will choke)
        if (!event.target.id) { return }
        
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => { console.log(err); popErrorBox(err); });
        debugger;
    }

    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#prof-template').content;
    
        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
    
            currentUserText[1].src = `images/${thumbs[user].Image}`;
            currentUserText[1].id = thumbs[user].id;
            // add this new user to the view

            userSection.appendChild(currentUser);
        }
        userSection.addEventListener("click", retrieveProjectInfo);
        
    }
    // we can add a catch handler to a thenable if things go wrong during our data retrieval attempt
    // really, we should move all of this to an external class or function and pass arguments into it.

    // that would make it really flexible and able to handle all kinds of requests and we could pass in a callback depending on what we want to do with our data

    // but then we'd be on our way to rewriting the Axios API (you should research it)
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => { console.log(err); popErrorBox(err); });

    // fetchData("./includes/index.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
})();