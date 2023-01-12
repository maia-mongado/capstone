import './Shared.css';

export default function WellnessExams() {
    return (
        <div className='service'>
            <h1>Wellness Exams</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/wellness-exams.jpeg"}></img>
            <p>
            Our wellness exams are recommended once a year to ensure that we stay current with your pet's health throughout their life.  We are here to help with the best options to maintain the longevity of your pets as their needs change.  We offer vaccinations that are needed, based on your pet's individual lifestyle and risk factors.   ​
            </p>
        </div>
    );
}