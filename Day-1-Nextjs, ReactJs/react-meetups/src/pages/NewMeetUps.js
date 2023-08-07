import { useNavigate  } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const history = useNavigate();
  
    function addMeetupHandler(meetupData) {
      console.log(meetupData)
      fetch(
        'https://react-getting-started-bfa26-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((data) => {
        console.log(data);
        history('/');
      });
    }
  
    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    );
  }

export default NewMeetupPage;