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

    updatefName = (event) =>{
        event.preventDefault();
        this.setState({
            fname: event.target.value
        });
    }
    updatelName = (event) =>{
        event.preventDefault();
        this.setState({
            lname: event.target.value
        });
    }
    updateEmail = (event) =>{
        event.preventDefault();
        this.setState({
            email: event.target.value
        });
    }
    updateSubject = (event) =>{
        event.preventDefault();
        this.setState({
            subject: event.target.value
        });
    }

    onSubmit = (event) =>{  
        event.preventDefault();
        const filledForm = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            subject: this.state.subject
        }
        console.log(filledForm);
        alert("You have made a form and it has been sent to Mariana!")

    }


    render() {
        return (
        <div>
            <h1>Contact Form React component </h1>
            <div className="container">
            <form onSubmit = {this.onSubmit}>
                <label for="fname">First Name</label>
                <input type="text" onChange = {this.updatefName} id="fname" name="firstname" placeholder="Your name..."required/>

                <label for="lname">Last Name</label>
                <input type="text" onChange = {this.updatelName} id="lname" name="lastname" placeholder="Your last name..."/>

                <label for="email">Email</label>
                <input type="text" onChange = {this.updateEmail} id="email" name="email" placeholder="Your email..."/>

                <label for="subject">Subject</label>
                <textarea id="subject" onChange = {this.updateSubject}name="subject" placeholder="Write something..." ></textarea>

                <input type="submit" value="Submit"required/>
            </form>
            </div>
         </div>
        )
    }
}