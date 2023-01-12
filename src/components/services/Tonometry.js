import './Shared.css';

export default function Tonometry() {
    return (
        <div className='service'>
            <h1>Tonometry</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/tonometry.png"}></img>
            <p>
            A tonopen is an instrument that allows us to measure the pressure inside of the eye. Glaucoma is a painful disease that is characterized by increased eye pressure and often leads to blindness. Early detection is the key to preserving vision. Annual evaluations of breeds predisposed to glaucoma and patients with ocular medical conditions are recommended.
            </p>
        </div>
    );
}