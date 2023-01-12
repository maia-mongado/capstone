import './OurStaff.css';

export default function OurStaff() {
    return (
        <div id='our-staff'>
            <h1>Our Staff</h1>

            <div id='vets'>
            <h2>Veterinarians</h2>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/peter.jpg"}></img>
                <div className='bio'>
                    <h3>Dr. Peter Cournoyer, Medical Director</h3>
                    <h4>Education: Boston College, Tufts University</h4>
                    <h4>33 years in practice</h4>
                    <p>Dr. Cournoyer graduated from Boston College in 1984 and Tufts University School of Veterinary Medicine in 1989. He opened this practice in 2000 and especially enjoys primary care and surgery. He is married with three children and enjoys the family pets; two dogs and four chickens.</p>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/jessica.jpeg"}></img>
                <div className='bio'>
                    <h3>Dr. Jessica Glatzer-Murphy</h3>
                    <h4>Education: Tufts University Cummings School of Veterinary Medicine</h4>
                    <h4>15 years in practice</h4>
                    <p>Originally from Brooklyn, NY, Dr. Murphy received an undergraduate degree in environmental studies from the University of Vermont, and a Master's degree in environmental science from the University of California, Santa Barbara.  She then worked for several years in non-profit animal and environmental protection organizations before deciding that veterinary medicine was her true calling.  Dr. Murphy obtained her DVM from Tufts University Cummings School of Veterinary Medicine in 2007.  Prior to joining our staff, she has worked as a general practitioner in Rhode Island since 2007.
                    <br></br>
                    Professionally, Dr. Murphy enjoys all aspects of veterinary medicine, with a special interest in preventative care, internal medicine, and pain management.  When not working, she loves spending time with her family and friends, traveling, exercising, and enjoying the great restaurants in Providence.  She currently lives in Providence with her husband, two children "Lucas" and "Julia", her two rescue Shi-Tzus named "Rosie" and "Chloe", and her two cats named "George" and "Louie".</p>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/rebecca.png"}></img>
                <div className='bio'>
                    <h3>Dr. Rebecca Stiert</h3>
                    <h4>Education: Ohio State University </h4>
                    <h4>6 years in practice</h4>
                    <p>Originally from New York, Dr. Stiert grew up in the beautiful Hudson Valley where she spent a lot of her time outdoors. She attended the University of Massachusetts, Amherst, where she obtained her Bachelor's degree in Pre-Veterinary Sciences. After her undergraduate career, she moved to Columbus, Ohio and received her Doctorate of Veterinary Medicine at The Ohio State University College of Veterinary Medicine. Prior to moving back East to Providence, she had been working as an associate at a small animal hospital in Erie, Pennsylvania.
                    <br></br>
                    Some of her favorite things to do in her spare time are taking her fur-child, Lucy, on long walks, horseback riding, ballet, baking and enjoying a good cup of coffee. Her professional interests include behavior, internal medicine and soft tissue surgery.</p>
                </div>
            </div>

            </div>

            <h2>Staff Members</h2>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/jamie.jpeg"}></img>
                <div className='bio'>
                    <h3>Jamie</h3>
                    <h4>Office Manager/Veterinary Assistant</h4>
                    <p>Jamie is originally from New Jersey, but after graduating from URI with a degree in Pre-Vet Medicine she has been living in RI. 
                    <br></br>
                    She lives with her Corgi named  "Chubbs" and several cats. She enjoys working here and looks forward to seeing you and your four-legged pets!</p>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/jessica-2.jpeg"}></img>
                <div className='bio'>
                    <h3>Jessica</h3>
                    <h4>Manager/Veterinary Assistant</h4>
                    <p>Jessica graduated from New England Institute of Technology on September 2016 with a degree in Veterinary Technology. She first started with us as an intern but eventually worked her way up to a full-time position shortly after finishing school. 
                    <br></br>
                    She currently lives at home with her furry companions, her 8 year old boxer, Bella and her 11 month old kitten, Phoenix who she recently adopted from Providence Animal Shelter in November 2017. In her spare time, she enjoys swimming, reading books and horseback riding. She's always had a passion for helping animals since she was a little child and is excited to meet all your furry family members!</p>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/adaly.jpeg"}></img>
                <div className='bio'>
                    <h3>Adaly</h3>
                    <h4>Certified Veterinary Technician</h4>
                    <p>Adaly graduated from New England Institute of Technology in October of 2017 with a degree in Veterinary Technology. She has a special interest in pocket pets.  Earlier this year, she became a Certified Veterinary Technician.
                    <br></br>
                    She lives in Providence with her Pitbull Mix named "Marla", Rabbits named "Potato" and "Rex", and Chinchillas named "Bruno" and "Lilly".</p>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/brianna.jpeg"}></img>
                <div className='bio'>
                    <h3>Brianna</h3>
                    <h4>Certified Veterinary Technician</h4>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/marisa.jpeg"}></img>
                <div className='bio'>
                    <h3>Marisa</h3>
                    <h4>Veterinary Assistant</h4>
                </div>
            </div>

            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/default.jpeg"}></img>
                <div className='bio'>
                    <h3>Alexis</h3>
                    <h4>Veterinary Assistant</h4>
                </div>
            </div>   


            <div className='person'>
                <img src={process.env.PUBLIC_URL + "/images/our-staff/default.jpeg"}></img>
                <div className='bio'>
                    <h3>Sydney</h3>
                    <h4>Veterinary Assistant</h4>
                </div>
            </div>   


        </div>
    );
}