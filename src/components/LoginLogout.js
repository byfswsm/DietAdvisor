import { signInWithGoogle, signOutWithGoogle } from "../database/firebase";
import { Container, Row, Col } from "react-bootstrap";
import { GiSugarCane, GiSlicedBread, GiChipsBag } from 'react-icons/gi'
import {TbMeat} from 'react-icons/tb'
import {AiOutlineFire} from 'react-icons/ai'

const LoginLogout = ({goals}) => {
    const Authenticate = () => {
        if (localStorage.getItem("userName")) {
            signOutWithGoogle()
        } else {
            signInWithGoogle()
        }
    }

    return (
        <Container fluid className="profile-container">
            <Row className="profile-photo-name">
                <div>
                    <img className="profile-photo" src={localStorage.getItem("userPhoto")} referrerpolicy="no-referrer" />
                </div>
                <div style={{fontWeight: "bolder", fontSize: "23px"}}>
                    {localStorage.getItem("userName")}
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span onClick={Authenticate} className="login-logout">{localStorage.getItem("userName") ? "Logout" : "Login"}</span>
                </div>
            </Row>
            <Row className="profile-nutrient-goal square border">
                <Col>Nutrient goal: </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col xs={1}><AiOutlineFire /></Col> 
                            Calories: {goals["Calories"]}
                        </Row>
                        <Row>
                            <Col xs={1}><TbMeat /></Col>
                            Protein (g): {goals["Protein (g)"]}
                        </Row>
                        <Row>
                            <Col xs={1}><GiSlicedBread /></Col>
                            Total Carbohydrates (g): {goals["Total Carbohydrates (g)"]}
                        </Row>
                        <Row>
                            <Col xs={1}><GiSugarCane /></Col>
                            Sugar (g): {goals["Sugar (g)"]}
                        </Row>
                        <Row>
                            <Col xs={1}><GiChipsBag /></Col>
                            Total Fat (g): {goals["Total Fat (g)"]}
                        </Row>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default LoginLogout;