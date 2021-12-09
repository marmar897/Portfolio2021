class Notif_container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lanme:'',
            email: '',
            subject: ''
        }
    }

    render(){
        return(
            <div>
                <h2>Hello, {this.state.fname  || "Friend"}! 
                    You have sent a message to me/ my email! I'll get back to you shortly!
                 </h2>
                 <p>Thank you for checking out my website!
                     Yes,the form works :)
                 </p>
            </div>
        )
    }
}