import { useRef , useState} from 'react';

function HomePage() {

    const [feedbackItems, setFeedbackItems] = useState([]);

    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;

        const reqBody = { email: enteredEmail, text: enteredFeedback };
        // console.log("hddh",reqBody);
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

        // { email: hari@.com , text: 'some work'}
    }

    function loadFeedbackhandler(){
        fetch('/api/feedback')
        .then((response) => response.json())
        .then((data) => {
            setFeedbackItems(data.feedback);
        });
    }

    return (
        <div>
            <h1> The HomePage </h1>
            <form  onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor='email'> Email Address </label>
                    <input type="email" id='email' ref={emailInputRef} />
                </div>

                <div>
                    <label htmlFor='feedback'> your feedback </label>
                    <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
                </div>

                <button >
                    Send feedback
                </button>
            </form>
            <hr />
            <button onClick={loadFeedbackhandler}> Load feedback </button>
            <ul>
                {feedbackItems.map((item) =>(
                     <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
        
    );
};

export default HomePage;