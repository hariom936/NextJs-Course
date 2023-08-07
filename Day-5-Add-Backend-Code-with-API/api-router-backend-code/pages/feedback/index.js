import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import {Fragment, useState} from 'react';

function FeedbackPage(props){

    const [FeedbackData, setFeedbackData ] = useState();

    function loadFeedbackhandler(id){
        // fetch('/api' + id);
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then((data) =>{
            setFeedbackData(data.feedback);
        }); //api-some-feedback-id
    }


    return(
       <Fragment>
            {FeedbackData && <p>{FeedbackData.email}</p>}
         <ul>
            {props.feedbackItems.map((item) =>(
                <li key={item.id}>
                    {item.text} <button onClick={loadFeedbackhandler.bind(null, item.id)}> Show Details </button>
                </li>
            ))}
        </ul>
       </Fragment>
    );
}

export async function getStaticProps() {
    // fetch()
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return{
        props:{
            feedbackItems: data,
        },
    };
}

export default FeedbackPage;