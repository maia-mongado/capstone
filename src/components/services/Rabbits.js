import './Shared.css';

export default function Rabbits() {
    return (
        <div className='service'>
            <h1>Rabbits and Small Mammals</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/rabbits-and-small-mammals.jpeg"}></img>
            <p>
            Rabbits, guinea pigs, ferrets, and other small mammals have become popular pets as increasing numbers of pet owners come to understand the unique bond that can form with one of these special creatures.
            <br></br> 
            But did you know that small mammals need some of the same routine wellness care that dogs and cats need? Do you know if your pet should be spayed or neutered? Do you know if any vaccinations are recommended to help maintain good health? Do you have questions about proper nutrition, cage cleaning, grooming, or any other aspects of care and husbandry? Our staff of skilled professionals is well trained in the care and husbandry of small mammals and can give you the information you need to keep your “pocket pet” looking and feeling great.
            <br></br>
            <br></br>
            ​Why not call to schedule a wellness visit? We can perform a physical examination, answer any questions you may have about your pet, and discuss whether any changes in diet or at-home care are recommended to help ensure the health and longevity of your pet.
            <br></br>
            Veterinary medicine for exotic pets is growing as the popularity of these animals increases. When pet owners have access to the best information about nutritional and environmental management, exotic pets have a greater chance to live longer, healthier lives. If you own one of these unique pets, we encourage you to schedule a complete physical exam and consultation on proper care and feeding. 
            <br></br>
            <br></br>
            <b>Our trained staff can assist you with all of your small mammal needs.</b>
            </p>
        </div>
    );
}