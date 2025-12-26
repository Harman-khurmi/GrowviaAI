import Button from './Button'
import Title from './Title'
import { icons } from "../assets/assets";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import toast from 'react-hot-toast';
const IconComponent = icons;

const ContactUs = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d55a8d27-4cc3-492f-9368-4aef32f5c3d1");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Thank you for you submission!")
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section id='contactUs'>
            <div className='container  flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12'>
                <Title title={"Let's grow your business"} description={"Tell us about your goals, and we'll show you how smarter advertising can unlock your next stage of growth."} />

                <form onSubmit={onSubmit} className='w-[90%] md:w-[75%] lg:w-[50%] flex flex-col gap-6'>
                    <div className='flex flex-col mt-6 md:mt-8 lg:mt-10 w-full'>
                        <div className='flex flex-col md:flex-row  text-left justify-center gap-x-8'>
                            <div className='flex flex-col items-left w-full'>
                                <label htmlFor="" className=''>Your Name</label>
                                <div className='flex w-full items-center'>
                                    <GoPerson className='form-icon' />
                                    <input type="text" name="name" id="" placeholder='Enter your Name' required />
                                </div>
                            </div>
                            <div className='flex flex-col  items-left justify-center w-full'>
                                <label htmlFor="">Your Email</label>
                                <div className='flex w-full items-center'>
                                    <CiMail className='form-icon' />
                                    <input type="email" name="email" id="" placeholder='Enter your Email' required />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col text-left'>
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="" rows="8" placeholder='Enter your Message' required></textarea>
                        </div>
                    </div>
                    <button type="submit">
                        <Button text={"Submit"} icon={icons.arrowRightIcon} />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
