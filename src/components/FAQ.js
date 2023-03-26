import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import '../styles/Main.scss';

function FAQPage() {
    const questionFilter = () => {
        var questionMatch = document.getElementById("searchInput");
        if (questionMatch) {
            var filter = questionMatch.value.toUpperCase();
            var questionElements = document.getElementsByClassName("question");
            for (var i = 0; i < questionElements.length; i++) {
                var h3 = questionElements[i].getElementsByTagName("h3");
                for (var q = 0; q < h3.length; q++) {
                    var a = h3[q];
                    var txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        questionElements[i].style.display = "";
                    } else {
                        questionElements[i].style.display = "none";
                    }
                }
            }
        }
    }
    return (
        <div className='notAnotherDiv'>
            <Container fluid>
                <div className='main-content'>
                    <Row>
                        <div className='searchBox'>
                            <input type="text" id="searchInput" onChange={questionFilter} placeholder="Search through questions..." />
                        </div>
                    </Row>
                    <Row>
                        <h1>You've Got Questions, We've Got Answers</h1>
                    </Row>

                    <Row>
                        <Col>
                            <div className='question'>
                                <h4>What do you do?</h4>
                                <p>
                                    The Invention Group provides inventors with a marketability analysis to determine
                                    whether or not their invention is ready for market. We also assist with matching up
                                    inventors with companies who will manufacture and license their product.
                                </p>
                                <p>We make sure that new ideas are successful.</p>
                            </div>
                            <div className='question'>
                                <h2>More about our services.</h2>
                                <h4>How do I know you won’t steal my invention?</h4>
                                <p>
                                    Let us assure you, our intent is to support you, not steal your idea. Whether you
                                    decide to work with us or another support group, do not submit any ideas until
                                    you’ve signed a Confidentiality Agreement. Find our Confidentiality Agreement here.
                                </p>
                                <p>
                                    We encourage you to check our status with the Better Business Bureau, Wisconsin
                                    Inventors Council and the National Inventor Fraud Center.
                                </p>
                            </div>
                            <div className='question'>
                                <h2>More about our process.</h2>
                                <h4>What is an invention license?</h4>
                                <p>
                                    An invention license allows someone to buy the rights to manufacture and sell your
                                    invention for a profit. Once a license is signed, the inventor receives a percentage of
                                    the total sales from the manufacturer in the form of a monthly check.
                                </p>
                                <p>
                                    The license allows you (the inventor) to make money by giving a manufacturer the
                                    right to produce and sell your product.
                                </p>
                            </div>
                            <div className='question'>
                                <h2>Get started with a free evaluation now.</h2>
                                <h4>Do I need to patent my invention before I contact you?</h4>
                                <p>
                                    No. We will assist you with obtaining a patent. You do not need to have a patent
                                    prior to contacting us.
                                </p>
                            </div>
                            <div className='question'>
                                <h4>What do I do next?</h4>
                                <p>
                                    The next step is to formally submit your invention idea to us through our web site,
                                    by fax or by mail. We’ll evaluate the idea and provide you with a marketability
                                    analysis. If our experts feel that your idea has potential for success, we’ll assist you
                                    with the next step.
                                </p>
                            </div>
                            <div className='question'>
                                <h4>What does this cost?</h4>
                                <p>
                                    We charge a $150 fee to evaluate your product. We’ll return the fee if we don’t feel
                                    your product has potential for success.
                                </p>
                                <p>
                                    If we feel your idea has potential for success, we take 20% of the total profit. You
                                    take 80%.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>


    );
}

export default FAQPage;