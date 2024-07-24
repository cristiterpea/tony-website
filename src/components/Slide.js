import Testimonials from "./Testimonials";

export default function Slide({slide}) {
    return (
        <section className='slide'>
            <div className='container'>
                <h2>{slide.title}
                    {slide.subtitle && 
                    <span>{slide.subtitle}</span>
                    }
                </h2>
                
                <div className='content'>
                    {   
                        slide.name ?
                        <div className='photo'>
                            <img src={slide.photo} alt={slide.title} width={200} className='tonys-photo'></img> 
                            <p>{slide.name}</p>
                        </div>
                        :
                        <div className='photo'>
                            <img src={slide.photo} alt={slide.title} width={200} ></img> 
                        </div>
                    }
                    
                    <div className={slide.title.toLowerCase().includes('outstanding') ? 'slide-text outstanding' : 'slide-text'}>
                        {slide.title.toLowerCase().includes('about') ? 
                            <div className='about'>
                                {
                                    slide.paragraphs.map((p, index) => {
                                        return (
                                            <div key={index} className='about-item'>
                                                <img src={slide.photosAbout[index]} alt='about icons' width={100}></img>
                                                <p>{p}</p>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                            :
                            slide.title.toLowerCase().includes('testimonials') ?
                                <Testimonials para={slide.paragraphs}/>
                                :
                                slide.paragraphs.map((p, index ) => (
                                    typeof(p)=='object'? 
                                    <p key={index}><b>{p.bold}</b> {p.normal}</p>  
                                    :  
                                    <p key={index}>{p}</p>
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}