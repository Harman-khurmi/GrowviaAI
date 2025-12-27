import Button from './Button'
import Title from './Title'
import { icons } from "../assets/assets";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import toast from 'react-hot-toast';
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from 'motion/react';
const IconComponent = icons;

const ContactUs = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "1af627c9-b462-4b52-ab1f-5ce1ebb1cc6f");
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
        <section id='contactUs' className='section-offset'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className='container  flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12'>
                <Title title={"Let's grow your business"} description={"Tell us about your goals, and we'll show you how smarter advertising can unlock your next stage of growth."} />

                <motion.form
                    onSubmit={onSubmit} className='w-[90%] md:w-[75%] lg:w-[50%] flex flex-col gap-6'>
                    <div className='flex flex-col mt-6 md:mt-8 lg:mt-10 w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: easeIn }}
                            className='flex flex-col md:flex-row  text-left justify-center gap-x-8'>
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: easeIn }}
                            className='flex flex-col text-left'>
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="" rows="8" placeholder='Enter your Message' required></textarea>
                        </motion.div>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: easeIn }}
                        type="submit">
                        <Button text={"Submit"} name={"Submit"} icon={IconComponent.arrowRightIcon} />
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    )
}

export default ContactUs
