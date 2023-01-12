import './Shared.css';

export default function DentalCare() {
    return (
        <div className='service'>
            <h1>Dental Care</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/dental-care.jpeg"}></img>
            <p>
                Does your best friend have bad breath? Despite what many pet owners may believe, “dog breath” is not just a nuisance – it’s a sign of an unhealthy mouth.
                <br></br>
                ​Bad breath is caused by bacteria. Over time, bacteria lead to plaque and tartar buildup on your pet’s teeth. The result is bad breath, reddened gums, and other common signs of dental disease. 
                <br></br>
                As dental disease progresses, other signs can include drooling, discomfort while chewing, and loose or missing teeth. ​Even if you’re using treats and chews to help control tartar, these are frequently not enough to keep dental disease in check. 
                <br></br>
                <br></br>
                <b>
                Ask us about the best ways to control plaque and help protect your pet from dental disease.
                </b>
                <br></br>
                ​Dental hygiene is an important part of your pet's health, because dental disease can be associated with other serious health problems such as heart disease and kidney disease. But how do you know if your pet has a healthy mouth? Let us examine your pet’s teeth and gums to help determine if there are any dental issues you should know about. After a brief visual examination, we may recommend a more detailed examination (which requires sedation), a dental cleaning, or options for at-home dental care.
                <br></br>
                <br></br>
                Even if you think your pet’s teeth and gums are fine, we can offer expert advice to help you keep them that way! Dental health shouldn’t be taken for granted. Fortunately, many dental problems can be managed through at-home care and by bringing your pet to us for regular dental checkups and teeth cleanings.
                <br></br>
                <br></br>
                We want your pet to live a long, healthy life, and we understand that maintaining a healthy mouth is part of that. Your pet’s health is important to us, so let us help you with 
                this commitment. 
                <br></br>
                <b>Call today to discuss your pet’s dental care needs and how we can help!</b>
            </p>
        </div>
    );
}