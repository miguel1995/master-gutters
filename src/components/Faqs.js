import React, { Component } from 'react'
import { Container, Alert } from 'react-bootstrap';

class Faqs extends Component {
    render() {
        return (

            <div>

                <Container >
                    <h4 style={{ color: '#f4d03f', marginTop: "4rem", marginBottom:"2rem"}}>FREQUENTLY ASKED QUESTIONS</h4>

                    <li>
                        <strong>Why Does My House Need Gutters? </strong>
                        <br/>
                        <br/>

                        <p>To prevent stains or damage on your stone, brick or siding, and to prevent expensive landscaping washing away in the rain.  Foundation damage results in your home settling, causing additional damage in the way of cracked walls, floors and ceilings, and uneven doors.  Investing a relatively small amount now can prevent large expenses in the future.</p>
                    </li>

                    <li>
                        <strong>What size gutters do I need? </strong>
                        <br/>
                        <br/>

                        <p>Gutters are sized according to the roof size.</p>
                        <p><strong>5" K-style</strong> gutters are the residential industry's standard, with a water  collection opening of 4.25” and can hold 2 ½ quarts of water per foot.</p>
                        <p><strong>6" K-style</strong> gutters are used for larger roofs, with a collection opening of 5.25” and a capacity of 4 quarts of water per foot.  Combined with 3x4 inch downspouts described below, 6” gutters will ensure maximum performance.</p>
                        <p>Industry standards recommend a 2x3 inch downspout for a 600 sq. ft. of roof, a 3x4 inch downspout for a  1,200 sq. ft. roof, and 4x5 inch downspout for a 2000 sq. ft. roof. The typical downspout size for a 5” K-style gutter is 2x3 inches; we recommend 3x4 inch – fewer clogs and easier to clean·</p>

                        <Alert key={"warning"} variant={"warning"}>                            <p>Hard surface roofing materials, such as slate and tile require wider gutter.  On steeply-pitched roofs wider gutters are needed to keep the water from shooting over the gutter in a heavy rain·   The same is true of roofs with a longer than standard shingle edge.</p>
                        </Alert>

                    </li>

                    <li>
                        <strong>What is the difference in aluminum gauges? </strong>
                        <br/>
                        <br/>

                        <p>Do-it-yourself stores often sell .019 or .025 gauge, which is too light for gutters.   Medium weight .027 gauge coil is considered the industry standard, builder-grade gutter, and heavy weight .032 gauge aluminum is used for larger gutters, heavy wind areas, extremely long gutter runs, and other times when maximum strength is needed.  .032 gauge gutters last up to two times as long as .027, up to 25 – 30 years.</p>
                    </li>

                    <li>
                        <strong>Why would I choose a Half Round Gutter System? </strong>
                        <br/>
                        <br/>

                        <p>This style is a matter of personal choice – historic areas sometimes require half round and some architects incorporate this style into their plans for aesthetics.</p>
                    </li>

                    <li>
                        <strong>Why are gutters hung with a slope vs. straight across? </strong>
                        <br/>
                        <br/>

                        <p>Gutters need a minimum slope of 1/2 inch for every 40 continuous feet in order for water to reach the downspout properly.</p>
                    </li>

                    <li>
                        <strong>What is galvanic corrosion and how can it be prevented?</strong>
                        <br/>
                        <br/>

                        <p>When two different metals are in contact in the presence of moisture, the stronger metal will cause the weaker metal to corrode. Contact between dissimilar metals should always be avoided, including wash from one to another.</p>
                    </li>

                    <li>
                        <strong>What about vinyl gutter?</strong>
                        <br/>
                        <br/>

                        <p>UV rays deteriorate vinyl gutter causing discoloration, cracking, expansion & contraction, and general deterioration. </p>
                    </li>

                </Container>

            </div>
        )
    }
}

export default Faqs;
