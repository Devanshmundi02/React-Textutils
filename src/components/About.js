import React from 'react'

export default function About(props) {

    // for turning into dark mode
    // const [myStyle, setStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // // when dark mode is turning onn so btn on txt also change that's why
    // const [btntxt, setbtntxt] = useState('Enable Dark Mode')

    // // for toggle to dark mode to light mode and toggle txt too
    // const togglestyle = () => {
    //     if (myStyle.color === 'white') {
    //         setStyle({
    //             color: 'black',
    //             
    //         })
    //         setbtntxt('Enable Light Mode')
    //     }
    //     else {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntxt('Enable Dark Mode')
    //     }
    // }
    return (
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{color: props.mode==='dark'?'white':'#042743',backgroundColor: props.mode==='dark'?'#042743':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'#042743',backgroundColor: props.mode==='dark'?'#042743':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'#042743',backgroundColor: props.mode==='dark'?'#042743':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
