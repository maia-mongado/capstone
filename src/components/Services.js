import './Services.css'
import { Link } from "react-router-dom";
import { GiPillDrop, GiPawHeart, GiFirstAidKit } from 'react-icons/gi';

export default function Services() {
    return (
        <div id="services">
            <h1>General Services</h1>
            <p>Your pet is an important part of your family, and when he or she is ill, you want the best medical care available.
            <br></br>
            <br></br>
            The veterinarians and staff at our clinic are ready to provide your pet with cutting edge veterinary medical care. From wellness exams and vaccines to advanced diagnostics and complex surgical procedures, your dog or cat will receive high quality care at our hospital.</p>

            <div id='list-of-lists'>
                <div className='service-list'>
                    <GiPillDrop/>
                    <h2>Vaccines, Pharmacy and Counseling</h2>
                    <ul>
                        <li>
                            <Link to='/services/vaccinations'>Vaccinations</Link>
                        </li>
                        <li>
                            <a 
                            href="https://eastsidevetclinic.securevetsource.com/site/view/88459_Home.pml?retUrl=https://www.eastsideveterinary.com/%26cms" 
                            target='_blank' rel="noopener noreferrer">Fully stocked pharmacy
                            </a>
                        </li>
                        <li>
                            Health certificates for domestic and international travel
                        </li>
                        <li>
                            <Link to='/services/nutritional-counseling'>Nutritional counseling</Link>
                        </li>
                        <li>
                            <Link to='/services/parasite-prevention-and-control'>Parasite prevention and control</Link>
                        </li>
                    </ul>
                </div>


                <div className='service-list'>
                    <GiPawHeart />
                    <h2>Happy Pet, Happy Heart</h2>
                    <ul>
                        <li>
                            <Link to='/services/wellness-exams'>Wellness exams</Link>
                        </li>
                        <li>
                            Preventative medicine
                        </li>
                        <li>
                            <Link to='/services/dental-care'>Dental care</Link>  
                        </li>
                        <li>
                            <Link to='/services/microchipping'>Microchipping</Link>
                        </li>
                        <li>
                            Chronic care
                        </li>
                        <li>
                            Consultations with specialists
                        </li>
                        <li>
                            <Link to='/services/rabbits-and-small-mammals'>Rabbits and small mammals
                            </Link>
                        </li>
                        <li>
                            <Link to='/services/puppy-and-kitten-care'>Puppy and kitten care</Link>
                        </li>
                    </ul>
                </div>

                <div className='service-list'>
                    <GiFirstAidKit />
                    <h2>Emergency Procedures</h2>
                    <ul>
                        <li>Sick exams</li>
                        <li>Emergency visits</li>
                        <li>
                            <Link to='/services/surgery'>General surgery</Link>
                        </li>
                        <li>
                            <Link to='/services/ultrasounds'>Ultrasounds</Link>
                        </li>
                        <li>
                            <Link to='/services/radiology'>Radiology</Link>
                        </li>
                        <li>
                            Orthopedic surgery
                        </li>
                        <li>
                            <Link to='/services/in-house-laboratory'>In-house laboratory</Link>
                        </li>
                        <li>
                            <Link to='/services/tonometry'>Tonometry</Link>
                        </li>
                        <li>
                            <Link to='/services/pain-management'>Pain management</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}