import './Shared.css';

export default function InHouseLaboratory() {
    return (
        <div className='service'>
            <h1>In-House Laboratory</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/in-house-laboratory.jpeg"}></img>
            <p>
            We are equipped with sophisticated blood analysis machines that allow us to measure many laboratory values. <b>s a compliment to our regular laboratory services, our in-house diagnostic blood analyzers allow us to get blood work back on the same day.</b> This is ideal for emergency and pre-surgical blood analysis.
            </p>
        </div>
    );
}