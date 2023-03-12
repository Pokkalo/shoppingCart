import React from 'react'
import FadeCarousel from '../components/FadeCarousel'
const About = () => {
  return (
    <div className='mainbg'>
    <div className='d-flex pt-5 justify-content-center align-content-center'><img src="./imgs/工作區域 5.png" width="500rem" alt='img'></img></div>
    <div className='row flex-md-col d-flex align-items-center justify-content-between'>
    <div className='col p-5'>
      <img src="./imgs/工作區域 4.png" alt='img2' width="500"></img>
      </div>
    <div className='col p-5 maincolor'>PTPF was founded in 2023 for the specific purpose of providing rental services to 
      people suffering from depression and other psychological problems.  Pets in PTPF 
      include dogs, cats, hamsters and others adopted from shutdown pet shops, the Hong Kong
       Government's Agriculture, Fisheries and Conservation Department (AFCD) Animal Management 
       Centres. Petting, holding, or cuddling an animal increases the levels of serotonin 
       and dopamine in our bodies, which are feel-good, calming brain chemicals. As a result of 
       these positive chemical changes, our feelings of depression and loneliness may be reduced
        while our self-esteem and happiness may increase. Interacting with pets can serve to 
        reduce your blood pressure, slow your heart rate, and decrease the level of the stress
         hormone cortisol in the body. Renting a pet helps people who cannot afford to raise a
          pet for the long term still benefit from this. This is also the vision of PTPT.
       We believe that animals are living creatures which like humans, are able to feel pain, 
      hunger and thirst. We should not inflict any suffering upon our fellow creatures just
      because they can't speak. Please treat our animals kindly. 
</div>
    </div>
    <FadeCarousel/>
    
    <div className="container">
                <h2 className='maincolor --about-titlesize pt-5 d-flex justify-content-center align-content-center'>About Us</h2>
                <div className="row pt-4 text-center maincolor" >

                    <div className="col-sm-4 py-2 ">
                        <img className="card-img-top --about-ciclefit" src="./imgs/full-shot-happy-women-dog.jpg" alt="Card image top"></img>
                        <div className="h-50 card-body">
                        <h2>We Trust</h2>
                          <p>We believe that positive change can only be defined in conjunction with the people at the heart of an issue. Providing an extensive range of pets to our clients is our goal.</p>
                        </div>

                    </div>

                    <div class="col-sm-4 py-2">
                        <img class="card-img-top --about-ciclefit" src="./imgs/cute-stylish-family-spring-park.jpg" alt="Card image top"></img>

                        <div class="h-50 card-body">
                        <h2>We Care</h2>
                        <p>  We care about human mental health. People suffering from depression and mental illnesses need more care. The work of PTPF is focused on human’s mental health and building strong communities.
                        </p>
                        </div>

                    </div>

                    <div class="col-sm-4 py-2">
                        <img class="card-img-top --about-ciclefit" src="./imgs/senior-woman-nursing-home-holding-cat.jpg" alt="Card image top"></img>

                        <div class="h-50 card-body">
                        <h2>We Help</h2>
                       <p> We help people by providing services and support. We have successfully gained our reputation by introducing pets to Hong Kong and Macau.
                       </p>  
                    </div>     
                    </div>  
                </div>
    </div>  

  </div>
  )
}

export default About