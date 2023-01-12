import './Shared.css';

export default function Microchipping() {
    return (
        <div className='service'>
            <h1>Microchipping</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/microchipping.jpeg"}></img>
            <p>
            Each year, thousands of pets go missing, and many don’t make it back home. Many pets (especially indoor pets) don’t wear collars or tags. Even if your pet wears a collar and identification tag, collars can break off and tags can become damaged and unreadable, so these forms of identification may not be enough to ensure your pet’s safe return. Your pet needs a form of identification that is reliable and can’t get lost, stolen, or damaged. A microchip is a safe, simple form of identification that can significantly increase the chance that your pet will return safely. 
            <br></br>
            <br></br>
            A microchip is about the size and shape of a grain of rice and is placed underneath your pet's skin between the shoulder blades. Microchip implantation takes only a few minutes and is very safe. Each microchip is unique and carries vital information about your pet—including your name, address, and contact information. When a microchip is implanted, the pet owner is given a registration form to complete. Registering the number on the microchip includes your pet in a national pet recovery database. 
            <br></br>
            <br></br>
            ​Veterinary hospitals, animal shelters, and animal control offices across the country are equipped with special electronic scanners that can detect the microchip and read the identification number. If a lost pet is picked up by animal control or found by a good Samaritan and presented to a veterinarian, a quick scan of the microchip reveals the identification number. A toll-free phone call to the pet recovery database alerts the microchip company that a lost pet has been identified. The pet owner can then be contacted and reunited with his or her pet! 
            <br></br>
            <br></br>
            Young puppies and kittens can receive microchips, but even if your pet is already an adult, you should consider microchipping. Even indoor pets can get outside accidentally and get lost, so if you’re relying on other forms of identification, you could be placing your pet at risk. Microchipping is a safe, effective way to help ensure your pet’s return if the unthinkable happens.
            <br></br>
            <br></br>
            <b>Ask us about microchipping your pet today!</b>
            </p>
        </div>
    );
}