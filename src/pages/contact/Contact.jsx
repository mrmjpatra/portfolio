import ContactMe from '../../components/ContactMe';
import './contact.css'
import ContactIcon from '../../components/ContactIcon';
import { contactList } from './ContactList';


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <div className="contact-left-container">
                    <div className="contact_icon">
                        {
                            contactList.map(list=>{
                                return(
                                    <ContactIcon key={list.id} {...list} />
                                )
                            })
                        }

                    </div>
                </div>
                <div className="contact-right-container">
                    <ContactMe />
                </div>
            </div>

        </div>
    )
}

export default Contact