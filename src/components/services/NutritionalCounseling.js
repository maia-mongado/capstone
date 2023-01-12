import './Shared.css';

export default function NutritionalCounseling() {
    return (
        <div className='service'>
            <h1>Nutritional Counseling</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/nutritional-counseling.jpeg"}></img>
            <p>
            From the very first day you bring a new pet home through the final days of its life, nutrition plays a critical role in your pet’s overall health and well-being. Many pet owners take nutrition for granted, in part because the availability of so many nutritionally complete commercial diets has taken much of the guesswork out of choosing a suitable diet for a pet. 
            <br></br>
            However, did you know that your pet’s nutritional needs change with age and activity level? Did you know that specially formulated diets can assist in the management of various medical conditions, including kidney disease, diabetes, arthritis, and heart disease? Do you know how many calories your pet should have each day and whether you are over- or underfeeding? Are you comfortable reading and interpreting pet food labels? 
            <br></br>
            <br></br>
            Whether your pet has special dietary needs or simply needs to shed (or gain) a few pounds, our nutritional counseling services can help you accomplish your goals and keep your pet in good health. We offer counseling in dietary selection and feeding practices for pets during various life stages, such as growth, pregnancy, nursing, and the “golden years.” If your pet has a medical condition, we can help you select the most appropriate diet to suit your pet’s needs. 
            <br></br>
            <br></br>
            It can be easy for a pet owner to become overwhelmed by the available selection of pet foods, all of which claim to have specific benefits for pets. 
            <br></br>
            <b>We can offer expert advice to help you negotiate the complicated array of choices. Let our nutritional counseling service help you achieve and maintain optimal nutrition for your pet.</b>
            </p>
        </div>
    );
}