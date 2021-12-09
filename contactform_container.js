class ContactForm_container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lanme: '',
            email: '',
            subject: ''
        }
    }

    render() {
        return (
        <div>
            <form netlify name="contactform">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.."/>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                <input type="submit" value="Submit"/>
            </form>
         </div>
        )
    }
}